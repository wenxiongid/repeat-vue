import Dep from './dep'
import Watcher from './watcher'

function observe(value){
  Object.keys(value).forEach(key => defineReactive(value, key, value[key]))
}

function defineReactive(obj, key, val){
  // 对应data每一个key创建一个依赖列表
  const dep = new Dep()
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      // 每调用一次取值，取值的对象有watcher的，增加一个依赖
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return val
    },
    set: newVal => {
      val = newVal
      // 对每个依赖提醒
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
    observe(this._data)
    let watcher = new Watcher(this, null, options.render.bind(this))
  }
}

Dep.target = null