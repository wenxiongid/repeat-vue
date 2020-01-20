import {
  noop,
  isPlainObject,
  isReserved,
  hasOwn,
  nativeWatch
} from '../util'
import {
  observe,
  set,
  del
} from '../observer'
import { popTarget, pushTarget } from '../observer/dep'
import Watcher from '../observer/watcher'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

function proxy(target, sourceKey, key){
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