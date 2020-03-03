import {
  noop,
  isPlainObject,
  isReserved,
  hasOwn,
  nativeWatch,
  isServerRendering,
  validateProp,
  bind
} from '../util'
import {
  observe,
  set,
  del,
  observerState,
  defineReactive
} from '../observer'
import Dep, { popTarget, pushTarget } from '../observer/dep'
import Watcher from '../observer/watcher'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy(target, sourceKey, key){
  sharedPropertyDefinition.get = function proxyGetter(){
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val){
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm){
  vm._watchers = []
  const opts = vm.$options
  if(opts.props) initProps(vm, opts.props)
  if(opts.methods) initMethods(vm, opts.methods)
  if(opts.data){
    initData(vm)
  } else {
    observe(vm._data = {}, true)
  }
  if(opts.computed) initComputed(vm, opts.computed)
  if(opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}

function initProps(vm, propsOptions) {
  const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent

  observerState.shouldConvert = isRoot
  for(const key in propsOptions){
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    defineReactive(props, key, value)// 写入到props = vm._props
  }
  if(!(key in vm)){
    proxy(vm, `_props`, key)
  }
}

export function initData(vm){
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  if(!isPlainObject(data)){
    data = {}
  }

  const keys = Object.keys(data)
  const props = vm.$options.props
  let i = keys.length

  while(i--){
    if(props && hasOwn(props, keys[i])){
      // props中已有同名属性
    } else if (!isReserved(keys[i])){

      // 从_data代理到vm
      proxy(vm, '_data', keys[i])
    }
  }
  observe(data, true)
}

function getData(data, vm){
  pushTarget()
  try{
    return data.call(vm)
  } catch(e) {
    console.error(e)
    return {}
  } finally {
    popTarget()
  }
}

const computedWatcherOptions = { lazy: true }

function initComputed(vm, computed){
  const watchers = vm._computedWatchers = Object.create(null)
  const isSSR = isServerRendering()

  for(const key in computed){
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.getter

    if(!isSSR){
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    if(!(key in vm)){
      defineComputed(vm, key, userDef)
    }
  }
}

export function defineComputed(
  target,
  key,
  userDef
){
  const shouleCache = !isServerRendering()
  if(typeof userDef === 'function'){
    sharedPropertyDefinition.get = shouleCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouleCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function createComputedGetter(key){
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if(watcher){
      if(watcher.dirty){
        watcher.evaluate()
      }
      if(Dep.target){
        watcher.depend()
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn){
  return function computedGetter(){
    return fn.call(this, this)
  }
}

/**
 * 初始化methods
 * @param {} vm 
 * @param {*} methods 
 */
function initMethods(vm, methods){
  for(const key in methods){
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
  }
}

/**
 * 初始化watch
 * @param {*} vm 
 * @param {*} watch 
 */
function initWatch(vm, watch){
  for(const key in watch){
    const handler = watch[key]
    if(Array.isArray(handler)){
      for(let i = 0; i < handler.length; i++){
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

/**
 * 调用vm.$watch创建一个watcher
 * @param {*} vm 
 * @param {*} expOrFn 
 * @param {*} handler 
 * @param {*} options 
 */
function createWatcher(
  vm,
  expOrFn,
  handler,
  options
){
  if(isPlainObject(handler)){
    options = handler
    handler = handler.handler
  }
  if(typeof handler === 'string'){
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}

export function stateMixin(Vue){
  const dataDef = {}
  dataDef.get = function(){ return this._data }
  const propsDef = {}
  propsDef.get = function(){ return this.props }

  Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)

  Vue.prototype.$set = set
  Vue.prototype.$delete = del

  Vue.prototype.$watch = function(
    expOrFn,
    cb,
    options
  ){
    const vm = this
    if(isPlainObject(cb)){
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if(options.immediate){
      try {
        cb.call(vm, watcher.value)
      } catch(e){
        console.error(e)
      }
    }
    return function unwatchFn(){
      watcher.teardown()
    }
  }
}