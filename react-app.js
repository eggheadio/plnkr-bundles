!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v&&(c.default=c.__useDefault=v),f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.default;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('b', ['c'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  'use strict';

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var process = $__require('c');
  var global = this || self,
      GLOBAL = global;
  var invariant = function (condition, format, a, b, c, d, e, f) {
    if ('production' !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  module.exports = invariant;
});
$__System.registerDynamic("d", [], true, function() {
  return {
    "es6.typed.array-buffer": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.data-view": {
      "chrome": "5",
      "opera": "12",
      "edge": "12",
      "firefox": "15",
      "safari": "5.1",
      "node": "0.12",
      "ie": "10",
      "android": "4",
      "ios": "6",
      "electron": "1.1"
    },
    "es6.typed.int8-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.uint8-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.uint8-clamped-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.int16-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.uint16-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.int32-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.uint32-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.float32-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.typed.float64-array": {
      "chrome": "51",
      "edge": "13",
      "firefox": "48",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.map": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.set": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.weak-map": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "9",
      "node": "6.5",
      "ios": "9",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.weak-set": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "9",
      "node": "6.5",
      "ios": "9",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.reflect.apply": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.construct": {
      "chrome": "49",
      "edge": "13",
      "firefox": "45",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.define-property": {
      "chrome": "49",
      "edge": "13",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.delete-property": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.get": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.get-own-property-descriptor": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.get-prototype-of": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.has": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.is-extensible": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.own-keys": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.prevent-extensions": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.set": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.reflect.set-prototype-of": {
      "chrome": "49",
      "edge": "12",
      "firefox": "42",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "es6.promise": {
      "chrome": "51",
      "edge": "13",
      "firefox": "45",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.symbol": {
      "chrome": "51",
      "firefox": "51",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.object.assign": {
      "chrome": "45",
      "edge": "12",
      "firefox": "34",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.object.is": {
      "chrome": "19",
      "edge": "12",
      "firefox": "22",
      "safari": "9",
      "node": "0.12",
      "android": "4.1",
      "ios": "9",
      "electron": "0.2"
    },
    "es6.object.set-prototype-of": {
      "chrome": "34",
      "edge": "12",
      "firefox": "31",
      "safari": "9",
      "node": "0.12",
      "ie": "11",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.function.name": {
      "chrome": "51",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.string.raw": {
      "chrome": "41",
      "edge": "12",
      "firefox": "34",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.from-code-point": {
      "chrome": "41",
      "edge": "12",
      "firefox": "29",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.code-point-at": {
      "chrome": "41",
      "edge": "12",
      "firefox": "29",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.repeat": {
      "chrome": "41",
      "edge": "12",
      "firefox": "24",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.starts-with": {
      "chrome": "41",
      "edge": "12",
      "firefox": "29",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.ends-with": {
      "chrome": "41",
      "edge": "12",
      "firefox": "29",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.string.includes": {
      "chrome": "41",
      "edge": "12",
      "firefox": "40",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "es6.regexp.flags": {
      "chrome": "49",
      "firefox": "37",
      "safari": "9",
      "node": "6",
      "ios": "9",
      "opera": "36",
      "electron": "1"
    },
    "es6.regexp.match": {
      "chrome": "50",
      "firefox": "49",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "es6.regexp.replace": {
      "chrome": "50",
      "firefox": "49",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "es6.regexp.split": {
      "chrome": "50",
      "firefox": "49",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "es6.regexp.search": {
      "chrome": "50",
      "firefox": "49",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "es6.array.from": {
      "chrome": "51",
      "edge": "15",
      "firefox": "36",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "es6.array.of": {
      "chrome": "45",
      "edge": "12",
      "firefox": "25",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.array.copy-within": {
      "chrome": "45",
      "edge": "12",
      "firefox": "32",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.array.find": {
      "chrome": "45",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "4",
      "ios": "8",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.array.find-index": {
      "chrome": "45",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "4",
      "ios": "8",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.array.fill": {
      "chrome": "45",
      "edge": "12",
      "firefox": "31",
      "safari": "7.1",
      "node": "4",
      "ios": "8",
      "opera": "32",
      "electron": "0.35"
    },
    "es6.array.iterator": {
      "chrome": "38",
      "edge": "12",
      "firefox": "28",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.number.is-finite": {
      "chrome": "19",
      "edge": "12",
      "firefox": "16",
      "safari": "9",
      "node": "0.12",
      "android": "4.1",
      "ios": "9",
      "electron": "0.2"
    },
    "es6.number.is-integer": {
      "chrome": "34",
      "edge": "12",
      "firefox": "16",
      "safari": "9",
      "node": "0.12",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.number.is-safe-integer": {
      "chrome": "34",
      "edge": "12",
      "firefox": "32",
      "safari": "9",
      "node": "0.12",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.number.is-nan": {
      "chrome": "19",
      "edge": "12",
      "firefox": "15",
      "safari": "9",
      "node": "0.12",
      "android": "4.1",
      "ios": "9",
      "electron": "0.2"
    },
    "es6.number.epsilon": {
      "chrome": "34",
      "edge": "12",
      "firefox": "25",
      "safari": "9",
      "node": "0.12",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.number.min-safe-integer": {
      "chrome": "34",
      "edge": "12",
      "firefox": "31",
      "safari": "9",
      "node": "0.12",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.number.max-safe-integer": {
      "chrome": "34",
      "edge": "12",
      "firefox": "31",
      "safari": "9",
      "node": "0.12",
      "android": "5",
      "ios": "9",
      "opera": "21",
      "electron": "0.2"
    },
    "es6.math.acosh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.asinh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.atanh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.cbrt": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.clz32": {
      "chrome": "38",
      "edge": "12",
      "firefox": "31",
      "safari": "9",
      "node": "0.12",
      "android": "5.1",
      "ios": "9",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.cosh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.expm1": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.fround": {
      "chrome": "38",
      "edge": "12",
      "firefox": "26",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.hypot": {
      "chrome": "38",
      "edge": "12",
      "firefox": "27",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.imul": {
      "chrome": "30",
      "edge": "12",
      "firefox": "23",
      "safari": "7",
      "node": "0.12",
      "android": "4.4",
      "ios": "7",
      "opera": "17",
      "electron": "0.2"
    },
    "es6.math.log1p": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.log10": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.log2": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.sign": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "9",
      "node": "0.12",
      "android": "5.1",
      "ios": "9",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.sinh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.tanh": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es6.math.trunc": {
      "chrome": "38",
      "edge": "12",
      "firefox": "25",
      "safari": "7.1",
      "node": "0.12",
      "android": "5.1",
      "ios": "8",
      "opera": "25",
      "electron": "0.2"
    },
    "es7.array.includes": {
      "chrome": "47",
      "edge": "14",
      "firefox": "43",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "34",
      "electron": "0.36"
    },
    "es7.object.values": {
      "chrome": "54",
      "edge": "14",
      "firefox": "47",
      "safari": "10.1",
      "node": "7",
      "ios": "10.3",
      "opera": "41",
      "electron": "1.5"
    },
    "es7.object.entries": {
      "chrome": "54",
      "edge": "14",
      "firefox": "47",
      "safari": "10.1",
      "node": "7",
      "ios": "10.3",
      "opera": "41",
      "electron": "1.5"
    },
    "es7.object.get-own-property-descriptors": {
      "chrome": "54",
      "edge": "15",
      "firefox": "50",
      "safari": "10.1",
      "node": "7",
      "ios": "10.3",
      "opera": "41",
      "electron": "1.5"
    },
    "es7.string.pad-start": {
      "chrome": "57",
      "edge": "15",
      "firefox": "48",
      "safari": "10",
      "ios": "10",
      "opera": "44",
      "electron": "1.7"
    },
    "es7.string.pad-end": {
      "chrome": "57",
      "edge": "15",
      "firefox": "48",
      "safari": "10",
      "ios": "10",
      "opera": "44",
      "electron": "1.7"
    }
  };
});

$__System.registerDynamic("e", ["c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  var defaultWebIncludes = exports.defaultWebIncludes = ["web.timers", "web.immediate", "web.dom.iterable"];
});
$__System.registerDynamic("f", ["c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.default = {
    "amd": "transform-es2015-modules-amd",
    "commonjs": "transform-es2015-modules-commonjs",
    "systemjs": "transform-es2015-modules-systemjs",
    "umd": "transform-es2015-modules-umd"
  };
});
$__System.registerDynamic("10", ["c"], true, function ($__require, exports, module) {
  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  module.exports = {
    // es2015
    "check-es2015-constants": {
      features: ["const"]
    },
    "transform-es2015-arrow-functions": {
      features: ["arrow functions"]
    },
    "transform-es2015-block-scoped-functions": {
      features: ["block-level function declaration"]
    },
    "transform-es2015-block-scoping": {
      features: ["const", "let"]
    },
    "transform-es2015-classes": {
      features: ["class", "super"]
    },
    "transform-es2015-computed-properties": {
      features: ["object literal extensions / computed properties"]
    },
    "transform-es2015-destructuring": {
      features: ["destructuring, assignment", "destructuring, declarations", "destructuring, parameters"]
    },
    "transform-es2015-duplicate-keys": {
      features: ["miscellaneous / duplicate property names in strict mode"]
    },
    "transform-es2015-for-of": {
      features: ["for..of loops"]
    },
    "transform-es2015-function-name": {
      features: ["function \"name\" property"]
    },
    "transform-es2015-literals": {
      features: ["Unicode code point escapes"]
    },
    "transform-es2015-object-super": {
      features: ["super"]
    },
    "transform-es2015-parameters": {
      features: ["default function parameters", "rest parameters"]
    },
    "transform-es2015-shorthand-properties": {
      features: ["object literal extensions / shorthand properties"]
    },
    "transform-es2015-spread": {
      features: ["spread (...) operator"]
    },
    "transform-es2015-sticky-regex": {
      features: ["RegExp \"y\" and \"u\" flags / \"y\" flag, lastIndex", "RegExp \"y\" and \"u\" flags / \"y\" flag"]
    },
    "transform-es2015-template-literals": {
      features: ["template literals"]
    },
    "transform-es2015-typeof-symbol": {
      features: ["Symbol / typeof support"]
    },
    "transform-es2015-unicode-regex": {
      features: ["RegExp \"y\" and \"u\" flags / \"u\" flag, case folding", "RegExp \"y\" and \"u\" flags / \"u\" flag, Unicode code point escapes", "RegExp \"y\" and \"u\" flags / \"u\" flag"]
    },
    "transform-regenerator": {
      features: ["generators"]
    },

    // es2016
    "transform-exponentiation-operator": {
      features: ["exponentiation (**) operator"]
    },

    // es2017
    "transform-async-to-generator": {
      features: ["async functions"]
    },
    "syntax-trailing-function-commas": {
      features: ["trailing commas in function syntax"]
    }
  };
});
$__System.registerDynamic("11", ["b", "d", "e", "f", "10", "c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.validateModulesOption = exports.validateSpecOption = exports.validateLooseOption = exports.validateBoolOption = exports.checkDuplicateIncludeExcludes = exports.normalizePluginNames = exports.normalizePluginName = exports.validateIncludesAndExcludes = undefined;
  exports.default = normalizeOptions;

  var _invariant = $__require("b");

  var _invariant2 = _interopRequireDefault(_invariant);

  var _builtIns = $__require("d");

  var _builtIns2 = _interopRequireDefault(_builtIns);

  var _defaultIncludes = $__require("e");

  var _moduleTransformations = $__require("f");

  var _moduleTransformations2 = _interopRequireDefault(_moduleTransformations);

  var _pluginFeatures = $__require("10");

  var _pluginFeatures2 = _interopRequireDefault(_pluginFeatures);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var validIncludesAndExcludes = [].concat(Object.keys(_pluginFeatures2.default), Object.keys(_moduleTransformations2.default).map(function (m) {
    return _moduleTransformations2.default[m];
  }), Object.keys(_builtIns2.default), _defaultIncludes.defaultWebIncludes);

  var hasBeenWarned = false;

  var validateIncludesAndExcludes = exports.validateIncludesAndExcludes = function validateIncludesAndExcludes() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var type = arguments[1];

    (0, _invariant2.default)(Array.isArray(opts), "Invalid Option: The '" + type + "' option must be an Array<String> of plugins/built-ins");

    var unknownOpts = [];
    opts.forEach(function (opt) {
      if (validIncludesAndExcludes.indexOf(opt) === -1) {
        unknownOpts.push(opt);
      }
    });

    (0, _invariant2.default)(unknownOpts.length === 0, "Invalid Option: The plugins/built-ins '" + unknownOpts + "' passed to the '" + type + "' option are not\n    valid. Please check data/[plugin-features|built-in-features].js in babel-preset-env");

    return opts;
  };

  var normalizePluginName = exports.normalizePluginName = function normalizePluginName(plugin) {
    return plugin.replace(/^babel-plugin-/, "");
  };

  var normalizePluginNames = exports.normalizePluginNames = function normalizePluginNames(plugins) {
    return plugins.map(normalizePluginName);
  };

  var checkDuplicateIncludeExcludes = exports.checkDuplicateIncludeExcludes = function checkDuplicateIncludeExcludes() {
    var include = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var duplicates = include.filter(function (opt) {
      return exclude.indexOf(opt) >= 0;
    });

    (0, _invariant2.default)(duplicates.length === 0, "Invalid Option: The plugins/built-ins '" + duplicates + "' were found in both the \"include\" and\n    \"exclude\" options.");
  };

  var validateBoolOption = exports.validateBoolOption = function validateBoolOption(name, value, defaultValue) {
    if (typeof value === "undefined") {
      value = defaultValue;
    }

    if (typeof value !== "boolean") {
      throw new Error("Preset env: '" + name + "' option must be a boolean.");
    }

    return value;
  };

  var validateLooseOption = exports.validateLooseOption = function validateLooseOption(looseOpt) {
    return validateBoolOption("loose", looseOpt, false);
  };
  var validateSpecOption = exports.validateSpecOption = function validateSpecOption(specOpt) {
    return validateBoolOption("spec", specOpt, false);
  };

  var validateModulesOption = exports.validateModulesOption = function validateModulesOption() {
    var modulesOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "commonjs";

    (0, _invariant2.default)(modulesOpt === false || Object.keys(_moduleTransformations2.default).indexOf(modulesOpt) > -1, "Invalid Option: The 'modules' option must be either 'false' to indicate no modules, or a\n    module type which can be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'.");

    return modulesOpt;
  };

  function normalizeOptions(opts) {
    // TODO: remove whitelist in favor of include in next major
    if (opts.whitelist && !hasBeenWarned) {
      console.warn("Deprecation Warning: The \"whitelist\" option has been deprecated in favor of \"include\" to\n      match the newly added \"exclude\" option (instead of \"blacklist\").");
      hasBeenWarned = true;
    }

    (0, _invariant2.default)(!(opts.whitelist && opts.include), "Invalid Option: The \"whitelist\" and the \"include\" option are the same and one can be used at\n    a time");

    if (opts.exclude) {
      opts.exclude = normalizePluginNames(opts.exclude);
    }

    if (opts.whitelist || opts.include) {
      opts.include = normalizePluginNames(opts.whitelist || opts.include);
    }

    checkDuplicateIncludeExcludes(opts.include, opts.exclude);

    return {
      debug: opts.debug,
      exclude: validateIncludesAndExcludes(opts.exclude, "exclude"),
      include: validateIncludesAndExcludes(opts.include, "include"),
      loose: validateLooseOption(opts.loose),
      moduleType: validateModulesOption(opts.modules),
      spec: validateSpecOption(opts.spec),
      targets: opts.targets,
      useBuiltIns: opts.useBuiltIns
    };
  }
});
$__System.registerDynamic("12", [], true, function() {
  return {
    "check-es2015-constants": {
      "chrome": "49",
      "edge": "14",
      "firefox": "51",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "transform-es2015-arrow-functions": {
      "chrome": "47",
      "edge": "13",
      "firefox": "45",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "34",
      "electron": "0.36"
    },
    "transform-es2015-block-scoped-functions": {
      "chrome": "41",
      "edge": "12",
      "firefox": "46",
      "safari": "10",
      "node": "4",
      "ie": "11",
      "ios": "10",
      "opera": "28",
      "electron": "0.24"
    },
    "transform-es2015-block-scoping": {
      "chrome": "49",
      "edge": "14",
      "firefox": "51",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "transform-es2015-classes": {
      "chrome": "46",
      "edge": "13",
      "firefox": "45",
      "safari": "10",
      "node": "5",
      "ios": "10",
      "opera": "33",
      "electron": "0.36"
    },
    "transform-es2015-computed-properties": {
      "chrome": "44",
      "edge": "12",
      "firefox": "34",
      "safari": "7.1",
      "node": "4",
      "ios": "8",
      "opera": "31",
      "electron": "0.31"
    },
    "transform-es2015-destructuring": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "transform-es2015-duplicate-keys": {
      "chrome": "42",
      "edge": "12",
      "firefox": "34",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "29",
      "electron": "0.27"
    },
    "transform-es2015-for-of": {
      "chrome": "51",
      "edge": "15",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "transform-es2015-function-name": {
      "chrome": "51",
      "firefox": "53",
      "safari": "10",
      "node": "6.5",
      "ios": "10",
      "opera": "38",
      "electron": "1.2"
    },
    "transform-es2015-literals": {
      "chrome": "44",
      "edge": "12",
      "firefox": "53",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "31",
      "electron": "0.31"
    },
    "transform-es2015-object-super": {
      "chrome": "46",
      "edge": "13",
      "firefox": "45",
      "safari": "10",
      "node": "5",
      "ios": "10",
      "opera": "33",
      "electron": "0.36"
    },
    "transform-es2015-parameters": {
      "chrome": "49",
      "edge": "14",
      "firefox": "53",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "transform-es2015-shorthand-properties": {
      "chrome": "43",
      "edge": "12",
      "firefox": "33",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "30",
      "electron": "0.29"
    },
    "transform-es2015-spread": {
      "chrome": "46",
      "edge": "13",
      "firefox": "36",
      "safari": "10",
      "node": "5",
      "ios": "10",
      "opera": "33",
      "electron": "0.36"
    },
    "transform-es2015-sticky-regex": {
      "chrome": "49",
      "edge": "13",
      "firefox": "3",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "36",
      "electron": "1"
    },
    "transform-es2015-template-literals": {
      "chrome": "41",
      "edge": "13",
      "firefox": "34",
      "safari": "9",
      "node": "4",
      "ios": "9",
      "opera": "28",
      "electron": "0.24"
    },
    "transform-es2015-typeof-symbol": {
      "chrome": "38",
      "edge": "12",
      "firefox": "36",
      "safari": "9",
      "node": "0.12",
      "android": "5.1",
      "ios": "9",
      "opera": "25",
      "electron": "0.2"
    },
    "transform-es2015-unicode-regex": {
      "chrome": "50",
      "edge": "13",
      "firefox": "46",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "transform-regenerator": {
      "chrome": "50",
      "edge": "13",
      "firefox": "53",
      "safari": "10",
      "node": "6",
      "ios": "10",
      "opera": "37",
      "electron": "1.1"
    },
    "transform-exponentiation-operator": {
      "chrome": "52",
      "edge": "14",
      "firefox": "52",
      "safari": "10.1",
      "node": "7",
      "ios": "10.3",
      "opera": "39",
      "electron": "1.3"
    },
    "transform-async-to-generator": {
      "chrome": "55",
      "edge": "15",
      "firefox": "52",
      "safari": "10.1",
      "node": "7.6",
      "ios": "10.3",
      "opera": "42",
      "electron": "1.6"
    },
    "syntax-trailing-function-commas": {
      "chrome": "58",
      "edge": "14",
      "firefox": "52",
      "safari": "10",
      "ios": "10",
      "opera": "45",
      "electron": "1.7"
    }
  };
});

$__System.registerDynamic("13", ["c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;

  exports.default = function (_ref) {
    var t = _ref.types;

    function createImportDeclaration(polyfill) {
      var declar = t.importDeclaration([], t.stringLiteral(polyfill));
      declar._blockHoist = 3;
      return declar;
    }

    function createRequireStatement(polyfill) {
      return t.expressionStatement(t.callExpression(t.identifier("require"), [t.stringLiteral(polyfill)]));
    }

    function isRequire(path) {
      return t.isExpressionStatement(path.node) && t.isCallExpression(path.node.expression) && t.isIdentifier(path.node.expression.callee) && path.node.expression.callee.name === "require" && path.node.expression.arguments.length === 1 && t.isStringLiteral(path.node.expression.arguments[0]) && isPolyfillSource(path.node.expression.arguments[0].value);
    }

    function createImport(polyfill, requireType, core) {
      if (core) {
        polyfill = "core-js/modules/" + polyfill;
      }

      if (requireType === "import") {
        return createImportDeclaration(polyfill);
      } else {
        return createRequireStatement(polyfill);
      }
    }

    function createImports(polyfills, requireType, regenerator) {
      var imports = polyfills.filter(function (el, i, arr) {
        return arr.indexOf(el) === i;
      }).map(function (polyfill) {
        return createImport(polyfill, requireType, true);
      });

      return [].concat(imports, [regenerator && createImport("regenerator-runtime/runtime", requireType)]).filter(Boolean);
    }

    var isPolyfillImport = {
      ImportDeclaration: function ImportDeclaration(path, state) {
        if (path.node.specifiers.length === 0 && isPolyfillSource(path.node.source.value)) {
          this.numPolyfillImports++;
          if (this.numPolyfillImports > 1) {
            path.remove();
            return;
          }

          path.replaceWithMultiple(createImports(state.opts.polyfills, "import", state.opts.regenerator));
        }
      },
      Program: function Program(path, state) {
        var _this = this;

        if (!state.opts.polyfills) {
          throw path.buildCodeFrameError("\nThere was an issue in \"babel-preset-env\" such that\nthe \"polyfills\" option was not correctly passed\nto the \"transform-polyfill-require\" plugin\n");
        }
        path.get("body").forEach(function (bodyPath) {
          if (isRequire(bodyPath)) {
            _this.numPolyfillImports++;
            if (_this.numPolyfillImports > 1) {
              path.remove();
              return;
            }

            bodyPath.replaceWithMultiple(createImports(state.opts.polyfills, "require", state.opts.regenerator));
          }
        });
      }
    };

    return {
      name: "transform-polyfill-require",
      visitor: isPolyfillImport,
      pre: function pre() {
        this.numPolyfillImports = 0;
      }
    };
  };

  function isPolyfillSource(value) {
    return value === "babel-polyfill" || value === "core-js";
  }
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = {
		"1.6": "56",
		"1.7": "58",
		"1.8": "59",
		"1.3": "52",
		"1.4": "53",
		"1.5": "54",
		"1.2": "51",
		"1.1": "50",
		"1.0": "49",
		"0.37": "49",
		"0.36": "47",
		"0.35": "45",
		"0.34": "45",
		"0.33": "45",
		"0.32": "45",
		"0.31": "44",
		"0.30": "44",
		"0.29": "43",
		"0.28": "43",
		"0.27": "42",
		"0.26": "42",
		"0.25": "42",
		"0.24": "41",
		"0.23": "41",
		"0.22": "41",
		"0.21": "40",
		"0.20": "39"
	};
});
$__System.registerDynamic("15", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = { "0": "53", "1": "54", "2": "55", "3": "52", "4": "57", "5": "58", "6": "59", "7": "11.5", "8": "11.1", "9": "3.2", A: "11", B: "10", C: "9", D: "12", E: "7", F: "4", G: "8", H: "6", I: "15", J: "16", K: "56", L: "5", M: "37", N: "35", O: "18", P: "20", Q: "21", R: "22", S: "23", T: "24", U: "25", V: "26", W: "27", X: "28", Y: "17", Z: "30", a: "31", b: "32", c: "33", d: "34", e: "19", f: "36", g: "14", h: "38", i: "39", j: "40", k: "41", l: "42", m: "43", n: "44", o: "45", p: "46", q: "47", r: "48", s: "49", t: "50", u: "13", v: "29", w: "12.1", x: "3", y: "51", z: "4.2-4.3", AB: "61", BB: "4.0-4.1", CB: "62", DB: "64", EB: "3.1", FB: "60", GB: "5.1", HB: "6.1", IB: "7.1", JB: "9.1", KB: "10.1", LB: "TP", MB: "9.5-9.6", NB: "10.0-10.1", OB: "10.5", PB: "10.6", QB: "3.6", RB: "3.5", SB: "11.6", TB: "2", UB: "63", VB: "5.5", WB: "5.0-5.1", XB: "6.0-6.1", YB: "7.0-7.1", ZB: "8.1-8.4", aB: "9.0-9.2", bB: "9.3", cB: "10.0-10.2", dB: "10.3", eB: "all", fB: "2.1", gB: "2.2", hB: "2.3", iB: "4.1", jB: "4.4", kB: "4.4.3-4.4.4", lB: "11.4", mB: "1.2", nB: "7.12" };
});
$__System.registerDynamic('16', ['15'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var browserVersions = exports.browserVersions = $__require('15');
});
$__System.registerDynamic("17", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = { A: { A: { H: 0.0179309, E: 0.0134482, G: 0.255516, C: 0.143447, B: 0.165861, A: 3.04826, VB: 0.009298 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "VB", "H", "E", "G", "C", "B", "A", "", "", ""], E: "IE" }, B: { A: { D: 0.034792, u: 0.078282, g: 0.456645, I: 1.5178, J: 0.008698 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "D", "u", "g", "I", "J", "", ""], E: "Edge" }, C: { A: { "0": 0.069584, "1": 0.239195, "2": 3.85756, "3": 0.491437, "4": 0.013047, "5": 0, "6": 0, TB: 0.004227, x: 0.013047, F: 0.004349, L: 0.004879, H: 0.020136, E: 0.005725, G: 0.008698, C: 0.00533, B: 0.004283, A: 0.004349, D: 0.008698, u: 0.004486, g: 0.00453, I: 0.004283, J: 0.008698, Y: 0.004349, O: 0.008698, e: 0.004443, P: 0.004283, Q: 0.008698, R: 0.004349, S: 0.004349, T: 0.008698, U: 0.004349, V: 0.004349, W: 0.004349, X: 0.004349, v: 0.008698, Z: 0.008698, a: 0.013047, b: 0.008698, c: 0.008698, d: 0.008698, N: 0.013047, f: 0.013047, M: 0.013047, h: 0.047839, i: 0.013047, j: 0.017396, k: 0.017396, l: 0.017396, m: 0.04349, n: 0.017396, o: 0.065235, p: 0.017396, q: 0.078282, r: 0.17396, s: 0.078282, t: 0.065235, y: 0.104376, K: 0.160913, RB: 0.004349, QB: 0.017396 }, B: "moz", C: ["", "TB", "x", "RB", "QB", "F", "L", "H", "E", "G", "C", "B", "A", "D", "u", "g", "I", "J", "Y", "O", "e", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "v", "Z", "a", "b", "c", "d", "N", "f", "M", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "y", "3", "0", "1", "2", "K", "4", "5", "6"], E: "Firefox" }, D: { A: { "0": 0.056537, "1": 0.139168, "2": 0.352269, "3": 0.04349, "4": 0.160913, "5": 0.330524, "6": 0.465343, F: 0.004706, L: 0.004879, H: 0.004879, E: 0.005591, G: 0.005591, C: 0.005591, B: 0.004534, A: 0.017396, D: 0.004283, u: 0.004879, g: 0.004706, I: 0.004706, J: 0.004349, Y: 0.004349, O: 0.008698, e: 0.004283, P: 0.004349, Q: 0.008698, R: 0.030443, S: 0.004349, T: 0.004349, U: 0.008698, V: 0.017396, W: 0.013047, X: 0.008698, v: 0.091329, Z: 0.017396, a: 0.060886, b: 0.013047, c: 0.017396, d: 0.030443, N: 0.013047, f: 0.039141, M: 0.026094, h: 0.039141, i: 0.030443, j: 0.017396, k: 0.030443, l: 0.017396, m: 0.117423, n: 0.021745, o: 0.139168, p: 0.030443, q: 0.091329, r: 0.047839, s: 1.05246, t: 0.08698, y: 0.121772, K: 0.221799, FB: 18.1832, AB: 4.54036, CB: 0.056537, UB: 0.030443, DB: 0 }, B: "webkit", C: ["F", "L", "H", "E", "G", "C", "B", "A", "D", "u", "g", "I", "J", "Y", "O", "e", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "v", "Z", "a", "b", "c", "d", "N", "f", "M", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "y", "3", "0", "1", "2", "K", "4", "5", "6", "FB", "AB", "CB", "UB", "DB"], E: "Chrome" }, E: { A: { "9": 0.008692, F: 0.004349, L: 0.017396, H: 0.004349, E: 0.013047, G: 0.052188, C: 0.056537, B: 0.204403, A: 0.30443, EB: 0, GB: 0.100027, HB: 0.021745, IB: 0.004283, JB: 0.252242, KB: 1.29165, LB: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "EB", "9", "F", "L", "GB", "H", "HB", "E", "IB", "G", "C", "JB", "B", "KB", "A", "LB", "", ""], E: "Safari" }, F: { A: { "7": 0.004879, "8": 0.006229, C: 0.0082, A: 0.016581, D: 0.008698, I: 0.00685, J: 0.00685, Y: 0.00685, O: 0.005014, e: 0.006015, P: 0.004879, Q: 0.006597, R: 0.006597, S: 0.013434, T: 0.006702, U: 0.006015, V: 0.005595, W: 0.004706, X: 0.008698, v: 0.004879, Z: 0.004879, a: 0.004349, b: 0.005152, c: 0.005014, d: 0.009758, N: 0.004879, f: 0.047839, M: 0.004283, h: 0.004367, i: 0.004534, j: 0.004367, k: 0.004227, l: 0.008698, m: 0.008698, n: 0.004227, o: 0.008698, p: 0.021745, q: 0.700189, r: 0.021745, s: 0.004349, t: 0, MB: 0.00685, NB: 0, OB: 0.008392, PB: 0.004706, SB: 0.004349, w: 0.065235 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "C", "MB", "NB", "OB", "PB", "A", "8", "7", "SB", "D", "w", "I", "J", "Y", "O", "e", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "v", "Z", "a", "b", "c", "d", "N", "f", "M", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ""], E: "Opera", D: { "7": "o", "8": "o", C: "o", A: "o", D: "o", MB: "o", NB: "o", OB: "o", PB: "o", SB: "o", w: "o" } }, G: { A: { "9": 0, G: 0, A: 1.68884, BB: 0, z: 0, WB: 0, XB: 0, YB: 0.0408179, ZB: 0.0306134, aB: 0, bB: 0.350013, cB: 1.01432, dB: 6.90026 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "9", "BB", "z", "WB", "XB", "YB", "G", "ZB", "aB", "bB", "cB", "dB", "A", "", "", ""], E: "iOS Safari" }, H: { A: { eB: 2.80843 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "eB", "", "", ""], E: "Opera Mini" }, I: { A: { x: 0, F: 0.0280654, K: 0, fB: 0, gB: 0, hB: 0, iB: 0.102906, z: 0.294018, jB: 0.751084, kB: 0.457065 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "fB", "gB", "hB", "x", "F", "iB", "z", "jB", "kB", "K", "", "", ""], E: "Android Browser" }, J: { A: { E: 0.022604, B: 0.090416 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "E", "B", "", "", ""], E: "Blackberry Browser" }, K: { A: { "7": 0, "8": 0, B: 0, A: 0, D: 0, M: 0.0111391, w: 0 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "B", "A", "8", "7", "D", "w", "M", "", "", ""], E: "Opera Mobile", D: { M: "webkit" } }, L: { A: { AB: 29.8828 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AB", "", "", ""], E: "Chrome for Android" }, M: { A: { K: 0.090416 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "K", "", "", ""], E: "Firefox for Android" }, N: { A: { B: 0.0460153, A: 0.276092 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "B", "A", "", "", ""], E: "IE Mobile" }, O: { A: { lB: 7.65145 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "lB", "", "", ""], E: "UC Browser for Android", D: { lB: "webkit" } }, P: { A: { F: 1.4619, L: 2.23951 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "F", "L", "", "", ""], E: "Samsung Internet" }, Q: { A: { mB: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "mB", "", "", ""], E: "QQ Browser" }, R: { A: { nB: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "nB", "", "", ""], E: "Baidu Browser" } };
});
$__System.registerDynamic('18', ['19', '16', '17'], true, function ($__require, exports, module) {
    'use strict';

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.agents = undefined;

    var _browsers = $__require('19');

    var _browserVersions = $__require('16');

    var agentsData = $__require('17');

    function unpackBrowserVersions(versionsData) {
        return Object.keys(versionsData).reduce(function (usage, version) {
            usage[_browserVersions.browserVersions[version]] = versionsData[version];
            return usage;
        }, {});
    }

    var agents = exports.agents = Object.keys(agentsData).reduce(function (map, key) {
        var versionsData = agentsData[key];
        map[_browsers.browsers[key]] = Object.keys(versionsData).reduce(function (data, entry) {
            if (entry === 'A') {
                data.usage_global = unpackBrowserVersions(versionsData[entry]);
            } else if (entry === 'C') {
                data.versions = versionsData[entry].reduce(function (list, version) {
                    if (version === '') {
                        list.push(null);
                    } else {
                        list.push(_browserVersions.browserVersions[version]);
                    }
                    return list;
                }, []);
            } else if (entry === 'D') {
                data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
            } else if (entry === 'E') {
                data.browser = versionsData[entry];
            } else {
                // entry is B
                data.prefix = versionsData[entry];
            }
            return data;
        }, {});
        return map;
    }, {});
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = { A: "ie", B: "edge", C: "firefox", D: "chrome", E: "safari", F: "opera", G: "ios_saf", H: "op_mini", I: "android", J: "bb", K: "op_mob", L: "and_chr", M: "and_ff", N: "ie_mob", O: "and_uc", P: "samsung", Q: "and_qq", R: "baidu" };
});
$__System.registerDynamic('19', ['1a'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var browsers = exports.browsers = $__require('1a');
});
$__System.registerDynamic('1b', ['19'], true, function ($__require, exports, module) {
    'use strict';

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = unpackRegion;

    var _browsers = $__require('19');

    function unpackRegion(packed) {
        return Object.keys(packed).reduce(function (list, browser) {
            var data = packed[browser];
            list[_browsers.browsers[browser]] = Object.keys(data).reduce(function (memo, key) {
                var stats = data[key];
                if (key === '_') {
                    stats.split(' ').forEach(function (version) {
                        return memo[version] = null;
                    });
                } else {
                    memo[key] = stats;
                }
                return memo;
            }, {});
            return list;
        }, {});
    }
});
$__System.registerDynamic('1c', ['@empty', '14', '@empty', '18', '1b', 'c'], true, function ($__require, exports, module) {
  var process = $__require('c');
  var global = this || self,
      GLOBAL = global;
  var path = $__require('@empty');
  var e2c = $__require('14');
  var fs = $__require('@empty');

  var agents = $__require('18').agents;
  var region = $__require('1b').default;

  function normalize(versions) {
    return versions.filter(function (version) {
      return typeof version === 'string';
    });
  }

  function nameMapper(name) {
    return function mapName(version) {
      return name + ' ' + version;
    };
  }

  function getMajor(version) {
    return parseInt(version.split('.')[0]);
  }

  function getMajorVersions(released, number) {
    if (released.length === 0) return [];
    var minimum = getMajor(released[released.length - 1]) - parseInt(number) + 1;
    var selected = [];
    for (var i = released.length - 1; i >= 0; i--) {
      if (minimum > getMajor(released[i])) break;
      selected.unshift(released[i]);
    }
    return selected;
  }

  var env = process.env;

  // eslint-disable-next-line security/detect-unsafe-regex
  var FLOAT_RANGE = /^\d+(\.\d+)?(-\d+(\.\d+)?)*$/;
  var IS_SECTION = /^\s*\[(.+)\]\s*$/;

  function uniq(array) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
      if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
    }
    return filtered;
  }

  function BrowserslistError(message) {
    this.name = 'BrowserslistError';
    this.message = message || '';
    this.browserslist = true;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BrowserslistError);
    }
  }
  BrowserslistError.prototype = Error.prototype;

  // Helpers

  function fillUsage(result, name, data) {
    for (var i in data) {
      result[name + ' ' + i] = data[i];
    }
  }

  var cacheEnabled = !env.BROWSERSLIST_DISABLE_CACHE;
  var filenessCache = {};
  var configCache = {};

  function isFile(file) {
    if (file in filenessCache) {
      return filenessCache[file];
    }
    var result = fs.existsSync(file) && fs.statSync(file).isFile();
    if (cacheEnabled) {
      filenessCache[file] = result;
    }
    return result;
  }

  function eachParent(file, callback) {
    var loc = path.resolve(file);
    do {
      var result = callback(loc);
      if (typeof result !== 'undefined') return result;
    } while (loc !== (loc = path.dirname(loc)));
    return undefined;
  }

  function getStat(opts) {
    if (opts.stats) {
      return opts.stats;
    } else if (env.BROWSERSLIST_STATS) {
      return env.BROWSERSLIST_STATS;
    } else if (opts.path && path.resolve) {
      return eachParent(opts.path, function (dir) {
        var file = path.join(dir, 'browserslist-stats.json');
        return isFile(file) ? file : undefined;
      });
    }

    return undefined;
  }

  function parsePackage(file) {
    var config = JSON.parse(fs.readFileSync(file));
    if (config.browserlist && !config.browserslist) {
      throw new BrowserslistError('`browserlist` key instead of `browserslist` in ' + file);
    }
    var list = config.browserslist;
    if (typeof list === 'object' && list.length) {
      list = { defaults: list };
    }
    return list;
  }

  function pickEnv(config, opts) {
    if (typeof config !== 'object') return config;

    var name;
    if (typeof opts.env === 'string') {
      name = opts.env;
    } else if (env.BROWSERSLIST_ENV) {
      name = env.BROWSERSLIST_ENV;
    } else if (env.NODE_ENV) {
      name = env.NODE_ENV;
    } else {
      name = 'development';
    }

    return config[name] || config.defaults;
  }

  function generateFilter(sign, version) {
    version = parseFloat(version);
    if (sign === '>') {
      return function (v) {
        return parseFloat(v) > version;
      };
    } else if (sign === '>=') {
      return function (v) {
        return parseFloat(v) >= version;
      };
    } else if (sign === '<') {
      return function (v) {
        return parseFloat(v) < version;
      };
    } else {
      return function (v) {
        return parseFloat(v) <= version;
      };
    }
  }

  function compareStrings(a, b) {
    if (a < b) return -1;
    if (a > b) return +1;
    return 0;
  }

  function resolve(queries, context) {
    return queries.reduce(function (result, selection, index) {
      if (selection.trim() === '') return result;

      var isExclude = selection.indexOf('not ') === 0;
      if (isExclude) {
        if (index === 0) {
          throw new BrowserslistError('Write any browsers query (for instance, `defaults`) ' + 'before `' + selection + '`');
        }
        selection = selection.slice(4);
      }

      for (var i = 0; i < QUERIES.length; i++) {
        var type = QUERIES[i];
        var match = selection.match(type.regexp);
        if (match) {
          var args = [context].concat(match.slice(1));
          var array = type.select.apply(browserslist, args);
          if (isExclude) {
            array = array.concat(array.map(function (j) {
              return j.replace(/\s\d+/, ' 0');
            }));
            return result.filter(function (j) {
              return array.indexOf(j) === -1;
            });
          }
          return result.concat(array);
        }
      }

      throw new BrowserslistError('Unknown browser query `' + selection + '`');
    }, []);
  }

  /**
   * Return array of browsers by selection queries.
   *
   * @param {string[]} queries Browser queries.
   * @param {object} opts Options.
   * @param {string} [opts.path="."] Path to processed file.
   *                                 It will be used to find config files.
   * @param {string} [opts.env="development"] Processing environment.
   *                                          It will be used to take right
   *                                          queries from config file.
   * @param {string} [opts.config] Path to config file with queries.
   * @param {object} [opts.stats] Custom browser usage statistics
   *                              for "> 1% in my stats" query.
   * @return {string[]} Array with browser names in Can I Use.
   *
   * @example
   * browserslist('IE >= 10, IE 8') //=> ['ie 11', 'ie 10', 'ie 8']
   */
  function browserslist(queries, opts) {
    if (typeof opts === 'undefined') opts = {};

    if (!opts.hasOwnProperty('path')) {
      opts.path = path.resolve ? path.resolve('.') : '.';
    }

    if (typeof queries === 'undefined' || queries === null) {
      if (env.BROWSERSLIST) {
        queries = env.BROWSERSLIST;
      } else if (opts.config || env.BROWSERSLIST_CONFIG) {
        var file = opts.config || env.BROWSERSLIST_CONFIG;
        if (path.basename(file) === 'package.json') {
          queries = pickEnv(parsePackage(file), opts);
        } else {
          queries = pickEnv(browserslist.readConfig(file), opts);
        }
      } else if (opts.path) {
        queries = pickEnv(browserslist.findConfig(opts.path), opts);
      }
    }

    if (typeof queries === 'undefined' || queries === null) {
      queries = browserslist.defaults;
    }

    if (typeof queries === 'string') {
      queries = queries.split(/,\s*/);
    }

    if (!Array.isArray(queries)) {
      throw new BrowserslistError('Browser queries must be an array. Got ' + typeof queries + '.');
    }

    var context = { dangerousExtend: opts.dangerousExtend };

    var stats = getStat(opts);
    if (stats) {
      if (typeof stats === 'string') {
        try {
          stats = JSON.parse(fs.readFileSync(stats));
        } catch (e) {
          throw new BrowserslistError('Can\'t read ' + stats);
        }
      }
      if ('dataByBrowser' in stats) {
        stats = stats.dataByBrowser;
      }

      context.customUsage = {};
      for (var browser in stats) {
        fillUsage(context.customUsage, browser, stats[browser]);
      }
    }

    var result = resolve(queries, context).map(function (i) {
      var parts = i.split(' ');
      var name = parts[0];
      var version = parts[1];
      if (version === '0') {
        return name + ' ' + byName(name).versions[0];
      } else {
        return i;
      }
    }).sort(function (name1, name2) {
      name1 = name1.split(' ');
      name2 = name2.split(' ');
      if (name1[0] === name2[0]) {
        if (FLOAT_RANGE.test(name1[1]) && FLOAT_RANGE.test(name2[1])) {
          return parseFloat(name2[1]) - parseFloat(name1[1]);
        } else {
          return compareStrings(name2[1], name1[1]);
        }
      } else {
        return compareStrings(name1[0], name2[0]);
      }
    });

    return uniq(result);
  }

  function normalizeVersion(data, version) {
    if (data.versions.indexOf(version) !== -1) {
      return version;
    } else if (browserslist.versionAliases[data.name][version]) {
      return browserslist.versionAliases[data.name][version];
    } else if (data.versions.length === 1) {
      return data.versions[0];
    } else {
      return false;
    }
  }

  function loadCountryStatistics(country) {
    country = country.replace(/[^\w-]/g, '');
    if (!browserslist.usage[country]) {
      var usage = {};
      // eslint-disable-next-line security/detect-non-literal-require
      var compressed = $__require('caniuse-lite/data/regions/' + country + '.js');
      var data = region(compressed);
      for (var i in data) {
        fillUsage(usage, i, data[i]);
      }
      browserslist.usage[country] = usage;
    }
  }

  // Will be filled by Can I Use data below
  browserslist.data = {};
  browserslist.usage = {
    global: {},
    custom: null

    // Default browsers query
  };browserslist.defaults = ['> 1%', 'last 2 versions', 'Firefox ESR'];

  // Browser names aliases
  browserslist.aliases = {
    fx: 'firefox',
    ff: 'firefox',
    ios: 'ios_saf',
    explorer: 'ie',
    blackberry: 'bb',
    explorermobile: 'ie_mob',
    operamini: 'op_mini',
    operamobile: 'op_mob',
    chromeandroid: 'and_chr',
    firefoxandroid: 'and_ff',
    ucandroid: 'and_uc',
    qqandroid: 'and_qq'

    // Aliases to work with joined versions like `ios_saf 7.0-7.1`
  };browserslist.versionAliases = {};

  // Get browser data by alias or case insensitive name
  function byName(name) {
    name = name.toLowerCase();
    name = browserslist.aliases[name] || name;
    return browserslist.data[name];
  }

  // Get browser data by alias or case insensitive name and throw error
  // on unknown browser
  function checkName(name) {
    var data = byName(name);
    if (!data) throw new BrowserslistError('Unknown browser ' + name);
    return data;
  }

  // Read and parse config
  browserslist.readConfig = function (file) {
    if (!isFile(file)) {
      throw new BrowserslistError('Can\'t read ' + file + ' config');
    }
    return browserslist.parseConfig(fs.readFileSync(file));
  };

  // Find config, read file and parse it
  browserslist.findConfig = function (from) {
    if (!path.resolve) return undefined;

    from = path.resolve(from);

    var cacheKey = isFile(from) ? path.dirname(from) : from;
    if (cacheKey in configCache) {
      return configCache[cacheKey];
    }

    var resolved = eachParent(from, function (dir) {
      var config = path.join(dir, 'browserslist');
      var pkg = path.join(dir, 'package.json');
      var rc = path.join(dir, '.browserslistrc');

      var pkgBrowserslist;
      if (isFile(pkg)) {
        try {
          pkgBrowserslist = parsePackage(pkg);
        } catch (e) {
          if (e.name === 'BrowserslistError') throw e;
          console.warn('[Browserslist] Could not parse ' + pkg + '. Ignoring it.');
        }
      }

      if (isFile(config) && pkgBrowserslist) {
        throw new BrowserslistError(dir + ' contains both browserslist and package.json with browsers');
      } else if (isFile(rc) && pkgBrowserslist) {
        throw new BrowserslistError(dir + ' contains both .browserslistrc and package.json with browsers');
      } else if (isFile(config) && isFile(rc)) {
        throw new BrowserslistError(dir + ' contains both .browserslistrc and browserslist');
      } else if (isFile(config)) {
        return browserslist.readConfig(config);
      } else if (isFile(rc)) {
        return browserslist.readConfig(rc);
      } else {
        return pkgBrowserslist;
      }
    });
    if (cacheEnabled) {
      configCache[cacheKey] = resolved;
    }
    return resolved;
  };

  /**
   * Return browsers market coverage.
   *
   * @param {string[]} browsers Browsers names in Can I Use.
   * @param {string} [country="global"] Which country statistics should be used.
   *
   * @return {number} Total market coverage for all selected browsers.
   *
   * @example
   * browserslist.coverage(browserslist('> 1% in US'), 'US') //=> 83.1
   */
  browserslist.coverage = function (browsers, country) {
    if (country && country !== 'global') {
      if (country.length > 2) {
        country = country.toLowerCase();
      } else {
        country = country.toUpperCase();
      }
      loadCountryStatistics(country);
    } else {
      country = 'global';
    }

    return browsers.reduce(function (all, i) {
      var usage = browserslist.usage[country][i];
      if (usage === undefined) {
        usage = browserslist.usage[country][i.replace(/ [\d.]+$/, ' 0')];
      }
      return all + (usage || 0);
    }, 0);
  };

  // Return array of queries from config content
  browserslist.parseConfig = function (string) {
    var result = { defaults: [] };
    var section = 'defaults';

    string.toString().replace(/#[^\n]*/g, '').split(/\n/).map(function (line) {
      return line.trim();
    }).filter(function (line) {
      return line !== '';
    }).forEach(function (line) {
      if (IS_SECTION.test(line)) {
        section = line.match(IS_SECTION)[1].trim();
        result[section] = result[section] || [];
      } else {
        result[section].push(line);
      }
    });

    return result;
  };

  // Clear internal caches
  browserslist.clearCaches = function () {
    filenessCache = {};
    configCache = {};
  };

  var QUERIES = [{
    regexp: /^last\s+(\d+)\s+major versions?$/i,
    select: function (context, versions) {
      var selected = [];
      Object.keys(agents).forEach(function (name) {
        var data = byName(name);
        if (!data) return;
        var array = getMajorVersions(data.released, versions);

        array = array.map(nameMapper(data.name));
        selected = selected.concat(array);
      });
      return selected;
    }
  }, {
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, versions) {
      var selected = [];
      Object.keys(agents).forEach(function (name) {
        var data = byName(name);
        if (!data) return;
        var array = data.released.slice(-versions);

        array = array.map(nameMapper(data.name));
        selected = selected.concat(array);
      });
      return selected;
    }
  }, {
    regexp: /^last\s+(\d+)\s+(\w+)\s+major versions?$/i,
    select: function (context, versions, name) {
      var data = checkName(name);
      var validVersions = getMajorVersions(data.released, versions);
      return validVersions.map(nameMapper(data.name));
    }
  }, {
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, versions, name) {
      var data = checkName(name);
      return data.released.slice(-versions).map(nameMapper(data.name));
    }
  }, {
    regexp: /^unreleased\s+versions$/i,
    select: function () {
      var selected = [];
      Object.keys(agents).forEach(function (name) {
        var data = byName(name);
        if (!data) return;
        var array = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1;
        });

        array = array.map(nameMapper(data.name));
        selected = selected.concat(array);
      });
      return selected;
    }
  }, {
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, name) {
      var data = checkName(name);
      return data.versions.filter(function (v) {
        return data.released.indexOf(v) === -1;
      }).map(nameMapper(data.name));
    }
  }, {
    regexp: /^(>=?)\s*(\d*\.?\d+)%$/,
    select: function (context, sign, popularity) {
      popularity = parseFloat(popularity);
      var result = [];

      for (var version in browserslist.usage.global) {
        if (sign === '>') {
          if (browserslist.usage.global[version] > popularity) {
            result.push(version);
          }
        } else if (browserslist.usage.global[version] >= popularity) {
          result.push(version);
        }
      }

      return result;
    }
  }, {
    regexp: /^(>=?)\s*(\d*\.?\d+)%\s+in\s+my\s+stats$/,
    select: function (context, sign, popularity) {
      popularity = parseFloat(popularity);
      var result = [];

      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided');
      }

      for (var version in context.customUsage) {
        if (sign === '>') {
          if (context.customUsage[version] > popularity) {
            result.push(version);
          }
        } else if (context.customUsage[version] >= popularity) {
          result.push(version);
        }
      }

      return result;
    }
  }, {
    regexp: /^(>=?)\s*(\d*\.?\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, sign, popularity, place) {
      popularity = parseFloat(popularity);
      var result = [];

      if (place.length === 2) {
        place = place.toUpperCase();
      } else {
        place = place.toLowerCase();
      }

      loadCountryStatistics(place);
      var usage = browserslist.usage[place];

      for (var version in usage) {
        if (sign === '>') {
          if (usage[version] > popularity) {
            result.push(version);
          }
        } else if (usage[version] >= popularity) {
          result.push(version);
        }
      }

      return result;
    }
  }, {
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, from, to) {
      if (!e2c[from]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron');
      }
      if (!e2c[to]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron');
      }

      from = parseFloat(from);
      to = parseFloat(to);

      return Object.keys(e2c).filter(function (i) {
        var parsed = parseFloat(i);
        return parsed >= from && parsed <= to;
      }).map(function (i) {
        return 'chrome ' + e2c[i];
      });
    }
  }, {
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, name, from, to) {
      var data = checkName(name);
      from = parseFloat(normalizeVersion(data, from) || from);
      to = parseFloat(normalizeVersion(data, to) || to);

      function filter(v) {
        var parsed = parseFloat(v);
        return parsed >= from && parsed <= to;
      }

      return data.released.filter(filter).map(nameMapper(data.name));
    }
  }, {
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, sign, version) {
      return Object.keys(e2c).filter(generateFilter(sign, version)).map(function (i) {
        return 'chrome ' + e2c[i];
      });
    }
  }, {
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (context, name, sign, version) {
      var data = checkName(name);
      var alias = browserslist.versionAliases[data.name][version];
      if (alias) {
        version = alias;
      }
      return data.released.filter(generateFilter(sign, version)).map(function (v) {
        return data.name + ' ' + v;
      });
    }
  }, {
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox 52'];
    }
  }, {
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all'];
    }
  }, {
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, version) {
      var chrome = e2c[version];
      if (!chrome) {
        throw new BrowserslistError('Unknown version ' + version + ' of electron');
      }
      return ['chrome ' + chrome];
    }
  }, {
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, name, version) {
      if (/^tp$/i.test(version)) version = 'TP';
      var data = checkName(name);
      var alias = normalizeVersion(data, version);
      if (alias) {
        version = alias;
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0';
        } else if (/\.0$/.test(version)) {
          alias = version.replace(/\.0$/, '');
        }
        alias = normalizeVersion(data, alias);
        if (alias) {
          version = alias;
        } else {
          throw new BrowserslistError('Unknown version ' + version + ' of ' + name);
        }
      }
      return [data.name + ' ' + version];
    }
  }, {
    regexp: /^extends (.+)$/i,
    select: function (context, name) {
      if (!context.dangerousExtend) checkExtend(name);
      // eslint-disable-next-line security/detect-non-literal-require
      var queries = $__require(name);
      if (!Array.isArray(queries)) {
        throw new BrowserslistError('`' + name + '` config exports not an array of queries');
      }
      return resolve(queries, context);
    }
  }, {
    regexp: /^defaults$/i,
    select: function () {
      return browserslist(browserslist.defaults);
    }
  }];

  var CONFIG_PATTERN = /^browserslist-config-/;
  var SCOPED_CONFIG__PATTERN = /@[^./]+\/browserslist-config(-|$)/;

  function checkExtend(name) {
    var use = ' Use `dangerousExtend` option to disable.';
    if (!CONFIG_PATTERN.test(name) && !SCOPED_CONFIG__PATTERN.test(name)) {
      throw new BrowserslistError('Browserslist config needs `browserslist-config-` prefix. ' + use);
    }
    if (name.indexOf('.') !== -1) {
      throw new BrowserslistError('`.` not allowed in Browserslist config name. ' + use);
    }
    if (name.indexOf('node_modules') !== -1) {
      throw new BrowserslistError('`node_modules` not allowed in Browserslist config.' + use);
    }
  }

  // Get and convert Can I Use data

  (function () {
    for (var name in agents) {
      var browser = agents[name];
      browserslist.data[name] = {
        name: name,
        versions: normalize(agents[name].versions),
        released: normalize(agents[name].versions.slice(0, -3))
      };
      fillUsage(browserslist.usage.global, name, browser.usage_global);

      browserslist.versionAliases[name] = {};
      for (var i = 0; i < browser.versions.length; i++) {
        var full = browser.versions[i];
        if (!full) continue;

        if (full.indexOf('-') !== -1) {
          var interval = full.split('-');
          for (var j = 0; j < interval.length; j++) {
            browserslist.versionAliases[name][interval[j]] = full;
          }
        }
      }
    }
  })();

  module.exports = browserslist;
});
$__System.registerDynamic("1d", ["1c", "1f", "1e", "c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;

  var _browserslist = $__require("1c");

  var _browserslist2 = _interopRequireDefault(_browserslist);

  var _semver = $__require("1f");

  var _semver2 = _interopRequireDefault(_semver);

  var _utils = $__require("1e");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var browserNameMap = {
    android: "android",
    chrome: "chrome",
    edge: "edge",
    firefox: "firefox",
    ie: "ie",
    ios_saf: "ios",
    safari: "safari"
  };

  var isBrowsersQueryValid = function isBrowsersQueryValid(browsers) {
    return typeof browsers === "string" || Array.isArray(browsers);
  };

  var semverMin = function semverMin(first, second) {
    return first && _semver2.default.lt(first, second) ? first : second;
  };

  var getLowestVersions = function getLowestVersions(browsers) {
    return browsers.reduce(function (all, browser) {
      var _browser$split = browser.split(" "),
          browserName = _browser$split[0],
          browserVersion = _browser$split[1];

      var normalizedBrowserName = browserNameMap[browserName];

      if (!normalizedBrowserName) {
        return all;
      }

      try {
        // Browser version can return as "10.0-10.2"
        var splitVersion = browserVersion.split("-")[0];
        var parsedBrowserVersion = (0, _utils.semverify)(splitVersion);

        all[normalizedBrowserName] = semverMin(all[normalizedBrowserName], parsedBrowserVersion);
      } catch (e) {}

      return all;
    }, {});
  };

  var outputDecimalWarning = function outputDecimalWarning(decimalTargets) {
    if (!decimalTargets || !decimalTargets.length) {
      return;
    }

    console.log("Warning, the following targets are using a decimal version:");
    console.log("");
    decimalTargets.forEach(function (_ref) {
      var target = _ref.target,
          value = _ref.value;
      return console.log("  " + target + ": " + value);
    });
    console.log("");
    console.log("We recommend using a string for minor/patch versions to avoid numbers like 6.10");
    console.log("getting parsed as 6.1, which can lead to unexpected behavior.");
    console.log("");
  };

  var targetParserMap = {
    __default: function __default(target, value) {
      return [target, (0, _utils.semverify)(value)];
    },

    // Parse `node: true` and `node: "current"` to version
    node: function node(target, value) {
      var parsed = value === true || value === "current" ? process.versions.node : (0, _utils.semverify)(value);

      return [target, parsed];
    },

    // Only valid value for Uglify is `true`
    uglify: function uglify(target, value) {
      return [target, value === true];
    }
  };

  var getTargets = function getTargets() {
    var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var targetOpts = {};

    // Parse browsers target via browserslist
    if (isBrowsersQueryValid(targets.browsers)) {
      targetOpts = getLowestVersions((0, _browserslist2.default)(targets.browsers));
    }

    // Parse remaining targets
    var parsed = Object.keys(targets).reduce(function (results, target) {
      if (target !== "browsers") {
        var value = targets[target];

        // Warn when specifying minor/patch as a decimal
        if (typeof value === "number" && value % 1 !== 0) {
          results.decimalWarnings.push({ target: target, value: value });
        }

        // Check if we have a target parser?
        var parser = targetParserMap[target] || targetParserMap.__default;

        var _parser = parser(target, value),
            parsedTarget = _parser[0],
            parsedValue = _parser[1];

        if (parsedValue) {
          results.targets[parsedTarget] = parsedValue;
        }
      }

      return results;
    }, {
      targets: targetOpts,
      decimalWarnings: []
    });

    outputDecimalWarning(parsed.decimalWarnings);

    return parsed.targets;
  };

  exports.default = getTargets;
});
$__System.registerDynamic('1f', ['c'], true, function ($__require, exports, module) {
  var process = $__require('c');
  var global = this || self,
      GLOBAL = global;
  exports = module.exports = SemVer;

  // The debug function is excluded entirely from the minified version.
  /* nomin */var debug;
  /* nomin */if (typeof process === 'object' &&
  /* nomin */process.env &&
  /* nomin */process.env.NODE_DEBUG &&
  /* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
    /* nomin */debug = function () {
      /* nomin */var args = Array.prototype.slice.call(arguments, 0);
      /* nomin */args.unshift('SEMVER');
      /* nomin */console.log.apply(console, args);
      /* nomin */
    };
    /* nomin */else
    /* nomin */debug = function () {};

  // Note: this is the semver.org version of the spec that it implements
  // Not necessarily the package version of this code.
  exports.SEMVER_SPEC_VERSION = '2.0.0';

  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

  // The actual regexps go on exports.re
  var re = exports.re = [];
  var src = exports.src = [];
  var R = 0;

  // The following Regular Expressions can be used for tokenizing,
  // validating, and parsing SemVer version strings.

  // ## Numeric Identifier
  // A single `0`, or a non-zero digit followed by zero or more digits.

  var NUMERICIDENTIFIER = R++;
  src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
  var NUMERICIDENTIFIERLOOSE = R++;
  src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';

  // ## Non-numeric Identifier
  // Zero or more digits, followed by a letter or hyphen, and then zero or
  // more letters, digits, or hyphens.

  var NONNUMERICIDENTIFIER = R++;
  src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';

  // ## Main Version
  // Three dot-separated numeric identifiers.

  var MAINVERSION = R++;
  src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';

  var MAINVERSIONLOOSE = R++;
  src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

  // ## Pre-release Version Identifier
  // A numeric identifier, or a non-numeric identifier.

  var PRERELEASEIDENTIFIER = R++;
  src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';

  var PRERELEASEIDENTIFIERLOOSE = R++;
  src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';

  // ## Pre-release Version
  // Hyphen, followed by one or more dot-separated pre-release version
  // identifiers.

  var PRERELEASE = R++;
  src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

  var PRERELEASELOOSE = R++;
  src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

  // ## Build Metadata Identifier
  // Any combination of digits, letters, or hyphens.

  var BUILDIDENTIFIER = R++;
  src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

  // ## Build Metadata
  // Plus sign, followed by one or more period-separated build metadata
  // identifiers.

  var BUILD = R++;
  src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';

  // ## Full Version String
  // A main version, followed optionally by a pre-release version and
  // build metadata.

  // Note that the only major, minor, patch, and pre-release sections of
  // the version string are capturing groups.  The build metadata is not a
  // capturing group, because it should not ever be used in version
  // comparison.

  var FULL = R++;
  var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';

  src[FULL] = '^' + FULLPLAIN + '$';

  // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
  // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
  // common in the npm registry.
  var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';

  var LOOSE = R++;
  src[LOOSE] = '^' + LOOSEPLAIN + '$';

  var GTLT = R++;
  src[GTLT] = '((?:<|>)?=?)';

  // Something like "2.*" or "1.2.x".
  // Note that "x.x" is a valid xRange identifer, meaning "any version"
  // Only the first item is strictly required.
  var XRANGEIDENTIFIERLOOSE = R++;
  src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
  var XRANGEIDENTIFIER = R++;
  src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

  var XRANGEPLAIN = R++;
  src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';

  var XRANGEPLAINLOOSE = R++;
  src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';

  var XRANGE = R++;
  src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
  var XRANGELOOSE = R++;
  src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

  // Tilde ranges.
  // Meaning is "reasonably at or greater than"
  var LONETILDE = R++;
  src[LONETILDE] = '(?:~>?)';

  var TILDETRIM = R++;
  src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
  re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
  var tildeTrimReplace = '$1~';

  var TILDE = R++;
  src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
  var TILDELOOSE = R++;
  src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

  // Caret ranges.
  // Meaning is "at least and backwards compatible with"
  var LONECARET = R++;
  src[LONECARET] = '(?:\\^)';

  var CARETTRIM = R++;
  src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
  re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
  var caretTrimReplace = '$1^';

  var CARET = R++;
  src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
  var CARETLOOSE = R++;
  src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

  // A simple gt/lt/eq thing, or just "" to indicate "any version"
  var COMPARATORLOOSE = R++;
  src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
  var COMPARATOR = R++;
  src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';

  // An expression to strip any whitespace between the gtlt and the thing
  // it modifies, so that `> 1.2.3` ==> `>1.2.3`
  var COMPARATORTRIM = R++;
  src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

  // this one has to use the /g flag
  re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
  var comparatorTrimReplace = '$1$2$3';

  // Something like `1.2.3 - 1.2.4`
  // Note that these all use the loose form, because they'll be
  // checked against either the strict or loose comparator form
  // later.
  var HYPHENRANGE = R++;
  src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';

  var HYPHENRANGELOOSE = R++;
  src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';

  // Star ranges basically just allow anything at all.
  var STAR = R++;
  src[STAR] = '(<|>)?=?\\s*\\*';

  // Compile to actual regexp objects.
  // All are flag-free, unless they were created above with a flag.
  for (var i = 0; i < R; i++) {
    debug(i, src[i]);
    if (!re[i]) re[i] = new RegExp(src[i]);
  }

  exports.parse = parse;
  function parse(version, loose) {
    if (version instanceof SemVer) return version;

    if (typeof version !== 'string') return null;

    if (version.length > MAX_LENGTH) return null;

    var r = loose ? re[LOOSE] : re[FULL];
    if (!r.test(version)) return null;

    try {
      return new SemVer(version, loose);
    } catch (er) {
      return null;
    }
  }

  exports.valid = valid;
  function valid(version, loose) {
    var v = parse(version, loose);
    return v ? v.version : null;
  }

  exports.clean = clean;
  function clean(version, loose) {
    var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
    return s ? s.version : null;
  }

  exports.SemVer = SemVer;

  function SemVer(version, loose) {
    if (version instanceof SemVer) {
      if (version.loose === loose) return version;else version = version.version;
    } else if (typeof version !== 'string') {
      throw new TypeError('Invalid Version: ' + version);
    }

    if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');

    if (!(this instanceof SemVer)) return new SemVer(version, loose);

    debug('SemVer', version, loose);
    this.loose = loose;
    var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

    if (!m) throw new TypeError('Invalid Version: ' + version);

    this.raw = version;

    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');

    // numberify any prerelease numeric ids
    if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
      }
      return id;
    });

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  SemVer.prototype.format = function () {
    this.version = this.major + '.' + this.minor + '.' + this.patch;
    if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
    return this.version;
  };

  SemVer.prototype.toString = function () {
    return this.version;
  };

  SemVer.prototype.compare = function (other) {
    debug('SemVer.compare', this.version, this.loose, other);
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

    return this.compareMain(other) || this.comparePre(other);
  };

  SemVer.prototype.compareMain = function (other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  };

  SemVer.prototype.comparePre = function (other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;

    var i = 0;
    do {
      var a = this.prerelease[i];
      var b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
    } while (++i);
  };

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  SemVer.prototype.inc = function (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) this.patch++;
        this.prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) this.prerelease = [0];else {
          var i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) // didn't increment anything
            this.prerelease.push(0);
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
          } else this.prerelease = [identifier, 0];
        }
        break;

      default:
        throw new Error('invalid increment argument: ' + release);
    }
    this.format();
    this.raw = this.version;
    return this;
  };

  exports.inc = inc;
  function inc(version, release, loose, identifier) {
    if (typeof loose === 'string') {
      identifier = loose;
      loose = undefined;
    }

    try {
      return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
      return null;
    }
  }

  exports.diff = diff;
  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse(version1);
      var v2 = parse(version2);
      if (v1.prerelease.length || v2.prerelease.length) {
        for (var key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return 'pre' + key;
            }
          }
        }
        return 'prerelease';
      }
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return key;
          }
        }
      }
    }
  }

  exports.compareIdentifiers = compareIdentifiers;

  var numeric = /^[0-9]+$/;
  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);

    if (anum && bnum) {
      a = +a;
      b = +b;
    }

    return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
  }

  exports.rcompareIdentifiers = rcompareIdentifiers;
  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }

  exports.major = major;
  function major(a, loose) {
    return new SemVer(a, loose).major;
  }

  exports.minor = minor;
  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }

  exports.patch = patch;
  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }

  exports.compare = compare;
  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }

  exports.compareLoose = compareLoose;
  function compareLoose(a, b) {
    return compare(a, b, true);
  }

  exports.rcompare = rcompare;
  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }

  exports.sort = sort;
  function sort(list, loose) {
    return list.sort(function (a, b) {
      return exports.compare(a, b, loose);
    });
  }

  exports.rsort = rsort;
  function rsort(list, loose) {
    return list.sort(function (a, b) {
      return exports.rcompare(a, b, loose);
    });
  }

  exports.gt = gt;
  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }

  exports.lt = lt;
  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }

  exports.eq = eq;
  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }

  exports.neq = neq;
  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }

  exports.gte = gte;
  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }

  exports.lte = lte;
  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }

  exports.cmp = cmp;
  function cmp(a, op, b, loose) {
    var ret;
    switch (op) {
      case '===':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        ret = a === b;
        break;
      case '!==':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        ret = a !== b;
        break;
      case '':case '=':case '==':
        ret = eq(a, b, loose);break;
      case '!=':
        ret = neq(a, b, loose);break;
      case '>':
        ret = gt(a, b, loose);break;
      case '>=':
        ret = gte(a, b, loose);break;
      case '<':
        ret = lt(a, b, loose);break;
      case '<=':
        ret = lte(a, b, loose);break;
      default:
        throw new TypeError('Invalid operator: ' + op);
    }
    return ret;
  }

  exports.Comparator = Comparator;
  function Comparator(comp, loose) {
    if (comp instanceof Comparator) {
      if (comp.loose === loose) return comp;else comp = comp.value;
    }

    if (!(this instanceof Comparator)) return new Comparator(comp, loose);

    debug('comparator', comp, loose);
    this.loose = loose;
    this.parse(comp);

    if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;

    debug('comp', this);
  }

  var ANY = {};
  Comparator.prototype.parse = function (comp) {
    var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var m = comp.match(r);

    if (!m) throw new TypeError('Invalid comparator: ' + comp);

    this.operator = m[1];
    if (this.operator === '=') this.operator = '';

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
  };

  Comparator.prototype.toString = function () {
    return this.value;
  };

  Comparator.prototype.test = function (version) {
    debug('Comparator.test', version, this.loose);

    if (this.semver === ANY) return true;

    if (typeof version === 'string') version = new SemVer(version, this.loose);

    return cmp(version, this.operator, this.semver, this.loose);
  };

  Comparator.prototype.intersects = function (comp, loose) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required');
    }

    var rangeTmp;

    if (this.operator === '') {
      rangeTmp = new Range(comp.value, loose);
      return satisfies(this.value, rangeTmp, loose);
    } else if (comp.operator === '') {
      rangeTmp = new Range(this.value, loose);
      return satisfies(comp.semver, rangeTmp, loose);
    }

    var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, loose) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, loose) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');

    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };

  exports.Range = Range;
  function Range(range, loose) {
    if (range instanceof Range) {
      if (range.loose === loose) {
        return range;
      } else {
        return new Range(range.raw, loose);
      }
    }

    if (range instanceof Comparator) {
      return new Range(range.value, loose);
    }

    if (!(this instanceof Range)) return new Range(range, loose);

    this.loose = loose;

    // First, split based on boolean or ||
    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/).map(function (range) {
      return this.parseRange(range.trim());
    }, this).filter(function (c) {
      // throw out any that are not relevant for whatever reason
      return c.length;
    });

    if (!this.set.length) {
      throw new TypeError('Invalid SemVer Range: ' + range);
    }

    this.format();
  }

  Range.prototype.format = function () {
    this.range = this.set.map(function (comps) {
      return comps.join(' ').trim();
    }).join('||').trim();
    return this.range;
  };

  Range.prototype.toString = function () {
    return this.range;
  };

  Range.prototype.parseRange = function (range) {
    var loose = this.loose;
    range = range.trim();
    debug('range', range, loose);
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug('hyphen replace', range);
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
    debug('comparator trim', range, re[COMPARATORTRIM]);

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[TILDETRIM], tildeTrimReplace);

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[CARETTRIM], caretTrimReplace);

    // normalize spaces
    range = range.split(/\s+/).join(' ');

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var set = range.split(' ').map(function (comp) {
      return parseComparator(comp, loose);
    }).join(' ').split(/\s+/);
    if (this.loose) {
      // in loose mode, throw out any that are not valid comparators
      set = set.filter(function (comp) {
        return !!comp.match(compRe);
      });
    }
    set = set.map(function (comp) {
      return new Comparator(comp, loose);
    });

    return set;
  };

  Range.prototype.intersects = function (range, loose) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required');
    }

    return this.set.some(function (thisComparators) {
      return thisComparators.every(function (thisComparator) {
        return range.set.some(function (rangeComparators) {
          return rangeComparators.every(function (rangeComparator) {
            return thisComparator.intersects(rangeComparator, loose);
          });
        });
      });
    });
  };

  // Mostly just for testing and legacy API reasons
  exports.toComparators = toComparators;
  function toComparators(range, loose) {
    return new Range(range, loose).set.map(function (comp) {
      return comp.map(function (c) {
        return c.value;
      }).join(' ').trim().split(' ');
    });
  }

  // comprised of xranges, tildes, stars, and gtlt's at this point.
  // already replaced the hyphen ranges
  // turn into a set of JUST comparators.
  function parseComparator(comp, loose) {
    debug('comp', comp);
    comp = replaceCarets(comp, loose);
    debug('caret', comp);
    comp = replaceTildes(comp, loose);
    debug('tildes', comp);
    comp = replaceXRanges(comp, loose);
    debug('xrange', comp);
    comp = replaceStars(comp, loose);
    debug('stars', comp);
    return comp;
  }

  function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
  }

  // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
  function replaceTildes(comp, loose) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceTilde(comp, loose);
    }).join(' ');
  }

  function replaceTilde(comp, loose) {
    var r = loose ? re[TILDELOOSE] : re[TILDE];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('tilde', comp, _, M, m, p, pr);
      var ret;

      if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
        // ~1.2 == >=1.2.0 <1.3.0
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
        debug('replaceTilde pr', pr);
        if (pr.charAt(0) !== '-') pr = '-' + pr;
        ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else
        // ~1.2.3 == >=1.2.3 <1.3.0
        ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';

      debug('tilde return', ret);
      return ret;
    });
  }

  // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
  // ^1.2.3 --> >=1.2.3 <2.0.0
  // ^1.2.0 --> >=1.2.0 <2.0.0
  function replaceCarets(comp, loose) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceCaret(comp, loose);
    }).join(' ');
  }

  function replaceCaret(comp, loose) {
    debug('caret', comp, loose);
    var r = loose ? re[CARETLOOSE] : re[CARET];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('caret', comp, _, M, m, p, pr);
      var ret;

      if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
        if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
      } else if (pr) {
        debug('replaceCaret pr', pr);
        if (pr.charAt(0) !== '-') pr = '-' + pr;
        if (M === '0') {
          if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
        } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
      } else {
        debug('no pr');
        if (M === '0') {
          if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
      }

      debug('caret return', ret);
      return ret;
    });
  }

  function replaceXRanges(comp, loose) {
    debug('replaceXRanges', comp, loose);
    return comp.split(/\s+/).map(function (comp) {
      return replaceXRange(comp, loose);
    }).join(' ');
  }

  function replaceXRange(comp, loose) {
    comp = comp.trim();
    var r = loose ? re[XRANGELOOSE] : re[XRANGE];
    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;

      if (gtlt === '=' && anyX) gtlt = '';

      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          // nothing is allowed
          ret = '<0.0.0';
        } else {
          // nothing is forbidden
          ret = '*';
        }
      } else if (gtlt && anyX) {
        // replace X with 0
        if (xm) m = 0;
        if (xp) p = 0;

        if (gtlt === '>') {
          // >1 => >=2.0.0
          // >1.2 => >=1.3.0
          // >1.2.3 => >= 1.2.4
          gtlt = '>=';
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else if (xp) {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          // <=0.7.x is actually <0.8.0, since any 0.7.x should
          // pass.  Similarly, <=7.x is actually <8.0.0, etc.
          gtlt = '<';
          if (xm) M = +M + 1;else m = +m + 1;
        }

        ret = gtlt + M + '.' + m + '.' + p;
      } else if (xm) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (xp) {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      }

      debug('xRange return', ret);

      return ret;
    });
  }

  // Because * is AND-ed with everything else in the comparator,
  // and '' means "any version", just remove the *s entirely.
  function replaceStars(comp, loose) {
    debug('replaceStars', comp, loose);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[STAR], '');
  }

  // This function is passed to string.replace(re[HYPHENRANGE])
  // M, m, patch, prerelease, build
  // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
  // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
  // 1.2 - 3.4 => >=1.2.0 <3.5.0
  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {

    if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;

    if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;

    return (from + ' ' + to).trim();
  }

  // if ANY of the sets match ALL of its comparators, then pass
  Range.prototype.test = function (version) {
    if (!version) return false;

    if (typeof version === 'string') version = new SemVer(version, this.loose);

    for (var i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version)) return true;
    }
    return false;
  };

  function testSet(set, version) {
    for (var i = 0; i < set.length; i++) {
      if (!set[i].test(version)) return false;
    }

    if (version.prerelease.length) {
      // Find the set of versions that are allowed to have prereleases
      // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
      // That should allow `1.2.3-pr.2` to pass.
      // However, `1.2.4-alpha.notready` should NOT be allowed,
      // even though it's within the range set by the comparators.
      for (var i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === ANY) continue;

        if (set[i].semver.prerelease.length > 0) {
          var allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
        }
      }

      // Version has a -pre, but it's not one of the ones we like.
      return false;
    }

    return true;
  }

  exports.satisfies = satisfies;
  function satisfies(version, range, loose) {
    try {
      range = new Range(range, loose);
    } catch (er) {
      return false;
    }
    return range.test(version);
  }

  exports.maxSatisfying = maxSatisfying;
  function maxSatisfying(versions, range, loose) {
    var max = null;
    var maxSV = null;
    try {
      var rangeObj = new Range(range, loose);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, loose)
        if (!max || maxSV.compare(v) === -1) {
          // compare(max, v, true)
          max = v;
          maxSV = new SemVer(max, loose);
        }
      }
    });
    return max;
  }

  exports.minSatisfying = minSatisfying;
  function minSatisfying(versions, range, loose) {
    var min = null;
    var minSV = null;
    try {
      var rangeObj = new Range(range, loose);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, loose)
        if (!min || minSV.compare(v) === 1) {
          // compare(min, v, true)
          min = v;
          minSV = new SemVer(min, loose);
        }
      }
    });
    return min;
  }

  exports.validRange = validRange;
  function validRange(range, loose) {
    try {
      // Return '*' instead of '' so that truthiness works.
      // This will throw if it's invalid anyway
      return new Range(range, loose).range || '*';
    } catch (er) {
      return null;
    }
  }

  // Determine if version is less than all the versions possible in the range
  exports.ltr = ltr;
  function ltr(version, range, loose) {
    return outside(version, range, '<', loose);
  }

  // Determine if version is greater than all the versions possible in the range.
  exports.gtr = gtr;
  function gtr(version, range, loose) {
    return outside(version, range, '>', loose);
  }

  exports.outside = outside;
  function outside(version, range, hilo, loose) {
    version = new SemVer(version, loose);
    range = new Range(range, loose);

    var gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case '>':
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = '>';
        ecomp = '>=';
        break;
      case '<':
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = '<';
        ecomp = '<=';
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }

    // If it satisifes the range it is not outside
    if (satisfies(version, range, loose)) {
      return false;
    }

    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.

    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];

      var high = null;
      var low = null;

      comparators.forEach(function (comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator('>=0.0.0');
        }
        high = high || comparator;
        low = low || comparator;
        if (gtfn(comparator.semver, high.semver, loose)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, loose)) {
          low = comparator;
        }
      });

      // If the edge version comparator has a operator then our version
      // isn't outside it
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }

      // If the lowest version comparator has an operator and our version
      // is less than it then it isn't higher than the range
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  }

  exports.prerelease = prerelease;
  function prerelease(version, loose) {
    var parsed = parse(version, loose);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }

  exports.intersects = intersects;
  function intersects(r1, r2, loose) {
    r1 = new Range(r1, loose);
    r2 = new Range(r2, loose);
    return r1.intersects(r2);
  }
});
$__System.registerDynamic("1e", ["1f", "c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.prettifyTargets = exports.prettifyVersion = exports.semverify = exports._extends = undefined;

  var _semver = $__require("1f");

  var _semver2 = _interopRequireDefault(_semver);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var _extends = exports._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

  // Convert version to a semver value.
  // 2.5 -> 2.5.0; 1 -> 1.0.0;
  // @flow
  var semverify = exports.semverify = function semverify(version) {
    if (typeof version === "string" && _semver2.default.valid(version)) {
      return version;
    }

    var split = version.toString().split(".");

    while (split.length < 3) {
      split.push(0);
    }

    return split.join(".");
  };

  var prettifyVersion = exports.prettifyVersion = function prettifyVersion(version) {
    if (typeof version !== "string") {
      return version;
    }

    var parts = [_semver2.default.major(version)];
    var minor = _semver2.default.minor(version);
    var patch = _semver2.default.patch(version);

    if (minor || patch) {
      parts.push(minor);
    }

    if (patch) {
      parts.push(patch);
    }

    return parts.join(".");
  };

  var prettifyTargets = exports.prettifyTargets = function prettifyTargets() {
    var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return Object.keys(targets).reduce(function (results, target) {
      var value = targets[target];

      if (typeof value === "string") {
        value = prettifyVersion(value);
      }

      results[target] = value;
      return results;
    }, {});
  };
});
$__System.registerDynamic("20", ["1f", "d", "e", "f", "11", "12", "13", "1d", "1e", "c"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("c");
  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.transformIncludesAndExcludes = exports.isPluginRequired = undefined;
  exports.default = buildPreset;

  var _semver = $__require("1f");

  var _semver2 = _interopRequireDefault(_semver);

  var _builtIns = $__require("d");

  var _builtIns2 = _interopRequireDefault(_builtIns);

  var _defaultIncludes = $__require("e");

  var _moduleTransformations = $__require("f");

  var _moduleTransformations2 = _interopRequireDefault(_moduleTransformations);

  var _normalizeOptions = $__require("11");

  var _normalizeOptions2 = _interopRequireDefault(_normalizeOptions);

  var _plugins = $__require("12");

  var _plugins2 = _interopRequireDefault(_plugins);

  var _transformPolyfillRequirePlugin = $__require("13");

  var _transformPolyfillRequirePlugin2 = _interopRequireDefault(_transformPolyfillRequirePlugin);

  var _targetsParser = $__require("1d");

  var _targetsParser2 = _interopRequireDefault(_targetsParser);

  var _utils = $__require("1e");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /**
   * Determine if a transformation is required
   *
   * NOTE: This assumes `supportedEnvironments` has already been parsed by `getTargets`
   *
   * @param  {Object}  supportedEnvironments  An Object containing environment keys and the lowest
   *                                          supported version as a value
   * @param  {Object}  plugin                 An Object containing environment keys and the lowest
   *                                          version the feature was implemented in as a value
   * @return {Boolean} Whether or not the transformation is required
   */
  var isPluginRequired = exports.isPluginRequired = function isPluginRequired(supportedEnvironments, plugin) {
    var targetEnvironments = Object.keys(supportedEnvironments);

    if (targetEnvironments.length === 0) {
      return true;
    }

    var isRequiredForEnvironments = targetEnvironments.filter(function (environment) {
      // Feature is not implemented in that environment
      if (!plugin[environment]) {
        return true;
      }

      var lowestImplementedVersion = plugin[environment];
      var lowestTargetedVersion = supportedEnvironments[environment];

      if (!_semver2.default.valid(lowestTargetedVersion)) {
        throw new Error(
        // eslint-disable-next-line max-len
        "Invalid version passed for target \"" + environment + "\": \"" + lowestTargetedVersion + "\". Versions must be in semver format (major.minor.patch)");
      }

      return _semver2.default.gt((0, _utils.semverify)(lowestImplementedVersion), lowestTargetedVersion);
    });

    return isRequiredForEnvironments.length > 0;
  };

  var hasBeenLogged = false;

  var logPlugin = function logPlugin(plugin, targets, list) {
    var envList = list[plugin] || {};
    var filteredList = Object.keys(targets).reduce(function (a, b) {
      if (!envList[b] || _semver2.default.lt(targets[b], (0, _utils.semverify)(envList[b]))) {
        a[b] = (0, _utils.prettifyVersion)(targets[b]);
      }
      return a;
    }, {});
    var logStr = "  " + plugin + " " + JSON.stringify(filteredList);
    console.log(logStr);
  };

  var filterItem = function filterItem(targets, exclusions, list, item) {
    var isDefault = _defaultIncludes.defaultWebIncludes.indexOf(item) >= 0;
    var notExcluded = exclusions.indexOf(item) === -1;

    if (isDefault) return notExcluded;
    var isRequired = isPluginRequired(targets, list[item]);
    return isRequired && notExcluded;
  };

  var getBuiltInTargets = function getBuiltInTargets(targets) {
    var builtInTargets = (0, _utils._extends)({}, targets);
    if (builtInTargets.uglify != null) {
      delete builtInTargets.uglify;
    }
    return builtInTargets;
  };

  var transformIncludesAndExcludes = exports.transformIncludesAndExcludes = function transformIncludesAndExcludes(opts) {
    return {
      all: opts,
      plugins: opts.filter(function (opt) {
        return !opt.match(/^(es\d+|web)\./);
      }),
      builtIns: opts.filter(function (opt) {
        return opt.match(/^(es\d+|web)\./);
      })
    };
  };

  function getPlatformSpecificDefaultFor(targets) {
    var targetNames = Object.keys(targets);
    var isAnyTarget = !targetNames.length;
    var isWebTarget = targetNames.some(function (name) {
      return name !== "node";
    });

    return isAnyTarget || isWebTarget ? _defaultIncludes.defaultWebIncludes : [];
  }

  function buildPreset(context) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var validatedOptions = (0, _normalizeOptions2.default)(opts);
    var debug = validatedOptions.debug,
        loose = validatedOptions.loose,
        moduleType = validatedOptions.moduleType,
        spec = validatedOptions.spec,
        useBuiltIns = validatedOptions.useBuiltIns;

    var targets = (0, _targetsParser2.default)(validatedOptions.targets);
    var include = transformIncludesAndExcludes(validatedOptions.include);
    var exclude = transformIncludesAndExcludes(validatedOptions.exclude);

    var filterPlugins = filterItem.bind(null, targets, exclude.plugins, _plugins2.default);
    var transformations = Object.keys(_plugins2.default).filter(filterPlugins).concat(include.plugins);

    var polyfills = void 0;
    var polyfillTargets = void 0;
    if (useBuiltIns) {
      polyfillTargets = getBuiltInTargets(targets);
      var filterBuiltIns = filterItem.bind(null, polyfillTargets, exclude.builtIns, _builtIns2.default);
      polyfills = Object.keys(_builtIns2.default).concat(getPlatformSpecificDefaultFor(polyfillTargets)).filter(filterBuiltIns).concat(include.builtIns);
    }

    if (debug && !hasBeenLogged) {
      hasBeenLogged = true;
      console.log("babel-preset-env: `DEBUG` option");
      console.log("\nUsing targets:");
      console.log(JSON.stringify((0, _utils.prettifyTargets)(targets), null, 2));
      console.log("\nModules transform: " + moduleType);
      console.log("\nUsing plugins:");
      transformations.forEach(function (transform) {
        logPlugin(transform, targets, _plugins2.default);
      });
      if (useBuiltIns && polyfills.length) {
        console.log("\nUsing polyfills:");
        polyfills.forEach(function (polyfill) {
          logPlugin(polyfill, polyfillTargets, _builtIns2.default);
        });
      }
    }

    var regenerator = transformations.indexOf("transform-regenerator") >= 0;
    var modulePlugin = moduleType !== false && _moduleTransformations2.default[moduleType];
    var plugins = [];

    // NOTE: not giving spec here yet to avoid compatibility issues when
    // babel-plugin-transform-es2015-modules-commonjs gets its spec mode
    modulePlugin && plugins.push([$__require("babel-plugin-" + modulePlugin), { loose: loose }]);

    plugins.push.apply(plugins, transformations.map(function (pluginName) {
      return [$__require("babel-plugin-" + pluginName), { spec: spec, loose: loose }];
    }));

    useBuiltIns && plugins.push([_transformPolyfillRequirePlugin2.default, { polyfills: polyfills, regenerator: regenerator }]);

    return {
      plugins: plugins
    };
  }
});
$__System.registerDynamic("@system-env", [], true, function() {
  return {
    "default": true
  };
});

$__System.registerDynamic('c', ['@system-env'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // From https://github.com/defunctzombie/node-process/blob/master/browser.js
    // shim for using process in browser

    var productionEnv = $__require('@system-env').production;

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
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
        var timeout = setTimeout(cleanUpNextTick);
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
        clearTimeout(timeout);
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
            setTimeout(drainQueue, 0);
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
    process.env = {
        NODE_ENV: productionEnv ? 'production' : 'development'
    };
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
$__System.registerDynamic('a', ['20', 'c'], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var process = $__require('c');
  var global = this || self,
      GLOBAL = global;
  const plugins = [
  // class { handleClick = () => { } }
  $__require.resolve('babel-plugin-transform-class-properties'),
  // The following two plugins use Object.assign directly, instead of Babel's
  // extends helper. Note that this assumes `Object.assign` is available.
  // { ...todo, completed: true }
  [$__require.resolve('babel-plugin-transform-object-rest-spread'), {
    useBuiltIns: true
  }],
  // Transforms JSX
  [$__require.resolve('babel-plugin-transform-react-jsx'), {
    useBuiltIns: true
  }],
  // Polyfills the runtime needed for async/await and generators
  [$__require.resolve('babel-plugin-transform-runtime'), {
    helpers: false,
    polyfill: false,
    regenerator: true
  }]];

  // This is similar to how `env` works in Babel:
  // https://babeljs.io/docs/usage/babelrc/#env-option
  // We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
  // https://github.com/babel/babel/issues/4539
  // https://github.com/facebookincubator/create-react-app/issues/720
  // It’s also nice that we can enforce `NODE_ENV` being specified.
  var env = process.env.BABEL_ENV || 'production';
  if (env !== 'development' && env !== 'test' && env !== 'production') {
    throw new Error('Using `babel-preset-react-app` requires that you specify `NODE_ENV` or ' + '`BABEL_ENV` environment variables. Valid values are "development", ' + '"test", and "production". Instead, received: ' + JSON.stringify(env) + '.');
  }

  if (env === 'development' || env === 'test') {
    // The following two plugins are currently necessary to make React warnings
    // include more valuable information. They are included here because they are
    // currently not enabled in babel-preset-react. See the below threads for more info:
    // https://github.com/babel/babel/issues/4702
    // https://github.com/babel/babel/pull/3540#issuecomment-228673661
    // https://github.com/facebookincubator/create-react-app/issues/989
    plugins.push.apply(plugins, [
    // Adds component stack to warning messages
    $__require.resolve('babel-plugin-transform-react-jsx-source'),
    // Adds __self attribute to JSX which React will use for some warnings
    $__require.resolve('babel-plugin-transform-react-jsx-self')]);
  }

  if (env === 'test') {
    module.exports = {
      presets: [
      // ES features necessary for user's Node version
      [$__require('20').default, {
        targets: {
          node: 'current'
        }
      }],
      // JSX, Flow
      $__require.resolve('babel-preset-react')],
      plugins: plugins.concat([
      // Compiles import() to a deferred require()
      $__require.resolve('babel-plugin-dynamic-import-node')])
    };
  } else {
    module.exports = {
      presets: [
      // Latest stable ECMAScript features
      [$__require.resolve('babel-preset-env'), {
        targets: {
          // React parses on ie 9, so we should too
          ie: 9,
          // We currently minify with uglify
          // Remove after https://github.com/mishoo/UglifyJS2/issues/448
          uglify: true
        },
        // Disable polyfill transforms
        useBuiltIns: false,
        // Do not transform modules to CJS
        modules: false
      }],
      // JSX, Flow
      $__require.resolve('babel-preset-react')],
      plugins: plugins.concat([
      // function* () { yield 42; yield 43; }
      [$__require.resolve('babel-plugin-transform-regenerator'), {
        // Async functions are converted to generators by babel-preset-env
        async: false
      }],
      // Adds syntax support for import()
      $__require.resolve('babel-plugin-syntax-dynamic-import')])
    };

    if (env === 'production') {
      // Optimization: hoist JSX that never changes out of render()
      // Disabled because of issues: https://github.com/facebookincubator/create-react-app/issues/553
      // TODO: Enable again when these issues are resolved.
      // plugins.push.apply(plugins, [
      //   require.resolve('babel-plugin-transform-react-constant-elements')
      // ]);
    }
  }
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=react-app.js.map