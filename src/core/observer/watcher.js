import {
  noop,
  isObject
} from "../util"
import {
  pushTarget,
  popTarget
} from './dep'

let uid = 0

export default class Watcher {
  constructor(vm, expOrFn, cb, options, isRenderWatcher){
    this.vm = vm
    if(isRenderWatcher){
      vm._watcher = this
    }
    vm._watchers.push(this)
    if(options){
      this.deep = !!options.deep
      this.user = !!options.user
      this.lazy = !!options.lazy
      this.sync = !!options.sync
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.uid = ++uid
    this.active = true
    this.dirty = this.lazy
    this.deps = []
    this.newDeps = []
    this.depsIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
    if(typeof expOrFn === 'function'){
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOfFn)
      if(!this.getter){
        this.getter = noop
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get()
  }
  get(){
    pushTarget(this)// 下面的操作都绑定到这个订阅者
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch(e){
      if(this.user){
        console.error(this.expression)
      } else {
        throw e
      }
    } finally {
      if(this.deep){
        traverse(value)
      }
      popTarget()// 完成这个订阅者的操作
      this.cleanupDeps()
    }
    return value
  }
  // 订阅
  addDep(dep){
    const { id } = dep
    if(!this.newDepIds.has(id)){
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if(!this.depsIds.has(id)){
        // 发布者增加订阅者
        dep.addSub(this)
      }
    }
  }
  cleanupDeps(){
    // 更新依赖
    let i = this.deps.length
    while(i--){
      const dep = this.deps[i]
      if(this.newDepIds.has(dep.id)){
        dep.removeSub(this)
      }
    }
    let tmp = this.depsIds
    this.depsIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()

    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }
  update(){
    if(this.lazy){
      this.dirty = true
    } else if(this.sync){
      this.run()
    } else {
      queueWatcher(this)
    }
  }
  run(){
    if(this.active){
      const value = this.get()
      if(
        value !== this.value ||
        isObject(value) ||
        this.deep
      ) {
        const oldValue = this.value
        this.value = value
        if(this.user){
          try{
            this.cb.call(this.vm, value, oldValue)
          } catch(e){
            console.error(e)
          }
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }
  // 给lazy用的更新方法
  evaluate(){
    this.value = this.get()
    this.dirty = false
  }
  // 与发布者绑定依赖关系
  depend(){
    let i = this.deps.length
    while(i--){
      this.deps[i].depend()
    }
  }
  teardown(){
    if(this.active){
      if(!this.vm._isBeingDestroyed){
        remove(this.vm._watchers, this)
      }
      let i = this.deps.length
      while(i--){
        this.deps[i].removeSub(this)
      }
      this.active = false
    }
  }
}