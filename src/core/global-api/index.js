import config from "../config"

import builtInComponents from '../components'

import { initUse } from './use'

import {
  extend,
  mergeOptions,
  defineReactive,
  nextTick
} from '../util'
import { set, del } from "../observer"
import { ASSET_TYPES } from "../../shared/constants"
import { initMixin } from "../instance/init"

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
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)

  initUse(Vue)
  initMixin(Vue)
}