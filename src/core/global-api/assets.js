import { ASSET_TYPES } from "../../shared/constants";
import { isPlainObject } from "../util";

export function initAssetResisters(Vue){
  ASSET_TYPES.forEach(type => {
    Vue[type] = function(
      id,
      definition
    ) {
      if(!definition){
        // get
        return this.options[type + 's'][id]
      } else {
        // set
        if(type === 'component' && isPlainObject(definition)){
          definition.name = definition.name || id
          definition = this.options._base.extend(definition)
        }
        if(type === 'directive' && typeof definition === 'function'){
          definition = { bind: definition, update: definition}
        }
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}