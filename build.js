System.registerDynamic('npm:feather-icons@4.7.0/dist/feather.js', [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof undefined === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["feather"] = factory();else root["feather"] = factory();
  })(typeof self !== 'undefined' ? self : this, function () {
    return (/******/function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
          /******/
          /******/ // Check if module is in cache
          /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
          /******/
          /******/ // Execute the module function
          /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          /******/ // Flag the module as loaded
          /******/module.l = true;
          /******/
          /******/ // Return the exports of the module
          /******/return module.exports;
          /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/__webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/__webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/__webpack_require__.d = function (exports, name, getter) {
          /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
              /******/configurable: false,
              /******/enumerable: true,
              /******/get: getter
              /******/ });
            /******/
          }
          /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__webpack_require__.n = function (module) {
          /******/var getter = module && module.__esModule ?
          /******/function getDefault() {
            return module['default'];
          } :
          /******/function getModuleExports() {
            return module;
          };
          /******/__webpack_require__.d(getter, 'a', getter);
          /******/return getter;
          /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/__webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/__webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/return __webpack_require__(__webpack_require__.s = 49);
        /******/
      }(
      /************************************************************************/
      /******/[
      /* 0 */
      /***/function (module, exports, __webpack_require__) {

        var store = __webpack_require__(36)('wks');
        var uid = __webpack_require__(15);
        var Symbol = __webpack_require__(1).Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function (name) {
          return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;

        /***/
      },
      /* 1 */
      /***/function (module, exports) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


        /***/
      },
      /* 2 */
      /***/function (module, exports) {

        module.exports = function (it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
      },
      /* 3 */
      /***/function (module, exports, __webpack_require__) {

        var global = __webpack_require__(1);
        var core = __webpack_require__(7);
        var hide = __webpack_require__(8);
        var redefine = __webpack_require__(10);
        var ctx = __webpack_require__(11);
        var PROTOTYPE = 'prototype';

        var $export = function (type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
            // extend global
            if (target) redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },
      /* 4 */
      /***/function (module, exports, __webpack_require__) {

        var anObject = __webpack_require__(9);
        var IE8_DOM_DEFINE = __webpack_require__(29);
        var toPrimitive = __webpack_require__(31);
        var dP = Object.defineProperty;

        exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
          } catch (e) {/* empty */}
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };

        /***/
      },
      /* 5 */
      /***/function (module, exports, __webpack_require__) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(12)(function () {
          return Object.defineProperty({}, 'a', { get: function () {
              return 7;
            } }).a != 7;
        });

        /***/
      },
      /* 6 */
      /***/function (module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },
      /* 7 */
      /***/function (module, exports) {

        var core = module.exports = { version: '2.5.3' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


        /***/
      },
      /* 8 */
      /***/function (module, exports, __webpack_require__) {

        var dP = __webpack_require__(4);
        var createDesc = __webpack_require__(14);
        module.exports = __webpack_require__(5) ? function (object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };

        /***/
      },
      /* 9 */
      /***/function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(2);
        module.exports = function (it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!');
          return it;
        };

        /***/
      },
      /* 10 */
      /***/function (module, exports, __webpack_require__) {

        var global = __webpack_require__(1);
        var hide = __webpack_require__(8);
        var has = __webpack_require__(6);
        var SRC = __webpack_require__(15)('src');
        var TO_STRING = 'toString';
        var $toString = Function[TO_STRING];
        var TPL = ('' + $toString).split(TO_STRING);

        __webpack_require__(7).inspectSource = function (it) {
          return $toString.call(it);
        };

        (module.exports = function (O, key, val, safe) {
          var isFunction = typeof val == 'function';
          if (isFunction) has(val, 'name') || hide(val, 'name', key);
          if (O[key] === val) return;
          if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          }
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == 'function' && this[SRC] || $toString.call(this);
        });

        /***/
      },
      /* 11 */
      /***/function (module, exports, __webpack_require__) {

        // optional / simple context binding
        var aFunction = __webpack_require__(32);
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function () /* ...args */{
            return fn.apply(that, arguments);
          };
        };

        /***/
      },
      /* 12 */
      /***/function (module, exports) {

        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },
      /* 13 */
      /***/function (module, exports) {

        module.exports = {};

        /***/
      },
      /* 14 */
      /***/function (module, exports) {

        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },
      /* 15 */
      /***/function (module, exports) {

        var id = 0;
        var px = Math.random();
        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        /***/
      },
      /* 16 */
      /***/function (module, exports, __webpack_require__) {

        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(34);
        var defined = __webpack_require__(19);
        module.exports = function (it) {
          return IObject(defined(it));
        };

        /***/
      },
      /* 17 */
      /***/function (module, exports, __webpack_require__) {

        var ctx = __webpack_require__(11);
        var call = __webpack_require__(38);
        var isArrayIter = __webpack_require__(39);
        var anObject = __webpack_require__(9);
        var toLength = __webpack_require__(22);
        var getIterFn = __webpack_require__(40);
        var BREAK = {};
        var RETURN = {};
        var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function () {
            return iterable;
          } : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

        /***/
      },
      /* 18 */
      /***/function (module, exports) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function (it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },
      /* 19 */
      /***/function (module, exports) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },
      /* 20 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__(52);
        var $export = __webpack_require__(3);
        var redefine = __webpack_require__(10);
        var hide = __webpack_require__(8);
        var has = __webpack_require__(6);
        var Iterators = __webpack_require__(13);
        var $iterCreate = __webpack_require__(53);
        var setToStringTag = __webpack_require__(24);
        var getPrototypeOf = __webpack_require__(59);
        var ITERATOR = __webpack_require__(0)('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function () {
          return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function (kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + ' Iterator';
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = !BUGGY && $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };

        /***/
      },
      /* 21 */
      /***/function (module, exports, __webpack_require__) {

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(55);
        var enumBugKeys = __webpack_require__(37);

        module.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };

        /***/
      },
      /* 22 */
      /***/function (module, exports, __webpack_require__) {

        // 7.1.15 ToLength
        var toInteger = __webpack_require__(18);
        var min = Math.min;
        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },
      /* 23 */
      /***/function (module, exports, __webpack_require__) {

        var shared = __webpack_require__(36)('keys');
        var uid = __webpack_require__(15);
        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },
      /* 24 */
      /***/function (module, exports, __webpack_require__) {

        var def = __webpack_require__(4).f;
        var has = __webpack_require__(6);
        var TAG = __webpack_require__(0)('toStringTag');

        module.exports = function (it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },
      /* 25 */
      /***/function (module, exports, __webpack_require__) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(19);
        module.exports = function (it) {
          return Object(defined(it));
        };

        /***/
      },
      /* 26 */
      /***/function (module, exports, __webpack_require__) {

        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(35);
        var TAG = __webpack_require__(0)('toStringTag');
        // ES3 wrong here
        var ARG = cof(function () {
          return arguments;
        }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (e) {/* empty */}
        };

        module.exports = function (it) {
          var O, T, B;
          return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
          // builtinTag case
          : ARG ? cof(O)
          // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

        /***/
      },
      /* 27 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _icon = __webpack_require__(86);

        var _icon2 = _interopRequireDefault(_icon);

        var _icons = __webpack_require__(88);

        var _icons2 = _interopRequireDefault(_icons);

        var _tags = __webpack_require__(89);

        var _tags2 = _interopRequireDefault(_tags);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = Object.keys(_icons2.default).map(function (key) {
          return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
        }).reduce(function (object, icon) {
          object[icon.name] = icon;
          return object;
        }, {});

        /***/
      },
      /* 28 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var $at = __webpack_require__(51)(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(20)(String, 'String', function (iterated) {
          this._t = String(iterated); // target
          this._i = 0; // next index
          // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var index = this._i;
          var point;
          if (index >= O.length) return { value: undefined, done: true };
          point = $at(O, index);
          this._i += point.length;
          return { value: point, done: false };
        });

        /***/
      },
      /* 29 */
      /***/function (module, exports, __webpack_require__) {

        module.exports = !__webpack_require__(5) && !__webpack_require__(12)(function () {
          return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () {
              return 7;
            } }).a != 7;
        });

        /***/
      },
      /* 30 */
      /***/function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(2);
        var document = __webpack_require__(1).document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },
      /* 31 */
      /***/function (module, exports, __webpack_require__) {

        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(2);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
          if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },
      /* 32 */
      /***/function (module, exports) {

        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };

        /***/
      },
      /* 33 */
      /***/function (module, exports, __webpack_require__) {

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(9);
        var dPs = __webpack_require__(54);
        var enumBugKeys = __webpack_require__(37);
        var IE_PROTO = __webpack_require__(23)('IE_PROTO');
        var Empty = function () {/* empty */};
        var PROTOTYPE = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__(30)('iframe');
          var i = enumBugKeys.length;
          var lt = '<';
          var gt = '>';
          var iframeDocument;
          iframe.style.display = 'none';
          __webpack_require__(58).appendChild(iframe);
          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };

        /***/
      },
      /* 34 */
      /***/function (module, exports, __webpack_require__) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(35);
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
          return cof(it) == 'String' ? it.split('') : Object(it);
        };

        /***/
      },
      /* 35 */
      /***/function (module, exports) {

        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },
      /* 36 */
      /***/function (module, exports, __webpack_require__) {

        var global = __webpack_require__(1);
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});
        module.exports = function (key) {
          return store[key] || (store[key] = {});
        };

        /***/
      },
      /* 37 */
      /***/function (module, exports) {

        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

        /***/
      },
      /* 38 */
      /***/function (module, exports, __webpack_require__) {

        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(9);
        module.exports = function (iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return'];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };

        /***/
      },
      /* 39 */
      /***/function (module, exports, __webpack_require__) {

        // check on default Array iterator
        var Iterators = __webpack_require__(13);
        var ITERATOR = __webpack_require__(0)('iterator');
        var ArrayProto = Array.prototype;

        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

        /***/
      },
      /* 40 */
      /***/function (module, exports, __webpack_require__) {

        var classof = __webpack_require__(26);
        var ITERATOR = __webpack_require__(0)('iterator');
        var Iterators = __webpack_require__(13);
        module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };

        /***/
      },
      /* 41 */
      /***/function (module, exports, __webpack_require__) {

        var ITERATOR = __webpack_require__(0)('iterator');
        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();
          riter['return'] = function () {
            SAFE_CLOSING = true;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function () {
            throw 2;
          });
        } catch (e) {/* empty */}

        module.exports = function (exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function () {
              return { done: safe = true };
            };
            arr[ITERATOR] = function () {
              return iter;
            };
            exec(arr);
          } catch (e) {/* empty */}
          return safe;
        };

        /***/
      },
      /* 42 */
      /***/function (module, exports) {

        exports.f = {}.propertyIsEnumerable;

        /***/
      },
      /* 43 */
      /***/function (module, exports) {

        module.exports = function (done, value) {
          return { value: value, done: !!done };
        };

        /***/
      },
      /* 44 */
      /***/function (module, exports, __webpack_require__) {

        var redefine = __webpack_require__(10);
        module.exports = function (target, src, safe) {
          for (var key in src) redefine(target, key, src[key], safe);
          return target;
        };

        /***/
      },
      /* 45 */
      /***/function (module, exports) {

        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
            throw TypeError(name + ': incorrect invocation!');
          }return it;
        };

        /***/
      },
      /* 46 */
      /***/function (module, exports, __webpack_require__) {

        var META = __webpack_require__(15)('meta');
        var isObject = __webpack_require__(2);
        var has = __webpack_require__(6);
        var setDesc = __webpack_require__(4).f;
        var id = 0;
        var isExtensible = Object.isExtensible || function () {
          return true;
        };
        var FREEZE = !__webpack_require__(12)(function () {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function (it) {
          setDesc(it, META, { value: {
              i: 'O' + ++id, // object ID
              w: {} // weak collections IDs
            } });
        };
        var fastKey = function (it, create) {
          // return primitive with prefix
          if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F';
            // not necessary to add metadata
            if (!create) return 'E';
            // add missing metadata
            setMeta(it);
            // return object ID
          }return it[META].i;
        };
        var getWeak = function (it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMeta(it);
            // return hash weak collections IDs
          }return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function (it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
          return it;
        };
        var meta = module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze
        };

        /***/
      },
      /* 47 */
      /***/function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(2);
        module.exports = function (it, TYPE) {
          if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
          return it;
        };

        /***/
      },
      /* 48 */
      /***/function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                         Copyright (c) 2016 Jed Watson.
                                                                         Licensed under the MIT License (MIT), see
                                                                         http://jedwatson.github.io/classnames
                                                                         */
        /* global define */

        (function () {
          'use strict';

          var classNames = function () {
            // don't inherit from Object so we can skip hasOwnProperty check later
            // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
            function StorageObject() {}
            StorageObject.prototype = Object.create(null);

            function _parseArray(resultSet, array) {
              var length = array.length;

              for (var i = 0; i < length; ++i) {
                _parse(resultSet, array[i]);
              }
            }

            var hasOwn = {}.hasOwnProperty;

            function _parseNumber(resultSet, num) {
              resultSet[num] = true;
            }

            function _parseObject(resultSet, object) {
              for (var k in object) {
                if (hasOwn.call(object, k)) {
                  // set value to false instead of deleting it to avoid changing object structure
                  // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                  resultSet[k] = !!object[k];
                }
              }
            }

            var SPACE = /\s+/;
            function _parseString(resultSet, str) {
              var array = str.split(SPACE);
              var length = array.length;

              for (var i = 0; i < length; ++i) {
                resultSet[array[i]] = true;
              }
            }

            function _parse(resultSet, arg) {
              if (!arg) return;
              var argType = typeof arg;

              // 'foo bar'
              if (argType === 'string') {
                _parseString(resultSet, arg);

                // ['foo', 'bar', ...]
              } else if (Array.isArray(arg)) {
                _parseArray(resultSet, arg);

                // { 'foo': true, ... }
              } else if (argType === 'object') {
                _parseObject(resultSet, arg);

                // '130'
              } else if (argType === 'number') {
                _parseNumber(resultSet, arg);
              }
            }

            function _classNames() {
              // don't leak arguments
              // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
              var len = arguments.length;
              var args = Array(len);
              for (var i = 0; i < len; i++) {
                args[i] = arguments[i];
              }

              var classSet = new StorageObject();
              _parseArray(classSet, args);

              var list = [];

              for (var k in classSet) {
                if (classSet[k]) {
                  list.push(k);
                }
              }

              return list.join(' ');
            }

            return _classNames;
          }();

          if (typeof module !== 'undefined' && module.exports) {
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
            window.classNames = classNames;
          }
        })();

        /***/
      },
      /* 49 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(50);
        __webpack_require__(62);
        __webpack_require__(66);
        module.exports = __webpack_require__(85);

        /***/
      },
      /* 50 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(28);
        __webpack_require__(60);
        module.exports = __webpack_require__(7).Array.from;

        /***/
      },
      /* 51 */
      /***/function (module, exports, __webpack_require__) {

        var toInteger = __webpack_require__(18);
        var defined = __webpack_require__(19);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function (TO_STRING) {
          return function (that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        /***/
      },
      /* 52 */
      /***/function (module, exports) {

        module.exports = false;

        /***/
      },
      /* 53 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var create = __webpack_require__(33);
        var descriptor = __webpack_require__(14);
        var setToStringTag = __webpack_require__(24);
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(8)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
          return this;
        });

        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + ' Iterator');
        };

        /***/
      },
      /* 54 */
      /***/function (module, exports, __webpack_require__) {

        var dP = __webpack_require__(4);
        var anObject = __webpack_require__(9);
        var getKeys = __webpack_require__(21);

        module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;
          while (length > i) dP.f(O, P = keys[i++], Properties[P]);
          return O;
        };

        /***/
      },
      /* 55 */
      /***/function (module, exports, __webpack_require__) {

        var has = __webpack_require__(6);
        var toIObject = __webpack_require__(16);
        var arrayIndexOf = __webpack_require__(56)(false);
        var IE_PROTO = __webpack_require__(23)('IE_PROTO');

        module.exports = function (object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i) if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
          return result;
        };

        /***/
      },
      /* 56 */
      /***/function (module, exports, __webpack_require__) {

        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(16);
        var toLength = __webpack_require__(22);
        var toAbsoluteIndex = __webpack_require__(57);
        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
              // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }return !IS_INCLUDES && -1;
          };
        };

        /***/
      },
      /* 57 */
      /***/function (module, exports, __webpack_require__) {

        var toInteger = __webpack_require__(18);
        var max = Math.max;
        var min = Math.min;
        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },
      /* 58 */
      /***/function (module, exports, __webpack_require__) {

        var document = __webpack_require__(1).document;
        module.exports = document && document.documentElement;

        /***/
      },
      /* 59 */
      /***/function (module, exports, __webpack_require__) {

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(6);
        var toObject = __webpack_require__(25);
        var IE_PROTO = __webpack_require__(23)('IE_PROTO');
        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }return O instanceof Object ? ObjectProto : null;
        };

        /***/
      },
      /* 60 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__(11);
        var $export = __webpack_require__(3);
        var toObject = __webpack_require__(25);
        var call = __webpack_require__(38);
        var isArrayIter = __webpack_require__(39);
        var toLength = __webpack_require__(22);
        var createProperty = __webpack_require__(61);
        var getIterFn = __webpack_require__(40);

        $export($export.S + $export.F * !__webpack_require__(41)(function (iter) {
          Array.from(iter);
        }), 'Array', {
          // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
          from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
            var O = toObject(arrayLike);
            var C = typeof this == 'function' ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
            // if object isn't iterable or it's array with default iterator - use simple case
            if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
              for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
              }
            } else {
              length = toLength(O.length);
              for (result = new C(length); length > index; index++) {
                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
              }
            }
            result.length = index;
            return result;
          }
        });

        /***/
      },
      /* 61 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var $defineProperty = __webpack_require__(4);
        var createDesc = __webpack_require__(14);

        module.exports = function (object, index, value) {
          if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
        };

        /***/
      },
      /* 62 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(63);
        module.exports = __webpack_require__(7).Object.assign;

        /***/
      },
      /* 63 */
      /***/function (module, exports, __webpack_require__) {

        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__(3);

        $export($export.S + $export.F, 'Object', { assign: __webpack_require__(64) });

        /***/
      },
      /* 64 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.1 Object.assign(target, source, ...)

        var getKeys = __webpack_require__(21);
        var gOPS = __webpack_require__(65);
        var pIE = __webpack_require__(42);
        var toObject = __webpack_require__(25);
        var IObject = __webpack_require__(34);
        var $assign = Object.assign;

        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports = !$assign || __webpack_require__(12)(function () {
          var A = {};
          var B = {};
          // eslint-disable-next-line no-undef
          var S = Symbol();
          var K = 'abcdefghijklmnopqrst';
          A[S] = 7;
          K.split('').forEach(function (k) {
            B[k] = k;
          });
          return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target);
          var aLen = arguments.length;
          var index = 1;
          var getSymbols = gOPS.f;
          var isEnum = pIE.f;
          while (aLen > index) {
            var S = IObject(arguments[index++]);
            var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
          }return T;
        } : $assign;

        /***/
      },
      /* 65 */
      /***/function (module, exports) {

        exports.f = Object.getOwnPropertySymbols;

        /***/
      },
      /* 66 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(67);
        __webpack_require__(28);
        __webpack_require__(68);
        __webpack_require__(71);
        __webpack_require__(78);
        __webpack_require__(81);
        __webpack_require__(83);
        module.exports = __webpack_require__(7).Set;

        /***/
      },
      /* 67 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 19.1.3.6 Object.prototype.toString()

        var classof = __webpack_require__(26);
        var test = {};
        test[__webpack_require__(0)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
          __webpack_require__(10)(Object.prototype, 'toString', function toString() {
            return '[object ' + classof(this) + ']';
          }, true);
        }

        /***/
      },
      /* 68 */
      /***/function (module, exports, __webpack_require__) {

        var $iterators = __webpack_require__(69);
        var getKeys = __webpack_require__(21);
        var redefine = __webpack_require__(10);
        var global = __webpack_require__(1);
        var hide = __webpack_require__(8);
        var Iterators = __webpack_require__(13);
        var wks = __webpack_require__(0);
        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;

        var DOMIterables = {
          CSSRuleList: true, // TODO: Not spec compliant, should be false.
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true, // TODO: Not spec compliant, should be false.
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true, // TODO: Not spec compliant, should be false.
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
          var NAME = collections[i];
          var explicit = DOMIterables[NAME];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          var key;
          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
          }
        }

        /***/
      },
      /* 69 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var addToUnscopables = __webpack_require__(70);
        var step = __webpack_require__(43);
        var Iterators = __webpack_require__(13);
        var toIObject = __webpack_require__(16);

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(20)(Array, 'Array', function (iterated, kind) {
          this._t = toIObject(iterated); // target
          this._i = 0; // next index
          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }
          if (kind == 'keys') return step(0, index);
          if (kind == 'values') return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
      },
      /* 70 */
      /***/function (module, exports, __webpack_require__) {

        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__(0)('unscopables');
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
        module.exports = function (key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };

        /***/
      },
      /* 71 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var strong = __webpack_require__(72);
        var validate = __webpack_require__(47);
        var SET = 'Set';

        // 23.2 Set Objects
        module.exports = __webpack_require__(74)(SET, function (get) {
          return function Set() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        }, {
          // 23.2.3.1 Set.prototype.add(value)
          add: function add(value) {
            return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
          }
        }, strong);

        /***/
      },
      /* 72 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var dP = __webpack_require__(4).f;
        var create = __webpack_require__(33);
        var redefineAll = __webpack_require__(44);
        var ctx = __webpack_require__(11);
        var anInstance = __webpack_require__(45);
        var forOf = __webpack_require__(17);
        var $iterDefine = __webpack_require__(20);
        var step = __webpack_require__(43);
        var setSpecies = __webpack_require__(73);
        var DESCRIPTORS = __webpack_require__(5);
        var fastKey = __webpack_require__(46).fastKey;
        var validate = __webpack_require__(47);
        var SIZE = DESCRIPTORS ? '_s' : 'size';

        var getEntry = function (that, key) {
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== 'F') return that._i[index];
          // frozen object case
          for (entry = that._f; entry; entry = entry.n) {
            if (entry.k == key) return entry;
          }
        };

        module.exports = {
          getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, NAME, '_i');
              that._t = NAME; // collection type
              that._i = create(null); // index
              that._f = undefined; // first entry
              that._l = undefined; // last entry
              that[SIZE] = 0; // size
              if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            });
            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                  entry.r = true;
                  if (entry.p) entry.p = entry.p.n = undefined;
                  delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              'delete': function (key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.n;
                  var prev = entry.p;
                  delete that._i[entry.i];
                  entry.r = true;
                  if (prev) prev.n = next;
                  if (next) next.p = prev;
                  if (that._f == entry) that._f = next;
                  if (that._l == entry) that._l = prev;
                  that[SIZE]--;
                }return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                validate(this, NAME);
                var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while (entry = entry ? entry.n : this._f) {
                  f(entry.v, entry.k, this);
                  // revert to the last existing entry
                  while (entry && entry.r) entry = entry.p;
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
              }
            });
            if (DESCRIPTORS) dP(C.prototype, 'size', {
              get: function () {
                return validate(this, NAME)[SIZE];
              }
            });
            return C;
          },
          def: function (that, key, value) {
            var entry = getEntry(that, key);
            var prev, index;
            // change existing entry
            if (entry) {
              entry.v = value;
              // create new entry
            } else {
              that._l = entry = {
                i: index = fastKey(key, true), // <- index
                k: key, // <- key
                v: value, // <- value
                p: prev = that._l, // <- previous entry
                n: undefined, // <- next entry
                r: false // <- removed
              };
              if (!that._f) that._f = entry;
              if (prev) prev.n = entry;
              that[SIZE]++;
              // add to index
              if (index !== 'F') that._i[index] = entry;
            }return that;
          },
          getEntry: getEntry,
          setStrong: function (C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(C, NAME, function (iterated, kind) {
              this._t = validate(iterated, NAME); // target
              this._k = kind; // kind
              this._l = undefined; // previous
            }, function () {
              var that = this;
              var kind = that._k;
              var entry = that._l;
              // revert to the last existing entry
              while (entry && entry.r) entry = entry.p;
              // get next entry
              if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                // or finish the iteration
                that._t = undefined;
                return step(1);
              }
              // return step by kind
              if (kind == 'keys') return step(0, entry.k);
              if (kind == 'values') return step(0, entry.v);
              return step(0, [entry.k, entry.v]);
            }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(NAME);
          }
        };

        /***/
      },
      /* 73 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(1);
        var dP = __webpack_require__(4);
        var DESCRIPTORS = __webpack_require__(5);
        var SPECIES = __webpack_require__(0)('species');

        module.exports = function (KEY) {
          var C = global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
            configurable: true,
            get: function () {
              return this;
            }
          });
        };

        /***/
      },
      /* 74 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(1);
        var $export = __webpack_require__(3);
        var redefine = __webpack_require__(10);
        var redefineAll = __webpack_require__(44);
        var meta = __webpack_require__(46);
        var forOf = __webpack_require__(17);
        var anInstance = __webpack_require__(45);
        var isObject = __webpack_require__(2);
        var fails = __webpack_require__(12);
        var $iterDetect = __webpack_require__(41);
        var setToStringTag = __webpack_require__(24);
        var inheritIfRequired = __webpack_require__(75);

        module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
          var Base = global[NAME];
          var C = Base;
          var ADDER = IS_MAP ? 'set' : 'add';
          var proto = C && C.prototype;
          var O = {};
          var fixMethod = function (KEY) {
            var fn = proto[KEY];
            redefine(proto, KEY, KEY == 'delete' ? function (a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'has' ? function has(a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'get' ? function get(a) {
              return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'add' ? function add(a) {
              fn.call(this, a === 0 ? 0 : a);return this;
            } : function set(a, b) {
              fn.call(this, a === 0 ? 0 : a, b);return this;
            });
          };
          if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
            new C().entries().next();
          }))) {
            // create collection constructor
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
            redefineAll(C.prototype, methods);
            meta.NEED = true;
          } else {
            var instance = new C();
            // early implementations not supports chaining
            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
            var THROWS_ON_PRIMITIVES = fails(function () {
              instance.has(1);
            });
            // most early implementations doesn't supports iterables, most modern - not close it correctly
            var ACCEPT_ITERABLES = $iterDetect(function (iter) {
              new C(iter);
            }); // eslint-disable-line no-new
            // for early implementations -0 and +0 not the same
            var BUGGY_ZERO = !IS_WEAK && fails(function () {
              // V8 ~ Chromium 42- fails only with 5+ elements
              var $instance = new C();
              var index = 5;
              while (index--) $instance[ADDER](index, index);
              return !$instance.has(-0);
            });
            if (!ACCEPT_ITERABLES) {
              C = wrapper(function (target, iterable) {
                anInstance(target, C, NAME);
                var that = inheritIfRequired(new Base(), target, C);
                if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                return that;
              });
              C.prototype = proto;
              proto.constructor = C;
            }
            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod('delete');
              fixMethod('has');
              IS_MAP && fixMethod('get');
            }
            if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
            // weak collections should not contains .clear method
            if (IS_WEAK && proto.clear) delete proto.clear;
          }

          setToStringTag(C, NAME);

          O[NAME] = C;
          $export($export.G + $export.W + $export.F * (C != Base), O);

          if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

          return C;
        };

        /***/
      },
      /* 75 */
      /***/function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(2);
        var setPrototypeOf = __webpack_require__(76).set;
        module.exports = function (that, target, C) {
          var S = target.constructor;
          var P;
          if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
            setPrototypeOf(that, P);
          }return that;
        };

        /***/
      },
      /* 76 */
      /***/function (module, exports, __webpack_require__) {

        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(2);
        var anObject = __webpack_require__(9);
        var check = function (O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
          set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          function (test, buggy, set) {
            try {
              set = __webpack_require__(11)(Function.call, __webpack_require__(77).f(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;else set(O, proto);
              return O;
            };
          }({}, false) : undefined),
          check: check
        };

        /***/
      },
      /* 77 */
      /***/function (module, exports, __webpack_require__) {

        var pIE = __webpack_require__(42);
        var createDesc = __webpack_require__(14);
        var toIObject = __webpack_require__(16);
        var toPrimitive = __webpack_require__(31);
        var has = __webpack_require__(6);
        var IE8_DOM_DEFINE = __webpack_require__(29);
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE) try {
            return gOPD(O, P);
          } catch (e) {/* empty */}
          if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };

        /***/
      },
      /* 78 */
      /***/function (module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(3);

        $export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(79)('Set') });

        /***/
      },
      /* 79 */
      /***/function (module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__(26);
        var from = __webpack_require__(80);
        module.exports = function (NAME) {
          return function toJSON() {
            if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
            return from(this);
          };
        };

        /***/
      },
      /* 80 */
      /***/function (module, exports, __webpack_require__) {

        var forOf = __webpack_require__(17);

        module.exports = function (iter, ITERATOR) {
          var result = [];
          forOf(iter, false, result.push, result, ITERATOR);
          return result;
        };

        /***/
      },
      /* 81 */
      /***/function (module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        __webpack_require__(82)('Set');

        /***/
      },
      /* 82 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/

        var $export = __webpack_require__(3);

        module.exports = function (COLLECTION) {
          $export($export.S, COLLECTION, { of: function of() {
              var length = arguments.length;
              var A = new Array(length);
              while (length--) A[length] = arguments[length];
              return new this(A);
            } });
        };

        /***/
      },
      /* 83 */
      /***/function (module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        __webpack_require__(84)('Set');

        /***/
      },
      /* 84 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/

        var $export = __webpack_require__(3);
        var aFunction = __webpack_require__(32);
        var ctx = __webpack_require__(11);
        var forOf = __webpack_require__(17);

        module.exports = function (COLLECTION) {
          $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
              var mapFn = arguments[1];
              var mapping, A, n, cb;
              aFunction(this);
              mapping = mapFn !== undefined;
              if (mapping) aFunction(mapFn);
              if (source == undefined) return new this();
              A = [];
              if (mapping) {
                n = 0;
                cb = ctx(mapFn, arguments[2], 2);
                forOf(source, false, function (nextItem) {
                  A.push(cb(nextItem, n++));
                });
              } else {
                forOf(source, false, A.push, A);
              }
              return new this(A);
            } });
        };

        /***/
      },
      /* 85 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var _icons = __webpack_require__(27);

        var _icons2 = _interopRequireDefault(_icons);

        var _toSvg = __webpack_require__(90);

        var _toSvg2 = _interopRequireDefault(_toSvg);

        var _replace = __webpack_require__(91);

        var _replace2 = _interopRequireDefault(_replace);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

        /***/
      },
      /* 86 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        var _dedupe = __webpack_require__(48);

        var _dedupe2 = _interopRequireDefault(_dedupe);

        var _defaultAttrs = __webpack_require__(87);

        var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var Icon = function () {
          function Icon(name, contents) {
            var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            _classCallCheck(this, Icon);

            this.name = name;
            this.contents = contents;
            this.tags = tags;
            this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
          }

          /**
           * Create an SVG string.
           * @param {Object} attrs
           * @returns {string}
           */

          _createClass(Icon, [{
            key: 'toSvg',
            value: function toSvg() {
              var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

              return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
            }

            /**
             * Return string representation of an `Icon`.
             *
             * Added for backward compatibility. If old code expects `feather.icons.<name>`
             * to be a string, `toString()` will get implicitly called.
             *
             * @returns {string}
             */

          }, {
            key: 'toString',
            value: function toString() {
              return this.contents;
            }
          }]);

          return Icon;
        }();

        /**
         * Convert attributes object to string of HTML attributes.
         * @param {Object} attrs
         * @returns {string}
         */

        function attrsToString(attrs) {
          return Object.keys(attrs).map(function (key) {
            return key + '="' + attrs[key] + '"';
          }).join(' ');
        }

        exports.default = Icon;

        /***/
      },
      /* 87 */
      /***/function (module, exports) {

        module.exports = { "xmlns": "http://www.w3.org/2000/svg", "width": 24, "height": 24, "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };

        /***/
      },
      /* 88 */
      /***/function (module, exports) {

        module.exports = { "activity": "<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>", "airplay": "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>", "alert-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line>", "alert-octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line>", "alert-triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\"></line>", "align-center": "<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>", "align-justify": "<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>", "align-left": "<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>", "align-right": "<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>", "anchor": "<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>", "aperture": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>", "archive": "<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>", "arrow-down-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>", "arrow-down-left": "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>", "arrow-down-right": "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>", "arrow-down": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>", "arrow-left-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>", "arrow-left": "<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>", "arrow-right-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "arrow-right": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>", "arrow-up-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>", "arrow-up-left": "<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>", "arrow-up-right": "<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>", "arrow-up": "<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>", "at-sign": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>", "award": "<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>", "bar-chart-2": "<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>", "bar-chart": "<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>", "battery-charging": "<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>", "battery": "<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>", "bell-off": "<path d=\"M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "bell": "<path d=\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0\"></path>", "bluetooth": "<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>", "bold": "<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>", "book-open": "<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>", "book": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>", "bookmark": "<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>", "box": "<path d=\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\"></path><polyline points=\"2.32 6.16 12 11 21.68 6.16\"></polyline><line x1=\"12\" y1=\"22.76\" x2=\"12\" y2=\"11\"></line>", "briefcase": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>", "calendar": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>", "camera-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>", "camera": "<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>", "cast": "<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2\" y2=\"20\"></line>", "check-circle": "<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>", "check-square": "<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>", "check": "<polyline points=\"20 6 9 17 4 12\"></polyline>", "chevron-down": "<polyline points=\"6 9 12 15 18 9\"></polyline>", "chevron-left": "<polyline points=\"15 18 9 12 15 6\"></polyline>", "chevron-right": "<polyline points=\"9 18 15 12 9 6\"></polyline>", "chevron-up": "<polyline points=\"18 15 12 9 6 15\"></polyline>", "chevrons-down": "<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>", "chevrons-left": "<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>", "chevrons-right": "<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>", "chevrons-up": "<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>", "chrome": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>", "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>", "clipboard": "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>", "cloud-drizzle": "<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>", "cloud-lightning": "<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>", "cloud-off": "<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "cloud-rain": "<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>", "cloud-snow": "<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16\" y2=\"20\"></line>", "cloud": "<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>", "code": "<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>", "codepen": "<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>", "command": "<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>", "compass": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>", "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>", "corner-down-left": "<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>", "corner-down-right": "<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>", "corner-left-down": "<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>", "corner-left-up": "<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>", "corner-right-down": "<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>", "corner-right-up": "<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>", "corner-up-left": "<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>", "corner-up-right": "<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>", "cpu": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>", "credit-card": "<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>", "crop": "<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>", "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>", "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>", "delete": "<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>", "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>", "dollar-sign": "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>", "download-cloud": "<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>", "droplet": "<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>", "edit-2": "<polygon points=\"16 3 21 8 8 21 3 21 3 16 16 3\"></polygon>", "edit-3": "<polygon points=\"14 2 18 6 7 17 3 17 3 13 14 2\"></polygon><line x1=\"3\" y1=\"22\" x2=\"21\" y2=\"22\"></line>", "edit": "<path d=\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\"></path><polygon points=\"18 2 22 6 12 16 8 16 8 12 18 2\"></polygon>", "external-link": "<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>", "eye-off": "<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "eye": "<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>", "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>", "fast-forward": "<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>", "feather": "<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17\" y1=\"15\" x2=\"9\" y2=\"15\"></line>", "file-minus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>", "file-plus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>", "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>", "file": "<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>", "film": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>", "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>", "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>", "folder-minus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>", "folder-plus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>", "folder": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>", "gift": "<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>", "git-branch": "<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>", "git-commit": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>", "git-merge": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>", "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>", "github": "<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>", "gitlab": "<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>", "grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>", "hard-drive": "<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10\" y2=\"16\"></line>", "hash": "<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>", "headphones": "<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>", "heart": "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>", "help-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\"></line>", "home": "<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>", "image": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>", "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>", "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>", "instagram": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.5\" y2=\"6.5\"></line>", "italic": "<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>", "layers": "<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>", "layout": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>", "life-buoy": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>", "link-2": "<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>", "linkedin": "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>", "list": "<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3\" y2=\"18\"></line>", "loader": "<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>", "lock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>", "log-in": "<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>", "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>", "mail": "<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>", "map-pin": "<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>", "map": "<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>", "maximize-2": "<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>", "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>", "menu": "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>", "message-circle": "<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>", "message-square": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>", "mic-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>", "mic": "<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>", "minimize-2": "<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>", "minimize": "<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>", "minus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "minus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "minus": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>", "monitor": "<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>", "moon": "<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>", "more-horizontal": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>", "more-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>", "move": "<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>", "music": "<path d=\"M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z\"></path><polyline points=\"9 17 9 5 21 3 21 15\"></polyline>", "navigation-2": "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>", "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>", "octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>", "package": "<path d=\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\"></path><polyline points=\"2.32 6.16 12 11 21.68 6.16\"></polyline><line x1=\"12\" y1=\"22.76\" x2=\"12\" y2=\"11\"></line><line x1=\"7\" y1=\"3.5\" x2=\"17\" y2=\"8.5\"></line>", "paperclip": "<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>", "pause-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>", "pause": "<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>", "percent": "<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>", "phone-call": "<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "phone-forwarded": "<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "phone-incoming": "<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "phone-missed": "<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "phone-off": "<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>", "phone-outgoing": "<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>", "pie-chart": "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>", "play-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>", "play": "<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>", "plus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "plus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>", "plus": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>", "pocket": "<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>", "power": "<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>", "printer": "<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>", "radio": "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>", "refresh-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>", "refresh-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>", "repeat": "<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>", "rewind": "<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>", "rotate-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>", "rotate-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>", "rss": "<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>", "save": "<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>", "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>", "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>", "send": "<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>", "server": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6\" y2=\"18\"></line>", "settings": "<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>", "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>", "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>", "shield-off": "<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>", "shopping-bag": "<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>", "shopping-cart": "<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>", "shuffle": "<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>", "sidebar": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>", "skip-back": "<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>", "skip-forward": "<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>", "slack": "<path d=\"M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z\"></path><line x1=\"12.57\" y1=\"5.99\" x2=\"16.15\" y2=\"16.39\"></line><line x1=\"7.85\" y1=\"7.61\" x2=\"11.43\" y2=\"18.01\"></line><line x1=\"16.39\" y1=\"7.85\" x2=\"5.99\" y2=\"11.43\"></line><line x1=\"18.01\" y1=\"12.57\" x2=\"7.61\" y2=\"16.15\"></line>", "slash": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>", "sliders": "<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>", "smartphone": "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>", "speaker": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"6\"></line>", "square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>", "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>", "stop-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>", "sunrise": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>", "sunset": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>", "tablet": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\" transform=\"rotate(180 12 12)\"></rect><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>", "tag": "<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7\" y2=\"7\"></line>", "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>", "terminal": "<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>", "thermometer": "<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>", "thumbs-down": "<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>", "thumbs-up": "<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>", "toggle-left": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>", "toggle-right": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>", "trash-2": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>", "trash": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>", "trending-down": "<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>", "trending-up": "<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>", "triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>", "truck": "<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>", "tv": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>", "twitter": "<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>", "type": "<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>", "umbrella": "<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>", "underline": "<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>", "unlock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>", "upload-cloud": "<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>", "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>", "user-check": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>", "user-minus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>", "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>", "user-x": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>", "user": "<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>", "users": "<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>", "video-off": "<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "video": "<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>", "voicemail": "<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>", "volume-1": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>", "volume-2": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>", "volume-x": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>", "volume": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>", "watch": "<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>", "wifi-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"20\"></line>", "wifi": "<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"20\"></line>", "wind": "<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>", "x-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>", "x-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>", "x": "<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>", "youtube": "<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>", "zap-off": "<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>", "zap": "<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>", "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>", "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>" };

        /***/
      },
      /* 89 */
      /***/function (module, exports) {

        module.exports = { "activity": ["pulse", "health", "action", "motion"], "airplay": ["stream", "cast", "mirroring"], "alert-circle": ["warning"], "alert-octagon": ["warning"], "alert-triangle": ["warning"], "at-sign": ["mention"], "award": ["achievement", "badge"], "aperture": ["camera", "photo"], "bell": ["alarm", "notification"], "bell-off": ["alarm", "notification", "silent"], "bluetooth": ["wireless"], "book-open": ["read"], "book": ["read", "dictionary", "booklet", "magazine"], "bookmark": ["read", "clip", "marker", "tag"], "briefcase": ["work", "bag", "baggage", "folder"], "clipboard": ["copy"], "clock": ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], "cloud": ["weather"], "codepen": ["logo"], "command": ["keyboard", "cmd"], "compass": ["navigation", "safari", "travel"], "copy": ["clone", "duplicate"], "corner-down-left": ["arrow"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "credit-card": ["purchase", "payment", "cc"], "crop": ["photo", "image"], "crosshair": ["aim", "target"], "database": ["storage"], "delete": ["remove"], "disc": ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], "droplet": ["water"], "edit": ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], "eye": ["view", "watch"], "eye-off": ["view", "watch"], "external-link": ["outbound"], "facebook": ["logo"], "fast-forward": ["music"], "film": ["movie", "video"], "folder-minus": ["directory"], "folder-plus": ["directory"], "folder": ["directory"], "gift": ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], "github": ["logo", "version control"], "gitlab": ["logo", "version control"], "global": ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server"], "hash": ["hashtag", "number", "pound"], "headphones": ["music", "audio"], "heart": ["like", "love"], "help-circle": ["question mark"], "home": ["house"], "image": ["picture"], "inbox": ["email"], "instagram": ["logo", "camera"], "life-bouy": ["help", "life ring", "support"], "linkedin": ["logo"], "lock": ["security", "password"], "log-in": ["sign in", "arrow"], "log-out": ["sign out", "arrow"], "mail": ["email"], "map-pin": ["location", "navigation", "travel", "marker"], "map": ["location", "navigation", "travel"], "maximize": ["fullscreen"], "maximize-2": ["fullscreen", "arrows"], "menu": ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record"], "mic": ["record"], "minimize": ["exit fullscreen"], "minimize-2": ["exit fullscreen", "arrows"], "monitor": ["tv"], "moon": ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "move": ["arrows"], "navigation": ["location", "travel"], "navigation-2": ["location", "travel"], "octagon": ["stop"], "package": ["box"], "paperclip": ["attachment"], "pause": ["music", "stop"], "pause-circle": ["music", "stop"], "play": ["music", "start"], "play-circle": ["music", "start"], "plus": ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], "pocket": ["logo", "save"], "power": ["on", "off"], "radio": ["signal"], "rewind": ["music"], "rss": ["feed", "subscribe"], "save": ["floppy disk"], "send": ["message", "mail", "paper airplane"], "settings": ["cog", "edit", "gear", "preferences"], "shield": ["security"], "shield-off": ["security"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], "shuffle": ["music"], "skip-back": ["music"], "skip-forward": ["music"], "slash": ["ban", "no"], "sliders": ["settings", "controls"], "speaker": ["music"], "star": ["bookmark", "favorite", "like"], "sun": ["brightness", "weather", "light"], "sunrise": ["weather"], "sunset": ["weather"], "tag": ["label"], "target": ["bullseye"], "terminal": ["code", "command line"], "thumbs-down": ["dislike", "bad"], "thumbs-up": ["like", "good"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], "trash": ["garbage", "delete", "remove"], "trash-2": ["garbage", "delete", "remove"], "triangle": ["delta"], "truck": ["delivery", "van", "shipping"], "twitter": ["logo"], "umbrella": ["rain", "weather"], "video-off": ["camera", "movie", "film"], "video": ["camera", "movie", "film"], "voicemail": ["phone"], "volume": ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], "watch": ["clock", "time"], "wind": ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times"], "x-square": ["cancel", "close", "delete", "remove", "times"], "x": ["cancel", "close", "delete", "remove", "times"], "youtube": ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], "zap": ["flash", "camera", "lightning"] };

        /***/
      },
      /* 90 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _icons = __webpack_require__(27);

        var _icons2 = _interopRequireDefault(_icons);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * Create an SVG string.
         * @deprecated
         * @param {string} name
         * @param {Object} attrs
         * @returns {string}
         */
        function toSvg(name) {
          var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

          if (!name) {
            throw new Error('The required `key` (icon name) parameter is missing.');
          }

          if (!_icons2.default[name]) {
            throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
          }

          return _icons2.default[name].toSvg(attrs);
        }

        exports.default = toSvg;

        /***/
      },
      /* 91 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        }; /* eslint-env browser */

        var _dedupe = __webpack_require__(48);

        var _dedupe2 = _interopRequireDefault(_dedupe);

        var _icons = __webpack_require__(27);

        var _icons2 = _interopRequireDefault(_icons);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * Replace all HTML elements that have a `data-feather` attribute with SVG markup
         * corresponding to the element's `data-feather` attribute value.
         * @param {Object} attrs
         */
        function replace() {
          var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof document === 'undefined') {
            throw new Error('`feather.replace()` only works in a browser environment.');
          }

          var elementsToReplace = document.querySelectorAll('[data-feather]');

          Array.from(elementsToReplace).forEach(function (element) {
            return replaceElement(element, attrs);
          });
        }

        /**
         * Replace a single HTML element with SVG markup
         * corresponding to the element's `data-feather` attribute value.
         * @param {HTMLElement} element
         * @param {Object} attrs
         */
        function replaceElement(element) {
          var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var elementAttrs = getAttrs(element);
          var name = elementAttrs['data-feather'];
          delete elementAttrs['data-feather'];

          var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
          var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
          var svgElement = svgDocument.querySelector('svg');

          element.parentNode.replaceChild(svgElement, element);
        }

        /**
         * Get the attributes of an HTML element.
         * @param {HTMLElement} element
         * @returns {Object}
         */
        function getAttrs(element) {
          return Array.from(element.attributes).reduce(function (attrs, attr) {
            attrs[attr.name] = attr.value;
            return attrs;
          }, {});
        }

        exports.default = replace;

        /***/
      }])
    );
  });
  
});
System.registerDynamic("npm:feather-icons@4.7.0.js", ["npm:feather-icons@4.7.0/dist/feather.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:feather-icons@4.7.0/dist/feather.js");
});
System.registerDynamic('npm:plain-jsx@1.0.0/index.js', [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  window.plainJSX = function (tagName, attributes) {
    'use strict';

    var children = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 2));

    if (typeof tagName !== 'string') {
      throw new Error('plain-jsx only renders regular HTML elements, not components');
    }

    var element = document.createElement(tagName);

    for (var name in attributes) {
      if (attributes.hasOwnProperty(name)) {
        element.setAttribute(name, attributes[name]);
      }
    }

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];

      if (child != null) {
        element.appendChild(child instanceof HTMLElement ? child : document.createTextNode(child));
      }
    }

    return element;
  };
});
System.registerDynamic("npm:plain-jsx@1.0.0.js", ["npm:plain-jsx@1.0.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:plain-jsx@1.0.0/index.js");
});
System.registerDynamic('npm:nanoajax@0.4.3/index.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Best place to find information on XHR features is:
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

  var reqfields = ['responseType', 'withCredentials', 'timeout', 'onprogress'];

  // Simple and small ajax function
  // Takes a parameters object and a callback function
  // Parameters:
  //  - url: string, required
  //  - headers: object of `{header_name: header_value, ...}`
  //  - body:
  //      + string (sets content type to 'application/x-www-form-urlencoded' if not set in headers)
  //      + FormData (doesn't set content type so that browser will set as appropriate)
  //  - method: 'GET', 'POST', etc. Defaults to 'GET' or 'POST' based on body
  //  - cors: If your using cross-origin, you will need this true for IE8-9
  //
  // The following parameters are passed onto the xhr object.
  // IMPORTANT NOTE: The caller is responsible for compatibility checking.
  //  - responseType: string, various compatability, see xhr docs for enum options
  //  - withCredentials: boolean, IE10+, CORS only
  //  - timeout: long, ms timeout, IE8+
  //  - onprogress: callback, IE10+
  //
  // Callback function prototype:
  //  - statusCode from request
  //  - response
  //    + if responseType set and supported by browser, this is an object of some type (see docs)
  //    + otherwise if request completed, this is the string text of the response
  //    + if request is aborted, this is "Abort"
  //    + if request times out, this is "Timeout"
  //    + if request errors before completing (probably a CORS issue), this is "Error"
  //  - request object
  //
  // Returns the request object. So you can call .abort() or other methods
  //
  // DEPRECATIONS:
  //  - Passing a string instead of the params object has been removed!
  //
  exports.ajax = function (params, callback) {
    // Any variable used more than once is var'd here because
    // minification will munge the variables whereas it can't munge
    // the object access.
    var headers = params.headers || {},
        body = params.body,
        method = params.method || (body ? 'POST' : 'GET'),
        called = false;

    var req = getRequest(params.cors);

    function cb(statusCode, responseText) {
      return function () {
        if (!called) {
          callback(req.status === undefined ? statusCode : req.status, req.status === 0 ? "Error" : req.response || req.responseText || responseText, req);
          called = true;
        }
      };
    }

    req.open(method, params.url, true);

    var success = req.onload = cb(200);
    req.onreadystatechange = function () {
      if (req.readyState === 4) success();
    };
    req.onerror = cb(null, 'Error');
    req.ontimeout = cb(null, 'Timeout');
    req.onabort = cb(null, 'Abort');

    if (body) {
      setDefault(headers, 'X-Requested-With', 'XMLHttpRequest');

      if (!global.FormData || !(body instanceof global.FormData)) {
        setDefault(headers, 'Content-Type', 'application/x-www-form-urlencoded');
      }
    }

    for (var i = 0, len = reqfields.length, field; i < len; i++) {
      field = reqfields[i];
      if (params[field] !== undefined) req[field] = params[field];
    }

    for (var field in headers) req.setRequestHeader(field, headers[field]);

    req.send(body);

    return req;
  };

  function getRequest(cors) {
    // XDomainRequest is only way to do CORS in IE 8 and 9
    // But XDomainRequest isn't standards-compatible
    // Notably, it doesn't allow cookies to be sent or set by servers
    // IE 10+ is standards-compatible in its XMLHttpRequest
    // but IE 10 can still have an XDomainRequest object, so we don't want to use it
    if (cors && global.XDomainRequest && !/MSIE 1/.test(navigator.userAgent)) return new XDomainRequest();
    if (global.XMLHttpRequest) return new XMLHttpRequest();
  }

  function setDefault(obj, key, value) {
    obj[key] = obj[key] || value;
  }
});
System.registerDynamic("npm:nanoajax@0.4.3.js", ["npm:nanoajax@0.4.3/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:nanoajax@0.4.3/index.js");
});
System.registerDynamic("styles/style.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("styles/me.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("styles/large-project-tile.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("vue/large-project-tile.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var render = function anonymous() {
    with (this) {
      return _c('div', { staticClass: "large project-tile", attrs: { "id": id }, on: { "click": onClick } }, [_c('a', { ref: "link", staticClass: "hidden", attrs: { "href": url, "target": "_blank" } }), _v(" "), _c('span', { staticClass: "topText" }, [_c('span', { staticClass: "description" }, [_v(_s(description))]), _v(" "), place !== null ? _c('span', { staticClass: "place" }, [_v("@" + _s(place))]) : _e()]), _v(" "), _c('div', { staticClass: "fix-aspect-ratio" }, [_c('div', { staticClass: "imgContainer fix-aspect-ratio-contents" }, [_c('video', { style: style, attrs: { "preload": "auto", "poster": imgSrc, "loop": "", "onmouseover": "this.play()", "onmouseout": "this.pause()" }, domProps: { "muted": true } }, [_c('source', { attrs: { "src": videoSrc, "type": "video/mp4" } })]), _v(" "), _c('span', { staticClass: "placeholder" })])]), _v(" "), _c('div', { staticClass: "overlay-icons" }, [hasVideo ? _c('i', { attrs: { "data-feather": "play-circle" } }) : _e()])]);
    }
  };staticRenderFns = [];module.exports = { render: render, staticRenderFns: staticRenderFns };
});
System.register("vue/large-project-tile.vue.js", ["npm:vue@2.5.14.js", "styles/project-tile.less!npm:systemjs-less-plugin@2.2.3.js", "styles/large-project-tile.less!npm:systemjs-less-plugin@2.2.3.js", "vue/large-project-tile.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js"], function (_export) {
  "use strict";

  var Vue, template;
  return {
    setters: [function (_npmVue2514Js) {
      Vue = _npmVue2514Js["default"];
    }, function (_stylesProjectTileLessNpmSystemjsLessPlugin223Js) {}, function (_stylesLargeProjectTileLessNpmSystemjsLessPlugin223Js) {}, function (_vueLargeProjectTileVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js) {
      template = _vueLargeProjectTileVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js["default"];
    }],
    execute: function () {

      Vue.component('large-project-tile', {
        props: ['description', 'place', 'id', 'url', 'config', 'hasVideo'],
        render: template.render,
        staticRenderFns: template.staticRenderFns,

        computed: {
          videoSrc: function videoSrc() {
            return "videos/" + this.id + ".mp4";
          },

          imgSrc: function imgSrc() {
            return "images/" + this.id + ".png";
          },

          style: function style() {
            var ans = {
              top: (this.config && this.config.top || 0) + "%",
              left: (this.config && this.config.left || 0) + "%"
            };

            if (this.config && this.config.scale) {
              ans['max-height'] = this.config.scale + "%";
            }
            return ans;
          }
        },

        methods: {
          onClick: function onClick(event) {
            this.$refs.link.click();
          }
        }
      });
    }
  };
});
System.registerDynamic("styles/project-tile.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("styles/small-project-tile.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("vue/small-project-tile.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var render = function anonymous() {
    with (this) {
      return _c('div', { staticClass: "small project-tile", attrs: { "id": id }, on: { "click": onClick } }, [_c('a', { ref: "link", staticClass: "hidden", attrs: { "href": url, "target": "_blank" } }), _v(" "), _c('span', { staticClass: "topText" }, [_c('span', { staticClass: "description" }, [_v(_s(description))]), _v(" "), place !== null ? _c('span', { staticClass: "place" }, [_v("@" + _s(place))]) : _e()]), _v(" "), _c('div', { staticClass: "fix-aspect-ratio" }, [_c('div', { staticClass: "imgContainer fix-aspect-ratio-contents" }, [_c('video', { style: style, attrs: { "preload": "auto", "poster": imgSrc, "loop": "", "onmouseover": "this.play()", "onmouseout": "this.pause()" }, domProps: { "muted": true } }, [_c('source', { attrs: { "src": videoSrc, "type": "video/mp4" } })]), _v(" "), _c('span', { staticClass: "placeholder" })])]), _v(" "), _c('div', { staticClass: "overlay-icons" }, [hasVideo ? _c('i', { attrs: { "data-feather": "play-circle" } }) : _e()])]);
    }
  };staticRenderFns = [];module.exports = { render: render, staticRenderFns: staticRenderFns };
});
System.register("vue/small-project-tile.vue.js", ["npm:vue@2.5.14.js", "styles/project-tile.less!npm:systemjs-less-plugin@2.2.3.js", "styles/small-project-tile.less!npm:systemjs-less-plugin@2.2.3.js", "vue/small-project-tile.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js"], function (_export) {
  "use strict";

  var Vue, template;
  return {
    setters: [function (_npmVue2514Js) {
      Vue = _npmVue2514Js["default"];
    }, function (_stylesProjectTileLessNpmSystemjsLessPlugin223Js) {}, function (_stylesSmallProjectTileLessNpmSystemjsLessPlugin223Js) {}, function (_vueSmallProjectTileVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js) {
      template = _vueSmallProjectTileVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js["default"];
    }],
    execute: function () {

      Vue.component('small-project-tile', {
        props: ['description', 'place', 'id', 'url', 'config', 'hasVideo'],
        render: template.render,
        staticRenderFns: template.staticRenderFns,

        computed: {
          videoSrc: function videoSrc() {
            return "videos/" + this.id + ".mp4";
          },

          imgSrc: function imgSrc() {
            return "images/" + this.id + ".png";
          },

          style: function style() {
            var ans = {
              top: (this.config && this.config.top || 0) + "%",
              left: (this.config && this.config.left || 0) + "%"
            };

            if (this.config && this.config.scale) {
              ans['max-height'] = this.config.scale + "%";
            }
            return ans;
          }
        },

        methods: {
          onClick: function onClick(event) {
            this.$refs.link.click();
          }
        }
      });
    }
  };
});
System.registerDynamic("styles/selected-projects.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("vue/selected-projects.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var render = function anonymous() {
    with (this) {
      return _c('dt-section', { attrs: { "id": "selected-projects" } }, [_c('h1', { staticClass: "title l-page" }, [_v("Selected Projects")]), _v(" "), _c('div', { staticClass: "large-projects l-page" }, _l(largeProjects, function (project) {
        return _c('large-project-tile', { attrs: { "id": project.id, "description": project.shortDescription, "place": project.place, "config": project.config, "url": project.url, "hasVideo": project.hasVideo } });
      })), _v(" "), _c('div', { staticClass: "small-projects l-page" }, _l(smallProjects, function (project) {
        return _c('small-project-tile', { attrs: { "id": project.id, "description": project.shortDescription, "place": project.place, "config": project.config, "url": project.url, "hasVideo": project.hasVideo } });
      }))]);
    }
  };staticRenderFns = [];module.exports = { render: render, staticRenderFns: staticRenderFns };
});
System.register("vue/selected-projects.vue.js", ["npm:vue@2.5.14.js", "vue/large-project-tile.vue.js", "vue/small-project-tile.vue.js", "styles/selected-projects.less!npm:systemjs-less-plugin@2.2.3.js", "vue/selected-projects.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js"], function (_export) {
  "use strict";

  var Vue, template;
  return {
    setters: [function (_npmVue2514Js) {
      Vue = _npmVue2514Js["default"];
    }, function (_vueLargeProjectTileVueJs) {}, function (_vueSmallProjectTileVueJs) {}, function (_stylesSelectedProjectsLessNpmSystemjsLessPlugin223Js) {}, function (_vueSelectedProjectsVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js) {
      template = _vueSelectedProjectsVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js["default"];
    }],
    execute: function () {

      Vue.component('selected-projects', {
        props: ['largeProjects', 'smallProjects'],
        render: template.render,
        staticRenderFns: template.staticRenderFns
      });
    }
  };
});
System.registerDynamic('npm:process@0.11.10/browser.js', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
        return [];
    };

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
System.registerDynamic("npm:process@0.11.10.js", ["npm:process@0.11.10/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:process@0.11.10/browser.js");
});
System.registerDynamic('github:jspm/nodelibs-process@0.1.2/index.js', ['npm:process@0.11.10.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.10.js');
});
System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-process@0.1.2/index.js");
});
System.registerDynamic('npm:vue@2.5.14/dist/vue.runtime.common.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyObject = Object.freeze({});
    function isUndef(v) {
      return v === undefined || v === null;
    }
    function isDef(v) {
      return v !== undefined && v !== null;
    }
    function isTrue(v) {
      return v === true;
    }
    function isFalse(v) {
      return v === false;
    }
    function isPrimitive(value) {
      return typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean';
    }
    function isObject(obj) {
      return obj !== null && typeof obj === 'object';
    }
    var _toString = Object.prototype.toString;
    function toRawType(value) {
      return _toString.call(value).slice(8, -1);
    }
    function isPlainObject(obj) {
      return _toString.call(obj) === '[object Object]';
    }
    function isRegExp(v) {
      return _toString.call(v) === '[object RegExp]';
    }
    function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val);
    }
    function toString(val) {
      return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
    }
    function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
    }
    function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? function (val) {
        return map[val.toLowerCase()];
      } : function (val) {
        return map[val];
      };
    }
    var isBuiltInTag = makeMap('slot,component', true);
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
    function remove(arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1);
        }
      }
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }
    function cached(fn) {
      var cache = Object.create(null);
      return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    }
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
    });
    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase();
    });
    function polyfillBind(fn, ctx) {
      function boundFn(a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
      }
      boundFn._length = fn.length;
      return boundFn;
    }
    function nativeBind(fn, ctx) {
      return fn.bind(ctx);
    }
    var bind = Function.prototype.bind ? nativeBind : polyfillBind;
    function toArray(list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret;
    }
    function extend(to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to;
    }
    function toObject(arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res;
    }
    function noop(a, b, c) {}
    var no = function (a, b, c) {
      return false;
    };
    var identity = function (_) {
      return _;
    };
    function looseEqual(a, b) {
      if (a === b) {
        return true;
      }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i]);
            });
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key]);
            });
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
      } else {
        return false;
      }
    }
    function looseIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
          return i;
        }
      }
      return -1;
    }
    function once(fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      };
    }
    var SSR_ATTR = 'data-server-rendered';
    var ASSET_TYPES = ['component', 'directive', 'filter'];
    var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];
    var config = {
      optionMergeStrategies: Object.create(null),
      silent: false,
      productionTip: 'production' !== 'production',
      devtools: 'production' !== 'production',
      performance: false,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: no,
      isReservedAttr: no,
      isUnknownElement: no,
      getTagNamespace: noop,
      parsePlatformTagName: identity,
      mustUseProp: no,
      _lifecycleHooks: LIFECYCLE_HOOKS
    };
    function isReserved(str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F;
    }
    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    var bailRE = /[^\w.$]/;
    function parsePath(path) {
      if (bailRE.test(path)) {
        return;
      }
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) {
            return;
          }
          obj = obj[segments[i]];
        }
        return obj;
      };
    }
    var hasProto = '__proto__' in {};
    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var nativeWatch = {}.watch;
    var supportsPassive = false;
    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', { get: function get() {
            supportsPassive = true;
          } });
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    }
    var _isServer;
    var isServerRendering = function () {
      if (_isServer === undefined) {
        if (!inBrowser && !inWeex && typeof global !== 'undefined') {
          _isServer = global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }
      return _isServer;
    };
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function isNative(Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
    }
    var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
    var _Set;
    if (typeof Set !== 'undefined' && isNative(Set)) {
      _Set = Set;
    } else {
      _Set = function () {
        function Set() {
          this.set = Object.create(null);
        }
        Set.prototype.has = function has(key) {
          return this.set[key] === true;
        };
        Set.prototype.add = function add(key) {
          this.set[key] = true;
        };
        Set.prototype.clear = function clear() {
          this.set = Object.create(null);
        };
        return Set;
      }();
    }
    var warn = noop;
    var tip = noop;
    var generateComponentTrace = noop;
    var formatComponentName = noop;
    if ('production' !== 'production') {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = function (str) {
        return str.replace(classifyRE, function (c) {
          return c.toUpperCase();
        }).replace(/[-_]/g, '');
      };
      warn = function (msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';
        if (config.warnHandler) {
          config.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && !config.silent) {
          console.error("[Vue warn]: " + msg + trace);
        }
      };
      tip = function (msg, vm) {
        if (hasConsole && !config.silent) {
          console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
        }
      };
      formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
          return '<Root>';
        }
        var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
        var name = options.name || options._componentTag;
        var file = options.__file;
        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }
        return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
      };
      var repeat = function (str, n) {
        var res = '';
        while (n) {
          if (n % 2 === 1) {
            res += str;
          }
          if (n > 1) {
            str += str;
          }
          n >>= 1;
        }
        return res;
      };
      generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;
          while (vm) {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];
              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue;
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }
            tree.push(vm);
            vm = vm.$parent;
          }
          return '\n\nfound in\n\n' + tree.map(function (vm, i) {
            return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
          }).join('\n');
        } else {
          return "\n\n(found in " + formatComponentName(vm) + ")";
        }
      };
    }
    var uid = 0;
    var Dep = function Dep() {
      this.id = uid++;
      this.subs = [];
    };
    Dep.prototype.addSub = function addSub(sub) {
      this.subs.push(sub);
    };
    Dep.prototype.removeSub = function removeSub(sub) {
      remove(this.subs, sub);
    };
    Dep.prototype.depend = function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };
    Dep.prototype.notify = function notify() {
      var subs = this.subs.slice();
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };
    Dep.target = null;
    var targetStack = [];
    function pushTarget(_target) {
      if (Dep.target) {
        targetStack.push(Dep.target);
      }
      Dep.target = _target;
    }
    function popTarget() {
      Dep.target = targetStack.pop();
    }
    var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };
    var prototypeAccessors = { child: { configurable: true } };
    prototypeAccessors.child.get = function () {
      return this.componentInstance;
    };
    Object.defineProperties(VNode.prototype, prototypeAccessors);
    var createEmptyVNode = function (text) {
      if (text === void 0) text = '';
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node;
    };
    function createTextVNode(val) {
      return new VNode(undefined, undefined, undefined, String(val));
    }
    function cloneVNode(vnode) {
      var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.isCloned = true;
      return cloned;
    }
    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);
    var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
    methodsToPatch.forEach(function (method) {
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break;
          case 'splice':
            inserted = args.slice(2);
            break;
        }
        if (inserted) {
          ob.observeArray(inserted);
        }
        ob.dep.notify();
        return result;
      });
    });
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    var shouldObserve = true;
    function toggleObserving(value) {
      shouldObserve = value;
    }
    var Observer = function Observer(value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, '__ob__', this);
      if (Array.isArray(value)) {
        var augment = hasProto ? protoAugment : copyAugment;
        augment(value, arrayMethods, arrayKeys);
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
    Observer.prototype.walk = function walk(obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i]);
      }
    };
    Observer.prototype.observeArray = function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };
    function protoAugment(target, src, keys) {
      target.__proto__ = src;
    }
    function copyAugment(target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
      }
    }
    function observe(value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return;
      }
      var ob;
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
        ob = new Observer(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob;
    }
    function defineReactive(obj, key, val, customSetter, shallow) {
      var dep = new Dep();
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return;
      }
      var getter = property && property.get;
      if (!getter && arguments.length === 2) {
        val = obj[key];
      }
      var setter = property && property.set;
      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value;
        },
        set: function reactiveSetter(newVal) {
          var value = getter ? getter.call(obj) : val;
          if (newVal === value || newVal !== newVal && value !== value) {
            return;
          }
          if ('production' !== 'production' && customSetter) {
            customSetter();
          }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }
    function set(target, key, val) {
      if ('production' !== 'production' && !Array.isArray(target) && !isObject(target)) {
        warn("Cannot set reactive property on non-object/array value: " + target);
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
      }
      var ob = target.__ob__;
      if (target._isVue || ob && ob.vmCount) {
        'production' !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
        return val;
      }
      if (!ob) {
        target[key] = val;
        return val;
      }
      defineReactive(ob.value, key, val);
      ob.dep.notify();
      return val;
    }
    function del(target, key) {
      if ('production' !== 'production' && !Array.isArray(target) && !isObject(target)) {
        warn("Cannot delete reactive property on non-object/array value: " + target);
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
      }
      var ob = target.__ob__;
      if (target._isVue || ob && ob.vmCount) {
        'production' !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
        return;
      }
      if (!hasOwn(target, key)) {
        return;
      }
      delete target[key];
      if (!ob) {
        return;
      }
      ob.dep.notify();
    }
    function dependArray(value) {
      for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }
    var strats = config.optionMergeStrategies;
    if ('production' !== 'production') {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
      };
    }
    function mergeData(to, from) {
      if (!from) {
        return to;
      }
      var key, toVal, fromVal;
      var keys = Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
          mergeData(toVal, fromVal);
        }
      }
      return to;
    }
    function mergeDataOrFn(parentVal, childVal, vm) {
      if (!vm) {
        if (!childVal) {
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        return function mergedDataFn() {
          return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
        };
      } else {
        return function mergedInstanceDataFn() {
          var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
          var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData);
          } else {
            return defaultData;
          }
        };
      }
    }
    strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
          'production' !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
          return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
      }
      return mergeDataOrFn(parentVal, childVal, vm);
    };
    function mergeHook(parentVal, childVal) {
      return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    }
    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });
    function mergeAssets(parentVal, childVal, vm, key) {
      var res = Object.create(parentVal || null);
      if (childVal) {
        'production' !== 'production' && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
      } else {
        return res;
      }
    }
    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });
    strats.watch = function (parentVal, childVal, vm, key) {
      if (parentVal === nativeWatch) {
        parentVal = undefined;
      }
      if (childVal === nativeWatch) {
        childVal = undefined;
      }
      if (!childVal) {
        return Object.create(parentVal || null);
      }
      if ('production' !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) {
        return childVal;
      }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
      }
      return ret;
    };
    strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
      if (childVal && 'production' !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) {
        return childVal;
      }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) {
        extend(ret, childVal);
      }
      return ret;
    };
    strats.provide = mergeDataOrFn;
    var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined ? parentVal : childVal;
    };
    function checkComponents(options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }
    function validateComponentName(name) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
      if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
      }
    }
    function normalizeProps(options, vm) {
      var props = options.props;
      if (!props) {
        return;
      }
      var res = {};
      var i, val, name;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = { type: null };
          } else if ('production' !== 'production') {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          res[name] = isPlainObject(val) ? val : { type: val };
        }
      } else if ('production' !== 'production') {
        warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
      }
      options.props = res;
    }
    function normalizeInject(options, vm) {
      var inject = options.inject;
      if (!inject) {
        return;
      }
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = { from: inject[i] };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
        }
      } else if ('production' !== 'production') {
        warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
      }
    }
    function normalizeDirectives(options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def = dirs[key];
          if (typeof def === 'function') {
            dirs[key] = {
              bind: def,
              update: def
            };
          }
        }
      }
    }
    function assertObjectType(name, value, vm) {
      if (!isPlainObject(value)) {
        warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
      }
    }
    function mergeOptions(parent, child, vm) {
      if ('production' !== 'production') {
        checkComponents(child);
      }
      if (typeof child === 'function') {
        child = child.options;
      }
      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child);
      var extendsFrom = child.extends;
      if (extendsFrom) {
        parent = mergeOptions(parent, extendsFrom, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options;
    }
    function resolveAsset(options, type, id, warnMissing) {
      if (typeof id !== 'string') {
        return;
      }
      var assets = options[type];
      if (hasOwn(assets, id)) {
        return assets[id];
      }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) {
        return assets[camelizedId];
      }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) {
        return assets[PascalCaseId];
      }
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if ('production' !== 'production' && warnMissing && !res) {
        warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
      }
      return res;
    }
    function validateProp(key, propOptions, propsData, vm) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (value === '' || value === hyphenate(key)) {
          var stringIndex = getTypeIndex(String, prop.type);
          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      }
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }
      if ('production' !== 'production' && !(false && isObject(value) && '@binding' in value)) {
        assertProp(prop, key, value, vm, absent);
      }
      return value;
    }
    function getPropDefaultValue(vm, prop, key) {
      if (!hasOwn(prop, 'default')) {
        return undefined;
      }
      var def = prop.default;
      if ('production' !== 'production' && isObject(def)) {
        warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
      }
      if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
        return vm._props[key];
      }
      return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
    }
    function assertProp(prop, name, value, vm, absent) {
      if (prop.required && absent) {
        warn('Missing required prop: "' + name + '"', vm);
        return;
      }
      if (value == null && !prop.required) {
        return;
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }
      if (!valid) {
        warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
        return;
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
      }
    }
    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
    function assertType(value, type) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }
      return {
        valid: valid,
        expectedType: expectedType
      };
    }
    function getType(fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : '';
    }
    function isSameType(a, b) {
      return getType(a) === getType(b);
    }
    function getTypeIndex(type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i;
        }
      }
      return -1;
    }
    function handleError(err, vm, info) {
      if (vm) {
        var cur = vm;
        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    }
    function globalHandleError(err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info);
        } catch (e) {
          logError(e, null, 'config.errorHandler');
        }
      }
      logError(err, vm, info);
    }
    function logError(err, vm, info) {
      if ('production' !== 'production') {
        warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
      }
      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err;
      }
    }
    var callbacks = [];
    var pending = false;
    function flushCallbacks() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
    var microTimerFunc;
    var macroTimerFunc;
    var useMacroTask = false;
    if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      macroTimerFunc = function () {
        setImmediate(flushCallbacks);
      };
    } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) || MessageChannel.toString() === '[object MessageChannelConstructor]')) {
      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = flushCallbacks;
      macroTimerFunc = function () {
        port.postMessage(1);
      };
    } else {
      macroTimerFunc = function () {
        setTimeout(flushCallbacks, 0);
      };
    }
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      microTimerFunc = function () {
        p.then(flushCallbacks);
        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else {
      microTimerFunc = macroTimerFunc;
    }
    function withMacroTask(fn) {
      return fn._withTask || (fn._withTask = function () {
        useMacroTask = true;
        var res = fn.apply(null, arguments);
        useMacroTask = false;
        return res;
      });
    }
    function nextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        if (useMacroTask) {
          macroTimerFunc();
        } else {
          microTimerFunc();
        }
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        });
      }
    }
    var initProxy;
    if ('production' !== 'production') {
      var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');
      var warnNonPresent = function (target, key) {
        warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
      };
      var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);
      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, { set: function set(target, key, value) {
            if (isBuiltInModifier(key)) {
              warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
              return false;
            } else {
              target[key] = value;
              return true;
            }
          } });
      }
      var hasHandler = { has: function has(target, key) {
          var has = key in target;
          var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
          if (!has && !isAllowed) {
            warnNonPresent(target, key);
          }
          return has || !isAllowed;
        } };
      var getHandler = { get: function get(target, key) {
          if (typeof key === 'string' && !(key in target)) {
            warnNonPresent(target, key);
          }
          return target[key];
        } };
      initProxy = function initProxy(vm) {
        if (hasProxy) {
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }
    var seenObjects = new _Set();
    function traverse(val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }
    function _traverse(val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if (!isA && !isObject(val) || Object.isFrozen(val)) {
        return;
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return;
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) {
          _traverse(val[i], seen);
        }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) {
          _traverse(val[keys[i]], seen);
        }
      }
    }
    var mark;
    var measure;
    if ('production' !== 'production') {
      var perf = inBrowser && window.performance;
      if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
        mark = function (tag) {
          return perf.mark(tag);
        };
        measure = function (name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
          perf.clearMeasures(name);
        };
      }
    }
    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~';
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      };
    });
    function createFnInvoker(fns) {
      function invoker() {
        var arguments$1 = arguments;
        var fns = invoker.fns;
        if (Array.isArray(fns)) {
          var cloned = fns.slice();
          for (var i = 0; i < cloned.length; i++) {
            cloned[i].apply(null, arguments$1);
          }
        } else {
          return fns.apply(null, arguments);
        }
      }
      invoker.fns = fns;
      return invoker;
    }
    function updateListeners(on, oldOn, add, remove$$1, vm) {
      var name, def, cur, old, event;
      for (name in on) {
        def = cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
          'production' !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur);
          }
          add(event.name, cur, event.once, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }
    function mergeVNodeHook(def, hookKey, hook) {
      if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];
      function wrappedHook() {
        hook.apply(this, arguments);
        remove(invoker.fns, wrappedHook);
      }
      if (isUndef(oldHook)) {
        invoker = createFnInvoker([wrappedHook]);
      } else {
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }
      invoker.merged = true;
      def[hookKey] = invoker;
    }
    function extractPropsFromVNodeData(data, Ctor, tag) {
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return;
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          if ('production' !== 'production') {
            var keyInLowerCase = key.toLowerCase();
            if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
              tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
            }
          }
          checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
        }
      }
      return res;
    }
    function checkProp(res, hash, key, altKey, preserve) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true;
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true;
        }
      }
      return false;
    }
    function simpleNormalizeChildren(children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children);
        }
      }
      return children;
    }
    function normalizeChildren(children) {
      return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
    }
    function isTextNode(node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment);
    }
    function normalizeArrayChildren(children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean') {
          continue;
        }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + c[0].text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res;
    }
    function ensureCtor(comp, base) {
      if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
        comp = comp.default;
      }
      return isObject(comp) ? base.extend(comp) : comp;
    }
    function createAsyncPlaceholder(factory, data, context, children, tag) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = {
        data: data,
        context: context,
        children: children,
        tag: tag
      };
      return node;
    }
    function resolveAsyncComponent(factory, baseCtor, context) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
      }
      if (isDef(factory.resolved)) {
        return factory.resolved;
      }
      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
      }
      if (isDef(factory.contexts)) {
        factory.contexts.push(context);
      } else {
        var contexts = factory.contexts = [context];
        var sync = true;
        var forceRender = function () {
          for (var i = 0, l = contexts.length; i < l; i++) {
            contexts[i].$forceUpdate();
          }
        };
        var resolve = once(function (res) {
          factory.resolved = ensureCtor(res, baseCtor);
          if (!sync) {
            forceRender();
          }
        });
        var reject = once(function (reason) {
          'production' !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender();
          }
        });
        var res = factory(resolve, reject);
        if (isObject(res)) {
          if (typeof res.then === 'function') {
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isDef(res.component) && typeof res.component.then === 'function') {
            res.component.then(resolve, reject);
            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }
            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                setTimeout(function () {
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender();
                  }
                }, res.delay || 200);
              }
            }
            if (isDef(res.timeout)) {
              setTimeout(function () {
                if (isUndef(factory.resolved)) {
                  reject('production' !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
                }
              }, res.timeout);
            }
          }
        }
        sync = false;
        return factory.loading ? factory.loadingComp : factory.resolved;
      }
    }
    function isAsyncPlaceholder(node) {
      return node.isComment && node.asyncFactory;
    }
    function getFirstComponentChild(children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c;
          }
        }
      }
    }
    function initEvents(vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }
    var target;
    function add(event, fn, once) {
      if (once) {
        target.$once(event, fn);
      } else {
        target.$on(event, fn);
      }
    }
    function remove$1(event, fn) {
      target.$off(event, fn);
    }
    function updateComponentListeners(vm, listeners, oldListeners) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
      target = undefined;
    }
    function eventsMixin(Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
        var this$1 = this;
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            this$1.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm;
      };
      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
      };
      Vue.prototype.$off = function (event, fn) {
        var this$1 = this;
        var vm = this;
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm;
        }
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            this$1.$off(event[i], fn);
          }
          return vm;
        }
        var cbs = vm._events[event];
        if (!cbs) {
          return vm;
        }
        if (!fn) {
          vm._events[event] = null;
          return vm;
        }
        if (fn) {
          var cb;
          var i$1 = cbs.length;
          while (i$1--) {
            cb = cbs[i$1];
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i$1, 1);
              break;
            }
          }
        }
        return vm;
      };
      Vue.prototype.$emit = function (event) {
        var vm = this;
        if ('production' !== 'production') {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
          }
        }
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          for (var i = 0, l = cbs.length; i < l; i++) {
            try {
              cbs[i].apply(vm, args);
            } catch (e) {
              handleError(e, vm, "event handler for \"" + event + "\"");
            }
          }
        }
        return vm;
      };
    }
    function resolveSlots(children, context) {
      var slots = {};
      if (!children) {
        return slots;
      }
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
          var name = data.slot;
          var slot = slots[name] || (slots[name] = []);
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots;
    }
    function isWhitespace(node) {
      return node.isComment && !node.asyncFactory || node.text === ' ';
    }
    function resolveScopedSlots(fns, res) {
      res = res || {};
      for (var i = 0; i < fns.length; i++) {
        if (Array.isArray(fns[i])) {
          resolveScopedSlots(fns[i], res);
        } else {
          res[fns[i].key] = fns[i].fn;
        }
      }
      return res;
    }
    var activeInstance = null;
    var isUpdatingChildComponent = false;
    function initLifecycle(vm) {
      var options = vm.$options;
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
      vm.$children = [];
      vm.$refs = {};
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }
    function lifecycleMixin(Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate');
        }
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var prevActiveInstance = activeInstance;
        activeInstance = vm;
        vm._vnode = vnode;
        if (!prevVnode) {
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);
          vm.$options._parentElm = vm.$options._refElm = null;
        } else {
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        activeInstance = prevActiveInstance;
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
      };
      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };
      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return;
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        vm._isDestroyed = true;
        vm.__patch__(vm._vnode, null);
        callHook(vm, 'destroyed');
        vm.$off();
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }
    function mountComponent(vm, el, hydrating) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        if ('production' !== 'production') {
          if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
            warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
          } else {
            warn('Failed to mount component: template or render function not defined.', vm);
          }
        }
      }
      callHook(vm, 'beforeMount');
      var updateComponent;
      if ('production' !== 'production' && config.performance && mark) {
        updateComponent = function () {
          var name = vm._name;
          var id = vm._uid;
          var startTag = "vue-perf-start:" + id;
          var endTag = "vue-perf-end:" + id;
          mark(startTag);
          var vnode = vm._render();
          mark(endTag);
          measure("vue " + name + " render", startTag, endTag);
          mark(startTag);
          vm._update(vnode, hydrating);
          mark(endTag);
          measure("vue " + name + " patch", startTag, endTag);
        };
      } else {
        updateComponent = function () {
          vm._update(vm._render(), hydrating);
        };
      }
      new Watcher(vm, updateComponent, noop, null, true);
      hydrating = false;
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm;
    }
    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
      if ('production' !== 'production') {
        isUpdatingChildComponent = true;
      }
      var hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== emptyObject);
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode;
      if (vm._vnode) {
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject;
      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props;
          props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        vm.$options.propsData = propsData;
      }
      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
      if (hasChildren) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }
      if ('production' !== 'production') {
        isUpdatingChildComponent = false;
      }
    }
    function isInInactiveTree(vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) {
          return true;
        }
      }
      return false;
    }
    function activateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return;
        }
      } else if (vm._directInactive) {
        return;
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'activated');
      }
    }
    function deactivateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return;
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'deactivated');
      }
    }
    function callHook(vm, hook) {
      pushTarget();
      var handlers = vm.$options[hook];
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          try {
            handlers[i].call(vm);
          } catch (e) {
            handleError(e, vm, hook + " hook");
          }
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }
      popTarget();
    }
    var MAX_UPDATE_COUNT = 100;
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    function resetSchedulerState() {
      index = queue.length = activatedChildren.length = 0;
      has = {};
      if ('production' !== 'production') {
        circular = {};
      }
      waiting = flushing = false;
    }
    function flushSchedulerQueue() {
      flushing = true;
      var watcher, id;
      queue.sort(function (a, b) {
        return a.id - b.id;
      });
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        id = watcher.id;
        has[id] = null;
        watcher.run();
        if ('production' !== 'production' && has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > MAX_UPDATE_COUNT) {
            warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
            break;
          }
        }
      }
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
      resetSchedulerState();
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);
      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
    }
    function callUpdatedHooks(queue) {
      var i = queue.length;
      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted) {
          callHook(vm, 'updated');
        }
      }
    }
    function queueActivatedComponent(vm) {
      vm._inactive = false;
      activatedChildren.push(vm);
    }
    function callActivatedHooks(queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true);
      }
    }
    function queueWatcher(watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          var i = queue.length - 1;
          while (i > index && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(i + 1, 0, watcher);
        }
        if (!waiting) {
          waiting = true;
          nextTick(flushSchedulerQueue);
        }
      }
    }
    var uid$1 = 0;
    var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$1;
      this.active = true;
      this.dirty = this.lazy;
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = 'production' !== 'production' ? expOrFn.toString() : '';
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = function () {};
          'production' !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
        }
      }
      this.value = this.lazy ? undefined : this.get();
    };
    Watcher.prototype.get = function get() {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
        } else {
          throw e;
        }
      } finally {
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value;
    };
    Watcher.prototype.addDep = function addDep(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    Watcher.prototype.cleanupDeps = function cleanupDeps() {
      var this$1 = this;
      var i = this.deps.length;
      while (i--) {
        var dep = this$1.deps[i];
        if (!this$1.newDepIds.has(dep.id)) {
          dep.removeSub(this$1);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
    Watcher.prototype.update = function update() {
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
    Watcher.prototype.run = function run() {
      if (this.active) {
        var value = this.get();
        if (value !== this.value || isObject(value) || this.deep) {
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    Watcher.prototype.evaluate = function evaluate() {
      this.value = this.get();
      this.dirty = false;
    };
    Watcher.prototype.depend = function depend() {
      var this$1 = this;
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].depend();
      }
    };
    Watcher.prototype.teardown = function teardown() {
      var this$1 = this;
      if (this.active) {
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this$1.deps[i].removeSub(this$1);
        }
        this.active = false;
      }
    };
    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };
    function proxy(target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
      };
      sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    function initState(vm) {
      vm._watchers = [];
      var opts = vm.$options;
      if (opts.props) {
        initProps(vm, opts.props);
      }
      if (opts.methods) {
        initMethods(vm, opts.methods);
      }
      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true);
      }
      if (opts.computed) {
        initComputed(vm, opts.computed);
      }
      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }
    function initProps(vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {};
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      if (!isRoot) {
        toggleObserving(false);
      }
      var loop = function (key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        if ('production' !== 'production') {
          var hyphenatedKey = hyphenate(key);
          if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
            warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
          }
          defineReactive(props, key, value, function () {
            if (vm.$parent && !isUpdatingChildComponent) {
              warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
            }
          });
        } else {
          defineReactive(props, key, value);
        }
        if (!(key in vm)) {
          proxy(vm, "_props", key);
        }
      };
      for (var key in propsOptions) loop(key);
      toggleObserving(true);
    }
    function initData(vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
      if (!isPlainObject(data)) {
        data = {};
        'production' !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
      }
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        if ('production' !== 'production') {
          if (methods && hasOwn(methods, key)) {
            warn("Method \"" + key + "\" has already been defined as a data property.", vm);
          }
        }
        if (props && hasOwn(props, key)) {
          'production' !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
        } else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      }
      observe(data, true);
    }
    function getData(data, vm) {
      pushTarget();
      try {
        return data.call(vm, vm);
      } catch (e) {
        handleError(e, vm, "data()");
        return {};
      } finally {
        popTarget();
      }
    }
    var computedWatcherOptions = { lazy: true };
    function initComputed(vm, computed) {
      var watchers = vm._computedWatchers = Object.create(null);
      var isSSR = isServerRendering();
      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;
        if ('production' !== 'production' && getter == null) {
          warn("Getter is missing for computed property \"" + key + "\".", vm);
        }
        if (!isSSR) {
          watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else if ('production' !== 'production') {
          if (key in vm.$data) {
            warn("The computed property \"" + key + "\" is already defined in data.", vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
          }
        }
      }
    }
    function defineComputed(target, key, userDef) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
        sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
      }
      if ('production' !== 'production' && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
        };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    function createComputedGetter(key) {
      return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value;
        }
      };
    }
    function initMethods(vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
        if ('production' !== 'production') {
          if (methods[key] == null) {
            warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
          }
          if (props && hasOwn(props, key)) {
            warn("Method \"" + key + "\" has already been defined as a prop.", vm);
          }
          if (key in vm && isReserved(key)) {
            warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
          }
        }
        vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
      }
    }
    function initWatch(vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }
    function createWatcher(vm, expOrFn, handler, options) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options);
    }
    function stateMixin(Vue) {
      var dataDef = {};
      dataDef.get = function () {
        return this._data;
      };
      var propsDef = {};
      propsDef.get = function () {
        return this._props;
      };
      if ('production' !== 'production') {
        dataDef.set = function (newData) {
          warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
        };
        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);
      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;
      Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          cb.call(vm, watcher.value);
        }
        return function unwatchFn() {
          watcher.teardown();
        };
      };
    }
    function initProvide(vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
      }
    }
    function initInjections(vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
          if ('production' !== 'production') {
            defineReactive(vm, key, result[key], function () {
              warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
            });
          } else {
            defineReactive(vm, key, result[key]);
          }
        });
        toggleObserving(true);
      }
    }
    function resolveInject(inject, vm) {
      if (inject) {
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
          return Object.getOwnPropertyDescriptor(inject, key).enumerable;
        }) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break;
            }
            source = source.$parent;
          }
          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
            } else if ('production' !== 'production') {
              warn("Injection \"" + key + "\" not found", vm);
            }
          }
        }
        return result;
      }
    }
    function renderList(val, render) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
      if (isDef(ret)) {
        ret._isVList = true;
      }
      return ret;
    }
    function renderSlot(name, fallback, props, bindObject) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) {
        props = props || {};
        if (bindObject) {
          if ('production' !== 'production' && !isObject(bindObject)) {
            warn('slot v-bind without argument expects an Object', this);
          }
          props = extend(extend({}, bindObject), props);
        }
        nodes = scopedSlotFn(props) || fallback;
      } else {
        var slotNodes = this.$slots[name];
        if (slotNodes) {
          if ('production' !== 'production' && slotNodes._rendered) {
            warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
          }
          slotNodes._rendered = true;
        }
        nodes = slotNodes || fallback;
      }
      var target = props && props.slot;
      if (target) {
        return this.$createElement('template', { slot: target }, nodes);
      } else {
        return nodes;
      }
    }
    function resolveFilter(id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity;
    }
    function isKeyNotMatch(expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1;
      } else {
        return expect !== actual;
      }
    }
    function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
      }
    }
    function bindObjectProps(data, tag, value, asProp, isSync) {
      if (value) {
        if (!isObject(value)) {
          'production' !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function (key) {
            if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
            }
            if (!(key in hash)) {
              hash[key] = value[key];
              if (isSync) {
                var on = data.on || (data.on = {});
                on["update:" + key] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };
          for (var key in value) loop(key);
        }
      }
      return data;
    }
    function renderStatic(index, isInFor) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      if (tree && !isInFor) {
        return tree;
      }
      tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
      markStatic(tree, "__static__" + index, false);
      return tree;
    }
    function markOnce(tree, index, key) {
      markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
      return tree;
    }
    function markStatic(tree, key, isOnce) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], key + "_" + i, isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }
    function markStaticNode(node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }
    function bindObjectListeners(data, value) {
      if (value) {
        if (!isPlainObject(value)) {
          'production' !== 'production' && warn('v-on without argument expects an Object value', this);
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data;
    }
    function installRenderHelpers(target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
    }
    function FunctionalRenderContext(data, props, children, parent, Ctor) {
      var options = Ctor.options;
      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () {
        return resolveSlots(children, parent);
      };
      var contextVm = Object.create(parent);
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
      if (isCompiled) {
        this.$options = options;
        this.$slots = this.slots();
        this.$scopedSlots = data.scopedSlots || emptyObject;
      }
      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode;
        };
      } else {
        this._c = function (a, b, c, d) {
          return createElement(contextVm, a, b, c, d, needNormalization);
        };
      }
    }
    installRenderHelpers(FunctionalRenderContext.prototype);
    function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) {
          mergeProps(props, data.attrs);
        }
        if (isDef(data.props)) {
          mergeProps(props, data.props);
        }
      }
      var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
      var vnode = options.render.call(null, renderContext._c, renderContext);
      if (vnode instanceof VNode) {
        setFunctionalContextForVNode(vnode, data, contextVm, options);
        return vnode;
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        for (var i = 0; i < vnodes.length; i++) {
          setFunctionalContextForVNode(vnodes[i], data, contextVm, options);
        }
        return vnodes;
      }
    }
    function setFunctionalContextForVNode(vnode, data, vm, options) {
      vnode.fnContext = vm;
      vnode.fnOptions = options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }
    function mergeProps(to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }
    var componentVNodeHooks = {
      init: function init(vnode, hydrating, parentElm, refElm) {
        if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
          var mountedNode = vnode;
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      },
      prepatch: function prepatch(oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
      },
      insert: function insert(vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true);
          }
        }
      },
      destroy: function destroy(vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true);
          }
        }
      }
    };
    var hooksToMerge = Object.keys(componentVNodeHooks);
    function createComponent(Ctor, data, context, children, tag) {
      if (isUndef(Ctor)) {
        return;
      }
      var baseCtor = context.$options._base;
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }
      if (typeof Ctor !== 'function') {
        if ('production' !== 'production') {
          warn("Invalid Component definition: " + String(Ctor), context);
        }
        return;
      }
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
        if (Ctor === undefined) {
          return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
      }
      data = data || {};
      resolveConstructorOptions(Ctor);
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
      }
      var listeners = data.on;
      data.on = data.nativeOn;
      if (isTrue(Ctor.options.abstract)) {
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }
      mergeHooks(data);
      var name = Ctor.options.name || tag;
      var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
        Ctor: Ctor,
        propsData: propsData,
        listeners: listeners,
        tag: tag,
        children: children
      }, asyncFactory);
      return vnode;
    }
    function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
      var options = {
        _isComponent: true,
        parent: parent,
        _parentVnode: vnode,
        _parentElm: parentElm || null,
        _refElm: refElm || null
      };
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options);
    }
    function mergeHooks(data) {
      if (!data.hook) {
        data.hook = {};
      }
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var fromParent = data.hook[key];
        var ours = componentVNodeHooks[key];
        data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
      }
    }
    function mergeHook$1(one, two) {
      return function (a, b, c, d) {
        one(a, b, c, d);
        two(a, b, c, d);
      };
    }
    function transformModel(options, data) {
      var prop = options.model && options.model.prop || 'value';
      var event = options.model && options.model.event || 'input';
      (data.props || (data.props = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      if (isDef(on[event])) {
        on[event] = [data.model.callback].concat(on[event]);
      } else {
        on[event] = data.model.callback;
      }
    }
    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;
    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType);
    }
    function _createElement(context, tag, data, children, normalizationType) {
      if (isDef(data) && isDef(data.__ob__)) {
        'production' !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
      }
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        return createEmptyVNode();
      }
      if ('production' !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        {
          warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
        }
      }
      if (Array.isArray(children) && typeof children[0] === 'function') {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
        var Ctor;
        ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
          vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
      } else {
        vnode = createComponent(tag, data, context, children);
      }
      if (Array.isArray(vnode)) {
        return vnode;
      } else if (isDef(vnode)) {
        if (isDef(ns)) {
          applyNS(vnode, ns);
        }
        if (isDef(data)) {
          registerDeepBindings(data);
        }
        return vnode;
      } else {
        return createEmptyVNode();
      }
    }
    function applyNS(vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
        ns = undefined;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
            applyNS(child, ns, force);
          }
        }
      }
    }
    function registerDeepBindings(data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }
      if (isObject(data.class)) {
        traverse(data.class);
      }
    }
    function initRender(vm) {
      vm._vnode = null;
      vm._staticTrees = null;
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode;
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      vm._c = function (a, b, c, d) {
        return createElement(vm, a, b, c, d, false);
      };
      vm.$createElement = function (a, b, c, d) {
        return createElement(vm, a, b, c, d, true);
      };
      var parentData = parentVnode && parentVnode.data;
      if ('production' !== 'production') {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      } else {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
      }
    }
    function renderMixin(Vue) {
      installRenderHelpers(Vue.prototype);
      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
      };
      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;
        if ('production' !== 'production') {
          for (var key in vm.$slots) {
            vm.$slots[key]._rendered = false;
          }
        }
        if (_parentVnode) {
          vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
        }
        vm.$vnode = _parentVnode;
        var vnode;
        try {
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          if ('production' !== 'production') {
            if (vm.$options.renderError) {
              try {
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
              } catch (e) {
                handleError(e, vm, "renderError");
                vnode = vm._vnode;
              }
            } else {
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
        if (!(vnode instanceof VNode)) {
          if ('production' !== 'production' && Array.isArray(vnode)) {
            warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
          }
          vnode = createEmptyVNode();
        }
        vnode.parent = _parentVnode;
        return vnode;
      };
    }
    var uid$3 = 0;
    function initMixin(Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        vm._uid = uid$3++;
        var startTag, endTag;
        if ('production' !== 'production' && config.performance && mark) {
          startTag = "vue-perf-start:" + vm._uid;
          endTag = "vue-perf-end:" + vm._uid;
          mark(startTag);
        }
        vm._isVue = true;
        if (options && options._isComponent) {
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        if ('production' !== 'production') {
          initProxy(vm);
        } else {
          vm._renderProxy = vm;
        }
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        initInjections(vm);
        initState(vm);
        initProvide(vm);
        callHook(vm, 'created');
        if ('production' !== 'production' && config.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure("vue " + vm._name + " init", startTag, endTag);
        }
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }
    function initInternalComponent(vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options);
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;
      opts._parentElm = options._parentElm;
      opts._refElm = options._refElm;
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;
      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }
    function resolveConstructorOptions(Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          Ctor.superOptions = superOptions;
          var modifiedOptions = resolveModifiedOptions(Ctor);
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options;
    }
    function resolveModifiedOptions(Ctor) {
      var modified;
      var latest = Ctor.options;
      var extended = Ctor.extendOptions;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) {
            modified = {};
          }
          modified[key] = dedupe(latest[key], extended[key], sealed[key]);
        }
      }
      return modified;
    }
    function dedupe(latest, extended, sealed) {
      if (Array.isArray(latest)) {
        var res = [];
        sealed = Array.isArray(sealed) ? sealed : [sealed];
        extended = Array.isArray(extended) ? extended : [extended];
        for (var i = 0; i < latest.length; i++) {
          if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
            res.push(latest[i]);
          }
        }
        return res;
      } else {
        return latest;
      }
    }
    function Vue(options) {
      if ('production' !== 'production' && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
    }
    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);
    function initUse(Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
          return this;
        }
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
      };
    }
    function initMixin$1(Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
      };
    }
    function initExtend(Vue) {
      Vue.cid = 0;
      var cid = 1;
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId];
        }
        var name = extendOptions.name || Super.options.name;
        if ('production' !== 'production' && name) {
          validateComponentName(name);
        }
        var Sub = function VueComponent(options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        });
        if (name) {
          Sub.options.components[name] = Sub;
        }
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        cachedCtors[SuperId] = Sub;
        return Sub;
      };
    }
    function initProps$1(Comp) {
      var props = Comp.options.props;
      for (var key in props) {
        proxy(Comp.prototype, "_props", key);
      }
    }
    function initComputed$1(Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }
    function initAssetRegisters(Vue) {
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (id, definition) {
          if (!definition) {
            return this.options[type + 's'][id];
          } else {
            if ('production' !== 'production' && type === 'component') {
              validateComponentName(id);
            }
            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = {
                bind: definition,
                update: definition
              };
            }
            this.options[type + 's'][id] = definition;
            return definition;
          }
        };
      });
    }
    function getComponentName(opts) {
      return opts && (opts.Ctor.options.name || opts.tag);
    }
    function matches(pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1;
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
      } else if (isRegExp(pattern)) {
        return pattern.test(name);
      }
      return false;
    }
    function pruneCache(keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var cachedNode = cache[key];
        if (cachedNode) {
          var name = getComponentName(cachedNode.componentOptions);
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }
    function pruneCacheEntry(cache, key, keys, current) {
      var cached$$1 = cache[key];
      if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
        cached$$1.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }
    var patternTypes = [String, RegExp, Array];
    var KeepAlive = {
      name: 'keep-alive',
      abstract: true,
      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },
      created: function created() {
        this.cache = Object.create(null);
        this.keys = [];
      },
      destroyed: function destroyed() {
        var this$1 = this;
        for (var key in this$1.cache) {
          pruneCacheEntry(this$1.cache, key, this$1.keys);
        }
      },
      watch: {
        include: function include(val) {
          pruneCache(this, function (name) {
            return matches(val, name);
          });
        },
        exclude: function exclude(val) {
          pruneCache(this, function (name) {
            return !matches(val, name);
          });
        }
      },
      render: function render() {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;
          if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
            return vnode;
          }
          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            remove(keys, key);
            keys.push(key);
          } else {
            cache[key] = vnode;
            keys.push(key);
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
          }
          vnode.data.keepAlive = true;
        }
        return vnode || slot && slot[0];
      }
    };
    var builtInComponents = { KeepAlive: KeepAlive };
    function initGlobalAPI(Vue) {
      var configDef = {};
      configDef.get = function () {
        return config;
      };
      if ('production' !== 'production') {
        configDef.set = function () {
          warn('Do not replace the Vue.config object, set individual fields instead.');
        };
      }
      Object.defineProperty(Vue, 'config', configDef);
      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
      };
      Vue.set = set;
      Vue.delete = del;
      Vue.nextTick = nextTick;
      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });
      Vue.options._base = Vue;
      extend(Vue.options.components, builtInComponents);
      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }
    initGlobalAPI(Vue);
    Object.defineProperty(Vue.prototype, '$isServer', { get: isServerRendering });
    Object.defineProperty(Vue.prototype, '$ssrContext', { get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      } });
    Object.defineProperty(Vue, 'FunctionalRenderContext', { value: FunctionalRenderContext });
    Vue.version = '2.5.14';
    var isReservedAttr = makeMap('style,class');
    var acceptValue = makeMap('input,textarea,option,select,progress');
    var mustUseProp = function (tag, type, attr) {
      return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
    };
    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
    var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
    var xlinkNS = 'http://www.w3.org/1999/xlink';
    var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
    };
    var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : '';
    };
    var isFalsyAttrValue = function (val) {
      return val == null || val === false;
    };
    function genClassForVnode(vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode = parentNode.parent)) {
        if (parentNode && parentNode.data) {
          data = mergeClassData(data, parentNode.data);
        }
      }
      return renderClass(data.staticClass, data.class);
    }
    function mergeClassData(child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
      };
    }
    function renderClass(staticClass, dynamicClass) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
      }
      return '';
    }
    function concat(a, b) {
      return a ? b ? a + ' ' + b : a : b || '';
    }
    function stringifyClass(value) {
      if (Array.isArray(value)) {
        return stringifyArray(value);
      }
      if (isObject(value)) {
        return stringifyObject(value);
      }
      if (typeof value === 'string') {
        return value;
      }
      return '';
    }
    function stringifyArray(value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) {
            res += ' ';
          }
          res += stringified;
        }
      }
      return res;
    }
    function stringifyObject(value) {
      var res = '';
      for (var key in value) {
        if (value[key]) {
          if (res) {
            res += ' ';
          }
          res += key;
        }
      }
      return res;
    }
    var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };
    var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');
    var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
    var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag);
    };
    function getTagNamespace(tag) {
      if (isSVG(tag)) {
        return 'svg';
      }
      if (tag === 'math') {
        return 'math';
      }
    }
    var unknownElementCache = Object.create(null);
    function isUnknownElement(tag) {
      if (!inBrowser) {
        return true;
      }
      if (isReservedTag(tag)) {
        return false;
      }
      tag = tag.toLowerCase();
      if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag];
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
        return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
      } else {
        return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
      }
    }
    var isTextInputType = makeMap('text,number,password,search,email,tel,url');
    function query(el) {
      if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
          'production' !== 'production' && warn('Cannot find element: ' + el);
          return document.createElement('div');
        }
        return selected;
      } else {
        return el;
      }
    }
    function createElement$1(tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
        return elm;
      }
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
      }
      return elm;
    }
    function createElementNS(namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName);
    }
    function createTextNode(text) {
      return document.createTextNode(text);
    }
    function createComment(text) {
      return document.createComment(text);
    }
    function insertBefore(parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    }
    function removeChild(node, child) {
      node.removeChild(child);
    }
    function appendChild(node, child) {
      node.appendChild(child);
    }
    function parentNode(node) {
      return node.parentNode;
    }
    function nextSibling(node) {
      return node.nextSibling;
    }
    function tagName(node) {
      return node.tagName;
    }
    function setTextContent(node, text) {
      node.textContent = text;
    }
    function setStyleScope(node, scopeId) {
      node.setAttribute(scopeId, '');
    }
    var nodeOps = Object.freeze({
      createElement: createElement$1,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      setStyleScope: setStyleScope
    });
    var ref = {
      create: function create(_, vnode) {
        registerRef(vnode);
      },
      update: function update(oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy(vnode) {
        registerRef(vnode, true);
      }
    };
    function registerRef(vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!isDef(key)) {
        return;
      }
      var vm = vnode.context;
      var ref = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref];
          } else if (refs[key].indexOf(ref) < 0) {
            refs[key].push(ref);
          }
        } else {
          refs[key] = ref;
        }
      }
    }
    var emptyNode = new VNode('', {}, []);
    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
    function sameVnode(a, b) {
      return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
    }
    function sameInputType(a, b) {
      if (a.tag !== 'input') {
        return true;
      }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) {
          map[key] = i;
        }
      }
      return map;
    }
    function createPatchFunction(backend) {
      var i, j;
      var cbs = {};
      var modules = backend.modules;
      var nodeOps = backend.nodeOps;
      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (isDef(modules[j][hooks[i]])) {
            cbs[hooks[i]].push(modules[j][hooks[i]]);
          }
        }
      }
      function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
      }
      function createRmCb(childElm, listeners) {
        function remove() {
          if (--remove.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove.listeners = listeners;
        return remove;
      }
      function removeNode(el) {
        var parent = nodeOps.parentNode(el);
        if (isDef(parent)) {
          nodeOps.removeChild(parent, el);
        }
      }
      function isUnknownElement$$1(vnode, inVPre) {
        return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
        })) && config.isUnknownElement(vnode.tag);
      }
      var creatingElmInVPre = 0;
      function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          vnode = ownerArray[index] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested;
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          if ('production' !== 'production') {
            if (data && data.pre) {
              creatingElmInVPre++;
            }
            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
              warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
            }
          }
          vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
          setScope(vnode);
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }
          if ('production' !== 'production' && data && data.pre) {
            creatingElmInVPre--;
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }
      function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
          var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false, parentElm, refElm);
          }
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true;
          }
        }
      }
      function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          registerRef(vnode);
          insertedVnodeQueue.push(vnode);
        }
      }
      function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
              cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break;
          }
        }
        insert(parentElm, vnode.elm, refElm);
      }
      function insert(parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (ref$$1.parentNode === parent) {
              nodeOps.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps.appendChild(parent, elm);
          }
        }
      }
      function createChildren(vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          if ('production' !== 'production') {
            checkDuplicateKeys(children);
          }
          for (var i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
      }
      function isPatchable(vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
      }
      function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook;
        if (isDef(i)) {
          if (isDef(i.create)) {
            i.create(emptyNode, vnode);
          }
          if (isDef(i.insert)) {
            insertedVnodeQueue.push(vnode);
          }
        }
      }
      function setScope(vnode) {
        var i;
        if (isDef(i = vnode.fnScopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setStyleScope(vnode.elm, i);
            }
            ancestor = ancestor.parent;
          }
        }
        if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
      }
      function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
      }
      function invokeDestroyHook(vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) {
            i(vnode);
          }
          for (i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](vnode);
          }
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }
      function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else {
              removeNode(ch.elm);
            }
          }
        }
      }
      function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            rm.listeners += listeners;
          } else {
            rm = createRmCb(vnode.elm, listeners);
          }
          if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        var canMove = !removeOnly;
        if ('production' !== 'production') {
          checkDuplicateKeys(newCh);
        }
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx];
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) {
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) {
              oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
            }
            idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) {
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
      }
      function checkDuplicateKeys(children) {
        var seenKeys = {};
        for (var i = 0; i < children.length; i++) {
          var vnode = children[i];
          var key = vnode.key;
          if (isDef(key)) {
            if (seenKeys[key]) {
              warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
            } else {
              seenKeys[key] = true;
            }
          }
        }
      }
      function findIdxInOld(node, oldCh, start, end) {
        for (var i = start; i < end; i++) {
          var c = oldCh[i];
          if (isDef(c) && sameVnode(node, c)) {
            return i;
          }
        }
      }
      function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
        if (oldVnode === vnode) {
          return;
        }
        var elm = vnode.elm = oldVnode.elm;
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return;
        }
        if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
          vnode.componentInstance = oldVnode.componentInstance;
          return;
        }
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
          i(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) {
            cbs.update[i](oldVnode, vnode);
          }
          if (isDef(i = data.hook) && isDef(i = i.update)) {
            i(oldVnode, vnode);
          }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) {
              updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
          } else if (isDef(ch)) {
            if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, '');
            }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
            i(oldVnode, vnode);
          }
        }
      }
      function invokeInsertHook(vnode, queue, initial) {
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var i = 0; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }
      var hydrationBailed = false;
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
      function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || data && data.pre;
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true;
        }
        if ('production' !== 'production') {
          if (!assertNodeMatch(elm, vnode, inVPre)) {
            return false;
          }
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) {
            i(vnode, true);
          }
          if (isDef(i = vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            return true;
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                if (i !== elm.innerHTML) {
                  if ('production' !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('server innerHTML: ', i);
                    console.warn('client innerHTML: ', elm.innerHTML);
                  }
                  return false;
                }
              } else {
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break;
                  }
                  childNode = childNode.nextSibling;
                }
                if (!childrenMatch || childNode) {
                  if ('production' !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                  }
                  return false;
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break;
              }
            }
            if (!fullInvoke && data['class']) {
              traverse(data['class']);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true;
      }
      function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
          return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
        } else {
          return node.nodeType === (vnode.isComment ? 8 : 3);
        }
      }
      return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) {
            invokeDestroyHook(oldVnode);
          }
          return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue, parentElm, refElm);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
          } else {
            if (isRealElement) {
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode;
                } else if ('production' !== 'production') {
                  warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
                }
              }
              oldVnode = emptyNodeAt(oldVnode);
            }
            var oldElm = oldVnode.elm;
            var parentElm$1 = nodeOps.parentNode(oldElm);
            createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i = 0; i < cbs.destroy.length; ++i) {
                  cbs.destroy[i](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  var insert = ancestor.data.hook.insert;
                  if (insert.merged) {
                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                      insert.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(parentElm$1)) {
              removeVnodes(parentElm$1, [oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
      };
    }
    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives(vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };
    function updateDirectives(oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }
    function _update(oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
      var dirsWithInsert = [];
      var dirsWithPostpatch = [];
      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          callHook$1(dir, 'bind', vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          dir.oldValue = oldDir.value;
          callHook$1(dir, 'update', vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }
      if (dirsWithInsert.length) {
        var callInsert = function () {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
          callInsert();
        }
      }
      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
          }
        });
      }
      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }
    var emptyModifiers = Object.create(null);
    function normalizeDirectives$1(dirs, vm) {
      var res = Object.create(null);
      if (!dirs) {
        return res;
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      return res;
    }
    function getRawDirName(dir) {
      return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
    }
    function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
        }
      }
    }
    var baseModules = [ref, directives];
    function updateAttrs(oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return;
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      if (isDef(attrs.__ob__)) {
        attrs = vnode.data.attrs = extend({}, attrs);
      }
      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur);
        }
      }
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }
    function setAttr(el, key, value) {
      if (el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
      } else if (isBooleanAttr(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        baseSetAttr(el, key, value);
      }
    }
    function baseSetAttr(el, key, value) {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
          var blocker = function (e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          el.__ieph = true;
        }
        el.setAttribute(key, value);
      }
    }
    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };
    function updateClass(oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
        return;
      }
      var cls = genClassForVnode(vnode);
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }
      if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
      }
    }
    var klass = {
      create: updateClass,
      update: updateClass
    };
    var RANGE_TOKEN = '__r';
    var CHECKBOX_RADIO_TOKEN = '__c';
    function normalizeEvents(on) {
      if (isDef(on[RANGE_TOKEN])) {
        var event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }
    var target$1;
    function createOnceHandler(handler, event, capture) {
      var _target = target$1;
      return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      };
    }
    function add$1(event, handler, once$$1, capture, passive) {
      handler = withMacroTask(handler);
      if (once$$1) {
        handler = createOnceHandler(handler, event, capture);
      }
      target$1.addEventListener(event, handler, supportsPassive ? {
        capture: capture,
        passive: passive
      } : capture);
    }
    function remove$2(event, handler, capture, _target) {
      (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
    }
    function updateDOMListeners(oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, vnode.context);
      target$1 = undefined;
    }
    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };
    function updateDOMProps(oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      if (isDef(props.__ob__)) {
        props = vnode.data.domProps = extend({}, props);
      }
      for (key in oldProps) {
        if (isUndef(props[key])) {
          elm[key] = '';
        }
      }
      for (key in props) {
        cur = props[key];
        if (key === 'textContent' || key === 'innerHTML') {
          if (vnode.children) {
            vnode.children.length = 0;
          }
          if (cur === oldProps[key]) {
            continue;
          }
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }
        if (key === 'value') {
          elm._value = cur;
          var strCur = isUndef(cur) ? '' : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else {
          elm[key] = cur;
        }
      }
    }
    function shouldUpdateValue(elm, checkVal) {
      return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
    }
    function isNotInFocusAndDirty(elm, checkVal) {
      var notInFocus = true;
      try {
        notInFocus = document.activeElement !== elm;
      } catch (e) {}
      return notInFocus && elm.value !== checkVal;
    }
    function isDirtyWithModifiers(elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers;
      if (isDef(modifiers)) {
        if (modifiers.lazy) {
          return false;
        }
        if (modifiers.number) {
          return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim();
        }
      }
      return value !== newVal;
    }
    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };
    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res;
    });
    function normalizeStyleData(data) {
      var style = normalizeStyleBinding(data.style);
      return data.staticStyle ? extend(data.staticStyle, style) : style;
    }
    function normalizeStyleBinding(bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
      }
      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
      }
      return bindingStyle;
    }
    function getStyle(vnode, checkChild) {
      var res = {};
      var styleData;
      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
            extend(res, styleData);
          }
        }
      }
      if (styleData = normalizeStyleData(vnode.data)) {
        extend(res, styleData);
      }
      var parentNode = vnode;
      while (parentNode = parentNode.parent) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
          extend(res, styleData);
        }
      }
      return res;
    }
    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function (el, name, val) {
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(name, val.replace(importantRE, ''), 'important');
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };
    var vendorNames = ['Webkit', 'Moz', 'ms'];
    var emptyStyle;
    var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && prop in emptyStyle) {
        return prop;
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    });
    function updateStyle(oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
        return;
      }
      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
      var oldStyle = oldStaticStyle || oldStyleBinding;
      var style = normalizeStyleBinding(vnode.data.style) || {};
      vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
      var newStyle = getStyle(vnode, true);
      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, '');
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          setProp(el, name, cur == null ? '' : cur);
        }
      }
    }
    var style = {
      create: updateStyle,
      update: updateStyle
    };
    function addClass(el, cls) {
      if (!cls || !(cls = cls.trim())) {
        return;
      }
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) {
            return el.classList.add(c);
          });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }
    function removeClass(el, cls) {
      if (!cls || !(cls = cls.trim())) {
        return;
      }
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) {
            return el.classList.remove(c);
          });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute('class');
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute('class', cur);
        } else {
          el.removeAttribute('class');
        }
      }
    }
    function resolveTransition(def) {
      if (!def) {
        return;
      }
      if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
          extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
      } else if (typeof def === 'string') {
        return autoCssTransition(def);
      }
    }
    var autoCssTransition = cached(function (name) {
      return {
        enterClass: name + "-enter",
        enterToClass: name + "-enter-to",
        enterActiveClass: name + "-enter-active",
        leaveClass: name + "-leave",
        leaveToClass: name + "-leave-to",
        leaveActiveClass: name + "-leave-active"
      };
    });
    var hasTransition = inBrowser && !isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    if (hasTransition) {
      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
      }
    }
    var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (fn) {
      return fn();
    };
    function nextFrame(fn) {
      raf(function () {
        raf(fn);
      });
    }
    function addTransitionClass(el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }
    function removeTransitionClass(el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }
    function whenTransitionEnds(el, expectedType, cb) {
      var ref = getTransitionInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;
      if (!type) {
        return cb();
      }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function (e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
    var transformRE = /\b(transform|all)(,|$)/;
    function getTransitionInfo(el, expectedType) {
      var styles = window.getComputedStyle(el);
      var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
      var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = styles[animationProp + 'Delay'].split(', ');
      var animationDurations = styles[animationProp + 'Duration'].split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);
      var type;
      var timeout = 0;
      var propCount = 0;
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      }
      var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      };
    }
    function getTimeout(delays, durations) {
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
      }));
    }
    function toMs(s) {
      return Number(s.slice(0, -1)) * 1000;
    }
    function enter(vnode, toggleDisplay) {
      var el = vnode.elm;
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return;
      }
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
      }
      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        transitionNode = transitionNode.parent;
        context = transitionNode.context;
      }
      var isAppear = !context._isMounted || !vnode.isRootInsert;
      if (isAppear && !appear && appear !== '') {
        return;
      }
      var startClass = isAppear && appearClass ? appearClass : enterClass;
      var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
      var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
      var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
      var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
      var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
      var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
      var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
      if ('production' !== 'production' && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
      }
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);
      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });
      if (!vnode.data.show) {
        mergeVNodeHook(vnode, 'insert', function () {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, toClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
    function leave(vnode, rm) {
      var el = vnode.elm;
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm();
      }
      if (isDef(el._leaveCb)) {
        return;
      }
      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);
      var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
      if ('production' !== 'production' && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
      }
      var cb = el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });
      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }
      function performLeave() {
        if (cb.cancelled) {
          return;
        }
        if (!vnode.data.show) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function () {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveToClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }
    function checkDuration(val, name, vnode) {
      if (typeof val !== 'number') {
        warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
      } else if (isNaN(val)) {
        warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
      }
    }
    function isValidDuration(val) {
      return typeof val === 'number' && !isNaN(val);
    }
    function getHookArgumentsLength(fn) {
      if (isUndef(fn)) {
        return false;
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
      } else {
        return (fn._length || fn.length) > 1;
      }
    }
    function _enter(_, vnode) {
      if (vnode.data.show !== true) {
        enter(vnode);
      }
    }
    var transition = inBrowser ? {
      create: _enter,
      activate: _enter,
      remove: function remove$$1(vnode, rm) {
        if (vnode.data.show !== true) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};
    var platformModules = [attrs, klass, events, domProps, style, transition];
    var modules = platformModules.concat(baseModules);
    var patch = createPatchFunction({
      nodeOps: nodeOps,
      modules: modules
    });
    if (isIE9) {
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }
    var directive = {
      inserted: function inserted(el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, 'postpatch', function () {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
            el.addEventListener('change', onCompositionEnd);
            if (isIE9) {
              el.vmodel = true;
            }
          }
        }
      },
      componentUpdated: function componentUpdated(el, binding, vnode) {
        if (vnode.tag === 'select') {
          setSelected(el, binding, vnode.context);
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function (o, i) {
            return !looseEqual(o, prevOptions[i]);
          })) {
            var needReset = el.multiple ? binding.value.some(function (v) {
              return hasNoMatchingOption(v, curOptions);
            }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      }
    };
    function setSelected(el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      if (isIE || isEdge) {
        setTimeout(function () {
          actuallySetSelected(el, binding, vm);
        }, 0);
      }
    }
    function actuallySetSelected(el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
        'production' !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
        return;
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return;
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
    function hasNoMatchingOption(value, options) {
      return options.every(function (o) {
        return !looseEqual(o, value);
      });
    }
    function getValue(option) {
      return '_value' in option ? option._value : option.value;
    }
    function onCompositionStart(e) {
      e.target.composing = true;
    }
    function onCompositionEnd(e) {
      if (!e.target.composing) {
        return;
      }
      e.target.composing = false;
      trigger(e.target, 'input');
    }
    function trigger(el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }
    function locateNode(vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
    }
    var show = {
      bind: function bind(el, ref, vnode) {
        var value = ref.value;
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function () {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : 'none';
        }
      },
      update: function update(el, ref, vnode) {
        var value = ref.value;
        var oldValue = ref.oldValue;
        if (!value === !oldValue) {
          return;
        }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function () {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function () {
              el.style.display = 'none';
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
      },
      unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };
    var platformDirectives = {
      model: directive,
      show: show
    };
    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };
    function getRealChild(vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
      } else {
        return vnode;
      }
    }
    function extractTransitionData(comp) {
      var data = {};
      var options = comp.$options;
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data;
    }
    function placeholder(h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', { props: rawChild.componentOptions.propsData });
      }
    }
    function hasParentTransition(vnode) {
      while (vnode = vnode.parent) {
        if (vnode.data.transition) {
          return true;
        }
      }
    }
    function isSameChild(child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag;
    }
    var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,
      render: function render(h) {
        var this$1 = this;
        var children = this.$slots.default;
        if (!children) {
          return;
        }
        children = children.filter(function (c) {
          return c.tag || isAsyncPlaceholder(c);
        });
        if (!children.length) {
          return;
        }
        if ('production' !== 'production' && children.length > 1) {
          warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
        }
        var mode = this.mode;
        if ('production' !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
          warn('invalid <transition> mode: ' + mode, this.$parent);
        }
        var rawChild = children[0];
        if (hasParentTransition(this.$vnode)) {
          return rawChild;
        }
        var child = getRealChild(rawChild);
        if (!child) {
          return rawChild;
        }
        if (this._leaving) {
          return placeholder(h, rawChild);
        }
        var id = "__transition-" + this._uid + "-";
        child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        if (child.data.directives && child.data.directives.some(function (d) {
          return d.name === 'show';
        })) {
          child.data.show = true;
        }
        if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
          var oldData = oldChild.data.transition = extend({}, data);
          if (mode === 'out-in') {
            this._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
              this$1._leaving = false;
              this$1.$forceUpdate();
            });
            return placeholder(h, rawChild);
          } else if (mode === 'in-out') {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild;
            }
            var delayedLeave;
            var performLeave = function () {
              delayedLeave();
            };
            mergeVNodeHook(data, 'afterEnter', performLeave);
            mergeVNodeHook(data, 'enterCancelled', performLeave);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) {
              delayedLeave = leave;
            });
          }
        }
        return rawChild;
      }
    };
    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);
    delete props.mode;
    var TransitionGroup = {
      props: props,
      render: function render(h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
              children.push(c);
              map[c.key] = c;
              ;
              (c.data || (c.data = {})).transition = transitionData;
            } else if ('production' !== 'production') {
              var opts = c.componentOptions;
              var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
              warn("<transition-group> children must be keyed: <" + name + ">");
            }
          }
        }
        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }
        return h(tag, null, children);
      },
      beforeUpdate: function beforeUpdate() {
        this.__patch__(this._vnode, this.kept, false, true);
        this._vnode = this.kept;
      },
      updated: function updated() {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || 'v') + '-move';
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return;
        }
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        this._reflow = document.body.offsetHeight;
        children.forEach(function (c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },
      methods: { hasMove: function hasMove(el, moveClass) {
          if (!hasTransition) {
            return false;
          }
          if (this._hasMove) {
            return this._hasMove;
          }
          var clone = el.cloneNode();
          if (el._transitionClasses) {
            el._transitionClasses.forEach(function (cls) {
              removeClass(clone, cls);
            });
          }
          addClass(clone, moveClass);
          clone.style.display = 'none';
          this.$el.appendChild(clone);
          var info = getTransitionInfo(clone);
          this.$el.removeChild(clone);
          return this._hasMove = info.hasTransform;
        } }
    };
    function callPendingCbs(c) {
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }
    function recordPosition(c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }
    function applyTranslation(c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = '0s';
      }
    }
    var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
    };
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);
    Vue.prototype.__patch__ = inBrowser ? patch : noop;
    Vue.prototype.$mount = function (el, hydrating) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating);
    };
    if (inBrowser) {
      setTimeout(function () {
        if (config.devtools) {
          if (devtools) {
            devtools.emit('init', Vue);
          } else if ('production' !== 'production' && 'production' !== 'test' && isChrome) {
            console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
          }
        }
        if ('production' !== 'production' && 'production' !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
          console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
        }
      }, 0);
    }
    module.exports = Vue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:vue@2.5.14.js", ["npm:vue@2.5.14/dist/vue.runtime.common.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:vue@2.5.14/dist/vue.runtime.common.js");
});
System.registerDynamic("styles/timeline.less!npm:systemjs-less-plugin@2.2.3.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("vue/timeline.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var render = function anonymous() {
    with (this) {
      return _c('dt-section', { attrs: { "id": "timeline" } }, [_c('h1', { staticClass: "title l-page" }, [_v("Experience")])]);
    }
  };staticRenderFns = [];module.exports = { render: render, staticRenderFns: staticRenderFns };
});
System.register("vue/timeline.vue.js", ["npm:vue@2.5.14.js", "styles/timeline.less!npm:systemjs-less-plugin@2.2.3.js", "vue/timeline.vue.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js"], function (_export) {
  "use strict";

  var Vue, template;
  return {
    setters: [function (_npmVue2514Js) {
      Vue = _npmVue2514Js["default"];
    }, function (_stylesTimelineLessNpmSystemjsLessPlugin223Js) {}, function (_vueTimelineVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js) {
      template = _vueTimelineVueTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js["default"];
    }],
    execute: function () {

      Vue.component('timeline', {
        props: ['events'],
        render: template.render,
        staticRenderFns: template.staticRenderFns
      });
    }
  };
});
System.registerDynamic('vue/root.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var render = function anonymous() {
    with (this) {
      return _c('div', [_c('selected-projects', { attrs: { "largeProjects": data['large-projects'], "smallProjects": data['small-projects'] } })], 1);
    }
  };staticRenderFns = [];module.exports = { render: render, staticRenderFns: staticRenderFns };
});
System.register("index.js", ["npm:feather-icons@4.7.0.js", "npm:plain-jsx@1.0.0.js", "npm:nanoajax@0.4.3.js", "styles/style.less!npm:systemjs-less-plugin@2.2.3.js", "styles/me.less!npm:systemjs-less-plugin@2.2.3.js", "npm:vue@2.5.14.js", "vue/selected-projects.vue.js", "vue/timeline.vue.js", "vue/root.template!gitlab:mrman/systemjs-plugin-vue-template-compiler@2.2.1.js"], function (_export) {
    /** @jsx plainJSX */

    "use strict";

    var feather, ajax, Vue, template, url, vm;

    function $(query) {
        return document.querySelector(query);
    }

    // data.selectedProjects.forEach(project => {
    //     let projectDOM = makeSelectedProject(project);
    //     selectedProjects.appendChild(projectDOM);
    // });

    // data.justForFun.forEach(project => {
    //   let projectDOM = makeFunProject(project);
    //   justForFun.appendChild(projectDOM);
    // });

    function makeSelectedProject(project) {
        return plainJSX(
            "li",
            { id: project.name, "class": "selectedProject" },
            plainJSX(
                "figure",
                null,
                plainJSX(
                    "label",
                    { "for": "mn-" + project.name, "class": "margin-toggle" },
                    "⊕"
                ),
                plainJSX("input", { type: "checkbox", id: "mn-" + project.name, "class": "margin-toggle" }),
                plainJSX(
                    "div",
                    { "class": "description marginnote" },
                    plainJSX(
                        "a",
                        { href: project.url || '#' },
                        plainJSX(
                            "span",
                            { "class": "topText" },
                            plainJSX(
                                "span",
                                { "class": "name" },
                                project.name
                            ),
                            " ",
                            plainJSX(
                                "span",
                                { "class": "at" },
                                "@"
                            ),
                            plainJSX(
                                "span",
                                { "class": "place" },
                                project.place
                            )
                        )
                    ),
                    plainJSX(
                        "p",
                        null,
                        project.description
                    )
                ),
                plainJSX(
                    "div",
                    { "class": "imgContainer" },
                    plainJSX("img", {
                        src: "images/" + project.name + ".png",
                        style: "top: " + (project.style && project.style.top || 0) + "%" })
                )
            )
        );
    }

    function makeFunProject(project) {
        // 160, 20
        var placeDOM = [' ', plainJSX(
            "span",
            { "class": "at" },
            "@"
        ), plainJSX(
            "span",
            { "class": "place" },
            project.place
        )];
        return plainJSX(
            "div",
            { "class": "funProject", id: project.name },
            plainJSX(
                "span",
                { "class": "topText" },
                plainJSX(
                    "span",
                    { "class": "description" },
                    project.description
                ),
                project.place !== null ? placeDOM : null
            ),
            plainJSX(
                "div",
                { "class": "imgContainer" },
                plainJSX("img", { src: "images/" + project.name + ".png" })
            )
        );
    }
    return {
        setters: [function (_npmFeatherIcons470Js) {
            feather = _npmFeatherIcons470Js["default"];
        }, function (_npmPlainJsx100Js) {}, function (_npmNanoajax043Js) {
            ajax = _npmNanoajax043Js.ajax;
        }, function (_stylesStyleLessNpmSystemjsLessPlugin223Js) {}, function (_stylesMeLessNpmSystemjsLessPlugin223Js) {}, function (_npmVue2514Js) {
            Vue = _npmVue2514Js["default"];
        }, function (_vueSelectedProjectsVueJs) {}, function (_vueTimelineVueJs) {}, function (_vueRootTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js) {
            template = _vueRootTemplateGitlabMrmanSystemjsPluginVueTemplateCompiler221Js["default"];
        }],
        execute: function () {
            url = 'data.json';
            vm = null;

            ajax({ url: url }, function (code, text) {
                var data = JSON.parse(text);
                var selectedProjects = $('#selected-projects');
                // const justForFun = $('#funProjects');

                vm = new Vue({
                    el: selectedProjects,
                    render: template.render,
                    staticRenderFns: template.staticRenderFns,
                    // <timeline
                    //   :events="[]"/>

                    data: {
                        data: data
                    },

                    mounted: function mounted() {
                        feather.replace();
                    }
                });
            });
        }
    };
});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[a](d.createTextNode(c));})
("@import \"https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700,700i\";@import \"fonts/fira/fira.css\";@import \"fonts/equity-b.css\";@import \"fonts/league-spartan/stylesheet.css\";dt-article{font-family:equity-text;font-weight:300;color:#333}dt-article ol,dt-article p,dt-article ul{font-family:inherit;font-weight:inherit;color:inherit}dt-footer{display:block;font-family:equity-text;font-weight:300;color:#fff;background-color:#424242;padding-top:3rem;padding-bottom:3rem}dt-footer a{color:inherit;text-decoration:none}dt-footer svg.feather{margin-right:.5rem}dt-footer li{margin-bottom:.5rem}dt-section h1.title{color:#99b8ff;font-weight:800;font-family:Fira Sans;font-size:5rem;font-weight:700}dt-section .content{width:100%;height:100%}.l-body{font-size:110%}.fix-aspect-ratio{position:relative}.fix-aspect-ratio:before{display:block;content:\"\";width:100%;padding-top:64.28571429%}.fix-aspect-ratio>.fix-aspect-ratio-contents{position:absolute;top:0;right:0;bottom:0;left:0}a.hidden{display:none}#me{height:99vh}#me .content{background-color:#fff}#me .title{color:#99b8ff}#me .vcontainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#me .vcontainer .container{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}#me p{margin-bottom:0}#me p:not(:first-child){margin-top:20px}.large.project-tile{margin-bottom:20px;width:46%}.large.project-tile .topText{font-size:1.1rem}.large.project-tile .topText .at,.large.project-tile .topText .place{font-size:1rem}.grayscaleHover{filter:none;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0)}.small-caps{-ms-font-feature-settings:\"smcp\";-webkit-font-feature-settings:\"smcp\";font-feature-settings:\"smcp\"}.highlight{background-position:0 0;background-size:200% auto;background-image:-webkit-linear-gradient(left,#fff 50%,#fdf9e2 0);background-image:linear-gradient(90deg,#fff 50%,#fdf9e2 0);-webkit-transition:background-position .4s ease-in-out;transition:background-position .4s ease-in-out}.highlightHover,.projectHover .topText{background-position:-99.99% 0}.projectHover img{filter:none;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0)}.project-tile{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;cursor:pointer;border:1px solid #e6e6e6;border-radius:3px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}.project-tile .imgContainer{overflow:hidden}.project-tile .imgContainer video{top:0;left:0;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.project-tile .overlay-icons{position:absolute;bottom:0;left:0;text-align:right;width:100%;height:26px;padding-bottom:2px}.project-tile .overlay-icons svg{color:#333}.project-tile:hover .topText{background-position:-99.99% 0}.project-tile:hover img{filter:none;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0)}.project-tile:not(:last-child){margin-right:20px}.project-tile .topText{padding:.5ch 1ch;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Fira Sans;background-position:0 0;background-size:200% auto;background-image:-webkit-linear-gradient(left,#fff 50%,#fdf9e2 0);background-image:linear-gradient(90deg,#fff 50%,#fdf9e2 0);-webkit-transition:background-position .4s ease-in-out;transition:background-position .4s ease-in-out}.project-tile .topText .description,.project-tile .topText .name{font-weight:500}.project-tile .topText .at,.project-tile .topText .place{color:#999;font-weight:300}.small.project-tile{margin-bottom:10px;width:30%}.small.project-tile .topText{font-size:1rem}.small.project-tile .topText .at,.small.project-tile .topText .place{font-size:.9rem}#selected-projects>.title{color:#fba7a7}.large-projects,.small-projects{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}#timeline>.title{color:#6ce08d}");
//# sourceMappingURL=build.js.map