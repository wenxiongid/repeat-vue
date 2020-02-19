import config from '../config'

const strats = config.optionMergeStrategies

export function mergeOptions(
  parent,
  child,
  vm
){
  if(typeof child === 'function'){
    child = child.options
  }
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)
  const extendsFrom = child.extends
  if(extendsFrom){
    parent = mergeOptions(parent, extendsFrom, vm)
  }
  if(child.mixins){
    for(let i = 0, l = child.mixins.length; i < l; i++){
      parent = mergeOptions(parent, child.mixins[i], vm)
    }
  }
  const options = {}
  let key
  for(key in parent){
    mergeField(key)
  }
  function mergeField(key){
    const strat = strats[key]
  }
}