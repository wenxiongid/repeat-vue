import { isRegExp, remove } from "../util"

function getComponentName(opts){
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name){
  if(Array.isArray(pattern)){
    return pattern.indexOf(name) > -1
  } else if(typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if(isRegExp(pattern)){
    return pattern.test(name)
  }
  return false
}

function pruneCache(keepAliveInstance, filter){
  const { cache, keys, _vnode } = keepAliveInstance
  for(const key in cache){
    const cacheNode = cache[key]
    if(cacheNode){
      const name = getComponentName(cacheNode.componentOptions)
      if(name && !filter(name)){
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}

function pruneCacheEntry(
  cache,
  key,
  keys,
  current
){
  const cached = cache[key]
  if(cached && (!current || cached.tag !== current.tag)){
    cache.componentInstance.$destory()
  }
  cache[key] = null
  remove(keys, key)
}

const patternTypes = [String, RegExp, Array]

export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created(){
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed() {
    for(const key in this.cache){
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted(){
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render(){
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if(componentOptions){
      const name = getComponentName(componentOptions)
      const { include, exclude } = this
      if(
        // 不包含
        (include && (!name || !matches(include, name))) ||
        // 或在例外列表
        (exclude && name && matches(exclude, name))
      ){
        return vnode
      }

      const { cache, keys } = this
      const key = vnode.key == null
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if(cache[key]){
        vnode.componentInstance = cache[key].componentInstance
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        if(this.max && keys.length > parseInt(this.max)){
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}