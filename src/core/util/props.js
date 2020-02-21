import { hasOwn } from "../../shared/util"
import { observerState, observe } from "../observer"

export function validateProp(
  key,
  propsOptions,
  propsData,
  vm
) {
  const prop = propsOptions[key]
  const absent = !hasOwn(propsData, key)
  let value = propsData[key]// 传入的props值
  if(isType(Boolean, prop.type)){
    if(absent && !hasOwn(prop, 'default')){
      value = false
    } else if(!isType(String, prop.type) && (value === '' || value === hyphenate(key))){
      value = true
    }
  }
  if(value === undefined){
    value = getPropDefaultValue(vm, prop, key)
    const prevShouldConvert = observerState.shouldConvert
    observerState.shouldConvert = true
    observe(value)
    observerState.shouldConvert = prevShouldConvert
  }

  return value
}

function getPropDefaultValue(vm, prop, key){
  if(!hasOwn(prop, 'default')){
    return undefined
  }
  const def = prop.default
  if(vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

function getType(fn){
  const match = fn && fn.toString().match(/^\sfunction (\w+)/)
  return match ? match[1] : ''
}

function isType(type, fn){
  if(!Array.isArray(fn)){
    return getType(fn) === getType(type)
  }
  for(let i = 0, len = fn.length; i < len; i++){
    if(getType(fn[i]) === getType(type)){
      return true
    }
  }
  return false
}