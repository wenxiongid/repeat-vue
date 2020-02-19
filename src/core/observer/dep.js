import config from '../config'
import {
  remove
} from '../util'

let uid = 0

export default class Dep {
  constructor(){
    this.id = uid++
    // sub = subscriber 订阅者
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }
  removeSub(sub){
    remove(this.subs, sub)
  }
  depend(){
    if(Dep.target){
      // 当前的订阅者增加这个发布者
      Dep.target.addDep(this)
    }
  }
  notify(){
    const subs = this.subs.slice()
    if(process.env.NODE_ENV !== 'production' && !config.async){
      subs.sort((a, b) => a.id - b.id)
    }
    console.log(this.key, 'dep notify', subs)
    for(let i = 0, l = subs.length; i < l; i++){
      subs[i].update()
    }
  }

}

Dep.target = null
const targetStack = []

export function pushTarget(target){
  targetStack.push(target)
  Dep.target = target
}

export function popTarget(){
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}