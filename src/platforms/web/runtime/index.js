import Vue from '../../../core'
import { mustUseProp, isReservedTag, isReservedAttr, getTagNamespace, isUnknownElement } from '../util'
import { extend } from '../../../shared/util'

import platformDirectives from './directives'

Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isReservedAttr = isReservedAttr
Vue.config.getTagNamespace = getTagNamespace
Vue.config.isUnknownElement = isUnknownElement

extend(Vue.options.directives, platformDirectives)

export default Vue