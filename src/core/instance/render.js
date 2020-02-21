import { emptyObject } from "../util"
import { defineReactive } from "../observer"

export function initRender(vm){
  vm._vnode = null//组件的根节点
  vm._staticTrees = null
  const options = vm.$options
  const parentVnode = vm.$vnode = options._parentVnode// 夫节点中的占位，根节点插入位置
  const renderContext = parentVnode && parentVnode.context
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  vm.$scopedSlots = emptyObject
  // tag, data, children, normalizationType, alwaysNormalize
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

  const parentData = parentVnode && parentVnode.data

  defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
  defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
}