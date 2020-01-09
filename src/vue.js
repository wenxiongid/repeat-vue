import Dep from './dep'
import Watcher from './watcher'

function observe(value, cb){
  Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}

function defineReactive(obj, key, val, cb){
  const dep = new Dep()
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return val
    },
    set: newVal => {
      val = newVal
      dep.notify()
    }
  })
}

function _proxy(data){
  const _this = this
  Object.keys(data).forEach(key => {
    Object.defineProperty(_this, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter(){
        return _this._data[key]
      },
      set: function proxySetter(val){
        _this._data[key] = val
      }
    })
  })
}

export default class Vue {
  constructor(options){
    this._data = options.data
    _proxy.call(this, options.data)
    observe(this._data, options.render.bind(this))
    let watcher = new Watcher(this, null, options.render.bind(this))
  }
}

Dep.target = null