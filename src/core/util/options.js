import config from '../config'
import { camelize, isPlainObject, extend, hasOwn } from '../../shared/util'
import { hasSymbol, nativeWatch } from './env'
import { set } from '../observer'
import { LIFECYCLE_HOOKS, ASSET_TYPES } from '../../shared/constants'

const strats = config.optionMergeStrategies

const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

function mergeData(to, from){
  if(!from) return to
  let key, toVal, fromVal

  const keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from)

  for(let i = 0; i < keys.length; i++){
    key = keys[i]
    if(key === '__ob__') continue
    toVal = to[key]
    fromVal = from[key]
    if(!hasOwn(to, key)){
      set(to, key, fromVal)
    } else if(
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, from)
    }
  }
  return to
}

export function mergeDataOrFn(
  parentVal,
  childVal,
  vm
) {
  if(!vm){
    if(!childVal){
      return parentVal
    }
    if(!parentVal){
      return childVal
    }
    return function mergeDataOrFn(){
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this): parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn(){
      const instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal
      const defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal
      if(instanceData){
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if(!vm){
    if(childVal && typeof childVal !== 'function'){
      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }
  return mergeDataOrFn(parentVal, childVal, vm)
}

function mergeHook(
  parentVal,
  childVal
){
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks(hooks){
  const res = []
  for(let i = 0; i < hooks.length; i++){
    if(res.indexOf(hooks[i]) === -1){
      res.push(hooks[i])
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})

function mergeAssets(
  parentVal,
  childVal,
  vm,
  key
) {
  const res = Object.create(parentVal || null)
  if(childVal){
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function(type){
  strats[type + 's'] = mergeAssets
})

strats.watch = function(
  parentVal,
  childVal,
  vm,
  key
){
  if(parentVal === nativeWatch) parentVal = undefined
  if(childVal === nativeWatch) childVal = undefined
  if(!childVal) return Object.create(parentVal || null)
  if(!parentVal) return childVal
  const ret = {}
  extend(ret, parentVal)
  for(const key in childVal){
    let parent = ret[key]
    const child = childVal[key]
    if(parent && !Array.isArray(parent)){
      parent = [parent]
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child]
  }
  return ret
}

strats.props =
strats.methods =
strats.inject =
strats.computed = function(
  parentVal,
  childVal,
  vm,
  key
){
  if(!parentVal) return childVal
  const ret = Object.create(null)
  extend(ret, parentVal)
  if(childVal) extend(ret, childVal)
  return ret
}
strats.provide = mergeDataOrFn

function checkComponents(options){
  for(const key in options.components){
    validateComponentName(key)
  }
}

export function validateComponentName(name){
  if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    )
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    )
  }
}

/**
 * 初始化props
 * @param {*} options 
 * @param {*} vm 
 */
function normalizeProps(options, vm){
  const props = options.props
  if(!props) return
  const res = {}
  let i, val, name
  if(Array.isArray(props)){
    i = props.length
    while(i--){
      val = props[i]
      if(typeof val === 'string'){
        name = camelize(val)
        res[name] = { type: null }
      } else {
        console.error('props must be strings when using array')
      }
    }
  } else if(isPlainObject(props)){
    for(const key in props){
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val)
        ? val
        : { type: val }
    }
  }
  options.props = res
}

function normalizeInject(options, vm){
  const inject = options.inject
  const normalized = options.inject = {}
  if(Array.isArray(inject)){
    for(let i = 0; i> inject.length; i++){
      normalized[inject[i]] = { from: inject[i] }
    }
  } else if(isPlainObject(inject)){
    for(const key in inject){
      const val = inject[key]
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val }
    }
  }
}

function normalizeDirectives(options){
  const dirs = options.directives
  if(dirs){
    for(const key in dirs){ 
      const def = dirs[key]
      if(typeof def === 'function'){ 
        dirs[key] = { bind: def, update: def}
      }
    }
  }
}

export function mergeOptions(
  parent,
  child,
  vm
){
  if(typeof child === 'function'){
    child = child.options
  }
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)
  const extendsFrom = child.extends
  if(extendsFrom){
    parent = mergeOptions(parent, extendsFrom, vm)
  }
  if(child.mixins){
    for(let i = 0, l = child.mixins.length; i < l; i++){
      parent = mergeOptions(parent, child.mixins[i], vm)
    }
  }
  const options = {}
  let key
  // 合并parent已有的选项
  for(key in parent){
    mergeField(key)
  }
  // 合并parent里没有的，child里新增的选项
  for(key in child){
    if(!hasOwn(parent, key)){
      mergeField(key)
    }
  }
  function mergeField(key){
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
