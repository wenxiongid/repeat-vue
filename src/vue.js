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

export default class Vue {
  constructor(options){
    this._data = options.data
    observe(this._data, options.render)
  }
}