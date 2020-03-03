import Vue from '../../../core'
import { mustUseProp, isReservedTag, isReservedAttr, getTagNamespace } from '../util'

Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isReservedAttr = isReservedAttr
Vue.config.getTagNamespace = getTagNamespace
Vue.config.isUnknownElement

export default Vue