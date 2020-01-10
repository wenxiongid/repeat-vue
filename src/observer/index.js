import {
  hasOwn,
  def,
  hasProto
} from "../utils"
import {
  arrayMethods
} from './array'
import Dep from './dep'

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

class Observer {
  constructor(value){
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0

    def(value, '__ob__', this)
    if(Array.isArray(value)){
      if(hasProto){
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  walk(obj){
    const keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
  observeArray(items){
    for(let i = 0, l = items.length; i < l; i++){
      observe(items[i])
    }
  }
}

export function observe(value, asRootData){
  if(!isObject(value)){
    return
  }
  let ob
  if(hasOwn(value, '__ob__') && value.__ob__ instanceof Observer){
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  if(asRootData && ob){
    ob.vmCount++
  }
  return ob
}

function defineReactive(obj, key, val, customSetter, shallow){
  // 对应data每一个key创建一个发布者
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if(property && property.configurable === false){
    return
  }

  const getter = property && property.get
  const setter = property && property.set
  if((!getter || setter) && arguments.length === 2){
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      // 每调用一次取值，取值的对象有watcher的，增加一个依赖
      if(Dep.target){
        dep.depend()
        if(childOb) {
          childOb.dep.depend()
          if(Array.isArray(value)){
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val
      // 值相等就不更新了
      if(newVal === value || (newVal !== newVal && value !== value)){
        return
      }
      if(getter && !setter){
        return
      }
      if(setter){
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      // 对每个依赖提醒
      dep.notify()
    }
  })
}

function protoAugment (target, src) {
  target.__proto__ = src
}

function copyAugment (target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}