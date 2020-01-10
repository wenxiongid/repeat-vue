export const hasProto = '__proto__' in {}

export function noop(){}

export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isReserved (str) {
  const c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}

const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn(obj, key){
  return hasOwnProperty.call(obj, key)
}

export function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}