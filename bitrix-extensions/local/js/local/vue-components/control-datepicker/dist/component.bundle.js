/* eslint-disable */
this.BX = this.BX || {};
(function (exports,vue,dateFns) {
  'use strict';

  var _excluded = ["openOnTop"];
  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function Bt() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }), vue.createElementVNode("path", {
      d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), vue.createElementVNode("path", {
      d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), vue.createElementVNode("path", {
      d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    })]);
  }
  Bt.compatConfig = {
    MODE: 3
  };
  function wa() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }), vue.createElementVNode("path", {
      d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })]);
  }
  wa.compatConfig = {
    MODE: 3
  };
  function Nn() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })]);
  }
  Nn.compatConfig = {
    MODE: 3
  };
  function Bn() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    })]);
  }
  Bn.compatConfig = {
    MODE: 3
  };
  function In() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }), vue.createElementVNode("path", {
      d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    })]);
  }
  In.compatConfig = {
    MODE: 3
  };
  function En() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })]);
  }
  En.compatConfig = {
    MODE: 3
  };
  function Fn() {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [vue.createElementVNode("path", {
      d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })]);
  }
  Fn.compatConfig = {
    MODE: 3
  };
  var Ft = 36e5,
    Sn = 6e4,
    ol = 2,
    sl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    il = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    ul = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
    Be = {
      dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
      datePattern: /^([0-9W+-]+)(.*)/,
      plainTime: /:/,
      // year tokens
      YY: /^(\d{2})$/,
      YYY: [/^([+-]\d{2})$/,
      // 0 additional digits
      /^([+-]\d{3})$/,
      // 1 additional digit
      /^([+-]\d{4})$/
      // 2 additional digits
      ],

      YYYY: /^(\d{4})/,
      YYYYY: [/^([+-]\d{4})/,
      // 0 additional digits
      /^([+-]\d{5})/,
      // 1 additional digit
      /^([+-]\d{6})/
      // 2 additional digits
      ],

      // date tokens
      MM: /^-(\d{2})$/,
      DDD: /^-?(\d{3})$/,
      MMDD: /^-?(\d{2})-?(\d{2})$/,
      Www: /^-?W(\d{2})$/,
      WwwD: /^-?W(\d{2})-?(\d{1})$/,
      HH: /^(\d{2}([.,]\d*)?)$/,
      HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
      HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
      // time zone tokens (to identify the presence of a tz)
      timezone: /([Z+-].*)$/,
      timeZone: /([Z+-].*)$/,
      timezoneZ: /^(Z)$/,
      timezoneHH: /^([+-]\d{2})$/,
      timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
    },
    dl = function dl(e, t, l) {
      var a = ln(e, l),
        n = Hn(t, a, !0),
        i = new Date(a.getTime() - n),
        r = /* @__PURE__ */new Date(0);
      return r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), r.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), r;
    },
    cl = function cl(e, t, l) {
      if (typeof e == "string" && !e.match(ul)) {
        var r = $l(l);
        return r.timeZone = t, ln(e, r);
      }
      var a = ln(e, l),
        n = Vn(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()).getTime(),
        i = Hn(t, new Date(n));
      return new Date(n + i);
    };
  function Hn(e, t, l) {
    var a, n;
    if (!e || (a = Be.timezoneZ.exec(e), a)) return 0;
    var i;
    if (a = Be.timezoneHH.exec(e), a) return i = parseInt(a[1], 10), ea(i) ? -(i * Ft) : NaN;
    if (a = Be.timezoneHHMM.exec(e), a) {
      i = parseInt(a[1], 10);
      var r = parseInt(a[2], 10);
      return ea(i, r) ? (n = Math.abs(i) * Ft + r * Sn, i > 0 ? -n : n) : NaN;
    }
    if (fl(e)) {
      t = new Date(t || Date.now());
      var _r2 = l ? t : Al(t),
        d = Pn(_r2, e);
      return -(l ? d : vl(t, d, e));
    }
    return NaN;
  }
  var xn = {};
  function fl(e) {
    if (xn[e]) return !0;
    try {
      return xn[e] = !0, !0;
    } catch (_unused) {
      return !1;
    }
  }
  function vl(e, t, l) {
    var n = e.getTime() - t;
    var i = Pn(new Date(n), l);
    if (t === i) return t;
    n -= i - t;
    var r = Pn(new Date(n), l);
    return i === r ? i : Math.max(i, r);
  }
  function ea(e, t) {
    return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
  }
  function Pn(e, t) {
    var l = ml(e, t),
      a = Vn(l[0], l[1] - 1, l[2], l[3] % 24, l[4], l[5], 0).getTime();
    var n = e.getTime();
    var i = n % 1e3;
    return n -= i >= 0 ? i : 1e3 + i, a - n;
  }
  function Vn(e, t, l, a, n, i, r) {
    var d = /* @__PURE__ */new Date(0);
    return d.setUTCFullYear(e, t, l), d.setUTCHours(a, n, i, r), d;
  }
  function ml(e, t) {
    var l = gl(t);
    return l.formatToParts ? pl(l, e) : hl(l, e);
  }
  var gn = {};
  function gl(e) {
    if (!gn[e]) {
      var t = new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: "America/New_York",
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format( /* @__PURE__ */new Date("2014-06-25T04:00:00.123Z")),
        l = t === "06/25/2014, 00:00:00" || t === "06/25/2014 00:00:00";
      gn[e] = l ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: e,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: e,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return gn[e];
  }
  var yl = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function pl(e, t) {
    try {
      var l = e.formatToParts(t),
        a = [];
      for (var n = 0; n < l.length; n++) {
        var i = yl[l[n].type];
        i >= 0 && (a[i] = parseInt(l[n].value, 10));
      }
      return a;
    } catch (l) {
      if (l instanceof RangeError) return [NaN];
      throw l;
    }
  }
  function hl(e, t) {
    var l = e.format(t).replace(/\u200E/g, ""),
      a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(l);
    return [a[3], a[1], a[2], a[4], a[5], a[6]];
  }
  function ln(e, t) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (e === null) return /* @__PURE__ */new Date(NaN);
    var l = t || {},
      a = l.additionalDigits == null ? ol : Ml(l.additionalDigits);
    if (a !== 2 && a !== 1 && a !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (e instanceof Date || babelHelpers["typeof"](e) == "object" && Object.prototype.toString.call(e) === "[object Date]") return new Date(e.getTime());
    if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") return new Date(e);
    if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]")) return /* @__PURE__ */new Date(NaN);
    var n = Dl(e),
      i = wl(n.date, a),
      r = i.year,
      d = i.restDateString,
      M = k(d, r);
    function k(P, b) {
      if (b === null) return null;
      var _, Y, $, w;
      if (P.length === 0) return Y = /* @__PURE__ */new Date(0), Y.setUTCFullYear(b), Y;
      if (_ = Be.MM.exec(P), _) return Y = /* @__PURE__ */new Date(0), $ = parseInt(_[1], 10) - 1, na(b, $) ? (Y.setUTCFullYear(b, $), Y) : /* @__PURE__ */new Date(NaN);
      if (_ = Be.DDD.exec(P), _) {
        Y = /* @__PURE__ */new Date(0);
        var K = parseInt(_[1], 10);
        return bl(b, K) ? (Y.setUTCFullYear(b, 0, K), Y) : /* @__PURE__ */new Date(NaN);
      }
      if (_ = Be.MMDD.exec(P), _) {
        Y = /* @__PURE__ */new Date(0), $ = parseInt(_[1], 10) - 1;
        var _K = parseInt(_[2], 10);
        return na(b, $, _K) ? (Y.setUTCFullYear(b, $, _K), Y) : /* @__PURE__ */new Date(NaN);
      }
      if (_ = Be.Www.exec(P), _) return w = parseInt(_[1], 10) - 1, aa(b, w) ? ta(b, w) : /* @__PURE__ */new Date(NaN);
      if (_ = Be.WwwD.exec(P), _) {
        w = parseInt(_[1], 10) - 1;
        var _K2 = parseInt(_[2], 10) - 1;
        return aa(b, w, _K2) ? ta(b, w, _K2) : /* @__PURE__ */new Date(NaN);
      }
      return null;
    }
    if (isNaN(M)) return /* @__PURE__ */new Date(NaN);
    if (M) {
      var P = M.getTime();
      var b = 0,
        _;
      if (n.time && (b = kl(n.time), isNaN(b))) return /* @__PURE__ */new Date(NaN);
      if (n.timeZone || l.timeZone) {
        if (_ = Hn(n.timeZone || l.timeZone, new Date(P + b)), isNaN(_)) return /* @__PURE__ */new Date(NaN);
      } else _ = la(new Date(P + b)), _ = la(new Date(P + b + _));
      return new Date(P + b + _);
    } else return /* @__PURE__ */new Date(NaN);
  }
  function ta(e, t, l) {
    t = t || 0, l = l || 0;
    var a = /* @__PURE__ */new Date(0);
    a.setUTCFullYear(e, 0, 4);
    var n = a.getUTCDay() || 7,
      i = t * 7 + l + 1 - n;
    return a.setUTCDate(a.getUTCDate() + i), a;
  }
  function Da(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
  }
  function na(e, t, l) {
    if (t < 0 || t > 11) return !1;
    if (l != null) {
      if (l < 1) return !1;
      var a = Da(e);
      if (a && l > il[t] || !a && l > sl[t]) return !1;
    }
    return !0;
  }
  function bl(e, t) {
    if (t < 1) return !1;
    var l = Da(e);
    return l && t > 366 ? !1 : !(!l && t > 365);
  }
  function aa(e, t, l) {
    return t < 0 || t > 52 ? !1 : !(l != null && (l < 0 || l > 6));
  }
  function yn(e, t, l) {
    return e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) ? !1 : !(l != null && (l < 0 || l >= 60));
  }
  function kl(e) {
    var t, l, a;
    if (t = Be.HH.exec(e), t) return l = parseFloat(t[1].replace(",", ".")), yn(l) ? l % 24 * Ft : NaN;
    if (t = Be.HHMM.exec(e), t) return l = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), yn(l, a) ? l % 24 * Ft + a * Sn : NaN;
    if (t = Be.HHMMSS.exec(e), t) {
      l = parseInt(t[1], 10), a = parseInt(t[2], 10);
      var n = parseFloat(t[3].replace(",", "."));
      return yn(l, a, n) ? l % 24 * Ft + a * Sn + n * 1e3 : NaN;
    }
    return null;
  }
  function wl(e, t) {
    var l = Be.YYY[t],
      a = Be.YYYYY[t];
    var n;
    if (n = Be.YYYY.exec(e) || a.exec(e), n) {
      var i = n[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (n = Be.YY.exec(e) || l.exec(e), n) {
      var _i = n[1];
      return {
        year: parseInt(_i, 10) * 100,
        restDateString: e.slice(_i.length)
      };
    }
    return {
      year: null
    };
  }
  function Dl(e) {
    var t = {};
    var l = Be.dateTimePattern.exec(e),
      a;
    if (l ? (t.date = l[1], a = l[3]) : (l = Be.datePattern.exec(e), l ? (t.date = l[1], a = l[2]) : (t.date = null, a = e)), a) {
      var n = Be.timeZone.exec(a);
      n ? (t.time = a.replace(n[1], ""), t.timeZone = n[1].trim()) : t.time = a;
    }
    return t;
  }
  function la(e) {
    var t = ln(e),
      l = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return l.setUTCFullYear(t.getFullYear()), +e - +l;
  }
  function Ml(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  function $l(e) {
    return Tl({}, e);
  }
  function Tl(e, t) {
    if (e == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    return e;
  }
  function Al(e) {
    return Vn(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  }
  function ra(e) {
    return function (t) {
      return new Intl.DateTimeFormat(e, {
        weekday: "short",
        timeZone: "UTC"
      }).format( /* @__PURE__ */new Date("2017-01-0".concat(t, "T00:00:00+00:00"))).slice(0, 2);
    };
  }
  function Sl(e) {
    return function (t) {
      return dateFns.format( /* @__PURE__ */new Date("2017-01-0".concat(t, "T00:00:00+00:00")), "EEEEEE", {
        locale: e
      });
    };
  }
  var Pl = function Pl(e, t, l) {
      var _concat, _ref;
      var a = [1, 2, 3, 4, 5, 6, 7];
      var n;
      if (e !== null) try {
        n = a.map(Sl(e));
      } catch (_unused2) {
        n = a.map(ra(t));
      } else n = a.map(ra(t));
      var i = n.slice(0, l),
        r = n.slice(l + 1, n.length);
      return (_concat = (_ref = [n[l]]).concat.apply(_ref, babelHelpers.toConsumableArray(r))).concat.apply(_concat, babelHelpers.toConsumableArray(i));
    },
    Ln = function Ln(e, t) {
      var l = [];
      for (var a = +e[0]; a <= +e[1]; a++) l.push({
        value: +a,
        text: "".concat(a)
      });
      return t ? l.reverse() : l;
    },
    Ma = function Ma(e, t, l) {
      var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (i) {
        var r = i < 10 ? "0".concat(i) : i;
        return /* @__PURE__ */new Date("2017-".concat(r, "-01T00:00:00+00:00"));
      });
      if (e !== null) try {
        var i = l === "long" ? "MMMM" : "MMM";
        return a.map(function (r, d) {
          var M = dateFns.format(r, i, {
            locale: e
          });
          return {
            text: M.charAt(0).toUpperCase() + M.substring(1),
            value: d
          };
        });
      } catch (_unused3) {}
      var n = new Intl.DateTimeFormat(t, {
        month: l,
        timeZone: "UTC"
      });
      return a.map(function (i, r) {
        var d = n.format(i);
        return {
          text: d.charAt(0).toUpperCase() + d.substring(1),
          value: r
        };
      });
    },
    Rl = function Rl(e) {
      return [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e];
    },
    Ne = function Ne(e) {
      var t = vue.unref(e);
      return t != null && t.$el ? t == null ? void 0 : t.$el : t;
    },
    Cl = function Cl(e) {
      return Object.assign({
        type: "dot"
      }, e);
    },
    $a = function $a(e) {
      return Array.isArray(e) ? !!e[0] && !!e[1] : !1;
    },
    Wn = {
      prop: function prop(e) {
        return "\"".concat(e, "\" prop must be enabled!");
      },
      dateArr: function dateArr(e) {
        return "You need to use array as \"model-value\" binding in order to support \"".concat(e, "\"");
      }
    },
    Oe = function Oe(e) {
      return e;
    },
    oa = function oa(e) {
      return e === 0 ? e : !e || isNaN(+e) ? null : +e;
    },
    sa = function sa(e) {
      return e === null;
    },
    Ta = function Ta(e) {
      if (e) return babelHelpers.toConsumableArray(e.querySelectorAll("input, button, select, textarea, a[href]"))[0];
    },
    _l = function _l(e) {
      var t = [],
        l = function l(a) {
          return a.filter(function (n) {
            return n;
          });
        };
      for (var a = 0; a < e.length; a += 3) {
        var n = [e[a], e[a + 1], e[a + 2]];
        t.push(l(n));
      }
      return t;
    },
    Ut = function Ut(e, t, l) {
      var a = l != null,
        n = t != null;
      if (!a && !n) return !1;
      var i = +l,
        r = +t;
      return a && n ? +e > i || +e < r : a ? +e > i : n ? +e < r : !1;
    },
    Ot = function Ot(e, t) {
      return _l(e).map(function (l) {
        return l.map(function (a) {
          var _t2 = t(a),
            n = _t2.active,
            i = _t2.disabled,
            r = _t2.isBetween,
            d = _t2.highlighted;
          return _objectSpread(_objectSpread({}, a), {}, {
            active: n,
            disabled: i,
            className: {
              dp__overlay_cell_active: n,
              dp__overlay_cell: !n,
              dp__overlay_cell_disabled: i,
              dp__overlay_cell_pad: !0,
              dp__overlay_cell_active_disabled: i && n,
              dp__cell_in_between: r,
              "dp--highlighted": d
            }
          });
        });
      });
    },
    mt = function mt(e, t) {
      var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
    },
    Ol = function Ol() {
      return ["a[href]", "area[href]", "input:not([disabled]):not([type='hidden'])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "[tabindex]:not([tabindex='-1'])", "[data-datepicker-instance]"].join(", ");
    };
  function Yl(e, t) {
    var l = babelHelpers.toConsumableArray(document.querySelectorAll(Ol()));
    l = l.filter(function (n) {
      return !e.contains(n) || n.hasAttribute("data-datepicker-instance");
    });
    var a = l.indexOf(e);
    if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length)) return l[a + (t ? -1 : 1)];
  }
  var Nl = function Nl(e, t) {
      return e == null ? void 0 : e.querySelector("[data-dp-element=\"".concat(t, "\"]"));
    },
    ia = function ia(e, t, l, a, n) {
      var i = dateFns.parse(e, t.slice(0, e.length), /* @__PURE__ */new Date());
      return dateFns.isValid(i) && dateFns.isDate(i) ? a || n ? i : dateFns.set(i, {
        hours: +l.hours,
        minutes: +(l == null ? void 0 : l.minutes),
        seconds: +(l == null ? void 0 : l.seconds),
        milliseconds: 0
      }) : null;
    },
    Bl = function Bl(e, t, l, a, n) {
      var i = Array.isArray(l) ? l[0] : l;
      if (typeof t == "string") return ia(e, t, i, a, n);
      if (Array.isArray(t)) {
        var r = null;
        var _iterator = _createForOfIteratorHelper(t),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var d = _step.value;
            if (r = ia(e, d, i, a, n), r) break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return r;
      }
      return typeof t == "function" ? t(e) : null;
    },
    F = function F(e) {
      return e ? new Date(e) : /* @__PURE__ */new Date();
    },
    Il = function Il(e, t, l) {
      if (t) {
        var n = (e.getMonth() + 1).toString().padStart(2, "0"),
          i = e.getDate().toString().padStart(2, "0"),
          r = e.getHours().toString().padStart(2, "0"),
          d = e.getMinutes().toString().padStart(2, "0"),
          M = l ? e.getSeconds().toString().padStart(2, "0") : "00";
        return "".concat(e.getFullYear(), "-").concat(n, "-").concat(i, "T").concat(r, ":").concat(d, ":").concat(M, ".000Z");
      }
      var a = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
      return new Date(a).toISOString();
    },
    Ve = function Ve(e) {
      var t = F(JSON.parse(JSON.stringify(e)));
      return t = dateFns.setHours(t, 0), t = dateFns.setMinutes(t, 0), t = dateFns.setSeconds(t, 0), t = dateFns.setMilliseconds(t, 0), t;
    },
    gt = function gt(e, t, l, a) {
      var n = e ? F(e) : F();
      return (t || t === 0) && (n = dateFns.setHours(n, +t)), (l || l === 0) && (n = dateFns.setMinutes(n, +l)), (a || a === 0) && (n = dateFns.setSeconds(n, +a)), dateFns.setMilliseconds(n, 0);
    },
    Ce = function Ce(e, t) {
      return !e || !t ? !1 : dateFns.isBefore(Ve(e), Ve(t));
    },
    ye = function ye(e, t) {
      return !e || !t ? !1 : dateFns.isEqual(Ve(e), Ve(t));
    },
    _e = function _e(e, t) {
      return !e || !t ? !1 : dateFns.isAfter(Ve(e), Ve(t));
    },
    rn = function rn(e, t, l) {
      return e != null && e[0] && e != null && e[1] ? _e(l, e[0]) && Ce(l, e[1]) : e != null && e[0] && t ? _e(l, e[0]) && Ce(l, t) || Ce(l, e[0]) && _e(l, t) : !1;
    },
    Je = function Je(e) {
      var t = dateFns.set(new Date(e), {
        date: 1
      });
      return Ve(t);
    },
    pn = function pn(e, t, l) {
      return t && (l || l === 0) ? Object.fromEntries(["hours", "minutes", "seconds"].map(function (a) {
        return a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]];
      })) : {
        hours: isNaN(+e.hours) ? void 0 : +e.hours,
        minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
        seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
      };
    },
    Mt = function Mt(e) {
      return {
        hours: dateFns.getHours(e),
        minutes: dateFns.getMinutes(e),
        seconds: dateFns.getSeconds(e)
      };
    },
    Aa = function Aa(e, t) {
      if (t) {
        var l = dateFns.getYear(F(t));
        if (l > e) return 12;
        if (l === e) return dateFns.getMonth(F(t));
      }
    },
    Sa = function Sa(e, t) {
      if (t) {
        var l = dateFns.getYear(F(t));
        return l < e ? -1 : l === e ? dateFns.getMonth(F(t)) : void 0;
      }
    },
    Yt = function Yt(e) {
      if (e) return dateFns.getYear(F(e));
    },
    tt = function tt(e, t) {
      return t ? dl(e, t) : e;
    },
    Pa = function Pa(e, t) {
      return t ? cl(e, t) : e;
    },
    El = function El(e) {
      return e instanceof Date ? e : dateFns.parseISO(e);
    },
    Ra = function Ra(e, t) {
      var l = _e(e, t) ? t : e,
        a = _e(t, e) ? t : e;
      return dateFns.eachDayOfInterval({
        start: l,
        end: a
      });
    },
    Fl = function Fl(e) {
      var t = dateFns.addMonths(e, 1);
      return {
        month: dateFns.getMonth(t),
        year: dateFns.getYear(t)
      };
    },
    st = function st(e, t, l) {
      var a = dateFns.startOfWeek(tt(e, t), {
          weekStartsOn: +l
        }),
        n = dateFns.endOfWeek(tt(e, t), {
          weekStartsOn: +l
        });
      return [a, n];
    },
    Ca = function Ca(e, t) {
      var l = {
        hours: dateFns.getHours(F()),
        minutes: dateFns.getMinutes(F()),
        seconds: t ? dateFns.getSeconds(F()) : 0
      };
      return Object.assign(l, e);
    },
    vt = function vt(e, t, l) {
      return [dateFns.set(F(e), {
        date: 1
      }), dateFns.set(F(), {
        month: t,
        year: l,
        date: 1
      })];
    },
    it = function it(e, t, l) {
      var a = e ? F(e) : F();
      return (t || t === 0) && (a = dateFns.setMonth(a, t)), l && (a = dateFns.setYear(a, l)), a;
    },
    _a = function _a(e, t, l, a, n) {
      if (!a || n && !t || !n && !l) return !1;
      var i = n ? dateFns.addMonths(e, 1) : dateFns.subMonths(e, 1),
        r = [dateFns.getMonth(i), dateFns.getYear(i)];
      return n ? !Vl.apply(void 0, r.concat([t])) : !Hl.apply(void 0, r.concat([l]));
    },
    Hl = function Hl(e, t, l) {
      return Ce.apply(void 0, babelHelpers.toConsumableArray(vt(l, e, t))) || ye.apply(void 0, babelHelpers.toConsumableArray(vt(l, e, t)));
    },
    Vl = function Vl(e, t, l) {
      return _e.apply(void 0, babelHelpers.toConsumableArray(vt(l, e, t))) || ye.apply(void 0, babelHelpers.toConsumableArray(vt(l, e, t)));
    },
    Oa = function Oa(e, t, l, a, n, i, r) {
      if (typeof t == "function" && !r) return t(e);
      var d = l ? {
        locale: l
      } : void 0;
      return Array.isArray(e) ? "".concat(dateFns.format(e[0], i, d)).concat(n && !e[1] ? "" : a).concat(e[1] ? dateFns.format(e[1], i, d) : "") : dateFns.format(e, i, d);
    },
    Pt = function Pt(e) {
      if (e) return null;
      throw new Error(Wn.prop("partial-range"));
    },
    Jt = function Jt(e, t) {
      if (t) return e();
      throw new Error(Wn.prop("range"));
    },
    Rn = function Rn(e) {
      return Array.isArray(e) ? dateFns.isValid(e[0]) && (e[1] ? dateFns.isValid(e[1]) : !0) : e ? dateFns.isValid(e) : !1;
    },
    Ll = function Ll(e, t) {
      return dateFns.set(t !== null && t !== void 0 ? t : F(), {
        hours: +e.hours || 0,
        minutes: +e.minutes || 0,
        seconds: +e.seconds || 0
      });
    },
    hn = function hn(e, t, l, a) {
      if (!e) return !0;
      if (a) {
        var n = l === "max" ? dateFns.isBefore(e, t) : dateFns.isAfter(e, t),
          i = {
            seconds: 0,
            milliseconds: 0
          };
        return n || dateFns.isEqual(dateFns.set(e, i), dateFns.set(t, i));
      }
      return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
    },
    bn = function bn(e, t, l) {
      return e ? Ll(e, t) : F(l !== null && l !== void 0 ? l : t);
    },
    ua = function ua(e, t, l, a, n) {
      if (Array.isArray(a)) {
        var r = bn(e, a[0], t),
          d = bn(e, a[1], t);
        return hn(a[0], r, l, !!t) && hn(a[1], d, l, !!t) && n;
      }
      var i = bn(e, a, t);
      return hn(a, i, l, !!t) && n;
    },
    kn = function kn(e) {
      return dateFns.set(F(), Mt(e));
    },
    Wl = function Wl(e, t) {
      return Array.isArray(e) ? e.map(function (l) {
        return F(l);
      }).filter(function (l) {
        return dateFns.getYear(F(l)) === t;
      }).map(function (l) {
        return dateFns.getMonth(l);
      }) : [];
    },
    Ya = function Ya(e, t, l) {
      return typeof e == "function" ? e({
        month: t,
        year: l
      }) : !!e.months.find(function (a) {
        return a.month === t && a.year === l;
      });
    },
    Un = function Un(e, t) {
      return typeof e == "function" ? e(t) : e.years.includes(t);
    },
    Et = vue.reactive({
      menuFocused: !1,
      shiftKeyInMenu: !1
    }),
    Na = function Na() {
      var e = function e(a) {
          Et.menuFocused = a;
        },
        t = function t(a) {
          Et.shiftKeyInMenu !== a && (Et.shiftKeyInMenu = a);
        };
      return {
        control: vue.computed(function () {
          return {
            shiftKeyInMenu: Et.shiftKeyInMenu,
            menuFocused: Et.menuFocused
          };
        }),
        setMenuFocused: e,
        setShiftKey: t
      };
    },
    Se = vue.reactive({
      monthYear: [],
      calendar: [],
      time: [],
      actionRow: [],
      selectionGrid: [],
      timePicker: {
        0: [],
        1: []
      },
      monthPicker: []
    }),
    wn = vue.ref(null),
    xt = vue.ref(!1),
    Dn = vue.ref(!1),
    Mn = vue.ref(!1),
    $n = vue.ref(!1),
    Le = vue.ref(0),
    Ie = vue.ref(0),
    ht = function ht() {
      var e = vue.computed(function () {
          return xt.value ? [].concat(babelHelpers.toConsumableArray(Se.selectionGrid), [Se.actionRow]).filter(function (N) {
            return N.length;
          }) : Dn.value ? [].concat(babelHelpers.toConsumableArray(Se.timePicker[0]), babelHelpers.toConsumableArray(Se.timePicker[1]), [$n.value ? [] : [wn.value], Se.actionRow]).filter(function (N) {
            return N.length;
          }) : Mn.value ? [].concat(babelHelpers.toConsumableArray(Se.monthPicker), [Se.actionRow]) : [Se.monthYear].concat(babelHelpers.toConsumableArray(Se.calendar), [Se.time, Se.actionRow]).filter(function (N) {
            return N.length;
          });
        }),
        t = function t(N) {
          Le.value = N ? Le.value + 1 : Le.value - 1;
          var E = null;
          e.value[Ie.value] && (E = e.value[Ie.value][Le.value]), E || (Le.value = N ? Le.value - 1 : Le.value + 1);
        },
        l = function l(N) {
          if (Ie.value === 0 && !N || Ie.value === e.value.length && N) return;
          Ie.value = N ? Ie.value + 1 : Ie.value - 1, e.value[Ie.value] ? e.value[Ie.value] && !e.value[Ie.value][Le.value] && Le.value !== 0 && (Le.value = e.value[Ie.value].length - 1) : Ie.value = N ? Ie.value - 1 : Ie.value + 1;
        },
        a = function a(N) {
          var E = null;
          e.value[Ie.value] && (E = e.value[Ie.value][Le.value]), E ? E.focus({
            preventScroll: !xt.value
          }) : Le.value = N ? Le.value - 1 : Le.value + 1;
        },
        n = function n() {
          t(!0), a(!0);
        },
        i = function i() {
          t(!1), a(!1);
        },
        r = function r() {
          l(!1), a(!0);
        },
        d = function d() {
          l(!0), a(!0);
        },
        M = function M(N, E) {
          Se[E] = N;
        },
        k = function k(N, E) {
          Se[E] = N;
        },
        P = function P() {
          Le.value = 0, Ie.value = 0;
        };
      return {
        buildMatrix: M,
        buildMultiLevelMatrix: k,
        setTimePickerBackRef: function setTimePickerBackRef(N) {
          wn.value = N;
        },
        setSelectionGrid: function setSelectionGrid(N) {
          xt.value = N, P(), N || (Se.selectionGrid = []);
        },
        setTimePicker: function setTimePicker(N) {
          var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          Dn.value = N, $n.value = E, P(), N || (Se.timePicker[0] = [], Se.timePicker[1] = []);
        },
        setTimePickerElements: function setTimePickerElements(N) {
          var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          Se.timePicker[E] = N;
        },
        arrowRight: n,
        arrowLeft: i,
        arrowUp: r,
        arrowDown: d,
        clearArrowNav: function clearArrowNav() {
          Se.monthYear = [], Se.calendar = [], Se.time = [], Se.actionRow = [], Se.selectionGrid = [], Se.timePicker[0] = [], Se.timePicker[1] = [], xt.value = !1, Dn.value = !1, $n.value = !1, Mn.value = !1, P(), wn.value = null;
        },
        setMonthPicker: function setMonthPicker(N) {
          Mn.value = N, P();
        },
        refSets: Se
        // exposed for testing
      };
    },
    da = function da(e) {
      return _objectSpread({
        menuAppearTop: "dp-menu-appear-top",
        menuAppearBottom: "dp-menu-appear-bottom",
        open: "dp-slide-down",
        close: "dp-slide-up",
        next: "calendar-next",
        previous: "calendar-prev",
        vNext: "dp-slide-up",
        vPrevious: "dp-slide-down"
      }, e !== null && e !== void 0 ? e : {});
    },
    Ul = function Ul(e) {
      return _objectSpread({
        toggleOverlay: "Toggle overlay",
        menu: "Datepicker menu",
        input: "Datepicker input",
        calendarWrap: "Calendar wrapper",
        calendarDays: "Calendar days",
        openTimePicker: "Open time picker",
        closeTimePicker: "Close time Picker",
        incrementValue: function incrementValue(t) {
          return "Increment ".concat(t);
        },
        decrementValue: function decrementValue(t) {
          return "Decrement ".concat(t);
        },
        openTpOverlay: function openTpOverlay(t) {
          return "Open ".concat(t, " overlay");
        },
        amPmButton: "Switch AM/PM mode",
        openYearsOverlay: "Open years overlay",
        openMonthsOverlay: "Open months overlay",
        nextMonth: "Next month",
        prevMonth: "Previous month",
        nextYear: "Next year",
        prevYear: "Previous year",
        day: function day() {
          return "";
        }
      }, e !== null && e !== void 0 ? e : {});
    },
    ca = function ca(e) {
      return e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0;
    },
    zl = function zl(e) {
      var _a$count;
      var t = babelHelpers["typeof"](e) == "object" && e,
        l = {
          "static": !0,
          solo: !1
        };
      if (!e) return _objectSpread(_objectSpread({}, l), {}, {
        count: ca(!1)
      });
      var a = t ? e : {},
        n = t ? (_a$count = a.count) !== null && _a$count !== void 0 ? _a$count : !0 : e,
        i = ca(n);
      return Object.assign(l, a, {
        count: i
      });
    },
    jl = function jl(e, t, l) {
      return e || (typeof l == "string" ? l : t);
    },
    Kl = function Kl(e) {
      return typeof e == "boolean" ? e ? da({}) : !1 : da(e);
    },
    Gl = function Gl(e) {
      var t = {
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: !0,
        selectOnFocus: !1,
        rangeSeparator: " - "
      };
      return babelHelpers["typeof"](e) == "object" ? _objectSpread(_objectSpread(_objectSpread({}, t), e !== null && e !== void 0 ? e : {}), {}, {
        enabled: !0
      }) : _objectSpread(_objectSpread({}, t), {}, {
        enabled: e
      });
    },
    ql = function ql(e) {
      return _objectSpread({
        months: [],
        years: [],
        times: {
          hours: [],
          minutes: [],
          seconds: []
        }
      }, e !== null && e !== void 0 ? e : {});
    },
    Ql = function Ql(e) {
      return _objectSpread({
        showSelect: !0,
        showCancel: !0,
        showNow: !1,
        showPreview: !0
      }, e !== null && e !== void 0 ? e : {});
    },
    Zl = function Zl(e) {
      var t = {
        input: !1
      };
      return babelHelpers["typeof"](e) == "object" ? _objectSpread(_objectSpread(_objectSpread({}, t), e !== null && e !== void 0 ? e : {}), {}, {
        enabled: !0
      }) : _objectSpread({
        enabled: e
      }, t);
    },
    Xl = function Xl(e) {
      return _objectSpread(_objectSpread({}, {
        allowStopPropagation: !0,
        closeOnScroll: !1,
        modeHeight: 255,
        allowPreventDefault: !1,
        closeOnClearValue: !0,
        closeOnAutoApply: !0,
        noSwipe: !1,
        keepActionRow: !1,
        onClickOutside: void 0,
        tabOutClosesMenu: !0
      }), e !== null && e !== void 0 ? e : {});
    },
    Jl = function Jl(e) {
      var t = {
        dates: Array.isArray(e) ? e.map(function (l) {
          return F(l);
        }) : [],
        years: [],
        months: [],
        quarters: [],
        weeks: [],
        weekdays: [],
        options: {
          highlightDisabled: !1
        }
      };
      return typeof e == "function" ? e : _objectSpread(_objectSpread({}, t), e !== null && e !== void 0 ? e : {});
    },
    xl = function xl(e) {
      var _ref2, _ref3;
      return babelHelpers["typeof"](e) == "object" ? {
        type: (_ref2 = e == null ? void 0 : e.type) !== null && _ref2 !== void 0 ? _ref2 : "local",
        hideOnOffsetDates: (_ref3 = e == null ? void 0 : e.hideOnOffsetDates) !== null && _ref3 !== void 0 ? _ref3 : !1
      } : {
        type: e,
        hideOnOffsetDates: !1
      };
    },
    er = function er(e, t) {
      var l = {
        noDisabledRange: !1,
        showLastInRange: !0,
        minMaxRawRange: !1,
        partialRange: !0,
        disableTimeRangeValidation: !1,
        maxRange: void 0,
        minRange: void 0,
        autoRange: void 0,
        fixedStart: !1,
        fixedEnd: !1
      };
      return babelHelpers["typeof"](e) == "object" ? _objectSpread(_objectSpread({
        enabled: !0
      }, l), e) : {
        enabled: e,
        noDisabledRange: t.noDisabledRange,
        showLastInRange: t.showLastInRange,
        minMaxRawRange: t.minMaxRawRange,
        partialRange: t.partialRange,
        disableTimeRangeValidation: t.disableTimeRangeValidation,
        maxRange: t.maxRange,
        minRange: t.minRange,
        autoRange: t.autoRange,
        fixedStart: t.fixedStart,
        fixedEnd: t.fixedEnd
      };
    },
    Re = function Re(e) {
      var t = function t() {
          var E = e.enableSeconds ? ":ss" : "";
          return e.is24 ? "HH:mm".concat(E) : "hh:mm".concat(E, " aa");
        },
        l = function l() {
          var E;
          return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? "".concat(((E = K.value) == null ? void 0 : E.type) === "iso" ? "RR" : "ww", "-yyyy") : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? "MM/dd/yyyy, ".concat(t()) : "MM/dd/yyyy";
        },
        a = function a(E) {
          return Ca(E, e.enableSeconds);
        },
        n = function n() {
          return N.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null;
        },
        i = vue.computed(function () {
          return zl(e.multiCalendars);
        }),
        r = vue.computed(function () {
          return n();
        }),
        d = vue.computed(function () {
          return Ul(e.ariaLabels);
        }),
        M = vue.computed(function () {
          return ql(e.filters);
        }),
        k = vue.computed(function () {
          return Kl(e.transitions);
        }),
        P = vue.computed(function () {
          return Ql(e.actionRow);
        }),
        b = vue.computed(function () {
          return jl(e.previewFormat, e.format, l());
        }),
        _ = vue.computed(function () {
          return Gl(e.textInput);
        }),
        Y = vue.computed(function () {
          return Zl(e.inline);
        }),
        $ = vue.computed(function () {
          return Xl(e.config);
        }),
        w = vue.computed(function () {
          return Jl(e.highlight);
        }),
        K = vue.computed(function () {
          return xl(e.weekNumbers);
        }),
        N = vue.computed(function () {
          return er(e.range, {
            minMaxRawRange: !1,
            maxRange: e.maxRange,
            minRange: e.minRange,
            noDisabledRange: e.noDisabledRange,
            showLastInRange: e.showLastInRange,
            partialRange: e.partialRange,
            disableTimeRangeValidation: e.disableTimeRangeValidation,
            autoRange: e.autoRange,
            fixedStart: e.fixedStart,
            fixedEnd: e.fixedEnd
          });
        });
      return {
        defaultedTransitions: k,
        defaultedMultiCalendars: i,
        defaultedStartTime: r,
        defaultedAriaLabels: d,
        defaultedFilters: M,
        defaultedActionRow: P,
        defaultedPreviewFormat: b,
        defaultedTextInput: _,
        defaultedInline: Y,
        defaultedConfig: $,
        defaultedHighlight: w,
        defaultedWeekNumbers: K,
        defaultedRange: N,
        getDefaultPattern: l,
        getDefaultStartTime: n
      };
    },
    tr = function tr(e, t, l) {
      var a = vue.ref(),
        _Re = Re(t),
        n = _Re.defaultedTextInput,
        i = _Re.defaultedRange,
        r = _Re.getDefaultPattern,
        d = vue.ref(""),
        M = vue.toRef(t, "format");
      vue.watch(a, function () {
        e("internal-model-change", a.value);
      }, {
        deep: !0
      }), vue.watch(M, function () {
        te();
      });
      var k = function k(u) {
          return Pa(u, t.timezone);
        },
        P = function P(u) {
          return tt(u, t.timezone);
        },
        b = function b(u, B) {
          var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return Oa(u, t.format, t.formatLocale, n.value.rangeSeparator, t.modelAuto, B !== null && B !== void 0 ? B : r(), p);
        },
        _ = function _(u) {
          return u ? t.modelType ? f(u) : {
            hours: dateFns.getHours(u),
            minutes: dateFns.getMinutes(u),
            seconds: t.enableSeconds ? dateFns.getSeconds(u) : 0
          } : null;
        },
        Y = function Y(u) {
          return t.modelType ? f(u) : {
            month: dateFns.getMonth(u),
            year: dateFns.getYear(u)
          };
        },
        $ = function $(u) {
          return Array.isArray(u) ? t.multiDates ? u.map(function (B) {
            return w(B, dateFns.setYear(F(), B));
          }) : Jt(function () {
            return [dateFns.setYear(F(), u[0]), u[1] ? dateFns.setYear(F(), u[1]) : Pt(i.value.partialRange)];
          }, i.value.enabled) : dateFns.setYear(F(), +u);
        },
        w = function w(u, B) {
          return (typeof u == "string" || typeof u == "number") && t.modelType ? m(u) : B;
        },
        K = function K(u) {
          return Array.isArray(u) ? [w(u[0], gt(null, +u[0].hours, +u[0].minutes, u[0].seconds)), w(u[1], gt(null, +u[1].hours, +u[1].minutes, u[1].seconds))] : w(u, gt(null, u.hours, u.minutes, u.seconds));
        },
        N = function N(u) {
          var B = dateFns.set(F(), {
            date: 1
          });
          return Array.isArray(u) ? t.multiDates ? u.map(function (p) {
            return w(p, it(B, +p.month, +p.year));
          }) : Jt(function () {
            return [w(u[0], it(B, +u[0].month, +u[0].year)), w(u[1], u[1] ? it(B, +u[1].month, +u[1].year) : Pt(i.value.partialRange))];
          }, i.value.enabled) : w(u, it(B, +u.month, +u.year));
        },
        E = function E(u) {
          if (Array.isArray(u)) return u.map(function (B) {
            return m(B);
          });
          throw new Error(Wn.dateArr("multi-dates"));
        },
        I = function I(u) {
          if (Array.isArray(u) && i.value.enabled) {
            var B = u[0],
              p = u[1];
            return [F(Array.isArray(B) ? B[0] : null), F(Array.isArray(p) ? p[0] : null)];
          }
          return F(u[0]);
        },
        D = function D(u) {
          return t.modelAuto ? Array.isArray(u) ? [m(u[0]), m(u[1])] : t.autoApply ? [m(u)] : [m(u), null] : Array.isArray(u) ? Jt(function () {
            return u[1] ? [m(u[0]), u[1] ? m(u[1]) : Pt(i.value.partialRange)] : [m(u[0])];
          }, i.value.enabled) : m(u);
        },
        R = function R() {
          Array.isArray(a.value) && i.value.enabled && a.value.length === 1 && a.value.push(Pt(i.value.partialRange));
        },
        V = function V() {
          var u = a.value;
          return [f(u[0]), u[1] ? f(u[1]) : Pt(i.value.partialRange)];
        },
        ne = function ne() {
          return a.value[1] ? V() : f(Oe(a.value[0]));
        },
        O = function O() {
          return (a.value || []).map(function (u) {
            return f(u);
          });
        },
        re = function re() {
          return R(), t.modelAuto ? ne() : t.multiDates ? O() : Array.isArray(a.value) ? Jt(function () {
            return V();
          }, i.value.enabled) : f(Oe(a.value));
        },
        se = function se(u) {
          return !u || Array.isArray(u) && !u.length ? null : t.timePicker ? K(Oe(u)) : t.monthPicker ? N(Oe(u)) : t.yearPicker ? $(Oe(u)) : t.multiDates ? E(Oe(u)) : t.weekPicker ? I(Oe(u)) : D(Oe(u));
        },
        H = function H(u) {
          var B = se(u);
          Rn(Oe(B)) ? (a.value = Oe(B), te()) : (a.value = null, d.value = "");
        },
        g = function g() {
          var u = function u(B) {
            return dateFns.format(B, n.value.format);
          };
          return "".concat(u(a.value[0]), " ").concat(n.value.rangeSeparator, " ").concat(a.value[1] ? u(a.value[1]) : "");
        },
        T = function T() {
          return l.value && a.value ? Array.isArray(a.value) ? g() : dateFns.format(a.value, n.value.format) : b(a.value);
        },
        G = function G() {
          return a.value ? t.multiDates ? a.value.map(function (u) {
            return b(u);
          }).join("; ") : n.value.enabled && typeof n.value.format == "string" ? T() : b(a.value) : "";
        },
        te = function te() {
          !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? d.value = G() : d.value = t.format(a.value);
        },
        m = function m(u) {
          if (t.utc) {
            var B = new Date(u);
            return t.utc === "preserve" ? new Date(B.getTime() + B.getTimezoneOffset() * 6e4) : B;
          }
          return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? P(new Date(u)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? dateFns.parse(u, r(), /* @__PURE__ */new Date()) : P(dateFns.parse(u, t.modelType, /* @__PURE__ */new Date())) : P(new Date(u));
        },
        f = function f(u) {
          return u ? t.utc ? Il(u, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +k(u) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? b(k(u)) : b(k(u), t.modelType, !0) : k(u) : "";
        },
        z = function z(u) {
          var B = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (e("update:model-value", u), t.emitTimezone && B) {
            var p = Array.isArray(u) ? u.map(function (J) {
              return tt(Oe(J));
            }, t.emitTimezone) : tt(Oe(u), t.emitTimezone);
            e("update:model-timezone-value", p);
          }
        },
        ae = function ae(u) {
          return Array.isArray(a.value) ? t.multiDates ? a.value.map(function (B) {
            return u(B);
          }) : [u(a.value[0]), a.value[1] ? u(a.value[1]) : Pt(i.value.partialRange)] : u(Oe(a.value));
        },
        s = function s() {
          if (Array.isArray(a.value)) {
            var u = st(a.value[0], t.timezone, t.weekStart),
              B = a.value[1] ? st(a.value[1], t.timezone, t.weekStart) : [];
            return [u.map(function (p) {
              return F(p);
            }), B.map(function (p) {
              return F(p);
            })];
          }
          return st(a.value, t.timezone, t.weekStart).map(function (u) {
            return F(u);
          });
        },
        h = function h(u) {
          return z(Oe(ae(u)));
        };
      return {
        inputValue: d,
        internalModelValue: a,
        checkBeforeEmit: function checkBeforeEmit() {
          return a.value ? i.value.enabled ? i.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1;
        },
        parseExternalModelValue: H,
        formatInputValue: te,
        emitModelValue: function emitModelValue() {
          return te(), t.monthPicker ? h(Y) : t.timePicker ? h(_) : t.yearPicker ? h(dateFns.getYear) : t.weekPicker ? e("update:model-value", s()) : z(re(), !0);
        }
      };
    },
    nr = function nr(e, t) {
      var _Re2 = Re(e),
        l = _Re2.defaultedFilters,
        _At = At(e),
        a = _At.validateMonthYearInRange,
        n = function n(k, P) {
          var b = k;
          return l.value.months.includes(dateFns.getMonth(b)) ? (b = P ? dateFns.addMonths(k, 1) : dateFns.subMonths(k, 1), n(b, P)) : b;
        },
        i = function i(k, P) {
          var b = k;
          return l.value.years.includes(dateFns.getYear(b)) ? (b = P ? dateFns.addYears(k, 1) : dateFns.subYears(k, 1), i(b, P)) : b;
        },
        r = function r(k) {
          var P = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var b = dateFns.set( /* @__PURE__ */new Date(), {
            month: e.month,
            year: e.year
          });
          var _ = k ? dateFns.addMonths(b, 1) : dateFns.subMonths(b, 1);
          e.disableYearSelect && (_ = dateFns.setYear(_, e.year));
          var Y = dateFns.getMonth(_),
            $ = dateFns.getYear(_);
          l.value.months.includes(Y) && (_ = n(_, k), Y = dateFns.getMonth(_), $ = dateFns.getYear(_)), l.value.years.includes($) && (_ = i(_, k), $ = dateFns.getYear(_)), a(Y, $, k, e.preventMinMaxNavigation) && d(Y, $, P);
        },
        d = function d(k, P, b) {
          t("update-month-year", {
            month: k,
            year: P,
            fromNav: b
          });
        },
        M = vue.computed(function () {
          return function (k) {
            return _a(dateFns.set( /* @__PURE__ */new Date(), {
              month: e.month,
              year: e.year
            }), e.maxDate, e.minDate, e.preventMinMaxNavigation, k);
          };
        });
      return {
        handleMonthYearChange: r,
        isDisabled: M,
        updateMonthYear: d
      };
    };
  var Rt = /* @__PURE__ */function (e) {
      return e.center = "center", e.left = "left", e.right = "right", e;
    }(Rt || {}),
    Xe = /* @__PURE__ */function (e) {
      return e.month = "month", e.year = "year", e;
    }(Xe || {}),
    kt = /* @__PURE__ */function (e) {
      return e.top = "top", e.bottom = "bottom", e;
    }(kt || {}),
    $t = /* @__PURE__ */function (e) {
      return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
    }($t || {}),
    lt = /* @__PURE__ */function (e) {
      return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
    }(lt || {});
  var ar = function ar(_ref4) {
      var e = _ref4.menuRef,
        t = _ref4.menuRefInner,
        l = _ref4.inputRef,
        a = _ref4.pickerWrapperRef,
        n = _ref4.inline,
        i = _ref4.emit,
        r = _ref4.props,
        d = _ref4.slots;
      var M = vue.ref({}),
        k = vue.ref(!1),
        P = vue.ref({
          top: "0",
          left: "0"
        }),
        b = vue.ref(!1),
        _ = vue.toRef(r, "teleportCenter");
      vue.watch(_, function () {
        P.value = JSON.parse(JSON.stringify({})), D();
      });
      var Y = function Y(m) {
          if (r.teleport) {
            var f = m.getBoundingClientRect();
            return {
              left: f.left + window.scrollX,
              top: f.top + window.scrollY
            };
          }
          return {
            top: 0,
            left: 0
          };
        },
        $ = function $(m, f) {
          P.value.left = "".concat(m + f - M.value.width, "px");
        },
        w = function w(m) {
          P.value.left = "".concat(m, "px");
        },
        K = function K(m, f) {
          r.position === Rt.left && w(m), r.position === Rt.right && $(m, f), r.position === Rt.center && (P.value.left = "".concat(m + f / 2 - M.value.width / 2, "px"));
        },
        N = function N(m) {
          var _m$getBoundingClientR = m.getBoundingClientRect(),
            f = _m$getBoundingClientR.width,
            z = _m$getBoundingClientR.height,
            _ref5 = r.altPosition ? r.altPosition(m) : Y(m),
            ae = _ref5.top,
            s = _ref5.left;
          return {
            top: +ae,
            left: +s,
            width: f,
            height: z
          };
        },
        E = function E() {
          P.value.left = "50%", P.value.top = "50%", P.value.transform = "translate(-50%, -50%)", P.value.position = "fixed", delete P.value.opacity;
        },
        I = function I() {
          var m = Ne(l),
            _r$altPosition = r.altPosition(m),
            f = _r$altPosition.top,
            z = _r$altPosition.left,
            ae = _r$altPosition.transform;
          P.value = {
            top: "".concat(f, "px"),
            left: "".concat(z, "px"),
            transform: ae !== null && ae !== void 0 ? ae : ""
          };
        },
        D = function D() {
          var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var f;
          if (!n.value.enabled) {
            if (_.value) return E();
            if (r.altPosition !== null) return I();
            if (m) {
              var z = r.teleport ? (f = t.value) == null ? void 0 : f.$el : e.value;
              z && (M.value = z.getBoundingClientRect()), i("recalculate-position");
            }
            return H();
          }
        },
        R = function R(_ref6) {
          var m = _ref6.inputEl,
            f = _ref6.left,
            z = _ref6.width;
          window.screen.width > 768 && !k.value && K(f, z), O(m);
        },
        V = function V(m) {
          var _N = N(m),
            f = _N.top,
            z = _N.left,
            ae = _N.height,
            s = _N.width;
          P.value.top = "".concat(ae + f + +r.offset, "px"), b.value = !1, k.value || (P.value.left = "".concat(z + s / 2 - M.value.width / 2, "px")), R({
            inputEl: m,
            left: z,
            width: s
          });
        },
        ne = function ne(m) {
          var _N2 = N(m),
            f = _N2.top,
            z = _N2.left,
            ae = _N2.width;
          P.value.top = "".concat(f - +r.offset - M.value.height, "px"), b.value = !0, R({
            inputEl: m,
            left: z,
            width: ae
          });
        },
        O = function O(m) {
          if (r.autoPosition) {
            var _N3 = N(m),
              f = _N3.left,
              z = _N3.width,
              _M$value = M.value,
              ae = _M$value.left,
              s = _M$value.right;
            if (!k.value) {
              if (Math.abs(ae) !== Math.abs(s)) {
                if (ae <= 0) return k.value = !0, w(f);
                if (s >= document.documentElement.clientWidth) return k.value = !0, $(f, z);
              }
              return K(f, z);
            }
          }
        },
        re = function re() {
          var m = Ne(l);
          if (m) {
            var f = M.value.height,
              _m$getBoundingClientR2 = m.getBoundingClientRect(),
              z = _m$getBoundingClientR2.top,
              ae = _m$getBoundingClientR2.height,
              h = window.innerHeight - z - ae,
              o = z;
            return f <= h ? kt.bottom : f > h && f <= o ? kt.top : h >= o ? kt.bottom : kt.top;
          }
          return kt.bottom;
        },
        se = function se(m) {
          return re() === kt.bottom ? V(m) : ne(m);
        },
        H = function H() {
          var m = Ne(l);
          if (m) return r.autoPosition ? se(m) : V(m);
        },
        g = function g(m) {
          if (m) {
            var f = m.scrollHeight > m.clientHeight,
              ae = window.getComputedStyle(m).overflowY.indexOf("hidden") !== -1;
            return f && !ae;
          }
          return !0;
        },
        T = function T(m) {
          return !m || m === document.body || m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : g(m) ? m : T(m.parentNode);
        },
        G = function G(m) {
          if (m) switch (r.position) {
            case Rt.left:
              return {
                left: 0,
                transform: "translateX(0)"
              };
            case Rt.right:
              return {
                left: "".concat(m.width, "px"),
                transform: "translateX(-100%)"
              };
            default:
              return {
                left: "".concat(m.width / 2, "px"),
                transform: "translateX(-50%)"
              };
          }
          return {};
        };
      return {
        openOnTop: b,
        menuStyle: P,
        xCorrect: k,
        setMenuPosition: D,
        getScrollableParent: T,
        shadowRender: function shadowRender(m, f) {
          var S, u, B;
          var z = document.createElement("div"),
            ae = (S = Ne(l)) == null ? void 0 : S.getBoundingClientRect();
          z.setAttribute("id", "dp--temp-container");
          var s = (u = a.value) != null && u.clientWidth ? a.value : document.body;
          s.append(z);
          var h = G(ae),
            o = vue.h(m, _objectSpread(_objectSpread({}, f), {}, {
              shadow: !0,
              style: _objectSpread({
                opacity: 0,
                position: "absolute"
              }, h)
            }), Object.fromEntries(Object.keys(d).filter(function (p) {
              return ["right-sidebar", "left-sidebar"].includes(p);
            }).map(function (p) {
              return [p, d[p]];
            })));
          vue.render(o, z), M.value = (B = o.el) == null ? void 0 : B.getBoundingClientRect(), vue.render(null, z), s.removeChild(z);
        }
      };
    },
    ft = [{
      name: "clock-icon",
      use: ["time", "calendar", "shared"]
    }, {
      name: "arrow-left",
      use: ["month-year", "calendar", "shared", "year-mode"]
    }, {
      name: "arrow-right",
      use: ["month-year", "calendar", "shared", "year-mode"]
    }, {
      name: "arrow-up",
      use: ["time", "calendar", "month-year", "shared"]
    }, {
      name: "arrow-down",
      use: ["time", "calendar", "month-year", "shared"]
    }, {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar", "shared", "year-mode"]
    }, {
      name: "day",
      use: ["calendar", "shared"]
    }, {
      name: "month-overlay-value",
      use: ["calendar", "month-year", "shared"]
    }, {
      name: "year-overlay-value",
      use: ["calendar", "month-year", "shared", "year-mode"]
    }, {
      name: "year-overlay",
      use: ["month-year", "shared"]
    }, {
      name: "month-overlay",
      use: ["month-year", "shared"]
    }, {
      name: "month-overlay-header",
      use: ["month-year", "shared"]
    }, {
      name: "year-overlay-header",
      use: ["month-year", "shared"]
    }, {
      name: "hours-overlay-value",
      use: ["calendar", "time", "shared"]
    }, {
      name: "minutes-overlay-value",
      use: ["calendar", "time", "shared"]
    }, {
      name: "seconds-overlay-value",
      use: ["calendar", "time", "shared"]
    }, {
      name: "hours",
      use: ["calendar", "time", "shared"]
    }, {
      name: "minutes",
      use: ["calendar", "time", "shared"]
    }, {
      name: "month",
      use: ["calendar", "month-year", "shared"]
    }, {
      name: "year",
      use: ["calendar", "month-year", "shared", "year-mode"]
    }, {
      name: "action-buttons",
      use: ["action"]
    }, {
      name: "action-preview",
      use: ["action"]
    }, {
      name: "calendar-header",
      use: ["calendar", "shared"]
    }, {
      name: "marker-tooltip",
      use: ["calendar", "shared"]
    }, {
      name: "action-extra",
      use: ["menu"]
    }, {
      name: "time-picker-overlay",
      use: ["calendar", "time", "shared"]
    }, {
      name: "am-pm-button",
      use: ["calendar", "time", "shared"]
    }, {
      name: "left-sidebar",
      use: ["menu"]
    }, {
      name: "right-sidebar",
      use: ["menu"]
    }, {
      name: "month-year",
      use: ["month-year", "shared"]
    }, {
      name: "time-picker",
      use: ["menu", "shared"]
    }, {
      name: "action-row",
      use: ["action"]
    }, {
      name: "marker",
      use: ["calendar", "shared"]
    }, {
      name: "quarter",
      use: ["shared"]
    }],
    lr = [{
      name: "trigger"
    }, {
      name: "input-icon"
    }, {
      name: "clear-icon"
    }, {
      name: "dp-input"
    }],
    rr = {
      all: function all() {
        return ft;
      },
      monthYear: function monthYear() {
        return ft.filter(function (e) {
          return e.use.includes("month-year");
        });
      },
      input: function input() {
        return lr;
      },
      timePicker: function timePicker() {
        return ft.filter(function (e) {
          return e.use.includes("time");
        });
      },
      action: function action() {
        return ft.filter(function (e) {
          return e.use.includes("action");
        });
      },
      calendar: function calendar() {
        return ft.filter(function (e) {
          return e.use.includes("calendar");
        });
      },
      menu: function menu() {
        return ft.filter(function (e) {
          return e.use.includes("menu");
        });
      },
      shared: function shared() {
        return ft.filter(function (e) {
          return e.use.includes("shared");
        });
      },
      yearMode: function yearMode() {
        return ft.filter(function (e) {
          return e.use.includes("year-mode");
        });
      }
    },
    Ge = function Ge(e, t, l) {
      var a = [];
      return rr[t]().forEach(function (n) {
        e[n.name] && a.push(n.name);
      }), l != null && l.length && l.forEach(function (n) {
        n.slot && a.push(n.slot);
      }), a;
    },
    jt = function jt(e) {
      var t = vue.computed(function () {
          return function (a) {
            return e.value ? a ? e.value.open : e.value.close : "";
          };
        }),
        l = vue.computed(function () {
          return function (a) {
            return e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "";
          };
        });
      return {
        transitionName: t,
        showTransition: !!e.value,
        menuTransition: l
      };
    },
    Kt = function Kt(e, t) {
      var l = F(tt( /* @__PURE__ */new Date(), e.timezone)),
        _Re3 = Re(e),
        a = _Re3.defaultedRange,
        n = vue.ref([{
          month: dateFns.getMonth(l),
          year: dateFns.getYear(l)
        }]),
        i = vue.reactive({
          hours: a.value.enabled ? [dateFns.getHours(l), dateFns.getHours(l)] : dateFns.getHours(l),
          minutes: a.value.enabled ? [dateFns.getMinutes(l), dateFns.getMinutes(l)] : dateFns.getMinutes(l),
          seconds: a.value.enabled ? [0, 0] : 0
        }),
        r = vue.computed({
          get: function get() {
            return e.internalModelValue;
          },
          set: function set(k) {
            !e.readonly && !e.disabled && t("update:internal-model-value", k);
          }
        }),
        d = vue.computed(function () {
          return function (k) {
            return n.value[k] ? n.value[k].month : 0;
          };
        }),
        M = vue.computed(function () {
          return function (k) {
            return n.value[k] ? n.value[k].year : 0;
          };
        });
      return {
        calendars: n,
        time: i,
        modelValue: r,
        month: d,
        year: M
      };
    },
    or = function or(e, t) {
      var _Re4 = Re(t),
        l = _Re4.defaultedMultiCalendars,
        a = _Re4.defaultedHighlight,
        n = _Re4.defaultedRange,
        _At2 = At(t),
        i = _At2.isDisabled,
        r = _At2.matchDate,
        d = vue.ref(null),
        M = vue.ref(F(tt( /* @__PURE__ */new Date(), t.timezone))),
        k = function k(o) {
          !o.current && t.hideOffsetDates || (d.value = o.value);
        },
        P = function P() {
          d.value = null;
        },
        b = function b(o) {
          return Array.isArray(e.value) && n.value.enabled && e.value[0] && d.value ? o ? _e(d.value, e.value[0]) : Ce(d.value, e.value[0]) : !0;
        },
        _ = function _(o, S) {
          var u = function u() {
              return e.value ? S ? e.value[0] || null : e.value[1] : null;
            },
            B = e.value && Array.isArray(e.value) ? u() : null;
          return ye(F(o.value), B);
        },
        Y = function Y(o) {
          var _d$value;
          var S = Array.isArray(e.value) ? e.value[0] : null;
          return o ? !Ce((_d$value = d.value) !== null && _d$value !== void 0 ? _d$value : null, S) : !0;
        },
        $ = function $(o) {
          var S = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          return (n.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !o.current ? !1 : ye(F(o.value), e.value[S ? 0 : 1]) : n.value.enabled ? _(o, S) && Y(S) || ye(o.value, Array.isArray(e.value) ? e.value[0] : null) && b(S) : !1;
        },
        w = function w(o, S, u) {
          return Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? o ? !1 : u ? _e(e.value[0], S.value) : Ce(e.value[0], S.value) : !1;
        },
        K = function K(o) {
          return !e.value || t.hideOffsetDates && !o.current ? !1 : n.value.enabled ? t.modelAuto && Array.isArray(e.value) ? ye(o.value, e.value[0] ? e.value[0] : M.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some(function (S) {
            return ye(S, o.value);
          }) : ye(o.value, e.value ? e.value : M.value);
        },
        N = function N(o) {
          if (n.value.autoRange || t.weekPicker) {
            if (d.value) {
              if (t.hideOffsetDates && !o.current) return !1;
              var S = dateFns.addDays(d.value, +n.value.autoRange),
                u = st(F(d.value), t.timezone, t.weekStart);
              return t.weekPicker ? ye(u[1], F(o.value)) : ye(S, F(o.value));
            }
            return !1;
          }
          return !1;
        },
        E = function E(o) {
          if (n.value.autoRange || t.weekPicker) {
            if (d.value) {
              var S = dateFns.addDays(d.value, +n.value.autoRange);
              if (t.hideOffsetDates && !o.current) return !1;
              var u = st(F(d.value), t.timezone, t.weekStart);
              return t.weekPicker ? _e(o.value, u[0]) && Ce(o.value, u[1]) : _e(o.value, d.value) && Ce(o.value, S);
            }
            return !1;
          }
          return !1;
        },
        I = function I(o) {
          if (n.value.autoRange || t.weekPicker) {
            if (d.value) {
              if (t.hideOffsetDates && !o.current) return !1;
              var S = st(F(d.value), t.timezone, t.weekStart);
              return t.weekPicker ? ye(S[0], o.value) : ye(d.value, o.value);
            }
            return !1;
          }
          return !1;
        },
        D = function D(o) {
          return rn(e.value, d.value, o.value);
        },
        R = function R() {
          return t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1;
        },
        V = function V() {
          return t.modelAuto ? $a(t.internalModelValue) : !0;
        },
        ne = function ne(o) {
          if (Array.isArray(e.value) && e.value.length || t.weekPicker) return !1;
          var S = n.value.enabled ? !$(o) && !$(o, !1) : !0;
          return !i(o.value) && !K(o) && !(!o.current && t.hideOffsetDates) && S;
        },
        O = function O(o) {
          return n.value.enabled ? t.modelAuto ? R() && K(o) : !1 : K(o);
        },
        re = function re(o) {
          var S;
          return a.value ? typeof a.value == "function" ? a.value(o.value) : r(o.value, (S = t.arrMapValues) != null && S.highlightedDates ? t.arrMapValues.highlightedDates : a.value.dates) : !1;
        },
        se = function se(o) {
          var S = i(o.value);
          return S && (typeof a.value == "function" ? !a.value(o.value, S) : !a.value.options.highlightDisabled);
        },
        H = function H(o) {
          var S;
          return typeof a.value == "function" ? a.value(o.value) : (S = a.value.weekdays) == null ? void 0 : S.includes(o.value.getDay());
        },
        g = function g(o) {
          return (n.value.enabled || t.weekPicker) && (!(l.value.count > 0) || o.current) && V() && !(!o.current && t.hideOffsetDates) && !K(o) ? D(o) : !1;
        },
        T = function T(o) {
          var _f = f(o),
            S = _f.isRangeStart,
            u = _f.isRangeEnd,
            B = n.value.enabled ? S || u : !1;
          return {
            dp__cell_offset: !o.current,
            dp__pointer: !t.disabled && !(!o.current && t.hideOffsetDates) && !i(o.value),
            dp__cell_disabled: i(o.value),
            dp__cell_highlight: !se(o) && (re(o) || H(o)) && !O(o) && !B && !I(o) && !(g(o) && t.weekPicker) && !u,
            dp__cell_highlight_active: !se(o) && (re(o) || H(o)) && O(o),
            dp__today: !t.noToday && ye(o.value, M.value) && o.current,
            "dp--past": Ce(o.value, M.value),
            "dp--future": _e(o.value, M.value)
          };
        },
        G = function G(o) {
          return {
            dp__active_date: O(o),
            dp__date_hover: ne(o)
          };
        },
        te = function te(o) {
          if (e.value && !Array.isArray(e.value)) {
            var S = st(e.value, t.timezone, t.weekStart);
            return _objectSpread(_objectSpread({}, ae(o)), {}, {
              dp__range_start: ye(S[0], o.value),
              dp__range_end: ye(S[1], o.value),
              dp__range_between_week: _e(o.value, S[0]) && Ce(o.value, S[1])
            });
          }
          return _objectSpread({}, ae(o));
        },
        m = function m(o) {
          if (e.value && Array.isArray(e.value)) {
            var S = st(e.value[0], t.timezone, t.weekStart),
              u = e.value[1] ? st(e.value[1], t.timezone, t.weekStart) : [];
            return _objectSpread(_objectSpread({}, ae(o)), {}, {
              dp__range_start: ye(S[0], o.value) || ye(u[0], o.value),
              dp__range_end: ye(S[1], o.value) || ye(u[1], o.value),
              dp__range_between_week: _e(o.value, S[0]) && Ce(o.value, S[1]) || _e(o.value, u[0]) && Ce(o.value, u[1]),
              dp__range_between: _e(o.value, S[1]) && Ce(o.value, u[0])
            });
          }
          return _objectSpread({}, ae(o));
        },
        f = function f(o) {
          var S = l.value.count > 0 ? o.current && $(o) && V() : $(o) && V(),
            u = l.value.count > 0 ? o.current && $(o, !1) && V() : $(o, !1) && V();
          return {
            isRangeStart: S,
            isRangeEnd: u
          };
        },
        z = function z(o) {
          var _f2 = f(o),
            S = _f2.isRangeStart,
            u = _f2.isRangeEnd;
          return {
            dp__range_start: S,
            dp__range_end: u,
            dp__range_between: g(o),
            dp__date_hover_start: w(ne(o), o, !0),
            dp__date_hover_end: w(ne(o), o, !1)
          };
        },
        ae = function ae(o) {
          return _objectSpread(_objectSpread({}, z(o)), {}, {
            dp__cell_auto_range: E(o),
            dp__cell_auto_range_start: I(o),
            dp__cell_auto_range_end: N(o)
          });
        },
        s = function s(o) {
          return n.value.enabled ? n.value.autoRange ? ae(o) : t.modelAuto ? _objectSpread(_objectSpread({}, G(o)), z(o)) : t.weekPicker ? m(o) : z(o) : t.weekPicker ? te(o) : G(o);
        };
      return {
        setHoverDate: k,
        clearHoverDate: P,
        getDayClassData: function getDayClassData(o) {
          var _objectSpread2;
          return t.hideOffsetDates && !o.current ? {} : _objectSpread(_objectSpread(_objectSpread({}, T(o)), s(o)), {}, (_objectSpread2 = {}, babelHelpers.defineProperty(_objectSpread2, t.dayClass ? t.dayClass(o.value) : "", !0), babelHelpers.defineProperty(_objectSpread2, t.calendarCellClassName, !!t.calendarCellClassName), _objectSpread2));
        }
      };
    },
    At = function At(e) {
      var _Re5 = Re(e),
        t = _Re5.defaultedFilters,
        l = _Re5.defaultedHighlight,
        a = _Re5.defaultedRange,
        n = function n() {
          if (e.timezone) return e.timezone;
          if (e.utc) return "UTC";
        },
        i = function i(g) {
          var T = Ve(r(F(g))).toISOString(),
            _T$split = T.split("T"),
            _T$split2 = babelHelpers.slicedToArray(_T$split, 1),
            G = _T$split2[0];
          return G;
        },
        r = function r(g) {
          return e.utc === "preserve" ? Pa(g, n()) : tt(g, n());
        },
        d = function d(g) {
          var o;
          var T = e.maxDate ? _e(g, r(F(e.maxDate))) : !1,
            G = e.minDate ? Ce(g, r(F(e.minDate))) : !1,
            te = b(r(g), (o = e.arrMapValues) != null && o.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates),
            f = t.value.months.map(function (S) {
              return +S;
            }).includes(dateFns.getMonth(g)),
            z = e.disabledWeekDays.length ? e.disabledWeekDays.some(function (S) {
              return +S === dateFns.getDay(g);
            }) : !1,
            ae = Y(g),
            s = dateFns.getYear(g),
            h = s < +e.yearRange[0] || s > +e.yearRange[1];
          return !(T || G || te || f || h || z || ae);
        },
        M = function M(g, T) {
          return Ce.apply(void 0, babelHelpers.toConsumableArray(vt(e.minDate, g, T))) || ye.apply(void 0, babelHelpers.toConsumableArray(vt(e.minDate, g, T)));
        },
        k = function k(g, T) {
          return _e.apply(void 0, babelHelpers.toConsumableArray(vt(e.maxDate, g, T))) || ye.apply(void 0, babelHelpers.toConsumableArray(vt(e.maxDate, g, T)));
        },
        P = function P(g, T, G) {
          var te = !1;
          return e.maxDate && G && k(g, T) && (te = !0), e.minDate && !G && M(g, T) && (te = !0), te;
        },
        b = function b(g, T) {
          return g ? T instanceof Map ? !!T.get(i(g)) : Array.isArray(T) ? T.some(function (G) {
            return ye(r(F(G)), g);
          }) : T ? T(F(JSON.parse(JSON.stringify(g)))) : !1 : !0;
        },
        _ = function _(g, T, G, te) {
          var m = !1;
          return te ? e.minDate && e.maxDate ? m = P(g, T, G) : (e.minDate && M(g, T) || e.maxDate && k(g, T)) && (m = !0) : m = !0, m;
        },
        Y = function Y(g) {
          var T, G, te, m, f;
          return Array.isArray(e.allowedDates) && !((T = e.allowedDates) != null && T.length) ? !0 : (G = e.arrMapValues) != null && G.allowedDates ? !b(g, (te = e.arrMapValues) == null ? void 0 : te.allowedDates) : (m = e.allowedDates) != null && m.length ? !((f = e.allowedDates) != null && f.some(function (z) {
            return ye(Ve(z), r(Ve(g)));
          })) : !1;
        },
        $ = function $(g) {
          return !d(g);
        },
        w = function w(g) {
          return a.value.noDisabledRange ? !dateFns.eachDayOfInterval({
            start: g[0],
            end: g[1]
          }).some(function (G) {
            return $(G);
          }) : !0;
        },
        K = function K(g, T) {
          var G = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          if (Array.isArray(T) && T[G] && (a.value.maxRange || a.value.minRange)) {
            var te = dateFns.differenceInCalendarDays(g, T[G]),
              m = Ra(T[G], g),
              f = m.length === 1 ? 0 : m.filter(function (ae) {
                return $(ae);
              }).length,
              z = Math.abs(te) - (a.value.minMaxRawRange ? 0 : f);
            if (a.value.minRange && a.value.maxRange) return z >= +a.value.minRange && z <= +a.value.maxRange;
            if (a.value.minRange) return z >= +a.value.minRange;
            if (a.value.maxRange) return z <= +a.value.maxRange;
          }
          return !0;
        },
        N = function N(g) {
          return new Map(g.map(function (T) {
            return [i(T), !0];
          }));
        },
        E = function E(g) {
          return Array.isArray(g) && g.length > 0;
        },
        I = function I() {
          var g = {
            disabledDates: null,
            allowedDates: null,
            highlightedDates: null
          };
          return E(e.allowedDates) && (g.allowedDates = N(e.allowedDates)), typeof l.value != "function" && E(l.value.dates) && (g.highlightedDates = N(l.value.dates)), E(e.disabledDates) && (g.disabledDates = N(e.disabledDates)), g;
        },
        D = function D() {
          return !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation;
        },
        R = function R(g) {
          return Array.isArray(g) ? [g[0] ? kn(g[0]) : null, g[1] ? kn(g[1]) : null] : kn(g);
        },
        V = function V(g, T, G) {
          return g.find(function (te) {
            return +te.hours === dateFns.getHours(T) && te.minutes === "*" ? !0 : +te.minutes === dateFns.getMinutes(T) && +te.hours === dateFns.getHours(T);
          }) && G;
        },
        ne = function ne(g, T, G) {
          var _g = babelHelpers.slicedToArray(g, 2),
            te = _g[0],
            m = _g[1],
            _T = babelHelpers.slicedToArray(T, 2),
            f = _T[0],
            z = _T[1];
          return !V(te, f, G) && !V(m, z, G) && G;
        },
        O = function O(g, T) {
          var G = Array.isArray(T) ? T : [T];
          return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? ne(e.disabledTimes, G, g) : !G.some(function (te) {
            return V(e.disabledTimes, te, g);
          }) : g;
        },
        re = function re(g, T) {
          var G = Array.isArray(T) ? [Mt(T[0]), T[1] ? Mt(T[1]) : void 0] : Mt(T),
            te = !e.disabledTimes(G);
          return g && te;
        },
        se = function se(g, T) {
          return e.disabledTimes ? Array.isArray(e.disabledTimes) ? O(T, g) : re(T, g) : T;
        };
      return {
        isDisabled: $,
        validateDate: d,
        validateMonthYearInRange: _,
        isDateRangeAllowed: w,
        checkMinMaxRange: K,
        matchDate: b,
        mapDatesArrToMap: I,
        isValidTime: function isValidTime(g) {
          var T = !0;
          if (!g || D()) return !0;
          var G = !e.minDate && !e.maxDate ? R(g) : g;
          return (e.maxTime || e.maxDate) && (T = ua(e.maxTime, e.maxDate, "max", Oe(G), T)), (e.minTime || e.minDate) && (T = ua(e.minTime, e.minDate, "min", Oe(G), T)), se(g, T);
        }
      };
    },
    on = function on() {
      var e = vue.computed(function () {
          return function (a, n) {
            return a == null ? void 0 : a.includes(n);
          };
        }),
        t = vue.computed(function () {
          return function (a, n) {
            return a.count ? a.solo ? !0 : n === 0 : !0;
          };
        }),
        l = vue.computed(function () {
          return function (a, n) {
            return a.count ? a.solo ? !0 : n === a.count - 1 : !0;
          };
        });
      return {
        hideNavigationButtons: e,
        showLeftIcon: t,
        showRightIcon: l
      };
    },
    sr = function sr(e, t, l) {
      var _zt;
      var a = vue.ref(0),
        n = vue.reactive((_zt = {}, babelHelpers.defineProperty(_zt, $t.timePicker, !e.enableTimePicker || e.timePicker || e.monthPicker), babelHelpers.defineProperty(_zt, $t.calendar, !1), babelHelpers.defineProperty(_zt, $t.header, !1), _zt)),
        i = vue.computed(function () {
          return e.monthPicker;
        }),
        r = function r(b) {
          var _;
          if ((_ = e.flow) != null && _.length) {
            if (!b && i.value) return P();
            n[b] = !0, Object.keys(n).filter(function (Y) {
              return !n[Y];
            }).length || P();
          }
        },
        d = function d() {
          var b;
          (b = e.flow) != null && b.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), P());
        },
        M = function M() {
          a.value = -1;
        },
        k = function k(b, _) {
          var _w;
          var $, w;
          for (var _len = arguments.length, Y = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            Y[_key - 2] = arguments[_key];
          }
          e.flow[a.value] === b && l.value && ((w = ($ = l.value)[_]) == null || (_w = w).call.apply(_w, [$].concat(Y)));
        },
        P = function P() {
          k(lt.month, "toggleMonthPicker", !0), k(lt.year, "toggleYearPicker", !0), k(lt.calendar, "toggleTimePicker", !1, !0), k(lt.time, "toggleTimePicker", !0, !0);
          var b = e.flow[a.value];
          (b === lt.hours || b === lt.minutes || b === lt.seconds) && k(b, "toggleTimePicker", !0, !0, b);
        };
      return {
        childMount: r,
        updateFlowStep: d,
        resetFlow: M,
        flowStep: a
      };
    },
    sn = {
      multiCalendars: {
        type: [Boolean, Number, String, Object],
        "default": void 0
      },
      modelValue: {
        type: [String, Date, Array, Object, Number],
        "default": null
      },
      modelType: {
        type: String,
        "default": null
      },
      position: {
        type: String,
        "default": "center"
      },
      dark: {
        type: Boolean,
        "default": !1
      },
      format: {
        type: [String, Function],
        "default": function _default() {
          return null;
        }
      },
      autoPosition: {
        type: Boolean,
        "default": !0
      },
      altPosition: {
        type: Function,
        "default": null
      },
      transitions: {
        type: [Boolean, Object],
        "default": !0
      },
      formatLocale: {
        type: Object,
        "default": null
      },
      utc: {
        type: [Boolean, String],
        "default": !1
      },
      ariaLabels: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      offset: {
        type: [Number, String],
        "default": 10
      },
      hideNavigation: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      timezone: {
        type: String,
        "default": null
      },
      emitTimezone: {
        type: String,
        "default": null
      },
      vertical: {
        type: Boolean,
        "default": !1
      },
      disableMonthYearSelect: {
        type: Boolean,
        "default": !1
      },
      disableYearSelect: {
        type: Boolean,
        "default": !1
      },
      menuClassName: {
        type: String,
        "default": null
      },
      dayClass: {
        type: Function,
        "default": null
      },
      yearRange: {
        type: Array,
        "default": function _default() {
          return [1900, 2100];
        }
      },
      calendarCellClassName: {
        type: String,
        "default": null
      },
      enableTimePicker: {
        type: Boolean,
        "default": !0
      },
      autoApply: {
        type: Boolean,
        "default": !1
      },
      disabledDates: {
        type: [Array, Function],
        "default": function _default() {
          return [];
        }
      },
      monthNameFormat: {
        type: String,
        "default": "short"
      },
      startDate: {
        type: [Date, String],
        "default": null
      },
      startTime: {
        type: [Object, Array],
        "default": null
      },
      hideOffsetDates: {
        type: Boolean,
        "default": !1
      },
      autoRange: {
        type: [Number, String],
        "default": null
      },
      noToday: {
        type: Boolean,
        "default": !1
      },
      disabledWeekDays: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      allowedDates: {
        type: Array,
        "default": null
      },
      nowButtonLabel: {
        type: String,
        "default": "Now"
      },
      markers: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      escClose: {
        type: Boolean,
        "default": !0
      },
      spaceConfirm: {
        type: Boolean,
        "default": !0
      },
      monthChangeOnArrows: {
        type: Boolean,
        "default": !0
      },
      presetDates: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      flow: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      partialFlow: {
        type: Boolean,
        "default": !1
      },
      preventMinMaxNavigation: {
        type: Boolean,
        "default": !1
      },
      minRange: {
        type: [Number, String],
        "default": null
      },
      maxRange: {
        type: [Number, String],
        "default": null
      },
      multiDatesLimit: {
        type: [Number, String],
        "default": null
      },
      reverseYears: {
        type: Boolean,
        "default": !1
      },
      weekPicker: {
        type: Boolean,
        "default": !1
      },
      filters: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      arrowNavigation: {
        type: Boolean,
        "default": !1
      },
      disableTimeRangeValidation: {
        type: Boolean,
        "default": !1
      },
      highlight: {
        type: [Function, Object],
        "default": null
      },
      teleport: {
        type: [String, Boolean, Object],
        "default": null
      },
      teleportCenter: {
        type: Boolean,
        "default": !1
      },
      locale: {
        type: String,
        "default": "en-Us"
      },
      weekNumName: {
        type: String,
        "default": "W"
      },
      weekStart: {
        type: [Number, String],
        "default": 1
      },
      weekNumbers: {
        type: [String, Function, Object],
        "default": null
      },
      calendarClassName: {
        type: String,
        "default": null
      },
      monthChangeOnScroll: {
        type: [Boolean, String],
        "default": !0
      },
      dayNames: {
        type: [Function, Array],
        "default": null
      },
      monthPicker: {
        type: Boolean,
        "default": !1
      },
      customProps: {
        type: Object,
        "default": null
      },
      yearPicker: {
        type: Boolean,
        "default": !1
      },
      modelAuto: {
        type: Boolean,
        "default": !1
      },
      selectText: {
        type: String,
        "default": "Select"
      },
      cancelText: {
        type: String,
        "default": "Cancel"
      },
      previewFormat: {
        type: [String, Function],
        "default": function _default() {
          return "";
        }
      },
      multiDates: {
        type: Boolean,
        "default": !1
      },
      partialRange: {
        type: Boolean,
        "default": !0
      },
      ignoreTimeValidation: {
        type: Boolean,
        "default": !1
      },
      minDate: {
        type: [Date, String],
        "default": null
      },
      maxDate: {
        type: [Date, String],
        "default": null
      },
      minTime: {
        type: Object,
        "default": null
      },
      maxTime: {
        type: Object,
        "default": null
      },
      name: {
        type: String,
        "default": null
      },
      placeholder: {
        type: String,
        "default": ""
      },
      hideInputIcon: {
        type: Boolean,
        "default": !1
      },
      clearable: {
        type: Boolean,
        "default": !0
      },
      state: {
        type: Boolean,
        "default": null
      },
      required: {
        type: Boolean,
        "default": !1
      },
      autocomplete: {
        type: String,
        "default": "off"
      },
      inputClassName: {
        type: String,
        "default": null
      },
      fixedStart: {
        type: Boolean,
        "default": !1
      },
      fixedEnd: {
        type: Boolean,
        "default": !1
      },
      timePicker: {
        type: Boolean,
        "default": !1
      },
      enableSeconds: {
        type: Boolean,
        "default": !1
      },
      is24: {
        type: Boolean,
        "default": !0
      },
      noHoursOverlay: {
        type: Boolean,
        "default": !1
      },
      noMinutesOverlay: {
        type: Boolean,
        "default": !1
      },
      noSecondsOverlay: {
        type: Boolean,
        "default": !1
      },
      hoursGridIncrement: {
        type: [String, Number],
        "default": 1
      },
      minutesGridIncrement: {
        type: [String, Number],
        "default": 5
      },
      secondsGridIncrement: {
        type: [String, Number],
        "default": 5
      },
      hoursIncrement: {
        type: [Number, String],
        "default": 1
      },
      minutesIncrement: {
        type: [Number, String],
        "default": 1
      },
      secondsIncrement: {
        type: [Number, String],
        "default": 1
      },
      range: {
        type: [Boolean, Object],
        "default": !1
      },
      uid: {
        type: String,
        "default": null
      },
      disabled: {
        type: Boolean,
        "default": !1
      },
      readonly: {
        type: Boolean,
        "default": !1
      },
      inline: {
        type: [Boolean, Object],
        "default": !1
      },
      textInput: {
        type: [Boolean, Object],
        "default": !1
      },
      noDisabledRange: {
        type: Boolean,
        "default": !1
      },
      sixWeeks: {
        type: [Boolean, String],
        "default": !1
      },
      actionRow: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      focusStartDate: {
        type: Boolean,
        "default": !1
      },
      disabledTimes: {
        type: [Function, Array],
        "default": void 0
      },
      showLastInRange: {
        type: Boolean,
        "default": !0
      },
      timePickerInline: {
        type: Boolean,
        "default": !1
      },
      calendar: {
        type: Function,
        "default": null
      },
      config: {
        type: Object,
        "default": void 0
      },
      quarterPicker: {
        type: Boolean,
        "default": !1
      },
      yearFirst: {
        type: Boolean,
        "default": !1
      },
      loading: {
        type: Boolean,
        "default": !1
      }
    },
    nt = _objectSpread(_objectSpread({}, sn), {}, {
      shadow: {
        type: Boolean,
        "default": !1
      },
      flowStep: {
        type: Number,
        "default": 0
      },
      internalModelValue: {
        type: [Date, Array],
        "default": null
      },
      arrMapValues: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      noOverlayFocus: {
        type: Boolean,
        "default": !1
      },
      collapse: {
        type: Boolean,
        "default": !1
      },
      menuWrapRef: {
        type: Object,
        "default": null
      }
    }),
    ir = {
      key: 1,
      "class": "dp__input_wrap"
    },
    ur = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"],
    dr = {
      key: 2,
      "class": "dp__clear_icon"
    },
    cr = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "DatepickerInput",
      props: _objectSpread({
        isMenuOpen: {
          type: Boolean,
          "default": !1
        },
        inputValue: {
          type: String,
          "default": ""
        }
      }, sn),
      emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur", "real-blur"],
      setup: function setup(e, _ref7) {
        var t = _ref7.expose,
          l = _ref7.emit;
        var a = l,
          n = e,
          _Re6 = Re(n),
          i = _Re6.defaultedTextInput,
          r = _Re6.defaultedAriaLabels,
          d = _Re6.defaultedInline,
          M = _Re6.defaultedConfig,
          k = _Re6.defaultedRange,
          P = _Re6.getDefaultPattern,
          b = _Re6.getDefaultStartTime,
          _At3 = At(n),
          _ = _At3.checkMinMaxRange,
          Y = vue.ref(),
          $ = vue.ref(null),
          w = vue.ref(!1),
          K = vue.ref(!1),
          N = vue.computed(function () {
            return babelHelpers.defineProperty({
              dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
              dp__disabled: n.disabled,
              dp__input_readonly: !i.value.enabled,
              dp__input: !0,
              dp__input_icon_pad: !n.hideInputIcon,
              dp__input_valid: !!n.state,
              dp__input_invalid: n.state === !1,
              dp__input_focus: w.value || n.isMenuOpen,
              dp__input_reg: !i.value.enabled
            }, n.inputClassName, !!n.inputClassName);
          }),
          E = function E() {
            a("set-input-date", null), n.autoApply && (a("set-empty-date"), Y.value = null);
          },
          I = function I(f) {
            var _i$value$format;
            var z = b();
            return Bl(f, (_i$value$format = i.value.format) !== null && _i$value$format !== void 0 ? _i$value$format : P(), z !== null && z !== void 0 ? z : Ca({}, n.enableSeconds), n.inputValue, K.value);
          },
          D = function D(f) {
            var z = i.value.rangeSeparator,
              _f$split = f.split("".concat(z)),
              _f$split2 = babelHelpers.slicedToArray(_f$split, 2),
              ae = _f$split2[0],
              s = _f$split2[1];
            if (ae) {
              var h = I(ae.trim()),
                o = s ? I(s.trim()) : null,
                S = h && o ? [h, o] : [h];
              _(o, S, 0) && (Y.value = h ? S : null);
            }
          },
          R = function R() {
            K.value = !0;
          },
          V = function V(f) {
            if (k.value.enabled) D(f);else if (n.multiDates) {
              var z = f.split(";");
              Y.value = z.map(function (ae) {
                return I(ae.trim());
              }).filter(function (ae) {
                return ae;
              });
            } else Y.value = I(f);
          },
          ne = function ne(f) {
            var ae;
            var z = typeof f == "string" ? f : (ae = f.target) == null ? void 0 : ae.value;
            z !== "" ? (i.value.openMenu && !n.isMenuOpen && a("open"), V(z), a("set-input-date", Y.value)) : E(), K.value = !1, a("update:input-value", z);
          },
          O = function O(f) {
            i.value.enabled ? (V(f.target.value), i.value.enterSubmit && Rn(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0), Y.value = null) : i.value.enterSubmit && n.inputValue === "" && (Y.value = null, a("clear"))) : H(f);
          },
          re = function re(f) {
            i.value.enabled && i.value.tabSubmit && V(f.target.value), i.value.tabSubmit && Rn(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0, !0), Y.value = null) : i.value.tabSubmit && n.inputValue === "" && (Y.value = null, a("clear", !0));
          },
          se = function se() {
            var f;
            w.value = !0, a("focus"), i.value.enabled && i.value.selectOnFocus && ((f = $.value) == null || f.select());
          },
          H = function H(f) {
            f.preventDefault(), mt(f, M.value, !0), i.value.enabled && i.value.openMenu && !d.value.input && !n.isMenuOpen ? a("open") : i.value.enabled || a("toggle");
          },
          g = function g() {
            a("real-blur"), w.value = !1, (!n.isMenuOpen || d.value.enabled && d.value.input) && a("blur"), n.autoApply && i.value.enabled && Y.value && !n.isMenuOpen && (a("set-input-date", Y.value), a("select-date"), Y.value = null);
          },
          T = function T(f) {
            mt(f, M.value, !0), a("clear");
          },
          G = function G(f) {
            if (!i.value.enabled) {
              if (f.code === "Tab") return;
              f.preventDefault();
            }
          };
        return t({
          focusInput: function focusInput() {
            var f;
            (f = $.value) == null || f.focus({
              preventScroll: !0
            });
          },
          setParsedDate: function setParsedDate(f) {
            Y.value = f;
          }
        }), function (f, z) {
          var ae;
          return vue.openBlock(), vue.createElementBlock("div", {
            onClick: H
          }, [f.$slots.trigger && !f.$slots["dp-input"] && !vue.unref(d).enabled ? vue.renderSlot(f.$slots, "trigger", {
            key: 0
          }) : vue.createCommentVNode("", !0), !f.$slots.trigger && (!vue.unref(d).enabled || vue.unref(d).input) ? (vue.openBlock(), vue.createElementBlock("div", ir, [f.$slots["dp-input"] && !f.$slots.trigger && (!vue.unref(d).enabled || vue.unref(d).enabled && vue.unref(d).input) ? vue.renderSlot(f.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: ne,
            onEnter: O,
            onTab: re,
            onClear: T,
            onBlur: g,
            onKeypress: G,
            onPaste: R,
            openMenu: function openMenu() {
              return f.$emit("open");
            },
            closeMenu: function closeMenu() {
              return f.$emit("close");
            },
            toggleMenu: function toggleMenu() {
              return f.$emit("toggle");
            }
          }) : vue.createCommentVNode("", !0), f.$slots["dp-input"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            id: f.uid ? "dp-input-".concat(f.uid) : void 0,
            ref_key: "inputRef",
            ref: $,
            name: f.name,
            "class": vue.normalizeClass(N.value),
            inputmode: vue.unref(i).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (ae = vue.unref(r)) == null ? void 0 : ae.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === !1 ? !0 : void 0,
            onInput: ne,
            onKeydown: [vue.withKeys(O, ["enter"]), vue.withKeys(re, ["tab"]), G],
            onBlur: g,
            onFocus: se,
            onKeypress: G,
            onPaste: R
          }, null, 42, ur)), vue.createElementVNode("div", {
            onClick: z[2] || (z[2] = function (s) {
              return a("toggle");
            })
          }, [f.$slots["input-icon"] && !f.hideInputIcon ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            "class": "dp__input_icon",
            onClick: z[0] || (z[0] = function (s) {
              return a("toggle");
            })
          }, [vue.renderSlot(f.$slots, "input-icon")])) : vue.createCommentVNode("", !0), !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (vue.openBlock(), vue.createBlock(vue.unref(Bt), {
            key: 1,
            "class": "dp__input_icon dp__input_icons",
            onClick: z[1] || (z[1] = function (s) {
              return a("toggle");
            })
          })) : vue.createCommentVNode("", !0)]), f.$slots["clear-icon"] && e.inputValue && f.clearable && !f.disabled && !f.readonly ? (vue.openBlock(), vue.createElementBlock("span", dr, [vue.renderSlot(f.$slots, "clear-icon", {
            clear: T
          })])) : vue.createCommentVNode("", !0), f.clearable && !f.$slots["clear-icon"] && e.inputValue && !f.disabled && !f.readonly ? (vue.openBlock(), vue.createBlock(vue.unref(wa), {
            key: 3,
            "class": "dp__clear_icon dp__input_icons",
            onClick: z[3] || (z[3] = vue.withModifiers(function (s) {
              return T(s);
            }, ["prevent"]))
          })) : vue.createCommentVNode("", !0)])) : vue.createCommentVNode("", !0)]);
        };
      }
    }),
    fr = ["title"],
    vr = {
      "class": "dp__action_buttons",
      "data-dp-element": "action-row"
    },
    mr = ["disabled"],
    gr = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "ActionRow",
      props: _objectSpread({
        menuMount: {
          type: Boolean,
          "default": !1
        },
        calendarWidth: {
          type: Number,
          "default": 0
        }
      }, nt),
      emits: ["close-picker", "select-date", "select-now", "invalid-select"],
      setup: function setup(e, _ref9) {
        var t = _ref9.emit;
        var l = t,
          a = e,
          _Re7 = Re(a),
          n = _Re7.defaultedActionRow,
          i = _Re7.defaultedPreviewFormat,
          r = _Re7.defaultedMultiCalendars,
          d = _Re7.defaultedTextInput,
          M = _Re7.defaultedInline,
          k = _Re7.defaultedRange,
          P = _Re7.getDefaultPattern,
          _At4 = At(a),
          b = _At4.isValidTime,
          _ht = ht(),
          _ = _ht.buildMatrix,
          Y = vue.ref(null),
          $ = vue.ref(null);
        vue.onMounted(function () {
          a.arrowNavigation && _([Ne(Y), Ne($)], "actionRow");
        });
        var w = vue.computed(function () {
            return k.value.enabled && !k.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0;
          }),
          K = vue.computed(function () {
            return !N.value || !E.value || !w.value;
          }),
          N = vue.computed(function () {
            return !a.enableTimePicker || a.ignoreTimeValidation ? !0 : b(a.internalModelValue);
          }),
          E = vue.computed(function () {
            return a.monthPicker ? k.value.enabled && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter(function (g) {
              return !re(g);
            }).length : re(a.internalModelValue) : !0;
          }),
          I = function I() {
            var H = i.value;
            return a.timePicker || a.monthPicker, H(Oe(a.internalModelValue));
          },
          D = function D() {
            var H = a.internalModelValue;
            return r.value.count > 0 ? "".concat(R(H[0]), " - ").concat(R(H[1])) : [R(H[0]), R(H[1])];
          },
          R = function R(H) {
            return Oa(H, i.value, a.formatLocale, d.value.rangeSeparator, a.modelAuto, P());
          },
          V = vue.computed(function () {
            return !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? D() : a.multiDates ? a.internalModelValue.map(function (H) {
              return "".concat(R(H));
            }) : a.modelAuto ? "".concat(R(a.internalModelValue[0])) : "".concat(R(a.internalModelValue[0]), " -") : R(a.internalModelValue) : I();
          }),
          ne = function ne() {
            return a.multiDates ? "; " : " - ";
          },
          O = vue.computed(function () {
            return Array.isArray(V.value) ? V.value.join(ne()) : V.value;
          }),
          re = function re(H) {
            if (!a.monthPicker) return !0;
            var g = !0;
            var T = F(Je(H));
            if (a.minDate && a.maxDate) {
              var G = F(Je(a.minDate)),
                te = F(Je(a.maxDate));
              return _e(T, G) && Ce(T, te) || ye(T, G) || ye(T, te);
            }
            if (a.minDate) {
              var _G = F(Je(a.minDate));
              g = _e(T, _G) || ye(T, _G);
            }
            if (a.maxDate) {
              var _G2 = F(Je(a.maxDate));
              g = Ce(T, _G2) || ye(T, _G2);
            }
            return g;
          },
          se = function se() {
            N.value && E.value && w.value ? l("select-date") : l("invalid-select");
          };
        return function (H, g) {
          return vue.openBlock(), vue.createElementBlock("div", {
            "class": "dp__action_row",
            style: vue.normalizeStyle(e.calendarWidth ? {
              width: "".concat(e.calendarWidth, "px")
            } : {})
          }, [H.$slots["action-row"] ? vue.renderSlot(H.$slots, "action-row", vue.normalizeProps(vue.mergeProps({
            key: 0
          }, {
            internalModelValue: H.internalModelValue,
            disabled: K.value,
            selectDate: function selectDate() {
              return H.$emit("select-date");
            },
            closePicker: function closePicker() {
              return H.$emit("close-picker");
            }
          }))) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.unref(n).showPreview ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            "class": "dp__selection_preview",
            title: O.value
          }, [H.$slots["action-preview"] ? vue.renderSlot(H.$slots, "action-preview", {
            key: 0,
            value: H.internalModelValue
          }) : vue.createCommentVNode("", !0), H.$slots["action-preview"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.createTextVNode(vue.toDisplayString(O.value), 1)], 64))], 8, fr)) : vue.createCommentVNode("", !0), vue.createElementVNode("div", vr, [H.$slots["action-buttons"] ? vue.renderSlot(H.$slots, "action-buttons", {
            key: 0,
            value: H.internalModelValue
          }) : vue.createCommentVNode("", !0), H.$slots["action-buttons"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [!vue.unref(M).enabled && vue.unref(n).showCancel ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            ref_key: "cancelButtonRef",
            ref: Y,
            type: "button",
            "class": "dp__action_button dp__action_cancel",
            onClick: g[0] || (g[0] = function (T) {
              return H.$emit("close-picker");
            }),
            onKeydown: [g[1] || (g[1] = vue.withKeys(function (T) {
              return H.$emit("close-picker");
            }, ["enter"])), g[2] || (g[2] = vue.withKeys(function (T) {
              return H.$emit("close-picker");
            }, ["space"]))]
          }, vue.toDisplayString(H.cancelText), 545)) : vue.createCommentVNode("", !0), vue.unref(n).showNow ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            type: "button",
            "class": "dp__action_button dp__action_cancel",
            onClick: g[3] || (g[3] = function (T) {
              return H.$emit("select-now");
            }),
            onKeydown: [g[4] || (g[4] = vue.withKeys(function (T) {
              return H.$emit("select-now");
            }, ["enter"])), g[5] || (g[5] = vue.withKeys(function (T) {
              return H.$emit("select-now");
            }, ["space"]))]
          }, vue.toDisplayString(H.nowButtonLabel), 33)) : vue.createCommentVNode("", !0), vue.unref(n).showSelect ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 2,
            ref_key: "selectButtonRef",
            ref: $,
            type: "button",
            "class": "dp__action_button dp__action_select",
            disabled: K.value,
            onKeydown: [vue.withKeys(se, ["enter"]), vue.withKeys(se, ["space"])],
            onClick: se
          }, vue.toDisplayString(H.selectText), 41, mr)) : vue.createCommentVNode("", !0)], 64))])], 64))], 4);
        };
      }
    }),
    yr = ["onKeydown"],
    pr = {
      "class": "dp__selection_grid_header"
    },
    hr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"],
    br = ["aria-label"],
    Gt = /* @__PURE__ */vue.defineComponent({
      __name: "SelectionOverlay",
      props: {
        items: {},
        type: {},
        isLast: {
          type: Boolean
        },
        arrowNavigation: {
          type: Boolean
        },
        skipButtonRef: {
          type: Boolean
        },
        headerRefs: {},
        hideNavigation: {},
        escClose: {
          type: Boolean
        },
        useRelative: {
          type: Boolean
        },
        height: {},
        textInput: {
          type: [Boolean, Object]
        },
        config: {},
        noOverlayFocus: {
          type: Boolean
        },
        focusValue: {},
        menuWrapRef: {}
      },
      emits: ["selected", "toggle", "reset-flow", "hover-value"],
      setup: function setup(e, _ref10) {
        var t = _ref10.expose,
          l = _ref10.emit;
        var _ht2 = ht(),
          a = _ht2.setSelectionGrid,
          n = _ht2.buildMultiLevelMatrix,
          i = _ht2.setMonthPicker,
          r = l,
          d = e,
          _Re8 = Re(d),
          M = _Re8.defaultedAriaLabels,
          k = _Re8.defaultedTextInput,
          P = _Re8.defaultedConfig,
          _on = on(),
          b = _on.hideNavigationButtons,
          _ = vue.ref(!1),
          Y = vue.ref(null),
          $ = vue.ref(null),
          w = vue.ref([]),
          K = vue.ref(),
          N = vue.ref(null),
          E = vue.ref(0),
          I = vue.ref(null);
        vue.onBeforeUpdate(function () {
          Y.value = null;
        }), vue.onMounted(function () {
          vue.nextTick().then(function () {
            return H();
          }), d.noOverlayFocus || R(), D(!0);
        }), vue.onUnmounted(function () {
          return D(!1);
        });
        var D = function D(s) {
            var h;
            d.arrowNavigation && ((h = d.headerRefs) != null && h.length ? i(s) : a(s));
          },
          R = function R() {
            var h;
            var s = Ne($);
            s && (k.value.enabled || (Y.value ? (h = Y.value) == null || h.focus({
              preventScroll: !0
            }) : s.focus({
              preventScroll: !0
            })), _.value = s.clientHeight < s.scrollHeight);
          },
          V = vue.computed(function () {
            return {
              dp__overlay: !0,
              "dp--overlay-absolute": !d.useRelative,
              "dp--overlay-relative": d.useRelative
            };
          }),
          ne = vue.computed(function () {
            return d.useRelative ? {
              height: "".concat(d.height, "px"),
              width: "260px"
            } : void 0;
          }),
          O = vue.computed(function () {
            return {
              dp__overlay_col: !0
            };
          }),
          re = vue.computed(function () {
            return {
              dp__btn: !0,
              dp__button: !0,
              dp__overlay_action: !0,
              dp__over_action_scroll: _.value,
              dp__button_bottom: d.isLast
            };
          }),
          se = vue.computed(function () {
            var s, h;
            return {
              dp__overlay_container: !0,
              dp__container_flex: ((s = d.items) == null ? void 0 : s.length) <= 6,
              dp__container_block: ((h = d.items) == null ? void 0 : h.length) > 6
            };
          });
        vue.watch(function () {
          return d.items;
        }, function () {
          return H(!1);
        }, {
          deep: !0
        });
        var H = function H() {
            var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            vue.nextTick().then(function () {
              var h = Ne(Y),
                o = Ne($),
                S = Ne(N),
                u = Ne(I),
                B = S ? S.getBoundingClientRect().height : 0;
              o && (o.getBoundingClientRect().height ? E.value = o.getBoundingClientRect().height - B : E.value = P.value.modeHeight - B), h && u && s && (u.scrollTop = h.offsetTop - u.offsetTop - (E.value / 2 - h.getBoundingClientRect().height) - B);
            });
          },
          g = function g(s) {
            s.disabled || r("selected", s.value);
          },
          T = function T() {
            r("toggle"), r("reset-flow");
          },
          G = function G() {
            d.escClose && T();
          },
          te = function te(s, h, o, S) {
            s && ((h.active || h.value === d.focusValue) && (Y.value = s), d.arrowNavigation && (Array.isArray(w.value[o]) ? w.value[o][S] = s : w.value[o] = [s], m()));
          },
          m = function m() {
            var h, o;
            var s = (h = d.headerRefs) != null && h.length ? [d.headerRefs].concat(w.value) : w.value.concat([d.skipButtonRef ? [] : [N.value]]);
            n(Oe(s), (o = d.headerRefs) != null && o.length ? "monthPicker" : "selectionGrid");
          },
          f = function f(s) {
            d.arrowNavigation || mt(s, P.value, !0);
          },
          z = function z(s) {
            K.value = s, r("hover-value", s);
          },
          ae = function ae() {
            if (T(), !d.isLast) {
              var _d$menuWrapRef;
              var s = Nl((_d$menuWrapRef = d.menuWrapRef) !== null && _d$menuWrapRef !== void 0 ? _d$menuWrapRef : null, "action-row");
              if (s) {
                var h = Ta(s);
                h == null || h.focus();
              }
            }
          };
        return t({
          focusGrid: R
        }), function (s, h) {
          var o;
          return vue.openBlock(), vue.createElementBlock("div", {
            ref_key: "gridWrapRef",
            ref: $,
            "class": vue.normalizeClass(V.value),
            style: vue.normalizeStyle(ne.value),
            role: "dialog",
            tabindex: "0",
            onKeydown: [vue.withKeys(vue.withModifiers(G, ["prevent"]), ["esc"]), h[0] || (h[0] = vue.withKeys(vue.withModifiers(function (S) {
              return f(S);
            }, ["prevent"]), ["left"])), h[1] || (h[1] = vue.withKeys(vue.withModifiers(function (S) {
              return f(S);
            }, ["prevent"]), ["up"])), h[2] || (h[2] = vue.withKeys(vue.withModifiers(function (S) {
              return f(S);
            }, ["prevent"]), ["down"])), h[3] || (h[3] = vue.withKeys(vue.withModifiers(function (S) {
              return f(S);
            }, ["prevent"]), ["right"]))]
          }, [vue.createElementVNode("div", {
            ref_key: "containerRef",
            ref: I,
            "class": vue.normalizeClass(se.value),
            role: "grid",
            style: vue.normalizeStyle({
              height: "".concat(E.value, "px")
            })
          }, [vue.createElementVNode("div", pr, [vue.renderSlot(s.$slots, "header")]), s.$slots.overlay ? vue.renderSlot(s.$slots, "overlay", {
            key: 0
          }) : (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, vue.renderList(s.items, function (S, u) {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: u,
              "class": vue.normalizeClass(["dp__overlay_row", {
                dp__flex_row: s.items.length >= 3
              }]),
              role: "row"
            }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(S, function (B, p) {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: B.value,
                ref_for: !0,
                ref: function ref(J) {
                  return te(J, B, u, p);
                },
                role: "gridcell",
                "class": vue.normalizeClass(O.value),
                "aria-selected": B.active || void 0,
                "aria-disabled": B.disabled || void 0,
                tabindex: "0",
                onClick: function onClick(J) {
                  return g(B);
                },
                onKeydown: [vue.withKeys(vue.withModifiers(function (J) {
                  return g(B);
                }, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(function (J) {
                  return g(B);
                }, ["prevent"]), ["space"])],
                onMouseover: function onMouseover(J) {
                  return z(B.value);
                }
              }, [vue.createElementVNode("div", {
                "class": vue.normalizeClass(B.className)
              }, [s.$slots.item ? vue.renderSlot(s.$slots, "item", {
                key: 0,
                item: B
              }) : vue.createCommentVNode("", !0), s.$slots.item ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                key: 1
              }, [vue.createTextVNode(vue.toDisplayString(B.text), 1)], 64))], 2)], 42, hr);
            }), 128))], 2);
          }), 128))], 6), s.$slots["button-icon"] ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            ref_key: "toggleButton",
            ref: N,
            type: "button",
            "aria-label": (o = vue.unref(M)) == null ? void 0 : o.toggleOverlay,
            "class": vue.normalizeClass(re.value),
            tabindex: "0",
            onClick: T,
            onKeydown: [vue.withKeys(T, ["enter"]), vue.withKeys(ae, ["tab"])]
          }, [vue.renderSlot(s.$slots, "button-icon")], 42, br)), [[vue.vShow, !vue.unref(b)(s.hideNavigation, s.type)]]) : vue.createCommentVNode("", !0)], 46, yr);
        };
      }
    }),
    un = /* @__PURE__ */vue.defineComponent({
      __name: "InstanceWrap",
      props: {
        multiCalendars: {},
        stretch: {
          type: Boolean
        },
        collapse: {
          type: Boolean
        }
      },
      setup: function setup(e) {
        var t = e,
          l = vue.computed(function () {
            return t.multiCalendars > 0 ? babelHelpers.toConsumableArray(Array(t.multiCalendars).keys()) : [0];
          }),
          a = vue.computed(function () {
            return {
              dp__instance_calendar: t.multiCalendars > 0
            };
          });
        return function (n, i) {
          return vue.openBlock(), vue.createElementBlock("div", {
            "class": vue.normalizeClass({
              dp__menu_inner: !n.stretch,
              "dp--menu--inner-stretched": n.stretch,
              dp__flex_display: n.multiCalendars > 0,
              "dp--flex-display-collapsed": n.collapse
            })
          }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(l.value, function (r, d) {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: r,
              "class": vue.normalizeClass(a.value)
            }, [vue.renderSlot(n.$slots, "default", {
              instance: r,
              index: d
            })], 2);
          }), 128))], 2);
        };
      }
    }),
    kr = ["aria-label", "aria-disabled"],
    Ht = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "ArrowBtn",
      props: {
        ariaLabel: {},
        disabled: {
          type: Boolean
        }
      },
      emits: ["activate", "set-ref"],
      setup: function setup(e, _ref11) {
        var t = _ref11.emit;
        var l = t,
          a = vue.ref(null);
        return vue.onMounted(function () {
          return l("set-ref", a);
        }), function (n, i) {
          return vue.openBlock(), vue.createElementBlock("button", {
            ref_key: "elRef",
            ref: a,
            type: "button",
            "class": "dp__btn dp--arrow-btn-nav",
            tabindex: "0",
            "aria-label": n.ariaLabel,
            "aria-disabled": n.disabled || void 0,
            onClick: i[0] || (i[0] = function (r) {
              return n.$emit("activate");
            }),
            onKeydown: [i[1] || (i[1] = vue.withKeys(vue.withModifiers(function (r) {
              return n.$emit("activate");
            }, ["prevent"]), ["enter"])), i[2] || (i[2] = vue.withKeys(vue.withModifiers(function (r) {
              return n.$emit("activate");
            }, ["prevent"]), ["space"]))]
          }, [vue.createElementVNode("span", {
            "class": vue.normalizeClass(["dp__inner_nav", {
              dp__inner_nav_disabled: n.disabled
            }])
          }, [vue.renderSlot(n.$slots, "default")], 2)], 40, kr);
        };
      }
    }),
    wr = {
      "class": "dp--year-mode-picker"
    },
    Dr = ["aria-label"],
    Ba = /* @__PURE__ */vue.defineComponent({
      __name: "YearModePicker",
      props: _objectSpread(_objectSpread({}, nt), {}, {
        showYearPicker: {
          type: Boolean,
          "default": !1
        },
        items: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        instance: {
          type: Number,
          "default": 0
        },
        year: {
          type: Number,
          "default": 0
        },
        isDisabled: {
          type: Function,
          "default": function _default() {
            return !1;
          }
        }
      }),
      emits: ["toggle-year-picker", "year-select", "handle-year"],
      setup: function setup(e, _ref12) {
        var t = _ref12.emit;
        var l = t,
          a = e,
          _on2 = on(),
          n = _on2.showRightIcon,
          i = _on2.showLeftIcon,
          _Re9 = Re(a),
          r = _Re9.defaultedConfig,
          d = _Re9.defaultedMultiCalendars,
          M = _Re9.defaultedAriaLabels,
          k = _Re9.defaultedTransitions,
          _jt = jt(k),
          P = _jt.showTransition,
          b = _jt.transitionName,
          _ = function _() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var K = arguments.length > 1 ? arguments[1] : undefined;
            l("toggle-year-picker", {
              flow: w,
              show: K
            });
          },
          Y = function Y(w) {
            l("year-select", w);
          },
          $ = function $() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            l("handle-year", w);
          };
        return function (w, K) {
          var N, E, I;
          return vue.openBlock(), vue.createElementBlock("div", wr, [vue.unref(i)(vue.unref(d), e.instance) ? (vue.openBlock(), vue.createBlock(Ht, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (N = vue.unref(M)) == null ? void 0 : N.prevYear,
            disabled: e.isDisabled(!1),
            onActivate: K[0] || (K[0] = function (D) {
              return $(!1);
            })
          }, {
            "default": vue.withCtx(function () {
              return [w.$slots["arrow-left"] ? vue.renderSlot(w.$slots, "arrow-left", {
                key: 0
              }) : vue.createCommentVNode("", !0), w.$slots["arrow-left"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Nn), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : vue.createCommentVNode("", !0), vue.createElementVNode("button", {
            ref: "mpYearButtonRef",
            "class": "dp__btn dp--year-select",
            type: "button",
            "aria-label": (E = vue.unref(M)) == null ? void 0 : E.openYearsOverlay,
            onClick: K[1] || (K[1] = function () {
              return _(!1);
            }),
            onKeydown: K[2] || (K[2] = vue.withKeys(function () {
              return _(!1);
            }, ["enter"]))
          }, [w.$slots.year ? vue.renderSlot(w.$slots, "year", {
            key: 0,
            year: e.year
          }) : vue.createCommentVNode("", !0), w.$slots.year ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.createTextVNode(vue.toDisplayString(e.year), 1)], 64))], 40, Dr), vue.unref(n)(vue.unref(d), e.instance) ? (vue.openBlock(), vue.createBlock(Ht, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (I = vue.unref(M)) == null ? void 0 : I.nextYear,
            disabled: e.isDisabled(!0),
            onActivate: K[3] || (K[3] = function (D) {
              return $(!0);
            })
          }, {
            "default": vue.withCtx(function () {
              return [w.$slots["arrow-right"] ? vue.renderSlot(w.$slots, "arrow-right", {
                key: 0
              }) : vue.createCommentVNode("", !0), w.$slots["arrow-right"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Bn), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : vue.createCommentVNode("", !0), vue.createVNode(vue.Transition, {
            name: vue.unref(b)(e.showYearPicker),
            css: vue.unref(P)
          }, {
            "default": vue.withCtx(function () {
              return [e.showYearPicker ? (vue.openBlock(), vue.createBlock(Gt, {
                key: 0,
                items: e.items,
                "text-input": w.textInput,
                "esc-close": w.escClose,
                config: w.config,
                "is-last": w.autoApply && !vue.unref(r).keepActionRow,
                "hide-navigation": w.hideNavigation,
                type: "year",
                onToggle: _,
                onSelected: K[4] || (K[4] = function (D) {
                  return Y(D);
                })
              }, vue.createSlots({
                "button-icon": vue.withCtx(function () {
                  return [w.$slots["calendar-icon"] ? vue.renderSlot(w.$slots, "calendar-icon", {
                    key: 0
                  }) : vue.createCommentVNode("", !0), w.$slots["calendar-icon"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Bt), {
                    key: 1
                  }))];
                }),
                _: 2
              }, [w.$slots["year-overlay-value"] ? {
                name: "item",
                fn: vue.withCtx(function (_ref13) {
                  var D = _ref13.item;
                  return [vue.renderSlot(w.$slots, "year-overlay-value", {
                    text: D.text,
                    value: D.value
                  })];
                }),
                key: "0"
              } : void 0]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : vue.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])]);
        };
      }
    }),
    zn = function zn(e, t, l) {
      if (t.value && Array.isArray(t.value)) {
        if (t.value.some(function (a) {
          return ye(e, a);
        })) {
          var a = t.value.filter(function (n) {
            return !ye(n, e);
          });
          t.value = a.length ? a : null;
        } else (l && +l > t.value.length || !l) && t.value.push(e);
      } else t.value = [e];
    },
    jn = function jn(e, t, l) {
      var a = e.value ? e.value.slice() : [];
      return a.length === 2 && a[1] !== null && (a = []), a.length ? Ce(t, a[0]) ? (a.unshift(t), l("range-start", a[0]), l("range-start", a[1])) : (a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), e.value = a, a;
    },
    dn = function dn(e, t, l, a) {
      e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply");
    },
    Ia = function Ia(e) {
      Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map(function (t) {
        return tt(F(t), e.timezone);
      }) : Array.isArray(e.value) || (e.modelValue.value = tt(F(e.value), e.timezone));
    },
    Ea = function Ea(_ref14) {
      var e = _ref14.multiCalendars,
        t = _ref14.highlight,
        l = _ref14.calendars,
        a = _ref14.modelValue,
        n = _ref14.props,
        i = _ref14.year,
        r = _ref14.month,
        d = _ref14.emit;
      var M = vue.computed(function () {
          return Ln(n.yearRange, n.reverseYears);
        }),
        k = vue.ref([!1]),
        P = vue.computed(function () {
          return function (D, R) {
            var V = dateFns.set(Je( /* @__PURE__ */new Date()), {
              month: r.value(D),
              year: i.value(D)
            });
            return _a(V, n.maxDate, n.minDate, n.preventMinMaxNavigation, R);
          };
        }),
        b = function b() {
          for (var D = 0; D < e.value.count; D++) if (D === 0) l.value[D] = l.value[0];else {
            var R = dateFns.set(F(), l.value[D - 1]);
            l.value[D] = {
              month: dateFns.getMonth(R),
              year: dateFns.getYear(dateFns.addYears(R, 1))
            };
          }
        },
        _ = function _(D) {
          if (!D) return b();
          var R = dateFns.set(F(), l.value[D]);
          return l.value[0].year = dateFns.getYear(dateFns.subYears(R, e.value.count - 1)), b();
        },
        Y = function Y(D) {
          return n.focusStartDate ? D[0] : D[1] ? D[1] : D[0];
        },
        $ = function $() {
          if (a.value) {
            var D = Array.isArray(a.value) ? Y(a.value) : a.value;
            l.value[0] = {
              month: dateFns.getMonth(D),
              year: dateFns.getYear(D)
            };
          }
        };
      vue.onMounted(function () {
        $(), e.value.count && b();
      });
      var w = function w(D, R) {
          l.value[R].year = D, e.value.count && !e.value.solo && _(R);
        },
        K = vue.computed(function () {
          return function (D) {
            return Ot(M.value, function (R) {
              var V = i.value(D) === R.value,
                ne = Ut(R.value, Yt(n.minDate), Yt(n.maxDate)),
                O = Un(t.value, R.value);
              return {
                active: V,
                disabled: ne,
                highlighted: O
              };
            });
          };
        }),
        N = function N(D, R) {
          w(D, R), I(R);
        },
        E = function E(D) {
          var R = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (!P.value(D, R)) {
            var V = R ? i.value(D) + 1 : i.value(D) - 1;
            w(V, D);
          }
        },
        I = function I(D) {
          var R = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var V = arguments.length > 2 ? arguments[2] : undefined;
          R || d("reset-flow"), V !== void 0 ? k.value[D] = V : k.value[D] = !k.value[D], k.value || d("overlay-closed");
        };
      return {
        isDisabled: P,
        groupedYears: K,
        showYearPicker: k,
        selectYear: w,
        toggleYearPicker: I,
        handleYearSelect: N,
        handleYear: E
      };
    },
    Mr = function Mr(e, t) {
      var _Re10 = Re(e),
        l = _Re10.defaultedMultiCalendars,
        a = _Re10.defaultedAriaLabels,
        n = _Re10.defaultedTransitions,
        i = _Re10.defaultedConfig,
        r = _Re10.defaultedRange,
        d = _Re10.defaultedHighlight,
        _Kt = Kt(e, t),
        M = _Kt.modelValue,
        k = _Kt.year,
        P = _Kt.month,
        b = _Kt.calendars,
        _ = vue.computed(function () {
          return Ma(e.formatLocale, e.locale, e.monthNameFormat);
        }),
        Y = vue.ref(null),
        _Ea = Ea({
          modelValue: M,
          multiCalendars: l,
          highlight: d,
          calendars: b,
          year: k,
          month: P,
          props: e,
          emit: t
        }),
        $ = _Ea.selectYear,
        w = _Ea.groupedYears,
        K = _Ea.showYearPicker,
        N = _Ea.toggleYearPicker,
        E = _Ea.handleYearSelect,
        I = _Ea.handleYear,
        D = _Ea.isDisabled;
      vue.onMounted(function () {
        e.startDate && (M.value && e.focusStartDate || !M.value) && $(dateFns.getYear(F(e.startDate)), 0);
      });
      var R = function R(s) {
          return s ? {
            month: dateFns.getMonth(s),
            year: dateFns.getYear(s)
          } : {
            month: null,
            year: null
          };
        },
        V = function V() {
          return M.value ? Array.isArray(M.value) ? M.value.map(function (s) {
            return R(s);
          }) : R(M.value) : R();
        },
        ne = function ne(s, h) {
          var o = b.value[s],
            S = V();
          return Array.isArray(S) ? S.some(function (u) {
            return u.year === (o == null ? void 0 : o.year) && u.month === h;
          }) : (o == null ? void 0 : o.year) === S.year && h === S.month;
        },
        O = function O(s, h, o) {
          var u, B;
          var S = V();
          return Array.isArray(S) ? k.value(h) === ((u = S[o]) == null ? void 0 : u.year) && s === ((B = S[o]) == null ? void 0 : B.month) : !1;
        },
        re = function re(s, h) {
          if (r.value.enabled) {
            var o = V();
            if (Array.isArray(M.value) && Array.isArray(o)) {
              var S = O(s, h, 0) || O(s, h, 1),
                u = it(Je(F()), s, k.value(h));
              return rn(M.value, Y.value, u) && !S;
            }
            return !1;
          }
          return !1;
        },
        se = vue.computed(function () {
          return function (s) {
            return Ot(_.value, function (h) {
              var o = ne(s, h.value),
                S = Ut(h.value, Aa(k.value(s), e.minDate), Sa(k.value(s), e.maxDate)) || Wl(e.disabledDates, k.value(s)).includes(h.value),
                u = re(h.value, s),
                B = Ya(d.value, h.value, k.value(s));
              return {
                active: o,
                disabled: S,
                isBetween: u,
                highlighted: B
              };
            });
          };
        }),
        H = function H(s, h) {
          return it(Je(F()), s, k.value(h));
        },
        g = function g(s, h) {
          var o = M.value ? M.value : Je( /* @__PURE__ */new Date());
          M.value = it(o, s, k.value(h)), t("auto-apply"), t("update-flow-step");
        },
        T = function T(s, h) {
          var o = jn(M, H(s, h), t);
          dn(o, t, e.autoApply, e.modelAuto);
        },
        G = function G(s, h) {
          zn(H(s, h), M, e.multiDatesLimit), t("auto-apply", !0);
        },
        te = function te(s, h) {
          return b.value[h].month = s, f(h, b.value[h].year, s), e.multiDates ? G(s, h) : r.value.enabled ? T(s, h) : g(s, h);
        },
        m = function m(s, h) {
          $(s, h), f(h, s, null);
        },
        f = function f(s, h, o) {
          var S = o;
          if (!S && S !== 0) {
            var u = V();
            S = Array.isArray(u) ? u[s].month : u.month;
          }
          t("update-month-year", {
            instance: s,
            year: h,
            month: S
          });
        };
      return {
        groupedMonths: se,
        groupedYears: w,
        year: k,
        isDisabled: D,
        defaultedMultiCalendars: l,
        defaultedAriaLabels: a,
        defaultedTransitions: n,
        defaultedConfig: i,
        showYearPicker: K,
        modelValue: M,
        presetDate: function presetDate(s, h) {
          Ia({
            value: s,
            modelValue: M,
            range: r.value.enabled,
            timezone: h ? void 0 : e.timezone
          }), t("auto-apply");
        },
        setHoverDate: function setHoverDate(s, h) {
          Y.value = H(s, h);
        },
        selectMonth: te,
        selectYear: m,
        toggleYearPicker: N,
        handleYearSelect: E,
        handleYear: I,
        getModelMonthYear: V
      };
    },
    $r = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "MonthPicker",
      props: _objectSpread({}, nt),
      emits: ["update:internal-model-value", "overlay-closed", "reset-flow", "range-start", "range-end", "auto-apply", "update-month-year", "update-flow-step", "mount"],
      setup: function setup(e, _ref15) {
        var t = _ref15.expose,
          l = _ref15.emit;
        var a = l,
          n = vue.useSlots(),
          i = Ge(n, "yearMode"),
          r = e;
        vue.onMounted(function () {
          r.shadow || a("mount", null);
        });
        var _Mr = Mr(r, a),
          d = _Mr.groupedMonths,
          M = _Mr.groupedYears,
          k = _Mr.year,
          P = _Mr.isDisabled,
          b = _Mr.defaultedMultiCalendars,
          _ = _Mr.defaultedConfig,
          Y = _Mr.showYearPicker,
          $ = _Mr.modelValue,
          w = _Mr.presetDate,
          K = _Mr.setHoverDate,
          N = _Mr.selectMonth,
          E = _Mr.selectYear,
          I = _Mr.toggleYearPicker,
          D = _Mr.handleYearSelect,
          R = _Mr.handleYear,
          V = _Mr.getModelMonthYear;
        return t({
          getSidebarProps: function getSidebarProps() {
            return {
              modelValue: $,
              year: k,
              getModelMonthYear: V,
              selectMonth: N,
              selectYear: E,
              handleYear: R
            };
          },
          presetDate: w,
          toggleYearPicker: function toggleYearPicker(O) {
            return I(0, O);
          }
        }), function (O, re) {
          return vue.openBlock(), vue.createBlock(un, {
            "multi-calendars": vue.unref(b).count,
            collapse: O.collapse,
            stretch: ""
          }, {
            "default": vue.withCtx(function (_ref16) {
              var se = _ref16.instance;
              return [O.$slots["month-year"] ? vue.renderSlot(O.$slots, "month-year", vue.normalizeProps(vue.mergeProps({
                key: 0
              }, {
                year: vue.unref(k),
                months: vue.unref(d)(se),
                years: vue.unref(M)(se),
                selectMonth: vue.unref(N),
                selectYear: vue.unref(E),
                instance: se
              }))) : (vue.openBlock(), vue.createBlock(Gt, {
                key: 1,
                items: vue.unref(d)(se),
                "arrow-navigation": O.arrowNavigation,
                "is-last": O.autoApply && !vue.unref(_).keepActionRow,
                "esc-close": O.escClose,
                height: vue.unref(_).modeHeight,
                config: O.config,
                "no-overlay-focus": !!(O.noOverlayFocus || O.textInput),
                "use-relative": "",
                type: "month",
                onSelected: function onSelected(H) {
                  return vue.unref(N)(H, se);
                },
                onHoverValue: function onHoverValue(H) {
                  return vue.unref(K)(H, se);
                }
              }, {
                header: vue.withCtx(function () {
                  return [vue.createVNode(Ba, vue.mergeProps(O.$props, {
                    items: vue.unref(M)(se),
                    instance: se,
                    "show-year-picker": vue.unref(Y)[se],
                    year: vue.unref(k)(se),
                    "is-disabled": function isDisabled(H) {
                      return vue.unref(P)(se, H);
                    },
                    onHandleYear: function onHandleYear(H) {
                      return vue.unref(R)(se, H);
                    },
                    onYearSelect: function onYearSelect(H) {
                      return vue.unref(D)(H, se);
                    },
                    onToggleYearPicker: function onToggleYearPicker(H) {
                      return vue.unref(I)(se, H == null ? void 0 : H.flow, H == null ? void 0 : H.show);
                    }
                  }), vue.createSlots({
                    _: 2
                  }, [vue.renderList(vue.unref(i), function (H, g) {
                    return {
                      name: H,
                      fn: vue.withCtx(function (T) {
                        return [vue.renderSlot(O.$slots, H, vue.normalizeProps(vue.guardReactiveProps(T)))];
                      })
                    };
                  })]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])];
                }),
                _: 2
              }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))];
            }),
            _: 3
          }, 8, ["multi-calendars", "collapse"]);
        };
      }
    }),
    Tr = function Tr(e, t) {
      var _Kt2 = Kt(e, t),
        l = _Kt2.modelValue,
        a = vue.ref(null),
        _Re11 = Re(e),
        n = _Re11.defaultedHighlight,
        i = _Re11.defaultedFilters,
        r = _Re11.defaultedRange,
        d = vue.ref();
      vue.onMounted(function () {
        e.startDate && (l.value && e.focusStartDate || !l.value) && (d.value = dateFns.getYear(F(e.startDate)));
      });
      var M = function M($) {
          return Array.isArray(l.value) ? l.value.some(function (w) {
            return dateFns.getYear(w) === $;
          }) : l.value ? dateFns.getYear(l.value) === $ : !1;
        },
        k = function k($) {
          return r.value.enabled && Array.isArray(l.value) ? rn(l.value, a.value, b($)) : !1;
        },
        P = vue.computed(function () {
          return Ot(Ln(e.yearRange, e.reverseYears), function ($) {
            var w = M($.value),
              K = Ut($.value, Yt(e.minDate), Yt(e.maxDate)) || i.value.years.includes($.value),
              N = k($.value) && !w,
              E = Un(n.value, $.value);
            return {
              active: w,
              disabled: K,
              isBetween: N,
              highlighted: E
            };
          });
        }),
        b = function b($) {
          return dateFns.setYear(Je( /* @__PURE__ */new Date()), $);
        };
      return {
        groupedYears: P,
        modelValue: l,
        focusYear: d,
        setHoverValue: function setHoverValue($) {
          a.value = dateFns.setYear(Je( /* @__PURE__ */new Date()), $);
        },
        selectYear: function selectYear($) {
          var w;
          if (t("update-month-year", {
            instance: 0,
            year: $
          }), e.multiDates) return l.value ? Array.isArray(l.value) && (((w = l.value) == null ? void 0 : w.map(function (N) {
            return dateFns.getYear(N);
          })).includes($) ? l.value = l.value.filter(function (N) {
            return dateFns.getYear(N) !== $;
          }) : l.value.push(dateFns.setYear(Ve(F()), $))) : l.value = [dateFns.setYear(Ve(F()), $)], t("auto-apply", !0);
          if (r.value.enabled) {
            var K = jn(l, b($), t);
            return dn(K, t, e.autoApply, e.modelAuto);
          }
          l.value = b($), t("auto-apply");
        }
      };
    },
    Ar = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "YearPicker",
      props: _objectSpread({}, nt),
      emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply", "update-month-year"],
      setup: function setup(e, _ref17) {
        var t = _ref17.expose,
          l = _ref17.emit;
        var a = l,
          n = e,
          _Tr = Tr(n, a),
          i = _Tr.groupedYears,
          r = _Tr.modelValue,
          d = _Tr.focusYear,
          M = _Tr.selectYear,
          k = _Tr.setHoverValue,
          _Re12 = Re(n),
          P = _Re12.defaultedConfig;
        return t({
          getSidebarProps: function getSidebarProps() {
            return {
              modelValue: r,
              selectYear: M
            };
          }
        }), function (_, Y) {
          return vue.openBlock(), vue.createElementBlock("div", null, [_.$slots["month-year"] ? vue.renderSlot(_.$slots, "month-year", vue.normalizeProps(vue.mergeProps({
            key: 0
          }, {
            years: vue.unref(i),
            selectYear: vue.unref(M)
          }))) : (vue.openBlock(), vue.createBlock(Gt, {
            key: 1,
            items: vue.unref(i),
            "is-last": _.autoApply && !vue.unref(P).keepActionRow,
            height: vue.unref(P).modeHeight,
            config: _.config,
            "no-overlay-focus": !!(_.noOverlayFocus || _.textInput),
            "focus-value": vue.unref(d),
            type: "year",
            "use-relative": "",
            onSelected: vue.unref(M),
            onHoverValue: vue.unref(k)
          }, vue.createSlots({
            _: 2
          }, [_.$slots["year-overlay-value"] ? {
            name: "item",
            fn: vue.withCtx(function (_ref18) {
              var $ = _ref18.item;
              return [vue.renderSlot(_.$slots, "year-overlay-value", {
                text: $.text,
                value: $.value
              })];
            }),
            key: "0"
          } : void 0]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))]);
        };
      }
    }),
    Sr = {
      key: 0,
      "class": "dp__time_input"
    },
    Pr = ["aria-label", "onKeydown", "onClick"],
    Rr = /* @__PURE__ */vue.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    Cr = /* @__PURE__ */vue.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    _r = ["aria-label", "disabled", "onKeydown", "onClick"],
    Or = ["aria-label", "onKeydown", "onClick"],
    Yr = /* @__PURE__ */vue.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    Nr = /* @__PURE__ */vue.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    Br = {
      key: 0
    },
    Ir = ["aria-label", "onKeydown"],
    Er = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "TimeInput",
      props: _objectSpread({
        hours: {
          type: Number,
          "default": 0
        },
        minutes: {
          type: Number,
          "default": 0
        },
        seconds: {
          type: Number,
          "default": 0
        },
        closeTimePickerBtn: {
          type: Object,
          "default": null
        },
        order: {
          type: Number,
          "default": 0
        },
        disabledTimesConfig: {
          type: Function,
          "default": null
        },
        validateTime: {
          type: Function,
          "default": function _default() {
            return !1;
          }
        }
      }, nt),
      emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed", "am-pm-change"],
      setup: function setup(e, _ref19) {
        var t = _ref19.expose,
          l = _ref19.emit;
        var a = l,
          n = e,
          _ht3 = ht(),
          i = _ht3.setTimePickerElements,
          r = _ht3.setTimePickerBackRef,
          _Re13 = Re(n),
          d = _Re13.defaultedAriaLabels,
          M = _Re13.defaultedTransitions,
          k = _Re13.defaultedFilters,
          P = _Re13.defaultedConfig,
          b = _Re13.defaultedRange,
          _jt2 = jt(M),
          _ = _jt2.transitionName,
          Y = _jt2.showTransition,
          $ = vue.reactive({
            hours: !1,
            minutes: !1,
            seconds: !1
          }),
          w = vue.ref("AM"),
          K = vue.ref(null),
          N = vue.ref([]);
        vue.onMounted(function () {
          a("mounted");
        });
        var E = function E(v) {
            return dateFns.set( /* @__PURE__ */new Date(), {
              hours: v.hours,
              minutes: v.minutes,
              seconds: n.enableSeconds ? v.seconds : 0,
              milliseconds: 0
            });
          },
          I = vue.computed(function () {
            return function (v) {
              return te(v, n[v]) || R(v, n[v]);
            };
          }),
          D = vue.computed(function () {
            return {
              hours: n.hours,
              minutes: n.minutes,
              seconds: n.seconds
            };
          }),
          R = function R(v, Q) {
            return b.value.enabled && !b.value.disableTimeRangeValidation ? !n.validateTime(v, Q) : !1;
          },
          V = function V(v, Q) {
            if (b.value.enabled && !b.value.disableTimeRangeValidation) {
              var he = Q ? +n["".concat(v, "Increment")] : -+n["".concat(v, "Increment")],
                L = n[v] + he;
              return !n.validateTime(v, L);
            }
            return !1;
          },
          ne = vue.computed(function () {
            return function (v) {
              return !ae(+n[v] + +n["".concat(v, "Increment")], v) || V(v, !0);
            };
          }),
          O = vue.computed(function () {
            return function (v) {
              return !ae(+n[v] - +n["".concat(v, "Increment")], v) || V(v, !1);
            };
          }),
          re = function re(v, Q) {
            return dateFns.add(dateFns.set(F(), v), Q);
          },
          se = function se(v, Q) {
            return dateFns.sub(dateFns.set(F(), v), Q);
          },
          H = vue.computed(function () {
            return {
              dp__time_col: !0,
              dp__time_col_block: !n.timePickerInline,
              dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
              dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
              dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
              dp__time_col_sec: n.enableSeconds && n.is24,
              dp__time_col_sec_with_button: n.enableSeconds && !n.is24
            };
          }),
          g = vue.computed(function () {
            var v = [{
              type: "hours"
            }, {
              type: "",
              separator: !0
            }, {
              type: "minutes"
            }];
            return n.enableSeconds ? v.concat([{
              type: "",
              separator: !0
            }, {
              type: "seconds"
            }]) : v;
          }),
          T = vue.computed(function () {
            return g.value.filter(function (v) {
              return !v.separator;
            });
          }),
          G = vue.computed(function () {
            return function (v) {
              if (v === "hours") {
                var Q = u(+n.hours);
                return {
                  text: Q < 10 ? "0".concat(Q) : "".concat(Q),
                  value: Q
                };
              }
              return {
                text: n[v] < 10 ? "0".concat(n[v]) : "".concat(n[v]),
                value: n[v]
              };
            };
          }),
          te = function te(v, Q) {
            var L;
            if (!n.disabledTimesConfig) return !1;
            var he = n.disabledTimesConfig(n.order, v === "hours" ? Q : void 0);
            return he[v] ? !!((L = he[v]) != null && L.includes(Q)) : !0;
          },
          m = function m(v) {
            var Q = n.is24 ? 24 : 12,
              he = v === "hours" ? Q : 60,
              L = +n["".concat(v, "GridIncrement")],
              C = v === "hours" && !n.is24 ? L : 0,
              U = [];
            for (var ve = C; ve < he; ve += L) U.push({
              value: ve,
              text: ve < 10 ? "0".concat(ve) : "".concat(ve)
            });
            return v === "hours" && !n.is24 && U.push({
              value: 0,
              text: "12"
            }), Ot(U, function (ve) {
              return {
                active: !1,
                disabled: k.value.times[v].includes(ve.value) || !ae(ve.value, v) || te(v, ve.value) || R(v, ve.value)
              };
            });
          },
          f = function f(v) {
            return v >= 0 ? v : 59;
          },
          z = function z(v) {
            return v >= 0 ? v : 23;
          },
          ae = function ae(v, Q) {
            var he = n.minTime ? E(pn(n.minTime)) : null,
              L = n.maxTime ? E(pn(n.maxTime)) : null,
              C = E(pn(D.value, Q, Q === "minutes" || Q === "seconds" ? f(v) : z(v)));
            return he && L ? (dateFns.isBefore(C, L) || dateFns.isEqual(C, L)) && (dateFns.isAfter(C, he) || dateFns.isEqual(C, he)) : he ? dateFns.isAfter(C, he) || dateFns.isEqual(C, he) : L ? dateFns.isBefore(C, L) || dateFns.isEqual(C, L) : !0;
          },
          s = function s(v) {
            return n["no".concat(v[0].toUpperCase() + v.slice(1), "Overlay")];
          },
          h = function h(v) {
            s(v) || ($[v] = !$[v], $[v] || a("overlay-closed"));
          },
          o = function o(v) {
            return v === "hours" ? dateFns.getHours : v === "minutes" ? dateFns.getMinutes : dateFns.getSeconds;
          },
          S = function S(v) {
            var Q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var he = Q ? re : se,
              L = Q ? +n["".concat(v, "Increment")] : -+n["".concat(v, "Increment")];
            ae(+n[v] + L, v) && a("update:".concat(v), o(v)(he(babelHelpers.defineProperty({}, v, +n[v]), babelHelpers.defineProperty({}, v, +n["".concat(v, "Increment")]))));
          },
          u = function u(v) {
            return n.is24 ? v : (v >= 12 ? w.value = "PM" : w.value = "AM", Rl(v));
          },
          B = function B() {
            w.value === "PM" ? (w.value = "AM", a("update:hours", n.hours - 12)) : (w.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", w.value);
          },
          p = function p(v) {
            $[v] = !0;
          },
          J = function J(v, Q, he) {
            if (v && n.arrowNavigation) {
              Array.isArray(N.value[Q]) ? N.value[Q][he] = v : N.value[Q] = [v];
              var L = N.value.reduce(function (C, U) {
                return U.map(function (ve, Me) {
                  return [].concat(babelHelpers.toConsumableArray(C[Me] || []), [U[Me]]);
                });
              }, []);
              r(n.closeTimePickerBtn), K.value && (L[1] = L[1].concat(K.value)), i(L, n.order);
            }
          },
          le = function le(v, Q) {
            return h(v), v === "hours" && !n.is24 ? a("update:".concat(v), w.value === "PM" ? Q + 12 : Q) : a("update:".concat(v), Q);
          };
        return t({
          openChildCmp: p
        }), function (v, Q) {
          var he;
          return v.disabled ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("div", Sr, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(g.value, function (L, C) {
            var U, ve, Me;
            return vue.openBlock(), vue.createElementBlock("div", {
              key: C,
              "class": vue.normalizeClass(H.value)
            }, [L.separator ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 0
            }, [vue.createTextVNode(" : ")], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [vue.createElementVNode("button", {
              ref_for: !0,
              ref: function ref(j) {
                return J(j, C, 0);
              },
              type: "button",
              "class": vue.normalizeClass({
                dp__btn: !0,
                dp__inc_dec_button: !v.timePickerInline,
                dp__inc_dec_button_inline: v.timePickerInline,
                dp__tp_inline_btn_top: v.timePickerInline,
                dp__inc_dec_button_disabled: ne.value(L.type)
              }),
              "aria-label": (U = vue.unref(d)) == null ? void 0 : U.incrementValue(L.type),
              tabindex: "0",
              onKeydown: [vue.withKeys(vue.withModifiers(function (j) {
                return S(L.type);
              }, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(function (j) {
                return S(L.type);
              }, ["prevent"]), ["space"])],
              onClick: function onClick(j) {
                return S(L.type);
              }
            }, [n.timePickerInline ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [Rr, Cr], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 0
            }, [v.$slots["arrow-up"] ? vue.renderSlot(v.$slots, "arrow-up", {
              key: 0
            }) : vue.createCommentVNode("", !0), v.$slots["arrow-up"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(En), {
              key: 1
            }))], 64))], 42, Pr), vue.createElementVNode("button", {
              ref_for: !0,
              ref: function ref(j) {
                return J(j, C, 1);
              },
              type: "button",
              "aria-label": (ve = vue.unref(d)) == null ? void 0 : ve.openTpOverlay(L.type),
              "class": vue.normalizeClass({
                dp__time_display: !0,
                dp__time_display_block: !v.timePickerInline,
                dp__time_display_inline: v.timePickerInline,
                "dp--time-invalid": I.value(L.type),
                "dp--time-overlay-btn": !I.value(L.type)
              }),
              disabled: s(L.type),
              tabindex: "0",
              onKeydown: [vue.withKeys(vue.withModifiers(function (j) {
                return h(L.type);
              }, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(function (j) {
                return h(L.type);
              }, ["prevent"]), ["space"])],
              onClick: function onClick(j) {
                return h(L.type);
              }
            }, [v.$slots[L.type] ? vue.renderSlot(v.$slots, L.type, {
              key: 0,
              text: G.value(L.type).text,
              value: G.value(L.type).value
            }) : vue.createCommentVNode("", !0), v.$slots[L.type] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [vue.createTextVNode(vue.toDisplayString(G.value(L.type).text), 1)], 64))], 42, _r), vue.createElementVNode("button", {
              ref_for: !0,
              ref: function ref(j) {
                return J(j, C, 2);
              },
              type: "button",
              "class": vue.normalizeClass({
                dp__btn: !0,
                dp__inc_dec_button: !v.timePickerInline,
                dp__inc_dec_button_inline: v.timePickerInline,
                dp__tp_inline_btn_bottom: v.timePickerInline,
                dp__inc_dec_button_disabled: O.value(L.type)
              }),
              "aria-label": (Me = vue.unref(d)) == null ? void 0 : Me.decrementValue(L.type),
              tabindex: "0",
              onKeydown: [vue.withKeys(vue.withModifiers(function (j) {
                return S(L.type, !1);
              }, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(function (j) {
                return S(L.type, !1);
              }, ["prevent"]), ["space"])],
              onClick: function onClick(j) {
                return S(L.type, !1);
              }
            }, [n.timePickerInline ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [Yr, Nr], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 0
            }, [v.$slots["arrow-down"] ? vue.renderSlot(v.$slots, "arrow-down", {
              key: 0
            }) : vue.createCommentVNode("", !0), v.$slots["arrow-down"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Fn), {
              key: 1
            }))], 64))], 42, Or)], 64))], 2);
          }), 128)), v.is24 ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("div", Br, [v.$slots["am-pm-button"] ? vue.renderSlot(v.$slots, "am-pm-button", {
            key: 0,
            toggle: B,
            value: w.value
          }) : vue.createCommentVNode("", !0), v.$slots["am-pm-button"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: K,
            type: "button",
            "class": "dp__pm_am_button",
            role: "button",
            "aria-label": (he = vue.unref(d)) == null ? void 0 : he.amPmButton,
            tabindex: "0",
            onClick: B,
            onKeydown: [vue.withKeys(vue.withModifiers(B, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(B, ["prevent"]), ["space"])]
          }, vue.toDisplayString(w.value), 41, Ir))])), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(T.value, function (L, C) {
            return vue.openBlock(), vue.createBlock(vue.Transition, {
              key: C,
              name: vue.unref(_)($[L.type]),
              css: vue.unref(Y)
            }, {
              "default": vue.withCtx(function () {
                return [$[L.type] ? (vue.openBlock(), vue.createBlock(Gt, {
                  key: 0,
                  items: m(L.type),
                  "is-last": v.autoApply && !vue.unref(P).keepActionRow,
                  "esc-close": v.escClose,
                  type: L.type,
                  "text-input": v.textInput,
                  config: v.config,
                  "arrow-navigation": v.arrowNavigation,
                  onSelected: function onSelected(U) {
                    return le(L.type, U);
                  },
                  onToggle: function onToggle(U) {
                    return h(L.type);
                  },
                  onResetFlow: Q[0] || (Q[0] = function (U) {
                    return v.$emit("reset-flow");
                  })
                }, vue.createSlots({
                  "button-icon": vue.withCtx(function () {
                    return [v.$slots["clock-icon"] ? vue.renderSlot(v.$slots, "clock-icon", {
                      key: 0
                    }) : vue.createCommentVNode("", !0), v.$slots["clock-icon"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(v.timePickerInline ? vue.unref(Bt) : vue.unref(In)), {
                      key: 1
                    }))];
                  }),
                  _: 2
                }, [v.$slots["".concat(L.type, "-overlay-value")] ? {
                  name: "item",
                  fn: vue.withCtx(function (_ref20) {
                    var U = _ref20.item;
                    return [vue.renderSlot(v.$slots, "".concat(L.type, "-overlay-value"), {
                      text: U.text,
                      value: U.value
                    })];
                  }),
                  key: "0"
                } : void 0]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : vue.createCommentVNode("", !0)];
              }),
              _: 2
            }, 1032, ["name", "css"]);
          }), 128))]));
        };
      }
    }),
    Fr = {
      "class": "dp--tp-wrap"
    },
    Hr = ["aria-label", "tabindex"],
    Vr = ["tabindex"],
    Lr = ["aria-label"],
    Fa = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "TimePicker",
      props: _objectSpread({
        hours: {
          type: [Number, Array],
          "default": 0
        },
        minutes: {
          type: [Number, Array],
          "default": 0
        },
        seconds: {
          type: [Number, Array],
          "default": 0
        },
        disabledTimesConfig: {
          type: Function,
          "default": null
        },
        validateTime: {
          type: Function,
          "default": function _default() {
            return !1;
          }
        }
      }, nt),
      emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-opened", "overlay-closed", "am-pm-change"],
      setup: function setup(e, _ref21) {
        var t = _ref21.expose,
          l = _ref21.emit;
        var a = l,
          n = e,
          _ht4 = ht(),
          i = _ht4.buildMatrix,
          r = _ht4.setTimePicker,
          d = vue.useSlots(),
          _Re14 = Re(n),
          M = _Re14.defaultedTransitions,
          k = _Re14.defaultedAriaLabels,
          P = _Re14.defaultedTextInput,
          b = _Re14.defaultedConfig,
          _ = _Re14.defaultedRange,
          _jt3 = jt(M),
          Y = _jt3.transitionName,
          $ = _jt3.showTransition,
          _on3 = on(),
          w = _on3.hideNavigationButtons,
          K = vue.ref(null),
          N = vue.ref(null),
          E = vue.ref([]),
          I = vue.ref(null);
        vue.onMounted(function () {
          a("mount"), !n.timePicker && n.arrowNavigation ? i([Ne(K.value)], "time") : r(!0, n.timePicker);
        });
        var D = vue.computed(function () {
            return _.value.enabled && n.modelAuto ? $a(n.internalModelValue) : !0;
          }),
          R = vue.ref(!1),
          V = function V(m) {
            return {
              hours: Array.isArray(n.hours) ? n.hours[m] : n.hours,
              minutes: Array.isArray(n.minutes) ? n.minutes[m] : n.minutes,
              seconds: Array.isArray(n.seconds) ? n.seconds[m] : n.seconds
            };
          },
          ne = vue.computed(function () {
            var m = [];
            if (_.value.enabled) for (var f = 0; f < 2; f++) m.push(V(f));else m.push(V(0));
            return m;
          }),
          O = function O(m) {
            var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            f || a("reset-flow"), R.value = m, a(m ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && r(m), vue.nextTick(function () {
              z !== "" && E.value[0] && E.value[0].openChildCmp(z);
            });
          },
          re = vue.computed(function () {
            return {
              dp__btn: !0,
              dp__button: !0,
              dp__button_bottom: n.autoApply && !b.value.keepActionRow
            };
          }),
          se = Ge(d, "timePicker"),
          H = function H(m, f, z) {
            return _.value.enabled ? f === 0 ? [m, ne.value[1][z]] : [ne.value[0][z], m] : m;
          },
          g = function g(m) {
            a("update:hours", m);
          },
          T = function T(m) {
            a("update:minutes", m);
          },
          G = function G(m) {
            a("update:seconds", m);
          },
          te = function te() {
            if (I.value && !P.value.enabled && !n.noOverlayFocus) {
              var m = Ta(I.value);
              m && m.focus({
                preventScroll: !0
              });
            }
          };
        return t({
          toggleTimePicker: O
        }), function (m, f) {
          var z;
          return vue.openBlock(), vue.createElementBlock("div", Fr, [!m.timePicker && !m.timePickerInline ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            ref_key: "openTimePickerBtn",
            ref: K,
            type: "button",
            "class": vue.normalizeClass(re.value),
            "aria-label": (z = vue.unref(k)) == null ? void 0 : z.openTimePicker,
            tabindex: m.noOverlayFocus ? void 0 : 0,
            onKeydown: [f[0] || (f[0] = vue.withKeys(function (ae) {
              return O(!0);
            }, ["enter"])), f[1] || (f[1] = vue.withKeys(function (ae) {
              return O(!0);
            }, ["space"]))],
            onClick: f[2] || (f[2] = function (ae) {
              return O(!0);
            })
          }, [m.$slots["clock-icon"] ? vue.renderSlot(m.$slots, "clock-icon", {
            key: 0
          }) : vue.createCommentVNode("", !0), m.$slots["clock-icon"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(In), {
            key: 1
          }))], 42, Hr)), [[vue.vShow, !vue.unref(w)(m.hideNavigation, "time")]]) : vue.createCommentVNode("", !0), vue.createVNode(vue.Transition, {
            name: vue.unref(Y)(R.value),
            css: vue.unref($) && !m.timePickerInline
          }, {
            "default": vue.withCtx(function () {
              var ae;
              return [R.value || m.timePicker || m.timePickerInline ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: I,
                "class": vue.normalizeClass({
                  dp__overlay: !m.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !m.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: vue.normalizeStyle(m.timePicker ? {
                  height: "".concat(vue.unref(b).modeHeight, "px")
                } : void 0),
                tabindex: m.timePickerInline ? void 0 : 0
              }, [vue.createElementVNode("div", {
                "class": vue.normalizeClass(m.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
                style: {
                  display: "flex"
                }
              }, [m.$slots["time-picker-overlay"] ? vue.renderSlot(m.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: g,
                setMinutes: T,
                setSeconds: G
              }) : vue.createCommentVNode("", !0), m.$slots["time-picker-overlay"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("div", {
                key: 1,
                "class": vue.normalizeClass(m.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(ne.value, function (s, h) {
                return vue.withDirectives((vue.openBlock(), vue.createBlock(Er, vue.mergeProps({
                  key: h
                }, _objectSpread(_objectSpread({}, m.$props), {}, {
                  order: h,
                  hours: s.hours,
                  minutes: s.minutes,
                  seconds: s.seconds,
                  closeTimePickerBtn: N.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: h === 0 ? m.fixedStart : m.fixedEnd
                }), {
                  ref_for: !0,
                  ref_key: "timeInputRefs",
                  ref: E,
                  "validate-time": function validateTime(o, S) {
                    return e.validateTime(o, H(S, h, o));
                  },
                  "onUpdate:hours": function onUpdateHours(o) {
                    return g(H(o, h, "hours"));
                  },
                  "onUpdate:minutes": function onUpdateMinutes(o) {
                    return T(H(o, h, "minutes"));
                  },
                  "onUpdate:seconds": function onUpdateSeconds(o) {
                    return G(H(o, h, "seconds"));
                  },
                  onMounted: te,
                  onOverlayClosed: te,
                  onAmPmChange: f[3] || (f[3] = function (o) {
                    return m.$emit("am-pm-change", o);
                  })
                }), vue.createSlots({
                  _: 2
                }, [vue.renderList(vue.unref(se), function (o, S) {
                  return {
                    name: o,
                    fn: vue.withCtx(function (u) {
                      return [vue.renderSlot(m.$slots, o, vue.normalizeProps(vue.guardReactiveProps(u)))];
                    })
                  };
                })]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [[vue.vShow, h === 0 ? !0 : D.value]]);
              }), 128))], 2)), !m.timePicker && !m.timePickerInline ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                key: 2,
                ref_key: "closeTimePickerBtn",
                ref: N,
                type: "button",
                "class": vue.normalizeClass(re.value),
                "aria-label": (ae = vue.unref(k)) == null ? void 0 : ae.closeTimePicker,
                tabindex: "0",
                onKeydown: [f[4] || (f[4] = vue.withKeys(function (s) {
                  return O(!1);
                }, ["enter"])), f[5] || (f[5] = vue.withKeys(function (s) {
                  return O(!1);
                }, ["space"]))],
                onClick: f[6] || (f[6] = function (s) {
                  return O(!1);
                })
              }, [m.$slots["calendar-icon"] ? vue.renderSlot(m.$slots, "calendar-icon", {
                key: 0
              }) : vue.createCommentVNode("", !0), m.$slots["calendar-icon"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Bt), {
                key: 1
              }))], 42, Lr)), [[vue.vShow, !vue.unref(w)(m.hideNavigation, "time")]]) : vue.createCommentVNode("", !0)], 2)], 14, Vr)) : vue.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])]);
        };
      }
    }),
    Ha = function Ha(e, t, l, a) {
      var _Re15 = Re(e),
        n = _Re15.defaultedRange,
        i = function i(I, D) {
          return Array.isArray(t[I]) ? t[I][D] : t[I];
        },
        r = function r(I) {
          return e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[I] : t.seconds : 0;
        },
        d = function d(I, D) {
          return I ? D !== void 0 ? gt(I, i("hours", D), i("minutes", D), r(D)) : gt(I, t.hours, t.minutes, r()) : dateFns.setSeconds(F(), r(D));
        },
        M = function M(I, D) {
          t[I] = D;
        },
        k = vue.computed(function () {
          return e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? !l.value.some(function (I) {
            return !I;
          }) : !1 : n.value.enabled;
        }),
        P = function P(I, D) {
          var R = Object.fromEntries(Object.keys(t).map(function (V) {
            return V === I ? [V, D] : [V, t[V]].slice();
          }));
          if (k.value && !n.value.disableTimeRangeValidation) {
            var V = function V(O) {
                return l.value ? gt(l.value[O], R.hours[O], R.minutes[O], R.seconds[O]) : null;
              },
              ne = function ne(O) {
                return dateFns.setMilliseconds(l.value[O], 0);
              };
            return !(ye(V(0), V(1)) && (dateFns.isAfter(V(0), ne(1)) || dateFns.isBefore(V(1), ne(0))));
          }
          return !0;
        },
        b = function b(I, D) {
          P(I, D) && (M(I, D), a && a());
        },
        _ = function _(I) {
          b("hours", I);
        },
        Y = function Y(I) {
          b("minutes", I);
        },
        $ = function $(I) {
          b("seconds", I);
        },
        w = function w(I, D, R, V) {
          D && _(I), !D && !R && Y(I), R && $(I), l.value && V(l.value);
        },
        K = function K(I) {
          if (I) {
            var D = Array.isArray(I),
              R = D ? [+I[0].hours, +I[1].hours] : +I.hours,
              V = D ? [+I[0].minutes, +I[1].minutes] : +I.minutes,
              ne = D ? [+I[0].seconds, +I[1].seconds] : +I.seconds;
            M("hours", R), M("minutes", V), e.enableSeconds && M("seconds", ne);
          }
        },
        N = function N(I, D) {
          var R = {
            hours: Array.isArray(t.hours) ? t.hours[I] : t.hours,
            disabledArr: []
          };
          return (D || D === 0) && (R.hours = D), Array.isArray(e.disabledTimes) && (R.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[I]) ? e.disabledTimes[I] : e.disabledTimes), R;
        },
        E = vue.computed(function () {
          return function (I, D) {
            var R;
            if (Array.isArray(e.disabledTimes)) {
              var _ref22, _ref23;
              var _N4 = N(I, D),
                V = _N4.disabledArr,
                ne = _N4.hours,
                O = V.filter(function (re) {
                  return +re.hours === ne;
                });
              return ((R = O[0]) == null ? void 0 : R.minutes) === "*" ? {
                hours: [ne],
                minutes: void 0,
                seconds: void 0
              } : {
                hours: [],
                minutes: (_ref22 = O == null ? void 0 : O.map(function (re) {
                  return +re.minutes;
                })) !== null && _ref22 !== void 0 ? _ref22 : [],
                seconds: (_ref23 = O == null ? void 0 : O.map(function (re) {
                  return re.seconds ? +re.seconds : void 0;
                })) !== null && _ref23 !== void 0 ? _ref23 : []
              };
            }
            return {
              hours: [],
              minutes: [],
              seconds: []
            };
          };
        });
      return {
        setTime: M,
        updateHours: _,
        updateMinutes: Y,
        updateSeconds: $,
        getSetDateTime: d,
        updateTimeValues: w,
        getSecondsValue: r,
        assignStartTime: K,
        validateTime: P,
        disabledTimesConfig: E
      };
    },
    Wr = function Wr(e, t) {
      var _Kt3 = Kt(e, t),
        l = _Kt3.modelValue,
        a = _Kt3.time,
        _Re16 = Re(e),
        n = _Re16.defaultedStartTime,
        i = _Re16.defaultedRange,
        _Ha = Ha(e, a, l),
        r = _Ha.updateTimeValues,
        d = _Ha.getSetDateTime,
        M = _Ha.setTime,
        k = _Ha.assignStartTime,
        P = _Ha.disabledTimesConfig,
        b = _Ha.validateTime,
        _ = function _(D) {
          var R = D.hours,
            V = D.minutes,
            ne = D.seconds;
          return {
            hours: +R,
            minutes: +V,
            seconds: ne ? +ne : 0
          };
        },
        Y = function Y() {
          if (e.startTime) {
            if (Array.isArray(e.startTime)) {
              var R = _(e.startTime[0]),
                V = _(e.startTime[1]);
              return [dateFns.set(F(), R), dateFns.set(F(), V)];
            }
            var D = _(e.startTime);
            return dateFns.set(F(), D);
          }
          return i.value.enabled ? [null, null] : null;
        },
        $ = function $() {
          if (i.value.enabled) {
            var _Y = Y(),
              _Y2 = babelHelpers.slicedToArray(_Y, 2),
              D = _Y2[0],
              R = _Y2[1];
            l.value = [d(D, 0), d(R, 1)];
          } else l.value = d(Y());
        },
        w = function w(D) {
          return Array.isArray(D) ? [Mt(F(D[0])), Mt(F(D[1]))] : [Mt(D !== null && D !== void 0 ? D : F())];
        },
        K = function K(D, R, V) {
          M("hours", D), M("minutes", R), M("seconds", e.enableSeconds ? V : 0);
        },
        N = function N() {
          var _w2 = w(l.value),
            _w3 = babelHelpers.slicedToArray(_w2, 2),
            D = _w3[0],
            R = _w3[1];
          return i.value.enabled ? K([D.hours, R.hours], [D.minutes, R.minutes], [D.seconds, R.minutes]) : K(D.hours, D.minutes, D.seconds);
        };
      vue.onMounted(function () {
        if (!e.shadow) return k(n.value), l.value ? N() : $();
      });
      var E = function E() {
        Array.isArray(l.value) ? l.value = l.value.map(function (D, R) {
          return D && d(D, R);
        }) : l.value = d(l.value), t("time-update");
      };
      return {
        modelValue: l,
        time: a,
        disabledTimesConfig: P,
        updateTime: function updateTime(D) {
          var R = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var V = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          r(D, R, V, E);
        },
        validateTime: b
      };
    },
    Ur = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "TimePickerSolo",
      props: _objectSpread({}, nt),
      emits: ["update:internal-model-value", "time-update", "am-pm-change"],
      setup: function setup(e, _ref24) {
        var t = _ref24.expose,
          l = _ref24.emit;
        var a = l,
          n = e,
          i = vue.useSlots(),
          r = Ge(i, "timePicker"),
          _Wr = Wr(n, a),
          d = _Wr.time,
          M = _Wr.modelValue,
          k = _Wr.disabledTimesConfig,
          P = _Wr.updateTime,
          b = _Wr.validateTime;
        return t({
          getSidebarProps: function getSidebarProps() {
            return {
              modelValue: M,
              time: d,
              updateTime: P
            };
          }
        }), function (Y, $) {
          return vue.openBlock(), vue.createBlock(un, {
            "multi-calendars": 0,
            stretch: ""
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(Fa, vue.mergeProps(Y.$props, {
                hours: vue.unref(d).hours,
                minutes: vue.unref(d).minutes,
                seconds: vue.unref(d).seconds,
                "internal-model-value": Y.internalModelValue,
                "disabled-times-config": vue.unref(k),
                "validate-time": vue.unref(b),
                "onUpdate:hours": $[0] || ($[0] = function (w) {
                  return vue.unref(P)(w);
                }),
                "onUpdate:minutes": $[1] || ($[1] = function (w) {
                  return vue.unref(P)(w, !1);
                }),
                "onUpdate:seconds": $[2] || ($[2] = function (w) {
                  return vue.unref(P)(w, !1, !0);
                }),
                onAmPmChange: $[3] || ($[3] = function (w) {
                  return Y.$emit("am-pm-change", w);
                })
              }), vue.createSlots({
                _: 2
              }, [vue.renderList(vue.unref(r), function (w, K) {
                return {
                  name: w,
                  fn: vue.withCtx(function (N) {
                    return [vue.renderSlot(Y.$slots, w, vue.normalizeProps(vue.guardReactiveProps(N)))];
                  })
                };
              })]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])];
            }),
            _: 3
          });
        };
      }
    }),
    zr = {
      "class": "dp__month_year_row"
    },
    jr = ["aria-label", "onClick", "onKeydown"],
    Kr = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "DpHeader",
      props: _objectSpread({
        month: {
          type: Number,
          "default": 0
        },
        year: {
          type: Number,
          "default": 0
        },
        instance: {
          type: Number,
          "default": 0
        },
        years: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        months: {
          type: Array,
          "default": function _default() {
            return [];
          }
        }
      }, nt),
      emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
      setup: function setup(e, _ref25) {
        var t = _ref25.expose,
          l = _ref25.emit;
        var a = l,
          n = e,
          _Re17 = Re(n),
          i = _Re17.defaultedTransitions,
          r = _Re17.defaultedAriaLabels,
          d = _Re17.defaultedMultiCalendars,
          M = _Re17.defaultedFilters,
          k = _Re17.defaultedConfig,
          P = _Re17.defaultedHighlight,
          _jt4 = jt(i),
          b = _jt4.transitionName,
          _ = _jt4.showTransition,
          _ht5 = ht(),
          Y = _ht5.buildMatrix,
          _nr = nr(n, a),
          $ = _nr.handleMonthYearChange,
          w = _nr.isDisabled,
          K = _nr.updateMonthYear,
          _on4 = on(),
          N = _on4.showLeftIcon,
          E = _on4.showRightIcon,
          I = vue.ref(!1),
          D = vue.ref(!1),
          R = vue.ref([null, null, null, null]);
        vue.onMounted(function () {
          a("mount");
        });
        var V = function V(s) {
            return {
              get: function get() {
                return n[s];
              },
              set: function set(h) {
                var _a2;
                var o = s === Xe.month ? Xe.year : Xe.month;
                a("update-month-year", (_a2 = {}, babelHelpers.defineProperty(_a2, s, h), babelHelpers.defineProperty(_a2, o, n[o]), _a2)), s === Xe.month ? G(!0) : te(!0);
              }
            };
          },
          ne = vue.computed(V(Xe.month)),
          O = vue.computed(V(Xe.year)),
          re = vue.computed(function () {
            return function (s) {
              return {
                month: n.month,
                year: n.year,
                items: s === Xe.month ? n.months : n.years,
                instance: n.instance,
                updateMonthYear: K,
                toggle: s === Xe.month ? G : te
              };
            };
          }),
          se = vue.computed(function () {
            var s = n.months.find(function (h) {
              return h.value === n.month;
            });
            return s || {
              text: "",
              value: 0
            };
          }),
          H = vue.computed(function () {
            return Ot(n.months, function (s) {
              var h = n.month === s.value,
                o = Ut(s.value, Aa(n.year, n.minDate), Sa(n.year, n.maxDate)) || M.value.months.includes(s.value),
                S = Ya(P.value, s.value, n.year);
              return {
                active: h,
                disabled: o,
                highlighted: S
              };
            });
          }),
          g = vue.computed(function () {
            return Ot(n.years, function (s) {
              var h = n.year === s.value,
                o = Ut(s.value, Yt(n.minDate), Yt(n.maxDate)) || M.value.years.includes(s.value),
                S = Un(P.value, s.value);
              return {
                active: h,
                disabled: o,
                highlighted: S
              };
            });
          }),
          T = function T(s, h) {
            h !== void 0 ? s.value = h : s.value = !s.value, s.value || a("overlay-closed");
          },
          G = function G() {
            var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var h = arguments.length > 1 ? arguments[1] : undefined;
            m(s), T(I, h);
          },
          te = function te() {
            var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var h = arguments.length > 1 ? arguments[1] : undefined;
            m(s), T(D, h);
          },
          m = function m(s) {
            s || a("reset-flow");
          },
          f = function f(s, h) {
            n.arrowNavigation && (R.value[h] = Ne(s), Y(R.value, "monthYear"));
          },
          z = vue.computed(function () {
            var s, h;
            return [{
              type: Xe.month,
              index: 1,
              toggle: G,
              modelValue: ne.value,
              updateModelValue: function updateModelValue(o) {
                return ne.value = o;
              },
              text: se.value.text,
              showSelectionGrid: I.value,
              items: H.value,
              ariaLabel: (s = r.value) == null ? void 0 : s.openMonthsOverlay
            }, {
              type: Xe.year,
              index: 2,
              toggle: te,
              modelValue: O.value,
              updateModelValue: function updateModelValue(o) {
                return O.value = o;
              },
              text: n.year,
              showSelectionGrid: D.value,
              items: g.value,
              ariaLabel: (h = r.value) == null ? void 0 : h.openYearsOverlay
            }];
          }),
          ae = vue.computed(function () {
            return n.disableYearSelect ? [z.value[0]] : n.yearFirst ? babelHelpers.toConsumableArray(z.value).reverse() : z.value;
          });
        return t({
          toggleMonthPicker: G,
          toggleYearPicker: te,
          handleMonthYearChange: $
        }), function (s, h) {
          var o, S, u;
          return vue.openBlock(), vue.createElementBlock("div", zr, [s.$slots["month-year"] ? vue.renderSlot(s.$slots, "month-year", vue.normalizeProps(vue.mergeProps({
            key: 0
          }, {
            month: e.month,
            year: e.year,
            months: e.months,
            years: e.years,
            updateMonthYear: vue.unref(K),
            handleMonthYearChange: vue.unref($),
            instance: e.instance
          }))) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.unref(N)(vue.unref(d), e.instance) && !s.vertical ? (vue.openBlock(), vue.createBlock(Ht, {
            key: 0,
            "aria-label": (o = vue.unref(r)) == null ? void 0 : o.prevMonth,
            disabled: vue.unref(w)(!1),
            onActivate: h[0] || (h[0] = function (B) {
              return vue.unref($)(!1, !0);
            }),
            onSetRef: h[1] || (h[1] = function (B) {
              return f(B, 0);
            })
          }, {
            "default": vue.withCtx(function () {
              return [s.$slots["arrow-left"] ? vue.renderSlot(s.$slots, "arrow-left", {
                key: 0
              }) : vue.createCommentVNode("", !0), s.$slots["arrow-left"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Nn), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : vue.createCommentVNode("", !0), vue.createElementVNode("div", {
            "class": vue.normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: s.disableYearSelect
            }])
          }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(ae.value, function (B, p) {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: B.type
            }, [vue.createElementVNode("button", {
              ref_for: !0,
              ref: function ref(J) {
                return f(J, p + 1);
              },
              type: "button",
              "class": "dp__btn dp__month_year_select",
              tabindex: "0",
              "aria-label": B.ariaLabel,
              onClick: B.toggle,
              onKeydown: [vue.withKeys(vue.withModifiers(B.toggle, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(B.toggle, ["prevent"]), ["space"])]
            }, [s.$slots[B.type] ? vue.renderSlot(s.$slots, B.type, {
              key: 0,
              text: B.text,
              value: n[B.type]
            }) : vue.createCommentVNode("", !0), s.$slots[B.type] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [vue.createTextVNode(vue.toDisplayString(B.text), 1)], 64))], 40, jr), vue.createVNode(vue.Transition, {
              name: vue.unref(b)(B.showSelectionGrid),
              css: vue.unref(_)
            }, {
              "default": vue.withCtx(function () {
                return [B.showSelectionGrid ? (vue.openBlock(), vue.createBlock(Gt, {
                  key: 0,
                  items: B.items,
                  "arrow-navigation": s.arrowNavigation,
                  "hide-navigation": s.hideNavigation,
                  "is-last": s.autoApply && !vue.unref(k).keepActionRow,
                  "skip-button-ref": !1,
                  config: s.config,
                  type: B.type,
                  "header-refs": [],
                  "esc-close": s.escClose,
                  "menu-wrap-ref": s.menuWrapRef,
                  "text-input": s.textInput,
                  onSelected: B.updateModelValue,
                  onToggle: B.toggle
                }, vue.createSlots({
                  "button-icon": vue.withCtx(function () {
                    return [s.$slots["calendar-icon"] ? vue.renderSlot(s.$slots, "calendar-icon", {
                      key: 0
                    }) : vue.createCommentVNode("", !0), s.$slots["calendar-icon"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(Bt), {
                      key: 1
                    }))];
                  }),
                  _: 2
                }, [s.$slots["".concat(B.type, "-overlay-value")] ? {
                  name: "item",
                  fn: vue.withCtx(function (_ref26) {
                    var J = _ref26.item;
                    return [vue.renderSlot(s.$slots, "".concat(B.type, "-overlay-value"), {
                      text: J.text,
                      value: J.value
                    })];
                  }),
                  key: "0"
                } : void 0, s.$slots["".concat(B.type, "-overlay")] ? {
                  name: "overlay",
                  fn: vue.withCtx(function () {
                    return [vue.renderSlot(s.$slots, "".concat(B.type, "-overlay"), vue.normalizeProps(vue.guardReactiveProps(re.value(B.type))))];
                  }),
                  key: "1"
                } : void 0, s.$slots["".concat(B.type, "-overlay-header")] ? {
                  name: "header",
                  fn: vue.withCtx(function () {
                    return [vue.renderSlot(s.$slots, "".concat(B.type, "-overlay-header"), {
                      toggle: B.toggle
                    })];
                  }),
                  key: "2"
                } : void 0]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "onSelected", "onToggle"])) : vue.createCommentVNode("", !0)];
              }),
              _: 2
            }, 1032, ["name", "css"])], 64);
          }), 128))], 2), vue.unref(N)(vue.unref(d), e.instance) && s.vertical ? (vue.openBlock(), vue.createBlock(Ht, {
            key: 1,
            "aria-label": (S = vue.unref(r)) == null ? void 0 : S.prevMonth,
            disabled: vue.unref(w)(!1),
            onActivate: h[2] || (h[2] = function (B) {
              return vue.unref($)(!1, !0);
            })
          }, {
            "default": vue.withCtx(function () {
              return [s.$slots["arrow-up"] ? vue.renderSlot(s.$slots, "arrow-up", {
                key: 0
              }) : vue.createCommentVNode("", !0), s.$slots["arrow-up"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.unref(En), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : vue.createCommentVNode("", !0), vue.unref(E)(vue.unref(d), e.instance) ? (vue.openBlock(), vue.createBlock(Ht, {
            key: 2,
            ref: "rightIcon",
            disabled: vue.unref(w)(!0),
            "aria-label": (u = vue.unref(r)) == null ? void 0 : u.nextMonth,
            onActivate: h[3] || (h[3] = function (B) {
              return vue.unref($)(!0, !0);
            }),
            onSetRef: h[4] || (h[4] = function (B) {
              return f(B, s.disableYearSelect ? 2 : 3);
            })
          }, {
            "default": vue.withCtx(function () {
              return [s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? vue.renderSlot(s.$slots, s.vertical ? "arrow-down" : "arrow-right", {
                key: 0
              }) : vue.createCommentVNode("", !0), s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(s.vertical ? vue.unref(Fn) : vue.unref(Bn)), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["disabled", "aria-label"])) : vue.createCommentVNode("", !0)], 64))]);
        };
      }
    }),
    Gr = ["aria-label"],
    qr = {
      "class": "dp__calendar_header",
      role: "row"
    },
    Qr = {
      key: 0,
      "class": "dp__calendar_header_item",
      role: "gridcell"
    },
    Zr = /* @__PURE__ */vue.createElementVNode("div", {
      "class": "dp__calendar_header_separator"
    }, null, -1),
    Xr = ["aria-label"],
    Jr = {
      key: 0,
      role: "gridcell",
      "class": "dp__calendar_item dp__week_num"
    },
    xr = {
      "class": "dp__cell_inner"
    },
    eo = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"],
    to = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "DpCalendar",
      props: _objectSpread({
        mappedDates: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        instance: {
          type: Number,
          "default": 0
        },
        month: {
          type: Number,
          "default": 0
        },
        year: {
          type: Number,
          "default": 0
        }
      }, nt),
      emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space", "tooltip-open", "tooltip-close"],
      setup: function setup(e, _ref27) {
        var t = _ref27.expose,
          l = _ref27.emit;
        var a = l,
          n = e,
          _ht6 = ht(),
          i = _ht6.buildMultiLevelMatrix,
          _Re18 = Re(n),
          r = _Re18.defaultedTransitions,
          d = _Re18.defaultedConfig,
          M = _Re18.defaultedAriaLabels,
          k = _Re18.defaultedMultiCalendars,
          P = _Re18.defaultedWeekNumbers,
          b = vue.ref(null),
          _ = vue.ref({
            bottom: "",
            left: "",
            transform: ""
          }),
          Y = vue.ref([]),
          $ = vue.ref(null),
          w = vue.ref(!0),
          K = vue.ref(""),
          N = vue.ref({
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0
          }),
          E = vue.ref([]),
          I = vue.ref({
            left: "50%"
          }),
          D = vue.computed(function () {
            return n.calendar ? n.calendar(n.mappedDates) : n.mappedDates;
          }),
          R = vue.computed(function () {
            return n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Pl(n.formatLocale, n.locale, +n.weekStart);
          });
        vue.onMounted(function () {
          a("mount", {
            cmp: "calendar",
            refs: Y
          }), d.value.noSwipe || $.value && ($.value.addEventListener("touchstart", m, {
            passive: !1
          }), $.value.addEventListener("touchend", f, {
            passive: !1
          }), $.value.addEventListener("touchmove", z, {
            passive: !1
          })), n.monthChangeOnScroll && $.value && $.value.addEventListener("wheel", h, {
            passive: !1
          });
        });
        var V = function V(p) {
            return p ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous";
          },
          ne = function ne(p, J) {
            if (n.transitions) {
              var le = Ve(it(F(), n.month, n.year));
              K.value = _e(Ve(it(F(), p, J)), le) ? r.value[V(!0)] : r.value[V(!1)], w.value = !1, vue.nextTick(function () {
                w.value = !0;
              });
            }
          },
          O = vue.computed(function () {
            return babelHelpers.defineProperty({}, n.calendarClassName, !!n.calendarClassName);
          }),
          re = vue.computed(function () {
            return function (p) {
              var J = Cl(p);
              return {
                dp__marker_dot: J.type === "dot",
                dp__marker_line: J.type === "line"
              };
            };
          }),
          se = vue.computed(function () {
            return function (p) {
              return ye(p, b.value);
            };
          }),
          H = vue.computed(function () {
            return {
              dp__calendar: !0,
              dp__calendar_next: k.value.count > 0 && n.instance !== 0
            };
          }),
          g = vue.computed(function () {
            return function (p) {
              return n.hideOffsetDates ? p.current : !0;
            };
          }),
          T = function T(p) {
            return dateFns.format(p, "yyyy-MM-dd");
          },
          G = /*#__PURE__*/function () {
            var _ref29 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(p, J, le) {
              var v, Q, he, _he$getBoundingClient, L, C, U, ve, _E$value$0$getBoundin, Me, j;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(a("set-hover-date", p), (Q = (v = p.marker) == null ? void 0 : v.tooltip) != null && Q.length)) {
                      _context.next = 12;
                      break;
                    }
                    he = Ne(Y.value[J][le]);
                    if (!he) {
                      _context.next = 12;
                      break;
                    }
                    _he$getBoundingClient = he.getBoundingClientRect(), L = _he$getBoundingClient.width, C = _he$getBoundingClient.height;
                    b.value = p.value;
                    U = {
                      left: "".concat(L / 2, "px")
                    }, ve = -50;
                    _context.next = 8;
                    return vue.nextTick();
                  case 8:
                    if (!E.value[0]) {
                      _context.next = 11;
                      break;
                    }
                    _E$value$0$getBoundin = E.value[0].getBoundingClientRect(), Me = _E$value$0$getBoundin.left, j = _E$value$0$getBoundin.width;
                    Me < 0 && (U = {
                      left: "0"
                    }, ve = 0, I.value.left = "".concat(L / 2, "px")), window.innerWidth < Me + j && (U = {
                      right: "0"
                    }, ve = 0, I.value.left = "".concat(j - L / 2, "px"));
                  case 11:
                    _.value = _objectSpread(_objectSpread({
                      bottom: "".concat(C, "px")
                    }, U), {}, {
                      transform: "translateX(".concat(ve, "%)")
                    }), a("tooltip-open", p.marker);
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function G(_x, _x2, _x3) {
              return _ref29.apply(this, arguments);
            };
          }(),
          te = function te(p) {
            b.value && (b.value = null, _.value = JSON.parse(JSON.stringify({
              bottom: "",
              left: "",
              transform: ""
            })), a("tooltip-close", p.marker));
          },
          m = function m(p) {
            N.value.startX = p.changedTouches[0].screenX, N.value.startY = p.changedTouches[0].screenY;
          },
          f = function f(p) {
            N.value.endX = p.changedTouches[0].screenX, N.value.endY = p.changedTouches[0].screenY, ae();
          },
          z = function z(p) {
            n.vertical && !n.inline && p.preventDefault();
          },
          ae = function ae() {
            var p = n.vertical ? "Y" : "X";
            Math.abs(N.value["start".concat(p)] - N.value["end".concat(p)]) > 10 && a("handle-swipe", N.value["start".concat(p)] > N.value["end".concat(p)] ? "right" : "left");
          },
          s = function s(p, J, le) {
            p && (Array.isArray(Y.value[J]) ? Y.value[J][le] = p : Y.value[J] = [p]), n.arrowNavigation && i(Y.value, "calendar");
          },
          h = function h(p) {
            n.monthChangeOnScroll && (p.preventDefault(), a("handle-scroll", p));
          },
          o = function o(p) {
            return P.value.type === "local" ? dateFns.getWeek(p.value, {
              weekStartsOn: +n.weekStart
            }) : P.value.type === "iso" ? dateFns.getISOWeek(p.value) : typeof P.value.type == "function" ? P.value.type(p.value) : "";
          },
          S = function S(p) {
            var J = p[0];
            return P.value.hideOnOffsetDates ? p.some(function (le) {
              return le.current;
            }) ? o(J) : "" : o(J);
          },
          u = function u(p, J) {
            mt(p, d.value), a("select-date", J);
          },
          B = function B(p) {
            mt(p, d.value);
          };
        return t({
          triggerTransition: ne
        }), function (p, J) {
          var le;
          return vue.openBlock(), vue.createElementBlock("div", {
            "class": vue.normalizeClass(H.value)
          }, [vue.createElementVNode("div", {
            ref_key: "calendarWrapRef",
            ref: $,
            role: "grid",
            "class": vue.normalizeClass(O.value),
            "aria-label": (le = vue.unref(M)) == null ? void 0 : le.calendarWrap
          }, [vue.createElementVNode("div", qr, [p.weekNumbers ? (vue.openBlock(), vue.createElementBlock("div", Qr, vue.toDisplayString(p.weekNumName), 1)) : vue.createCommentVNode("", !0), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(R.value, function (v, Q) {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: Q,
              "class": "dp__calendar_header_item",
              role: "gridcell"
            }, [p.$slots["calendar-header"] ? vue.renderSlot(p.$slots, "calendar-header", {
              key: 0,
              day: v,
              index: Q
            }) : vue.createCommentVNode("", !0), p.$slots["calendar-header"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: 1
            }, [vue.createTextVNode(vue.toDisplayString(v), 1)], 64))]);
          }), 128))]), Zr, vue.createVNode(vue.Transition, {
            name: K.value,
            css: !!p.transitions
          }, {
            "default": vue.withCtx(function () {
              var v;
              return [w.value ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                "class": "dp__calendar",
                role: "rowgroup",
                "aria-label": ((v = vue.unref(M)) == null ? void 0 : v.calendarDays) || void 0
              }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(D.value, function (Q, he) {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: he,
                  "class": "dp__calendar_row",
                  role: "row"
                }, [p.weekNumbers ? (vue.openBlock(), vue.createElementBlock("div", Jr, [vue.createElementVNode("div", xr, vue.toDisplayString(S(Q.days)), 1)])) : vue.createCommentVNode("", !0), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(Q.days, function (L, C) {
                  var _ref30;
                  var U, ve, Me;
                  return vue.openBlock(), vue.createElementBlock("div", {
                    id: T(L.value),
                    ref_for: !0,
                    ref: function ref(j) {
                      return s(j, he, C);
                    },
                    key: C + he,
                    role: "gridcell",
                    "class": "dp__calendar_item",
                    "aria-selected": (_ref30 = L.classData.dp__active_date || L.classData.dp__range_start || L.classData.dp__range_start) !== null && _ref30 !== void 0 ? _ref30 : void 0,
                    "aria-disabled": L.classData.dp__cell_disabled || void 0,
                    "aria-label": (ve = (U = vue.unref(M)) == null ? void 0 : U.day) == null ? void 0 : ve.call(U, L),
                    tabindex: "0",
                    onClick: vue.withModifiers(function (j) {
                      return u(j, L);
                    }, ["prevent"]),
                    onKeydown: [vue.withKeys(function (j) {
                      return p.$emit("select-date", L);
                    }, ["enter"]), vue.withKeys(function (j) {
                      return p.$emit("handle-space", L);
                    }, ["space"])],
                    onMouseenter: function onMouseenter(j) {
                      return G(L, he, C);
                    },
                    onMouseleave: function onMouseleave(j) {
                      return te(L);
                    }
                  }, [vue.createElementVNode("div", {
                    "class": vue.normalizeClass(["dp__cell_inner", L.classData])
                  }, [p.$slots.day && g.value(L) ? vue.renderSlot(p.$slots, "day", {
                    key: 0,
                    day: +L.text,
                    date: L.value
                  }) : vue.createCommentVNode("", !0), p.$slots.day ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                    key: 1
                  }, [vue.createTextVNode(vue.toDisplayString(L.text), 1)], 64)), L.marker && g.value(L) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                    key: 2
                  }, [p.$slots.marker ? vue.renderSlot(p.$slots, "marker", {
                    key: 0,
                    marker: L.marker,
                    day: +L.text,
                    date: L.value
                  }) : (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    "class": vue.normalizeClass(re.value(L.marker)),
                    style: vue.normalizeStyle(L.marker.color ? {
                      backgroundColor: L.marker.color
                    } : {})
                  }, null, 6))], 64)) : vue.createCommentVNode("", !0), se.value(L.value) ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 3,
                    ref_for: !0,
                    ref_key: "activeTooltip",
                    ref: E,
                    "class": "dp__marker_tooltip",
                    style: vue.normalizeStyle(_.value)
                  }, [(Me = L.marker) != null && Me.tooltip ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    "class": "dp__tooltip_content",
                    onClick: B
                  }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(L.marker.tooltip, function (j, Qe) {
                    return vue.openBlock(), vue.createElementBlock("div", {
                      key: Qe,
                      "class": "dp__tooltip_text"
                    }, [p.$slots["marker-tooltip"] ? vue.renderSlot(p.$slots, "marker-tooltip", {
                      key: 0,
                      tooltip: j,
                      day: L.value
                    }) : vue.createCommentVNode("", !0), p.$slots["marker-tooltip"] ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                      key: 1
                    }, [vue.createElementVNode("div", {
                      "class": "dp__tooltip_mark",
                      style: vue.normalizeStyle(j.color ? {
                        backgroundColor: j.color
                      } : {})
                    }, null, 4), vue.createElementVNode("div", null, vue.toDisplayString(j.text), 1)], 64))]);
                  }), 128)), vue.createElementVNode("div", {
                    "class": "dp__arrow_bottom_tp",
                    style: vue.normalizeStyle(I.value)
                  }, null, 4)])) : vue.createCommentVNode("", !0)], 4)) : vue.createCommentVNode("", !0)], 2)], 40, eo);
                }), 128))]);
              }), 128))], 8, Xr)) : vue.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])], 10, Gr)], 2);
        };
      }
    }),
    fa = function fa(e) {
      return Array.isArray(e);
    },
    no = function no(e, t, l, a) {
      var n = vue.ref([]),
        i = vue.ref( /* @__PURE__ */new Date()),
        _Kt4 = Kt(e, t),
        r = _Kt4.modelValue,
        d = _Kt4.calendars,
        M = _Kt4.time,
        _Re19 = Re(e),
        k = _Re19.defaultedMultiCalendars,
        P = _Re19.defaultedStartTime,
        b = _Re19.defaultedRange,
        _At5 = At(e),
        _ = _At5.validateMonthYearInRange,
        Y = _At5.isDisabled,
        $ = _At5.isDateRangeAllowed,
        w = _At5.checkMinMaxRange,
        _Ha2 = Ha(e, M, r, a),
        K = _Ha2.updateTimeValues,
        N = _Ha2.getSetDateTime,
        E = _Ha2.setTime,
        I = _Ha2.assignStartTime,
        D = _Ha2.validateTime,
        R = _Ha2.disabledTimesConfig,
        V = vue.computed(function () {
          return function (y) {
            return d.value[y] ? d.value[y].month : 0;
          };
        }),
        ne = vue.computed(function () {
          return function (y) {
            return d.value[y] ? d.value[y].year : 0;
          };
        }),
        O = function O(y, X, ie) {
          var me, Te;
          d.value[y] || (d.value[y] = {
            month: 0,
            year: 0
          }), d.value[y].month = sa(X) ? (me = d.value[y]) == null ? void 0 : me.month : X, d.value[y].year = sa(ie) ? (Te = d.value[y]) == null ? void 0 : Te.year : ie;
        },
        re = function re() {
          e.autoApply && t("select-date");
        };
      vue.watch(r, function (y, X) {
        JSON.stringify(y) !== JSON.stringify(X) && g();
      }, {
        deep: !0
      }), vue.onMounted(function () {
        e.shadow || (r.value || (S(), P.value && I(P.value)), g(!0), e.focusStartDate && e.startDate && S());
      });
      var se = vue.computed(function () {
          var y;
          return (y = e.flow) != null && y.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
        }),
        H = function H() {
          e.autoApply && se.value && t("auto-apply", e.partialFlow);
        },
        g = function g() {
          var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          if (r.value) return Array.isArray(r.value) ? (n.value = r.value, ae(y)) : te(r.value, y);
          if (k.value.count && y && !e.startDate) return G(F(), y);
        },
        T = function T() {
          var _r$value$;
          return Array.isArray(r.value) && b.value.enabled ? dateFns.getMonth(r.value[0]) === dateFns.getMonth((_r$value$ = r.value[1]) !== null && _r$value$ !== void 0 ? _r$value$ : r.value[0]) : !1;
        },
        G = function G(y) {
          var X = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if ((!k.value.count || !k.value["static"] || X) && O(0, dateFns.getMonth(y), dateFns.getYear(y)), k.value.count && (!k.value.solo || !r.value || T())) for (var ie = 1; ie < k.value.count; ie++) {
            var me = dateFns.set(F(), {
                month: V.value(ie - 1),
                year: ne.value(ie - 1)
              }),
              Te = dateFns.add(me, {
                months: 1
              });
            d.value[ie] = {
              month: dateFns.getMonth(Te),
              year: dateFns.getYear(Te)
            };
          }
        },
        te = function te(y, X) {
          G(y), E("hours", dateFns.getHours(y)), E("minutes", dateFns.getMinutes(y)), E("seconds", dateFns.getSeconds(y)), k.value.count && X && o();
        },
        m = function m(y) {
          if (k.value.count) {
            if (k.value.solo) return 0;
            var X = dateFns.getMonth(y[0]),
              ie = dateFns.getMonth(y[1]);
            return Math.abs(ie - X) < k.value.count ? 0 : 1;
          }
          return 1;
        },
        f = function f(y, X) {
          y[1] && b.value.showLastInRange ? G(y[m(y)], X) : G(y[0], X);
          var ie = function ie(me, Te) {
            return [me(y[0]), y[1] ? me(y[1]) : M[Te][1]];
          };
          E("hours", ie(dateFns.getHours, "hours")), E("minutes", ie(dateFns.getMinutes, "minutes")), E("seconds", ie(dateFns.getSeconds, "seconds"));
        },
        z = function z(y, X) {
          if ((b.value.enabled || e.weekPicker) && !e.multiDates) return f(y, X);
          if (e.multiDates && X) {
            var ie = y[y.length - 1];
            return te(ie, X);
          }
        },
        ae = function ae(y) {
          var X = r.value;
          z(X, y), k.value.count && k.value.solo && o();
        },
        s = function s(y, X) {
          var ie = dateFns.set(F(), {
              month: V.value(X),
              year: ne.value(X)
            }),
            me = y < 0 ? dateFns.addMonths(ie, 1) : dateFns.subMonths(ie, 1);
          _(dateFns.getMonth(me), dateFns.getYear(me), y < 0, e.preventMinMaxNavigation) && (O(X, dateFns.getMonth(me), dateFns.getYear(me)), t("update-month-year", {
            instance: X,
            month: dateFns.getMonth(me),
            year: dateFns.getYear(me)
          }), k.value.count && !k.value.solo && h(X), l());
        },
        h = function h(y) {
          for (var X = y - 1; X >= 0; X--) {
            var ie = dateFns.subMonths(dateFns.set(F(), {
              month: V.value(X + 1),
              year: ne.value(X + 1)
            }), 1);
            O(X, dateFns.getMonth(ie), dateFns.getYear(ie));
          }
          for (var _X = y + 1; _X <= k.value.count - 1; _X++) {
            var _ie = dateFns.addMonths(dateFns.set(F(), {
              month: V.value(_X - 1),
              year: ne.value(_X - 1)
            }), 1);
            O(_X, dateFns.getMonth(_ie), dateFns.getYear(_ie));
          }
        },
        o = function o() {
          if (Array.isArray(r.value) && r.value.length === 2) {
            var y = F(F(r.value[1] ? r.value[1] : dateFns.addMonths(r.value[0], 1))),
              _ref31 = [dateFns.getMonth(r.value[0]), dateFns.getYear(r.value[0])],
              X = _ref31[0],
              ie = _ref31[1],
              _ref32 = [dateFns.getMonth(r.value[1]), dateFns.getYear(r.value[1])],
              me = _ref32[0],
              Te = _ref32[1];
            (X !== me || X === me && ie !== Te) && k.value.solo && O(1, dateFns.getMonth(y), dateFns.getYear(y));
          } else r.value && !Array.isArray(r.value) && (O(0, dateFns.getMonth(r.value), dateFns.getYear(r.value)), G(F()));
        },
        S = function S() {
          e.startDate && (O(0, dateFns.getMonth(F(e.startDate)), dateFns.getYear(F(e.startDate))), k.value.count && h(0));
        },
        u = function u(y, X) {
          if (e.monthChangeOnScroll) {
            var ie = /* @__PURE__ */new Date().getTime() - i.value.getTime(),
              me = Math.abs(y.deltaY);
            var Te = 500;
            me > 1 && (Te = 100), me > 100 && (Te = 0), ie > Te && (i.value = /* @__PURE__ */new Date(), s(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, X));
          }
        },
        B = function B(y, X) {
          var ie = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          e.monthChangeOnArrows && e.vertical === ie && p(y, X);
        },
        p = function p(y, X) {
          s(y === "right" ? -1 : 1, X);
        },
        J = function J(y) {
          return e.markers.find(function (X) {
            return ye(El(y.value), tt(F(X.date), e.timezone));
          });
        },
        le = function le(y, X) {
          switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
            case "prepend":
              return [!0, !1];
            case "center":
              return [y == 0, !0];
            case "fair":
              return [y == 0 || X > y, !0];
            case "append":
              return [!1, !1];
            default:
              return [!1, !1];
          }
        },
        v = function v(y, X, ie, me) {
          if (e.sixWeeks && y.length < 6) {
            var Te = 6 - y.length,
              at = (X.getDay() + 7 - me) % 7,
              de = 6 - (ie.getDay() + 7 - me) % 7,
              _le = le(at, de),
              _le2 = babelHelpers.slicedToArray(_le, 2),
              ue = _le2[0],
              bt = _le2[1];
            for (var je = 1; je <= Te; je++) if (bt ? !!(je % 2) == ue : ue) {
              var Xt = y[0].days[0],
                mn = Q(dateFns.addDays(Xt.value, -7), dateFns.getMonth(X));
              y.unshift({
                days: mn
              });
            } else {
              var _Xt = y[y.length - 1],
                _mn = _Xt.days[_Xt.days.length - 1],
                La = Q(dateFns.addDays(_mn.value, 1), dateFns.getMonth(X));
              y.push({
                days: La
              });
            }
          }
          return y;
        },
        Q = function Q(y, X) {
          var ie = F(y),
            me = [];
          for (var Te = 0; Te < 7; Te++) {
            var at = dateFns.addDays(ie, Te),
              x = dateFns.getMonth(at) !== X;
            me.push({
              text: e.hideOffsetDates && x ? "" : at.getDate(),
              value: at,
              current: !x,
              classData: {}
            });
          }
          return me;
        },
        he = function he(y, X) {
          var ie = [],
            me = new Date(X, y),
            Te = new Date(X, y + 1, 0),
            at = e.weekStart,
            x = dateFns.startOfWeek(me, {
              weekStartsOn: at
            }),
            de = function de(ue) {
              var bt = Q(ue, y);
              if (ie.push({
                days: bt
              }), !ie[ie.length - 1].days.some(function (je) {
                return ye(Ve(je.value), Ve(Te));
              })) {
                var je = dateFns.addDays(ue, 7);
                de(je);
              }
            };
          return de(x), v(ie, me, Te, at);
        },
        L = function L(y) {
          var X = gt(F(y.value), M.hours, M.minutes, St());
          t("date-update", X), e.multiDates ? zn(X, r, e.multiDatesLimit) : r.value = X, a(), vue.nextTick().then(function () {
            H();
          });
        },
        C = function C(y) {
          return b.value.noDisabledRange ? Ra(n.value[0], y).some(function (ie) {
            return Y(ie);
          }) : !1;
        },
        U = function U() {
          n.value = r.value ? r.value.slice() : [], n.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (n.value = []);
        },
        ve = function ve(y, X) {
          var ie = [F(y.value), dateFns.addDays(F(y.value), +b.value.autoRange)];
          $(ie) ? (X && Me(y.value), n.value = ie) : t("invalid-date", y.value);
        },
        Me = function Me(y) {
          var X = dateFns.getMonth(F(y)),
            ie = dateFns.getYear(F(y));
          if (O(0, X, ie), k.value.count > 0) for (var me = 1; me < k.value.count; me++) {
            var Te = Fl(dateFns.set(F(y), {
              year: V.value(me - 1),
              month: ne.value(me - 1)
            }));
            O(me, Te.month, Te.year);
          }
        },
        j = function j(y) {
          return Array.isArray(r.value) && r.value.length === 2 ? b.value.fixedStart && (_e(y, r.value[0]) || ye(y, r.value[0])) ? [r.value[0], y] : b.value.fixedEnd && (Ce(y, r.value[1]) || ye(y, r.value[1])) ? [y, r.value[1]] : (t("invalid-fixed-range", y), r.value) : [];
        },
        Qe = function Qe(y) {
          if (C(y.value) || !w(y.value, r.value, b.value.fixedStart ? 0 : 1)) return t("invalid-date", y.value);
          n.value = j(F(y.value));
        },
        Ze = function Ze(y, X) {
          if (U(), b.value.autoRange) return ve(y, X);
          if (b.value.fixedStart || b.value.fixedEnd) return Qe(y);
          n.value[0] ? w(F(y.value), r.value) && !C(y.value) ? Ce(F(y.value), F(n.value[0])) ? (n.value.unshift(F(y.value)), t("range-end", n.value[0])) : (n.value[1] = F(y.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", y.value), t("invalid-date", y.value)) : (n.value[0] = F(y.value), t("range-start", n.value[0]));
        },
        St = function St() {
          var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          return e.enableSeconds ? Array.isArray(M.seconds) ? y ? M.seconds[0] : M.seconds[1] : M.seconds : 0;
        },
        ct = function ct(y) {
          n.value[y] = gt(n.value[y], M.hours[y], M.minutes[y], St(y !== 1));
        },
        qt = function qt() {
          var y, X;
          n.value[0] && n.value[1] && +((y = n.value) == null ? void 0 : y[0]) > +((X = n.value) == null ? void 0 : X[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
        },
        Qt = function Qt() {
          n.value.length && (n.value[0] && !n.value[1] ? ct(0) : (ct(0), ct(1), a()), qt(), r.value = n.value.slice(), dn(n.value, t, e.autoApply, e.modelAuto));
        },
        cn = function cn(y) {
          var X = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (Y(y.value) || !y.current && e.hideOffsetDates) return t("invalid-date", y.value);
          if (!b.value.enabled) return L(y);
          fa(M.hours) && fa(M.minutes) && !e.multiDates && (Ze(y, X), Qt());
        },
        It = function It(y, X) {
          var me;
          O(y, X.month, X.year), k.value.count && !k.value.solo && h(y), t("update-month-year", {
            instance: y,
            month: X.month,
            year: X.year
          }), l(k.value.solo ? y : void 0);
          var ie = (me = e.flow) != null && me.length ? e.flow[e.flowStep] : void 0;
          !X.fromNav && (ie === lt.month || ie === lt.year) && a();
        },
        qe = function qe(y, X) {
          Ia({
            value: y,
            modelValue: r,
            range: b.value.enabled,
            timezone: X ? void 0 : e.timezone
          }), re(), e.multiCalendars && vue.nextTick().then(function () {
            return g(!0);
          });
        },
        fn = function fn() {
          b.value.enabled ? r.value && Array.isArray(r.value) && r.value[0] ? r.value = Ce(F(), r.value[0]) ? [F(), r.value[0]] : [r.value[0], F()] : r.value = [F()] : r.value = F(), re();
        },
        vn = function vn() {
          if (Array.isArray(r.value)) {
            if (e.multiDates) {
              var y = Zt();
              r.value[r.value.length - 1] = N(y);
            } else r.value = r.value.map(function (y, X) {
              return y && N(y, X);
            });
          } else r.value = N(r.value);
          t("time-update");
        },
        Zt = function Zt() {
          return Array.isArray(r.value) && r.value.length ? r.value[r.value.length - 1] : null;
        };
      return {
        calendars: d,
        modelValue: r,
        month: V,
        year: ne,
        time: M,
        disabledTimesConfig: R,
        validateTime: D,
        getCalendarDays: he,
        getMarker: J,
        handleScroll: u,
        handleSwipe: p,
        handleArrow: B,
        selectDate: cn,
        updateMonthYear: It,
        presetDate: qe,
        selectCurrentDate: fn,
        updateTime: function updateTime(y) {
          var X = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var ie = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          K(y, X, ie, vn);
        }
      };
    },
    ao = {
      key: 0
    },
    lo = /* @__PURE__ */vue.defineComponent({
      __name: "DatePicker",
      props: _objectSpread({}, nt),
      emits: ["tooltip-open", "tooltip-close", "mount", "update:internal-model-value", "update-flow-step", "reset-flow", "auto-apply", "focus-menu", "select-date", "range-start", "range-end", "invalid-fixed-range", "time-update", "am-pm-change", "time-picker-open", "time-picker-close", "recalculate-position", "update-month-year", "auto-apply-invalid", "date-update", "invalid-date"],
      setup: function setup(e, _ref33) {
        var t = _ref33.expose,
          l = _ref33.emit;
        var a = l,
          n = e,
          _no = no(n, a, ae, s),
          i = _no.calendars,
          r = _no.month,
          d = _no.year,
          M = _no.modelValue,
          k = _no.time,
          P = _no.disabledTimesConfig,
          b = _no.validateTime,
          _ = _no.getCalendarDays,
          Y = _no.getMarker,
          $ = _no.handleArrow,
          w = _no.handleScroll,
          K = _no.handleSwipe,
          N = _no.selectDate,
          E = _no.updateMonthYear,
          I = _no.presetDate,
          D = _no.selectCurrentDate,
          R = _no.updateTime,
          V = vue.useSlots(),
          _or = or(M, n),
          ne = _or.setHoverDate,
          O = _or.getDayClassData,
          re = _or.clearHoverDate,
          _Re20 = Re(n),
          se = _Re20.defaultedMultiCalendars,
          H = vue.ref([]),
          g = vue.ref([]),
          T = vue.ref(null),
          G = Ge(V, "calendar"),
          te = Ge(V, "monthYear"),
          m = Ge(V, "timePicker"),
          f = function f(p) {
            n.shadow || a("mount", p);
          };
        vue.watch(i, function () {
          n.shadow || setTimeout(function () {
            a("recalculate-position");
          }, 0);
        }, {
          deep: !0
        });
        var z = vue.computed(function () {
          return function (p) {
            return _(r.value(p), d.value(p)).map(function (J) {
              return _objectSpread(_objectSpread({}, J), {}, {
                days: J.days.map(function (le) {
                  return le.marker = Y(le), le.classData = O(le), le;
                })
              });
            });
          };
        });
        function ae(p) {
          var J;
          p || p === 0 ? (J = g.value[p]) == null || J.triggerTransition(r.value(p), d.value(p)) : g.value.forEach(function (le, v) {
            return le.triggerTransition(r.value(v), d.value(v));
          });
        }
        function s() {
          a("update-flow-step");
        }
        var h = function h(p) {
          var J = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          N(p, J), n.spaceConfirm && a("select-date");
        };
        return t({
          clearHoverDate: re,
          presetDate: I,
          selectCurrentDate: D,
          toggleMonthPicker: function toggleMonthPicker(p, J) {
            var le = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var v;
            (v = H.value[le]) == null || v.toggleMonthPicker(p, J);
          },
          toggleYearPicker: function toggleYearPicker(p, J) {
            var le = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var v;
            (v = H.value[le]) == null || v.toggleYearPicker(p, J);
          },
          toggleTimePicker: function toggleTimePicker(p, J, le) {
            var v;
            (v = T.value) == null || v.toggleTimePicker(p, J, le);
          },
          handleArrow: $,
          updateMonthYear: E,
          getSidebarProps: function getSidebarProps() {
            return {
              modelValue: M,
              month: r,
              year: d,
              time: k,
              updateTime: R,
              updateMonthYear: E,
              selectDate: N,
              presetDate: I
            };
          }
        }), function (p, J) {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(un, {
            "multi-calendars": vue.unref(se).count,
            collapse: p.collapse
          }, {
            "default": vue.withCtx(function (_ref34) {
              var le = _ref34.instance,
                v = _ref34.index;
              return [p.disableMonthYearSelect ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(Kr, vue.mergeProps({
                key: 0,
                ref: function ref(Q) {
                  Q && (H.value[v] = Q);
                },
                months: vue.unref(Ma)(p.formatLocale, p.locale, p.monthNameFormat),
                years: vue.unref(Ln)(p.yearRange, p.reverseYears),
                month: vue.unref(r)(le),
                year: vue.unref(d)(le),
                instance: le
              }, p.$props, {
                onMount: J[0] || (J[0] = function (Q) {
                  return f(vue.unref($t).header);
                }),
                onResetFlow: J[1] || (J[1] = function (Q) {
                  return p.$emit("reset-flow");
                }),
                onUpdateMonthYear: function onUpdateMonthYear(Q) {
                  return vue.unref(E)(le, Q);
                },
                onOverlayClosed: J[2] || (J[2] = function (Q) {
                  return p.$emit("focus-menu");
                })
              }), vue.createSlots({
                _: 2
              }, [vue.renderList(vue.unref(te), function (Q, he) {
                return {
                  name: Q,
                  fn: vue.withCtx(function (L) {
                    return [vue.renderSlot(p.$slots, Q, vue.normalizeProps(vue.guardReactiveProps(L)))];
                  })
                };
              })]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])), vue.createVNode(to, vue.mergeProps({
                ref: function ref(Q) {
                  Q && (g.value[v] = Q);
                },
                "mapped-dates": z.value(le),
                month: vue.unref(r)(le),
                year: vue.unref(d)(le),
                instance: le
              }, p.$props, {
                onSelectDate: function onSelectDate(Q) {
                  return vue.unref(N)(Q, le !== 1);
                },
                onHandleSpace: function onHandleSpace(Q) {
                  return h(Q, le !== 1);
                },
                onSetHoverDate: J[3] || (J[3] = function (Q) {
                  return vue.unref(ne)(Q);
                }),
                onHandleScroll: function onHandleScroll(Q) {
                  return vue.unref(w)(Q, le);
                },
                onHandleSwipe: function onHandleSwipe(Q) {
                  return vue.unref(K)(Q, le);
                },
                onMount: J[4] || (J[4] = function (Q) {
                  return f(vue.unref($t).calendar);
                }),
                onResetFlow: J[5] || (J[5] = function (Q) {
                  return p.$emit("reset-flow");
                }),
                onTooltipOpen: J[6] || (J[6] = function (Q) {
                  return p.$emit("tooltip-open", Q);
                }),
                onTooltipClose: J[7] || (J[7] = function (Q) {
                  return p.$emit("tooltip-close", Q);
                })
              }), vue.createSlots({
                _: 2
              }, [vue.renderList(vue.unref(G), function (Q, he) {
                return {
                  name: Q,
                  fn: vue.withCtx(function (L) {
                    return [vue.renderSlot(p.$slots, Q, vue.normalizeProps(vue.guardReactiveProps(_objectSpread({}, L))))];
                  })
                };
              })]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])];
            }),
            _: 3
          }, 8, ["multi-calendars", "collapse"]), p.enableTimePicker ? (vue.openBlock(), vue.createElementBlock("div", ao, [p.$slots["time-picker"] ? vue.renderSlot(p.$slots, "time-picker", vue.normalizeProps(vue.mergeProps({
            key: 0
          }, {
            time: vue.unref(k),
            updateTime: vue.unref(R)
          }))) : (vue.openBlock(), vue.createBlock(Fa, vue.mergeProps({
            key: 1,
            ref_key: "timePickerRef",
            ref: T
          }, p.$props, {
            hours: vue.unref(k).hours,
            minutes: vue.unref(k).minutes,
            seconds: vue.unref(k).seconds,
            "internal-model-value": p.internalModelValue,
            "disabled-times-config": vue.unref(P),
            "validate-time": vue.unref(b),
            onMount: J[8] || (J[8] = function (le) {
              return f(vue.unref($t).timePicker);
            }),
            "onUpdate:hours": J[9] || (J[9] = function (le) {
              return vue.unref(R)(le);
            }),
            "onUpdate:minutes": J[10] || (J[10] = function (le) {
              return vue.unref(R)(le, !1);
            }),
            "onUpdate:seconds": J[11] || (J[11] = function (le) {
              return vue.unref(R)(le, !1, !0);
            }),
            onResetFlow: J[12] || (J[12] = function (le) {
              return p.$emit("reset-flow");
            }),
            onOverlayClosed: J[13] || (J[13] = function (le) {
              return p.$emit("time-picker-close");
            }),
            onOverlayOpened: J[14] || (J[14] = function (le) {
              return p.$emit("time-picker-open", le);
            }),
            onAmPmChange: J[15] || (J[15] = function (le) {
              return p.$emit("am-pm-change", le);
            })
          }), vue.createSlots({
            _: 2
          }, [vue.renderList(vue.unref(m), function (le, v) {
            return {
              name: le,
              fn: vue.withCtx(function (Q) {
                return [vue.renderSlot(p.$slots, le, vue.normalizeProps(vue.guardReactiveProps(Q)))];
              })
            };
          })]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))])) : vue.createCommentVNode("", !0)], 64);
        };
      }
    }),
    ro = function ro(e, t) {
      var l = vue.ref(),
        _Re21 = Re(e),
        a = _Re21.defaultedMultiCalendars,
        n = _Re21.defaultedConfig,
        i = _Re21.defaultedHighlight,
        r = _Re21.defaultedRange,
        _Kt5 = Kt(e, t),
        d = _Kt5.modelValue,
        M = _Kt5.year,
        k = _Kt5.month,
        P = _Kt5.calendars,
        _At6 = At(e),
        b = _At6.isDisabled,
        _Ea2 = Ea({
          modelValue: d,
          multiCalendars: a,
          highlight: i,
          calendars: P,
          month: k,
          year: M,
          props: e,
          emit: t
        }),
        _ = _Ea2.selectYear,
        Y = _Ea2.groupedYears,
        $ = _Ea2.showYearPicker,
        w = _Ea2.isDisabled,
        K = _Ea2.toggleYearPicker,
        N = _Ea2.handleYearSelect,
        E = _Ea2.handleYear,
        I = function I(g, T) {
          return [g, T].map(function (G) {
            return dateFns.format(G, "MMMM", {
              locale: e.formatLocale
            });
          }).join("-");
        },
        D = vue.computed(function () {
          return function (g) {
            return d.value ? Array.isArray(d.value) ? d.value.some(function (T) {
              return dateFns.isSameQuarter(g, T);
            }) : dateFns.isSameQuarter(d.value, g) : !1;
          };
        }),
        R = function R(g) {
          if (r.value.enabled) {
            if (Array.isArray(d.value)) {
              var T = ye(g, d.value[0]) || ye(g, d.value[1]);
              return rn(d.value, l.value, g) && !T;
            }
            return !1;
          }
          return !1;
        },
        V = vue.computed(function () {
          return function (g) {
            var T = dateFns.set( /* @__PURE__ */new Date(), {
              year: M.value(g)
            });
            return dateFns.eachQuarterOfInterval({
              start: dateFns.startOfYear(T),
              end: dateFns.endOfYear(T)
            }).map(function (G) {
              var te = dateFns.startOfQuarter(G),
                m = dateFns.endOfQuarter(G),
                f = b(G),
                z = R(te),
                ae = typeof i.value == "function" ? i.value({
                  quarter: dateFns.getQuarter(te),
                  year: dateFns.getYear(te)
                }) : !!i.value.quarters.find(function (s) {
                  return s.quarter === dateFns.getQuarter(te) && s.year === dateFns.getYear(te);
                });
              return {
                text: I(te, m),
                value: te,
                active: D.value(te),
                highlighted: ae,
                disabled: f,
                isBetween: z
              };
            });
          };
        }),
        ne = function ne(g) {
          zn(g, d, e.multiDatesLimit), t("auto-apply", !0);
        },
        O = function O(g) {
          var T = jn(d, g, t);
          dn(T, t, e.autoApply, e.modelAuto);
        },
        re = function re(g) {
          d.value = g, t("auto-apply");
        };
      return {
        defaultedConfig: n,
        defaultedMultiCalendars: a,
        groupedYears: Y,
        year: M,
        isDisabled: w,
        quarters: V,
        showYearPicker: $,
        modelValue: d,
        setHoverDate: function setHoverDate(g) {
          l.value = g;
        },
        selectYear: _,
        selectQuarter: function selectQuarter(g, T, G) {
          if (!G) return P.value[T].month = dateFns.getMonth(dateFns.endOfQuarter(g)), e.multiDates ? ne(g) : r.value.enabled ? O(g) : re(g);
        },
        toggleYearPicker: K,
        handleYearSelect: N,
        handleYear: E
      };
    },
    oo = {
      "class": "dp--quarter-items"
    },
    so = ["disabled", "onClick", "onMouseover"],
    io = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "QuarterPicker",
      props: _objectSpread({}, nt),
      emits: ["update:internal-model-value", "reset-flow", "overlay-closed", "auto-apply", "range-start", "range-end"],
      setup: function setup(e, _ref35) {
        var t = _ref35.expose,
          l = _ref35.emit;
        var a = l,
          n = e,
          i = vue.useSlots(),
          r = Ge(i, "yearMode"),
          _ro = ro(n, a),
          d = _ro.defaultedMultiCalendars,
          M = _ro.defaultedConfig,
          k = _ro.groupedYears,
          P = _ro.year,
          b = _ro.isDisabled,
          _ = _ro.quarters,
          Y = _ro.modelValue,
          $ = _ro.showYearPicker,
          w = _ro.setHoverDate,
          K = _ro.selectQuarter,
          N = _ro.toggleYearPicker,
          E = _ro.handleYearSelect,
          I = _ro.handleYear;
        return t({
          getSidebarProps: function getSidebarProps() {
            return {
              modelValue: Y,
              year: P,
              selectQuarter: K,
              handleYearSelect: E,
              handleYear: I
            };
          }
        }), function (R, V) {
          return vue.openBlock(), vue.createBlock(un, {
            "multi-calendars": vue.unref(d).count,
            collapse: R.collapse,
            stretch: ""
          }, {
            "default": vue.withCtx(function (_ref36) {
              var ne = _ref36.instance;
              return [vue.createElementVNode("div", {
                "class": "dp-quarter-picker-wrap",
                style: vue.normalizeStyle({
                  minHeight: "".concat(vue.unref(M).modeHeight, "px")
                })
              }, [vue.createElementVNode("div", null, [vue.createVNode(Ba, vue.mergeProps(R.$props, {
                items: vue.unref(k)(ne),
                instance: ne,
                "show-year-picker": vue.unref($)[ne],
                year: vue.unref(P)(ne),
                "is-disabled": function isDisabled(O) {
                  return vue.unref(b)(ne, O);
                },
                onHandleYear: function onHandleYear(O) {
                  return vue.unref(I)(ne, O);
                },
                onYearSelect: function onYearSelect(O) {
                  return vue.unref(E)(O, ne);
                },
                onToggleYearPicker: function onToggleYearPicker(O) {
                  return vue.unref(N)(ne, O == null ? void 0 : O.flow, O == null ? void 0 : O.show);
                }
              }), vue.createSlots({
                _: 2
              }, [vue.renderList(vue.unref(r), function (O, re) {
                return {
                  name: O,
                  fn: vue.withCtx(function (se) {
                    return [vue.renderSlot(R.$slots, O, vue.normalizeProps(vue.guardReactiveProps(se)))];
                  })
                };
              })]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]), vue.createElementVNode("div", oo, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(_)(ne), function (O, re) {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: re
                }, [vue.createElementVNode("button", {
                  type: "button",
                  "class": vue.normalizeClass(["dp--qr-btn", {
                    "dp--qr-btn-active": O.active,
                    "dp--qr-btn-between": O.isBetween,
                    "dp--qr-btn-disabled": O.disabled,
                    "dp--highlighted": O.highlighted
                  }]),
                  disabled: O.disabled,
                  onClick: function onClick(se) {
                    return vue.unref(K)(O.value, ne, O.disabled);
                  },
                  onMouseover: function onMouseover(se) {
                    return vue.unref(w)(O.value);
                  }
                }, [R.$slots.quarter ? vue.renderSlot(R.$slots, "quarter", {
                  key: 0,
                  value: O.value,
                  text: O.text
                }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                  key: 1
                }, [vue.createTextVNode(vue.toDisplayString(O.text), 1)], 64))], 42, so)]);
              }), 128))])], 4)];
            }),
            _: 3
          }, 8, ["multi-calendars", "collapse"]);
        };
      }
    }),
    uo = ["id"],
    co = {
      key: 0,
      "class": "dp--menu-load-container"
    },
    fo = /* @__PURE__ */vue.createElementVNode("span", {
      "class": "dp--menu-loader"
    }, null, -1),
    vo = [fo],
    mo = {
      key: 0,
      "class": "dp__sidebar_left"
    },
    go = ["onClick", "onKeydown"],
    yo = {
      key: 2,
      "class": "dp__sidebar_right"
    },
    po = {
      key: 3,
      "class": "dp__action_extra"
    },
    va = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "DatepickerMenu",
      props: _objectSpread(_objectSpread({}, sn), {}, {
        shadow: {
          type: Boolean,
          "default": !1
        },
        openOnTop: {
          type: Boolean,
          "default": !1
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        },
        arrMapValues: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        noOverlayFocus: {
          type: Boolean,
          "default": !1
        },
        collapse: {
          type: Boolean,
          "default": !1
        }
      }),
      emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "auto-apply-invalid", "date-update", "invalid-date"],
      setup: function setup(e, _ref37) {
        var t = _ref37.expose,
          l = _ref37.emit;
        var a = l,
          n = e,
          i = vue.ref(null),
          r = vue.computed(function () {
            var C = n.openOnTop,
              U = babelHelpers.objectWithoutProperties(n, _excluded);
            return _objectSpread(_objectSpread({}, U), {}, {
              flowStep: O.value,
              collapse: n.collapse,
              noOverlayFocus: n.noOverlayFocus,
              menuWrapRef: i.value
            });
          }),
          _Na = Na(),
          d = _Na.setMenuFocused,
          M = _Na.setShiftKey,
          k = _Na.control,
          P = vue.useSlots(),
          _Re22 = Re(n),
          b = _Re22.defaultedTextInput,
          _ = _Re22.defaultedInline,
          Y = _Re22.defaultedConfig,
          $ = vue.ref(null),
          w = vue.ref(0),
          K = vue.ref(null),
          N = vue.ref(!1),
          E = vue.ref(null);
        vue.onMounted(function () {
          if (!n.shadow) {
            N.value = !0, I(), window.addEventListener("resize", I);
            var C = Ne(i);
            if (C && !b.value.enabled && !_.value.enabled && (d(!0), T()), C) {
              var U = function U(ve) {
                Y.value.allowPreventDefault && ve.preventDefault(), mt(ve, Y.value, !0);
              };
              C.addEventListener("pointerdown", U), C.addEventListener("mousedown", U);
            }
          }
        }), vue.onUnmounted(function () {
          window.removeEventListener("resize", I);
        });
        var I = function I() {
            var C = Ne(K);
            C && (w.value = C.getBoundingClientRect().width);
          },
          _ht7 = ht(),
          D = _ht7.arrowRight,
          R = _ht7.arrowLeft,
          V = _ht7.arrowDown,
          ne = _ht7.arrowUp,
          _sr = sr(n, a, E),
          O = _sr.flowStep,
          re = _sr.updateFlowStep,
          se = _sr.childMount,
          H = _sr.resetFlow,
          g = vue.computed(function () {
            return n.monthPicker ? $r : n.yearPicker ? Ar : n.timePicker ? Ur : n.quarterPicker ? io : lo;
          }),
          T = function T() {
            var C = Ne(i);
            C && C.focus({
              preventScroll: !0
            });
          },
          G = vue.computed(function () {
            var C;
            return ((C = E.value) == null ? void 0 : C.getSidebarProps()) || {};
          }),
          te = function te() {
            n.openOnTop && a("recalculate-position");
          },
          m = Ge(P, "action"),
          f = vue.computed(function () {
            return n.monthPicker || n.yearPicker ? Ge(P, "monthYear") : n.timePicker ? Ge(P, "timePicker") : Ge(P, "shared");
          }),
          z = vue.computed(function () {
            return n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top";
          }),
          ae = vue.computed(function () {
            return {
              dp__menu_disabled: n.disabled,
              dp__menu_readonly: n.readonly,
              "dp-menu-loading": n.loading
            };
          }),
          s = vue.computed(function () {
            return babelHelpers.defineProperty({
              dp__menu: !0,
              dp__menu_index: !_.value.enabled,
              dp__relative: _.value.enabled
            }, n.menuClassName, !!n.menuClassName);
          }),
          h = function h(C) {
            mt(C, Y.value, !0);
          },
          o = function o() {
            n.escClose && a("close-picker");
          },
          S = function S(C) {
            if (n.arrowNavigation) {
              if (C === "up") return ne();
              if (C === "down") return V();
              if (C === "left") return R();
              if (C === "right") return D();
            } else C === "left" || C === "up" ? le("handleArrow", "left", 0, C === "up") : le("handleArrow", "right", 0, C === "down");
          },
          u = function u(C) {
            M(C.shiftKey), !n.disableMonthYearSelect && C.code === "Tab" && C.target.classList.contains("dp__menu") && k.value.shiftKeyInMenu && (C.preventDefault(), mt(C, Y.value, !0), a("close-picker"));
          },
          B = function B() {
            T(), a("time-picker-close");
          },
          p = function p(C) {
            var U, ve, Me;
            (U = E.value) == null || U.toggleTimePicker(!1, !1), (ve = E.value) == null || ve.toggleMonthPicker(!1, !1, C), (Me = E.value) == null || Me.toggleYearPicker(!1, !1, C);
          },
          J = function J(C) {
            var U = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var ve, Me, j;
            return C === "month" ? (ve = E.value) == null ? void 0 : ve.toggleMonthPicker(!1, !0, U) : C === "year" ? (Me = E.value) == null ? void 0 : Me.toggleYearPicker(!1, !0, U) : C === "time" ? (j = E.value) == null ? void 0 : j.toggleTimePicker(!0, !1) : p(U);
          },
          le = function le(C) {
            var _Me;
            var ve, Me;
            for (var _len2 = arguments.length, U = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              U[_key2 - 1] = arguments[_key2];
            }
            (ve = E.value) != null && ve[C] && ((Me = E.value) == null || (_Me = Me)[C].apply(_Me, U));
          },
          v = function v() {
            le("selectCurrentDate");
          },
          Q = function Q(C, U) {
            le("presetDate", C, U);
          },
          he = function he() {
            le("clearHoverDate");
          };
        return t({
          updateMonthYear: function updateMonthYear(C, U) {
            le("updateMonthYear", C, U);
          },
          switchView: J
        }), function (C, U) {
          var ve, Me;
          return vue.openBlock(), vue.createElementBlock("div", {
            id: C.uid ? "dp-menu-".concat(C.uid) : void 0,
            ref_key: "dpMenuRef",
            ref: i,
            tabindex: "0",
            role: "dialog",
            "class": vue.normalizeClass(s.value),
            onMouseleave: he,
            onClick: h,
            onKeydown: [vue.withKeys(o, ["esc"]), U[18] || (U[18] = vue.withKeys(vue.withModifiers(function (j) {
              return S("left");
            }, ["prevent"]), ["left"])), U[19] || (U[19] = vue.withKeys(vue.withModifiers(function (j) {
              return S("up");
            }, ["prevent"]), ["up"])), U[20] || (U[20] = vue.withKeys(vue.withModifiers(function (j) {
              return S("down");
            }, ["prevent"]), ["down"])), U[21] || (U[21] = vue.withKeys(vue.withModifiers(function (j) {
              return S("right");
            }, ["prevent"]), ["right"])), u]
          }, [(C.disabled || C.readonly) && vue.unref(_).enabled || C.loading ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            "class": vue.normalizeClass(ae.value)
          }, [C.loading ? (vue.openBlock(), vue.createElementBlock("div", co, vo)) : vue.createCommentVNode("", !0)], 2)) : vue.createCommentVNode("", !0), !vue.unref(_).enabled && !C.teleportCenter ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            "class": vue.normalizeClass(z.value)
          }, null, 2)) : vue.createCommentVNode("", !0), vue.createElementVNode("div", {
            ref_key: "innerMenuRef",
            ref: K,
            "class": vue.normalizeClass({
              dp__menu_content_wrapper: ((ve = C.presetDates) == null ? void 0 : ve.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"],
              "dp--menu-content-wrapper-collapsed": e.collapse && ((Me = C.presetDates) == null ? void 0 : Me.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"]
            }),
            style: vue.normalizeStyle({
              "--dp-menu-width": "".concat(w.value, "px")
            })
          }, [C.$slots["left-sidebar"] ? (vue.openBlock(), vue.createElementBlock("div", mo, [vue.renderSlot(C.$slots, "left-sidebar", vue.normalizeProps(vue.guardReactiveProps(G.value)))])) : vue.createCommentVNode("", !0), C.presetDates.length ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            "class": vue.normalizeClass({
              "dp--preset-dates-collapsed": e.collapse,
              "dp--preset-dates": !0
            })
          }, [(vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(C.presetDates, function (j, Qe) {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: Qe
            }, [j.slot ? vue.renderSlot(C.$slots, j.slot, {
              key: 0,
              presetDate: Q,
              label: j.label,
              value: j.value
            }) : (vue.openBlock(), vue.createElementBlock("button", {
              key: 1,
              type: "button",
              style: vue.normalizeStyle(j.style || {}),
              "class": vue.normalizeClass(["dp__btn dp--preset-range", {
                "dp--preset-range-collapsed": e.collapse
              }]),
              onClick: vue.withModifiers(function (Ze) {
                return Q(j.value, j.noTz);
              }, ["prevent"]),
              onKeydown: [vue.withKeys(vue.withModifiers(function (Ze) {
                return Q(j.value, j.noTz);
              }, ["prevent"]), ["enter"]), vue.withKeys(vue.withModifiers(function (Ze) {
                return Q(j.value, j.noTz);
              }, ["prevent"]), ["space"])]
            }, vue.toDisplayString(j.label), 47, go))], 64);
          }), 128))], 2)) : vue.createCommentVNode("", !0), vue.createElementVNode("div", {
            ref_key: "calendarWrapperRef",
            ref: $,
            "class": "dp__instance_calendar",
            role: "document"
          }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(g.value), vue.mergeProps({
            ref_key: "dynCmpRef",
            ref: E
          }, r.value, {
            "flow-step": vue.unref(O),
            onMount: vue.unref(se),
            onUpdateFlowStep: vue.unref(re),
            onResetFlow: vue.unref(H),
            onFocusMenu: T,
            onSelectDate: U[0] || (U[0] = function (j) {
              return C.$emit("select-date");
            }),
            onDateUpdate: U[1] || (U[1] = function (j) {
              return C.$emit("date-update", j);
            }),
            onTooltipOpen: U[2] || (U[2] = function (j) {
              return C.$emit("tooltip-open", j);
            }),
            onTooltipClose: U[3] || (U[3] = function (j) {
              return C.$emit("tooltip-close", j);
            }),
            onAutoApply: U[4] || (U[4] = function (j) {
              return C.$emit("auto-apply", j);
            }),
            onRangeStart: U[5] || (U[5] = function (j) {
              return C.$emit("range-start", j);
            }),
            onRangeEnd: U[6] || (U[6] = function (j) {
              return C.$emit("range-end", j);
            }),
            onInvalidFixedRange: U[7] || (U[7] = function (j) {
              return C.$emit("invalid-fixed-range", j);
            }),
            onTimeUpdate: U[8] || (U[8] = function (j) {
              return C.$emit("time-update");
            }),
            onAmPmChange: U[9] || (U[9] = function (j) {
              return C.$emit("am-pm-change", j);
            }),
            onTimePickerOpen: U[10] || (U[10] = function (j) {
              return C.$emit("time-picker-open", j);
            }),
            onTimePickerClose: B,
            onRecalculatePosition: te,
            onUpdateMonthYear: U[11] || (U[11] = function (j) {
              return C.$emit("update-month-year", j);
            }),
            onAutoApplyInvalid: U[12] || (U[12] = function (j) {
              return C.$emit("auto-apply-invalid", j);
            }),
            onInvalidDate: U[13] || (U[13] = function (j) {
              return C.$emit("invalid-date", j);
            }),
            "onUpdate:internalModelValue": U[14] || (U[14] = function (j) {
              return C.$emit("update:internal-model-value", j);
            })
          }), vue.createSlots({
            _: 2
          }, [vue.renderList(f.value, function (j, Qe) {
            return {
              name: j,
              fn: vue.withCtx(function (Ze) {
                return [vue.renderSlot(C.$slots, j, vue.normalizeProps(vue.guardReactiveProps(_objectSpread({}, Ze))))];
              })
            };
          })]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))], 512), C.$slots["right-sidebar"] ? (vue.openBlock(), vue.createElementBlock("div", yo, [vue.renderSlot(C.$slots, "right-sidebar", vue.normalizeProps(vue.guardReactiveProps(G.value)))])) : vue.createCommentVNode("", !0), C.$slots["action-extra"] ? (vue.openBlock(), vue.createElementBlock("div", po, [C.$slots["action-extra"] ? vue.renderSlot(C.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: v
          }) : vue.createCommentVNode("", !0)])) : vue.createCommentVNode("", !0)], 6), !C.autoApply || vue.unref(Y).keepActionRow ? (vue.openBlock(), vue.createBlock(gr, vue.mergeProps({
            key: 2,
            "menu-mount": N.value
          }, r.value, {
            "calendar-width": w.value,
            onClosePicker: U[15] || (U[15] = function (j) {
              return C.$emit("close-picker");
            }),
            onSelectDate: U[16] || (U[16] = function (j) {
              return C.$emit("select-date");
            }),
            onInvalidSelect: U[17] || (U[17] = function (j) {
              return C.$emit("invalid-select");
            }),
            onSelectNow: v
          }), vue.createSlots({
            _: 2
          }, [vue.renderList(vue.unref(m), function (j, Qe) {
            return {
              name: j,
              fn: vue.withCtx(function (Ze) {
                return [vue.renderSlot(C.$slots, j, vue.normalizeProps(vue.guardReactiveProps(_objectSpread({}, Ze))))];
              })
            };
          })]), 1040, ["menu-mount", "calendar-width"])) : vue.createCommentVNode("", !0)], 42, uo);
        };
      }
    }),
    ho = (typeof window === "undefined" ? "undefined" : babelHelpers["typeof"](window)) < "u" ? window : void 0,
    Tn = function Tn() {},
    bo = function bo(e) {
      return vue.getCurrentScope() ? (vue.onScopeDispose(e), !0) : !1;
    },
    ko = function ko(e, t, l, a) {
      if (!e) return Tn;
      var _n2 = Tn;
      var i = vue.watch(function () {
          return vue.unref(e);
        }, function (d) {
          _n2(), d && (d.addEventListener(t, l, a), _n2 = function n() {
            d.removeEventListener(t, l, a), _n2 = Tn;
          });
        }, {
          immediate: !0,
          flush: "post"
        }),
        r = function r() {
          i(), _n2();
        };
      return bo(r), r;
    },
    wo = function wo(e, t, l) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _a$window = a.window,
        n = _a$window === void 0 ? ho : _a$window,
        _a$event = a.event,
        i = _a$event === void 0 ? "pointerdown" : _a$event;
      return n ? ko(n, i, function (d) {
        var M = Ne(e),
          k = Ne(t);
        !M || !k || M === d.target || d.composedPath().includes(M) || d.composedPath().includes(k) || l(d);
      }, {
        passive: !0
      }) : void 0;
    },
    Do = /* @__PURE__ */vue.defineComponent({
      compatConfig: {
        MODE: 3
      },
      __name: "VueDatePicker",
      props: _objectSpread({}, sn),
      emits: ["update:model-value", "update:model-timezone-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "date-update", "invalid-date"],
      setup: function setup(e, _ref39) {
        var t = _ref39.expose,
          l = _ref39.emit;
        var a = l,
          n = e,
          i = vue.useSlots(),
          r = vue.ref(!1),
          d = vue.toRef(n, "modelValue"),
          M = vue.toRef(n, "timezone"),
          k = vue.ref(null),
          P = vue.ref(null),
          b = vue.ref(null),
          _ = vue.ref(!1),
          Y = vue.ref(null),
          $ = vue.ref(!1),
          w = vue.ref(!1),
          K = vue.ref(!1),
          _Na2 = Na(),
          N = _Na2.setMenuFocused,
          E = _Na2.setShiftKey,
          _ht8 = ht(),
          I = _ht8.clearArrowNav,
          _At7 = At(n),
          D = _At7.mapDatesArrToMap,
          R = _At7.validateDate,
          V = _At7.isValidTime,
          _Re23 = Re(n),
          ne = _Re23.defaultedTransitions,
          O = _Re23.defaultedTextInput,
          re = _Re23.defaultedInline,
          se = _Re23.defaultedConfig,
          H = _Re23.defaultedRange,
          _jt5 = jt(ne),
          g = _jt5.menuTransition,
          T = _jt5.showTransition;
        vue.onMounted(function () {
          B(n.modelValue), vue.nextTick().then(function () {
            if (!re.value.enabled) {
              var x = h(Y.value);
              x == null || x.addEventListener("scroll", U), window == null || window.addEventListener("resize", ve);
            }
          }), re.value.enabled && (r.value = !0), window == null || window.addEventListener("keyup", Me), window == null || window.addEventListener("keydown", j);
        });
        var G = vue.computed(function () {
          return D();
        });
        vue.onUnmounted(function () {
          if (!re.value.enabled) {
            var x = h(Y.value);
            x == null || x.removeEventListener("scroll", U), window == null || window.removeEventListener("resize", ve);
          }
          window == null || window.removeEventListener("keyup", Me), window == null || window.removeEventListener("keydown", j);
        });
        var te = Ge(i, "all", n.presetDates),
          m = Ge(i, "input");
        vue.watch([d, M], function () {
          B(d.value);
        }, {
          deep: !0
        });
        var _ar = ar({
            menuRef: k,
            menuRefInner: P,
            inputRef: b,
            pickerWrapperRef: Y,
            inline: re,
            emit: a,
            props: n,
            slots: i
          }),
          f = _ar.openOnTop,
          z = _ar.menuStyle,
          ae = _ar.xCorrect,
          s = _ar.setMenuPosition,
          h = _ar.getScrollableParent,
          o = _ar.shadowRender,
          _tr = tr(a, n, _),
          S = _tr.inputValue,
          u = _tr.internalModelValue,
          B = _tr.parseExternalModelValue,
          p = _tr.emitModelValue,
          J = _tr.formatInputValue,
          le = _tr.checkBeforeEmit,
          v = vue.computed(function () {
            return {
              dp__main: !0,
              dp__theme_dark: n.dark,
              dp__theme_light: !n.dark,
              dp__flex_display: re.value.enabled,
              "dp--flex-display-collapsed": K.value,
              dp__flex_display_with_input: re.value.input
            };
          }),
          Q = vue.computed(function () {
            return n.dark ? "dp__theme_dark" : "dp__theme_light";
          }),
          he = vue.computed(function () {
            return {
              to: typeof n.teleport == "boolean" ? "body" : n.teleport,
              disabled: !n.teleport || re.value.enabled
            };
          }),
          L = vue.computed(function () {
            return {
              "class": "dp__outer_menu_wrap"
            };
          }),
          C = vue.computed(function () {
            return re.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker);
          }),
          U = function U() {
            r.value && (se.value.closeOnScroll ? qe() : s());
          },
          ve = function ve() {
            var de;
            r.value && s();
            var x = (de = P.value) == null ? void 0 : de.$el.getBoundingClientRect().width;
            K.value = document.body.offsetWidth <= x;
          },
          Me = function Me(x) {
            x.key === "Tab" && !re.value.enabled && !n.teleport && se.value.tabOutClosesMenu && (Y.value.contains(document.activeElement) || qe()), w.value = x.shiftKey;
          },
          j = function j(x) {
            w.value = x.shiftKey;
          },
          Qe = function Qe() {
            !n.disabled && !n.readonly && (o(va, n), s(!1), r.value = !0, r.value && a("open"), r.value || It(), B(n.modelValue));
          },
          Ze = function Ze() {
            var x;
            S.value = "", It(), (x = b.value) == null || x.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), se.value.closeOnClearValue && qe();
          },
          St = function St() {
            var x = u.value;
            return !x || !Array.isArray(x) && R(x) ? !0 : Array.isArray(x) ? n.multiDates || x.length === 2 && R(x[0]) && R(x[1]) ? !0 : H.value.partialRange && !n.timePicker ? R(x[0]) : !1 : !1;
          },
          ct = function ct() {
            le() && St() ? (p(), qe()) : a("invalid-select", u.value);
          },
          qt = function qt(x) {
            Qt(), p(), se.value.closeOnAutoApply && !x && qe();
          },
          Qt = function Qt() {
            b.value && O.value.enabled && b.value.setParsedDate(u.value);
          },
          cn = function cn() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            n.autoApply && V(u.value) && St() && (H.value.enabled && Array.isArray(u.value) ? (H.value.partialRange || u.value.length === 2) && qt(x) : qt(x));
          },
          It = function It() {
            O.value.enabled || (u.value = null);
          },
          qe = function qe() {
            re.value.enabled || (r.value && (r.value = !1, ae.value = !1, N(!1), E(!1), I(), a("closed"), S.value && B(d.value)), It(), a("blur"));
          },
          fn = function fn(x, de) {
            var ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            if (!x) {
              u.value = null;
              return;
            }
            var bt = Array.isArray(x) ? !x.some(function (Gn) {
                return !R(Gn);
              }) : R(x),
              je = V(x);
            bt && je && (u.value = x, de && ($.value = ue, ct(), a("text-submit")));
          },
          vn = function vn() {
            n.autoApply && V(u.value) && p(), Qt();
          },
          Zt = function Zt() {
            return r.value ? qe() : Qe();
          },
          Kn = function Kn(x) {
            u.value = x;
          },
          y = function y() {
            O.value.enabled && (_.value = !0, J()), a("focus");
          },
          X = function X() {
            if (O.value.enabled && (_.value = !1, B(n.modelValue), $.value)) {
              var x = Yl(Y.value, w.value);
              x == null || x.focus();
            }
            a("blur");
          },
          ie = function ie(x) {
            P.value && P.value.updateMonthYear(0, {
              month: oa(x.month),
              year: oa(x.year)
            });
          },
          me = function me(x) {
            B(x !== null && x !== void 0 ? x : n.modelValue);
          },
          Te = function Te(x, de) {
            var ue;
            (ue = P.value) == null || ue.switchView(x, de);
          },
          at = function at(x) {
            return se.value.onClickOutside ? se.value.onClickOutside(x) : qe();
          };
        return wo(k, b, function () {
          return at(St);
        }), t({
          closeMenu: qe,
          selectDate: ct,
          clearValue: Ze,
          openMenu: Qe,
          onScroll: U,
          formatInputValue: J,
          // exposed for testing purposes
          updateInternalModelValue: Kn,
          // modify internal modelValue
          setMonthYear: ie,
          parseModel: me,
          switchView: Te,
          toggleMenu: Zt
        }), function (x, de) {
          return vue.openBlock(), vue.createElementBlock("div", {
            ref_key: "pickerWrapperRef",
            ref: Y,
            "class": vue.normalizeClass(v.value),
            "data-datepicker-instance": ""
          }, [vue.createVNode(cr, vue.mergeProps({
            ref_key: "inputRef",
            ref: b,
            "input-value": vue.unref(S),
            "onUpdate:inputValue": de[0] || (de[0] = function (ue) {
              return vue.isRef(S) ? S.value = ue : null;
            }),
            "is-menu-open": r.value
          }, x.$props, {
            onClear: Ze,
            onOpen: Qe,
            onSetInputDate: fn,
            onSetEmptyDate: vue.unref(p),
            onSelectDate: ct,
            onToggle: Zt,
            onClose: qe,
            onFocus: y,
            onBlur: X,
            onRealBlur: de[1] || (de[1] = function (ue) {
              return _.value = !1;
            })
          }), vue.createSlots({
            _: 2
          }, [vue.renderList(vue.unref(m), function (ue, bt) {
            return {
              name: ue,
              fn: vue.withCtx(function (je) {
                return [vue.renderSlot(x.$slots, ue, vue.normalizeProps(vue.guardReactiveProps(je)))];
              })
            };
          })]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]), vue.createVNode(vue.Teleport, vue.normalizeProps(vue.guardReactiveProps(he.value)), {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.Transition, {
                name: vue.unref(g)(vue.unref(f)),
                css: vue.unref(T) && !vue.unref(re).enabled
              }, {
                "default": vue.withCtx(function () {
                  var _class;
                  return [r.value ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
                    key: 0,
                    ref_key: "dpWrapMenuRef",
                    ref: k
                  }, L.value, {
                    "class": {
                      "dp--menu-wrapper": !vue.unref(re).enabled
                    },
                    style: vue.unref(re).enabled ? void 0 : vue.unref(z)
                  }), [vue.createVNode(va, vue.mergeProps({
                    ref_key: "dpMenuRef",
                    ref: P
                  }, x.$props, {
                    "internal-model-value": vue.unref(u),
                    "onUpdate:internalModelValue": de[2] || (de[2] = function (ue) {
                      return vue.isRef(u) ? u.value = ue : null;
                    }),
                    "class": (_class = {}, babelHelpers.defineProperty(_class, Q.value, !0), babelHelpers.defineProperty(_class, "dp--menu-wrapper", x.teleport), _class),
                    "open-on-top": vue.unref(f),
                    "arr-map-values": G.value,
                    "no-overlay-focus": C.value,
                    collapse: K.value,
                    onClosePicker: qe,
                    onSelectDate: ct,
                    onAutoApply: cn,
                    onTimeUpdate: vn,
                    onFlowStep: de[3] || (de[3] = function (ue) {
                      return x.$emit("flow-step", ue);
                    }),
                    onUpdateMonthYear: de[4] || (de[4] = function (ue) {
                      return x.$emit("update-month-year", ue);
                    }),
                    onInvalidSelect: de[5] || (de[5] = function (ue) {
                      return x.$emit("invalid-select", vue.unref(u));
                    }),
                    onAutoApplyInvalid: de[6] || (de[6] = function (ue) {
                      return x.$emit("invalid-select", ue);
                    }),
                    onInvalidFixedRange: de[7] || (de[7] = function (ue) {
                      return x.$emit("invalid-fixed-range", ue);
                    }),
                    onRecalculatePosition: vue.unref(s),
                    onTooltipOpen: de[8] || (de[8] = function (ue) {
                      return x.$emit("tooltip-open", ue);
                    }),
                    onTooltipClose: de[9] || (de[9] = function (ue) {
                      return x.$emit("tooltip-close", ue);
                    }),
                    onTimePickerOpen: de[10] || (de[10] = function (ue) {
                      return x.$emit("time-picker-open", ue);
                    }),
                    onTimePickerClose: de[11] || (de[11] = function (ue) {
                      return x.$emit("time-picker-close", ue);
                    }),
                    onAmPmChange: de[12] || (de[12] = function (ue) {
                      return x.$emit("am-pm-change", ue);
                    }),
                    onRangeStart: de[13] || (de[13] = function (ue) {
                      return x.$emit("range-start", ue);
                    }),
                    onRangeEnd: de[14] || (de[14] = function (ue) {
                      return x.$emit("range-end", ue);
                    }),
                    onDateUpdate: de[15] || (de[15] = function (ue) {
                      return x.$emit("date-update", ue);
                    }),
                    onInvalidDate: de[16] || (de[16] = function (ue) {
                      return x.$emit("invalid-date", ue);
                    })
                  }), vue.createSlots({
                    _: 2
                  }, [vue.renderList(vue.unref(te), function (ue, bt) {
                    return {
                      name: ue,
                      fn: vue.withCtx(function (je) {
                        return [vue.renderSlot(x.$slots, ue, vue.normalizeProps(vue.guardReactiveProps(_objectSpread({}, je))))];
                      })
                    };
                  })]), 1040, ["internal-model-value", "class", "open-on-top", "arr-map-values", "no-overlay-focus", "collapse", "onRecalculatePosition"])], 16)) : vue.createCommentVNode("", !0)];
                }),
                _: 3
              }, 8, ["name", "css"])];
            }),
            _: 3
          }, 16)], 2);
        };
      }
    }),
    Va = /* @__PURE__ */function () {
      var e = Do;
      return e.install = function (t) {
        t.component("Vue3DatePicker", e);
      }, e;
    }(),
    Mo = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
      __proto__: null,
      "default": Va
    }, Symbol.toStringTag, {
      value: "Module"
    }));
  Object.entries(Mo).forEach(function (_ref40) {
    var _ref41 = babelHelpers.slicedToArray(_ref40, 2),
      e = _ref41[0],
      t = _ref41[1];
    e !== "default" && (Va[e] = t);
  });

  exports.default = Va;

}((this.BX.Controls = this.BX.Controls || {}),BX,BX));
//# sourceMappingURL=component.bundle.js.map
