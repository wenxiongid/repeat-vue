import config from "../config"

import {
  extend,
  mergeOptions,
  defineReactive
} from '../util'
import { set, del } from "../observer"

export function initGlobalAPI(Vue){
  const configDef = {}
  configDef.get = () => config
  Object.defineProperty(Vue, 'config', configDef)

  Vue.util = {
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  Vue.options = Object.create(null)
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)
}