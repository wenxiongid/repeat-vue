import {
  initState,
} from './state'
import {
  mergeOptions
} from '../util'

let uid = 0

export function initMixin(Vue){
  Vue.prototype._init = function (options) {
    const vm = this
    vm._uid = uid++

    vm._isVue = true
    if(options && options._isComponent){
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    vm._self = vm
    initState(vm)
    if(vm.$options.el){
      vm.$mount(vm.$options.el)
    }
  }
}

export function resolveConstructorOptions(Ctor){
  let options = Ctor.options
  if(Ctor.super){
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cachedSuperOptions = Ctor.superOptions
    if(superOptions !== cachedSuperOptions){
      Ctor.superOptions = superOptions
      const modifiedOptions = resolveModifiedOptions(Ctor)
      if(modifiedOptions){
        extend(Ctor.extendOptions, modifiedOptions)
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if(options.name){
        options.components[options.name] = ctor
      }
    }
  }
  return options
}

function resolveModifiedOptions(Ctor){
  let modified
  const latest = Ctor.options
  const sealed = Ctor.sealedOptions
  for(const key in latest){
    if(latest[key] !== sealed[key]){
      if(!modified) modified[key] = {}
      modified[key] = latest[key]
    }
  }
  return modified
}