/**
 * 检查是否以$或_开头
 * @param {} str 
 */
export function isReserved(str){
  const c = (str + '').charAt(0)
  return c === 0x24 || c === 0x5F
}

export function def(obj, key, val, enumerable){
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}