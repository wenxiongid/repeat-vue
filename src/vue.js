function observe(value, cb){
  Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}

function defineReactive(obj, key, val, cb){
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      return val
    },
    set: newVal => {
      val = newVal
      cb()
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
  }
}