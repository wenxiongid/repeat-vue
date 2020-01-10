import {
  noop,
  isPlainObject,
  isReserved,
  hasOwn
} from './utils'
import {
  observe
} from './observer'

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

function initData(vm){
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
    } else if (!isReserved(key[i])){

      // 从_data代理到vm
      proxy(vm, '_data', keys[i])
    }
  }
  observe(data, true)
}

function getData(data, vm){
  try{
    return data.call(vm)
  } catch(e) {
    console.error(e)
    return {}
  }
}