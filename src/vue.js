import { initData } from './core/instance/state'
import Watcher from './core/observer/watcher'

export default class Vue {
  constructor(options){
    this.$options = options
    this._watchers = []
    initData(this)
    const renderWatcher = new Watcher(this, this.$options.render, this.$options.render, {
      sync: true
    }, true)
  }
}
