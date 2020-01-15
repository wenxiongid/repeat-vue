export const hasProto = '__proto__' in {}
const _toString = Object.prototype.toString

export function noop(){}
export const no = () => false
/**
 * Return the same value.
 */
export const identity = (_) => _

export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isReserved (str) {
  const c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
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

/**
 * Remove an item from an array.
 */
export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}