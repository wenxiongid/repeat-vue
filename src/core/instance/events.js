
let target

export function initEvents(vm){
  vm._events = Object.create(null)
  vm._hasHookEvent = false

  const listeners = vm.$options._parentListeners
  if(listeners){
    updateComponentListeners(vm, listeners)
  }
}

function add(event, fn){
  target.$on(event, fn)
}

function remove(event, fn){
  target.$off(event, fn)
}

function createOnceHandler(event, fn){
  const _target = target
  return function onceHandler(){
    const res = fn.apply(null, arguments)
    if(res !== null){
      _target.$off(event, fn)
    }
  }
}

function updateComponentListeners(
  vm,
  listeners,
  oldListeners
){
  target = vm
  updateListeners(listeners, oldListeners || {}, add, remove, createOnceHandler, vm)
  target = undefined
}