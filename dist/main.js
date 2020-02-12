/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/utils */ \"./src/shared/utils.js\");\n/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants */ \"./src/shared/constants.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Option merge strategies (used in core/util/options)\n   */\n  // $flow-disable-line\n  optionMergeStrategies: Object.create(null),\n\n  /**\n   * Whether to suppress warnings.\n   */\n  silent: false,\n\n  /**\n   * Show production mode tip message on boot?\n   */\n  productionTip: \"development\" !== 'production',\n\n  /**\n   * Whether to enable devtools\n   */\n  devtools: \"development\" !== 'production',\n\n  /**\n   * Whether to record perf\n   */\n  performance: false,\n\n  /**\n   * Error handler for watcher errors\n   */\n  errorHandler: null,\n\n  /**\n   * Warn handler for watcher warns\n   */\n  warnHandler: null,\n\n  /**\n   * Ignore certain custom elements\n   */\n  ignoredElements: [],\n\n  /**\n   * Custom user key aliases for v-on\n   */\n  // $flow-disable-line\n  keyCodes: Object.create(null),\n\n  /**\n   * Check if a tag is reserved so that it cannot be registered as a\n   * component. This is platform-dependent and may be overwritten.\n   */\n  isReservedTag: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"no\"],\n\n  /**\n   * Check if an attribute is reserved so that it cannot be used as a component\n   * prop. This is platform-dependent and may be overwritten.\n   */\n  isReservedAttr: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"no\"],\n\n  /**\n   * Check if a tag is an unknown element.\n   * Platform-dependent.\n   */\n  isUnknownElement: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"no\"],\n\n  /**\n   * Get the namespace of an element\n   */\n  getTagNamespace: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\n  /**\n   * Parse the real tag name for the specific platform.\n   */\n  parsePlatformTagName: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"identity\"],\n\n  /**\n   * Check if an attribute must be bound using property, e.g. value\n   * Platform-dependent.\n   */\n  mustUseProp: _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"no\"],\n\n  /**\n   * Perform updates asynchronously. Intended to be used by Vue Test Utils\n   * This will significantly reduce performance if set to false.\n   */\n  async: true,\n\n  /**\n   * Exposed for legacy reasons\n   */\n  _lifecycleHooks: _shared_constants__WEBPACK_IMPORTED_MODULE_1__[\"LIFECYCLE_HOOKS\"]\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/core/instance/index.js":
/*!************************************!*\
  !*** ./src/core/instance/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/core/instance/init.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/core/instance/state.js\");\n\n\n\nfunction Vue(options){\n  this._init(options)\n}\n\nObject(_init__WEBPACK_IMPORTED_MODULE_0__[\"initMixin\"])(Vue)\nObject(_state__WEBPACK_IMPORTED_MODULE_1__[\"stateMixin\"])(Vue)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n//# sourceURL=webpack:///./src/core/instance/index.js?");

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: initMixin, resolveConstructorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMixin\", function() { return initMixin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveConstructorOptions\", function() { return resolveConstructorOptions; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/core/instance/state.js\");\n\n\nlet uid = 0\n\nfunction initMixin(Vue){\n  Vue.prototype._init = function (options) {\n    const vm = this\n    vm._uid = uid++\n\n    vm._isVue = true\n    vm.$options = options\n    vm._self = vm\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"initState\"])(vm)\n    if(vm.$options.el){\n      vm.$mount(vm.$options.el)\n    }\n  }\n}\n\nfunction resolveConstructorOptions(Ctor){\n  let options = Ctor.options\n  if(Ctor.super){\n    const superOptions = resolveConstructorOptions(Ctor.super)\n    const cachedSuperOptions = Ctor.superOptions\n    if(superOptions !== cachedSuperOptions){\n      Ctor.superOptions = superOptions\n      const modifiedOptions = resolveModifiedOptions(Ctor)\n      if(modifiedOptions){\n        extend(Ctor.extendOptions, modifiedOptions)\n      }\n      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)\n      if(options.name){\n        options.components[options.name] = ctor\n      }\n    }\n  }\n  return options\n}\n\nfunction resolveModifiedOptions(Ctor){\n  let modified\n  const latest = Ctor.options\n  const sealed = Ctor.sealedOptions\n  for(const key in latest){\n    if(latest[key] !== sealed[key]){\n      if(!modified) modified[key] = {}\n      modified[key] = latest[key]\n    }\n  }\n  return modified\n}\n\n//# sourceURL=webpack:///./src/core/instance/init.js?");

/***/ }),

/***/ "./src/core/instance/state.js":
/*!************************************!*\
  !*** ./src/core/instance/state.js ***!
  \************************************/
/*! exports provided: initState, initData, defineComputed, stateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initState\", function() { return initState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initData\", function() { return initData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineComputed\", function() { return defineComputed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stateMixin\", function() { return stateMixin; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/core/util/index.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer */ \"./src/core/observer/index.js\");\n/* harmony import */ var _observer_dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer/dep */ \"./src/core/observer/dep.js\");\n/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer/watcher */ \"./src/core/observer/watcher.js\");\n\n\n\n\n\nconst sharedPropertyDefinition = {\n  enumerable: true,\n  configurable: true,\n  get: _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n  set: _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n}\n\nfunction proxy(target, sourceKey, key){\n  sharedPropertyDefinition.get = function proxyGetter(){\n    return this[sourceKey][key]\n  }\n  sharedPropertyDefinition.set = function proxySetter(val){\n    this[sourceKey][key] = val\n  }\n  Object.defineProperty(target, key, sharedPropertyDefinition)\n}\n\nfunction initState(vm){\n  vm._watchers = []\n  const opts = vm.$options\n  if(opts.props) initProps(vm, opts.props)\n  if(opts.methods) initMethods(vm, opts.methods)\n  if(opts.data){\n    initData(vm)\n  } else {\n    Object(_observer__WEBPACK_IMPORTED_MODULE_1__[\"observe\"])(vm._data = {}, true)\n  }\n  if(opts.computed) initComputed(vm, opts.computed)\n  if(opts.watch && opts.watch !== _util__WEBPACK_IMPORTED_MODULE_0__[\"nativeWatch\"]) {\n    initWatch(vm, opts.watch)\n  }\n}\n\nfunction initData(vm){\n  let data = vm.$options.data\n  data = vm._data = typeof data === 'function'\n    ? getData(data, vm)\n    : data || {}\n  if(!Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(data)){\n    data = {}\n  }\n\n  const keys = Object.keys(data)\n  const props = vm.$options.props\n  let i = keys.length\n\n  while(i--){\n    if(props && Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(props, keys[i])){\n      // props中已有同名属性\n    } else if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isReserved\"])(keys[i])){\n\n      // 从_data代理到vm\n      proxy(vm, '_data', keys[i])\n    }\n  }\n  Object(_observer__WEBPACK_IMPORTED_MODULE_1__[\"observe\"])(data, true)\n}\n\nfunction getData(data, vm){\n  Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__[\"pushTarget\"])()\n  try{\n    return data.call(vm)\n  } catch(e) {\n    console.error(e)\n    return {}\n  } finally {\n    Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__[\"popTarget\"])()\n  }\n}\n\nconst computedWatcherOptions = { lazy: true }\n\nfunction initComputed(vm, computed){\n  const watchers = vm._computedWatchers = Object.create(null)\n  const isSSR = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isServerRendering\"])()\n\n  for(const key in computed){\n    const userDef = computed[key]\n    const getter = typeof userDef === 'function' ? userDef : userDef.getter\n\n    if(!isSSR){\n      watchers[key] = new _observer_watcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        vm,\n        getter || _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n        computedWatcherOptions\n      )\n    }\n\n    if(!key in vm){\n      defineComputed(vm, key, userDef)\n    }\n  }\n}\n\nfunction defineComputed(\n  target,\n  key,\n  userDef\n){\n  const shouleCache = !Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isServerRendering\"])()\n  if(!typeof userDef === 'function'){\n    sharedPropertyDefinition.get = shouleCache\n      ? createComputedGetter(key)\n      : createGetterInvoker(userDef)\n    sharedPropertyDefinition.set = _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n  } else {\n    sharedPropertyDefinition.get = userDef.get\n      ? shouleCache && userDef.cache !== false\n        ? createComputedGetter(key)\n        : createGetterInvoker(userDef.get)\n      : _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n    sharedPropertyDefinition.set = userDef.set || _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n  }\n  Object.defineProperty(target, key, sharedPropertyDefinition)\n}\n\nfunction createComputedGetter(key){\n  return function computedGetter() {\n    const watcher = this._computedWatchers && this._computedWatchers[key]\n    if(watcher){\n      if(watcher.dirty){\n        watcher.evaluate()\n      }\n      if(_observer_dep__WEBPACK_IMPORTED_MODULE_2__[\"default\"].target){\n        watcher.depend()\n      }\n      return watcher.value\n    }\n  }\n}\n\nfunction createGetterInvoker(fn){\n  return function computedGetter(){\n    return fn.call(this, this)\n  }\n}\n\nfunction createWatcher(\n  vm,\n  expOrFn,\n  handler,\n  options\n){\n  if(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(handler)){\n    options = handler\n    handler = handler.handler\n  }\n  if(typeof handler === 'string'){\n    handler = vm[handler]\n  }\n  return vm.$watch(expOrFn, handler, options)\n}\n\nfunction stateMixin(Vue){\n  const dataDef = {}\n  dataDef.get = function(){ return this._data }\n  const propsDef = {}\n  propsDef.get = function(){ return this.props }\n\n  Object.defineProperty(Vue.prototype, '$data', dataDef)\n  Object.defineProperty(Vue.prototype, '$props', propsDef)\n\n  Vue.prototype.$set = _observer__WEBPACK_IMPORTED_MODULE_1__[\"set\"]\n  Vue.prototype.$delete = _observer__WEBPACK_IMPORTED_MODULE_1__[\"del\"]\n\n  Vue.prototype.$watch = function(\n    expOrFn,\n    cb,\n    options\n  ){\n    const vm = this\n    if(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(cb)){\n      return createWatcher(vm, expOrFn, cb, options)\n    }\n    options = options || {}\n    options.user = true\n    const watcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"](vm, expOrFn, cb, options)\n    if(options.immediate){\n      try {\n        cb.call(vm, watcher.value)\n      } catch(e){\n        console.error(e)\n      }\n    }\n    return function unwatchFn(){\n      watcher.teardown()\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/core/instance/state.js?");

/***/ }),

/***/ "./src/core/observer/array.js":
/*!************************************!*\
  !*** ./src/core/observer/array.js ***!
  \************************************/
/*! exports provided: arrayMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayMethods\", function() { return arrayMethods; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ..//util */ \"./src/core/util/index.js\");\n\n\nconst arrayProto = Array.prototype\nconst arrayMethods = Object.create(arrayProto)\n\nconst methodsToPatch = [\n  'push',\n  'pop',\n  'shift',\n  'unshift',\n  'splice',\n  'sort',\n  'reverse'\n]\n\nmethodsToPatch.forEach(function(method){\n  const original = arrayProto[method]\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"def\"])(arrayMethods, method, function mutator(...args){\n    const result = original.apply(this, args)\n    const ob = this.__ob__\n    let inserted\n    switch(method){\n      case 'push':\n      case 'unshift':\n        inserted = args\n        break\n      case 'splice':\n        inserted = args.slice(2)\n        break\n    }\n    if(inserted){\n      ob.observeArray(inserted)\n    }\n    ob.dep.notify()\n    return result\n  })\n})\n\n//# sourceURL=webpack:///./src/core/observer/array.js?");

/***/ }),

/***/ "./src/core/observer/dep.js":
/*!**********************************!*\
  !*** ./src/core/observer/dep.js ***!
  \**********************************/
/*! exports provided: default, pushTarget, popTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dep; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushTarget\", function() { return pushTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popTarget\", function() { return popTarget; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/core/util/index.js\");\n\n\n\nlet uid = 0\n\nclass Dep {\n  constructor(){\n    this.id = uid++\n    // sub = subscriber 订阅者\n    this.subs = []\n  }\n  addSub(sub){\n    this.subs.push(sub)\n  }\n  removeSub(sub){\n    Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(this.subs, sub)\n  }\n  depend(){\n    if(Dep.target){\n      // 当前的订阅者增加这个发布者\n      Dep.target.addDep(this)\n    }\n  }\n  notify(){\n    const subs = this.subs.slice()\n    if( true && !_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].async){\n      subs.sort((a, b) => a.id - b.id)\n    }\n    console.log(this.key, 'dep notify', subs)\n    for(let i = 0, l = subs.length; i < l; i++){\n      subs[i].update()\n    }\n  }\n\n}\n\nDep.target = null\nconst targetStack = []\n\nfunction pushTarget(target){\n  targetStack.push(target)\n  Dep.target = target\n}\n\nfunction popTarget(){\n  targetStack.pop()\n  Dep.target = targetStack[targetStack.length - 1]\n}\n\n//# sourceURL=webpack:///./src/core/observer/dep.js?");

/***/ }),

/***/ "./src/core/observer/index.js":
/*!************************************!*\
  !*** ./src/core/observer/index.js ***!
  \************************************/
/*! exports provided: observe, set, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return observe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/core/util/index.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./src/core/observer/array.js\");\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\n\n\nconst arrayKeys = Object.getOwnPropertyNames(_array__WEBPACK_IMPORTED_MODULE_1__[\"arrayMethods\"])\n\nclass Observer {\n  constructor(value){\n    this.value = value\n    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n    this.vmCount = 0\n\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"def\"])(value, '__ob__', this)\n    if(Array.isArray(value)){\n      if(_util__WEBPACK_IMPORTED_MODULE_0__[\"hasProto\"]){\n        protoAugment(value, _array__WEBPACK_IMPORTED_MODULE_1__[\"arrayMethods\"])\n      } else {\n        copyAugment(value, _array__WEBPACK_IMPORTED_MODULE_1__[\"arrayMethods\"], arrayKeys)\n      }\n      this.observeArray(value)\n    } else {\n      this.walk(value)\n    }\n  }\n  walk(obj){\n    const keys = Object.keys(obj)\n    for(let i = 0; i < keys.length; i++){\n      defineReactive(obj, keys[i], obj[keys[i]])\n    }\n  }\n  observeArray(items){\n    for(let i = 0, l = items.length; i < l; i++){\n      observe(items[i])\n    }\n  }\n}\n\nfunction observe(value, asRootData){\n  if(!Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(value)){\n    return\n  }\n  let ob\n  if(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(value, '__ob__') && value.__ob__ instanceof Observer){\n    ob = value.__ob__\n  } else {\n    ob = new Observer(value)\n  }\n  if(asRootData && ob){\n    ob.vmCount++\n  }\n  return ob\n}\n\nfunction defineReactive(obj, key, val, customSetter, shallow){\n  // 对应data每一个key创建一个发布者\n  const dep = new _dep__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n  dep.key = key\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if(property && property.configurable === false){\n    return\n  }\n\n  const getter = property && property.get\n  const setter = property && property.set\n  if((!getter || setter) && arguments.length === 2){\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      const value = getter ? getter.call(obj) : val\n      // 每调用一次取值，取值的对象有watcher的，增加一个依赖\n      if(_dep__WEBPACK_IMPORTED_MODULE_2__[\"default\"].target){\n        dep.depend()\n        if(childOb) {\n          childOb.dep.depend()\n          if(Array.isArray(value)){\n            dependArray(value)\n          }\n        }\n      }\n      console.log('getValue', `${key}:`, value)\n      return value\n    },\n    set: function reactiveSetter(newVal) {\n      const value = getter ? getter.call(obj) : val\n      console.log(`${key}:`, value, '=>', newVal)\n      // 值相等就不更新了\n      if(newVal === value || (newVal !== newVal && value !== value)){\n        return\n      }\n      if(getter && !setter){\n        return\n      }\n      if(setter){\n        setter.call(obj, newVal)\n      } else {\n        val = newVal\n      }\n      console.log(`${key}:`, value, '=>', newVal, 'done')\n      childOb = !shallow && observe(newVal)\n      // 对每个依赖提醒\n      dep.notify()\n    }\n  })\n}\n\nfunction protoAugment (target, src) {\n  target.__proto__ = src\n}\n\nfunction copyAugment (target, src, keys) {\n  for (let i = 0, l = keys.length; i < l; i++) {\n    const key = keys[i]\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"def\"])(target, key, src[key])\n  }\n}\n\nfunction set(target, key, val){\n  if(Array.isArray(target) && isValidArrayIndex(key)){\n    target.length = Math.max(target.length, key)\n    target.splice(key, 1, val)\n    return val\n  }\n  if(key in target && !(key in Object.prototype)){\n    target[key] = val\n    return val\n  }\n  const ob = target.__ob__\n  if(target._isVue || (ob && ob.vmCount)){\n    return val\n  }\n  if(!ob){\n    target[key] = val\n  }\n  defineReactive(ob.value, key, val)\n  ob.dep.notify()\n  return val\n}\n\nfunction del(target, key){\n  if(Array.isArray(target) && isValidArrayIndex(key)){\n    target.splice(key, 1)\n    return\n  }\n  const ob = target.__ob__\n  if(target._isVue || (ob && ob.vmCount)){\n    return\n  }\n  if(!Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(target, key)){\n    return\n  }\n  delete target[key]\n  if(!ob){\n    return\n  }\n  ob.dep.notify()\n}\n\nfunction dependArray(value){\n  for(let e, i = 0, l = value.length; i < l; i++){\n    e = value[i]\n    e & e.__ob__ && e.__ob__.dep.depend()\n    if(Array.isArray(e)){\n      dependArray(e)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/core/observer/index.js?");

/***/ }),

/***/ "./src/core/observer/watcher.js":
/*!**************************************!*\
  !*** ./src/core/observer/watcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Watcher; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/core/util/index.js\");\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\n\nlet uid = 0\n\nclass Watcher {\n  constructor(vm, expOrFn, cb, options, isRenderWatcher){\n    this.vm = vm\n    if(isRenderWatcher){\n      vm._watcher = this\n    }\n    vm._watchers.push(this)\n    if(options){\n      this.deep = !!options.deep\n      this.user = !!options.user\n      this.lazy = !!options.lazy\n      this.sync = !!options.sync\n    } else {\n      this.deep = this.user = this.lazy = this.sync = false\n    }\n    this.cb = cb\n    this.uid = ++uid\n    this.active = true\n    this.dirty = this.lazy\n    this.deps = []\n    this.newDeps = []\n    this.depsIds = new Set()\n    this.newDepIds = new Set()\n    this.expression =  true\n      ? expOrFn.toString()\n      : undefined\n    if(typeof expOrFn === 'function'){\n      this.getter = expOrFn\n    } else {\n      this.getter = parsePath(expOfFn)\n      if(!this.getter){\n        this.getter = _util__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n      }\n    }\n    this.value = this.lazy\n      ? undefined\n      : this.get()\n  }\n  get(){\n    Object(_dep__WEBPACK_IMPORTED_MODULE_1__[\"pushTarget\"])(this)// 下面的操作都绑定到这个订阅者\n    let value\n    const vm = this.vm\n    try {\n      value = this.getter.call(vm, vm)\n    } catch(e){\n      if(this.user){\n        console.error(this.expression)\n      } else {\n        throw e\n      }\n    } finally {\n      if(this.deep){\n        traverse(value)\n      }\n      Object(_dep__WEBPACK_IMPORTED_MODULE_1__[\"popTarget\"])()// 完成这个订阅者的操作\n      this.cleanupDeps()\n    }\n    return value\n  }\n  // 订阅\n  addDep(dep){\n    const { id } = dep\n    if(!this.newDepIds.has(id)){\n      this.newDepIds.add(id)\n      this.newDeps.push(dep)\n      if(!this.depsIds.has(id)){\n        // 发布者增加订阅者\n        dep.addSub(this)\n      }\n    }\n  }\n  cleanupDeps(){\n    let i = this.deps.length\n    while(i--){\n      const dep = this.deps[i]\n      if(this.newDepIds.has(dep.id)){\n        dep.removeSub(this)\n      }\n    }\n    let tmp = this.depsIds\n    this.depsIds = this.newDepIds\n    this.newDepIds = tmp\n    this.newDepIds.clear()\n\n    tmp = this.deps\n    this.deps = this.newDeps\n    this.newDeps = tmp\n    this.newDeps.length = 0\n  }\n  update(){\n    if(this.lazy){\n      this.dirty = true\n    } else if(this.sync){\n      this.run()\n    } else {\n      queueWatcher(this)\n    }\n  }\n  run(){\n    if(this.active){\n      const value = this.get()\n      if(\n        value !== this.value ||\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(value) ||\n        this.deep\n      ) {\n        const oldValue = this.value\n        this.value = value\n        if(this.user){\n          try{\n            this.cb.call(this.vm, value, oldValue)\n          } catch(e){\n            console.error(e)\n          }\n        } else {\n          this.cb.call(this.vm, value, oldValue)\n        }\n      }\n    }\n  }\n  // 给lazy用的更新方法\n  evaluate(){\n    this.value = this.get()\n    this.dirty = false\n  }\n  // 与发布者绑定依赖关系\n  depend(){\n    let i = this.deps.length\n    while(i--){\n      this.deps[i].depend()\n    }\n  }\n  teardown(){\n    if(this.active){\n      if(!this.vm._isBeingDestroyed){\n        remove(this.vm._watchers, this)\n      }\n      let i = this.deps.length\n      while(i--){\n        this.deps[i].removeSub(this)\n      }\n      this.active = false\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/core/observer/watcher.js?");

/***/ }),

/***/ "./src/core/util/env.js":
/*!******************************!*\
  !*** ./src/core/util/env.js ***!
  \******************************/
/*! exports provided: hasProto, inBrowser, inWeex, weexPlatform, UA, isIE, isIE9, isEdge, isAndroid, isIOS, isChrome, isPhantomJS, isFF, supportsPassive, isServerRendering, nativeWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasProto\", function() { return hasProto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inBrowser\", function() { return inBrowser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inWeex\", function() { return inWeex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weexPlatform\", function() { return weexPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UA\", function() { return UA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIE\", function() { return isIE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIE9\", function() { return isIE9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEdge\", function() { return isEdge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAndroid\", function() { return isAndroid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIOS\", function() { return isIOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isChrome\", function() { return isChrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPhantomJS\", function() { return isPhantomJS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFF\", function() { return isFF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"supportsPassive\", function() { return supportsPassive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isServerRendering\", function() { return isServerRendering; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nativeWatch\", function() { return nativeWatch; });\nconst hasProto = '__proto__' in {}\n\nconst inBrowser = typeof window !== 'undefined'\nconst inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform\nconst weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()\nconst UA = inBrowser && window.navigator.userAgent.toLowerCase()\nconst isIE = UA && /msie|trident/.test(UA)\nconst isIE9 = UA && UA.indexOf('msie 9.0') > 0\nconst isEdge = UA && UA.indexOf('edge/') > 0\nconst isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')\nconst isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')\nconst isChrome = UA && /chrome\\/\\d+/.test(UA) && !isEdge\nconst isPhantomJS = UA && /phantomjs/.test(UA)\nconst isFF = UA && UA.match(/firefox\\/(\\d+)/)\n\nlet supportsPassive = false\nif(inBrowser){\n  try{\n    const opts = {}\n    Object.defineProperty(opts, 'passive', {\n      get(){\n        supportsPassive = true\n      }\n    })\n    window.addEventListener('test-passive', null, opts)\n  }catch(e){}\n}\n\nlet _isServer\nconst isServerRendering = () => {\n  if(_isServer === undefined){\n    if(!inBrowser && !inWeex && typeof global !== 'undefined'){\n      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server'\n    } else {\n      _isServer = false\n    }\n  }\n  return _isServer\n}\n\nconst nativeWatch = ({}).watch\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/core/util/env.js?");

/***/ }),

/***/ "./src/core/util/index.js":
/*!********************************!*\
  !*** ./src/core/util/index.js ***!
  \********************************/
/*! exports provided: hasProto, noop, no, identity, isPlainObject, isReserved, isObject, hasOwn, def, remove, inBrowser, inWeex, weexPlatform, UA, isIE, isIE9, isEdge, isAndroid, isIOS, isChrome, isPhantomJS, isFF, supportsPassive, isServerRendering, nativeWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils */ \"./src/shared/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasProto\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"hasProto\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"no\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"no\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"identity\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isReserved\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"isReserved\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasOwn\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"def\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return _shared_utils__WEBPACK_IMPORTED_MODULE_0__[\"remove\"]; });\n\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ \"./src/core/util/env.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inBrowser\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"inBrowser\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inWeex\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"inWeex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"weexPlatform\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"weexPlatform\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UA\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"UA\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIE\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isIE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIE9\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isIE9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEdge\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isEdge\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isAndroid\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isAndroid\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIOS\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isIOS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isChrome\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isChrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPhantomJS\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isPhantomJS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFF\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isFF\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"supportsPassive\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"supportsPassive\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isServerRendering\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"isServerRendering\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nativeWatch\", function() { return _env__WEBPACK_IMPORTED_MODULE_1__[\"nativeWatch\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/core/util/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/instance */ \"./src/core/instance/index.js\");\n\n\nlet app = new _core_instance__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  data: {\n    t1: 'text',\n    t2: 'text2',\n    n: 0\n  },\n  render(){\n    console.log('start render')\n    console.log('render:', this.t1, this.t2, this.n)\n    return {\n      t1: this.t1,\n      t2: this.t2,\n      n: this.n\n    }\n  }\n})\n\napp.t1 = 't01'\n// app.t1 = 't11'\n// app.t2 = 't22'\n// setTimeout(() => {\n//   console.log('my text')\n// }, 1000)\n// app.n = 2\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/*! exports provided: SSR_ATTR, ASSET_TYPES, LIFECYCLE_HOOKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SSR_ATTR\", function() { return SSR_ATTR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ASSET_TYPES\", function() { return ASSET_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIFECYCLE_HOOKS\", function() { return LIFECYCLE_HOOKS; });\nconst SSR_ATTR = 'data-server-rendered'\n\nconst ASSET_TYPES = [\n  'component',\n  'directive',\n  'filter'\n]\n\nconst LIFECYCLE_HOOKS = [\n  'beforeCreate',\n  'created',\n  'beforeMount',\n  'mounted',\n  'beforeUpdate',\n  'updated',\n  'beforeDestroy',\n  'destroyed',\n  'activated',\n  'deactivated',\n  'errorCaptured',\n  'serverPrefetch'\n]\n\n\n//# sourceURL=webpack:///./src/shared/constants.js?");

/***/ }),

/***/ "./src/shared/utils.js":
/*!*****************************!*\
  !*** ./src/shared/utils.js ***!
  \*****************************/
/*! exports provided: hasProto, noop, no, identity, isPlainObject, isReserved, isObject, hasOwn, def, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasProto\", function() { return hasProto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"no\", function() { return no; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return isPlainObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isReserved\", function() { return isReserved; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOwn\", function() { return hasOwn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return def; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nconst hasProto = '__proto__' in {}\nconst _toString = Object.prototype.toString\n\nfunction noop(){}\nconst no = () => false\n/**\n * Return the same value.\n */\nconst identity = (_) => _\n\nfunction isPlainObject (obj) {\n  return _toString.call(obj) === '[object Object]'\n}\n\nfunction isReserved (str) {\n  const c = (str + '').charCodeAt(0)\n  return c === 0x24 || c === 0x5F\n}\n\nfunction isObject (obj) {\n  return obj !== null && typeof obj === 'object'\n}\n\nconst hasOwnProperty = Object.prototype.hasOwnProperty\nfunction hasOwn(obj, key){\n  return hasOwnProperty.call(obj, key)\n}\n\nfunction def (obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true\n  })\n}\n\n/**\n * Remove an item from an array.\n */\nfunction remove (arr, item) {\n  if (arr.length) {\n    const index = arr.indexOf(item)\n    if (index > -1) {\n      return arr.splice(index, 1)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/shared/utils.js?");

/***/ })

/******/ });