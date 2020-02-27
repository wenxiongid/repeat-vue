import config from '../config'
import { camelize, isPlainObject, extend } from '../../shared/util'

const strats = config.optionMergeStrategies

/**
 * 初始化props
 * @param {*} options 
 * @param {*} vm 
 */
function normalizeProps(options, vm){
  const props = options.props
  if(!props) return
  const res = {}
  let i, val, name
  if(Array.isArray(props)){
    i = props.length
    while(i--){
      val = props[i]
      if(typeof val === 'string'){
        name = camelize(val)
        res[name] = { type: null }
      } else {
        console.error('props must be strings when using array')
      }
    }
  } else if(isPlainObject(props)){
    for(const key in props){
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val)
        ? val
        : { type: val }
    }
  }
  options.props = res
}

function normalizeInject(options, vm){
  const inject = options.inject
  const normalized = options.inject = {}
  if(Array.isArray(inject)){
    for(let i = 0; i> inject.length; i++){
      normalized[inject[i]] = { from: inject[i] }
    }
  } else if(isPlainObject(inject)){
    for(const key in inject){
      const val = inject[key]
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val }
    }
  }
}

function normalizeDirectives(options){
  const dirs = options.directives
  if(dirs){
    for(const key in dirs){ 
      const def = dirs[key]
      if(typeof def === 'function'){ 
        dirs[key] = { bind: def, update: def}
      }
    }
  }
}

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

export function validateComponentName(name){
  if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    )
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    )
  }
}