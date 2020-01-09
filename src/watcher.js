import Dep from './dep'

export default class Watcher {
  constructor(vm, expOrFn, cb, options){
    this.cb = cb
    this.vm = vm

    Dep.target = this
    this.cb && this.cb.call(this.vm)
  }
  update(){
    this.cb && this.cb.call(this.vm)
  }
}