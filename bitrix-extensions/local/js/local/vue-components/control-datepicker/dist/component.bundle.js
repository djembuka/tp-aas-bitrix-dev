/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var _excluded = ["openOnTop"];
  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  // import BX from 'ui.vue3';

  var VueDatePicker = function (e) {

    var fi = Object.defineProperty;
    var mi = function mi(e, Ie, mt) {
      return Ie in e ? fi(e, Ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: mt
      }) : e[Ie] = mt;
    };
    var ae = function ae(e, Ie, mt) {
      return mi(e, babelHelpers["typeof"](Ie) != 'symbol' ? Ie + '' : Ie, mt);
    };
    function Ie() {
      var t = e.useAttrs();
      return e.openBlock(), e.createElementBlock('svg', _objectSpread({
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, t), [e.createElementVNode('path', {
        d: 'M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z'
      }), e.createElementVNode('path', {
        d: 'M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z'
      }), e.createElementVNode('path', {
        d: 'M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z'
      }), e.createElementVNode('path', {
        d: 'M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z'
      })]);
    }
    Ie.compatConfig = {
      MODE: 3
    };
    function mt() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z'
      }), e.createElementVNode('path', {
        d: 'M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z'
      })]);
    }
    mt.compatConfig = {
      MODE: 3
    };
    function on() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z'
      })]);
    }
    on.compatConfig = {
      MODE: 3
    };
    function ln() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z'
      })]);
    }
    ln.compatConfig = {
      MODE: 3
    };
    function sn() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z'
      }), e.createElementVNode('path', {
        d: 'M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z'
      })]);
    }
    sn.compatConfig = {
      MODE: 3
    };
    function un() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z'
      })]);
    }
    un.compatConfig = {
      MODE: 3
    };
    function cn() {
      return e.openBlock(), e.createElementBlock('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        "class": 'dp__icon',
        role: 'img'
      }, [e.createElementVNode('path', {
        d: 'M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z'
      })]);
    }
    cn.compatConfig = {
      MODE: 3
    };
    function oe(t) {
      var r = Object.prototype.toString.call(t);
      return t instanceof Date || babelHelpers["typeof"](t) == 'object' && r === '[object Date]' ? new t.constructor(+t) : typeof t == 'number' || r === '[object Number]' || typeof t == 'string' || r === '[object String]' ? new Date(t) : new Date(NaN);
    }
    function ge(t, r) {
      return t instanceof Date ? new t.constructor(r) : new Date(r);
    }
    function We(t, r) {
      var n = oe(t);
      return isNaN(r) ? ge(t, NaN) : (r && n.setDate(n.getDate() + r), n);
    }
    function qe(t, r) {
      var n = oe(t);
      if (isNaN(r)) return ge(t, NaN);
      if (!r) return n;
      var a = n.getDate(),
        o = ge(t, n.getTime());
      o.setMonth(n.getMonth() + r + 1, 0);
      var l = o.getDate();
      return a >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
    }
    function Jn(t, r) {
      var _r$years = r.years,
        n = _r$years === void 0 ? 0 : _r$years,
        _r$months = r.months,
        a = _r$months === void 0 ? 0 : _r$months,
        _r$weeks = r.weeks,
        o = _r$weeks === void 0 ? 0 : _r$weeks,
        _r$days = r.days,
        l = _r$days === void 0 ? 0 : _r$days,
        _r$hours = r.hours,
        s = _r$hours === void 0 ? 0 : _r$hours,
        _r$minutes = r.minutes,
        c = _r$minutes === void 0 ? 0 : _r$minutes,
        _r$seconds = r.seconds,
        u = _r$seconds === void 0 ? 0 : _r$seconds,
        B = oe(t),
        m = a || n ? qe(B, a + n * 12) : B,
        S = l || o ? We(m, l + o * 7) : m,
        g = c + s * 60,
        Y = (u + g * 60) * 1e3;
      return ge(t, S.getTime() + Y);
    }
    function rr(t, r) {
      var n = +oe(t);
      return ge(t, n + r);
    }
    var Zn = 6048e5,
      or = 864e5,
      lr = 6e4,
      ea = 36e5,
      sr = 1e3;
    function ir(t, r) {
      return rr(t, r * ea);
    }
    var ur = {};
    function ht() {
      return ur;
    }
    function Ue(t, r) {
      var _ref, _ref2, _ref3, _ref4;
      var c, u, B, m;
      var n = ht(),
        a = (_ref = (_ref2 = (_ref3 = (_ref4 = r == null ? void 0 : r.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : (u = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : n.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (m = (B = n.locale) == null ? void 0 : B.options) == null ? void 0 : m.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0,
        o = oe(t),
        l = o.getDay(),
        s = (l < a ? 7 : 0) + l - a;
      return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
    }
    function Dt(t) {
      return Ue(t, {
        weekStartsOn: 1
      });
    }
    function ta(t) {
      var r = oe(t),
        n = r.getFullYear(),
        a = ge(t, 0);
      a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
      var o = Dt(a),
        l = ge(t, 0);
      l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
      var s = Dt(l);
      return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
    }
    function na(t) {
      var r = oe(t);
      return r.setHours(0, 0, 0, 0), r;
    }
    function Ut(t) {
      var r = oe(t),
        n = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
      return n.setUTCFullYear(r.getFullYear()), +t - +n;
    }
    function aa(t, r) {
      var n = na(t),
        a = na(r),
        o = +n - Ut(n),
        l = +a - Ut(a);
      return Math.round((o - l) / or);
    }
    function cr(t) {
      var r = ta(t),
        n = ge(t, 0);
      return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Dt(n);
    }
    function dr(t, r) {
      var n = r * 3;
      return qe(t, n);
    }
    function dn(t, r) {
      return qe(t, r * 12);
    }
    function ra(t, r) {
      var n = oe(t),
        a = oe(r),
        o = n.getTime() - a.getTime();
      return o < 0 ? -1 : o > 0 ? 1 : o;
    }
    function oa(t) {
      return t instanceof Date || babelHelpers["typeof"](t) == 'object' && Object.prototype.toString.call(t) === '[object Date]';
    }
    function Ot(t) {
      if (!oa(t) && typeof t != 'number') return !1;
      var r = oe(t);
      return !isNaN(Number(r));
    }
    function la(t) {
      var r = oe(t);
      return Math.trunc(r.getMonth() / 3) + 1;
    }
    function fr(t, r) {
      var n = oe(t),
        a = oe(r);
      return n.getFullYear() - a.getFullYear();
    }
    function mr(t, r) {
      var n = oe(t),
        a = oe(r),
        o = ra(n, a),
        l = Math.abs(fr(n, a));
      n.setFullYear(1584), a.setFullYear(1584);
      var s = ra(n, a) === -o,
        c = o * (l - +s);
      return c === 0 ? 0 : c;
    }
    function sa(t, r) {
      var n = oe(t.start),
        a = oe(t.end);
      var o = +n > +a;
      var l = o ? +n : +a,
        s = o ? a : n;
      s.setHours(0, 0, 0, 0);
      var c = 1;
      var u = [];
      for (; +s <= l;) u.push(oe(s)), s.setDate(s.getDate() + c), s.setHours(0, 0, 0, 0);
      return o ? u.reverse() : u;
    }
    function pt(t) {
      var r = oe(t),
        n = r.getMonth(),
        a = n - n % 3;
      return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
    }
    function hr(t, r) {
      var n = oe(t.start),
        a = oe(t.end);
      var o = +n > +a;
      var l = o ? +pt(n) : +pt(a);
      var s = pt(o ? a : n),
        c = 1;
      var u = [];
      for (; +s <= l;) u.push(oe(s)), s = dr(s, c);
      return o ? u.reverse() : u;
    }
    function pr(t) {
      var r = oe(t);
      return r.setDate(1), r.setHours(0, 0, 0, 0), r;
    }
    function ia(t) {
      var r = oe(t),
        n = r.getFullYear();
      return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
    }
    function Et(t) {
      var r = oe(t),
        n = ge(t, 0);
      return n.setFullYear(r.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    function ua(t, r) {
      var _ref5, _ref6, _ref7, _ref8;
      var c, u, B, m;
      var n = ht(),
        a = (_ref5 = (_ref6 = (_ref7 = (_ref8 = r == null ? void 0 : r.weekStartsOn) !== null && _ref8 !== void 0 ? _ref8 : (u = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : n.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (m = (B = n.locale) == null ? void 0 : B.options) == null ? void 0 : m.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0,
        o = oe(t),
        l = o.getDay(),
        s = (l < a ? -7 : 0) + 6 - (l - a);
      return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
    }
    function ca(t) {
      var r = oe(t),
        n = r.getMonth(),
        a = n - n % 3 + 3;
      return r.setMonth(a, 0), r.setHours(23, 59, 59, 999), r;
    }
    var gr = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds'
        },
        xSeconds: {
          one: '1 second',
          other: '{{count}} seconds'
        },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes'
        },
        xMinutes: {
          one: '1 minute',
          other: '{{count}} minutes'
        },
        aboutXHours: {
          one: 'about 1 hour',
          other: 'about {{count}} hours'
        },
        xHours: {
          one: '1 hour',
          other: '{{count}} hours'
        },
        xDays: {
          one: '1 day',
          other: '{{count}} days'
        },
        aboutXWeeks: {
          one: 'about 1 week',
          other: 'about {{count}} weeks'
        },
        xWeeks: {
          one: '1 week',
          other: '{{count}} weeks'
        },
        aboutXMonths: {
          one: 'about 1 month',
          other: 'about {{count}} months'
        },
        xMonths: {
          one: '1 month',
          other: '{{count}} months'
        },
        aboutXYears: {
          one: 'about 1 year',
          other: 'about {{count}} years'
        },
        xYears: {
          one: '1 year',
          other: '{{count}} years'
        },
        overXYears: {
          one: 'over 1 year',
          other: 'over {{count}} years'
        },
        almostXYears: {
          one: 'almost 1 year',
          other: 'almost {{count}} years'
        }
      },
      yr = function yr(t, r, n) {
        var a;
        var o = gr[t];
        return typeof o == 'string' ? a = o : r === 1 ? a = o.one : a = o.other.replace('{{count}}', r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? 'in ' + a : a + ' ago' : a;
      };
    function fn(t) {
      return function () {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = r.width ? String(r.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth];
      };
    }
    var wr = {
        full: 'EEEE, MMMM do, y',
        "long": 'MMMM do, y',
        medium: 'MMM d, y',
        "short": 'MM/dd/yyyy'
      },
      kr = {
        full: 'h:mm:ss a zzzz',
        "long": 'h:mm:ss a z',
        medium: 'h:mm:ss a',
        "short": 'h:mm a'
      },
      br = {
        full: "{{date}} 'at' {{time}}",
        "long": "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        "short": '{{date}}, {{time}}'
      },
      vr = {
        date: fn({
          formats: wr,
          defaultWidth: 'full'
        }),
        time: fn({
          formats: kr,
          defaultWidth: 'full'
        }),
        dateTime: fn({
          formats: br,
          defaultWidth: 'full'
        })
      },
      Dr = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P'
      },
      Mr = function Mr(t, r, n, a) {
        return Dr[t];
      };
    function Rt(t) {
      return function (r, n) {
        var a = n != null && n.context ? String(n.context) : 'standalone';
        var o;
        if (a === 'formatting' && t.formattingValues) {
          var s = t.defaultFormattingWidth || t.defaultWidth,
            c = n != null && n.width ? String(n.width) : s;
          o = t.formattingValues[c] || t.formattingValues[s];
        } else {
          var _s2 = t.defaultWidth,
            _c = n != null && n.width ? String(n.width) : t.defaultWidth;
          o = t.values[_c] || t.values[_s2];
        }
        var l = t.argumentCallback ? t.argumentCallback(r) : r;
        return o[l];
      };
    }
    var Tr = {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini']
      },
      Pr = {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
      },
      Cr = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      Br = {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        "short": ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      Sr = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night'
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night'
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night'
        }
      },
      $r = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night'
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night'
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night'
        }
      },
      Ar = {
        ordinalNumber: function ordinalNumber(t, r) {
          var n = Number(t),
            a = n % 100;
          if (a > 20 || a < 10) switch (a % 10) {
            case 1:
              return n + 'st';
            case 2:
              return n + 'nd';
            case 3:
              return n + 'rd';
          }
          return n + 'th';
        },
        era: Rt({
          values: Tr,
          defaultWidth: 'wide'
        }),
        quarter: Rt({
          values: Pr,
          defaultWidth: 'wide',
          argumentCallback: function argumentCallback(t) {
            return t - 1;
          }
        }),
        month: Rt({
          values: Cr,
          defaultWidth: 'wide'
        }),
        day: Rt({
          values: Br,
          defaultWidth: 'wide'
        }),
        dayPeriod: Rt({
          values: Sr,
          defaultWidth: 'wide',
          formattingValues: $r,
          defaultFormattingWidth: 'wide'
        })
      };
    function _t(t) {
      return function (r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = n.width,
          o = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth],
          l = r.match(o);
        if (!l) return null;
        var s = l[0],
          c = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth],
          u = Array.isArray(c) ? Or(c, function (S) {
            return S.test(s);
          }) : Nr(c, function (S) {
            return S.test(s);
          });
        var B;
        B = t.valueCallback ? t.valueCallback(u) : u, B = n.valueCallback ? n.valueCallback(B) : B;
        var m = r.slice(s.length);
        return {
          value: B,
          rest: m
        };
      };
    }
    function Nr(t, r) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n])) return n;
    }
    function Or(t, r) {
      for (var n = 0; n < t.length; n++) if (r(t[n])) return n;
    }
    function Er(t) {
      return function (r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = r.match(t.matchPattern);
        if (!a) return null;
        var o = a[0],
          l = r.match(t.parsePattern);
        if (!l) return null;
        var s = t.valueCallback ? t.valueCallback(l[0]) : l[0];
        s = n.valueCallback ? n.valueCallback(s) : s;
        var c = r.slice(o.length);
        return {
          value: s,
          rest: c
        };
      };
    }
    var Rr = /^(\d+)(th|st|nd|rd)?/i,
      _r = /\d+/i,
      Yr = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
      },
      xr = {
        any: [/^b/i, /^(a|c)/i]
      },
      Vr = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
      },
      Ir = {
        any: [/1/i, /2/i, /3/i, /4/i]
      },
      Fr = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
      },
      Lr = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
      },
      Hr = {
        narrow: /^[smtwf]/i,
        "short": /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
      },
      zr = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
      },
      Wr = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
      },
      qr = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i
        }
      },
      Ur = {
        ordinalNumber: Er({
          matchPattern: Rr,
          parsePattern: _r,
          valueCallback: function valueCallback(t) {
            return parseInt(t, 10);
          }
        }),
        era: _t({
          matchPatterns: Yr,
          defaultMatchWidth: 'wide',
          parsePatterns: xr,
          defaultParseWidth: 'any'
        }),
        quarter: _t({
          matchPatterns: Vr,
          defaultMatchWidth: 'wide',
          parsePatterns: Ir,
          defaultParseWidth: 'any',
          valueCallback: function valueCallback(t) {
            return t + 1;
          }
        }),
        month: _t({
          matchPatterns: Fr,
          defaultMatchWidth: 'wide',
          parsePatterns: Lr,
          defaultParseWidth: 'any'
        }),
        day: _t({
          matchPatterns: Hr,
          defaultMatchWidth: 'wide',
          parsePatterns: zr,
          defaultParseWidth: 'any'
        }),
        dayPeriod: _t({
          matchPatterns: Wr,
          defaultMatchWidth: 'any',
          parsePatterns: qr,
          defaultParseWidth: 'any'
        })
      },
      da = {
        code: 'en-US',
        formatDistance: yr,
        formatLong: vr,
        formatRelative: Mr,
        localize: Ar,
        match: Ur,
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      };
    function jr(t) {
      var r = oe(t);
      return aa(r, Et(r)) + 1;
    }
    function mn(t) {
      var r = oe(t),
        n = +Dt(r) - +cr(r);
      return Math.round(n / Zn) + 1;
    }
    function hn(t, r) {
      var _ref9, _ref10, _ref11, _ref12;
      var m, S, g, C;
      var n = oe(t),
        a = n.getFullYear(),
        o = ht(),
        l = (_ref9 = (_ref10 = (_ref11 = (_ref12 = r == null ? void 0 : r.firstWeekContainsDate) !== null && _ref12 !== void 0 ? _ref12 : (S = (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) == null ? void 0 : S.firstWeekContainsDate) !== null && _ref11 !== void 0 ? _ref11 : o.firstWeekContainsDate) !== null && _ref10 !== void 0 ? _ref10 : (C = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : C.firstWeekContainsDate) !== null && _ref9 !== void 0 ? _ref9 : 1,
        s = ge(t, 0);
      s.setFullYear(a + 1, 0, l), s.setHours(0, 0, 0, 0);
      var c = Ue(s, r),
        u = ge(t, 0);
      u.setFullYear(a, 0, l), u.setHours(0, 0, 0, 0);
      var B = Ue(u, r);
      return n.getTime() >= c.getTime() ? a + 1 : n.getTime() >= B.getTime() ? a : a - 1;
    }
    function Qr(t, r) {
      var _ref13, _ref14, _ref15, _ref16;
      var c, u, B, m;
      var n = ht(),
        a = (_ref13 = (_ref14 = (_ref15 = (_ref16 = r == null ? void 0 : r.firstWeekContainsDate) !== null && _ref16 !== void 0 ? _ref16 : (u = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) !== null && _ref15 !== void 0 ? _ref15 : n.firstWeekContainsDate) !== null && _ref14 !== void 0 ? _ref14 : (m = (B = n.locale) == null ? void 0 : B.options) == null ? void 0 : m.firstWeekContainsDate) !== null && _ref13 !== void 0 ? _ref13 : 1,
        o = hn(t, r),
        l = ge(t, 0);
      return l.setFullYear(o, 0, a), l.setHours(0, 0, 0, 0), Ue(l, r);
    }
    function pn(t, r) {
      var n = oe(t),
        a = +Ue(n, r) - +Qr(n, r);
      return Math.round(a / Zn) + 1;
    }
    function we(t, r) {
      var n = t < 0 ? '-' : '',
        a = Math.abs(t).toString().padStart(r, '0');
      return n + a;
    }
    var rt = {
        y: function y(t, r) {
          var n = t.getFullYear(),
            a = n > 0 ? n : 1 - n;
          return we(r === 'yy' ? a % 100 : a, r.length);
        },
        M: function M(t, r) {
          var n = t.getMonth();
          return r === 'M' ? String(n + 1) : we(n + 1, 2);
        },
        d: function d(t, r) {
          return we(t.getDate(), r.length);
        },
        a: function a(t, r) {
          var n = t.getHours() / 12 >= 1 ? 'pm' : 'am';
          switch (r) {
            case 'a':
            case 'aa':
              return n.toUpperCase();
            case 'aaa':
              return n;
            case 'aaaaa':
              return n[0];
            case 'aaaa':
            default:
              return n === 'am' ? 'a.m.' : 'p.m.';
          }
        },
        h: function h(t, r) {
          return we(t.getHours() % 12 || 12, r.length);
        },
        H: function H(t, r) {
          return we(t.getHours(), r.length);
        },
        m: function m(t, r) {
          return we(t.getMinutes(), r.length);
        },
        s: function s(t, r) {
          return we(t.getSeconds(), r.length);
        },
        S: function S(t, r) {
          var n = r.length,
            a = t.getMilliseconds(),
            o = Math.trunc(a * Math.pow(10, n - 3));
          return we(o, r.length);
        }
      },
      Mt = {
        am: 'am',
        pm: 'pm',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
      },
      fa = {
        G: function G(t, r, n) {
          var a = t.getFullYear() > 0 ? 1 : 0;
          switch (r) {
            case 'G':
            case 'GG':
            case 'GGG':
              return n.era(a, {
                width: 'abbreviated'
              });
            case 'GGGGG':
              return n.era(a, {
                width: 'narrow'
              });
            case 'GGGG':
            default:
              return n.era(a, {
                width: 'wide'
              });
          }
        },
        y: function y(t, r, n) {
          if (r === 'yo') {
            var a = t.getFullYear(),
              o = a > 0 ? a : 1 - a;
            return n.ordinalNumber(o, {
              unit: 'year'
            });
          }
          return rt.y(t, r);
        },
        Y: function Y(t, r, n, a) {
          var o = hn(t, a),
            l = o > 0 ? o : 1 - o;
          if (r === 'YY') {
            var s = l % 100;
            return we(s, 2);
          }
          return r === 'Yo' ? n.ordinalNumber(l, {
            unit: 'year'
          }) : we(l, r.length);
        },
        R: function R(t, r) {
          var n = ta(t);
          return we(n, r.length);
        },
        u: function u(t, r) {
          var n = t.getFullYear();
          return we(n, r.length);
        },
        Q: function Q(t, r, n) {
          var a = Math.ceil((t.getMonth() + 1) / 3);
          switch (r) {
            case 'Q':
              return String(a);
            case 'QQ':
              return we(a, 2);
            case 'Qo':
              return n.ordinalNumber(a, {
                unit: 'quarter'
              });
            case 'QQQ':
              return n.quarter(a, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'QQQQQ':
              return n.quarter(a, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'QQQQ':
            default:
              return n.quarter(a, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        q: function q(t, r, n) {
          var a = Math.ceil((t.getMonth() + 1) / 3);
          switch (r) {
            case 'q':
              return String(a);
            case 'qq':
              return we(a, 2);
            case 'qo':
              return n.ordinalNumber(a, {
                unit: 'quarter'
              });
            case 'qqq':
              return n.quarter(a, {
                width: 'abbreviated',
                context: 'standalone'
              });
            case 'qqqqq':
              return n.quarter(a, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'qqqq':
            default:
              return n.quarter(a, {
                width: 'wide',
                context: 'standalone'
              });
          }
        },
        M: function M(t, r, n) {
          var a = t.getMonth();
          switch (r) {
            case 'M':
            case 'MM':
              return rt.M(t, r);
            case 'Mo':
              return n.ordinalNumber(a + 1, {
                unit: 'month'
              });
            case 'MMM':
              return n.month(a, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'MMMMM':
              return n.month(a, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'MMMM':
            default:
              return n.month(a, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        L: function L(t, r, n) {
          var a = t.getMonth();
          switch (r) {
            case 'L':
              return String(a + 1);
            case 'LL':
              return we(a + 1, 2);
            case 'Lo':
              return n.ordinalNumber(a + 1, {
                unit: 'month'
              });
            case 'LLL':
              return n.month(a, {
                width: 'abbreviated',
                context: 'standalone'
              });
            case 'LLLLL':
              return n.month(a, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'LLLL':
            default:
              return n.month(a, {
                width: 'wide',
                context: 'standalone'
              });
          }
        },
        w: function w(t, r, n, a) {
          var o = pn(t, a);
          return r === 'wo' ? n.ordinalNumber(o, {
            unit: 'week'
          }) : we(o, r.length);
        },
        I: function I(t, r, n) {
          var a = mn(t);
          return r === 'Io' ? n.ordinalNumber(a, {
            unit: 'week'
          }) : we(a, r.length);
        },
        d: function d(t, r, n) {
          return r === 'do' ? n.ordinalNumber(t.getDate(), {
            unit: 'date'
          }) : rt.d(t, r);
        },
        D: function D(t, r, n) {
          var a = jr(t);
          return r === 'Do' ? n.ordinalNumber(a, {
            unit: 'dayOfYear'
          }) : we(a, r.length);
        },
        E: function E(t, r, n) {
          var a = t.getDay();
          switch (r) {
            case 'E':
            case 'EE':
            case 'EEE':
              return n.day(a, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'EEEEE':
              return n.day(a, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'EEEEEE':
              return n.day(a, {
                width: 'short',
                context: 'formatting'
              });
            case 'EEEE':
            default:
              return n.day(a, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        e: function e(t, r, n, a) {
          var o = t.getDay(),
            l = (o - a.weekStartsOn + 8) % 7 || 7;
          switch (r) {
            case 'e':
              return String(l);
            case 'ee':
              return we(l, 2);
            case 'eo':
              return n.ordinalNumber(l, {
                unit: 'day'
              });
            case 'eee':
              return n.day(o, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'eeeee':
              return n.day(o, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'eeeeee':
              return n.day(o, {
                width: 'short',
                context: 'formatting'
              });
            case 'eeee':
            default:
              return n.day(o, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        c: function c(t, r, n, a) {
          var o = t.getDay(),
            l = (o - a.weekStartsOn + 8) % 7 || 7;
          switch (r) {
            case 'c':
              return String(l);
            case 'cc':
              return we(l, r.length);
            case 'co':
              return n.ordinalNumber(l, {
                unit: 'day'
              });
            case 'ccc':
              return n.day(o, {
                width: 'abbreviated',
                context: 'standalone'
              });
            case 'ccccc':
              return n.day(o, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'cccccc':
              return n.day(o, {
                width: 'short',
                context: 'standalone'
              });
            case 'cccc':
            default:
              return n.day(o, {
                width: 'wide',
                context: 'standalone'
              });
          }
        },
        i: function i(t, r, n) {
          var a = t.getDay(),
            o = a === 0 ? 7 : a;
          switch (r) {
            case 'i':
              return String(o);
            case 'ii':
              return we(o, r.length);
            case 'io':
              return n.ordinalNumber(o, {
                unit: 'day'
              });
            case 'iii':
              return n.day(a, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'iiiii':
              return n.day(a, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'iiiiii':
              return n.day(a, {
                width: 'short',
                context: 'formatting'
              });
            case 'iiii':
            default:
              return n.day(a, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        a: function a(t, r, n) {
          var o = t.getHours() / 12 >= 1 ? 'pm' : 'am';
          switch (r) {
            case 'a':
            case 'aa':
              return n.dayPeriod(o, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'aaa':
              return n.dayPeriod(o, {
                width: 'abbreviated',
                context: 'formatting'
              }).toLowerCase();
            case 'aaaaa':
              return n.dayPeriod(o, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'aaaa':
            default:
              return n.dayPeriod(o, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        b: function b(t, r, n) {
          var a = t.getHours();
          var o;
          switch (a === 12 ? o = Mt.noon : a === 0 ? o = Mt.midnight : o = a / 12 >= 1 ? 'pm' : 'am', r) {
            case 'b':
            case 'bb':
              return n.dayPeriod(o, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'bbb':
              return n.dayPeriod(o, {
                width: 'abbreviated',
                context: 'formatting'
              }).toLowerCase();
            case 'bbbbb':
              return n.dayPeriod(o, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'bbbb':
            default:
              return n.dayPeriod(o, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        B: function B(t, r, n) {
          var a = t.getHours();
          var o;
          switch (a >= 17 ? o = Mt.evening : a >= 12 ? o = Mt.afternoon : a >= 4 ? o = Mt.morning : o = Mt.night, r) {
            case 'B':
            case 'BB':
            case 'BBB':
              return n.dayPeriod(o, {
                width: 'abbreviated',
                context: 'formatting'
              });
            case 'BBBBB':
              return n.dayPeriod(o, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'BBBB':
            default:
              return n.dayPeriod(o, {
                width: 'wide',
                context: 'formatting'
              });
          }
        },
        h: function h(t, r, n) {
          if (r === 'ho') {
            var a = t.getHours() % 12;
            return a === 0 && (a = 12), n.ordinalNumber(a, {
              unit: 'hour'
            });
          }
          return rt.h(t, r);
        },
        H: function H(t, r, n) {
          return r === 'Ho' ? n.ordinalNumber(t.getHours(), {
            unit: 'hour'
          }) : rt.H(t, r);
        },
        K: function K(t, r, n) {
          var a = t.getHours() % 12;
          return r === 'Ko' ? n.ordinalNumber(a, {
            unit: 'hour'
          }) : we(a, r.length);
        },
        k: function k(t, r, n) {
          var a = t.getHours();
          return a === 0 && (a = 24), r === 'ko' ? n.ordinalNumber(a, {
            unit: 'hour'
          }) : we(a, r.length);
        },
        m: function m(t, r, n) {
          return r === 'mo' ? n.ordinalNumber(t.getMinutes(), {
            unit: 'minute'
          }) : rt.m(t, r);
        },
        s: function s(t, r, n) {
          return r === 'so' ? n.ordinalNumber(t.getSeconds(), {
            unit: 'second'
          }) : rt.s(t, r);
        },
        S: function S(t, r) {
          return rt.S(t, r);
        },
        X: function X(t, r, n) {
          var a = t.getTimezoneOffset();
          if (a === 0) return 'Z';
          switch (r) {
            case 'X':
              return ha(a);
            case 'XXXX':
            case 'XX':
              return gt(a);
            case 'XXXXX':
            case 'XXX':
            default:
              return gt(a, ':');
          }
        },
        x: function x(t, r, n) {
          var a = t.getTimezoneOffset();
          switch (r) {
            case 'x':
              return ha(a);
            case 'xxxx':
            case 'xx':
              return gt(a);
            case 'xxxxx':
            case 'xxx':
            default:
              return gt(a, ':');
          }
        },
        O: function O(t, r, n) {
          var a = t.getTimezoneOffset();
          switch (r) {
            case 'O':
            case 'OO':
            case 'OOO':
              return 'GMT' + ma(a, ':');
            case 'OOOO':
            default:
              return 'GMT' + gt(a, ':');
          }
        },
        z: function z(t, r, n) {
          var a = t.getTimezoneOffset();
          switch (r) {
            case 'z':
            case 'zz':
            case 'zzz':
              return 'GMT' + ma(a, ':');
            case 'zzzz':
            default:
              return 'GMT' + gt(a, ':');
          }
        },
        t: function t(_t2, r, n) {
          var a = Math.trunc(_t2.getTime() / 1e3);
          return we(a, r.length);
        },
        T: function T(t, r, n) {
          var a = t.getTime();
          return we(a, r.length);
        }
      };
    function ma(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var n = t > 0 ? '-' : '+',
        a = Math.abs(t),
        o = Math.trunc(a / 60),
        l = a % 60;
      return l === 0 ? n + String(o) : n + String(o) + r + we(l, 2);
    }
    function ha(t, r) {
      return t % 60 === 0 ? (t > 0 ? '-' : '+') + we(Math.abs(t) / 60, 2) : gt(t, r);
    }
    function gt(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var n = t > 0 ? '-' : '+',
        a = Math.abs(t),
        o = we(Math.trunc(a / 60), 2),
        l = we(a % 60, 2);
      return n + o + r + l;
    }
    var pa = function pa(t, r) {
        switch (t) {
          case 'P':
            return r.date({
              width: 'short'
            });
          case 'PP':
            return r.date({
              width: 'medium'
            });
          case 'PPP':
            return r.date({
              width: 'long'
            });
          case 'PPPP':
          default:
            return r.date({
              width: 'full'
            });
        }
      },
      ga = function ga(t, r) {
        switch (t) {
          case 'p':
            return r.time({
              width: 'short'
            });
          case 'pp':
            return r.time({
              width: 'medium'
            });
          case 'ppp':
            return r.time({
              width: 'long'
            });
          case 'pppp':
          default:
            return r.time({
              width: 'full'
            });
        }
      },
      gn = {
        p: ga,
        P: function P(t, r) {
          var n = t.match(/(P+)(p+)?/) || [],
            a = n[1],
            o = n[2];
          if (!o) return pa(t, r);
          var l;
          switch (a) {
            case 'P':
              l = r.dateTime({
                width: 'short'
              });
              break;
            case 'PP':
              l = r.dateTime({
                width: 'medium'
              });
              break;
            case 'PPP':
              l = r.dateTime({
                width: 'long'
              });
              break;
            case 'PPPP':
            default:
              l = r.dateTime({
                width: 'full'
              });
              break;
          }
          return l.replace('{{date}}', pa(a, r)).replace('{{time}}', ga(o, r));
        }
      },
      Gr = /^D+$/,
      Kr = /^Y+$/,
      Xr = ['D', 'DD', 'YY', 'YYYY'];
    function ya(t) {
      return Gr.test(t);
    }
    function wa(t) {
      return Kr.test(t);
    }
    function yn(t, r, n) {
      var a = Jr(t, r, n);
      if (console.warn(a), Xr.includes(t)) throw new RangeError(a);
    }
    function Jr(t, r, n) {
      var a = t[0] === 'Y' ? 'years' : 'days of the month';
      return "Use `".concat(t.toLowerCase(), "` instead of `").concat(t, "` (in `").concat(r, "`) for formatting ").concat(a, " to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
    }
    var Zr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      eo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      to = /^'([^]*?)'?$/,
      no = /''/g,
      ao = /[a-zA-Z]/;
    function Ke(t, r, n) {
      var _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26;
      var m, S, g, C, Y, x, I, p;
      var a = ht(),
        o = (_ref17 = (_ref18 = n == null ? void 0 : n.locale) !== null && _ref18 !== void 0 ? _ref18 : a.locale) !== null && _ref17 !== void 0 ? _ref17 : da,
        l = (_ref19 = (_ref20 = (_ref21 = (_ref22 = n == null ? void 0 : n.firstWeekContainsDate) !== null && _ref22 !== void 0 ? _ref22 : (S = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : S.firstWeekContainsDate) !== null && _ref21 !== void 0 ? _ref21 : a.firstWeekContainsDate) !== null && _ref20 !== void 0 ? _ref20 : (C = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : C.firstWeekContainsDate) !== null && _ref19 !== void 0 ? _ref19 : 1,
        s = (_ref23 = (_ref24 = (_ref25 = (_ref26 = n == null ? void 0 : n.weekStartsOn) !== null && _ref26 !== void 0 ? _ref26 : (x = (Y = n == null ? void 0 : n.locale) == null ? void 0 : Y.options) == null ? void 0 : x.weekStartsOn) !== null && _ref25 !== void 0 ? _ref25 : a.weekStartsOn) !== null && _ref24 !== void 0 ? _ref24 : (p = (I = a.locale) == null ? void 0 : I.options) == null ? void 0 : p.weekStartsOn) !== null && _ref23 !== void 0 ? _ref23 : 0,
        c = oe(t);
      if (!Ot(c)) throw new RangeError('Invalid time value');
      var u = r.match(eo).map(function ($) {
        var P = $[0];
        if (P === 'p' || P === 'P') {
          var z = gn[P];
          return z($, o.formatLong);
        }
        return $;
      }).join('').match(Zr).map(function ($) {
        if ($ === "''") return {
          isToken: !1,
          value: "'"
        };
        var P = $[0];
        if (P === "'") return {
          isToken: !1,
          value: ro($)
        };
        if (fa[P]) return {
          isToken: !0,
          value: $
        };
        if (P.match(ao)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + P + '`');
        return {
          isToken: !1,
          value: $
        };
      });
      o.localize.preprocessor && (u = o.localize.preprocessor(c, u));
      var B = {
        firstWeekContainsDate: l,
        weekStartsOn: s,
        locale: o
      };
      return u.map(function ($) {
        if (!$.isToken) return $.value;
        var P = $.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && wa(P) || !(n != null && n.useAdditionalDayOfYearTokens) && ya(P)) && yn(P, r, String(t));
        var z = fa[P[0]];
        return z(c, P, o.localize, B);
      }).join('');
    }
    function ro(t) {
      var r = t.match(to);
      return r ? r[1].replace(no, "'") : t;
    }
    function oo(t) {
      return oe(t).getDay();
    }
    function lo(t) {
      var r = oe(t),
        n = r.getFullYear(),
        a = r.getMonth(),
        o = ge(t, 0);
      return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
    }
    function so() {
      return Object.assign({}, ht());
    }
    function tt(t) {
      return oe(t).getHours();
    }
    function io(t) {
      var n = oe(t).getDay();
      return n === 0 && (n = 7), n;
    }
    function ot(t) {
      return oe(t).getMinutes();
    }
    function he(t) {
      return oe(t).getMonth();
    }
    function Tt(t) {
      return oe(t).getSeconds();
    }
    function ce(t) {
      return oe(t).getFullYear();
    }
    function Pt(t, r) {
      var n = oe(t),
        a = oe(r);
      return n.getTime() > a.getTime();
    }
    function Yt(t, r) {
      var n = oe(t),
        a = oe(r);
      return +n < +a;
    }
    function Ct(t, r) {
      var n = oe(t),
        a = oe(r);
      return +n == +a;
    }
    function uo(t, r) {
      var n = r instanceof Date ? ge(r, 0) : new r(0);
      return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), n;
    }
    var co = 10;
    var ka = /*#__PURE__*/function () {
      function ka() {
        babelHelpers.classCallCheck(this, ka);
        ae(this, 'subPriority', 0);
      }
      babelHelpers.createClass(ka, [{
        key: "validate",
        value: function validate(r, n) {
          return !0;
        }
      }]);
      return ka;
    }();
    var fo = /*#__PURE__*/function (_ka) {
      babelHelpers.inherits(fo, _ka);
      function fo(r, n, a, o, l) {
        var _this;
        babelHelpers.classCallCheck(this, fo);
        _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(fo).call(this)), _this.value = r, _this.validateValue = n, _this.setValue = a, _this.priority = o, l && (_this.subPriority = l);
        return _this;
      }
      babelHelpers.createClass(fo, [{
        key: "validate",
        value: function validate(r, n) {
          return this.validateValue(r, this.value, n);
        }
      }, {
        key: "set",
        value: function set(r, n, a) {
          return this.setValue(r, n, this.value, a);
        }
      }]);
      return fo;
    }(ka);
    var mo = /*#__PURE__*/function (_ka2) {
      babelHelpers.inherits(mo, _ka2);
      function mo() {
        var _this2;
        babelHelpers.classCallCheck(this, mo);
        _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(mo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this2), 'priority', co);
        ae(babelHelpers.assertThisInitialized(_this2), 'subPriority', -1);
        return _this2;
      }
      babelHelpers.createClass(mo, [{
        key: "set",
        value: function set(n, a) {
          return a.timestampIsSet ? n : ge(n, uo(n, Date));
        }
      }]);
      return mo;
    }(ka);
    var ye = /*#__PURE__*/function () {
      function ye() {
        babelHelpers.classCallCheck(this, ye);
      }
      babelHelpers.createClass(ye, [{
        key: "run",
        value: function run(r, n, a, o) {
          var l = this.parse(r, n, a, o);
          return l ? {
            setter: new fo(l.value, this.validate, this.set, this.priority, this.subPriority),
            rest: l.rest
          } : null;
        }
      }, {
        key: "validate",
        value: function validate(r, n, a) {
          return !0;
        }
      }]);
      return ye;
    }();
    var ho = /*#__PURE__*/function (_ye) {
      babelHelpers.inherits(ho, _ye);
      function ho() {
        var _this3;
        babelHelpers.classCallCheck(this, ho);
        _this3 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ho).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this3), 'priority', 140);
        ae(babelHelpers.assertThisInitialized(_this3), 'incompatibleTokens', ['R', 'u', 't', 'T']);
        return _this3;
      }
      babelHelpers.createClass(ho, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'G':
            case 'GG':
            case 'GGG':
              return o.era(n, {
                width: 'abbreviated'
              }) || o.era(n, {
                width: 'narrow'
              });
            case 'GGGGG':
              return o.era(n, {
                width: 'narrow'
              });
            case 'GGGG':
            default:
              return o.era(n, {
                width: 'wide'
              }) || o.era(n, {
                width: 'abbreviated'
              }) || o.era(n, {
                width: 'narrow'
              });
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return a.era = o, n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return ho;
    }(ye);
    var Be = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
      },
      Xe = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
      };
    function Se(t, r) {
      return t && {
        value: r(t.value),
        rest: t.rest
      };
    }
    function Te(t, r) {
      var n = r.match(t);
      return n ? {
        value: parseInt(n[0], 10),
        rest: r.slice(n[0].length)
      } : null;
    }
    function Je(t, r) {
      var n = r.match(t);
      if (!n) return null;
      if (n[0] === 'Z') return {
        value: 0,
        rest: r.slice(1)
      };
      var a = n[1] === '+' ? 1 : -1,
        o = n[2] ? parseInt(n[2], 10) : 0,
        l = n[3] ? parseInt(n[3], 10) : 0,
        s = n[5] ? parseInt(n[5], 10) : 0;
      return {
        value: a * (o * ea + l * lr + s * sr),
        rest: r.slice(n[0].length)
      };
    }
    function ba(t) {
      return Te(Be.anyDigitsSigned, t);
    }
    function Pe(t, r) {
      switch (t) {
        case 1:
          return Te(Be.singleDigit, r);
        case 2:
          return Te(Be.twoDigits, r);
        case 3:
          return Te(Be.threeDigits, r);
        case 4:
          return Te(Be.fourDigits, r);
        default:
          return Te(new RegExp('^\\d{1,' + t + '}'), r);
      }
    }
    function jt(t, r) {
      switch (t) {
        case 1:
          return Te(Be.singleDigitSigned, r);
        case 2:
          return Te(Be.twoDigitsSigned, r);
        case 3:
          return Te(Be.threeDigitsSigned, r);
        case 4:
          return Te(Be.fourDigitsSigned, r);
        default:
          return Te(new RegExp('^-?\\d{1,' + t + '}'), r);
      }
    }
    function wn(t) {
      switch (t) {
        case 'morning':
          return 4;
        case 'evening':
          return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
          return 12;
        case 'am':
        case 'midnight':
        case 'night':
        default:
          return 0;
      }
    }
    function va(t, r) {
      var n = r > 0,
        a = n ? r : 1 - r;
      var o;
      if (a <= 50) o = t || 100;else {
        var l = a + 50,
          s = Math.trunc(l / 100) * 100,
          c = t >= l % 100;
        o = t + s - (c ? 100 : 0);
      }
      return n ? o : 1 - o;
    }
    function Da(t) {
      return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
    }
    var po = /*#__PURE__*/function (_ye2) {
      babelHelpers.inherits(po, _ye2);
      function po() {
        var _this4;
        babelHelpers.classCallCheck(this, po);
        _this4 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(po).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this4), 'priority', 130);
        ae(babelHelpers.assertThisInitialized(_this4), 'incompatibleTokens', ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
        return _this4;
      }
      babelHelpers.createClass(po, [{
        key: "parse",
        value: function parse(n, a, o) {
          var l = function l(s) {
            return {
              year: s,
              isTwoDigitYear: a === 'yy'
            };
          };
          switch (a) {
            case 'y':
              return Se(Pe(4, n), l);
            case 'yo':
              return Se(o.ordinalNumber(n, {
                unit: 'year'
              }), l);
            default:
              return Se(Pe(a.length, n), l);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a.isTwoDigitYear || a.year > 0;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          var l = n.getFullYear();
          if (o.isTwoDigitYear) {
            var c = va(o.year, l);
            return n.setFullYear(c, 0, 1), n.setHours(0, 0, 0, 0), n;
          }
          var s = !('era' in a) || a.era === 1 ? o.year : 1 - o.year;
          return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return po;
    }(ye);
    var go = /*#__PURE__*/function (_ye3) {
      babelHelpers.inherits(go, _ye3);
      function go() {
        var _this5;
        babelHelpers.classCallCheck(this, go);
        _this5 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(go).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this5), 'priority', 130);
        ae(babelHelpers.assertThisInitialized(_this5), 'incompatibleTokens', ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
        return _this5;
      }
      babelHelpers.createClass(go, [{
        key: "parse",
        value: function parse(n, a, o) {
          var l = function l(s) {
            return {
              year: s,
              isTwoDigitYear: a === 'YY'
            };
          };
          switch (a) {
            case 'Y':
              return Se(Pe(4, n), l);
            case 'Yo':
              return Se(o.ordinalNumber(n, {
                unit: 'year'
              }), l);
            default:
              return Se(Pe(a.length, n), l);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a.isTwoDigitYear || a.year > 0;
        }
      }, {
        key: "set",
        value: function set(n, a, o, l) {
          var s = hn(n, l);
          if (o.isTwoDigitYear) {
            var u = va(o.year, s);
            return n.setFullYear(u, 0, l.firstWeekContainsDate), n.setHours(0, 0, 0, 0), Ue(n, l);
          }
          var c = !('era' in a) || a.era === 1 ? o.year : 1 - o.year;
          return n.setFullYear(c, 0, l.firstWeekContainsDate), n.setHours(0, 0, 0, 0), Ue(n, l);
        }
      }]);
      return go;
    }(ye);
    var yo = /*#__PURE__*/function (_ye4) {
      babelHelpers.inherits(yo, _ye4);
      function yo() {
        var _this6;
        babelHelpers.classCallCheck(this, yo);
        _this6 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(yo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this6), 'priority', 130);
        ae(babelHelpers.assertThisInitialized(_this6), 'incompatibleTokens', ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
        return _this6;
      }
      babelHelpers.createClass(yo, [{
        key: "parse",
        value: function parse(n, a) {
          return jt(a === 'R' ? 4 : a.length, n);
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          var l = ge(n, 0);
          return l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0), Dt(l);
        }
      }]);
      return yo;
    }(ye);
    var wo = /*#__PURE__*/function (_ye5) {
      babelHelpers.inherits(wo, _ye5);
      function wo() {
        var _this7;
        babelHelpers.classCallCheck(this, wo);
        _this7 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(wo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this7), 'priority', 130);
        ae(babelHelpers.assertThisInitialized(_this7), 'incompatibleTokens', ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
        return _this7;
      }
      babelHelpers.createClass(wo, [{
        key: "parse",
        value: function parse(n, a) {
          return jt(a === 'u' ? 4 : a.length, n);
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return wo;
    }(ye);
    var ko = /*#__PURE__*/function (_ye6) {
      babelHelpers.inherits(ko, _ye6);
      function ko() {
        var _this8;
        babelHelpers.classCallCheck(this, ko);
        _this8 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ko).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this8), 'priority', 120);
        ae(babelHelpers.assertThisInitialized(_this8), 'incompatibleTokens', ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
        return _this8;
      }
      babelHelpers.createClass(ko, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'Q':
            case 'QQ':
              return Pe(a.length, n);
            case 'Qo':
              return o.ordinalNumber(n, {
                unit: 'quarter'
              });
            case 'QQQ':
              return o.quarter(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.quarter(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'QQQQQ':
              return o.quarter(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'QQQQ':
            default:
              return o.quarter(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.quarter(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.quarter(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 4;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return ko;
    }(ye);
    var bo = /*#__PURE__*/function (_ye7) {
      babelHelpers.inherits(bo, _ye7);
      function bo() {
        var _this9;
        babelHelpers.classCallCheck(this, bo);
        _this9 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(bo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this9), 'priority', 120);
        ae(babelHelpers.assertThisInitialized(_this9), 'incompatibleTokens', ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
        return _this9;
      }
      babelHelpers.createClass(bo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'q':
            case 'qq':
              return Pe(a.length, n);
            case 'qo':
              return o.ordinalNumber(n, {
                unit: 'quarter'
              });
            case 'qqq':
              return o.quarter(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.quarter(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'qqqqq':
              return o.quarter(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'qqqq':
            default:
              return o.quarter(n, {
                width: 'wide',
                context: 'standalone'
              }) || o.quarter(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.quarter(n, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 4;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return bo;
    }(ye);
    var vo = /*#__PURE__*/function (_ye8) {
      babelHelpers.inherits(vo, _ye8);
      function vo() {
        var _this10;
        babelHelpers.classCallCheck(this, vo);
        _this10 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(vo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this10), 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
        ae(babelHelpers.assertThisInitialized(_this10), 'priority', 110);
        return _this10;
      }
      babelHelpers.createClass(vo, [{
        key: "parse",
        value: function parse(n, a, o) {
          var l = function l(s) {
            return s - 1;
          };
          switch (a) {
            case 'M':
              return Se(Te(Be.month, n), l);
            case 'MM':
              return Se(Pe(2, n), l);
            case 'Mo':
              return Se(o.ordinalNumber(n, {
                unit: 'month'
              }), l);
            case 'MMM':
              return o.month(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.month(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'MMMMM':
              return o.month(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'MMMM':
            default:
              return o.month(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.month(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.month(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 11;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return vo;
    }(ye);
    var Do = /*#__PURE__*/function (_ye9) {
      babelHelpers.inherits(Do, _ye9);
      function Do() {
        var _this11;
        babelHelpers.classCallCheck(this, Do);
        _this11 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Do).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this11), 'priority', 110);
        ae(babelHelpers.assertThisInitialized(_this11), 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
        return _this11;
      }
      babelHelpers.createClass(Do, [{
        key: "parse",
        value: function parse(n, a, o) {
          var l = function l(s) {
            return s - 1;
          };
          switch (a) {
            case 'L':
              return Se(Te(Be.month, n), l);
            case 'LL':
              return Se(Pe(2, n), l);
            case 'Lo':
              return Se(o.ordinalNumber(n, {
                unit: 'month'
              }), l);
            case 'LLL':
              return o.month(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.month(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'LLLLL':
              return o.month(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'LLLL':
            default:
              return o.month(n, {
                width: 'wide',
                context: 'standalone'
              }) || o.month(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.month(n, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 11;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return Do;
    }(ye);
    function Mo(t, r, n) {
      var a = oe(t),
        o = pn(a, n) - r;
      return a.setDate(a.getDate() - o * 7), a;
    }
    var To = /*#__PURE__*/function (_ye10) {
      babelHelpers.inherits(To, _ye10);
      function To() {
        var _this12;
        babelHelpers.classCallCheck(this, To);
        _this12 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(To).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this12), 'priority', 100);
        ae(babelHelpers.assertThisInitialized(_this12), 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
        return _this12;
      }
      babelHelpers.createClass(To, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'w':
              return Te(Be.week, n);
            case 'wo':
              return o.ordinalNumber(n, {
                unit: 'week'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 53;
        }
      }, {
        key: "set",
        value: function set(n, a, o, l) {
          return Ue(Mo(n, o, l), l);
        }
      }]);
      return To;
    }(ye);
    function Po(t, r) {
      var n = oe(t),
        a = mn(n) - r;
      return n.setDate(n.getDate() - a * 7), n;
    }
    var Co = /*#__PURE__*/function (_ye11) {
      babelHelpers.inherits(Co, _ye11);
      function Co() {
        var _this13;
        babelHelpers.classCallCheck(this, Co);
        _this13 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Co).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this13), 'priority', 100);
        ae(babelHelpers.assertThisInitialized(_this13), 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
        return _this13;
      }
      babelHelpers.createClass(Co, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'I':
              return Te(Be.week, n);
            case 'Io':
              return o.ordinalNumber(n, {
                unit: 'week'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 53;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return Dt(Po(n, o));
        }
      }]);
      return Co;
    }(ye);
    var Bo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      So = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var $o = /*#__PURE__*/function (_ye12) {
      babelHelpers.inherits($o, _ye12);
      function $o() {
        var _this14;
        babelHelpers.classCallCheck(this, $o);
        _this14 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf($o).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this14), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this14), 'subPriority', 1);
        ae(babelHelpers.assertThisInitialized(_this14), 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
        return _this14;
      }
      babelHelpers.createClass($o, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'd':
              return Te(Be.date, n);
            case 'do':
              return o.ordinalNumber(n, {
                unit: 'date'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          var o = n.getFullYear(),
            l = Da(o),
            s = n.getMonth();
          return l ? a >= 1 && a <= So[s] : a >= 1 && a <= Bo[s];
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setDate(o), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return $o;
    }(ye);
    var Ao = /*#__PURE__*/function (_ye13) {
      babelHelpers.inherits(Ao, _ye13);
      function Ao() {
        var _this15;
        babelHelpers.classCallCheck(this, Ao);
        _this15 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Ao).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this15), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this15), 'subpriority', 1);
        ae(babelHelpers.assertThisInitialized(_this15), 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);
        return _this15;
      }
      babelHelpers.createClass(Ao, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'D':
            case 'DD':
              return Te(Be.dayOfYear, n);
            case 'Do':
              return o.ordinalNumber(n, {
                unit: 'date'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          var o = n.getFullYear();
          return Da(o) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMonth(0, o), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return Ao;
    }(ye);
    function kn(t, r, n) {
      var _ref27, _ref28, _ref29, _ref30;
      var S, g, C, Y;
      var a = ht(),
        o = (_ref27 = (_ref28 = (_ref29 = (_ref30 = n == null ? void 0 : n.weekStartsOn) !== null && _ref30 !== void 0 ? _ref30 : (g = (S = n == null ? void 0 : n.locale) == null ? void 0 : S.options) == null ? void 0 : g.weekStartsOn) !== null && _ref29 !== void 0 ? _ref29 : a.weekStartsOn) !== null && _ref28 !== void 0 ? _ref28 : (Y = (C = a.locale) == null ? void 0 : C.options) == null ? void 0 : Y.weekStartsOn) !== null && _ref27 !== void 0 ? _ref27 : 0,
        l = oe(t),
        s = l.getDay(),
        u = (r % 7 + 7) % 7,
        B = 7 - o,
        m = r < 0 || r > 6 ? r - (s + B) % 7 : (u + B) % 7 - (s + B) % 7;
      return We(l, m);
    }
    var No = /*#__PURE__*/function (_ye14) {
      babelHelpers.inherits(No, _ye14);
      function No() {
        var _this16;
        babelHelpers.classCallCheck(this, No);
        _this16 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(No).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this16), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this16), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
        return _this16;
      }
      babelHelpers.createClass(No, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'E':
            case 'EE':
            case 'EEE':
              return o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'EEEEE':
              return o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'EEEEEE':
              return o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'EEEE':
            default:
              return o.day(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 6;
        }
      }, {
        key: "set",
        value: function set(n, a, o, l) {
          return n = kn(n, o, l), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return No;
    }(ye);
    var Oo = /*#__PURE__*/function (_ye15) {
      babelHelpers.inherits(Oo, _ye15);
      function Oo() {
        var _this17;
        babelHelpers.classCallCheck(this, Oo);
        _this17 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Oo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this17), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this17), 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);
        return _this17;
      }
      babelHelpers.createClass(Oo, [{
        key: "parse",
        value: function parse(n, a, o, l) {
          var s = function s(c) {
            var u = Math.floor((c - 1) / 7) * 7;
            return (c + l.weekStartsOn + 6) % 7 + u;
          };
          switch (a) {
            case 'e':
            case 'ee':
              return Se(Pe(a.length, n), s);
            case 'eo':
              return Se(o.ordinalNumber(n, {
                unit: 'day'
              }), s);
            case 'eee':
              return o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'eeeee':
              return o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'eeeeee':
              return o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'eeee':
            default:
              return o.day(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 6;
        }
      }, {
        key: "set",
        value: function set(n, a, o, l) {
          return n = kn(n, o, l), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return Oo;
    }(ye);
    var Eo = /*#__PURE__*/function (_ye16) {
      babelHelpers.inherits(Eo, _ye16);
      function Eo() {
        var _this18;
        babelHelpers.classCallCheck(this, Eo);
        _this18 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Eo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this18), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this18), 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);
        return _this18;
      }
      babelHelpers.createClass(Eo, [{
        key: "parse",
        value: function parse(n, a, o, l) {
          var s = function s(c) {
            var u = Math.floor((c - 1) / 7) * 7;
            return (c + l.weekStartsOn + 6) % 7 + u;
          };
          switch (a) {
            case 'c':
            case 'cc':
              return Se(Pe(a.length, n), s);
            case 'co':
              return Se(o.ordinalNumber(n, {
                unit: 'day'
              }), s);
            case 'ccc':
              return o.day(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.day(n, {
                width: 'short',
                context: 'standalone'
              }) || o.day(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'ccccc':
              return o.day(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'cccccc':
              return o.day(n, {
                width: 'short',
                context: 'standalone'
              }) || o.day(n, {
                width: 'narrow',
                context: 'standalone'
              });
            case 'cccc':
            default:
              return o.day(n, {
                width: 'wide',
                context: 'standalone'
              }) || o.day(n, {
                width: 'abbreviated',
                context: 'standalone'
              }) || o.day(n, {
                width: 'short',
                context: 'standalone'
              }) || o.day(n, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 6;
        }
      }, {
        key: "set",
        value: function set(n, a, o, l) {
          return n = kn(n, o, l), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return Eo;
    }(ye);
    function Ro(t, r) {
      var n = oe(t),
        a = io(n),
        o = r - a;
      return We(n, o);
    }
    var _o = /*#__PURE__*/function (_ye17) {
      babelHelpers.inherits(_o, _ye17);
      function _o() {
        var _this19;
        babelHelpers.classCallCheck(this, _o);
        _this19 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(_o).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this19), 'priority', 90);
        ae(babelHelpers.assertThisInitialized(_this19), 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);
        return _this19;
      }
      babelHelpers.createClass(_o, [{
        key: "parse",
        value: function parse(n, a, o) {
          var l = function l(s) {
            return s === 0 ? 7 : s;
          };
          switch (a) {
            case 'i':
            case 'ii':
              return Pe(a.length, n);
            case 'io':
              return o.ordinalNumber(n, {
                unit: 'day'
              });
            case 'iii':
              return Se(o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              }), l);
            case 'iiiii':
              return Se(o.day(n, {
                width: 'narrow',
                context: 'formatting'
              }), l);
            case 'iiiiii':
              return Se(o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              }), l);
            case 'iiii':
            default:
              return Se(o.day(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.day(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.day(n, {
                width: 'short',
                context: 'formatting'
              }) || o.day(n, {
                width: 'narrow',
                context: 'formatting'
              }), l);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 7;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n = Ro(n, o), n.setHours(0, 0, 0, 0), n;
        }
      }]);
      return _o;
    }(ye);
    var Yo = /*#__PURE__*/function (_ye18) {
      babelHelpers.inherits(Yo, _ye18);
      function Yo() {
        var _this20;
        babelHelpers.classCallCheck(this, Yo);
        _this20 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Yo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this20), 'priority', 80);
        ae(babelHelpers.assertThisInitialized(_this20), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
        return _this20;
      }
      babelHelpers.createClass(Yo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'a':
            case 'aa':
            case 'aaa':
              return o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'aaaaa':
              return o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'aaaa':
            default:
              return o.dayPeriod(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setHours(wn(o), 0, 0, 0), n;
        }
      }]);
      return Yo;
    }(ye);
    var xo = /*#__PURE__*/function (_ye19) {
      babelHelpers.inherits(xo, _ye19);
      function xo() {
        var _this21;
        babelHelpers.classCallCheck(this, xo);
        _this21 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(xo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this21), 'priority', 80);
        ae(babelHelpers.assertThisInitialized(_this21), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
        return _this21;
      }
      babelHelpers.createClass(xo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'b':
            case 'bb':
            case 'bbb':
              return o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'bbbbb':
              return o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'bbbb':
            default:
              return o.dayPeriod(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setHours(wn(o), 0, 0, 0), n;
        }
      }]);
      return xo;
    }(ye);
    var Vo = /*#__PURE__*/function (_ye20) {
      babelHelpers.inherits(Vo, _ye20);
      function Vo() {
        var _this22;
        babelHelpers.classCallCheck(this, Vo);
        _this22 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Vo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this22), 'priority', 80);
        ae(babelHelpers.assertThisInitialized(_this22), 'incompatibleTokens', ['a', 'b', 't', 'T']);
        return _this22;
      }
      babelHelpers.createClass(Vo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'B':
            case 'BB':
            case 'BBB':
              return o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'BBBBB':
              return o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
            case 'BBBB':
            default:
              return o.dayPeriod(n, {
                width: 'wide',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'abbreviated',
                context: 'formatting'
              }) || o.dayPeriod(n, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setHours(wn(o), 0, 0, 0), n;
        }
      }]);
      return Vo;
    }(ye);
    var Io = /*#__PURE__*/function (_ye21) {
      babelHelpers.inherits(Io, _ye21);
      function Io() {
        var _this23;
        babelHelpers.classCallCheck(this, Io);
        _this23 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Io).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this23), 'priority', 70);
        ae(babelHelpers.assertThisInitialized(_this23), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
        return _this23;
      }
      babelHelpers.createClass(Io, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'h':
              return Te(Be.hour12h, n);
            case 'ho':
              return o.ordinalNumber(n, {
                unit: 'hour'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 12;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          var l = n.getHours() >= 12;
          return l && o < 12 ? n.setHours(o + 12, 0, 0, 0) : !l && o === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
        }
      }]);
      return Io;
    }(ye);
    var Fo = /*#__PURE__*/function (_ye22) {
      babelHelpers.inherits(Fo, _ye22);
      function Fo() {
        var _this24;
        babelHelpers.classCallCheck(this, Fo);
        _this24 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Fo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this24), 'priority', 70);
        ae(babelHelpers.assertThisInitialized(_this24), 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
        return _this24;
      }
      babelHelpers.createClass(Fo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'H':
              return Te(Be.hour23h, n);
            case 'Ho':
              return o.ordinalNumber(n, {
                unit: 'hour'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 23;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setHours(o, 0, 0, 0), n;
        }
      }]);
      return Fo;
    }(ye);
    var Lo = /*#__PURE__*/function (_ye23) {
      babelHelpers.inherits(Lo, _ye23);
      function Lo() {
        var _this25;
        babelHelpers.classCallCheck(this, Lo);
        _this25 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Lo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this25), 'priority', 70);
        ae(babelHelpers.assertThisInitialized(_this25), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
        return _this25;
      }
      babelHelpers.createClass(Lo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'K':
              return Te(Be.hour11h, n);
            case 'Ko':
              return o.ordinalNumber(n, {
                unit: 'hour'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 11;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.getHours() >= 12 && o < 12 ? n.setHours(o + 12, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
        }
      }]);
      return Lo;
    }(ye);
    var Ho = /*#__PURE__*/function (_ye24) {
      babelHelpers.inherits(Ho, _ye24);
      function Ho() {
        var _this26;
        babelHelpers.classCallCheck(this, Ho);
        _this26 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Ho).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this26), 'priority', 70);
        ae(babelHelpers.assertThisInitialized(_this26), 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
        return _this26;
      }
      babelHelpers.createClass(Ho, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'k':
              return Te(Be.hour24h, n);
            case 'ko':
              return o.ordinalNumber(n, {
                unit: 'hour'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 1 && a <= 24;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          var l = o <= 24 ? o % 24 : o;
          return n.setHours(l, 0, 0, 0), n;
        }
      }]);
      return Ho;
    }(ye);
    var zo = /*#__PURE__*/function (_ye25) {
      babelHelpers.inherits(zo, _ye25);
      function zo() {
        var _this27;
        babelHelpers.classCallCheck(this, zo);
        _this27 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(zo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this27), 'priority', 60);
        ae(babelHelpers.assertThisInitialized(_this27), 'incompatibleTokens', ['t', 'T']);
        return _this27;
      }
      babelHelpers.createClass(zo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 'm':
              return Te(Be.minute, n);
            case 'mo':
              return o.ordinalNumber(n, {
                unit: 'minute'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 59;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMinutes(o, 0, 0), n;
        }
      }]);
      return zo;
    }(ye);
    var Wo = /*#__PURE__*/function (_ye26) {
      babelHelpers.inherits(Wo, _ye26);
      function Wo() {
        var _this28;
        babelHelpers.classCallCheck(this, Wo);
        _this28 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Wo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this28), 'priority', 50);
        ae(babelHelpers.assertThisInitialized(_this28), 'incompatibleTokens', ['t', 'T']);
        return _this28;
      }
      babelHelpers.createClass(Wo, [{
        key: "parse",
        value: function parse(n, a, o) {
          switch (a) {
            case 's':
              return Te(Be.second, n);
            case 'so':
              return o.ordinalNumber(n, {
                unit: 'second'
              });
            default:
              return Pe(a.length, n);
          }
        }
      }, {
        key: "validate",
        value: function validate(n, a) {
          return a >= 0 && a <= 59;
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setSeconds(o, 0), n;
        }
      }]);
      return Wo;
    }(ye);
    var qo = /*#__PURE__*/function (_ye27) {
      babelHelpers.inherits(qo, _ye27);
      function qo() {
        var _this29;
        babelHelpers.classCallCheck(this, qo);
        _this29 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(qo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this29), 'priority', 30);
        ae(babelHelpers.assertThisInitialized(_this29), 'incompatibleTokens', ['t', 'T']);
        return _this29;
      }
      babelHelpers.createClass(qo, [{
        key: "parse",
        value: function parse(n, a) {
          var o = function o(l) {
            return Math.trunc(l * Math.pow(10, -a.length + 3));
          };
          return Se(Pe(a.length, n), o);
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return n.setMilliseconds(o), n;
        }
      }]);
      return qo;
    }(ye);
    var Uo = /*#__PURE__*/function (_ye28) {
      babelHelpers.inherits(Uo, _ye28);
      function Uo() {
        var _this30;
        babelHelpers.classCallCheck(this, Uo);
        _this30 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Uo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this30), 'priority', 10);
        ae(babelHelpers.assertThisInitialized(_this30), 'incompatibleTokens', ['t', 'T', 'x']);
        return _this30;
      }
      babelHelpers.createClass(Uo, [{
        key: "parse",
        value: function parse(n, a) {
          switch (a) {
            case 'X':
              return Je(Xe.basicOptionalMinutes, n);
            case 'XX':
              return Je(Xe.basic, n);
            case 'XXXX':
              return Je(Xe.basicOptionalSeconds, n);
            case 'XXXXX':
              return Je(Xe.extendedOptionalSeconds, n);
            case 'XXX':
            default:
              return Je(Xe.extended, n);
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return a.timestampIsSet ? n : ge(n, n.getTime() - Ut(n) - o);
        }
      }]);
      return Uo;
    }(ye);
    var jo = /*#__PURE__*/function (_ye29) {
      babelHelpers.inherits(jo, _ye29);
      function jo() {
        var _this31;
        babelHelpers.classCallCheck(this, jo);
        _this31 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(jo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this31), 'priority', 10);
        ae(babelHelpers.assertThisInitialized(_this31), 'incompatibleTokens', ['t', 'T', 'X']);
        return _this31;
      }
      babelHelpers.createClass(jo, [{
        key: "parse",
        value: function parse(n, a) {
          switch (a) {
            case 'x':
              return Je(Xe.basicOptionalMinutes, n);
            case 'xx':
              return Je(Xe.basic, n);
            case 'xxxx':
              return Je(Xe.basicOptionalSeconds, n);
            case 'xxxxx':
              return Je(Xe.extendedOptionalSeconds, n);
            case 'xxx':
            default:
              return Je(Xe.extended, n);
          }
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return a.timestampIsSet ? n : ge(n, n.getTime() - Ut(n) - o);
        }
      }]);
      return jo;
    }(ye);
    var Qo = /*#__PURE__*/function (_ye30) {
      babelHelpers.inherits(Qo, _ye30);
      function Qo() {
        var _this32;
        babelHelpers.classCallCheck(this, Qo);
        _this32 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Qo).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this32), 'priority', 40);
        ae(babelHelpers.assertThisInitialized(_this32), 'incompatibleTokens', '*');
        return _this32;
      }
      babelHelpers.createClass(Qo, [{
        key: "parse",
        value: function parse(n) {
          return ba(n);
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return [ge(n, o * 1e3), {
            timestampIsSet: !0
          }];
        }
      }]);
      return Qo;
    }(ye);
    var Go = /*#__PURE__*/function (_ye31) {
      babelHelpers.inherits(Go, _ye31);
      function Go() {
        var _this33;
        babelHelpers.classCallCheck(this, Go);
        _this33 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Go).apply(this, arguments));
        ae(babelHelpers.assertThisInitialized(_this33), 'priority', 20);
        ae(babelHelpers.assertThisInitialized(_this33), 'incompatibleTokens', '*');
        return _this33;
      }
      babelHelpers.createClass(Go, [{
        key: "parse",
        value: function parse(n) {
          return ba(n);
        }
      }, {
        key: "set",
        value: function set(n, a, o) {
          return [ge(n, o), {
            timestampIsSet: !0
          }];
        }
      }]);
      return Go;
    }(ye);
    var Ko = {
        G: new ho(),
        y: new po(),
        Y: new go(),
        R: new yo(),
        u: new wo(),
        Q: new ko(),
        q: new bo(),
        M: new vo(),
        L: new Do(),
        w: new To(),
        I: new Co(),
        d: new $o(),
        D: new Ao(),
        E: new No(),
        e: new Oo(),
        c: new Eo(),
        i: new _o(),
        a: new Yo(),
        b: new xo(),
        B: new Vo(),
        h: new Io(),
        H: new Fo(),
        K: new Lo(),
        k: new Ho(),
        m: new zo(),
        s: new Wo(),
        S: new qo(),
        X: new Uo(),
        x: new jo(),
        t: new Qo(),
        T: new Go()
      },
      Xo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      Jo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      Zo = /^'([^]*?)'?$/,
      el = /''/g,
      tl = /\S/,
      nl = /[a-zA-Z]/;
    function bn(t, r, n, a) {
      var _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref39, _ref40;
      var x, I, p, $, P, z, K, Z;
      var o = so(),
        l = (_ref31 = (_ref32 = a == null ? void 0 : a.locale) !== null && _ref32 !== void 0 ? _ref32 : o.locale) !== null && _ref31 !== void 0 ? _ref31 : da,
        s = (_ref33 = (_ref34 = (_ref35 = (_ref36 = a == null ? void 0 : a.firstWeekContainsDate) !== null && _ref36 !== void 0 ? _ref36 : (I = (x = a == null ? void 0 : a.locale) == null ? void 0 : x.options) == null ? void 0 : I.firstWeekContainsDate) !== null && _ref35 !== void 0 ? _ref35 : o.firstWeekContainsDate) !== null && _ref34 !== void 0 ? _ref34 : ($ = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : $.firstWeekContainsDate) !== null && _ref33 !== void 0 ? _ref33 : 1,
        c = (_ref37 = (_ref38 = (_ref39 = (_ref40 = a == null ? void 0 : a.weekStartsOn) !== null && _ref40 !== void 0 ? _ref40 : (z = (P = a == null ? void 0 : a.locale) == null ? void 0 : P.options) == null ? void 0 : z.weekStartsOn) !== null && _ref39 !== void 0 ? _ref39 : o.weekStartsOn) !== null && _ref38 !== void 0 ? _ref38 : (Z = (K = o.locale) == null ? void 0 : K.options) == null ? void 0 : Z.weekStartsOn) !== null && _ref37 !== void 0 ? _ref37 : 0;
      if (r === '') return t === '' ? oe(n) : ge(n, NaN);
      var u = {
          firstWeekContainsDate: s,
          weekStartsOn: c,
          locale: l
        },
        B = [new mo()],
        m = r.match(Jo).map(function (O) {
          var D = O[0];
          if (D in gn) {
            var W = gn[D];
            return W(O, l.formatLong);
          }
          return O;
        }).join('').match(Xo),
        S = [];
      var _iterator = _createForOfIteratorHelper(m),
        _step;
      try {
        var _loop = function _loop() {
          var O = _step.value;
          !(a != null && a.useAdditionalWeekYearTokens) && wa(O) && yn(O, r, t), !(a != null && a.useAdditionalDayOfYearTokens) && ya(O) && yn(O, r, t);
          var D = O[0],
            W = Ko[D];
          if (W) {
            var E = W.incompatibleTokens;
            if (Array.isArray(E)) {
              var re = S.find(function (le) {
                return E.includes(le.token) || le.token === D;
              });
              if (re) throw new RangeError("The format string mustn't contain `".concat(re.fullToken, "` and `").concat(O, "` at the same time"));
            } else if (W.incompatibleTokens === '*' && S.length > 0) throw new RangeError("The format string mustn't contain `".concat(O, "` and any other token at the same time"));
            S.push({
              token: D,
              fullToken: O
            });
            var Q = W.run(t, O, l.match, u);
            if (!Q) return {
              v: ge(n, NaN)
            };
            B.push(Q.setter), t = Q.rest;
          } else {
            if (D.match(nl)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + D + '`');
            if (O === "''" ? O = "'" : D === "'" && (O = al(O)), t.indexOf(O) === 0) t = t.slice(O.length);else return {
              v: ge(n, NaN)
            };
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (babelHelpers["typeof"](_ret) === "object") return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (t.length > 0 && tl.test(t)) return ge(n, NaN);
      var g = B.map(function (O) {
        return O.priority;
      }).sort(function (O, D) {
        return D - O;
      }).filter(function (O, D, W) {
        return W.indexOf(O) === D;
      }).map(function (O) {
        return B.filter(function (D) {
          return D.priority === O;
        }).sort(function (D, W) {
          return W.subPriority - D.subPriority;
        });
      }).map(function (O) {
        return O[0];
      });
      var C = oe(n);
      if (isNaN(C.getTime())) return ge(n, NaN);
      var Y = {};
      var _iterator2 = _createForOfIteratorHelper(g),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var O = _step2.value;
          if (!O.validate(C, u)) return ge(n, NaN);
          var D = O.set(C, Y, u);
          Array.isArray(D) ? (C = D[0], Object.assign(Y, D[1])) : C = D;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return ge(n, C);
    }
    function al(t) {
      return t.match(Zo)[1].replace(el, "'");
    }
    function Ma(t, r) {
      var n = pt(t),
        a = pt(r);
      return +n == +a;
    }
    function rl(t, r) {
      return We(t, -r);
    }
    function Ta(t, r) {
      var n = oe(t),
        a = n.getFullYear(),
        o = n.getDate(),
        l = ge(t, 0);
      l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
      var s = lo(l);
      return n.setMonth(r, Math.min(o, s)), n;
    }
    function be(t, r) {
      var n = oe(t);
      return isNaN(+n) ? ge(t, NaN) : (r.year != null && n.setFullYear(r.year), r.month != null && (n = Ta(n, r.month)), r.date != null && n.setDate(r.date), r.hours != null && n.setHours(r.hours), r.minutes != null && n.setMinutes(r.minutes), r.seconds != null && n.setSeconds(r.seconds), r.milliseconds != null && n.setMilliseconds(r.milliseconds), n);
    }
    function ol(t, r) {
      var n = oe(t);
      return n.setHours(r), n;
    }
    function Pa(t, r) {
      var n = oe(t);
      return n.setMilliseconds(r), n;
    }
    function ll(t, r) {
      var n = oe(t);
      return n.setMinutes(r), n;
    }
    function Ca(t, r) {
      var n = oe(t);
      return n.setSeconds(r), n;
    }
    function Ze(t, r) {
      var n = oe(t);
      return isNaN(+n) ? ge(t, NaN) : (n.setFullYear(r), n);
    }
    function Bt(t, r) {
      return qe(t, -r);
    }
    function sl(t, r) {
      var _r$years2 = r.years,
        n = _r$years2 === void 0 ? 0 : _r$years2,
        _r$months2 = r.months,
        a = _r$months2 === void 0 ? 0 : _r$months2,
        _r$weeks2 = r.weeks,
        o = _r$weeks2 === void 0 ? 0 : _r$weeks2,
        _r$days2 = r.days,
        l = _r$days2 === void 0 ? 0 : _r$days2,
        _r$hours2 = r.hours,
        s = _r$hours2 === void 0 ? 0 : _r$hours2,
        _r$minutes2 = r.minutes,
        c = _r$minutes2 === void 0 ? 0 : _r$minutes2,
        _r$seconds2 = r.seconds,
        u = _r$seconds2 === void 0 ? 0 : _r$seconds2,
        B = Bt(t, a + n * 12),
        m = rl(B, l + o * 7),
        S = c + s * 60,
        C = (u + S * 60) * 1e3;
      return ge(t, m.getTime() - C);
    }
    function Ba(t, r) {
      return dn(t, -r);
    }
    var Fe = function Fe(t, r) {
        return r ? new Date(t.toLocaleString('en-US', {
          timeZone: r
        })) : new Date(t);
      },
      vn = function vn(t, r, n) {
        var a = Dn(t, r, n);
        return a || j();
      },
      il = function il(t, r, n) {
        var a = r.dateInTz ? Fe(new Date(t), r.dateInTz) : j(t);
        return n ? Ve(a, !0) : a;
      },
      Dn = function Dn(t, r, n) {
        if (!t) return null;
        var a = n ? Ve(j(t), !0) : j(t);
        return r ? r.exactMatch ? il(t, r, n) : Fe(a, r.timezone) : a;
      },
      ul = function ul(t) {
        if (!t) return 0;
        var r = new Date(),
          n = new Date(r.toLocaleString('en-US', {
            timeZone: 'UTC'
          })),
          a = new Date(r.toLocaleString('en-US', {
            timeZone: t
          })),
          o = a.getTimezoneOffset() / 60;
        return (+n - +a) / (1e3 * 60 * 60) - o;
      };
    var je = function (t) {
        return t.month = 'month', t.year = 'year', t;
      }(je || {}),
      yt = function (t) {
        return t.top = 'top', t.bottom = 'bottom', t;
      }(yt || {}),
      wt = function (t) {
        return t.header = 'header', t.calendar = 'calendar', t.timePicker = 'timePicker', t;
      }(wt || {}),
      Re = function (t) {
        return t.month = 'month', t.year = 'year', t.calendar = 'calendar', t.time = 'time', t.minutes = 'minutes', t.hours = 'hours', t.seconds = 'seconds', t;
      }(Re || {});
    var cl = ['timestamp', 'date', 'iso'];
    var Ye = function (t) {
        return t.up = 'up', t.down = 'down', t.left = 'left', t.right = 'right', t;
      }(Ye || {}),
      ve = function (t) {
        return t.arrowUp = 'ArrowUp', t.arrowDown = 'ArrowDown', t.arrowLeft = 'ArrowLeft', t.arrowRight = 'ArrowRight', t.enter = 'Enter', t.space = ' ', t.esc = 'Escape', t.tab = 'Tab', t.home = 'Home', t.end = 'End', t.pageUp = 'PageUp', t.pageDown = 'PageDown', t;
      }(ve || {});
    function Sa(t) {
      return function (r) {
        return new Intl.DateTimeFormat(t, {
          weekday: 'short',
          timeZone: 'UTC'
        }).format(new Date("2017-01-0".concat(r, "T00:00:00+00:00"))).slice(0, 2);
      };
    }
    function dl(t) {
      return function (r) {
        return Ke(Fe(new Date("2017-01-0".concat(r, "T00:00:00+00:00")), 'UTC'), 'EEEEEE', {
          locale: t
        });
      };
    }
    var fl = function fl(t, r, n) {
        var _concat, _ref41;
        var a = [1, 2, 3, 4, 5, 6, 7];
        var o;
        if (t !== null) try {
          o = a.map(dl(t));
        } catch (_unused) {
          o = a.map(Sa(r));
        } else o = a.map(Sa(r));
        var l = o.slice(0, n),
          s = o.slice(n + 1, o.length);
        return (_concat = (_ref41 = [o[n]]).concat.apply(_ref41, babelHelpers.toConsumableArray(s))).concat.apply(_concat, babelHelpers.toConsumableArray(l));
      },
      Mn = function Mn(t, r, n) {
        var a = [];
        for (var o = +t[0]; o <= +t[1]; o++) a.push({
          value: +o,
          text: Ra(o, r)
        });
        return n ? a.reverse() : a;
      },
      $a = function $a(t, r, n) {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (l) {
          var s = l < 10 ? "0".concat(l) : l;
          return new Date("2017-".concat(s, "-01T00:00:00+00:00"));
        });
        if (t !== null) try {
          var l = n === 'long' ? 'LLLL' : 'LLL';
          return a.map(function (s, c) {
            var u = Ke(Fe(s, 'UTC'), l, {
              locale: t
            });
            return {
              text: u.charAt(0).toUpperCase() + u.substring(1),
              value: c
            };
          });
        } catch (_unused2) {}
        var o = new Intl.DateTimeFormat(r, {
          month: n,
          timeZone: 'UTC'
        });
        return a.map(function (l, s) {
          var c = o.format(l);
          return {
            text: c.charAt(0).toUpperCase() + c.substring(1),
            value: s
          };
        });
      },
      ml = function ml(t) {
        return [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][t];
      },
      Oe = function Oe(t) {
        var r = e.unref(t);
        return r != null && r.$el ? r == null ? void 0 : r.$el : r;
      },
      hl = function hl(t) {
        return _objectSpread({
          type: 'dot'
        }, t !== null && t !== void 0 ? t : {});
      },
      Aa = function Aa(t) {
        return Array.isArray(t) ? !!t[0] && !!t[1] : !1;
      },
      Tn = {
        prop: function prop(t) {
          return "\"".concat(t, "\" prop must be enabled!");
        },
        dateArr: function dateArr(t) {
          return "You need to use array as \"model-value\" binding in order to support \"".concat(t, "\"");
        }
      },
      Ne = function Ne(t) {
        return t;
      },
      Na = function Na(t) {
        return t === 0 ? t : !t || isNaN(+t) ? null : +t;
      },
      Oa = function Oa(t) {
        return t === null;
      },
      Ea = function Ea(t) {
        if (t) return babelHelpers.toConsumableArray(t.querySelectorAll('input, button, select, textarea, a[href]'))[0];
      },
      pl = function pl(t) {
        var r = [],
          n = function n(a) {
            return a.filter(function (o) {
              return o;
            });
          };
        for (var a = 0; a < t.length; a += 3) {
          var o = [t[a], t[a + 1], t[a + 2]];
          r.push(n(o));
        }
        return r;
      },
      xt = function xt(t, r, n) {
        var a = n != null,
          o = r != null;
        if (!a && !o) return !1;
        var l = +n,
          s = +r;
        return a && o ? +t > l || +t < s : a ? +t > l : o ? +t < s : !1;
      },
      St = function St(t, r) {
        return pl(t).map(function (n) {
          return n.map(function (a) {
            var _r2 = r(a),
              o = _r2.active,
              l = _r2.disabled,
              s = _r2.isBetween,
              c = _r2.highlighted;
            return _objectSpread(_objectSpread({}, a), {}, {
              active: o,
              disabled: l,
              className: {
                dp__overlay_cell_active: o,
                dp__overlay_cell: !o,
                dp__overlay_cell_disabled: l,
                dp__overlay_cell_pad: !0,
                dp__overlay_cell_active_disabled: l && o,
                dp__cell_in_between: s,
                'dp--highlighted': c
              }
            });
          });
        });
      },
      lt = function lt(t, r) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        t && r.allowStopPropagation && (n && t.stopImmediatePropagation(), t.stopPropagation());
      },
      gl = function gl() {
        return ['a[href]', 'area[href]', "input:not([disabled]):not([type='hidden'])", 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', "[tabindex]:not([tabindex='-1'])", '[data-datepicker-instance]'].join(', ');
      };
    function yl(t, r) {
      var n = babelHelpers.toConsumableArray(document.querySelectorAll(gl()));
      n = n.filter(function (o) {
        return !t.contains(o) || o.hasAttribute('data-datepicker-instance');
      });
      var a = n.indexOf(t);
      if (a >= 0 && (r ? a - 1 >= 0 : a + 1 <= n.length)) return n[a + (r ? -1 : 1)];
    }
    var Pn = function Pn(t, r) {
        return t == null ? void 0 : t.querySelector("[data-dp-element=\"".concat(r, "\"]"));
      },
      Ra = function Ra(t, r) {
        return new Intl.NumberFormat(r, {
          useGrouping: !1,
          style: 'decimal'
        }).format(t);
      },
      Cn = function Cn(t) {
        return Ke(t, 'dd-MM-yyyy');
      },
      Bn = function Bn(t) {
        return Array.isArray(t);
      },
      Qt = function Qt(t, r) {
        return r.get(Cn(t));
      },
      wl = function wl(t, r) {
        return t ? r ? r instanceof Map ? !!Qt(t, r) : r(j(t)) : !1 : !0;
      },
      xe = function xe(t, r) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var a = arguments.length > 3 ? arguments[3] : undefined;
        if (t.key === ve.enter || t.key === ve.space) return n && t.preventDefault(), r();
        if (a) return a(t);
      },
      _a = function _a() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].some(function (t) {
          return navigator.userAgent.includes(t);
        }) || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
      },
      Ya = function Ya(t, r, n, a, o, l) {
        var s = bn(t, r.slice(0, t.length), new Date(), {
          locale: l
        });
        return Ot(s) && oa(s) ? a || o ? s : be(s, {
          hours: +n.hours,
          minutes: +(n == null ? void 0 : n.minutes),
          seconds: +(n == null ? void 0 : n.seconds),
          milliseconds: 0
        }) : null;
      },
      kl = function kl(t, r, n, a, o, l) {
        var s = Array.isArray(n) ? n[0] : n;
        if (typeof r == 'string') return Ya(t, r, s, a, o, l);
        if (Array.isArray(r)) {
          var c = null;
          var _iterator3 = _createForOfIteratorHelper(r),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var u = _step3.value;
              if (c = Ya(t, u, s, a, o, l), c) break;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return c;
        }
        return typeof r == 'function' ? r(t) : null;
      },
      j = function j(t) {
        return t ? new Date(t) : new Date();
      },
      bl = function bl(t, r, n) {
        if (r) {
          var o = (t.getMonth() + 1).toString().padStart(2, '0'),
            l = t.getDate().toString().padStart(2, '0'),
            s = t.getHours().toString().padStart(2, '0'),
            c = t.getMinutes().toString().padStart(2, '0'),
            u = n ? t.getSeconds().toString().padStart(2, '0') : '00';
          return "".concat(t.getFullYear(), "-").concat(o, "-").concat(l, "T").concat(s, ":").concat(c, ":").concat(u, ".000Z");
        }
        var a = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
        return new Date(a).toISOString();
      },
      Ve = function Ve(t, r) {
        var n = j(JSON.parse(JSON.stringify(t))),
          a = be(n, {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
          });
        return r ? pr(a) : a;
      },
      st = function st(t, r, n, a) {
        var o = t ? j(t) : j();
        return (r || r === 0) && (o = ol(o, +r)), (n || n === 0) && (o = ll(o, +n)), (a || a === 0) && (o = Ca(o, +a)), Pa(o, 0);
      },
      Ce = function Ce(t, r) {
        return !t || !r ? !1 : Yt(Ve(t), Ve(r));
      },
      pe = function pe(t, r) {
        return !t || !r ? !1 : Ct(Ve(t), Ve(r));
      },
      $e = function $e(t, r) {
        return !t || !r ? !1 : Pt(Ve(t), Ve(r));
      },
      Gt = function Gt(t, r, n) {
        return t != null && t[0] && t != null && t[1] ? $e(n, t[0]) && Ce(n, t[1]) : t != null && t[0] && r ? $e(n, t[0]) && Ce(n, r) || Ce(n, t[0]) && $e(n, r) : !1;
      },
      Qe = function Qe(t) {
        var r = be(new Date(t), {
          date: 1
        });
        return Ve(r);
      },
      Sn = function Sn(t, r, n) {
        return r && (n || n === 0) ? Object.fromEntries(['hours', 'minutes', 'seconds'].map(function (a) {
          return a === r ? [a, n] : [a, isNaN(+t[a]) ? void 0 : +t[a]];
        })) : {
          hours: isNaN(+t.hours) ? void 0 : +t.hours,
          minutes: isNaN(+t.minutes) ? void 0 : +t.minutes,
          seconds: isNaN(+t.seconds) ? void 0 : +t.seconds
        };
      },
      kt = function kt(t) {
        return {
          hours: tt(t),
          minutes: ot(t),
          seconds: Tt(t)
        };
      },
      xa = function xa(t, r) {
        if (r) {
          var n = ce(j(r));
          if (n > t) return 12;
          if (n === t) return he(j(r));
        }
      },
      Va = function Va(t, r) {
        if (r) {
          var n = ce(j(r));
          return n < t ? -1 : n === t ? he(j(r)) : void 0;
        }
      },
      $t = function $t(t) {
        if (t) return ce(j(t));
      },
      Ia = function Ia(t, r) {
        var n = $e(t, r) ? r : t,
          a = $e(r, t) ? r : t;
        return sa({
          start: n,
          end: a
        });
      },
      vl = function vl(t) {
        var r = qe(t, 1);
        return {
          month: he(r),
          year: ce(r)
        };
      },
      nt = function nt(t, r) {
        var n = Ue(t, {
            weekStartsOn: +r
          }),
          a = ua(t, {
            weekStartsOn: +r
          });
        return [n, a];
      },
      Fa = function Fa(t, r) {
        var n = {
          hours: tt(j()),
          minutes: ot(j()),
          seconds: r ? Tt(j()) : 0
        };
        return Object.assign(n, t);
      },
      it = function it(t, r, n) {
        return [be(j(t), {
          date: 1
        }), be(j(), {
          month: r,
          year: n,
          date: 1
        })];
      },
      at = function at(t, r, n) {
        var a = t ? j(t) : j();
        return (r || r === 0) && (a = Ta(a, r)), n && (a = Ze(a, n)), a;
      },
      La = function La(t, r, n, a, o) {
        if (!a || o && !r || !o && !n) return !1;
        var l = o ? qe(t, 1) : Bt(t, 1),
          s = [he(l), ce(l)];
        return o ? !Ml.apply(void 0, s.concat([r])) : !Dl.apply(void 0, s.concat([n]));
      },
      Dl = function Dl(t, r, n) {
        return Ce.apply(void 0, babelHelpers.toConsumableArray(it(n, t, r))) || pe.apply(void 0, babelHelpers.toConsumableArray(it(n, t, r)));
      },
      Ml = function Ml(t, r, n) {
        return $e.apply(void 0, babelHelpers.toConsumableArray(it(n, t, r))) || pe.apply(void 0, babelHelpers.toConsumableArray(it(n, t, r)));
      },
      Ha = function Ha(t, r, n, a, o, l, s) {
        if (typeof r == 'function' && !s) return r(t);
        var c = n ? {
          locale: n
        } : void 0;
        return Array.isArray(t) ? "".concat(Ke(t[0], l, c)).concat(o && !t[1] ? '' : a).concat(t[1] ? Ke(t[1], l, c) : '') : Ke(t, l, c);
      },
      At = function At(t) {
        if (t) return null;
        throw new Error(Tn.prop('partial-range'));
      },
      Kt = function Kt(t, r) {
        if (r) return t();
        throw new Error(Tn.prop('range'));
      },
      $n = function $n(t) {
        return Array.isArray(t) ? Ot(t[0]) && (t[1] ? Ot(t[1]) : !0) : t ? Ot(t) : !1;
      },
      Tl = function Tl(t, r) {
        return be(r !== null && r !== void 0 ? r : j(), {
          hours: +t.hours || 0,
          minutes: +t.minutes || 0,
          seconds: +t.seconds || 0
        });
      },
      An = function An(t, r, n, a) {
        if (!t) return !0;
        if (a) {
          var o = n === 'max' ? Yt(t, r) : Pt(t, r),
            l = {
              seconds: 0,
              milliseconds: 0
            };
          return o || Ct(be(t, l), be(r, l));
        }
        return n === 'max' ? t.getTime() <= r.getTime() : t.getTime() >= r.getTime();
      },
      Nn = function Nn(t, r, n) {
        return t ? Tl(t, r) : j(n !== null && n !== void 0 ? n : r);
      },
      za = function za(t, r, n, a, o) {
        if (Array.isArray(a)) {
          var s = Nn(t, a[0], r),
            c = Nn(t, a[1], r);
          return An(a[0], s, n, !!r) && An(a[1], c, n, !!r) && o;
        }
        var l = Nn(t, a, r);
        return An(a, l, n, !!r) && o;
      },
      On = function On(t) {
        return be(j(), kt(t));
      },
      Pl = function Pl(t, r) {
        return t instanceof Map ? Array.from(t.values()).filter(function (n) {
          return ce(j(n)) === r;
        }).map(function (n) {
          return he(n);
        }) : [];
      },
      Wa = function Wa(t, r, n) {
        return typeof t == 'function' ? t({
          month: r,
          year: n
        }) : !!t.months.find(function (a) {
          return a.month === r && a.year === n;
        });
      },
      En = function En(t, r) {
        return typeof t == 'function' ? t(r) : t.years.includes(r);
      },
      qa = function qa(t) {
        return Ke(t, 'yyyy-MM-dd');
      },
      Vt = e.reactive({
        menuFocused: !1,
        shiftKeyInMenu: !1
      }),
      Ua = function Ua() {
        var t = function t(a) {
            Vt.menuFocused = a;
          },
          r = function r(a) {
            Vt.shiftKeyInMenu !== a && (Vt.shiftKeyInMenu = a);
          };
        return {
          control: e.computed(function () {
            return {
              shiftKeyInMenu: Vt.shiftKeyInMenu,
              menuFocused: Vt.menuFocused
            };
          }),
          setMenuFocused: t,
          setShiftKey: r
        };
      },
      De = e.reactive({
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
      Rn = e.ref(null),
      Xt = e.ref(!1),
      _n = e.ref(!1),
      Yn = e.ref(!1),
      xn = e.ref(!1),
      _e = e.ref(0),
      Ae = e.ref(0),
      ut = function ut() {
        var t = e.computed(function () {
            return Xt.value ? [].concat(babelHelpers.toConsumableArray(De.selectionGrid), [De.actionRow]).filter(function (p) {
              return p.length;
            }) : _n.value ? [].concat(babelHelpers.toConsumableArray(De.timePicker[0]), babelHelpers.toConsumableArray(De.timePicker[1]), [xn.value ? [] : [Rn.value], De.actionRow]).filter(function (p) {
              return p.length;
            }) : Yn.value ? [].concat(babelHelpers.toConsumableArray(De.monthPicker), [De.actionRow]) : [De.monthYear].concat(babelHelpers.toConsumableArray(De.calendar), [De.time, De.actionRow]).filter(function (p) {
              return p.length;
            });
          }),
          r = function r(p) {
            _e.value = p ? _e.value + 1 : _e.value - 1;
            var $ = null;
            t.value[Ae.value] && ($ = t.value[Ae.value][_e.value]), !$ && t.value[Ae.value + (p ? 1 : -1)] ? (Ae.value = Ae.value + (p ? 1 : -1), _e.value = p ? 0 : t.value[Ae.value].length - 1) : $ || (_e.value = p ? _e.value - 1 : _e.value + 1);
          },
          n = function n(p) {
            if (Ae.value === 0 && !p || Ae.value === t.value.length && p) return;
            Ae.value = p ? Ae.value + 1 : Ae.value - 1, t.value[Ae.value] ? t.value[Ae.value] && !t.value[Ae.value][_e.value] && _e.value !== 0 && (_e.value = t.value[Ae.value].length - 1) : Ae.value = p ? Ae.value - 1 : Ae.value + 1;
          },
          a = function a(p) {
            var $ = null;
            t.value[Ae.value] && ($ = t.value[Ae.value][_e.value]), $ ? $.focus({
              preventScroll: !Xt.value
            }) : _e.value = p ? _e.value - 1 : _e.value + 1;
          },
          o = function o() {
            r(!0), a(!0);
          },
          l = function l() {
            r(!1), a(!1);
          },
          s = function s() {
            n(!1), a(!0);
          },
          c = function c() {
            n(!0), a(!0);
          },
          u = function u(p, $) {
            De[$] = p;
          },
          B = function B(p, $) {
            De[$] = p;
          },
          m = function m() {
            _e.value = 0, Ae.value = 0;
          };
        return {
          buildMatrix: u,
          buildMultiLevelMatrix: B,
          setTimePickerBackRef: function setTimePickerBackRef(p) {
            Rn.value = p;
          },
          setSelectionGrid: function setSelectionGrid(p) {
            Xt.value = p, m(), p || (De.selectionGrid = []);
          },
          setTimePicker: function setTimePicker(p) {
            var $ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            _n.value = p, xn.value = $, m(), p || (De.timePicker[0] = [], De.timePicker[1] = []);
          },
          setTimePickerElements: function setTimePickerElements(p) {
            var $ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            De.timePicker[$] = p;
          },
          arrowRight: o,
          arrowLeft: l,
          arrowUp: s,
          arrowDown: c,
          clearArrowNav: function clearArrowNav() {
            De.monthYear = [], De.calendar = [], De.time = [], De.actionRow = [], De.selectionGrid = [], De.timePicker[0] = [], De.timePicker[1] = [], Xt.value = !1, _n.value = !1, xn.value = !1, Yn.value = !1, m(), Rn.value = null;
          },
          setMonthPicker: function setMonthPicker(p) {
            Yn.value = p, m();
          },
          refSets: De
        };
      },
      ja = function ja(t) {
        return _objectSpread({
          menuAppearTop: 'dp-menu-appear-top',
          menuAppearBottom: 'dp-menu-appear-bottom',
          open: 'dp-slide-down',
          close: 'dp-slide-up',
          next: 'calendar-next',
          previous: 'calendar-prev',
          vNext: 'dp-slide-up',
          vPrevious: 'dp-slide-down'
        }, t !== null && t !== void 0 ? t : {});
      },
      Cl = function Cl(t) {
        return _objectSpread({
          toggleOverlay: 'Toggle overlay',
          menu: 'Datepicker menu',
          input: 'Datepicker input',
          openTimePicker: 'Open time picker',
          closeTimePicker: 'Close time Picker',
          incrementValue: function incrementValue(r) {
            return "Increment ".concat(r);
          },
          decrementValue: function decrementValue(r) {
            return "Decrement ".concat(r);
          },
          openTpOverlay: function openTpOverlay(r) {
            return "Open ".concat(r, " overlay");
          },
          amPmButton: 'Switch AM/PM mode',
          openYearsOverlay: 'Open years overlay',
          openMonthsOverlay: 'Open months overlay',
          nextMonth: 'Next month',
          prevMonth: 'Previous month',
          nextYear: 'Next year',
          prevYear: 'Previous year',
          day: void 0,
          weekDay: void 0,
          clearInput: 'Clear value',
          calendarIcon: 'Calendar icon',
          timePicker: 'Time picker',
          monthPicker: function monthPicker(r) {
            return "Month picker".concat(r ? ' overlay' : '');
          },
          yearPicker: function yearPicker(r) {
            return "Year picker".concat(r ? ' overlay' : '');
          },
          timeOverlay: function timeOverlay(r) {
            return "".concat(r, " overlay");
          }
        }, t !== null && t !== void 0 ? t : {});
      },
      Qa = function Qa(t) {
        return t ? typeof t == 'boolean' ? t ? 2 : 0 : +t >= 2 ? +t : 2 : 0;
      },
      Bl = function Bl(t) {
        var _a$count;
        var r = babelHelpers["typeof"](t) == 'object' && t,
          n = {
            "static": !0,
            solo: !1
          };
        if (!t) return _objectSpread(_objectSpread({}, n), {}, {
          count: Qa(!1)
        });
        var a = r ? t : {},
          o = r ? (_a$count = a.count) !== null && _a$count !== void 0 ? _a$count : !0 : t,
          l = Qa(o);
        return Object.assign(n, a, {
          count: l
        });
      },
      Sl = function Sl(t, r, n) {
        return t || (typeof n == 'string' ? n : r);
      },
      $l = function $l(t) {
        return typeof t == 'boolean' ? t ? ja({}) : !1 : ja(t);
      },
      Al = function Al(t) {
        var r = {
          enterSubmit: !0,
          tabSubmit: !0,
          openMenu: 'open',
          selectOnFocus: !1,
          rangeSeparator: ' - '
        };
        return babelHelpers["typeof"](t) == 'object' ? _objectSpread(_objectSpread(_objectSpread({}, r), t !== null && t !== void 0 ? t : {}), {}, {
          enabled: !0
        }) : _objectSpread(_objectSpread({}, r), {}, {
          enabled: t
        });
      },
      Nl = function Nl(t) {
        return _objectSpread({
          months: [],
          years: [],
          times: {
            hours: [],
            minutes: [],
            seconds: []
          }
        }, t !== null && t !== void 0 ? t : {});
      },
      Ol = function Ol(t) {
        return _objectSpread({
          showSelect: !0,
          showCancel: !0,
          showNow: !1,
          showPreview: !0
        }, t !== null && t !== void 0 ? t : {});
      },
      El = function El(t) {
        var r = {
          input: !1
        };
        return babelHelpers["typeof"](t) == 'object' ? _objectSpread(_objectSpread(_objectSpread({}, r), t !== null && t !== void 0 ? t : {}), {}, {
          enabled: !0
        }) : _objectSpread({
          enabled: t
        }, r);
      },
      Rl = function Rl(t) {
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
          tabOutClosesMenu: !0,
          arrowLeft: void 0,
          keepViewOnOffsetClick: !1,
          timeArrowHoldThreshold: 0,
          shadowDom: !1
        }), t !== null && t !== void 0 ? t : {});
      },
      _l = function _l(t) {
        var r = {
          dates: Array.isArray(t) ? t.map(function (n) {
            return j(n);
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
        return typeof t == 'function' ? t : _objectSpread(_objectSpread({}, r), t !== null && t !== void 0 ? t : {});
      },
      Yl = function Yl(t) {
        var _ref42, _ref43;
        return babelHelpers["typeof"](t) == 'object' ? {
          type: (_ref42 = t == null ? void 0 : t.type) !== null && _ref42 !== void 0 ? _ref42 : 'local',
          hideOnOffsetDates: (_ref43 = t == null ? void 0 : t.hideOnOffsetDates) !== null && _ref43 !== void 0 ? _ref43 : !1
        } : {
          type: t,
          hideOnOffsetDates: !1
        };
      },
      xl = function xl(t) {
        var r = {
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
        return babelHelpers["typeof"](t) == 'object' ? _objectSpread(_objectSpread({
          enabled: !0
        }, r), t) : _objectSpread({
          enabled: t
        }, r);
      },
      Vl = function Vl(t) {
        var _t$exactMatch, _t$dateInTz, _t$emitTimezone, _t$convertModel;
        return t ? typeof t == 'string' ? {
          timezone: t,
          exactMatch: !1,
          dateInTz: void 0,
          emitTimezone: void 0,
          convertModel: !0
        } : {
          timezone: t.timezone,
          exactMatch: (_t$exactMatch = t.exactMatch) !== null && _t$exactMatch !== void 0 ? _t$exactMatch : !1,
          dateInTz: (_t$dateInTz = t.dateInTz) !== null && _t$dateInTz !== void 0 ? _t$dateInTz : void 0,
          emitTimezone: (_t$emitTimezone = t.emitTimezone) !== null && _t$emitTimezone !== void 0 ? _t$emitTimezone : void 0,
          convertModel: (_t$convertModel = t.convertModel) !== null && _t$convertModel !== void 0 ? _t$convertModel : !0
        } : {
          timezone: void 0,
          exactMatch: !1,
          emitTimezone: void 0
        };
      },
      Vn = function Vn(t, r, n) {
        return new Map(t.map(function (a) {
          var o = vn(a, r, n);
          return [Cn(o), o];
        }));
      },
      Il = function Il(t, r) {
        return t.length ? new Map(t.map(function (n) {
          var a = vn(n.date, r);
          return [Cn(a), n];
        })) : null;
      },
      Fl = function Fl(t) {
        var r;
        return {
          minDate: Dn(t.minDate, t.timezone, t.isSpecific),
          maxDate: Dn(t.maxDate, t.timezone, t.isSpecific),
          disabledDates: Bn(t.disabledDates) ? Vn(t.disabledDates, t.timezone, t.isSpecific) : t.disabledDates,
          allowedDates: Bn(t.allowedDates) ? Vn(t.allowedDates, t.timezone, t.isSpecific) : null,
          highlight: babelHelpers["typeof"](t.highlight) == 'object' && Bn((r = t.highlight) == null ? void 0 : r.dates) ? Vn(t.highlight.dates, t.timezone) : t.highlight,
          markers: Il(t.markers, t.timezone)
        };
      },
      Ll = function Ll(t) {
        var _t$dragSelect;
        return typeof t == 'boolean' ? {
          enabled: t,
          dragSelect: !0,
          limit: null
        } : {
          enabled: !!t,
          limit: t.limit ? +t.limit : null,
          dragSelect: (_t$dragSelect = t.dragSelect) !== null && _t$dragSelect !== void 0 ? _t$dragSelect : !0
        };
      },
      Hl = function Hl(t) {
        return _objectSpread({}, Object.fromEntries(Object.keys(t).map(function (n) {
          var a = n,
            o = t[a],
            l = typeof t[a] == 'string' ? babelHelpers.defineProperty({}, o, !0) : Object.fromEntries(o.map(function (s) {
              return [s, !0];
            }));
          return [n, l];
        })));
      },
      Me = function Me(t) {
        var r = function r() {
            var Z = t.enableSeconds ? ':ss' : '',
              O = t.enableMinutes ? ':mm' : '';
            return t.is24 ? "HH".concat(O).concat(Z) : "hh".concat(O).concat(Z, " aa");
          },
          n = function n() {
            var Z;
            return t.format ? t.format : t.monthPicker ? 'MM/yyyy' : t.timePicker ? r() : t.weekPicker ? "".concat(((Z = I.value) == null ? void 0 : Z.type) === 'iso' ? 'RR' : 'ww', "-yyyy") : t.yearPicker ? 'yyyy' : t.quarterPicker ? 'QQQ/yyyy' : t.enableTimePicker ? "MM/dd/yyyy, ".concat(r()) : 'MM/dd/yyyy';
          },
          a = function a(Z) {
            return Fa(Z, t.enableSeconds);
          },
          o = function o() {
            return z.value.enabled ? t.startTime && Array.isArray(t.startTime) ? [a(t.startTime[0]), a(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? a(t.startTime) : null;
          },
          l = e.computed(function () {
            return Bl(t.multiCalendars);
          }),
          s = e.computed(function () {
            return o();
          }),
          c = e.computed(function () {
            return Cl(t.ariaLabels);
          }),
          u = e.computed(function () {
            return Nl(t.filters);
          }),
          B = e.computed(function () {
            return $l(t.transitions);
          }),
          m = e.computed(function () {
            return Ol(t.actionRow);
          }),
          S = e.computed(function () {
            return Sl(t.previewFormat, t.format, n());
          }),
          g = e.computed(function () {
            return Al(t.textInput);
          }),
          C = e.computed(function () {
            return El(t.inline);
          }),
          Y = e.computed(function () {
            return Rl(t.config);
          }),
          x = e.computed(function () {
            return _l(t.highlight);
          }),
          I = e.computed(function () {
            return Yl(t.weekNumbers);
          }),
          p = e.computed(function () {
            return Vl(t.timezone);
          }),
          $ = e.computed(function () {
            return Ll(t.multiDates);
          }),
          P = e.computed(function () {
            return Fl({
              minDate: t.minDate,
              maxDate: t.maxDate,
              disabledDates: t.disabledDates,
              allowedDates: t.allowedDates,
              highlight: x.value,
              markers: t.markers,
              timezone: p.value,
              isSpecific: t.monthPicker || t.yearPicker || t.quarterPicker
            });
          }),
          z = e.computed(function () {
            return xl(t.range);
          }),
          K = e.computed(function () {
            return Hl(t.ui);
          });
        return {
          defaultedTransitions: B,
          defaultedMultiCalendars: l,
          defaultedStartTime: s,
          defaultedAriaLabels: c,
          defaultedFilters: u,
          defaultedActionRow: m,
          defaultedPreviewFormat: S,
          defaultedTextInput: g,
          defaultedInline: C,
          defaultedConfig: Y,
          defaultedHighlight: x,
          defaultedWeekNumbers: I,
          defaultedRange: z,
          propDates: P,
          defaultedTz: p,
          defaultedMultiDates: $,
          defaultedUI: K,
          getDefaultPattern: n,
          getDefaultStartTime: o
        };
      },
      zl = function zl(t, r, n) {
        var a = e.ref(),
          _Me = Me(r),
          o = _Me.defaultedTextInput,
          l = _Me.defaultedRange,
          s = _Me.defaultedTz,
          c = _Me.defaultedMultiDates,
          u = _Me.getDefaultPattern,
          B = e.ref(''),
          m = e.toRef(r, 'format'),
          S = e.toRef(r, 'formatLocale');
        e.watch(a, function () {
          typeof r.onInternalModelChange == 'function' && t('internal-model-change', a.value, v(!0));
        }, {
          deep: !0
        }), e.watch(l, function (d, ee) {
          d.enabled !== ee.enabled && (a.value = null);
        }), e.watch(m, function () {
          G();
        });
        var g = function g(d) {
            return s.value.timezone && s.value.convertModel ? Fe(d, s.value.timezone) : d;
          },
          C = function C(d) {
            if (s.value.timezone && s.value.convertModel) {
              var ee = ul(s.value.timezone);
              return ir(d, ee);
            }
            return d;
          },
          Y = function Y(d, ee) {
            var de = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            return Ha(d, r.format, r.formatLocale, o.value.rangeSeparator, r.modelAuto, ee !== null && ee !== void 0 ? ee : u(), de);
          },
          x = function x(d) {
            return d ? r.modelType ? J(d) : {
              hours: tt(d),
              minutes: ot(d),
              seconds: r.enableSeconds ? Tt(d) : 0
            } : null;
          },
          I = function I(d) {
            return r.modelType ? J(d) : {
              month: he(d),
              year: ce(d)
            };
          },
          p = function p(d) {
            return Array.isArray(d) ? c.value.enabled ? d.map(function (ee) {
              return $(ee, Ze(j(), ee));
            }) : Kt(function () {
              return [Ze(j(), d[0]), d[1] ? Ze(j(), d[1]) : At(l.value.partialRange)];
            }, l.value.enabled) : Ze(j(), +d);
          },
          $ = function $(d, ee) {
            return (typeof d == 'string' || typeof d == 'number') && r.modelType ? N(d) : ee;
          },
          P = function P(d) {
            return Array.isArray(d) ? [$(d[0], st(null, +d[0].hours, +d[0].minutes, d[0].seconds)), $(d[1], st(null, +d[1].hours, +d[1].minutes, d[1].seconds))] : $(d, st(null, d.hours, d.minutes, d.seconds));
          },
          z = function z(d) {
            var ee = be(j(), {
              date: 1
            });
            return Array.isArray(d) ? c.value.enabled ? d.map(function (de) {
              return $(de, at(ee, +de.month, +de.year));
            }) : Kt(function () {
              return [$(d[0], at(ee, +d[0].month, +d[0].year)), $(d[1], d[1] ? at(ee, +d[1].month, +d[1].year) : At(l.value.partialRange))];
            }, l.value.enabled) : $(d, at(ee, +d.month, +d.year));
          },
          K = function K(d) {
            if (Array.isArray(d)) return d.map(function (ee) {
              return N(ee);
            });
            throw new Error(Tn.dateArr('multi-dates'));
          },
          Z = function Z(d) {
            if (Array.isArray(d) && l.value.enabled) {
              var ee = d[0],
                de = d[1];
              return [j(Array.isArray(ee) ? ee[0] : null), j(Array.isArray(de) ? de[0] : null)];
            }
            return j(d[0]);
          },
          O = function O(d) {
            return r.modelAuto ? Array.isArray(d) ? [N(d[0]), N(d[1])] : r.autoApply ? [N(d)] : [N(d), null] : Array.isArray(d) ? Kt(function () {
              return d[1] ? [N(d[0]), d[1] ? N(d[1]) : At(l.value.partialRange)] : [N(d[0])];
            }, l.value.enabled) : N(d);
          },
          D = function D() {
            Array.isArray(a.value) && l.value.enabled && a.value.length === 1 && a.value.push(At(l.value.partialRange));
          },
          W = function W() {
            var d = a.value;
            return [J(d[0]), d[1] ? J(d[1]) : At(l.value.partialRange)];
          },
          E = function E() {
            return a.value[1] ? W() : J(Ne(a.value[0]));
          },
          Q = function Q() {
            return (a.value || []).map(function (d) {
              return J(d);
            });
          },
          re = function re() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return d || D(), r.modelAuto ? E() : c.value.enabled ? Q() : Array.isArray(a.value) ? Kt(function () {
              return W();
            }, l.value.enabled) : J(Ne(a.value));
          },
          le = function le(d) {
            return !d || Array.isArray(d) && !d.length ? null : r.timePicker ? P(Ne(d)) : r.monthPicker ? z(Ne(d)) : r.yearPicker ? p(Ne(d)) : c.value.enabled ? K(Ne(d)) : r.weekPicker ? Z(Ne(d)) : O(Ne(d));
          },
          b = function b(d) {
            var ee = le(d);
            $n(Ne(ee)) ? (a.value = Ne(ee), G()) : (a.value = null, B.value = '');
          },
          H = function H() {
            var d = function d(ee) {
              return Ke(ee, o.value.format);
            };
            return "".concat(d(a.value[0]), " ").concat(o.value.rangeSeparator, " ").concat(a.value[1] ? d(a.value[1]) : '');
          },
          X = function X() {
            return n.value && a.value ? Array.isArray(a.value) ? H() : Ke(a.value, o.value.format) : Y(a.value);
          },
          w = function w() {
            return a.value ? c.value.enabled ? a.value.map(function (d) {
              return Y(d);
            }).join('; ') : o.value.enabled && typeof o.value.format == 'string' ? X() : Y(a.value) : '';
          },
          G = function G() {
            !r.format || typeof r.format == 'string' || o.value.enabled && typeof o.value.format == 'string' ? B.value = w() : B.value = r.format(a.value);
          },
          N = function N(d) {
            if (r.utc) {
              var ee = new Date(d);
              return r.utc === 'preserve' ? new Date(ee.getTime() + ee.getTimezoneOffset() * 6e4) : ee;
            }
            return r.modelType ? cl.includes(r.modelType) ? g(new Date(d)) : r.modelType === 'format' && (typeof r.format == 'string' || !r.format) ? g(bn(d, u(), new Date(), {
              locale: S.value
            })) : g(bn(d, r.modelType, new Date(), {
              locale: S.value
            })) : g(new Date(d));
          },
          J = function J(d) {
            return d ? r.utc ? bl(d, r.utc === 'preserve', r.enableSeconds) : r.modelType ? r.modelType === 'timestamp' ? +C(d) : r.modelType === 'iso' ? C(d).toISOString() : r.modelType === 'format' && (typeof r.format == 'string' || !r.format) ? Y(C(d)) : Y(C(d), r.modelType, !0) : C(d) : '';
          },
          se = function se(d) {
            var ee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var de = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            if (de) return d;
            if (t('update:model-value', d), s.value.emitTimezone && ee) {
              var A = Array.isArray(d) ? d.map(function (fe) {
                return Fe(Ne(fe), s.value.emitTimezone);
              }) : Fe(Ne(d), s.value.emitTimezone);
              t('update:model-timezone-value', A);
            }
          },
          h = function h(d) {
            return Array.isArray(a.value) ? c.value.enabled ? a.value.map(function (ee) {
              return d(ee);
            }) : [d(a.value[0]), a.value[1] ? d(a.value[1]) : At(l.value.partialRange)] : d(Ne(a.value));
          },
          y = function y() {
            if (Array.isArray(a.value)) {
              var d = nt(a.value[0], r.weekStart),
                ee = a.value[1] ? nt(a.value[1], r.weekStart) : [];
              return [d.map(function (de) {
                return j(de);
              }), ee.map(function (de) {
                return j(de);
              })];
            }
            return nt(a.value, r.weekStart).map(function (d) {
              return j(d);
            });
          },
          L = function L(d, ee) {
            return se(Ne(h(d)), !1, ee);
          },
          f = function f(d) {
            var ee = y();
            return d ? ee : t('update:model-value', y());
          },
          v = function v() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return d || G(), r.monthPicker ? L(I, d) : r.timePicker ? L(x, d) : r.yearPicker ? L(ce, d) : r.weekPicker ? f(d) : se(re(d), !0, d);
          };
        return {
          inputValue: B,
          internalModelValue: a,
          checkBeforeEmit: function checkBeforeEmit() {
            return a.value ? l.value.enabled ? l.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1;
          },
          parseExternalModelValue: b,
          formatInputValue: G,
          emitModelValue: v
        };
      },
      Wl = function Wl(t, r) {
        var _Me2 = Me(t),
          n = _Me2.defaultedFilters,
          a = _Me2.propDates,
          _dt = dt(t),
          o = _dt.validateMonthYearInRange,
          l = function l(m, S) {
            var g = m;
            return n.value.months.includes(he(g)) ? (g = S ? qe(m, 1) : Bt(m, 1), l(g, S)) : g;
          },
          s = function s(m, S) {
            var g = m;
            return n.value.years.includes(ce(g)) ? (g = S ? dn(m, 1) : Ba(m, 1), s(g, S)) : g;
          },
          c = function c(m) {
            var S = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var g = be(j(), {
              month: t.month,
              year: t.year
            });
            var C = m ? qe(g, 1) : Bt(g, 1);
            t.disableYearSelect && (C = Ze(C, t.year));
            var Y = he(C),
              x = ce(C);
            n.value.months.includes(Y) && (C = l(C, m), Y = he(C), x = ce(C)), n.value.years.includes(x) && (C = s(C, m), x = ce(C)), o(Y, x, m, t.preventMinMaxNavigation) && u(Y, x, S);
          },
          u = function u(m, S, g) {
            r('update-month-year', {
              month: m,
              year: S,
              fromNav: g
            });
          },
          B = e.computed(function () {
            return function (m) {
              return La(be(j(), {
                month: t.month,
                year: t.year
              }), a.value.maxDate, a.value.minDate, t.preventMinMaxNavigation, m);
            };
          });
        return {
          handleMonthYearChange: c,
          isDisabled: B,
          updateMonthYear: u
        };
      },
      Jt = {
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
          "default": 'center'
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
          type: [String, Object],
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
          "default": 'short'
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
          "default": 'Now'
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
        highlight: {
          type: [Function, Object],
          "default": null
        },
        teleport: {
          type: [Boolean, String, Object],
          "default": null
        },
        teleportCenter: {
          type: Boolean,
          "default": !1
        },
        locale: {
          type: String,
          "default": 'en-Us'
        },
        weekNumName: {
          type: String,
          "default": 'W'
        },
        weekStart: {
          type: [Number, String],
          "default": 1
        },
        weekNumbers: {
          type: [String, Function, Object],
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
          "default": 'Select'
        },
        cancelText: {
          type: String,
          "default": 'Cancel'
        },
        previewFormat: {
          type: [String, Function],
          "default": function _default() {
            return '';
          }
        },
        multiDates: {
          type: [Object, Boolean],
          "default": !1
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
          "default": ''
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
          "default": 'off'
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
        },
        onInternalModelChange: {
          type: [Function, Object],
          "default": null
        },
        enableMinutes: {
          type: Boolean,
          "default": !0
        },
        ui: {
          type: Object,
          "default": function _default() {
            return {};
          }
        }
      },
      Ge = _objectSpread(_objectSpread({}, Jt), {}, {
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
        },
        getInputRect: {
          type: Function,
          "default": function _default() {
            return {};
          }
        },
        isTextInputDate: {
          type: Boolean,
          "default": !1
        }
      }),
      ql = ['title'],
      Ul = ['disabled'],
      jl = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'ActionRow',
        props: _objectSpread({
          menuMount: {
            type: Boolean,
            "default": !1
          },
          calendarWidth: {
            type: Number,
            "default": 0
          }
        }, Ge),
        emits: ['close-picker', 'select-date', 'select-now', 'invalid-select'],
        setup: function setup(t, _ref45) {
          var r = _ref45.emit;
          var n = r,
            a = t,
            _Me3 = Me(a),
            o = _Me3.defaultedActionRow,
            l = _Me3.defaultedPreviewFormat,
            s = _Me3.defaultedMultiCalendars,
            c = _Me3.defaultedTextInput,
            u = _Me3.defaultedInline,
            B = _Me3.defaultedRange,
            m = _Me3.defaultedMultiDates,
            _dt2 = dt(a),
            S = _dt2.isTimeValid,
            g = _dt2.isMonthValid,
            _ut = ut(),
            C = _ut.buildMatrix,
            Y = e.ref(null),
            x = e.ref(null),
            I = e.ref(!1),
            p = e.ref({}),
            $ = e.ref(null),
            P = e.ref(null);
          e.onMounted(function () {
            a.arrowNavigation && C([Oe(Y), Oe(x)], 'actionRow'), z(), window.addEventListener('resize', z);
          }), e.onUnmounted(function () {
            window.removeEventListener('resize', z);
          });
          var z = function z() {
              I.value = !1, setTimeout(function () {
                var X, w;
                var b = (X = $.value) == null ? void 0 : X.getBoundingClientRect(),
                  H = (w = P.value) == null ? void 0 : w.getBoundingClientRect();
                b && H && (p.value.maxWidth = "".concat(H.width - b.width - 20, "px")), I.value = !0;
              }, 0);
            },
            K = e.computed(function () {
              return B.value.enabled && !B.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0;
            }),
            Z = e.computed(function () {
              return !S.value(a.internalModelValue) || !g.value(a.internalModelValue) || !K.value;
            }),
            O = function O() {
              var b = l.value;
              return a.timePicker || a.monthPicker, b(Ne(a.internalModelValue));
            },
            D = function D() {
              var b = a.internalModelValue;
              return s.value.count > 0 ? "".concat(W(b[0]), " - ").concat(W(b[1])) : [W(b[0]), W(b[1])];
            },
            W = function W(b) {
              return Ha(b, l.value, a.formatLocale, c.value.rangeSeparator, a.modelAuto, l.value);
            },
            E = e.computed(function () {
              return !a.internalModelValue || !a.menuMount ? '' : typeof l.value == 'string' ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? D() : m.value.enabled ? a.internalModelValue.map(function (b) {
                return "".concat(W(b));
              }) : a.modelAuto ? "".concat(W(a.internalModelValue[0])) : "".concat(W(a.internalModelValue[0]), " -") : W(a.internalModelValue) : O();
            }),
            Q = function Q() {
              return m.value.enabled ? '; ' : ' - ';
            },
            re = e.computed(function () {
              return Array.isArray(E.value) ? E.value.join(Q()) : E.value;
            }),
            le = function le() {
              S.value(a.internalModelValue) && g.value(a.internalModelValue) && K.value ? n('select-date') : n('invalid-select');
            };
          return function (b, H) {
            return e.openBlock(), e.createElementBlock('div', {
              ref_key: 'actionRowRef',
              ref: P,
              "class": 'dp__action_row'
            }, [b.$slots['action-row'] ? e.renderSlot(b.$slots, 'action-row', e.normalizeProps(e.mergeProps({
              key: 0
            }, {
              internalModelValue: b.internalModelValue,
              disabled: Z.value,
              selectDate: function selectDate() {
                return b.$emit('select-date');
              },
              closePicker: function closePicker() {
                return b.$emit('close-picker');
              }
            }))) : (e.openBlock(), e.createElementBlock(e.Fragment, {
              key: 1
            }, [e.unref(o).showPreview ? (e.openBlock(), e.createElementBlock('div', {
              key: 0,
              "class": 'dp__selection_preview',
              title: re.value,
              style: e.normalizeStyle(p.value)
            }, [b.$slots['action-preview'] && I.value ? e.renderSlot(b.$slots, 'action-preview', {
              key: 0,
              value: b.internalModelValue
            }) : e.createCommentVNode('', !0), !b.$slots['action-preview'] && I.value ? (e.openBlock(), e.createElementBlock(e.Fragment, {
              key: 1
            }, [e.createTextVNode(e.toDisplayString(re.value), 1)], 64)) : e.createCommentVNode('', !0)], 12, ql)) : e.createCommentVNode('', !0), e.createElementVNode('div', {
              ref_key: 'actionBtnContainer',
              ref: $,
              "class": 'dp__action_buttons',
              'data-dp-element': 'action-row'
            }, [b.$slots['action-buttons'] ? e.renderSlot(b.$slots, 'action-buttons', {
              key: 0,
              value: b.internalModelValue
            }) : e.createCommentVNode('', !0), b.$slots['action-buttons'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
              key: 1
            }, [!e.unref(u).enabled && e.unref(o).showCancel ? (e.openBlock(), e.createElementBlock('button', {
              key: 0,
              ref_key: 'cancelButtonRef',
              ref: Y,
              type: 'button',
              "class": 'dp__action_button dp__action_cancel',
              onClick: H[0] || (H[0] = function (X) {
                return b.$emit('close-picker');
              }),
              onKeydown: H[1] || (H[1] = function (X) {
                return e.unref(xe)(X, function () {
                  return b.$emit('close-picker');
                });
              })
            }, e.toDisplayString(b.cancelText), 545)) : e.createCommentVNode('', !0), e.unref(o).showNow ? (e.openBlock(), e.createElementBlock('button', {
              key: 1,
              type: 'button',
              "class": 'dp__action_button dp__action_cancel',
              onClick: H[2] || (H[2] = function (X) {
                return b.$emit('select-now');
              }),
              onKeydown: H[3] || (H[3] = function (X) {
                return e.unref(xe)(X, function () {
                  return b.$emit('select-now');
                });
              })
            }, e.toDisplayString(b.nowButtonLabel), 33)) : e.createCommentVNode('', !0), e.unref(o).showSelect ? (e.openBlock(), e.createElementBlock('button', {
              key: 2,
              ref_key: 'selectButtonRef',
              ref: x,
              type: 'button',
              "class": 'dp__action_button dp__action_select',
              disabled: Z.value,
              'data-test': 'select-button',
              onKeydown: H[4] || (H[4] = function (X) {
                return e.unref(xe)(X, function () {
                  return le();
                });
              }),
              onClick: le
            }, e.toDisplayString(b.selectText), 41, Ul)) : e.createCommentVNode('', !0)], 64))], 512)], 64))], 512);
          };
        }
      }),
      Ql = ['role', 'aria-label', 'tabindex'],
      Gl = {
        "class": 'dp__selection_grid_header'
      },
      Kl = ['aria-selected', 'aria-disabled', 'data-test', 'onClick', 'onKeydown', 'onMouseover'],
      Xl = ['aria-label'],
      It = e.defineComponent({
        __name: 'SelectionOverlay',
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
          menuWrapRef: {},
          ariaLabels: {},
          overlayLabel: {}
        },
        emits: ['selected', 'toggle', 'reset-flow', 'hover-value'],
        setup: function setup(t, _ref46) {
          var r = _ref46.expose,
            n = _ref46.emit;
          var _ut2 = ut(),
            a = _ut2.setSelectionGrid,
            o = _ut2.buildMultiLevelMatrix,
            l = _ut2.setMonthPicker,
            s = n,
            c = t,
            _Me4 = Me(c),
            u = _Me4.defaultedAriaLabels,
            B = _Me4.defaultedTextInput,
            m = _Me4.defaultedConfig,
            _tn = tn(),
            S = _tn.hideNavigationButtons,
            g = e.ref(!1),
            C = e.ref(null),
            Y = e.ref(null),
            x = e.ref([]),
            I = e.ref(),
            p = e.ref(null),
            $ = e.ref(0),
            P = e.ref(null);
          e.onBeforeUpdate(function () {
            C.value = null;
          }), e.onMounted(function () {
            e.nextTick().then(function () {
              return Q();
            }), c.noOverlayFocus || K(), z(!0);
          }), e.onUnmounted(function () {
            return z(!1);
          });
          var z = function z(h) {
              var y;
              c.arrowNavigation && ((y = c.headerRefs) != null && y.length ? l(h) : a(h));
            },
            K = function K() {
              var y;
              var h = Oe(Y);
              h && (B.value.enabled || (C.value ? (y = C.value) == null || y.focus({
                preventScroll: !0
              }) : h.focus({
                preventScroll: !0
              })), g.value = h.clientHeight < h.scrollHeight);
            },
            Z = e.computed(function () {
              return {
                dp__overlay: !0,
                'dp--overlay-absolute': !c.useRelative,
                'dp--overlay-relative': c.useRelative
              };
            }),
            O = e.computed(function () {
              return c.useRelative ? {
                height: "".concat(c.height, "px"),
                width: 'var(--dp-menu-min-width)'
              } : void 0;
            }),
            D = e.computed(function () {
              return {
                dp__overlay_col: !0
              };
            }),
            W = e.computed(function () {
              return {
                dp__btn: !0,
                dp__button: !0,
                dp__overlay_action: !0,
                dp__over_action_scroll: g.value,
                dp__button_bottom: c.isLast
              };
            }),
            E = e.computed(function () {
              var h, y;
              return {
                dp__overlay_container: !0,
                dp__container_flex: ((h = c.items) == null ? void 0 : h.length) <= 6,
                dp__container_block: ((y = c.items) == null ? void 0 : y.length) > 6
              };
            });
          e.watch(function () {
            return c.items;
          }, function () {
            return Q(!1);
          }, {
            deep: !0
          });
          var Q = function Q() {
              var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
              e.nextTick().then(function () {
                var y = Oe(C),
                  L = Oe(Y),
                  f = Oe(p),
                  v = Oe(P),
                  V = f ? f.getBoundingClientRect().height : 0;
                L && (L.getBoundingClientRect().height ? $.value = L.getBoundingClientRect().height - V : $.value = m.value.modeHeight - V), y && v && h && (v.scrollTop = y.offsetTop - v.offsetTop - ($.value / 2 - y.getBoundingClientRect().height) - V);
              });
            },
            re = function re(h) {
              h.disabled || s('selected', h.value);
            },
            le = function le() {
              s('toggle'), s('reset-flow');
            },
            b = function b() {
              c.escClose && le();
            },
            H = function H(h, y, L, f) {
              h && ((y.active || y.value === c.focusValue) && (C.value = h), c.arrowNavigation && (Array.isArray(x.value[L]) ? x.value[L][f] = h : x.value[L] = [h], X()));
            },
            X = function X() {
              var y, L;
              var h = (y = c.headerRefs) != null && y.length ? [c.headerRefs].concat(x.value) : x.value.concat([c.skipButtonRef ? [] : [p.value]]);
              o(Ne(h), (L = c.headerRefs) != null && L.length ? 'monthPicker' : 'selectionGrid');
            },
            w = function w(h) {
              c.arrowNavigation || lt(h, m.value, !0);
            },
            G = function G(h) {
              I.value = h, s('hover-value', h);
            },
            N = function N() {
              if (le(), !c.isLast) {
                var _c$menuWrapRef;
                var h = Pn((_c$menuWrapRef = c.menuWrapRef) !== null && _c$menuWrapRef !== void 0 ? _c$menuWrapRef : null, 'action-row');
                if (h) {
                  var y = Ea(h);
                  y == null || y.focus();
                }
              }
            },
            J = function J(h) {
              switch (h.key) {
                case ve.esc:
                  return b();
                case ve.arrowLeft:
                  return w(h);
                case ve.arrowRight:
                  return w(h);
                case ve.arrowUp:
                  return w(h);
                case ve.arrowDown:
                  return w(h);
                default:
                  return;
              }
            },
            se = function se(h) {
              if (h.key === ve.enter) return le();
              if (h.key === ve.tab) return N();
            };
          return r({
            focusGrid: K
          }), function (h, y) {
            var L;
            return e.openBlock(), e.createElementBlock('div', {
              ref_key: 'gridWrapRef',
              ref: Y,
              "class": e.normalizeClass(Z.value),
              style: e.normalizeStyle(O.value),
              role: h.useRelative ? void 0 : 'dialog',
              'aria-label': h.overlayLabel,
              tabindex: h.useRelative ? void 0 : '0',
              onKeydown: J,
              onClick: y[0] || (y[0] = e.withModifiers(function () {}, ['prevent']))
            }, [e.createElementVNode('div', {
              ref_key: 'containerRef',
              ref: P,
              "class": e.normalizeClass(E.value),
              style: e.normalizeStyle({
                '--dp-overlay-height': "".concat($.value, "px")
              }),
              role: 'grid'
            }, [e.createElementVNode('div', Gl, [e.renderSlot(h.$slots, 'header')]), h.$slots.overlay ? e.renderSlot(h.$slots, 'overlay', {
              key: 0
            }) : (e.openBlock(!0), e.createElementBlock(e.Fragment, {
              key: 1
            }, e.renderList(h.items, function (f, v) {
              return e.openBlock(), e.createElementBlock('div', {
                key: v,
                "class": e.normalizeClass(['dp__overlay_row', {
                  dp__flex_row: h.items.length >= 3
                }]),
                role: 'row'
              }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(f, function (V, d) {
                return e.openBlock(), e.createElementBlock('div', {
                  key: V.value,
                  ref_for: !0,
                  ref: function ref(ee) {
                    return H(ee, V, v, d);
                  },
                  role: 'gridcell',
                  "class": e.normalizeClass(D.value),
                  'aria-selected': V.active || void 0,
                  'aria-disabled': V.disabled || void 0,
                  tabindex: '0',
                  'data-test': V.text,
                  onClick: e.withModifiers(function (ee) {
                    return re(V);
                  }, ['prevent']),
                  onKeydown: function onKeydown(ee) {
                    return e.unref(xe)(ee, function () {
                      return re(V);
                    }, !0);
                  },
                  onMouseover: function onMouseover(ee) {
                    return G(V.value);
                  }
                }, [e.createElementVNode('div', {
                  "class": e.normalizeClass(V.className)
                }, [h.$slots.item ? e.renderSlot(h.$slots, 'item', {
                  key: 0,
                  item: V
                }) : e.createCommentVNode('', !0), h.$slots.item ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                  key: 1
                }, [e.createTextVNode(e.toDisplayString(V.text), 1)], 64))], 2)], 42, Kl);
              }), 128))], 2);
            }), 128))], 6), h.$slots['button-icon'] ? e.withDirectives((e.openBlock(), e.createElementBlock('button', {
              key: 0,
              ref_key: 'toggleButton',
              ref: p,
              type: 'button',
              'aria-label': (L = e.unref(u)) == null ? void 0 : L.toggleOverlay,
              "class": e.normalizeClass(W.value),
              tabindex: '0',
              onClick: le,
              onKeydown: se
            }, [e.renderSlot(h.$slots, 'button-icon')], 42, Xl)), [[e.vShow, !e.unref(S)(h.hideNavigation, h.type)]]) : e.createCommentVNode('', !0)], 46, Ql);
          };
        }
      }),
      Zt = e.defineComponent({
        __name: 'InstanceWrap',
        props: {
          multiCalendars: {},
          stretch: {
            type: Boolean
          },
          collapse: {
            type: Boolean
          }
        },
        setup: function setup(t) {
          var r = t,
            n = e.computed(function () {
              return r.multiCalendars > 0 ? babelHelpers.toConsumableArray(Array(r.multiCalendars).keys()) : [0];
            }),
            a = e.computed(function () {
              return {
                dp__instance_calendar: r.multiCalendars > 0
              };
            });
          return function (o, l) {
            return e.openBlock(), e.createElementBlock('div', {
              "class": e.normalizeClass({
                dp__menu_inner: !o.stretch,
                'dp--menu--inner-stretched': o.stretch,
                dp__flex_display: o.multiCalendars > 0,
                'dp--flex-display-collapsed': o.collapse
              })
            }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(n.value, function (s, c) {
              return e.openBlock(), e.createElementBlock('div', {
                key: s,
                "class": e.normalizeClass(a.value)
              }, [e.renderSlot(o.$slots, 'default', {
                instance: s,
                index: c
              })], 2);
            }), 128))], 2);
          };
        }
      }),
      Jl = ['data-dp-element', 'aria-label', 'aria-disabled'],
      Ft = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'ArrowBtn',
        props: {
          ariaLabel: {},
          elName: {},
          disabled: {
            type: Boolean
          }
        },
        emits: ['activate', 'set-ref'],
        setup: function setup(t, _ref47) {
          var r = _ref47.emit;
          var n = r,
            a = e.ref(null);
          return e.onMounted(function () {
            return n('set-ref', a);
          }), function (o, l) {
            return e.openBlock(), e.createElementBlock('button', {
              ref_key: 'elRef',
              ref: a,
              type: 'button',
              'data-dp-element': o.elName,
              "class": 'dp__btn dp--arrow-btn-nav',
              tabindex: '0',
              'aria-label': o.ariaLabel,
              'aria-disabled': o.disabled || void 0,
              onClick: l[0] || (l[0] = function (s) {
                return o.$emit('activate');
              }),
              onKeydown: l[1] || (l[1] = function (s) {
                return e.unref(xe)(s, function () {
                  return o.$emit('activate');
                }, !0);
              })
            }, [e.createElementVNode('span', {
              "class": e.normalizeClass(['dp__inner_nav', {
                dp__inner_nav_disabled: o.disabled
              }])
            }, [e.renderSlot(o.$slots, 'default')], 2)], 40, Jl);
          };
        }
      }),
      Zl = ['aria-label', 'data-test'],
      Ga = e.defineComponent({
        __name: 'YearModePicker',
        props: _objectSpread(_objectSpread({}, Ge), {}, {
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
        emits: ['toggle-year-picker', 'year-select', 'handle-year'],
        setup: function setup(t, _ref48) {
          var r = _ref48.emit;
          var n = r,
            a = t,
            _tn2 = tn(),
            o = _tn2.showRightIcon,
            l = _tn2.showLeftIcon,
            _Me5 = Me(a),
            s = _Me5.defaultedConfig,
            c = _Me5.defaultedMultiCalendars,
            u = _Me5.defaultedAriaLabels,
            B = _Me5.defaultedTransitions,
            m = _Me5.defaultedUI,
            _Lt = Lt(B),
            S = _Lt.showTransition,
            g = _Lt.transitionName,
            C = e.ref(!1),
            Y = function Y() {
              var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              var $ = arguments.length > 1 ? arguments[1] : undefined;
              C.value = !C.value, n('toggle-year-picker', {
                flow: p,
                show: $
              });
            },
            x = function x(p) {
              C.value = !1, n('year-select', p);
            },
            I = function I() {
              var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              n('handle-year', p);
            };
          return function (p, $) {
            var P, z, K, Z, O;
            return e.openBlock(), e.createElementBlock(e.Fragment, null, [e.createElementVNode('div', {
              "class": e.normalizeClass(['dp--year-mode-picker', {
                'dp--hidden-el': C.value
              }])
            }, [e.unref(l)(e.unref(c), t.instance) ? (e.openBlock(), e.createBlock(Ft, {
              key: 0,
              ref: 'mpPrevIconRef',
              'aria-label': (P = e.unref(u)) == null ? void 0 : P.prevYear,
              disabled: t.isDisabled(!1),
              "class": e.normalizeClass((z = e.unref(m)) == null ? void 0 : z.navBtnPrev),
              onActivate: $[0] || ($[0] = function (D) {
                return I(!1);
              })
            }, {
              "default": e.withCtx(function () {
                return [p.$slots['arrow-left'] ? e.renderSlot(p.$slots, 'arrow-left', {
                  key: 0
                }) : e.createCommentVNode('', !0), p.$slots['arrow-left'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(on), {
                  key: 1
                }))];
              }),
              _: 3
            }, 8, ['aria-label', 'disabled', 'class'])) : e.createCommentVNode('', !0), e.createElementVNode('button', {
              ref: 'mpYearButtonRef',
              "class": 'dp__btn dp--year-select',
              type: 'button',
              'aria-label': "".concat(t.year, "-").concat((K = e.unref(u)) == null ? void 0 : K.openYearsOverlay),
              'data-test': "year-mode-btn-".concat(t.instance),
              onClick: $[1] || ($[1] = function () {
                return Y(!1);
              }),
              onKeydown: $[2] || ($[2] = e.withKeys(function () {
                return Y(!1);
              }, ['enter']))
            }, [p.$slots.year ? e.renderSlot(p.$slots, 'year', {
              key: 0,
              year: t.year
            }) : e.createCommentVNode('', !0), p.$slots.year ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
              key: 1
            }, [e.createTextVNode(e.toDisplayString(t.year), 1)], 64))], 40, Zl), e.unref(o)(e.unref(c), t.instance) ? (e.openBlock(), e.createBlock(Ft, {
              key: 1,
              ref: 'mpNextIconRef',
              'aria-label': (Z = e.unref(u)) == null ? void 0 : Z.nextYear,
              disabled: t.isDisabled(!0),
              "class": e.normalizeClass((O = e.unref(m)) == null ? void 0 : O.navBtnNext),
              onActivate: $[3] || ($[3] = function (D) {
                return I(!0);
              })
            }, {
              "default": e.withCtx(function () {
                return [p.$slots['arrow-right'] ? e.renderSlot(p.$slots, 'arrow-right', {
                  key: 0
                }) : e.createCommentVNode('', !0), p.$slots['arrow-right'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(ln), {
                  key: 1
                }))];
              }),
              _: 3
            }, 8, ['aria-label', 'disabled', 'class'])) : e.createCommentVNode('', !0)], 2), e.createVNode(e.Transition, {
              name: e.unref(g)(t.showYearPicker),
              css: e.unref(S)
            }, {
              "default": e.withCtx(function () {
                var D, W;
                return [t.showYearPicker ? (e.openBlock(), e.createBlock(It, {
                  key: 0,
                  items: t.items,
                  'text-input': p.textInput,
                  'esc-close': p.escClose,
                  config: p.config,
                  'is-last': p.autoApply && !e.unref(s).keepActionRow,
                  'hide-navigation': p.hideNavigation,
                  'aria-labels': p.ariaLabels,
                  'overlay-label': (W = (D = e.unref(u)) == null ? void 0 : D.yearPicker) == null ? void 0 : W.call(D, !0),
                  type: 'year',
                  onToggle: Y,
                  onSelected: $[4] || ($[4] = function (E) {
                    return x(E);
                  })
                }, e.createSlots({
                  'button-icon': e.withCtx(function () {
                    return [p.$slots['calendar-icon'] ? e.renderSlot(p.$slots, 'calendar-icon', {
                      key: 0
                    }) : e.createCommentVNode('', !0), p.$slots['calendar-icon'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(Ie), {
                      key: 1
                    }))];
                  }),
                  _: 2
                }, [p.$slots['year-overlay-value'] ? {
                  name: 'item',
                  fn: e.withCtx(function (_ref49) {
                    var E = _ref49.item;
                    return [e.renderSlot(p.$slots, 'year-overlay-value', {
                      text: E.text,
                      value: E.value
                    })];
                  }),
                  key: '0'
                } : void 0]), 1032, ['items', 'text-input', 'esc-close', 'config', 'is-last', 'hide-navigation', 'aria-labels', 'overlay-label'])) : e.createCommentVNode('', !0)];
              }),
              _: 3
            }, 8, ['name', 'css'])], 64);
          };
        }
      }),
      In = function In(t, r, n) {
        if (r.value && Array.isArray(r.value)) {
          if (r.value.some(function (a) {
            return pe(t, a);
          })) {
            var a = r.value.filter(function (o) {
              return !pe(o, t);
            });
            r.value = a.length ? a : null;
          } else (n && +n > r.value.length || !n) && r.value.push(t);
        } else r.value = [t];
      },
      Fn = function Fn(t, r, n) {
        var a = t.value ? t.value.slice() : [];
        return a.length === 2 && a[1] !== null && (a = []), a.length ? Ce(r, a[0]) ? (a.unshift(r), n('range-start', a[0]), n('range-start', a[1])) : (a[1] = r, n('range-end', r)) : (a = [r], n('range-start', r)), a;
      },
      en = function en(t, r, n, a) {
        t && (t[0] && t[1] && n && r('auto-apply'), t[0] && !t[1] && a && n && r('auto-apply'));
      },
      Ka = function Ka(t) {
        Array.isArray(t.value) && t.value.length <= 2 && t.range ? t.modelValue.value = t.value.map(function (r) {
          return Fe(j(r), t.timezone);
        }) : Array.isArray(t.value) || (t.modelValue.value = Fe(j(t.value), t.timezone));
      },
      Xa = function Xa(t, r, n, a) {
        return Array.isArray(r.value) && (r.value.length === 2 || r.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && ($e(t, r.value[0]) || pe(t, r.value[0])) ? [r.value[0], t] : a.value.fixedEnd && (Ce(t, r.value[1]) || pe(t, r.value[1])) ? [t, r.value[1]] : (n('invalid-fixed-range', t), r.value) : [];
      },
      Ja = function Ja(_ref50) {
        var t = _ref50.multiCalendars,
          r = _ref50.range,
          n = _ref50.highlight,
          a = _ref50.propDates,
          o = _ref50.calendars,
          l = _ref50.modelValue,
          s = _ref50.props,
          c = _ref50.filters,
          u = _ref50.year,
          B = _ref50.month,
          m = _ref50.emit;
        var S = e.computed(function () {
            return Mn(s.yearRange, s.locale, s.reverseYears);
          }),
          g = e.ref([!1]),
          C = e.computed(function () {
            return function (E, Q) {
              var re = be(Qe(new Date()), {
                  month: B.value(E),
                  year: u.value(E)
                }),
                le = Q ? ia(re) : Et(re);
              return La(le, a.value.maxDate, a.value.minDate, s.preventMinMaxNavigation, Q);
            };
          }),
          Y = function Y() {
            return Array.isArray(l.value) && t.value.solo && l.value[1];
          },
          x = function x() {
            for (var E = 0; E < t.value.count; E++) if (E === 0) o.value[E] = o.value[0];else if (E === t.value.count - 1 && Y()) o.value[E] = {
              month: he(l.value[1]),
              year: ce(l.value[1])
            };else {
              var Q = be(j(), o.value[E - 1]);
              o.value[E] = {
                month: he(Q),
                year: ce(dn(Q, 1))
              };
            }
          },
          I = function I(E) {
            if (!E) return x();
            var Q = be(j(), o.value[E]);
            return o.value[0].year = ce(Ba(Q, t.value.count - 1)), x();
          },
          p = function p(E, Q) {
            var re = mr(Q, E);
            return r.value.showLastInRange && re > 1 ? Q : E;
          },
          $ = function $(E) {
            return s.focusStartDate || t.value.solo ? E[0] : E[1] ? p(E[0], E[1]) : E[0];
          },
          P = function P() {
            if (l.value) {
              var E = Array.isArray(l.value) ? $(l.value) : l.value;
              o.value[0] = {
                month: he(E),
                year: ce(E)
              };
            }
          },
          z = function z() {
            P(), t.value.count && x();
          };
        e.watch(l, function (E, Q) {
          s.isTextInputDate && JSON.stringify(E !== null && E !== void 0 ? E : {}) !== JSON.stringify(Q !== null && Q !== void 0 ? Q : {}) && z();
        }), e.onMounted(function () {
          z();
        });
        var K = function K(E, Q) {
            o.value[Q].year = E, m('update-month-year', {
              instance: Q,
              year: E,
              month: o.value[Q].month
            }), t.value.count && !t.value.solo && I(Q);
          },
          Z = e.computed(function () {
            return function (E) {
              return St(S.value, function (Q) {
                var H;
                var re = u.value(E) === Q.value,
                  le = xt(Q.value, $t(a.value.minDate), $t(a.value.maxDate)) || ((H = c.value.years) == null ? void 0 : H.includes(u.value(E))),
                  b = En(n.value, Q.value);
                return {
                  active: re,
                  disabled: le,
                  highlighted: b
                };
              });
            };
          }),
          O = function O(E, Q) {
            K(E, Q), W(Q);
          },
          D = function D(E) {
            var Q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if (!C.value(E, Q)) {
              var re = Q ? u.value(E) + 1 : u.value(E) - 1;
              K(re, E);
            }
          },
          W = function W(E) {
            var Q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var re = arguments.length > 2 ? arguments[2] : undefined;
            Q || m('reset-flow'), re !== void 0 ? g.value[E] = re : g.value[E] = !g.value[E], g.value[E] ? m('overlay-toggle', {
              open: !0,
              overlay: Re.year
            }) : (m('overlay-closed'), m('overlay-toggle', {
              open: !1,
              overlay: Re.year
            }));
          };
        return {
          isDisabled: C,
          groupedYears: Z,
          showYearPicker: g,
          selectYear: K,
          toggleYearPicker: W,
          handleYearSelect: O,
          handleYear: D
        };
      },
      es = function es(t, r) {
        var _Me6 = Me(t),
          n = _Me6.defaultedMultiCalendars,
          a = _Me6.defaultedAriaLabels,
          o = _Me6.defaultedTransitions,
          l = _Me6.defaultedConfig,
          s = _Me6.defaultedRange,
          c = _Me6.defaultedHighlight,
          u = _Me6.propDates,
          B = _Me6.defaultedTz,
          m = _Me6.defaultedFilters,
          S = _Me6.defaultedMultiDates,
          g = function g() {
            t.isTextInputDate && z(ce(j(t.startDate)), 0);
          },
          _Ht = Ht(t, r, g),
          C = _Ht.modelValue,
          Y = _Ht.year,
          x = _Ht.month,
          I = _Ht.calendars,
          p = e.computed(function () {
            return $a(t.formatLocale, t.locale, t.monthNameFormat);
          }),
          $ = e.ref(null),
          _dt3 = dt(t),
          P = _dt3.checkMinMaxRange,
          _Ja = Ja({
            modelValue: C,
            multiCalendars: n,
            range: s,
            highlight: c,
            calendars: I,
            year: Y,
            propDates: u,
            month: x,
            filters: m,
            props: t,
            emit: r
          }),
          z = _Ja.selectYear,
          K = _Ja.groupedYears,
          Z = _Ja.showYearPicker,
          O = _Ja.toggleYearPicker,
          D = _Ja.handleYearSelect,
          W = _Ja.handleYear,
          E = _Ja.isDisabled;
        e.onMounted(function () {
          t.startDate && (C.value && t.focusStartDate || !C.value) && z(ce(j(t.startDate)), 0);
        });
        var Q = function Q(v) {
            return v ? {
              month: he(v),
              year: ce(v)
            } : {
              month: null,
              year: null
            };
          },
          re = function re() {
            return C.value ? Array.isArray(C.value) ? C.value.map(function (v) {
              return Q(v);
            }) : Q(C.value) : Q();
          },
          le = function le(v, V) {
            var d = I.value[v],
              ee = re();
            return Array.isArray(ee) ? ee.some(function (de) {
              return de.year === (d == null ? void 0 : d.year) && de.month === V;
            }) : (d == null ? void 0 : d.year) === ee.year && V === ee.month;
          },
          b = function b(v, V, d) {
            var de, A;
            var ee = re();
            return Array.isArray(ee) ? Y.value(V) === ((de = ee[d]) == null ? void 0 : de.year) && v === ((A = ee[d]) == null ? void 0 : A.month) : !1;
          },
          H = function H(v, V) {
            if (s.value.enabled) {
              var d = re();
              if (Array.isArray(C.value) && Array.isArray(d)) {
                var ee = b(v, V, 0) || b(v, V, 1),
                  de = at(Qe(j()), v, Y.value(V));
                return Gt(C.value, $.value, de) && !ee;
              }
              return !1;
            }
            return !1;
          },
          X = e.computed(function () {
            return function (v) {
              return St(p.value, function (V) {
                var fe;
                var d = le(v, V.value),
                  ee = xt(V.value, xa(Y.value(v), u.value.minDate), Va(Y.value(v), u.value.maxDate)) || Pl(u.value.disabledDates, Y.value(v)).includes(V.value) || ((fe = m.value.months) == null ? void 0 : fe.includes(V.value)),
                  de = H(V.value, v),
                  A = Wa(c.value, V.value, Y.value(v));
                return {
                  active: d,
                  disabled: ee,
                  isBetween: de,
                  highlighted: A
                };
              });
            };
          }),
          w = function w(v, V) {
            return at(Qe(j()), v, Y.value(V));
          },
          G = function G(v, V) {
            var d = C.value ? C.value : Qe(new Date());
            C.value = at(d, v, Y.value(V)), r('auto-apply'), r('update-flow-step');
          },
          N = function N(v, V) {
            var d = w(v, V);
            s.value.fixedEnd || s.value.fixedStart ? C.value = Xa(d, C, r, s) : C.value ? P(d, C.value) && (C.value = Fn(C, w(v, V), r)) : C.value = [w(v, V)], e.nextTick().then(function () {
              en(C.value, r, t.autoApply, t.modelAuto);
            });
          },
          J = function J(v, V) {
            In(w(v, V), C, S.value.limit), r('auto-apply', !0);
          },
          se = function se(v, V) {
            return I.value[V].month = v, y(V, I.value[V].year, v), S.value.enabled ? J(v, V) : s.value.enabled ? N(v, V) : G(v, V);
          },
          h = function h(v, V) {
            z(v, V), y(V, v, null);
          },
          y = function y(v, V, d) {
            var ee = d;
            if (!ee && ee !== 0) {
              var de = re();
              ee = Array.isArray(de) ? de[v].month : de.month;
            }
            r('update-month-year', {
              instance: v,
              year: V,
              month: ee
            });
          };
        return {
          groupedMonths: X,
          groupedYears: K,
          year: Y,
          isDisabled: E,
          defaultedMultiCalendars: n,
          defaultedAriaLabels: a,
          defaultedTransitions: o,
          defaultedConfig: l,
          showYearPicker: Z,
          modelValue: C,
          presetDate: function presetDate(v, V) {
            Ka({
              value: v,
              modelValue: C,
              range: s.value.enabled,
              timezone: V ? void 0 : B.value.timezone
            }), r('auto-apply');
          },
          setHoverDate: function setHoverDate(v, V) {
            $.value = w(v, V);
          },
          selectMonth: se,
          selectYear: h,
          toggleYearPicker: O,
          handleYearSelect: D,
          handleYear: W,
          getModelMonthYear: re
        };
      },
      ts = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'MonthPicker',
        props: _objectSpread({}, Ge),
        emits: ['update:internal-model-value', 'overlay-closed', 'reset-flow', 'range-start', 'range-end', 'auto-apply', 'update-month-year', 'update-flow-step', 'mount', 'invalid-fixed-range', 'overlay-toggle'],
        setup: function setup(t, _ref51) {
          var r = _ref51.expose,
            n = _ref51.emit;
          var a = n,
            o = e.useSlots(),
            l = Le(o, 'yearMode'),
            s = t;
          e.onMounted(function () {
            s.shadow || a('mount', null);
          });
          var _es = es(s, a),
            c = _es.groupedMonths,
            u = _es.groupedYears,
            B = _es.year,
            m = _es.isDisabled,
            S = _es.defaultedMultiCalendars,
            g = _es.defaultedConfig,
            C = _es.showYearPicker,
            Y = _es.modelValue,
            x = _es.presetDate,
            I = _es.setHoverDate,
            p = _es.selectMonth,
            $ = _es.selectYear,
            P = _es.toggleYearPicker,
            z = _es.handleYearSelect,
            K = _es.handleYear,
            Z = _es.getModelMonthYear;
          return r({
            getSidebarProps: function getSidebarProps() {
              return {
                modelValue: Y,
                year: B,
                getModelMonthYear: Z,
                selectMonth: p,
                selectYear: $,
                handleYear: K
              };
            },
            presetDate: x,
            toggleYearPicker: function toggleYearPicker(D) {
              return P(0, D);
            }
          }), function (D, W) {
            return e.openBlock(), e.createBlock(Zt, {
              'multi-calendars': e.unref(S).count,
              collapse: D.collapse,
              stretch: ''
            }, {
              "default": e.withCtx(function (_ref52) {
                var E = _ref52.instance;
                return [D.$slots['top-extra'] ? e.renderSlot(D.$slots, 'top-extra', {
                  key: 0,
                  value: D.internalModelValue
                }) : e.createCommentVNode('', !0), D.$slots['month-year'] ? e.renderSlot(D.$slots, 'month-year', e.normalizeProps(e.mergeProps({
                  key: 1
                }, {
                  year: e.unref(B),
                  months: e.unref(c)(E),
                  years: e.unref(u)(E),
                  selectMonth: e.unref(p),
                  selectYear: e.unref($),
                  instance: E
                }))) : (e.openBlock(), e.createBlock(It, {
                  key: 2,
                  items: e.unref(c)(E),
                  'arrow-navigation': D.arrowNavigation,
                  'is-last': D.autoApply && !e.unref(g).keepActionRow,
                  'esc-close': D.escClose,
                  height: e.unref(g).modeHeight,
                  config: D.config,
                  'no-overlay-focus': !!(D.noOverlayFocus || D.textInput),
                  'use-relative': '',
                  type: 'month',
                  onSelected: function onSelected(Q) {
                    return e.unref(p)(Q, E);
                  },
                  onHoverValue: function onHoverValue(Q) {
                    return e.unref(I)(Q, E);
                  }
                }, e.createSlots({
                  header: e.withCtx(function () {
                    return [e.createVNode(Ga, e.mergeProps(D.$props, {
                      items: e.unref(u)(E),
                      instance: E,
                      'show-year-picker': e.unref(C)[E],
                      year: e.unref(B)(E),
                      'is-disabled': function isDisabled(Q) {
                        return e.unref(m)(E, Q);
                      },
                      onHandleYear: function onHandleYear(Q) {
                        return e.unref(K)(E, Q);
                      },
                      onYearSelect: function onYearSelect(Q) {
                        return e.unref(z)(Q, E);
                      },
                      onToggleYearPicker: function onToggleYearPicker(Q) {
                        return e.unref(P)(E, Q == null ? void 0 : Q.flow, Q == null ? void 0 : Q.show);
                      }
                    }), e.createSlots({
                      _: 2
                    }, [e.renderList(e.unref(l), function (Q, re) {
                      return {
                        name: Q,
                        fn: e.withCtx(function (le) {
                          return [e.renderSlot(D.$slots, Q, e.normalizeProps(e.guardReactiveProps(le)))];
                        })
                      };
                    })]), 1040, ['items', 'instance', 'show-year-picker', 'year', 'is-disabled', 'onHandleYear', 'onYearSelect', 'onToggleYearPicker'])];
                  }),
                  _: 2
                }, [D.$slots['month-overlay-value'] ? {
                  name: 'item',
                  fn: e.withCtx(function (_ref53) {
                    var Q = _ref53.item;
                    return [e.renderSlot(D.$slots, 'month-overlay-value', {
                      text: Q.text,
                      value: Q.value
                    })];
                  }),
                  key: '0'
                } : void 0]), 1032, ['items', 'arrow-navigation', 'is-last', 'esc-close', 'height', 'config', 'no-overlay-focus', 'onSelected', 'onHoverValue']))];
              }),
              _: 3
            }, 8, ['multi-calendars', 'collapse']);
          };
        }
      }),
      ns = function ns(t, r) {
        var n = function n() {
            t.isTextInputDate && (m.value = ce(j(t.startDate)));
          },
          _Ht2 = Ht(t, r, n),
          a = _Ht2.modelValue,
          o = e.ref(null),
          _Me7 = Me(t),
          l = _Me7.defaultedHighlight,
          s = _Me7.defaultedMultiDates,
          c = _Me7.defaultedFilters,
          u = _Me7.defaultedRange,
          B = _Me7.propDates,
          m = e.ref();
        e.onMounted(function () {
          t.startDate && (a.value && t.focusStartDate || !a.value) && (m.value = ce(j(t.startDate)));
        });
        var S = function S(p) {
            return Array.isArray(a.value) ? a.value.some(function ($) {
              return ce($) === p;
            }) : a.value ? ce(a.value) === p : !1;
          },
          g = function g(p) {
            return u.value.enabled && Array.isArray(a.value) ? Gt(a.value, o.value, Y(p)) : !1;
          },
          C = e.computed(function () {
            return St(Mn(t.yearRange, t.locale, t.reverseYears), function (p) {
              var $ = S(p.value),
                P = xt(p.value, $t(B.value.minDate), $t(B.value.maxDate)) || c.value.years.includes(p.value),
                z = g(p.value) && !$,
                K = En(l.value, p.value);
              return {
                active: $,
                disabled: P,
                isBetween: z,
                highlighted: K
              };
            });
          }),
          Y = function Y(p) {
            return Ze(Qe(Et(new Date())), p);
          };
        return {
          groupedYears: C,
          modelValue: a,
          focusYear: m,
          setHoverValue: function setHoverValue(p) {
            o.value = Ze(Qe(new Date()), p);
          },
          selectYear: function selectYear(p) {
            var $;
            if (r('update-month-year', {
              instance: 0,
              year: p
            }), s.value.enabled) return a.value ? Array.isArray(a.value) && ((($ = a.value) == null ? void 0 : $.map(function (z) {
              return ce(z);
            })).includes(p) ? a.value = a.value.filter(function (z) {
              return ce(z) !== p;
            }) : a.value.push(Ze(Ve(j()), p))) : a.value = [Ze(Ve(Et(j())), p)], r('auto-apply', !0);
            u.value.enabled ? (a.value = Fn(a, Y(p), r), e.nextTick().then(function () {
              en(a.value, r, t.autoApply, t.modelAuto);
            })) : (a.value = Y(p), r('auto-apply'));
          }
        };
      },
      as = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'YearPicker',
        props: _objectSpread({}, Ge),
        emits: ['update:internal-model-value', 'reset-flow', 'range-start', 'range-end', 'auto-apply', 'update-month-year'],
        setup: function setup(t, _ref54) {
          var r = _ref54.expose,
            n = _ref54.emit;
          var a = n,
            o = t,
            _ns = ns(o, a),
            l = _ns.groupedYears,
            s = _ns.modelValue,
            c = _ns.focusYear,
            u = _ns.selectYear,
            B = _ns.setHoverValue,
            _Me8 = Me(o),
            m = _Me8.defaultedConfig;
          return r({
            getSidebarProps: function getSidebarProps() {
              return {
                modelValue: s,
                selectYear: u
              };
            }
          }), function (g, C) {
            return e.openBlock(), e.createElementBlock('div', null, [g.$slots['top-extra'] ? e.renderSlot(g.$slots, 'top-extra', {
              key: 0,
              value: g.internalModelValue
            }) : e.createCommentVNode('', !0), g.$slots['month-year'] ? e.renderSlot(g.$slots, 'month-year', e.normalizeProps(e.mergeProps({
              key: 1
            }, {
              years: e.unref(l),
              selectYear: e.unref(u)
            }))) : (e.openBlock(), e.createBlock(It, {
              key: 2,
              items: e.unref(l),
              'is-last': g.autoApply && !e.unref(m).keepActionRow,
              height: e.unref(m).modeHeight,
              config: g.config,
              'no-overlay-focus': !!(g.noOverlayFocus || g.textInput),
              'focus-value': e.unref(c),
              type: 'year',
              'use-relative': '',
              onSelected: e.unref(u),
              onHoverValue: e.unref(B)
            }, e.createSlots({
              _: 2
            }, [g.$slots['year-overlay-value'] ? {
              name: 'item',
              fn: e.withCtx(function (_ref55) {
                var Y = _ref55.item;
                return [e.renderSlot(g.$slots, 'year-overlay-value', {
                  text: Y.text,
                  value: Y.value
                })];
              }),
              key: '0'
            } : void 0]), 1032, ['items', 'is-last', 'height', 'config', 'no-overlay-focus', 'focus-value', 'onSelected', 'onHoverValue']))]);
          };
        }
      }),
      rs = {
        key: 0,
        "class": 'dp__time_input'
      },
      os = ['data-test', 'aria-label', 'onKeydown', 'onClick', 'onMousedown'],
      ls = e.createElementVNode('span', {
        "class": 'dp__tp_inline_btn_bar dp__tp_btn_in_l'
      }, null, -1),
      ss = e.createElementVNode('span', {
        "class": 'dp__tp_inline_btn_bar dp__tp_btn_in_r'
      }, null, -1),
      is = ['aria-label', 'disabled', 'data-test', 'onKeydown', 'onClick'],
      us = ['data-test', 'aria-label', 'onKeydown', 'onClick', 'onMousedown'],
      cs = e.createElementVNode('span', {
        "class": 'dp__tp_inline_btn_bar dp__tp_btn_in_l'
      }, null, -1),
      ds = e.createElementVNode('span', {
        "class": 'dp__tp_inline_btn_bar dp__tp_btn_in_r'
      }, null, -1),
      fs = {
        key: 0
      },
      ms = ['aria-label'],
      hs = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'TimeInput',
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
        }, Ge),
        emits: ['set-hours', 'set-minutes', 'update:hours', 'update:minutes', 'update:seconds', 'reset-flow', 'mounted', 'overlay-closed', 'overlay-opened', 'am-pm-change'],
        setup: function setup(t, _ref56) {
          var r = _ref56.expose,
            n = _ref56.emit;
          var a = n,
            o = t,
            _ut3 = ut(),
            l = _ut3.setTimePickerElements,
            s = _ut3.setTimePickerBackRef,
            _Me9 = Me(o),
            c = _Me9.defaultedAriaLabels,
            u = _Me9.defaultedTransitions,
            B = _Me9.defaultedFilters,
            m = _Me9.defaultedConfig,
            S = _Me9.defaultedRange,
            _Lt2 = Lt(u),
            g = _Lt2.transitionName,
            C = _Lt2.showTransition,
            Y = e.reactive({
              hours: !1,
              minutes: !1,
              seconds: !1
            }),
            x = e.ref('AM'),
            I = e.ref(null),
            p = e.ref([]),
            $ = e.ref(),
            P = e.ref(!1);
          e.onMounted(function () {
            a('mounted');
          });
          var z = function z(i) {
              return be(new Date(), {
                hours: i.hours,
                minutes: i.minutes,
                seconds: o.enableSeconds ? i.seconds : 0,
                milliseconds: 0
              });
            },
            K = e.computed(function () {
              return function (i) {
                return w(i, o[i]) || O(i, o[i]);
              };
            }),
            Z = e.computed(function () {
              return {
                hours: o.hours,
                minutes: o.minutes,
                seconds: o.seconds
              };
            }),
            O = function O(i, _) {
              return S.value.enabled && !S.value.disableTimeRangeValidation ? !o.validateTime(i, _) : !1;
            },
            D = function D(i, _) {
              if (S.value.enabled && !S.value.disableTimeRangeValidation) {
                var R = _ ? +o["".concat(i, "Increment")] : -+o["".concat(i, "Increment")],
                  q = o[i] + R;
                return !o.validateTime(i, q);
              }
              return !1;
            },
            W = e.computed(function () {
              return function (i) {
                return !h(+o[i] + +o["".concat(i, "Increment")], i) || D(i, !0);
              };
            }),
            E = e.computed(function () {
              return function (i) {
                return !h(+o[i] - +o["".concat(i, "Increment")], i) || D(i, !1);
              };
            }),
            Q = function Q(i, _) {
              return Jn(be(j(), i), _);
            },
            re = function re(i, _) {
              return sl(be(j(), i), _);
            },
            le = e.computed(function () {
              return {
                dp__time_col: !0,
                dp__time_col_block: !o.timePickerInline,
                dp__time_col_reg_block: !o.enableSeconds && o.is24 && !o.timePickerInline,
                dp__time_col_reg_inline: !o.enableSeconds && o.is24 && o.timePickerInline,
                dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
                dp__time_col_sec: o.enableSeconds && o.is24,
                dp__time_col_sec_with_button: o.enableSeconds && !o.is24
              };
            }),
            b = e.computed(function () {
              var i = [{
                type: 'hours'
              }];
              return o.enableMinutes && i.push({
                type: '',
                separator: !0
              }, {
                type: 'minutes'
              }), o.enableSeconds && i.push({
                type: '',
                separator: !0
              }, {
                type: 'seconds'
              }), i;
            }),
            H = e.computed(function () {
              return b.value.filter(function (i) {
                return !i.separator;
              });
            }),
            X = e.computed(function () {
              return function (i) {
                if (i === 'hours') {
                  var _ = d(+o.hours);
                  return {
                    text: _ < 10 ? "0".concat(_) : "".concat(_),
                    value: _
                  };
                }
                return {
                  text: o[i] < 10 ? "0".concat(o[i]) : "".concat(o[i]),
                  value: o[i]
                };
              };
            }),
            w = function w(i, _) {
              var q;
              if (!o.disabledTimesConfig) return !1;
              var R = o.disabledTimesConfig(o.order, i === 'hours' ? _ : void 0);
              return R[i] ? !!((q = R[i]) != null && q.includes(_)) : !0;
            },
            G = function G(i, _) {
              return _ !== 'hours' || x.value === 'AM' ? i : i + 12;
            },
            N = function N(i) {
              var _ = o.is24 ? 24 : 12,
                R = i === 'hours' ? _ : 60,
                q = +o["".concat(i, "GridIncrement")],
                ne = i === 'hours' && !o.is24 ? q : 0,
                T = [];
              for (var F = ne; F < R; F += q) T.push({
                value: o.is24 ? F : G(F, i),
                text: F < 10 ? "0".concat(F) : "".concat(F)
              });
              return i === 'hours' && !o.is24 && T.unshift({
                value: x.value === 'PM' ? 12 : 0,
                text: '12'
              }), St(T, function (F) {
                return {
                  active: !1,
                  disabled: B.value.times[i].includes(F.value) || !h(F.value, i) || w(i, F.value) || O(i, F.value)
                };
              });
            },
            J = function J(i) {
              return i >= 0 ? i : 59;
            },
            se = function se(i) {
              return i >= 0 ? i : 23;
            },
            h = function h(i, _) {
              var R = o.minTime ? z(Sn(o.minTime)) : null,
                q = o.maxTime ? z(Sn(o.maxTime)) : null,
                ne = z(Sn(Z.value, _, _ === 'minutes' || _ === 'seconds' ? J(i) : se(i)));
              return R && q ? (Yt(ne, q) || Ct(ne, q)) && (Pt(ne, R) || Ct(ne, R)) : R ? Pt(ne, R) || Ct(ne, R) : q ? Yt(ne, q) || Ct(ne, q) : !0;
            },
            y = function y(i) {
              return o["no".concat(i[0].toUpperCase() + i.slice(1), "Overlay")];
            },
            L = function L(i) {
              y(i) || (Y[i] = !Y[i], Y[i] ? (P.value = !0, a('overlay-opened', i)) : (P.value = !1, a('overlay-closed', i)));
            },
            f = function f(i) {
              return i === 'hours' ? tt : i === 'minutes' ? ot : Tt;
            },
            v = function v() {
              $.value && clearTimeout($.value);
            },
            V = function V(i) {
              var _ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              var R = arguments.length > 2 ? arguments[2] : undefined;
              var q = _ ? Q : re,
                ne = _ ? +o["".concat(i, "Increment")] : -+o["".concat(i, "Increment")];
              h(+o[i] + ne, i) && a("update:".concat(i), f(i)(q(babelHelpers.defineProperty({}, i, +o[i]), babelHelpers.defineProperty({}, i, +o["".concat(i, "Increment")])))), !(R != null && R.keyboard) && m.value.timeArrowHoldThreshold && ($.value = setTimeout(function () {
                V(i, _);
              }, m.value.timeArrowHoldThreshold));
            },
            d = function d(i) {
              return o.is24 ? i : (i >= 12 ? x.value = 'PM' : x.value = 'AM', ml(i));
            },
            ee = function ee() {
              x.value === 'PM' ? (x.value = 'AM', a('update:hours', o.hours - 12)) : (x.value = 'PM', a('update:hours', o.hours + 12)), a('am-pm-change', x.value);
            },
            de = function de(i) {
              Y[i] = !0;
            },
            A = function A(i, _, R) {
              if (i && o.arrowNavigation) {
                Array.isArray(p.value[_]) ? p.value[_][R] = i : p.value[_] = [i];
                var q = p.value.reduce(function (ne, T) {
                  return T.map(function (F, ie) {
                    return [].concat(babelHelpers.toConsumableArray(ne[ie] || []), [T[ie]]);
                  });
                }, []);
                s(o.closeTimePickerBtn), I.value && (q[1] = q[1].concat(I.value)), l(q, o.order);
              }
            },
            fe = function fe(i, _) {
              return L(i), a("update:".concat(i), _);
            };
          return r({
            openChildCmp: de
          }), function (i, _) {
            var R;
            return i.disabled ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock('div', rs, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(b.value, function (q, ne) {
              var T, F, ie;
              return e.openBlock(), e.createElementBlock('div', {
                key: ne,
                "class": e.normalizeClass(le.value)
              }, [q.separator ? (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 0
              }, [P.value ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 0
              }, [e.createTextVNode(':')], 64))], 64)) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [e.createElementVNode('button', {
                ref_for: !0,
                ref: function ref(me) {
                  return A(me, ne, 0);
                },
                type: 'button',
                "class": e.normalizeClass({
                  dp__btn: !0,
                  dp__inc_dec_button: !i.timePickerInline,
                  dp__inc_dec_button_inline: i.timePickerInline,
                  dp__tp_inline_btn_top: i.timePickerInline,
                  dp__inc_dec_button_disabled: W.value(q.type),
                  'dp--hidden-el': P.value
                }),
                'data-test': "".concat(q.type, "-time-inc-btn-").concat(o.order),
                'aria-label': (T = e.unref(c)) == null ? void 0 : T.incrementValue(q.type),
                tabindex: '0',
                onKeydown: function onKeydown(me) {
                  return e.unref(xe)(me, function () {
                    return V(q.type, !0, {
                      keyboard: !0
                    });
                  }, !0);
                },
                onClick: function onClick(me) {
                  return e.unref(m).timeArrowHoldThreshold ? void 0 : V(q.type, !0);
                },
                onMousedown: function onMousedown(me) {
                  return e.unref(m).timeArrowHoldThreshold ? V(q.type, !0) : void 0;
                },
                onMouseup: v
              }, [o.timePickerInline ? (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [i.$slots['tp-inline-arrow-up'] ? e.renderSlot(i.$slots, 'tp-inline-arrow-up', {
                key: 0
              }) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [ls, ss], 64))], 64)) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 0
              }, [i.$slots['arrow-up'] ? e.renderSlot(i.$slots, 'arrow-up', {
                key: 0
              }) : e.createCommentVNode('', !0), i.$slots['arrow-up'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(un), {
                key: 1
              }))], 64))], 42, os), e.createElementVNode('button', {
                ref_for: !0,
                ref: function ref(me) {
                  return A(me, ne, 1);
                },
                type: 'button',
                'aria-label': "".concat(X.value(q.type).text, "-").concat((F = e.unref(c)) == null ? void 0 : F.openTpOverlay(q.type)),
                "class": e.normalizeClass({
                  dp__time_display: !0,
                  dp__time_display_block: !i.timePickerInline,
                  dp__time_display_inline: i.timePickerInline,
                  'dp--time-invalid': K.value(q.type),
                  'dp--time-overlay-btn': !K.value(q.type),
                  'dp--hidden-el': P.value
                }),
                disabled: y(q.type),
                tabindex: '0',
                'data-test': "".concat(q.type, "-toggle-overlay-btn-").concat(o.order),
                onKeydown: function onKeydown(me) {
                  return e.unref(xe)(me, function () {
                    return L(q.type);
                  }, !0);
                },
                onClick: function onClick(me) {
                  return L(q.type);
                }
              }, [i.$slots[q.type] ? e.renderSlot(i.$slots, q.type, {
                key: 0,
                text: X.value(q.type).text,
                value: X.value(q.type).value
              }) : e.createCommentVNode('', !0), i.$slots[q.type] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [e.createTextVNode(e.toDisplayString(X.value(q.type).text), 1)], 64))], 42, is), e.createElementVNode('button', {
                ref_for: !0,
                ref: function ref(me) {
                  return A(me, ne, 2);
                },
                type: 'button',
                "class": e.normalizeClass({
                  dp__btn: !0,
                  dp__inc_dec_button: !i.timePickerInline,
                  dp__inc_dec_button_inline: i.timePickerInline,
                  dp__tp_inline_btn_bottom: i.timePickerInline,
                  dp__inc_dec_button_disabled: E.value(q.type),
                  'dp--hidden-el': P.value
                }),
                'data-test': "".concat(q.type, "-time-dec-btn-").concat(o.order),
                'aria-label': (ie = e.unref(c)) == null ? void 0 : ie.decrementValue(q.type),
                tabindex: '0',
                onKeydown: function onKeydown(me) {
                  return e.unref(xe)(me, function () {
                    return V(q.type, !1, {
                      keyboard: !0
                    });
                  }, !0);
                },
                onClick: function onClick(me) {
                  return e.unref(m).timeArrowHoldThreshold ? void 0 : V(q.type, !1);
                },
                onMousedown: function onMousedown(me) {
                  return e.unref(m).timeArrowHoldThreshold ? V(q.type, !1) : void 0;
                },
                onMouseup: v
              }, [o.timePickerInline ? (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [i.$slots['tp-inline-arrow-down'] ? e.renderSlot(i.$slots, 'tp-inline-arrow-down', {
                key: 0
              }) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [cs, ds], 64))], 64)) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 0
              }, [i.$slots['arrow-down'] ? e.renderSlot(i.$slots, 'arrow-down', {
                key: 0
              }) : e.createCommentVNode('', !0), i.$slots['arrow-down'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(cn), {
                key: 1
              }))], 64))], 42, us)], 64))], 2);
            }), 128)), i.is24 ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock('div', fs, [i.$slots['am-pm-button'] ? e.renderSlot(i.$slots, 'am-pm-button', {
              key: 0,
              toggle: ee,
              value: x.value
            }) : e.createCommentVNode('', !0), i.$slots['am-pm-button'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock('button', {
              key: 1,
              ref_key: 'amPmButton',
              ref: I,
              type: 'button',
              "class": 'dp__pm_am_button',
              role: 'button',
              'aria-label': (R = e.unref(c)) == null ? void 0 : R.amPmButton,
              tabindex: '0',
              onClick: ee,
              onKeydown: _[0] || (_[0] = function (q) {
                return e.unref(xe)(q, function () {
                  return ee();
                }, !0);
              })
            }, e.toDisplayString(x.value), 41, ms))])), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(H.value, function (q, ne) {
              return e.openBlock(), e.createBlock(e.Transition, {
                key: ne,
                name: e.unref(g)(Y[q.type]),
                css: e.unref(C)
              }, {
                "default": e.withCtx(function () {
                  var T, F;
                  return [Y[q.type] ? (e.openBlock(), e.createBlock(It, {
                    key: 0,
                    items: N(q.type),
                    'is-last': i.autoApply && !e.unref(m).keepActionRow,
                    'esc-close': i.escClose,
                    type: q.type,
                    'text-input': i.textInput,
                    config: i.config,
                    'arrow-navigation': i.arrowNavigation,
                    'aria-labels': i.ariaLabels,
                    'overlay-label': (F = (T = e.unref(c)).timeOverlay) == null ? void 0 : F.call(T, q.type),
                    onSelected: function onSelected(ie) {
                      return fe(q.type, ie);
                    },
                    onToggle: function onToggle(ie) {
                      return L(q.type);
                    },
                    onResetFlow: _[1] || (_[1] = function (ie) {
                      return i.$emit('reset-flow');
                    })
                  }, e.createSlots({
                    'button-icon': e.withCtx(function () {
                      return [i.$slots['clock-icon'] ? e.renderSlot(i.$slots, 'clock-icon', {
                        key: 0
                      }) : e.createCommentVNode('', !0), i.$slots['clock-icon'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.resolveDynamicComponent(i.timePickerInline ? e.unref(Ie) : e.unref(sn)), {
                        key: 1
                      }))];
                    }),
                    _: 2
                  }, [i.$slots["".concat(q.type, "-overlay-value")] ? {
                    name: 'item',
                    fn: e.withCtx(function (_ref57) {
                      var ie = _ref57.item;
                      return [e.renderSlot(i.$slots, "".concat(q.type, "-overlay-value"), {
                        text: ie.text,
                        value: ie.value
                      })];
                    }),
                    key: '0'
                  } : void 0, i.$slots["".concat(q.type, "-overlay-header")] ? {
                    name: 'header',
                    fn: e.withCtx(function () {
                      return [e.renderSlot(i.$slots, "".concat(q.type, "-overlay-header"), {
                        toggle: function toggle() {
                          return L(q.type);
                        }
                      })];
                    }),
                    key: '1'
                  } : void 0]), 1032, ['items', 'is-last', 'esc-close', 'type', 'text-input', 'config', 'arrow-navigation', 'aria-labels', 'overlay-label', 'onSelected', 'onToggle'])) : e.createCommentVNode('', !0)];
                }),
                _: 2
              }, 1032, ['name', 'css']);
            }), 128))]));
          };
        }
      }),
      ps = {
        "class": 'dp--tp-wrap'
      },
      gs = ['aria-label', 'tabindex'],
      ys = ['role', 'aria-label', 'tabindex'],
      ws = ['aria-label'],
      Za = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'TimePicker',
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
        }, Ge),
        emits: ['update:hours', 'update:minutes', 'update:seconds', 'mount', 'reset-flow', 'overlay-opened', 'overlay-closed', 'am-pm-change'],
        setup: function setup(t, _ref58) {
          var r = _ref58.expose,
            n = _ref58.emit;
          var a = n,
            o = t,
            _ut4 = ut(),
            l = _ut4.buildMatrix,
            s = _ut4.setTimePicker,
            c = e.useSlots(),
            _Me10 = Me(o),
            u = _Me10.defaultedTransitions,
            B = _Me10.defaultedAriaLabels,
            m = _Me10.defaultedTextInput,
            S = _Me10.defaultedConfig,
            g = _Me10.defaultedRange,
            _Lt3 = Lt(u),
            C = _Lt3.transitionName,
            Y = _Lt3.showTransition,
            _tn3 = tn(),
            x = _tn3.hideNavigationButtons,
            I = e.ref(null),
            p = e.ref(null),
            $ = e.ref([]),
            P = e.ref(null),
            z = e.ref(!1);
          e.onMounted(function () {
            a('mount'), !o.timePicker && o.arrowNavigation ? l([Oe(I.value)], 'time') : s(!0, o.timePicker);
          });
          var K = e.computed(function () {
              return g.value.enabled && o.modelAuto ? Aa(o.internalModelValue) : !0;
            }),
            Z = e.ref(!1),
            O = function O(N) {
              return {
                hours: Array.isArray(o.hours) ? o.hours[N] : o.hours,
                minutes: Array.isArray(o.minutes) ? o.minutes[N] : o.minutes,
                seconds: Array.isArray(o.seconds) ? o.seconds[N] : o.seconds
              };
            },
            D = e.computed(function () {
              var N = [];
              if (g.value.enabled) for (var J = 0; J < 2; J++) N.push(O(J));else N.push(O(0));
              return N;
            }),
            W = function W(N) {
              var J = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              var se = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              J || a('reset-flow'), Z.value = N, a(N ? 'overlay-opened' : 'overlay-closed', Re.time), o.arrowNavigation && s(N), e.nextTick(function () {
                se !== '' && $.value[0] && $.value[0].openChildCmp(se);
              });
            },
            E = e.computed(function () {
              return {
                dp__btn: !0,
                dp__button: !0,
                dp__button_bottom: o.autoApply && !S.value.keepActionRow
              };
            }),
            Q = Le(c, 'timePicker'),
            re = function re(N, J, se) {
              return g.value.enabled ? J === 0 ? [N, D.value[1][se]] : [D.value[0][se], N] : N;
            },
            le = function le(N) {
              a('update:hours', N);
            },
            b = function b(N) {
              a('update:minutes', N);
            },
            H = function H(N) {
              a('update:seconds', N);
            },
            X = function X() {
              if (P.value && !m.value.enabled && !o.noOverlayFocus) {
                var N = Ea(P.value);
                N && N.focus({
                  preventScroll: !0
                });
              }
            },
            w = function w(N) {
              z.value = !1, a('overlay-closed', N);
            },
            G = function G(N) {
              z.value = !0, a('overlay-opened', N);
            };
          return r({
            toggleTimePicker: W
          }), function (N, J) {
            var se;
            return e.openBlock(), e.createElementBlock('div', ps, [!N.timePicker && !N.timePickerInline ? e.withDirectives((e.openBlock(), e.createElementBlock('button', {
              key: 0,
              ref_key: 'openTimePickerBtn',
              ref: I,
              type: 'button',
              "class": e.normalizeClass(_objectSpread(_objectSpread({}, E.value), {}, {
                'dp--hidden-el': Z.value
              })),
              'aria-label': (se = e.unref(B)) == null ? void 0 : se.openTimePicker,
              tabindex: N.noOverlayFocus ? void 0 : 0,
              'data-test': 'open-time-picker-btn',
              onKeydown: J[0] || (J[0] = function (h) {
                return e.unref(xe)(h, function () {
                  return W(!0);
                });
              }),
              onClick: J[1] || (J[1] = function (h) {
                return W(!0);
              })
            }, [N.$slots['clock-icon'] ? e.renderSlot(N.$slots, 'clock-icon', {
              key: 0
            }) : e.createCommentVNode('', !0), N.$slots['clock-icon'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(sn), {
              key: 1
            }))], 42, gs)), [[e.vShow, !e.unref(x)(N.hideNavigation, 'time')]]) : e.createCommentVNode('', !0), e.createVNode(e.Transition, {
              name: e.unref(C)(Z.value),
              css: e.unref(Y) && !N.timePickerInline
            }, {
              "default": e.withCtx(function () {
                var h, y;
                return [Z.value || N.timePicker || N.timePickerInline ? (e.openBlock(), e.createElementBlock('div', {
                  key: 0,
                  ref_key: 'overlayRef',
                  ref: P,
                  role: N.timePickerInline ? void 0 : 'dialog',
                  "class": e.normalizeClass({
                    dp__overlay: !N.timePickerInline,
                    'dp--overlay-absolute': !o.timePicker && !N.timePickerInline,
                    'dp--overlay-relative': o.timePicker
                  }),
                  style: e.normalizeStyle(N.timePicker ? {
                    height: "".concat(e.unref(S).modeHeight, "px")
                  } : void 0),
                  'aria-label': (h = e.unref(B)) == null ? void 0 : h.timePicker,
                  tabindex: N.timePickerInline ? void 0 : 0
                }, [e.createElementVNode('div', {
                  "class": e.normalizeClass(N.timePickerInline ? 'dp__time_picker_inline_container' : 'dp__overlay_container dp__container_flex dp__time_picker_overlay_container'),
                  style: {
                    display: 'flex'
                  }
                }, [N.$slots['time-picker-overlay'] ? e.renderSlot(N.$slots, 'time-picker-overlay', {
                  key: 0,
                  hours: t.hours,
                  minutes: t.minutes,
                  seconds: t.seconds,
                  setHours: le,
                  setMinutes: b,
                  setSeconds: H
                }) : e.createCommentVNode('', !0), N.$slots['time-picker-overlay'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock('div', {
                  key: 1,
                  "class": e.normalizeClass(N.timePickerInline ? 'dp__flex' : 'dp__overlay_row dp__flex_row')
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(D.value, function (L, f) {
                  return e.withDirectives((e.openBlock(), e.createBlock(hs, e.mergeProps({
                    key: f,
                    ref_for: !0
                  }, _objectSpread(_objectSpread({}, N.$props), {}, {
                    order: f,
                    hours: L.hours,
                    minutes: L.minutes,
                    seconds: L.seconds,
                    closeTimePickerBtn: p.value,
                    disabledTimesConfig: t.disabledTimesConfig,
                    disabled: f === 0 ? e.unref(g).fixedStart : e.unref(g).fixedEnd
                  }), {
                    ref_for: !0,
                    ref_key: 'timeInputRefs',
                    ref: $,
                    'validate-time': function validateTime(v, V) {
                      return t.validateTime(v, re(V, f, v));
                    },
                    'onUpdate:hours': function onUpdateHours(v) {
                      return le(re(v, f, 'hours'));
                    },
                    'onUpdate:minutes': function onUpdateMinutes(v) {
                      return b(re(v, f, 'minutes'));
                    },
                    'onUpdate:seconds': function onUpdateSeconds(v) {
                      return H(re(v, f, 'seconds'));
                    },
                    onMounted: X,
                    onOverlayClosed: w,
                    onOverlayOpened: G,
                    onAmPmChange: J[2] || (J[2] = function (v) {
                      return N.$emit('am-pm-change', v);
                    })
                  }), e.createSlots({
                    _: 2
                  }, [e.renderList(e.unref(Q), function (v, V) {
                    return {
                      name: v,
                      fn: e.withCtx(function (d) {
                        return [e.renderSlot(N.$slots, v, e.mergeProps({
                          ref_for: !0
                        }, d))];
                      })
                    };
                  })]), 1040, ['validate-time', 'onUpdate:hours', 'onUpdate:minutes', 'onUpdate:seconds'])), [[e.vShow, f === 0 ? !0 : K.value]]);
                }), 128))], 2)), !N.timePicker && !N.timePickerInline ? e.withDirectives((e.openBlock(), e.createElementBlock('button', {
                  key: 2,
                  ref_key: 'closeTimePickerBtn',
                  ref: p,
                  type: 'button',
                  "class": e.normalizeClass(_objectSpread(_objectSpread({}, E.value), {}, {
                    'dp--hidden-el': z.value
                  })),
                  'aria-label': (y = e.unref(B)) == null ? void 0 : y.closeTimePicker,
                  tabindex: '0',
                  onKeydown: J[3] || (J[3] = function (L) {
                    return e.unref(xe)(L, function () {
                      return W(!1);
                    });
                  }),
                  onClick: J[4] || (J[4] = function (L) {
                    return W(!1);
                  })
                }, [N.$slots['calendar-icon'] ? e.renderSlot(N.$slots, 'calendar-icon', {
                  key: 0
                }) : e.createCommentVNode('', !0), N.$slots['calendar-icon'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(Ie), {
                  key: 1
                }))], 42, ws)), [[e.vShow, !e.unref(x)(N.hideNavigation, 'time')]]) : e.createCommentVNode('', !0)], 2)], 14, ys)) : e.createCommentVNode('', !0)];
              }),
              _: 3
            }, 8, ['name', 'css'])]);
          };
        }
      }),
      er = function er(t, r, n, a) {
        var _Me11 = Me(t),
          o = _Me11.defaultedRange,
          l = function l(P, z) {
            return Array.isArray(r[P]) ? r[P][z] : r[P];
          },
          s = function s(P) {
            return t.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[P] : r.seconds : 0;
          },
          c = function c(P, z) {
            return P ? z !== void 0 ? st(P, l('hours', z), l('minutes', z), s(z)) : st(P, r.hours, r.minutes, s()) : Ca(j(), s(z));
          },
          u = function u(P, z) {
            r[P] = z;
          },
          B = e.computed(function () {
            return t.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled;
          }),
          m = function m(P, z) {
            var K = Object.fromEntries(Object.keys(r).map(function (Z) {
              return Z === P ? [Z, z] : [Z, r[Z]].slice();
            }));
            if (B.value && !o.value.disableTimeRangeValidation) {
              var Z = function Z(D) {
                  return n.value ? st(n.value[D], K.hours[D], K.minutes[D], K.seconds[D]) : null;
                },
                O = function O(D) {
                  return Pa(n.value[D], 0);
                };
              return !(pe(Z(0), Z(1)) && (Pt(Z(0), O(1)) || Yt(Z(1), O(0))));
            }
            return !0;
          },
          S = function S(P, z) {
            m(P, z) && (u(P, z), a && a());
          },
          g = function g(P) {
            S('hours', P);
          },
          C = function C(P) {
            S('minutes', P);
          },
          Y = function Y(P) {
            S('seconds', P);
          },
          x = function x(P, z, K, Z) {
            z && g(P), !z && !K && C(P), K && Y(P), n.value && Z(n.value);
          },
          I = function I(P) {
            if (P) {
              var z = Array.isArray(P),
                K = z ? [+P[0].hours, +P[1].hours] : +P.hours,
                Z = z ? [+P[0].minutes, +P[1].minutes] : +P.minutes,
                O = z ? [+P[0].seconds, +P[1].seconds] : +P.seconds;
              u('hours', K), u('minutes', Z), t.enableSeconds && u('seconds', O);
            }
          },
          p = function p(P, z) {
            var K = {
              hours: Array.isArray(r.hours) ? r.hours[P] : r.hours,
              disabledArr: []
            };
            return (z || z === 0) && (K.hours = z), Array.isArray(t.disabledTimes) && (K.disabledArr = o.value.enabled && Array.isArray(t.disabledTimes[P]) ? t.disabledTimes[P] : t.disabledTimes), K;
          },
          $ = e.computed(function () {
            return function (P, z) {
              var K;
              if (Array.isArray(t.disabledTimes)) {
                var _ref59, _ref60;
                var _p = p(P, z),
                  Z = _p.disabledArr,
                  O = _p.hours,
                  D = Z.filter(function (W) {
                    return +W.hours === O;
                  });
                return ((K = D[0]) == null ? void 0 : K.minutes) === '*' ? {
                  hours: [O],
                  minutes: void 0,
                  seconds: void 0
                } : {
                  hours: [],
                  minutes: (_ref59 = D == null ? void 0 : D.map(function (W) {
                    return +W.minutes;
                  })) !== null && _ref59 !== void 0 ? _ref59 : [],
                  seconds: (_ref60 = D == null ? void 0 : D.map(function (W) {
                    return W.seconds ? +W.seconds : void 0;
                  })) !== null && _ref60 !== void 0 ? _ref60 : []
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
          setTime: u,
          updateHours: g,
          updateMinutes: C,
          updateSeconds: Y,
          getSetDateTime: c,
          updateTimeValues: x,
          getSecondsValue: s,
          assignStartTime: I,
          validateTime: m,
          disabledTimesConfig: $
        };
      },
      ks = function ks(t, r) {
        var n = function n() {
            t.isTextInputDate && z();
          },
          _Ht3 = Ht(t, r, n),
          a = _Ht3.modelValue,
          o = _Ht3.time,
          _Me12 = Me(t),
          l = _Me12.defaultedStartTime,
          s = _Me12.defaultedRange,
          c = _Me12.defaultedTz,
          _er = er(t, o, a, Y),
          u = _er.updateTimeValues,
          B = _er.getSetDateTime,
          m = _er.setTime,
          S = _er.assignStartTime,
          g = _er.disabledTimesConfig,
          C = _er.validateTime;
        function Y() {
          r('update-flow-step');
        }
        var x = function x(O) {
            var D = O.hours,
              W = O.minutes,
              E = O.seconds;
            return {
              hours: +D,
              minutes: +W,
              seconds: E ? +E : 0
            };
          },
          I = function I() {
            if (t.startTime) {
              if (Array.isArray(t.startTime)) {
                var D = x(t.startTime[0]),
                  W = x(t.startTime[1]);
                return [be(j(), D), be(j(), W)];
              }
              var O = x(t.startTime);
              return be(j(), O);
            }
            return s.value.enabled ? [null, null] : null;
          },
          p = function p() {
            if (s.value.enabled) {
              var _I = I(),
                _I2 = babelHelpers.slicedToArray(_I, 2),
                O = _I2[0],
                D = _I2[1];
              a.value = [Fe(B(O, 0), c.value.timezone), Fe(B(D, 1), c.value.timezone)];
            } else a.value = Fe(B(I()), c.value.timezone);
          },
          $ = function $(O) {
            return Array.isArray(O) ? [kt(j(O[0])), kt(j(O[1]))] : [kt(O !== null && O !== void 0 ? O : j())];
          },
          P = function P(O, D, W) {
            m('hours', O), m('minutes', D), m('seconds', t.enableSeconds ? W : 0);
          },
          z = function z() {
            var _$ = $(a.value),
              _$2 = babelHelpers.slicedToArray(_$, 2),
              O = _$2[0],
              D = _$2[1];
            return s.value.enabled ? P([O.hours, D.hours], [O.minutes, D.minutes], [O.seconds, D.seconds]) : P(O.hours, O.minutes, O.seconds);
          };
        e.onMounted(function () {
          if (!t.shadow) return S(l.value), a.value ? z() : p();
        });
        var K = function K() {
          Array.isArray(a.value) ? a.value = a.value.map(function (O, D) {
            return O && B(O, D);
          }) : a.value = B(a.value), r('time-update');
        };
        return {
          modelValue: a,
          time: o,
          disabledTimesConfig: g,
          updateTime: function updateTime(O) {
            var D = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var W = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            u(O, D, W, K);
          },
          validateTime: C
        };
      },
      bs = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'TimePickerSolo',
        props: _objectSpread({}, Ge),
        emits: ['update:internal-model-value', 'time-update', 'am-pm-change', 'mount', 'reset-flow', 'update-flow-step', 'overlay-toggle'],
        setup: function setup(t, _ref61) {
          var r = _ref61.expose,
            n = _ref61.emit;
          var a = n,
            o = t,
            l = e.useSlots(),
            s = Le(l, 'timePicker'),
            c = e.ref(null),
            _ks = ks(o, a),
            u = _ks.time,
            B = _ks.modelValue,
            m = _ks.disabledTimesConfig,
            S = _ks.updateTime,
            g = _ks.validateTime;
          return e.onMounted(function () {
            o.shadow || a('mount', null);
          }), r({
            getSidebarProps: function getSidebarProps() {
              return {
                modelValue: B,
                time: u,
                updateTime: S
              };
            },
            toggleTimePicker: function toggleTimePicker(x) {
              var I = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              var $;
              ($ = c.value) == null || $.toggleTimePicker(x, I, p);
            }
          }), function (x, I) {
            return e.openBlock(), e.createBlock(Zt, {
              'multi-calendars': 0,
              stretch: ''
            }, {
              "default": e.withCtx(function () {
                return [e.createVNode(Za, e.mergeProps({
                  ref_key: 'tpRef',
                  ref: c
                }, x.$props, {
                  hours: e.unref(u).hours,
                  minutes: e.unref(u).minutes,
                  seconds: e.unref(u).seconds,
                  'internal-model-value': x.internalModelValue,
                  'disabled-times-config': e.unref(m),
                  'validate-time': e.unref(g),
                  'onUpdate:hours': I[0] || (I[0] = function (p) {
                    return e.unref(S)(p);
                  }),
                  'onUpdate:minutes': I[1] || (I[1] = function (p) {
                    return e.unref(S)(p, !1);
                  }),
                  'onUpdate:seconds': I[2] || (I[2] = function (p) {
                    return e.unref(S)(p, !1, !0);
                  }),
                  onAmPmChange: I[3] || (I[3] = function (p) {
                    return x.$emit('am-pm-change', p);
                  }),
                  onResetFlow: I[4] || (I[4] = function (p) {
                    return x.$emit('reset-flow');
                  }),
                  onOverlayClosed: I[5] || (I[5] = function (p) {
                    return x.$emit('overlay-toggle', {
                      open: !1,
                      overlay: p
                    });
                  }),
                  onOverlayOpened: I[6] || (I[6] = function (p) {
                    return x.$emit('overlay-toggle', {
                      open: !0,
                      overlay: p
                    });
                  })
                }), e.createSlots({
                  _: 2
                }, [e.renderList(e.unref(s), function (p, $) {
                  return {
                    name: p,
                    fn: e.withCtx(function (P) {
                      return [e.renderSlot(x.$slots, p, e.normalizeProps(e.guardReactiveProps(P)))];
                    })
                  };
                })]), 1040, ['hours', 'minutes', 'seconds', 'internal-model-value', 'disabled-times-config', 'validate-time'])];
              }),
              _: 3
            });
          };
        }
      }),
      vs = {
        "class": 'dp--header-wrap'
      },
      Ds = {
        key: 0,
        "class": 'dp__month_year_wrap'
      },
      Ms = {
        key: 0
      },
      Ts = {
        "class": 'dp__month_year_wrap'
      },
      Ps = ['data-dp-element', 'aria-label', 'data-test', 'onClick', 'onKeydown'],
      Cs = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'DpHeader',
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
        }, Ge),
        emits: ['update-month-year', 'mount', 'reset-flow', 'overlay-closed', 'overlay-opened'],
        setup: function setup(t, _ref62) {
          var r = _ref62.expose,
            n = _ref62.emit;
          var a = n,
            o = t,
            _Me13 = Me(o),
            l = _Me13.defaultedTransitions,
            s = _Me13.defaultedAriaLabels,
            c = _Me13.defaultedMultiCalendars,
            u = _Me13.defaultedFilters,
            B = _Me13.defaultedConfig,
            m = _Me13.defaultedHighlight,
            S = _Me13.propDates,
            g = _Me13.defaultedUI,
            _Lt4 = Lt(l),
            C = _Lt4.transitionName,
            Y = _Lt4.showTransition,
            _ut5 = ut(),
            x = _ut5.buildMatrix,
            _Wl = Wl(o, a),
            I = _Wl.handleMonthYearChange,
            p = _Wl.isDisabled,
            $ = _Wl.updateMonthYear,
            _tn4 = tn(),
            P = _tn4.showLeftIcon,
            z = _tn4.showRightIcon,
            K = e.ref(!1),
            Z = e.ref(!1),
            O = e.ref(!1),
            D = e.ref([null, null, null, null]);
          e.onMounted(function () {
            a('mount');
          });
          var W = function W(y) {
              return {
                get: function get() {
                  return o[y];
                },
                set: function set(L) {
                  var _a2;
                  var f = y === je.month ? je.year : je.month;
                  a('update-month-year', (_a2 = {}, babelHelpers.defineProperty(_a2, y, L), babelHelpers.defineProperty(_a2, f, o[f]), _a2)), y === je.month ? w(!0) : G(!0);
                }
              };
            },
            E = e.computed(W(je.month)),
            Q = e.computed(W(je.year)),
            re = e.computed(function () {
              return function (y) {
                return {
                  month: o.month,
                  year: o.year,
                  items: y === je.month ? o.months : o.years,
                  instance: o.instance,
                  updateMonthYear: $,
                  toggle: y === je.month ? w : G
                };
              };
            }),
            le = e.computed(function () {
              var y = o.months.find(function (L) {
                return L.value === o.month;
              });
              return y || {
                text: '',
                value: 0
              };
            }),
            b = e.computed(function () {
              return St(o.months, function (y) {
                var L = o.month === y.value,
                  f = xt(y.value, xa(o.year, S.value.minDate), Va(o.year, S.value.maxDate)) || u.value.months.includes(y.value),
                  v = Wa(m.value, y.value, o.year);
                return {
                  active: L,
                  disabled: f,
                  highlighted: v
                };
              });
            }),
            H = e.computed(function () {
              return St(o.years, function (y) {
                var L = o.year === y.value,
                  f = xt(y.value, $t(S.value.minDate), $t(S.value.maxDate)) || u.value.years.includes(y.value),
                  v = En(m.value, y.value);
                return {
                  active: L,
                  disabled: f,
                  highlighted: v
                };
              });
            }),
            X = function X(y, L, f) {
              f !== void 0 ? y.value = f : y.value = !y.value, y.value ? (O.value = !0, a('overlay-opened', L)) : (O.value = !1, a('overlay-closed', L));
            },
            w = function w() {
              var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              var L = arguments.length > 1 ? arguments[1] : undefined;
              N(y), X(K, Re.month, L);
            },
            G = function G() {
              var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              var L = arguments.length > 1 ? arguments[1] : undefined;
              N(y), X(Z, Re.year, L);
            },
            N = function N(y) {
              y || a('reset-flow');
            },
            J = function J(y, L) {
              o.arrowNavigation && (D.value[L] = Oe(y), x(D.value, 'monthYear'));
            },
            se = e.computed(function () {
              var _ref63, _ref64;
              var y, L, f, v, V, d;
              return [{
                type: je.month,
                index: 1,
                toggle: w,
                modelValue: E.value,
                updateModelValue: function updateModelValue(ee) {
                  return E.value = ee;
                },
                text: le.value.text,
                showSelectionGrid: K.value,
                items: b.value,
                ariaLabel: (y = s.value) == null ? void 0 : y.openMonthsOverlay,
                overlayLabel: (_ref63 = (f = (L = s.value).monthPicker) == null ? void 0 : f.call(L, !0)) !== null && _ref63 !== void 0 ? _ref63 : void 0
              }, {
                type: je.year,
                index: 2,
                toggle: G,
                modelValue: Q.value,
                updateModelValue: function updateModelValue(ee) {
                  return Q.value = ee;
                },
                text: Ra(o.year, o.locale),
                showSelectionGrid: Z.value,
                items: H.value,
                ariaLabel: (v = s.value) == null ? void 0 : v.openYearsOverlay,
                overlayLabel: (_ref64 = (d = (V = s.value).yearPicker) == null ? void 0 : d.call(V, !0)) !== null && _ref64 !== void 0 ? _ref64 : void 0
              }];
            }),
            h = e.computed(function () {
              return o.disableYearSelect ? [se.value[0]] : o.yearFirst ? babelHelpers.toConsumableArray(se.value).reverse() : se.value;
            });
          return r({
            toggleMonthPicker: w,
            toggleYearPicker: G,
            handleMonthYearChange: I
          }), function (y, L) {
            var f, v, V, d, ee, de;
            return e.openBlock(), e.createElementBlock('div', vs, [y.$slots['month-year'] ? (e.openBlock(), e.createElementBlock('div', Ds, [e.renderSlot(y.$slots, 'month-year', e.normalizeProps(e.guardReactiveProps({
              month: t.month,
              year: t.year,
              months: t.months,
              years: t.years,
              updateMonthYear: e.unref($),
              handleMonthYearChange: e.unref(I),
              instance: t.instance
            })))])) : (e.openBlock(), e.createElementBlock(e.Fragment, {
              key: 1
            }, [y.$slots['top-extra'] ? (e.openBlock(), e.createElementBlock('div', Ms, [e.renderSlot(y.$slots, 'top-extra', {
              value: y.internalModelValue
            })])) : e.createCommentVNode('', !0), e.createElementVNode('div', Ts, [e.unref(P)(e.unref(c), t.instance) && !y.vertical ? (e.openBlock(), e.createBlock(Ft, {
              key: 0,
              'aria-label': (f = e.unref(s)) == null ? void 0 : f.prevMonth,
              disabled: e.unref(p)(!1),
              "class": e.normalizeClass((v = e.unref(g)) == null ? void 0 : v.navBtnPrev),
              'el-name': 'action-prev',
              onActivate: L[0] || (L[0] = function (A) {
                return e.unref(I)(!1, !0);
              }),
              onSetRef: L[1] || (L[1] = function (A) {
                return J(A, 0);
              })
            }, {
              "default": e.withCtx(function () {
                return [y.$slots['arrow-left'] ? e.renderSlot(y.$slots, 'arrow-left', {
                  key: 0
                }) : e.createCommentVNode('', !0), y.$slots['arrow-left'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(on), {
                  key: 1
                }))];
              }),
              _: 3
            }, 8, ['aria-label', 'disabled', 'class'])) : e.createCommentVNode('', !0), e.createElementVNode('div', {
              "class": e.normalizeClass(['dp__month_year_wrap', {
                dp__year_disable_select: y.disableYearSelect
              }])
            }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(h.value, function (A, fe) {
              return e.openBlock(), e.createElementBlock(e.Fragment, {
                key: A.type
              }, [e.createElementVNode('button', {
                ref_for: !0,
                ref: function ref(i) {
                  return J(i, fe + 1);
                },
                type: 'button',
                'data-dp-element': "overlay-".concat(A.type),
                "class": e.normalizeClass(['dp__btn dp__month_year_select', {
                  'dp--hidden-el': O.value
                }]),
                'aria-label': "".concat(A.text, "-").concat(A.ariaLabel),
                'data-test': "".concat(A.type, "-toggle-overlay-").concat(t.instance),
                onClick: A.toggle,
                onKeydown: function onKeydown(i) {
                  return e.unref(xe)(i, function () {
                    return A.toggle();
                  }, !0);
                }
              }, [y.$slots[A.type] ? e.renderSlot(y.$slots, A.type, {
                key: 0,
                text: A.text,
                value: o[A.type]
              }) : e.createCommentVNode('', !0), y.$slots[A.type] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [e.createTextVNode(e.toDisplayString(A.text), 1)], 64))], 42, Ps), e.createVNode(e.Transition, {
                name: e.unref(C)(A.showSelectionGrid),
                css: e.unref(Y)
              }, {
                "default": e.withCtx(function () {
                  return [A.showSelectionGrid ? (e.openBlock(), e.createBlock(It, {
                    key: 0,
                    items: A.items,
                    'arrow-navigation': y.arrowNavigation,
                    'hide-navigation': y.hideNavigation,
                    'is-last': y.autoApply && !e.unref(B).keepActionRow,
                    'skip-button-ref': !1,
                    config: y.config,
                    type: A.type,
                    'header-refs': [],
                    'esc-close': y.escClose,
                    'menu-wrap-ref': y.menuWrapRef,
                    'text-input': y.textInput,
                    'aria-labels': y.ariaLabels,
                    'overlay-label': A.overlayLabel,
                    onSelected: A.updateModelValue,
                    onToggle: A.toggle
                  }, e.createSlots({
                    'button-icon': e.withCtx(function () {
                      return [y.$slots['calendar-icon'] ? e.renderSlot(y.$slots, 'calendar-icon', {
                        key: 0
                      }) : e.createCommentVNode('', !0), y.$slots['calendar-icon'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(Ie), {
                        key: 1
                      }))];
                    }),
                    _: 2
                  }, [y.$slots["".concat(A.type, "-overlay-value")] ? {
                    name: 'item',
                    fn: e.withCtx(function (_ref65) {
                      var i = _ref65.item;
                      return [e.renderSlot(y.$slots, "".concat(A.type, "-overlay-value"), {
                        text: i.text,
                        value: i.value
                      })];
                    }),
                    key: '0'
                  } : void 0, y.$slots["".concat(A.type, "-overlay")] ? {
                    name: 'overlay',
                    fn: e.withCtx(function () {
                      return [e.renderSlot(y.$slots, "".concat(A.type, "-overlay"), e.mergeProps({
                        ref_for: !0
                      }, re.value(A.type)))];
                    }),
                    key: '1'
                  } : void 0, y.$slots["".concat(A.type, "-overlay-header")] ? {
                    name: 'header',
                    fn: e.withCtx(function () {
                      return [e.renderSlot(y.$slots, "".concat(A.type, "-overlay-header"), {
                        toggle: A.toggle
                      })];
                    }),
                    key: '2'
                  } : void 0]), 1032, ['items', 'arrow-navigation', 'hide-navigation', 'is-last', 'config', 'type', 'esc-close', 'menu-wrap-ref', 'text-input', 'aria-labels', 'overlay-label', 'onSelected', 'onToggle'])) : e.createCommentVNode('', !0)];
                }),
                _: 2
              }, 1032, ['name', 'css'])], 64);
            }), 128))], 2), e.unref(P)(e.unref(c), t.instance) && y.vertical ? (e.openBlock(), e.createBlock(Ft, {
              key: 1,
              'aria-label': (V = e.unref(s)) == null ? void 0 : V.prevMonth,
              'el-name': 'action-prev',
              disabled: e.unref(p)(!1),
              "class": e.normalizeClass((d = e.unref(g)) == null ? void 0 : d.navBtnPrev),
              onActivate: L[2] || (L[2] = function (A) {
                return e.unref(I)(!1, !0);
              })
            }, {
              "default": e.withCtx(function () {
                return [y.$slots['arrow-up'] ? e.renderSlot(y.$slots, 'arrow-up', {
                  key: 0
                }) : e.createCommentVNode('', !0), y.$slots['arrow-up'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.unref(un), {
                  key: 1
                }))];
              }),
              _: 3
            }, 8, ['aria-label', 'disabled', 'class'])) : e.createCommentVNode('', !0), e.unref(z)(e.unref(c), t.instance) ? (e.openBlock(), e.createBlock(Ft, {
              key: 2,
              ref: 'rightIcon',
              'el-name': 'action-next',
              disabled: e.unref(p)(!0),
              'aria-label': (ee = e.unref(s)) == null ? void 0 : ee.nextMonth,
              "class": e.normalizeClass((de = e.unref(g)) == null ? void 0 : de.navBtnNext),
              onActivate: L[3] || (L[3] = function (A) {
                return e.unref(I)(!0, !0);
              }),
              onSetRef: L[4] || (L[4] = function (A) {
                return J(A, y.disableYearSelect ? 2 : 3);
              })
            }, {
              "default": e.withCtx(function () {
                return [y.$slots[y.vertical ? 'arrow-down' : 'arrow-right'] ? e.renderSlot(y.$slots, y.vertical ? 'arrow-down' : 'arrow-right', {
                  key: 0
                }) : e.createCommentVNode('', !0), y.$slots[y.vertical ? 'arrow-down' : 'arrow-right'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(e.resolveDynamicComponent(y.vertical ? e.unref(cn) : e.unref(ln)), {
                  key: 1
                }))];
              }),
              _: 3
            }, 8, ['disabled', 'aria-label', 'class'])) : e.createCommentVNode('', !0)])], 64))]);
          };
        }
      }),
      Bs = {
        "class": 'dp__calendar_header',
        role: 'row'
      },
      Ss = {
        key: 0,
        "class": 'dp__calendar_header_item',
        role: 'gridcell'
      },
      $s = ['aria-label'],
      As = e.createElementVNode('div', {
        "class": 'dp__calendar_header_separator'
      }, null, -1),
      Ns = {
        key: 0,
        "class": 'dp__calendar_item dp__week_num',
        role: 'gridcell'
      },
      Os = {
        "class": 'dp__cell_inner'
      },
      Es = ['id', 'aria-pressed', 'aria-disabled', 'aria-label', 'data-test', 'onClick', 'onTouchend', 'onKeydown', 'onMouseenter', 'onMouseleave', 'onMousedown'],
      Rs = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'DpCalendar',
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
        }, Ge),
        emits: ['select-date', 'set-hover-date', 'handle-scroll', 'mount', 'handle-swipe', 'handle-space', 'tooltip-open', 'tooltip-close'],
        setup: function setup(t, _ref66) {
          var r = _ref66.expose,
            n = _ref66.emit;
          var a = n,
            o = t,
            _ut6 = ut(),
            l = _ut6.buildMultiLevelMatrix,
            _Me14 = Me(o),
            s = _Me14.defaultedTransitions,
            c = _Me14.defaultedConfig,
            u = _Me14.defaultedAriaLabels,
            B = _Me14.defaultedMultiCalendars,
            m = _Me14.defaultedWeekNumbers,
            S = _Me14.defaultedMultiDates,
            g = _Me14.defaultedUI,
            C = e.ref(null),
            Y = e.ref({
              bottom: '',
              left: '',
              transform: ''
            }),
            x = e.ref([]),
            I = e.ref(null),
            p = e.ref(!0),
            $ = e.ref(''),
            P = e.ref({
              startX: 0,
              endX: 0,
              startY: 0,
              endY: 0
            }),
            z = e.ref([]),
            K = e.ref({
              left: '50%'
            }),
            Z = e.ref(!1),
            O = e.computed(function () {
              return o.calendar ? o.calendar(o.mappedDates) : o.mappedDates;
            }),
            D = e.computed(function () {
              return o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames(o.locale, +o.weekStart) : fl(o.formatLocale, o.locale, +o.weekStart);
            });
          e.onMounted(function () {
            a('mount', {
              cmp: 'calendar',
              refs: x
            }), c.value.noSwipe || I.value && (I.value.addEventListener('touchstart', J, {
              passive: !1
            }), I.value.addEventListener('touchend', se, {
              passive: !1
            }), I.value.addEventListener('touchmove', h, {
              passive: !1
            })), o.monthChangeOnScroll && I.value && I.value.addEventListener('wheel', f, {
              passive: !1
            });
          });
          var W = function W(A) {
              return A ? o.vertical ? 'vNext' : 'next' : o.vertical ? 'vPrevious' : 'previous';
            },
            E = function E(A, fe) {
              if (o.transitions) {
                var i = Ve(at(j(), o.month, o.year));
                $.value = $e(Ve(at(j(), A, fe)), i) ? s.value[W(!0)] : s.value[W(!1)], p.value = !1, e.nextTick(function () {
                  p.value = !0;
                });
              }
            },
            Q = e.computed(function () {
              var _g$value$calendar;
              return _objectSpread({}, (_g$value$calendar = g.value.calendar) !== null && _g$value$calendar !== void 0 ? _g$value$calendar : {});
            }),
            re = e.computed(function () {
              return function (A) {
                var fe = hl(A);
                return {
                  dp__marker_dot: fe.type === 'dot',
                  dp__marker_line: fe.type === 'line'
                };
              };
            }),
            le = e.computed(function () {
              return function (A) {
                return pe(A, C.value);
              };
            }),
            b = e.computed(function () {
              return {
                dp__calendar: !0,
                dp__calendar_next: B.value.count > 0 && o.instance !== 0
              };
            }),
            H = e.computed(function () {
              return function (A) {
                return o.hideOffsetDates ? A.current : !0;
              };
            }),
            X = /*#__PURE__*/function () {
              var _ref67 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(A, fe) {
                var _A$getBoundingClientR, i, _, R, q, _z$value$0$getBoundin, ne, T;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _A$getBoundingClientR = A.getBoundingClientRect(), i = _A$getBoundingClientR.width, _ = _A$getBoundingClientR.height;
                      C.value = fe.value;
                      R = {
                        left: "".concat(i / 2, "px")
                      }, q = -50;
                      _context.next = 5;
                      return e.nextTick();
                    case 5:
                      if (!z.value[0]) {
                        _context.next = 8;
                        break;
                      }
                      _z$value$0$getBoundin = z.value[0].getBoundingClientRect(), ne = _z$value$0$getBoundin.left, T = _z$value$0$getBoundin.width;
                      ne < 0 && (R = {
                        left: '0'
                      }, q = 0, K.value.left = "".concat(i / 2, "px")), window.innerWidth < ne + T && (R = {
                        right: '0'
                      }, q = 0, K.value.left = "".concat(T - i / 2, "px"));
                    case 8:
                      Y.value = _objectSpread(_objectSpread({
                        bottom: "".concat(_, "px")
                      }, R), {}, {
                        transform: "translateX(".concat(q, "%)")
                      });
                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function X(_x, _x2) {
                return _ref67.apply(this, arguments);
              };
            }(),
            w = /*#__PURE__*/function () {
              var _ref68 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(A, fe, i) {
                var R, q, ne, _;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _ = Oe(x.value[fe][i]);
                      _context2.t0 = _;
                      if (!_context2.t0) {
                        _context2.next = 10;
                        break;
                      }
                      if (!((R = A.marker) != null && R.customPosition && (ne = (q = A.marker) == null ? void 0 : q.tooltip) != null && ne.length)) {
                        _context2.next = 7;
                        break;
                      }
                      Y.value = A.marker.customPosition(_);
                      _context2.next = 9;
                      break;
                    case 7:
                      _context2.next = 9;
                      return X(_, A);
                    case 9:
                      a('tooltip-open', A.marker);
                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function w(_x3, _x4, _x5) {
                return _ref68.apply(this, arguments);
              };
            }(),
            G = /*#__PURE__*/function () {
              var _ref69 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(A, fe, i) {
                var _, R;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(Z.value && S.value.enabled && S.value.dragSelect)) {
                        _context3.next = 2;
                        break;
                      }
                      return _context3.abrupt("return", a('select-date', A));
                    case 2:
                      a('set-hover-date', A);
                      _context3.t0 = (R = (_ = A.marker) == null ? void 0 : _.tooltip) != null && R.length;
                      if (!_context3.t0) {
                        _context3.next = 7;
                        break;
                      }
                      _context3.next = 7;
                      return w(A, fe, i);
                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function G(_x6, _x7, _x8) {
                return _ref69.apply(this, arguments);
              };
            }(),
            N = function N(A) {
              C.value && (C.value = null, Y.value = JSON.parse(JSON.stringify({
                bottom: '',
                left: '',
                transform: ''
              })), a('tooltip-close', A.marker));
            },
            J = function J(A) {
              P.value.startX = A.changedTouches[0].screenX, P.value.startY = A.changedTouches[0].screenY;
            },
            se = function se(A) {
              P.value.endX = A.changedTouches[0].screenX, P.value.endY = A.changedTouches[0].screenY, y();
            },
            h = function h(A) {
              o.vertical && !o.inline && A.preventDefault();
            },
            y = function y() {
              var A = o.vertical ? 'Y' : 'X';
              Math.abs(P.value["start".concat(A)] - P.value["end".concat(A)]) > 10 && a('handle-swipe', P.value["start".concat(A)] > P.value["end".concat(A)] ? 'right' : 'left');
            },
            L = function L(A, fe, i) {
              A && (Array.isArray(x.value[fe]) ? x.value[fe][i] = A : x.value[fe] = [A]), o.arrowNavigation && l(x.value, 'calendar');
            },
            f = function f(A) {
              o.monthChangeOnScroll && (A.preventDefault(), a('handle-scroll', A));
            },
            v = function v(A) {
              return m.value.type === 'local' ? pn(A.value, {
                weekStartsOn: +o.weekStart
              }) : m.value.type === 'iso' ? mn(A.value) : typeof m.value.type == 'function' ? m.value.type(A.value) : '';
            },
            V = function V(A) {
              var fe = A[0];
              return m.value.hideOnOffsetDates ? A.some(function (i) {
                return i.current;
              }) ? v(fe) : '' : v(fe);
            },
            d = function d(A, fe) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
              i && _a() || !i && !_a() || S.value.enabled || (lt(A, c.value), a('select-date', fe));
            },
            ee = function ee(A) {
              lt(A, c.value);
            },
            de = function de(A) {
              S.value.enabled && S.value.dragSelect ? (Z.value = !0, a('select-date', A)) : S.value.enabled && a('select-date', A);
            };
          return r({
            triggerTransition: E
          }), function (A, fe) {
            return e.openBlock(), e.createElementBlock('div', {
              "class": e.normalizeClass(b.value)
            }, [e.createElementVNode('div', {
              ref_key: 'calendarWrapRef',
              ref: I,
              "class": e.normalizeClass(Q.value),
              role: 'grid'
            }, [e.createElementVNode('div', Bs, [A.weekNumbers ? (e.openBlock(), e.createElementBlock('div', Ss, e.toDisplayString(A.weekNumName), 1)) : e.createCommentVNode('', !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(D.value, function (i, _) {
              var R, q;
              return e.openBlock(), e.createElementBlock('div', {
                key: _,
                "class": 'dp__calendar_header_item',
                role: 'gridcell',
                'data-test': 'calendar-header',
                'aria-label': (q = (R = e.unref(u)) == null ? void 0 : R.weekDay) == null ? void 0 : q.call(R, _)
              }, [A.$slots['calendar-header'] ? e.renderSlot(A.$slots, 'calendar-header', {
                key: 0,
                day: i,
                index: _
              }) : e.createCommentVNode('', !0), A.$slots['calendar-header'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                key: 1
              }, [e.createTextVNode(e.toDisplayString(i), 1)], 64))], 8, $s);
            }), 128))]), As, e.createVNode(e.Transition, {
              name: $.value,
              css: !!A.transitions
            }, {
              "default": e.withCtx(function () {
                return [p.value ? (e.openBlock(), e.createElementBlock('div', {
                  key: 0,
                  "class": 'dp__calendar',
                  role: 'rowgroup',
                  onMouseleave: fe[1] || (fe[1] = function (i) {
                    return Z.value = !1;
                  })
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(O.value, function (i, _) {
                  return e.openBlock(), e.createElementBlock('div', {
                    key: _,
                    "class": 'dp__calendar_row',
                    role: 'row'
                  }, [A.weekNumbers ? (e.openBlock(), e.createElementBlock('div', Ns, [e.createElementVNode('div', Os, e.toDisplayString(V(i.days)), 1)])) : e.createCommentVNode('', !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(i.days, function (R, q) {
                    var _ref70;
                    var ne, T, F;
                    return e.openBlock(), e.createElementBlock('div', {
                      id: e.unref(qa)(R.value),
                      ref_for: !0,
                      ref: function ref(ie) {
                        return L(ie, _, q);
                      },
                      key: q + _,
                      role: 'gridcell',
                      "class": 'dp__calendar_item',
                      'aria-pressed': (_ref70 = R.classData.dp__active_date || R.classData.dp__range_start || R.classData.dp__range_start) !== null && _ref70 !== void 0 ? _ref70 : void 0,
                      'aria-disabled': R.classData.dp__cell_disabled || void 0,
                      'aria-label': (T = (ne = e.unref(u)) == null ? void 0 : ne.day) == null ? void 0 : T.call(ne, R),
                      tabindex: '0',
                      'data-test': R.value,
                      onClick: e.withModifiers(function (ie) {
                        return d(ie, R);
                      }, ['prevent']),
                      onTouchend: function onTouchend(ie) {
                        return d(ie, R, !1);
                      },
                      onKeydown: function onKeydown(ie) {
                        return e.unref(xe)(ie, function () {
                          return A.$emit('select-date', R);
                        });
                      },
                      onMouseenter: function onMouseenter(ie) {
                        return G(R, _, q);
                      },
                      onMouseleave: function onMouseleave(ie) {
                        return N(R);
                      },
                      onMousedown: function onMousedown(ie) {
                        return de(R);
                      },
                      onMouseup: fe[0] || (fe[0] = function (ie) {
                        return Z.value = !1;
                      })
                    }, [e.createElementVNode('div', {
                      "class": e.normalizeClass(['dp__cell_inner', R.classData])
                    }, [A.$slots.day && H.value(R) ? e.renderSlot(A.$slots, 'day', {
                      key: 0,
                      day: +R.text,
                      date: R.value
                    }) : e.createCommentVNode('', !0), A.$slots.day ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                      key: 1
                    }, [e.createTextVNode(e.toDisplayString(R.text), 1)], 64)), R.marker && H.value(R) ? (e.openBlock(), e.createElementBlock(e.Fragment, {
                      key: 2
                    }, [A.$slots.marker ? e.renderSlot(A.$slots, 'marker', {
                      key: 0,
                      marker: R.marker,
                      day: +R.text,
                      date: R.value
                    }) : (e.openBlock(), e.createElementBlock('div', {
                      key: 1,
                      "class": e.normalizeClass(re.value(R.marker)),
                      style: e.normalizeStyle(R.marker.color ? {
                        backgroundColor: R.marker.color
                      } : {})
                    }, null, 6))], 64)) : e.createCommentVNode('', !0), le.value(R.value) ? (e.openBlock(), e.createElementBlock('div', {
                      key: 3,
                      ref_for: !0,
                      ref_key: 'activeTooltip',
                      ref: z,
                      "class": 'dp__marker_tooltip',
                      style: e.normalizeStyle(Y.value)
                    }, [(F = R.marker) != null && F.tooltip ? (e.openBlock(), e.createElementBlock('div', {
                      key: 0,
                      "class": 'dp__tooltip_content',
                      onClick: ee
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(R.marker.tooltip, function (ie, me) {
                      return e.openBlock(), e.createElementBlock('div', {
                        key: me,
                        "class": 'dp__tooltip_text'
                      }, [A.$slots['marker-tooltip'] ? e.renderSlot(A.$slots, 'marker-tooltip', {
                        key: 0,
                        tooltip: ie,
                        day: R.value
                      }) : e.createCommentVNode('', !0), A.$slots['marker-tooltip'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                        key: 1
                      }, [e.createElementVNode('div', {
                        "class": 'dp__tooltip_mark',
                        style: e.normalizeStyle(ie.color ? {
                          backgroundColor: ie.color
                        } : {})
                      }, null, 4), e.createElementVNode('div', null, e.toDisplayString(ie.text), 1)], 64))]);
                    }), 128)), e.createElementVNode('div', {
                      "class": 'dp__arrow_bottom_tp',
                      style: e.normalizeStyle(K.value)
                    }, null, 4)])) : e.createCommentVNode('', !0)], 4)) : e.createCommentVNode('', !0)], 2)], 40, Es);
                  }), 128))]);
                }), 128))], 32)) : e.createCommentVNode('', !0)];
              }),
              _: 3
            }, 8, ['name', 'css'])], 2)], 2);
          };
        }
      }),
      tr = function tr(t) {
        return Array.isArray(t);
      },
      _s = function _s(t, r, n, a) {
        var o = e.ref([]),
          l = e.ref(new Date()),
          s = e.ref(),
          c = function c() {
            return J(t.isTextInputDate);
          },
          _Ht4 = Ht(t, r, c),
          u = _Ht4.modelValue,
          B = _Ht4.calendars,
          m = _Ht4.time,
          S = _Ht4.today,
          _Me15 = Me(t),
          g = _Me15.defaultedMultiCalendars,
          C = _Me15.defaultedStartTime,
          Y = _Me15.defaultedRange,
          x = _Me15.defaultedConfig,
          I = _Me15.defaultedTz,
          p = _Me15.propDates,
          $ = _Me15.defaultedMultiDates,
          _dt4 = dt(t),
          P = _dt4.validateMonthYearInRange,
          z = _dt4.isDisabled,
          K = _dt4.isDateRangeAllowed,
          Z = _dt4.checkMinMaxRange,
          _er2 = er(t, m, u, a),
          O = _er2.updateTimeValues,
          D = _er2.getSetDateTime,
          W = _er2.setTime,
          E = _er2.assignStartTime,
          Q = _er2.validateTime,
          re = _er2.disabledTimesConfig,
          le = e.computed(function () {
            return function (M) {
              return B.value[M] ? B.value[M].month : 0;
            };
          }),
          b = e.computed(function () {
            return function (M) {
              return B.value[M] ? B.value[M].year : 0;
            };
          }),
          H = function H(M) {
            return !x.value.keepViewOnOffsetClick || M ? !0 : !s.value;
          },
          X = function X(M, k, U) {
            var te = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            var ke, Ee;
            H(te) && (B.value[M] || (B.value[M] = {
              month: 0,
              year: 0
            }), B.value[M].month = Oa(k) ? (ke = B.value[M]) == null ? void 0 : ke.month : k, B.value[M].year = Oa(U) ? (Ee = B.value[M]) == null ? void 0 : Ee.year : U);
          },
          w = function w() {
            t.autoApply && r('select-date');
          };
        e.onMounted(function () {
          t.shadow || (u.value || (A(), C.value && E(C.value)), J(!0), t.focusStartDate && t.startDate && A());
        });
        var G = e.computed(function () {
            var M;
            return (M = t.flow) != null && M.length && !t.partialFlow ? t.flowStep === t.flow.length : !0;
          }),
          N = function N() {
            t.autoApply && G.value && r('auto-apply', t.partialFlow ? t.flowStep !== t.flow.length : !1);
          },
          J = function J() {
            var M = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (u.value) return Array.isArray(u.value) ? (o.value = u.value, V(M)) : y(u.value, M);
            if (g.value.count && M && !t.startDate) return h(j(), M);
          },
          se = function se() {
            var _u$value$;
            return Array.isArray(u.value) && Y.value.enabled ? he(u.value[0]) === he((_u$value$ = u.value[1]) !== null && _u$value$ !== void 0 ? _u$value$ : u.value[0]) : !1;
          },
          h = function h() {
            var M = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
            var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if ((!g.value.count || !g.value["static"] || k) && X(0, he(M), ce(M)), g.value.count && (!g.value.solo || !u.value || se())) for (var U = 1; U < g.value.count; U++) {
              var te = be(j(), {
                  month: le.value(U - 1),
                  year: b.value(U - 1)
                }),
                ke = Jn(te, {
                  months: 1
                });
              B.value[U] = {
                month: he(ke),
                year: ce(ke)
              };
            }
          },
          y = function y(M, k) {
            h(M), W('hours', tt(M)), W('minutes', ot(M)), W('seconds', Tt(M)), g.value.count && k && de();
          },
          L = function L(M) {
            if (g.value.count) {
              if (g.value.solo) return 0;
              var k = he(M[0]),
                U = he(M[1]);
              return Math.abs(U - k) < g.value.count ? 0 : 1;
            }
            return 1;
          },
          f = function f(M, k) {
            M[1] && Y.value.showLastInRange ? h(M[L(M)], k) : h(M[0], k);
            var U = function U(te, ke) {
              return [te(M[0]), M[1] ? te(M[1]) : m[ke][1]];
            };
            W('hours', U(tt, 'hours')), W('minutes', U(ot, 'minutes')), W('seconds', U(Tt, 'seconds'));
          },
          v = function v(M, k) {
            if ((Y.value.enabled || t.weekPicker) && !$.value.enabled) return f(M, k);
            if ($.value.enabled && k) {
              var U = M[M.length - 1];
              return y(U, k);
            }
          },
          V = function V(M) {
            var k = u.value;
            v(k, M), g.value.count && g.value.solo && de();
          },
          d = function d(M, k) {
            var U = be(j(), {
                month: le.value(k),
                year: b.value(k)
              }),
              te = M < 0 ? qe(U, 1) : Bt(U, 1);
            P(he(te), ce(te), M < 0, t.preventMinMaxNavigation) && (X(k, he(te), ce(te)), r('update-month-year', {
              instance: k,
              month: he(te),
              year: ce(te)
            }), g.value.count && !g.value.solo && ee(k), n());
          },
          ee = function ee(M) {
            for (var k = M - 1; k >= 0; k--) {
              var U = Bt(be(j(), {
                month: le.value(k + 1),
                year: b.value(k + 1)
              }), 1);
              X(k, he(U), ce(U));
            }
            for (var _k = M + 1; _k <= g.value.count - 1; _k++) {
              var _U = qe(be(j(), {
                month: le.value(_k - 1),
                year: b.value(_k - 1)
              }), 1);
              X(_k, he(_U), ce(_U));
            }
          },
          de = function de() {
            if (Array.isArray(u.value) && u.value.length === 2) {
              var M = j(j(u.value[1] ? u.value[1] : qe(u.value[0], 1))),
                _ref71 = [he(u.value[0]), ce(u.value[0])],
                k = _ref71[0],
                U = _ref71[1],
                _ref72 = [he(u.value[1]), ce(u.value[1])],
                te = _ref72[0],
                ke = _ref72[1];
              (k !== te || k === te && U !== ke) && g.value.solo && X(1, he(M), ce(M));
            } else u.value && !Array.isArray(u.value) && (X(0, he(u.value), ce(u.value)), h(j()));
          },
          A = function A() {
            t.startDate && (X(0, he(j(t.startDate)), ce(j(t.startDate))), g.value.count && ee(0));
          },
          fe = function fe(M, k) {
            if (t.monthChangeOnScroll) {
              var U = new Date().getTime() - l.value.getTime(),
                te = Math.abs(M.deltaY);
              var ke = 500;
              te > 1 && (ke = 100), te > 100 && (ke = 0), U > ke && (l.value = new Date(), d(t.monthChangeOnScroll !== 'inverse' ? -M.deltaY : M.deltaY, k));
            }
          },
          i = function i(M, k) {
            var U = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            t.monthChangeOnArrows && t.vertical === U && _(M, k);
          },
          _ = function _(M, k) {
            d(M === 'right' ? -1 : 1, k);
          },
          R = function R(M) {
            if (p.value.markers) return Qt(M.value, p.value.markers);
          },
          q = function q(M, k) {
            switch (t.sixWeeks === !0 ? 'append' : t.sixWeeks) {
              case 'prepend':
                return [!0, !1];
              case 'center':
                return [M == 0, !0];
              case 'fair':
                return [M == 0 || k > M, !0];
              case 'append':
                return [!1, !1];
              default:
                return [!1, !1];
            }
          },
          ne = function ne(M, k, U, te) {
            if (t.sixWeeks && M.length < 6) {
              var ke = 6 - M.length,
                Ee = (k.getDay() + 7 - te) % 7,
                an = 6 - (U.getDay() + 7 - te) % 7,
                _q3 = q(Ee, an),
                _q4 = babelHelpers.slicedToArray(_q3, 2),
                qt = _q4[0],
                Kn = _q4[1];
              for (var vt = 1; vt <= ke; vt++) if (Kn ? !!(vt % 2) == qt : qt) {
                var rn = M[0].days[0],
                  Xn = T(We(rn.value, -7), he(k));
                M.unshift({
                  days: Xn
                });
              } else {
                var _rn = M[M.length - 1],
                  _Xn = _rn.days[_rn.days.length - 1],
                  di = T(We(_Xn.value, 1), he(k));
                M.push({
                  days: di
                });
              }
            }
            return M;
          },
          T = function T(M, k) {
            var U = j(M),
              te = [];
            for (var ke = 0; ke < 7; ke++) {
              var Ee = We(U, ke),
                bt = he(Ee) !== k;
              te.push({
                text: t.hideOffsetDates && bt ? '' : Ee.getDate(),
                value: Ee,
                current: !bt,
                classData: {}
              });
            }
            return te;
          },
          F = function F(M, k) {
            var U = [],
              te = new Date(k, M),
              ke = new Date(k, M + 1, 0),
              Ee = t.weekStart,
              bt = Ue(te, {
                weekStartsOn: Ee
              }),
              an = function an(qt) {
                var Kn = T(qt, M);
                if (U.push({
                  days: Kn
                }), !U[U.length - 1].days.some(function (vt) {
                  return pe(Ve(vt.value), Ve(ke));
                })) {
                  var vt = We(qt, 7);
                  an(vt);
                }
              };
            return an(bt), ne(U, te, ke, Ee);
          },
          ie = function ie(M) {
            var k = st(j(M.value), m.hours, m.minutes, He());
            r('date-update', k), $.value.enabled ? In(k, u, $.value.limit) : u.value = k, a(), e.nextTick().then(function () {
              N();
            });
          },
          me = function me(M) {
            return Y.value.noDisabledRange ? Ia(o.value[0], M).some(function (U) {
              return z(U);
            }) : !1;
          },
          ze = function ze() {
            o.value = u.value ? u.value.slice() : [], o.value.length === 2 && !(Y.value.fixedStart || Y.value.fixedEnd) && (o.value = []);
          },
          ue = function ue(M, k) {
            var U = [j(M.value), We(j(M.value), +Y.value.autoRange)];
            K(U) ? (k && ft(M.value), o.value = U) : r('invalid-date', M.value);
          },
          ft = function ft(M) {
            var k = he(j(M)),
              U = ce(j(M));
            if (X(0, k, U), g.value.count > 0) for (var te = 1; te < g.value.count; te++) {
              var ke = vl(be(j(M), {
                year: b.value(te - 1),
                month: le.value(te - 1)
              }));
              X(te, ke.month, ke.year);
            }
          },
          et = function et(M) {
            if (me(M.value) || !Z(M.value, u.value, Y.value.fixedStart ? 0 : 1)) return r('invalid-date', M.value);
            o.value = Xa(j(M.value), u, r, Y);
          },
          zt = function zt(M, k) {
            if (ze(), Y.value.autoRange) return ue(M, k);
            if (Y.value.fixedStart || Y.value.fixedEnd) return et(M);
            o.value[0] ? Z(j(M.value), u.value) && !me(M.value) ? Ce(j(M.value), j(o.value[0])) ? (o.value.unshift(j(M.value)), r('range-end', o.value[0])) : (o.value[1] = j(M.value), r('range-end', o.value[1])) : (t.autoApply && r('auto-apply-invalid', M.value), r('invalid-date', M.value)) : (o.value[0] = j(M.value), r('range-start', o.value[0]));
          },
          He = function He() {
            var M = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            return t.enableSeconds ? Array.isArray(m.seconds) ? M ? m.seconds[0] : m.seconds[1] : m.seconds : 0;
          },
          Wt = function Wt(M) {
            o.value[M] = st(o.value[M], m.hours[M], m.minutes[M], He(M !== 1));
          },
          zn = function zn() {
            var M, k;
            o.value[0] && o.value[1] && +((M = o.value) == null ? void 0 : M[0]) > +((k = o.value) == null ? void 0 : k[1]) && (o.value.reverse(), r('range-start', o.value[0]), r('range-end', o.value[1]));
          },
          nn = function nn() {
            o.value.length && (o.value[0] && !o.value[1] ? Wt(0) : (Wt(0), Wt(1), a()), zn(), u.value = o.value.slice(), en(o.value, r, t.autoApply, t.modelAuto));
          },
          Wn = function Wn(M) {
            var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if (z(M.value) || !M.current && t.hideOffsetDates) return r('invalid-date', M.value);
            if (s.value = JSON.parse(JSON.stringify(M)), !Y.value.enabled) return ie(M);
            tr(m.hours) && tr(m.minutes) && !$.value.enabled && (zt(M, k), nn());
          },
          qn = function qn(M, k) {
            var te;
            X(M, k.month, k.year, !0), g.value.count && !g.value.solo && ee(M), r('update-month-year', {
              instance: M,
              month: k.month,
              year: k.year
            }), n(g.value.solo ? M : void 0);
            var U = (te = t.flow) != null && te.length ? t.flow[t.flowStep] : void 0;
            !k.fromNav && (U === Re.month || U === Re.year) && a();
          },
          Un = function Un(M, k) {
            Ka({
              value: M,
              modelValue: u,
              range: Y.value.enabled,
              timezone: k ? void 0 : I.value.timezone
            }), w(), t.multiCalendars && e.nextTick().then(function () {
              return J(!0);
            });
          },
          jn = function jn() {
            var M = vn(j(), I.value);
            Y.value.enabled ? u.value && Array.isArray(u.value) && u.value[0] ? u.value = Ce(M, u.value[0]) ? [M, u.value[0]] : [u.value[0], M] : u.value = [M] : u.value = M, w();
          },
          Qn = function Qn() {
            if (Array.isArray(u.value)) {
              if ($.value.enabled) {
                var M = Gn();
                u.value[u.value.length - 1] = D(M);
              } else u.value = u.value.map(function (M, k) {
                return M && D(M, k);
              });
            } else u.value = D(u.value);
            r('time-update');
          },
          Gn = function Gn() {
            return Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null;
          };
        return {
          calendars: B,
          modelValue: u,
          month: le,
          year: b,
          time: m,
          disabledTimesConfig: re,
          today: S,
          validateTime: Q,
          getCalendarDays: F,
          getMarker: R,
          handleScroll: fe,
          handleSwipe: _,
          handleArrow: i,
          selectDate: Wn,
          updateMonthYear: qn,
          presetDate: Un,
          selectCurrentDate: jn,
          updateTime: function updateTime(M) {
            var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var U = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            O(M, k, U, Qn);
          },
          assignMonthAndYear: h
        };
      },
      Ys = {
        key: 0
      },
      xs = e.defineComponent({
        __name: 'DatePicker',
        props: _objectSpread({}, Ge),
        emits: ['tooltip-open', 'tooltip-close', 'mount', 'update:internal-model-value', 'update-flow-step', 'reset-flow', 'auto-apply', 'focus-menu', 'select-date', 'range-start', 'range-end', 'invalid-fixed-range', 'time-update', 'am-pm-change', 'time-picker-open', 'time-picker-close', 'recalculate-position', 'update-month-year', 'auto-apply-invalid', 'date-update', 'invalid-date', 'overlay-toggle'],
        setup: function setup(t, _ref73) {
          var r = _ref73.expose,
            n = _ref73.emit;
          var a = n,
            o = t,
            _s3 = _s(o, a, se, h),
            l = _s3.calendars,
            s = _s3.month,
            c = _s3.year,
            u = _s3.modelValue,
            B = _s3.time,
            m = _s3.disabledTimesConfig,
            S = _s3.today,
            g = _s3.validateTime,
            C = _s3.getCalendarDays,
            Y = _s3.getMarker,
            x = _s3.handleArrow,
            I = _s3.handleScroll,
            p = _s3.handleSwipe,
            $ = _s3.selectDate,
            P = _s3.updateMonthYear,
            z = _s3.presetDate,
            K = _s3.selectCurrentDate,
            Z = _s3.updateTime,
            O = _s3.assignMonthAndYear,
            D = e.useSlots(),
            _Zs = Zs(u, o),
            W = _Zs.setHoverDate,
            E = _Zs.getDayClassData,
            Q = _Zs.clearHoverDate,
            _Me16 = Me(o),
            re = _Me16.defaultedMultiCalendars,
            le = e.ref([]),
            b = e.ref([]),
            H = e.ref(null),
            X = Le(D, 'calendar'),
            w = Le(D, 'monthYear'),
            G = Le(D, 'timePicker'),
            N = function N(i) {
              o.shadow || a('mount', i);
            };
          e.watch(l, function () {
            o.shadow || setTimeout(function () {
              a('recalculate-position');
            }, 0);
          }, {
            deep: !0
          }), e.watch(re, function (i, _) {
            i.count - _.count > 0 && O();
          }, {
            deep: !0
          });
          var J = e.computed(function () {
            return function (i) {
              return C(s.value(i), c.value(i)).map(function (_) {
                return _objectSpread(_objectSpread({}, _), {}, {
                  days: _.days.map(function (R) {
                    return R.marker = Y(R), R.classData = E(R), R;
                  })
                });
              });
            };
          });
          function se(i) {
            var _;
            i || i === 0 ? (_ = b.value[i]) == null || _.triggerTransition(s.value(i), c.value(i)) : b.value.forEach(function (R, q) {
              return R.triggerTransition(s.value(q), c.value(q));
            });
          }
          function h() {
            a('update-flow-step');
          }
          var y = function y(i) {
              var _ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              $(i, _), o.spaceConfirm && a('select-date');
            },
            L = function L(i, _) {
              var R = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var q;
              (q = le.value[R]) == null || q.toggleMonthPicker(i, _);
            },
            f = function f(i, _) {
              var R = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var q;
              (q = le.value[R]) == null || q.toggleYearPicker(i, _);
            },
            v = function v(i, _, R) {
              var q;
              (q = H.value) == null || q.toggleTimePicker(i, _, R);
            },
            V = function V(i, _) {
              var R;
              if (!o.range) {
                var q = u.value ? u.value : S,
                  ne = _ ? new Date(_) : q,
                  T = i ? Ue(ne, {
                    weekStartsOn: 1
                  }) : ua(ne, {
                    weekStartsOn: 1
                  });
                $({
                  value: T,
                  current: he(ne) === s.value(0),
                  text: '',
                  classData: {}
                }), (R = document.getElementById(qa(T))) == null || R.focus();
              }
            },
            d = function d(i) {
              var _;
              (_ = le.value[0]) == null || _.handleMonthYearChange(i, !0);
            },
            ee = function ee(i) {
              P(0, {
                month: s.value(0),
                year: c.value(0) + (i ? 1 : -1),
                fromNav: !0
              });
            },
            de = function de(i, _) {
              i === Re.time && a("time-picker-".concat(_ ? 'open' : 'close')), a('overlay-toggle', {
                open: _,
                overlay: i
              });
            },
            A = function A(i) {
              a('overlay-toggle', {
                open: !1,
                overlay: i
              }), a('focus-menu');
            };
          return r({
            clearHoverDate: Q,
            presetDate: z,
            selectCurrentDate: K,
            toggleMonthPicker: L,
            toggleYearPicker: f,
            toggleTimePicker: v,
            handleArrow: x,
            updateMonthYear: P,
            getSidebarProps: function getSidebarProps() {
              return {
                modelValue: u,
                month: s,
                year: c,
                time: B,
                updateTime: Z,
                updateMonthYear: P,
                selectDate: $,
                presetDate: z
              };
            },
            changeMonth: d,
            changeYear: ee,
            selectWeekDate: V
          }), function (i, _) {
            return e.openBlock(), e.createElementBlock(e.Fragment, null, [e.createVNode(Zt, {
              'multi-calendars': e.unref(re).count,
              collapse: i.collapse
            }, {
              "default": e.withCtx(function (_ref74) {
                var R = _ref74.instance,
                  q = _ref74.index;
                return [i.disableMonthYearSelect ? e.createCommentVNode('', !0) : (e.openBlock(), e.createBlock(Cs, e.mergeProps({
                  key: 0,
                  ref: function ref(ne) {
                    ne && (le.value[q] = ne);
                  },
                  months: e.unref($a)(i.formatLocale, i.locale, i.monthNameFormat),
                  years: e.unref(Mn)(i.yearRange, i.locale, i.reverseYears),
                  month: e.unref(s)(R),
                  year: e.unref(c)(R),
                  instance: R
                }, i.$props, {
                  onMount: _[0] || (_[0] = function (ne) {
                    return N(e.unref(wt).header);
                  }),
                  onResetFlow: _[1] || (_[1] = function (ne) {
                    return i.$emit('reset-flow');
                  }),
                  onUpdateMonthYear: function onUpdateMonthYear(ne) {
                    return e.unref(P)(R, ne);
                  },
                  onOverlayClosed: A,
                  onOverlayOpened: _[2] || (_[2] = function (ne) {
                    return i.$emit('overlay-toggle', {
                      open: !0,
                      overlay: ne
                    });
                  })
                }), e.createSlots({
                  _: 2
                }, [e.renderList(e.unref(w), function (ne, T) {
                  return {
                    name: ne,
                    fn: e.withCtx(function (F) {
                      return [e.renderSlot(i.$slots, ne, e.normalizeProps(e.guardReactiveProps(F)))];
                    })
                  };
                })]), 1040, ['months', 'years', 'month', 'year', 'instance', 'onUpdateMonthYear'])), e.createVNode(Rs, e.mergeProps({
                  ref: function ref(ne) {
                    ne && (b.value[q] = ne);
                  },
                  'mapped-dates': J.value(R),
                  month: e.unref(s)(R),
                  year: e.unref(c)(R),
                  instance: R
                }, i.$props, {
                  onSelectDate: function onSelectDate(ne) {
                    return e.unref($)(ne, R !== 1);
                  },
                  onHandleSpace: function onHandleSpace(ne) {
                    return y(ne, R !== 1);
                  },
                  onSetHoverDate: _[3] || (_[3] = function (ne) {
                    return e.unref(W)(ne);
                  }),
                  onHandleScroll: function onHandleScroll(ne) {
                    return e.unref(I)(ne, R);
                  },
                  onHandleSwipe: function onHandleSwipe(ne) {
                    return e.unref(p)(ne, R);
                  },
                  onMount: _[4] || (_[4] = function (ne) {
                    return N(e.unref(wt).calendar);
                  }),
                  onResetFlow: _[5] || (_[5] = function (ne) {
                    return i.$emit('reset-flow');
                  }),
                  onTooltipOpen: _[6] || (_[6] = function (ne) {
                    return i.$emit('tooltip-open', ne);
                  }),
                  onTooltipClose: _[7] || (_[7] = function (ne) {
                    return i.$emit('tooltip-close', ne);
                  })
                }), e.createSlots({
                  _: 2
                }, [e.renderList(e.unref(X), function (ne, T) {
                  return {
                    name: ne,
                    fn: e.withCtx(function (F) {
                      return [e.renderSlot(i.$slots, ne, e.normalizeProps(e.guardReactiveProps(_objectSpread({}, F))))];
                    })
                  };
                })]), 1040, ['mapped-dates', 'month', 'year', 'instance', 'onSelectDate', 'onHandleSpace', 'onHandleScroll', 'onHandleSwipe'])];
              }),
              _: 3
            }, 8, ['multi-calendars', 'collapse']), i.enableTimePicker ? (e.openBlock(), e.createElementBlock('div', Ys, [i.$slots['time-picker'] ? e.renderSlot(i.$slots, 'time-picker', e.normalizeProps(e.mergeProps({
              key: 0
            }, {
              time: e.unref(B),
              updateTime: e.unref(Z)
            }))) : (e.openBlock(), e.createBlock(Za, e.mergeProps({
              key: 1,
              ref_key: 'timePickerRef',
              ref: H
            }, i.$props, {
              hours: e.unref(B).hours,
              minutes: e.unref(B).minutes,
              seconds: e.unref(B).seconds,
              'internal-model-value': i.internalModelValue,
              'disabled-times-config': e.unref(m),
              'validate-time': e.unref(g),
              onMount: _[8] || (_[8] = function (R) {
                return N(e.unref(wt).timePicker);
              }),
              'onUpdate:hours': _[9] || (_[9] = function (R) {
                return e.unref(Z)(R);
              }),
              'onUpdate:minutes': _[10] || (_[10] = function (R) {
                return e.unref(Z)(R, !1);
              }),
              'onUpdate:seconds': _[11] || (_[11] = function (R) {
                return e.unref(Z)(R, !1, !0);
              }),
              onResetFlow: _[12] || (_[12] = function (R) {
                return i.$emit('reset-flow');
              }),
              onOverlayClosed: _[13] || (_[13] = function (R) {
                return de(R, !1);
              }),
              onOverlayOpened: _[14] || (_[14] = function (R) {
                return de(R, !0);
              }),
              onAmPmChange: _[15] || (_[15] = function (R) {
                return i.$emit('am-pm-change', R);
              })
            }), e.createSlots({
              _: 2
            }, [e.renderList(e.unref(G), function (R, q) {
              return {
                name: R,
                fn: e.withCtx(function (ne) {
                  return [e.renderSlot(i.$slots, R, e.normalizeProps(e.guardReactiveProps(ne)))];
                })
              };
            })]), 1040, ['hours', 'minutes', 'seconds', 'internal-model-value', 'disabled-times-config', 'validate-time']))])) : e.createCommentVNode('', !0)], 64);
          };
        }
      }),
      Vs = function Vs(t, r) {
        var n = e.ref(),
          _Me17 = Me(t),
          a = _Me17.defaultedMultiCalendars,
          o = _Me17.defaultedConfig,
          l = _Me17.defaultedHighlight,
          s = _Me17.defaultedRange,
          c = _Me17.propDates,
          u = _Me17.defaultedFilters,
          B = _Me17.defaultedMultiDates,
          _Ht5 = Ht(t, r),
          m = _Ht5.modelValue,
          S = _Ht5.year,
          g = _Ht5.month,
          C = _Ht5.calendars,
          _dt5 = dt(t),
          Y = _dt5.isDisabled,
          _Ja2 = Ja({
            modelValue: m,
            multiCalendars: a,
            range: s,
            highlight: l,
            calendars: C,
            propDates: c,
            month: g,
            year: S,
            filters: u,
            props: t,
            emit: r
          }),
          x = _Ja2.selectYear,
          I = _Ja2.groupedYears,
          p = _Ja2.showYearPicker,
          $ = _Ja2.isDisabled,
          P = _Ja2.toggleYearPicker,
          z = _Ja2.handleYearSelect,
          K = _Ja2.handleYear,
          Z = function Z(w, G) {
            return [w, G].map(function (N) {
              return Ke(N, 'MMMM', {
                locale: t.formatLocale
              });
            }).join('-');
          },
          O = e.computed(function () {
            return function (w) {
              return m.value ? Array.isArray(m.value) ? m.value.some(function (G) {
                return Ma(w, G);
              }) : Ma(m.value, w) : !1;
            };
          }),
          D = function D(w) {
            if (s.value.enabled) {
              if (Array.isArray(m.value)) {
                var G = pe(w, m.value[0]) || pe(w, m.value[1]);
                return Gt(m.value, n.value, w) && !G;
              }
              return !1;
            }
            return !1;
          },
          W = function W(w, G) {
            return w.quarter === la(G) && w.year === ce(G);
          },
          E = function E(w) {
            return typeof l.value == 'function' ? l.value({
              quarter: la(w),
              year: ce(w)
            }) : !!l.value.quarters.find(function (G) {
              return W(G, w);
            });
          },
          Q = e.computed(function () {
            return function (w) {
              var G = be(new Date(), {
                year: S.value(w)
              });
              return hr({
                start: Et(G),
                end: ia(G)
              }).map(function (N) {
                var J = pt(N),
                  se = ca(N),
                  h = Y(N),
                  y = D(J),
                  L = E(J);
                return {
                  text: Z(J, se),
                  value: J,
                  active: O.value(J),
                  highlighted: L,
                  disabled: h,
                  isBetween: y
                };
              });
            };
          }),
          re = function re(w) {
            In(w, m, B.value.limit), r('auto-apply', !0);
          },
          le = function le(w) {
            m.value = Fn(m, w, r), en(m.value, r, t.autoApply, t.modelAuto);
          },
          b = function b(w) {
            m.value = w, r('auto-apply');
          };
        return {
          defaultedConfig: o,
          defaultedMultiCalendars: a,
          groupedYears: I,
          year: S,
          isDisabled: $,
          quarters: Q,
          showYearPicker: p,
          modelValue: m,
          setHoverDate: function setHoverDate(w) {
            n.value = w;
          },
          selectYear: x,
          selectQuarter: function selectQuarter(w, G, N) {
            if (!N) return C.value[G].month = he(ca(w)), B.value.enabled ? re(w) : s.value.enabled ? le(w) : b(w);
          },
          toggleYearPicker: P,
          handleYearSelect: z,
          handleYear: K
        };
      },
      Is = {
        "class": 'dp--quarter-items'
      },
      Fs = ['data-test', 'disabled', 'onClick', 'onMouseover'],
      Ls = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'QuarterPicker',
        props: _objectSpread({}, Ge),
        emits: ['update:internal-model-value', 'reset-flow', 'overlay-closed', 'auto-apply', 'range-start', 'range-end', 'overlay-toggle', 'update-month-year'],
        setup: function setup(t, _ref75) {
          var r = _ref75.expose,
            n = _ref75.emit;
          var a = n,
            o = t,
            l = e.useSlots(),
            s = Le(l, 'yearMode'),
            _Vs = Vs(o, a),
            c = _Vs.defaultedMultiCalendars,
            u = _Vs.defaultedConfig,
            B = _Vs.groupedYears,
            m = _Vs.year,
            S = _Vs.isDisabled,
            g = _Vs.quarters,
            C = _Vs.modelValue,
            Y = _Vs.showYearPicker,
            x = _Vs.setHoverDate,
            I = _Vs.selectQuarter,
            p = _Vs.toggleYearPicker,
            $ = _Vs.handleYearSelect,
            P = _Vs.handleYear;
          return r({
            getSidebarProps: function getSidebarProps() {
              return {
                modelValue: C,
                year: m,
                selectQuarter: I,
                handleYearSelect: $,
                handleYear: P
              };
            }
          }), function (K, Z) {
            return e.openBlock(), e.createBlock(Zt, {
              'multi-calendars': e.unref(c).count,
              collapse: K.collapse,
              stretch: ''
            }, {
              "default": e.withCtx(function (_ref76) {
                var O = _ref76.instance;
                return [e.createElementVNode('div', {
                  "class": 'dp-quarter-picker-wrap',
                  style: e.normalizeStyle({
                    minHeight: "".concat(e.unref(u).modeHeight, "px")
                  })
                }, [K.$slots['top-extra'] ? e.renderSlot(K.$slots, 'top-extra', {
                  key: 0,
                  value: K.internalModelValue
                }) : e.createCommentVNode('', !0), e.createElementVNode('div', null, [e.createVNode(Ga, e.mergeProps(K.$props, {
                  items: e.unref(B)(O),
                  instance: O,
                  'show-year-picker': e.unref(Y)[O],
                  year: e.unref(m)(O),
                  'is-disabled': function isDisabled(D) {
                    return e.unref(S)(O, D);
                  },
                  onHandleYear: function onHandleYear(D) {
                    return e.unref(P)(O, D);
                  },
                  onYearSelect: function onYearSelect(D) {
                    return e.unref($)(D, O);
                  },
                  onToggleYearPicker: function onToggleYearPicker(D) {
                    return e.unref(p)(O, D == null ? void 0 : D.flow, D == null ? void 0 : D.show);
                  }
                }), e.createSlots({
                  _: 2
                }, [e.renderList(e.unref(s), function (D, W) {
                  return {
                    name: D,
                    fn: e.withCtx(function (E) {
                      return [e.renderSlot(K.$slots, D, e.normalizeProps(e.guardReactiveProps(E)))];
                    })
                  };
                })]), 1040, ['items', 'instance', 'show-year-picker', 'year', 'is-disabled', 'onHandleYear', 'onYearSelect', 'onToggleYearPicker'])]), e.createElementVNode('div', Is, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(g)(O), function (D, W) {
                  return e.openBlock(), e.createElementBlock('div', {
                    key: W
                  }, [e.createElementVNode('button', {
                    type: 'button',
                    "class": e.normalizeClass(['dp--qr-btn', {
                      'dp--qr-btn-active': D.active,
                      'dp--qr-btn-between': D.isBetween,
                      'dp--qr-btn-disabled': D.disabled,
                      'dp--highlighted': D.highlighted
                    }]),
                    'data-test': D.value,
                    disabled: D.disabled,
                    onClick: function onClick(E) {
                      return e.unref(I)(D.value, O, D.disabled);
                    },
                    onMouseover: function onMouseover(E) {
                      return e.unref(x)(D.value);
                    }
                  }, [K.$slots.quarter ? e.renderSlot(K.$slots, 'quarter', {
                    key: 0,
                    value: D.value,
                    text: D.text
                  }) : (e.openBlock(), e.createElementBlock(e.Fragment, {
                    key: 1
                  }, [e.createTextVNode(e.toDisplayString(D.text), 1)], 64))], 42, Fs)]);
                }), 128))])], 4)];
              }),
              _: 3
            }, 8, ['multi-calendars', 'collapse']);
          };
        }
      }),
      Hs = ['id', 'tabindex', 'role', 'aria-label'],
      zs = {
        key: 0,
        "class": 'dp--menu-load-container'
      },
      Ws = [e.createElementVNode('span', {
        "class": 'dp--menu-loader'
      }, null, -1)],
      qs = {
        key: 1,
        "class": 'dp--menu-header'
      },
      Us = {
        key: 0,
        "class": 'dp__sidebar_left'
      },
      js = ['data-test', 'onClick', 'onKeydown'],
      Qs = {
        key: 2,
        "class": 'dp__sidebar_right'
      },
      Gs = {
        key: 3,
        "class": 'dp__action_extra'
      },
      nr = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'DatepickerMenu',
        props: _objectSpread(_objectSpread({}, Jt), {}, {
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
          noOverlayFocus: {
            type: Boolean,
            "default": !1
          },
          collapse: {
            type: Boolean,
            "default": !1
          },
          getInputRect: {
            type: Function,
            "default": function _default() {
              return {};
            }
          },
          isTextInputDate: {
            type: Boolean,
            "default": !1
          }
        }),
        emits: ['close-picker', 'select-date', 'auto-apply', 'time-update', 'flow-step', 'update-month-year', 'invalid-select', 'update:internal-model-value', 'recalculate-position', 'invalid-fixed-range', 'tooltip-open', 'tooltip-close', 'time-picker-open', 'time-picker-close', 'am-pm-change', 'range-start', 'range-end', 'auto-apply-invalid', 'date-update', 'invalid-date', 'overlay-toggle'],
        setup: function setup(t, _ref77) {
          var r = _ref77.expose,
            n = _ref77.emit;
          var a = n,
            o = t,
            l = e.ref(null),
            s = e.computed(function () {
              var T = o.openOnTop,
                F = babelHelpers.objectWithoutProperties(o, _excluded);
              return _objectSpread(_objectSpread({}, F), {}, {
                flowStep: W.value,
                collapse: o.collapse,
                noOverlayFocus: o.noOverlayFocus,
                menuWrapRef: l.value
              });
            }),
            _Ua = Ua(),
            c = _Ua.setMenuFocused,
            u = _Ua.setShiftKey,
            B = _Ua.control,
            m = e.useSlots(),
            _Me18 = Me(o),
            S = _Me18.defaultedTextInput,
            g = _Me18.defaultedInline,
            C = _Me18.defaultedConfig,
            Y = _Me18.defaultedUI,
            x = e.ref(null),
            I = e.ref(0),
            p = e.ref(null),
            $ = e.ref(!1),
            P = e.ref(null);
          e.onMounted(function () {
            if (!o.shadow) {
              $.value = !0, z(), window.addEventListener('resize', z);
              var T = Oe(l);
              if (T && !S.value.enabled && !g.value.enabled && (c(!0), X()), T) {
                var F = function F(ie) {
                  C.value.allowPreventDefault && ie.preventDefault(), lt(ie, C.value, !0);
                };
                T.addEventListener('pointerdown', F), T.addEventListener('mousedown', F);
              }
            }
          }), e.onUnmounted(function () {
            window.removeEventListener('resize', z);
          });
          var z = function z() {
              var T = Oe(p);
              T && (I.value = T.getBoundingClientRect().width);
            },
            _ut7 = ut(),
            K = _ut7.arrowRight,
            Z = _ut7.arrowLeft,
            O = _ut7.arrowDown,
            D = _ut7.arrowUp,
            _ei = ei(o, a, P),
            W = _ei.flowStep,
            E = _ei.updateFlowStep,
            Q = _ei.childMount,
            re = _ei.resetFlow,
            le = _ei.handleFlow,
            b = e.computed(function () {
              return o.monthPicker ? ts : o.yearPicker ? as : o.timePicker ? bs : o.quarterPicker ? Ls : xs;
            }),
            H = e.computed(function () {
              var _ref78, _ref79;
              var ie;
              if (C.value.arrowLeft) return C.value.arrowLeft;
              var T = (ie = l.value) == null ? void 0 : ie.getBoundingClientRect(),
                F = o.getInputRect();
              return (F == null ? void 0 : F.width) < (I == null ? void 0 : I.value) && (F == null ? void 0 : F.left) <= ((_ref78 = T == null ? void 0 : T.left) !== null && _ref78 !== void 0 ? _ref78 : 0) ? "".concat((F == null ? void 0 : F.width) / 2, "px") : (F == null ? void 0 : F.right) >= ((_ref79 = T == null ? void 0 : T.right) !== null && _ref79 !== void 0 ? _ref79 : 0) && (F == null ? void 0 : F.width) < (I == null ? void 0 : I.value) ? "".concat((I == null ? void 0 : I.value) - (F == null ? void 0 : F.width) / 2, "px") : '50%';
            }),
            X = function X() {
              var T = Oe(l);
              T && T.focus({
                preventScroll: !0
              });
            },
            w = e.computed(function () {
              var T;
              return ((T = P.value) == null ? void 0 : T.getSidebarProps()) || {};
            }),
            G = function G() {
              o.openOnTop && a('recalculate-position');
            },
            N = Le(m, 'action'),
            J = e.computed(function () {
              return o.monthPicker || o.yearPicker ? Le(m, 'monthYear') : o.timePicker ? Le(m, 'timePicker') : Le(m, 'shared');
            }),
            se = e.computed(function () {
              return o.openOnTop ? 'dp__arrow_bottom' : 'dp__arrow_top';
            }),
            h = e.computed(function () {
              return {
                dp__menu_disabled: o.disabled,
                dp__menu_readonly: o.readonly,
                'dp-menu-loading': o.loading
              };
            }),
            y = e.computed(function () {
              var _Y$value$menu;
              return _objectSpread({
                dp__menu: !0,
                dp__menu_index: !g.value.enabled,
                dp__relative: g.value.enabled
              }, (_Y$value$menu = Y.value.menu) !== null && _Y$value$menu !== void 0 ? _Y$value$menu : {});
            }),
            L = function L(T) {
              lt(T, C.value, !0);
            },
            f = function f() {
              o.escClose && a('close-picker');
            },
            v = function v(T) {
              if (o.arrowNavigation) {
                if (T === Ye.up) return D();
                if (T === Ye.down) return O();
                if (T === Ye.left) return Z();
                if (T === Ye.right) return K();
              } else T === Ye.left || T === Ye.up ? A('handleArrow', Ye.left, 0, T === Ye.up) : A('handleArrow', Ye.right, 0, T === Ye.down);
            },
            V = function V(T) {
              u(T.shiftKey), !o.disableMonthYearSelect && T.code === ve.tab && T.target.classList.contains('dp__menu') && B.value.shiftKeyInMenu && (T.preventDefault(), lt(T, C.value, !0), a('close-picker'));
            },
            d = function d() {
              X(), a('time-picker-close');
            },
            ee = function ee(T) {
              var F, ie, me;
              (F = P.value) == null || F.toggleTimePicker(!1, !1), (ie = P.value) == null || ie.toggleMonthPicker(!1, !1, T), (me = P.value) == null || me.toggleYearPicker(!1, !1, T);
            },
            de = function de(T) {
              var F = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var ie, me, ze;
              return T === 'month' ? (ie = P.value) == null ? void 0 : ie.toggleMonthPicker(!1, !0, F) : T === 'year' ? (me = P.value) == null ? void 0 : me.toggleYearPicker(!1, !0, F) : T === 'time' ? (ze = P.value) == null ? void 0 : ze.toggleTimePicker(!0, !1) : ee(F);
            },
            A = function A(T) {
              var _me;
              var ie, me;
              for (var _len = arguments.length, F = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                F[_key - 1] = arguments[_key];
              }
              (ie = P.value) != null && ie[T] && ((me = P.value) == null || (_me = me)[T].apply(_me, F));
            },
            fe = function fe() {
              A('selectCurrentDate');
            },
            i = function i(T, F) {
              A('presetDate', T, F);
            },
            _ = function _() {
              A('clearHoverDate');
            },
            R = function R(T, F) {
              A('updateMonthYear', T, F);
            },
            q = function q(T, F) {
              T.preventDefault(), v(F);
            },
            ne = function ne(T) {
              var F, ie, me;
              if (V(T), T.key === ve.home || T.key === ve.end) return A('selectWeekDate', T.key === ve.home, T.target.getAttribute('id'));
              switch ((T.key === ve.pageUp || T.key === ve.pageDown) && (T.shiftKey ? (A('changeYear', T.key === ve.pageUp), (F = Pn(l.value, 'overlay-year')) == null || F.focus()) : (A('changeMonth', T.key === ve.pageUp), (ie = Pn(l.value, T.key === ve.pageUp ? 'action-prev' : 'action-next')) == null || ie.focus()), T.target.getAttribute('id') && ((me = l.value) == null || me.focus({
                preventScroll: !0
              }))), T.key) {
                case ve.esc:
                  return f();
                case ve.arrowLeft:
                  return q(T, Ye.left);
                case ve.arrowRight:
                  return q(T, Ye.right);
                case ve.arrowUp:
                  return q(T, Ye.up);
                case ve.arrowDown:
                  return q(T, Ye.down);
                default:
                  return;
              }
            };
          return r({
            updateMonthYear: R,
            switchView: de,
            handleFlow: le
          }), function (T, F) {
            var ie, me, ze;
            return e.openBlock(), e.createElementBlock('div', {
              id: T.uid ? "dp-menu-".concat(T.uid) : void 0,
              ref_key: 'dpMenuRef',
              ref: l,
              tabindex: e.unref(g).enabled ? void 0 : '0',
              role: e.unref(g).enabled ? void 0 : 'dialog',
              'aria-label': (ie = T.ariaLabels) == null ? void 0 : ie.menu,
              "class": e.normalizeClass(y.value),
              style: e.normalizeStyle({
                '--dp-arrow-left': H.value
              }),
              onMouseleave: _,
              onClick: L,
              onKeydown: ne
            }, [(T.disabled || T.readonly) && e.unref(g).enabled || T.loading ? (e.openBlock(), e.createElementBlock('div', {
              key: 0,
              "class": e.normalizeClass(h.value)
            }, [T.loading ? (e.openBlock(), e.createElementBlock('div', zs, Ws)) : e.createCommentVNode('', !0)], 2)) : e.createCommentVNode('', !0), T.$slots['menu-header'] ? (e.openBlock(), e.createElementBlock('div', qs, [e.renderSlot(T.$slots, 'menu-header')])) : e.createCommentVNode('', !0), !e.unref(g).enabled && !T.teleportCenter ? (e.openBlock(), e.createElementBlock('div', {
              key: 2,
              "class": e.normalizeClass(se.value)
            }, null, 2)) : e.createCommentVNode('', !0), e.createElementVNode('div', {
              ref_key: 'innerMenuRef',
              ref: p,
              "class": e.normalizeClass({
                dp__menu_content_wrapper: ((me = T.presetDates) == null ? void 0 : me.length) || !!T.$slots['left-sidebar'] || !!T.$slots['right-sidebar'],
                'dp--menu-content-wrapper-collapsed': t.collapse && (((ze = T.presetDates) == null ? void 0 : ze.length) || !!T.$slots['left-sidebar'] || !!T.$slots['right-sidebar'])
              }),
              style: e.normalizeStyle({
                '--dp-menu-width': "".concat(I.value, "px")
              })
            }, [T.$slots['left-sidebar'] ? (e.openBlock(), e.createElementBlock('div', Us, [e.renderSlot(T.$slots, 'left-sidebar', e.normalizeProps(e.guardReactiveProps(w.value)))])) : e.createCommentVNode('', !0), T.presetDates.length ? (e.openBlock(), e.createElementBlock('div', {
              key: 1,
              "class": e.normalizeClass({
                'dp--preset-dates-collapsed': t.collapse,
                'dp--preset-dates': !0
              })
            }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(T.presetDates, function (ue, ft) {
              var _ue$testId;
              return e.openBlock(), e.createElementBlock(e.Fragment, {
                key: ft
              }, [ue.slot ? e.renderSlot(T.$slots, ue.slot, {
                key: 0,
                presetDate: i,
                label: ue.label,
                value: ue.value
              }) : (e.openBlock(), e.createElementBlock('button', {
                key: 1,
                type: 'button',
                style: e.normalizeStyle(ue.style || {}),
                "class": e.normalizeClass(['dp__btn dp--preset-range', {
                  'dp--preset-range-collapsed': t.collapse
                }]),
                'data-test': (_ue$testId = ue.testId) !== null && _ue$testId !== void 0 ? _ue$testId : void 0,
                onClick: e.withModifiers(function (et) {
                  return i(ue.value, ue.noTz);
                }, ['prevent']),
                onKeydown: function onKeydown(et) {
                  return e.unref(xe)(et, function () {
                    return i(ue.value, ue.noTz);
                  }, !0);
                }
              }, e.toDisplayString(ue.label), 47, js))], 64);
            }), 128))], 2)) : e.createCommentVNode('', !0), e.createElementVNode('div', {
              ref_key: 'calendarWrapperRef',
              ref: x,
              "class": 'dp__instance_calendar',
              role: 'document'
            }, [(e.openBlock(), e.createBlock(e.resolveDynamicComponent(b.value), e.mergeProps({
              ref_key: 'dynCmpRef',
              ref: P
            }, s.value, {
              'flow-step': e.unref(W),
              onMount: e.unref(Q),
              onUpdateFlowStep: e.unref(E),
              onResetFlow: e.unref(re),
              onFocusMenu: X,
              onSelectDate: F[0] || (F[0] = function (ue) {
                return T.$emit('select-date');
              }),
              onDateUpdate: F[1] || (F[1] = function (ue) {
                return T.$emit('date-update', ue);
              }),
              onTooltipOpen: F[2] || (F[2] = function (ue) {
                return T.$emit('tooltip-open', ue);
              }),
              onTooltipClose: F[3] || (F[3] = function (ue) {
                return T.$emit('tooltip-close', ue);
              }),
              onAutoApply: F[4] || (F[4] = function (ue) {
                return T.$emit('auto-apply', ue);
              }),
              onRangeStart: F[5] || (F[5] = function (ue) {
                return T.$emit('range-start', ue);
              }),
              onRangeEnd: F[6] || (F[6] = function (ue) {
                return T.$emit('range-end', ue);
              }),
              onInvalidFixedRange: F[7] || (F[7] = function (ue) {
                return T.$emit('invalid-fixed-range', ue);
              }),
              onTimeUpdate: F[8] || (F[8] = function (ue) {
                return T.$emit('time-update');
              }),
              onAmPmChange: F[9] || (F[9] = function (ue) {
                return T.$emit('am-pm-change', ue);
              }),
              onTimePickerOpen: F[10] || (F[10] = function (ue) {
                return T.$emit('time-picker-open', ue);
              }),
              onTimePickerClose: d,
              onRecalculatePosition: G,
              onUpdateMonthYear: F[11] || (F[11] = function (ue) {
                return T.$emit('update-month-year', ue);
              }),
              onAutoApplyInvalid: F[12] || (F[12] = function (ue) {
                return T.$emit('auto-apply-invalid', ue);
              }),
              onInvalidDate: F[13] || (F[13] = function (ue) {
                return T.$emit('invalid-date', ue);
              }),
              onOverlayToggle: F[14] || (F[14] = function (ue) {
                return T.$emit('overlay-toggle', ue);
              }),
              'onUpdate:internalModelValue': F[15] || (F[15] = function (ue) {
                return T.$emit('update:internal-model-value', ue);
              })
            }), e.createSlots({
              _: 2
            }, [e.renderList(J.value, function (ue, ft) {
              return {
                name: ue,
                fn: e.withCtx(function (et) {
                  return [e.renderSlot(T.$slots, ue, e.normalizeProps(e.guardReactiveProps(_objectSpread({}, et))))];
                })
              };
            })]), 1040, ['flow-step', 'onMount', 'onUpdateFlowStep', 'onResetFlow']))], 512), T.$slots['right-sidebar'] ? (e.openBlock(), e.createElementBlock('div', Qs, [e.renderSlot(T.$slots, 'right-sidebar', e.normalizeProps(e.guardReactiveProps(w.value)))])) : e.createCommentVNode('', !0), T.$slots['action-extra'] ? (e.openBlock(), e.createElementBlock('div', Gs, [T.$slots['action-extra'] ? e.renderSlot(T.$slots, 'action-extra', {
              key: 0,
              selectCurrentDate: fe
            }) : e.createCommentVNode('', !0)])) : e.createCommentVNode('', !0)], 6), !T.autoApply || e.unref(C).keepActionRow ? (e.openBlock(), e.createBlock(jl, e.mergeProps({
              key: 3,
              'menu-mount': $.value
            }, s.value, {
              'calendar-width': I.value,
              onClosePicker: F[16] || (F[16] = function (ue) {
                return T.$emit('close-picker');
              }),
              onSelectDate: F[17] || (F[17] = function (ue) {
                return T.$emit('select-date');
              }),
              onInvalidSelect: F[18] || (F[18] = function (ue) {
                return T.$emit('invalid-select');
              }),
              onSelectNow: fe
            }), e.createSlots({
              _: 2
            }, [e.renderList(e.unref(N), function (ue, ft) {
              return {
                name: ue,
                fn: e.withCtx(function (et) {
                  return [e.renderSlot(T.$slots, ue, e.normalizeProps(e.guardReactiveProps(_objectSpread({}, et))))];
                })
              };
            })]), 1040, ['menu-mount', 'calendar-width'])) : e.createCommentVNode('', !0)], 46, Hs);
          };
        }
      });
    var Nt = function (t) {
      return t.center = 'center', t.left = 'left', t.right = 'right', t;
    }(Nt || {});
    var Ks = function Ks(_ref80) {
        var t = _ref80.menuRef,
          r = _ref80.menuRefInner,
          n = _ref80.inputRef,
          a = _ref80.pickerWrapperRef,
          o = _ref80.inline,
          l = _ref80.emit,
          s = _ref80.props,
          c = _ref80.slots;
        var _Me19 = Me(s),
          u = _Me19.defaultedConfig,
          B = e.ref({}),
          m = e.ref(!1),
          S = e.ref({
            top: '0',
            left: '0'
          }),
          g = e.ref(!1),
          C = e.toRef(s, 'teleportCenter');
        e.watch(C, function () {
          S.value = JSON.parse(JSON.stringify({})), K();
        });
        var Y = function Y(w) {
            if (s.teleport) {
              var G = w.getBoundingClientRect();
              return {
                left: G.left + window.scrollX,
                top: G.top + window.scrollY
              };
            }
            return {
              top: 0,
              left: 0
            };
          },
          x = function x(w, G) {
            S.value.left = "".concat(w + G - B.value.width, "px");
          },
          I = function I(w) {
            S.value.left = "".concat(w, "px");
          },
          p = function p(w, G) {
            s.position === Nt.left && I(w), s.position === Nt.right && x(w, G), s.position === Nt.center && (S.value.left = "".concat(w + G / 2 - B.value.width / 2, "px"));
          },
          $ = function $(w) {
            var _w$getBoundingClientR = w.getBoundingClientRect(),
              G = _w$getBoundingClientR.width,
              N = _w$getBoundingClientR.height,
              _ref81 = s.altPosition ? s.altPosition(w) : Y(w),
              J = _ref81.top,
              se = _ref81.left;
            return {
              top: +J,
              left: +se,
              width: G,
              height: N
            };
          },
          P = function P() {
            S.value.left = '50%', S.value.top = '50%', S.value.transform = 'translate(-50%, -50%)', S.value.position = 'fixed', delete S.value.opacity;
          },
          z = function z() {
            var w = Oe(n),
              _s$altPosition = s.altPosition(w),
              G = _s$altPosition.top,
              N = _s$altPosition.left,
              J = _s$altPosition.transform;
            S.value = {
              top: "".concat(G, "px"),
              left: "".concat(N, "px"),
              transform: J !== null && J !== void 0 ? J : ''
            };
          },
          K = function K() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            var G;
            if (!o.value.enabled) {
              if (C.value) return P();
              if (s.altPosition !== null) return z();
              if (w) {
                var N = s.teleport ? (G = r.value) == null ? void 0 : G.$el : t.value;
                N && (B.value = N.getBoundingClientRect()), l('recalculate-position');
              }
              return re();
            }
          },
          Z = function Z(_ref82) {
            var w = _ref82.inputEl,
              G = _ref82.left,
              N = _ref82.width;
            window.screen.width > 768 && !m.value && p(G, N), W(w);
          },
          O = function O(w) {
            var _$3 = $(w),
              G = _$3.top,
              N = _$3.left,
              J = _$3.height,
              se = _$3.width;
            S.value.top = "".concat(J + G + +s.offset, "px"), g.value = !1, m.value || (S.value.left = "".concat(N + se / 2 - B.value.width / 2, "px")), Z({
              inputEl: w,
              left: N,
              width: se
            });
          },
          D = function D(w) {
            var _$4 = $(w),
              G = _$4.top,
              N = _$4.left,
              J = _$4.width;
            S.value.top = "".concat(G - +s.offset - B.value.height, "px"), g.value = !0, Z({
              inputEl: w,
              left: N,
              width: J
            });
          },
          W = function W(w) {
            if (s.autoPosition) {
              var _$5 = $(w),
                G = _$5.left,
                N = _$5.width,
                _B$value = B.value,
                _J = _B$value.left,
                se = _B$value.right;
              if (!m.value) {
                if (Math.abs(_J) !== Math.abs(se)) {
                  if (_J <= 0) return m.value = !0, I(G);
                  if (se >= document.documentElement.clientWidth) return m.value = !0, x(G, N);
                }
                return p(G, N);
              }
            }
          },
          E = function E() {
            var w = Oe(n);
            if (w) {
              var G = B.value.height,
                _w$getBoundingClientR2 = w.getBoundingClientRect(),
                N = _w$getBoundingClientR2.top,
                _J2 = _w$getBoundingClientR2.height,
                h = window.innerHeight - N - _J2,
                y = N;
              return G <= h ? yt.bottom : G > h && G <= y ? yt.top : h >= y ? yt.bottom : yt.top;
            }
            return yt.bottom;
          },
          Q = function Q(w) {
            return E() === yt.bottom ? O(w) : D(w);
          },
          re = function re() {
            var w = Oe(n);
            if (w) return s.autoPosition ? Q(w) : O(w);
          },
          le = function le(w) {
            if (w) {
              var G = w.scrollHeight > w.clientHeight,
                _J3 = window.getComputedStyle(w).overflowY.indexOf('hidden') !== -1;
              return G && !_J3;
            }
            return !0;
          },
          b = function b(w) {
            return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : le(w) ? w : b(w.assignedSlot && u.value.shadowDom ? w.assignedSlot.parentNode : w.parentNode);
          },
          H = function H(w) {
            if (w) switch (s.position) {
              case Nt.left:
                return {
                  left: 0,
                  transform: 'translateX(0)'
                };
              case Nt.right:
                return {
                  left: "".concat(w.width, "px"),
                  transform: 'translateX(-100%)'
                };
              default:
                return {
                  left: "".concat(w.width / 2, "px"),
                  transform: 'translateX(-50%)'
                };
            }
            return {};
          };
        return {
          openOnTop: g,
          menuStyle: S,
          xCorrect: m,
          setMenuPosition: K,
          getScrollableParent: b,
          shadowRender: function shadowRender(w, G) {
            var f, v, V;
            var N = document.createElement('div'),
              J = (f = Oe(n)) == null ? void 0 : f.getBoundingClientRect();
            N.setAttribute('id', 'dp--temp-container');
            var se = (v = a.value) != null && v.clientWidth ? a.value : document.body;
            se.append(N);
            var h = H(J),
              y = u.value.shadowDom ? Object.keys(c).filter(function (d) {
                return ['right-sidebar', 'left-sidebar', 'top-extra', 'action-extra'].includes(d);
              }) : Object.keys(c),
              L = e.h(w, _objectSpread(_objectSpread({}, G), {}, {
                shadow: !0,
                style: _objectSpread({
                  opacity: 0,
                  position: 'absolute'
                }, h)
              }), Object.fromEntries(y.map(function (d) {
                return [d, c[d]];
              })));
            e.render(L, N), B.value = (V = L.el) == null ? void 0 : V.getBoundingClientRect(), e.render(null, N), se.removeChild(N);
          }
        };
      },
      ct = [{
        name: 'clock-icon',
        use: ['time', 'calendar', 'shared']
      }, {
        name: 'arrow-left',
        use: ['month-year', 'calendar', 'shared', 'year-mode']
      }, {
        name: 'arrow-right',
        use: ['month-year', 'calendar', 'shared', 'year-mode']
      }, {
        name: 'arrow-up',
        use: ['time', 'calendar', 'month-year', 'shared']
      }, {
        name: 'arrow-down',
        use: ['time', 'calendar', 'month-year', 'shared']
      }, {
        name: 'calendar-icon',
        use: ['month-year', 'time', 'calendar', 'shared', 'year-mode']
      }, {
        name: 'day',
        use: ['calendar', 'shared']
      }, {
        name: 'month-overlay-value',
        use: ['calendar', 'month-year', 'shared']
      }, {
        name: 'year-overlay-value',
        use: ['calendar', 'month-year', 'shared', 'year-mode']
      }, {
        name: 'year-overlay',
        use: ['month-year', 'shared']
      }, {
        name: 'month-overlay',
        use: ['month-year', 'shared']
      }, {
        name: 'month-overlay-header',
        use: ['month-year', 'shared']
      }, {
        name: 'year-overlay-header',
        use: ['month-year', 'shared']
      }, {
        name: 'hours-overlay-value',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'hours-overlay-header',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'minutes-overlay-value',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'minutes-overlay-header',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'seconds-overlay-value',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'seconds-overlay-header',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'hours',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'minutes',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'month',
        use: ['calendar', 'month-year', 'shared']
      }, {
        name: 'year',
        use: ['calendar', 'month-year', 'shared', 'year-mode']
      }, {
        name: 'action-buttons',
        use: ['action']
      }, {
        name: 'action-preview',
        use: ['action']
      }, {
        name: 'calendar-header',
        use: ['calendar', 'shared']
      }, {
        name: 'marker-tooltip',
        use: ['calendar', 'shared']
      }, {
        name: 'action-extra',
        use: ['menu']
      }, {
        name: 'time-picker-overlay',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'am-pm-button',
        use: ['calendar', 'time', 'shared']
      }, {
        name: 'left-sidebar',
        use: ['menu']
      }, {
        name: 'right-sidebar',
        use: ['menu']
      }, {
        name: 'month-year',
        use: ['month-year', 'shared']
      }, {
        name: 'time-picker',
        use: ['menu', 'shared']
      }, {
        name: 'action-row',
        use: ['action']
      }, {
        name: 'marker',
        use: ['calendar', 'shared']
      }, {
        name: 'quarter',
        use: ['shared']
      }, {
        name: 'top-extra',
        use: ['shared', 'month-year']
      }, {
        name: 'tp-inline-arrow-up',
        use: ['shared', 'time']
      }, {
        name: 'tp-inline-arrow-down',
        use: ['shared', 'time']
      }, {
        name: 'menu-header',
        use: ['menu']
      }],
      Xs = [{
        name: 'trigger'
      }, {
        name: 'input-icon'
      }, {
        name: 'clear-icon'
      }, {
        name: 'dp-input'
      }],
      Js = {
        all: function all() {
          return ct;
        },
        monthYear: function monthYear() {
          return ct.filter(function (t) {
            return t.use.includes('month-year');
          });
        },
        input: function input() {
          return Xs;
        },
        timePicker: function timePicker() {
          return ct.filter(function (t) {
            return t.use.includes('time');
          });
        },
        action: function action() {
          return ct.filter(function (t) {
            return t.use.includes('action');
          });
        },
        calendar: function calendar() {
          return ct.filter(function (t) {
            return t.use.includes('calendar');
          });
        },
        menu: function menu() {
          return ct.filter(function (t) {
            return t.use.includes('menu');
          });
        },
        shared: function shared() {
          return ct.filter(function (t) {
            return t.use.includes('shared');
          });
        },
        yearMode: function yearMode() {
          return ct.filter(function (t) {
            return t.use.includes('year-mode');
          });
        }
      },
      Le = function Le(t, r, n) {
        var a = [];
        return Js[r]().forEach(function (o) {
          t[o.name] && a.push(o.name);
        }), n != null && n.length && n.forEach(function (o) {
          o.slot && a.push(o.slot);
        }), a;
      },
      Lt = function Lt(t) {
        var r = e.computed(function () {
            return function (a) {
              return t.value ? a ? t.value.open : t.value.close : '';
            };
          }),
          n = e.computed(function () {
            return function (a) {
              return t.value ? a ? t.value.menuAppearTop : t.value.menuAppearBottom : '';
            };
          });
        return {
          transitionName: r,
          showTransition: !!t.value,
          menuTransition: n
        };
      },
      Ht = function Ht(t, r, n) {
        var _Me20 = Me(t),
          a = _Me20.defaultedRange,
          o = _Me20.defaultedTz,
          l = j(Fe(j(), o.value.timezone)),
          s = e.ref([{
            month: he(l),
            year: ce(l)
          }]),
          c = function c(g) {
            var C = {
              hours: tt(l),
              minutes: ot(l),
              seconds: 0
            };
            return a.value.enabled ? [C[g], C[g]] : C[g];
          },
          u = e.reactive({
            hours: c('hours'),
            minutes: c('minutes'),
            seconds: c('seconds')
          });
        e.watch(a, function (g, C) {
          g.enabled !== C.enabled && (u.hours = c('hours'), u.minutes = c('minutes'), u.seconds = c('seconds'));
        }, {
          deep: !0
        });
        var B = e.computed({
            get: function get() {
              return t.internalModelValue;
            },
            set: function set(g) {
              !t.readonly && !t.disabled && r('update:internal-model-value', g);
            }
          }),
          m = e.computed(function () {
            return function (g) {
              return s.value[g] ? s.value[g].month : 0;
            };
          }),
          S = e.computed(function () {
            return function (g) {
              return s.value[g] ? s.value[g].year : 0;
            };
          });
        return e.watch(B, function (g, C) {
          n && JSON.stringify(g !== null && g !== void 0 ? g : {}) !== JSON.stringify(C !== null && C !== void 0 ? C : {}) && n();
        }, {
          deep: !0
        }), {
          calendars: s,
          time: u,
          modelValue: B,
          month: m,
          year: S,
          today: l
        };
      },
      Zs = function Zs(t, r) {
        var _Me21 = Me(r),
          n = _Me21.defaultedMultiCalendars,
          a = _Me21.defaultedMultiDates,
          o = _Me21.defaultedUI,
          l = _Me21.defaultedHighlight,
          s = _Me21.defaultedTz,
          c = _Me21.propDates,
          u = _Me21.defaultedRange,
          _dt6 = dt(r),
          B = _dt6.isDisabled,
          m = e.ref(null),
          S = e.ref(Fe(new Date(), s.value.timezone)),
          g = function g(f) {
            !f.current && r.hideOffsetDates || (m.value = f.value);
          },
          C = function C() {
            m.value = null;
          },
          Y = function Y(f) {
            return Array.isArray(t.value) && u.value.enabled && t.value[0] && m.value ? f ? $e(m.value, t.value[0]) : Ce(m.value, t.value[0]) : !0;
          },
          x = function x(f, v) {
            var V = function V() {
                return t.value ? v ? t.value[0] || null : t.value[1] : null;
              },
              d = t.value && Array.isArray(t.value) ? V() : null;
            return pe(j(f.value), d);
          },
          I = function I(f) {
            var _m$value;
            var v = Array.isArray(t.value) ? t.value[0] : null;
            return f ? !Ce((_m$value = m.value) !== null && _m$value !== void 0 ? _m$value : null, v) : !0;
          },
          p = function p(f) {
            var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return (u.value.enabled || r.weekPicker) && Array.isArray(t.value) && t.value.length === 2 ? r.hideOffsetDates && !f.current ? !1 : pe(j(f.value), t.value[v ? 0 : 1]) : u.value.enabled ? x(f, v) && I(v) || pe(f.value, Array.isArray(t.value) ? t.value[0] : null) && Y(v) : !1;
          },
          $ = function $(f, v) {
            if (Array.isArray(t.value) && t.value[0] && t.value.length === 1) {
              var V = pe(f.value, m.value);
              return v ? $e(t.value[0], f.value) && V : Ce(t.value[0], f.value) && V;
            }
            return !1;
          },
          P = function P(f) {
            return !t.value || r.hideOffsetDates && !f.current ? !1 : u.value.enabled ? r.modelAuto && Array.isArray(t.value) ? pe(f.value, t.value[0] ? t.value[0] : S.value) : !1 : a.value.enabled && Array.isArray(t.value) ? t.value.some(function (v) {
              return pe(v, f.value);
            }) : pe(f.value, t.value ? t.value : S.value);
          },
          z = function z(f) {
            if (u.value.autoRange || r.weekPicker) {
              if (m.value) {
                if (r.hideOffsetDates && !f.current) return !1;
                var v = We(m.value, +u.value.autoRange),
                  V = nt(j(m.value), r.weekStart);
                return r.weekPicker ? pe(V[1], j(f.value)) : pe(v, j(f.value));
              }
              return !1;
            }
            return !1;
          },
          K = function K(f) {
            if (u.value.autoRange || r.weekPicker) {
              if (m.value) {
                var v = We(m.value, +u.value.autoRange);
                if (r.hideOffsetDates && !f.current) return !1;
                var V = nt(j(m.value), r.weekStart);
                return r.weekPicker ? $e(f.value, V[0]) && Ce(f.value, V[1]) : $e(f.value, m.value) && Ce(f.value, v);
              }
              return !1;
            }
            return !1;
          },
          Z = function Z(f) {
            if (u.value.autoRange || r.weekPicker) {
              if (m.value) {
                if (r.hideOffsetDates && !f.current) return !1;
                var v = nt(j(m.value), r.weekStart);
                return r.weekPicker ? pe(v[0], f.value) : pe(m.value, f.value);
              }
              return !1;
            }
            return !1;
          },
          O = function O(f) {
            return Gt(t.value, m.value, f.value);
          },
          D = function D() {
            return r.modelAuto && Array.isArray(r.internalModelValue) ? !!r.internalModelValue[0] : !1;
          },
          W = function W() {
            return r.modelAuto ? Aa(r.internalModelValue) : !0;
          },
          E = function E(f) {
            if (r.weekPicker) return !1;
            var v = u.value.enabled ? !p(f) && !p(f, !1) : !0;
            return !B(f.value) && !P(f) && !(!f.current && r.hideOffsetDates) && v;
          },
          Q = function Q(f) {
            return u.value.enabled ? r.modelAuto ? D() && P(f) : !1 : P(f);
          },
          re = function re(f) {
            return l.value ? wl(f.value, c.value.highlight) : !1;
          },
          le = function le(f) {
            var v = B(f.value);
            return v && (typeof l.value == 'function' ? !l.value(f.value, v) : !l.value.options.highlightDisabled);
          },
          b = function b(f) {
            var v;
            return typeof l.value == 'function' ? l.value(f.value) : (v = l.value.weekdays) == null ? void 0 : v.includes(f.value.getDay());
          },
          H = function H(f) {
            return (u.value.enabled || r.weekPicker) && (!(n.value.count > 0) || f.current) && W() && !(!f.current && r.hideOffsetDates) && !P(f) ? O(f) : !1;
          },
          X = function X(f) {
            var _J4 = J(f),
              v = _J4.isRangeStart,
              V = _J4.isRangeEnd,
              d = u.value.enabled ? v || V : !1;
            return {
              dp__cell_offset: !f.current,
              dp__pointer: !r.disabled && !(!f.current && r.hideOffsetDates) && !B(f.value),
              dp__cell_disabled: B(f.value),
              dp__cell_highlight: !le(f) && (re(f) || b(f)) && !Q(f) && !d && !Z(f) && !(H(f) && r.weekPicker) && !V,
              dp__cell_highlight_active: !le(f) && (re(f) || b(f)) && Q(f),
              dp__today: !r.noToday && pe(f.value, S.value) && f.current,
              'dp--past': Ce(f.value, S.value),
              'dp--future': $e(f.value, S.value)
            };
          },
          w = function w(f) {
            return {
              dp__active_date: Q(f),
              dp__date_hover: E(f)
            };
          },
          G = function G(f) {
            if (t.value && !Array.isArray(t.value)) {
              var v = nt(t.value, r.weekStart);
              return _objectSpread(_objectSpread({}, h(f)), {}, {
                dp__range_start: pe(v[0], f.value),
                dp__range_end: pe(v[1], f.value),
                dp__range_between_week: $e(f.value, v[0]) && Ce(f.value, v[1])
              });
            }
            return _objectSpread({}, h(f));
          },
          N = function N(f) {
            if (t.value && Array.isArray(t.value)) {
              var v = nt(t.value[0], r.weekStart),
                V = t.value[1] ? nt(t.value[1], r.weekStart) : [];
              return _objectSpread(_objectSpread({}, h(f)), {}, {
                dp__range_start: pe(v[0], f.value) || pe(V[0], f.value),
                dp__range_end: pe(v[1], f.value) || pe(V[1], f.value),
                dp__range_between_week: $e(f.value, v[0]) && Ce(f.value, v[1]) || $e(f.value, V[0]) && Ce(f.value, V[1]),
                dp__range_between: $e(f.value, v[1]) && Ce(f.value, V[0])
              });
            }
            return _objectSpread({}, h(f));
          },
          J = function J(f) {
            var v = n.value.count > 0 ? f.current && p(f) && W() : p(f) && W(),
              V = n.value.count > 0 ? f.current && p(f, !1) && W() : p(f, !1) && W();
            return {
              isRangeStart: v,
              isRangeEnd: V
            };
          },
          se = function se(f) {
            var _J5 = J(f),
              v = _J5.isRangeStart,
              V = _J5.isRangeEnd;
            return {
              dp__range_start: v,
              dp__range_end: V,
              dp__range_between: H(f),
              dp__date_hover: pe(f.value, m.value) && !v && !V && !r.weekPicker,
              dp__date_hover_start: $(f, !0),
              dp__date_hover_end: $(f, !1)
            };
          },
          h = function h(f) {
            return _objectSpread(_objectSpread({}, se(f)), {}, {
              dp__cell_auto_range: K(f),
              dp__cell_auto_range_start: Z(f),
              dp__cell_auto_range_end: z(f)
            });
          },
          y = function y(f) {
            return u.value.enabled ? u.value.autoRange ? h(f) : r.modelAuto ? _objectSpread(_objectSpread({}, w(f)), se(f)) : r.weekPicker ? N(f) : se(f) : r.weekPicker ? G(f) : w(f);
          };
        return {
          setHoverDate: g,
          clearHoverDate: C,
          getDayClassData: function getDayClassData(f) {
            var _o$value$calendarCell;
            return r.hideOffsetDates && !f.current ? {} : _objectSpread(_objectSpread(_objectSpread({}, X(f)), y(f)), {}, babelHelpers.defineProperty({}, r.dayClass ? r.dayClass(f.value, r.internalModelValue) : '', !0), (_o$value$calendarCell = o.value.calendarCell) !== null && _o$value$calendarCell !== void 0 ? _o$value$calendarCell : {});
          }
        };
      },
      dt = function dt(t) {
        var _Me22 = Me(t),
          r = _Me22.defaultedFilters,
          n = _Me22.defaultedRange,
          a = _Me22.propDates,
          o = _Me22.defaultedMultiDates,
          l = function l(b) {
            return a.value.disabledDates ? typeof a.value.disabledDates == 'function' ? a.value.disabledDates(j(b)) : !!Qt(b, a.value.disabledDates) : !1;
          },
          s = function s(b) {
            return a.value.maxDate ? t.yearPicker ? ce(b) > ce(a.value.maxDate) : $e(b, a.value.maxDate) : !1;
          },
          c = function c(b) {
            return a.value.minDate ? t.yearPicker ? ce(b) < ce(a.value.minDate) : Ce(b, a.value.minDate) : !1;
          },
          u = function u(b) {
            var H = s(b),
              X = c(b),
              w = l(b),
              N = r.value.months.map(function (L) {
                return +L;
              }).includes(he(b)),
              J = t.disabledWeekDays.length ? t.disabledWeekDays.some(function (L) {
                return +L === oo(b);
              }) : !1,
              se = C(b),
              h = ce(b),
              y = h < +t.yearRange[0] || h > +t.yearRange[1];
            return !(H || X || w || N || y || J || se);
          },
          B = function B(b, H) {
            return Ce.apply(void 0, babelHelpers.toConsumableArray(it(a.value.minDate, b, H))) || pe.apply(void 0, babelHelpers.toConsumableArray(it(a.value.minDate, b, H)));
          },
          m = function m(b, H) {
            return $e.apply(void 0, babelHelpers.toConsumableArray(it(a.value.maxDate, b, H))) || pe.apply(void 0, babelHelpers.toConsumableArray(it(a.value.maxDate, b, H)));
          },
          S = function S(b, H, X) {
            var w = !1;
            return a.value.maxDate && X && m(b, H) && (w = !0), a.value.minDate && !X && B(b, H) && (w = !0), w;
          },
          g = function g(b, H, X, w) {
            var G = !1;
            return w && (a.value.minDate || a.value.maxDate) ? a.value.minDate && a.value.maxDate ? G = S(b, H, X) : (a.value.minDate && B(b, H) || a.value.maxDate && m(b, H)) && (G = !0) : G = !0, G;
          },
          C = function C(b) {
            return Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !Qt(b, a.value.allowedDates) : !1;
          },
          Y = function Y(b) {
            return !u(b);
          },
          x = function x(b) {
            return n.value.noDisabledRange ? !sa({
              start: b[0],
              end: b[1]
            }).some(function (X) {
              return Y(X);
            }) : !0;
          },
          I = function I(b) {
            if (b) {
              var H = ce(b);
              return H >= +t.yearRange[0] && H <= t.yearRange[1];
            }
            return !0;
          },
          p = function p(b, H) {
            return !!(Array.isArray(b) && b[H] && (n.value.maxRange || n.value.minRange) && I(b[H]));
          },
          $ = function $(b, H) {
            var X = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            if (p(H, X) && I(b)) {
              var w = aa(b, H[X]),
                G = Ia(H[X], b),
                N = G.length === 1 ? 0 : G.filter(function (se) {
                  return Y(se);
                }).length,
                _J6 = Math.abs(w) - (n.value.minMaxRawRange ? 0 : N);
              if (n.value.minRange && n.value.maxRange) return _J6 >= +n.value.minRange && _J6 <= +n.value.maxRange;
              if (n.value.minRange) return _J6 >= +n.value.minRange;
              if (n.value.maxRange) return _J6 <= +n.value.maxRange;
            }
            return !0;
          },
          P = function P() {
            return !t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation;
          },
          z = function z(b) {
            return Array.isArray(b) ? [b[0] ? On(b[0]) : null, b[1] ? On(b[1]) : null] : On(b);
          },
          K = function K(b, H, X) {
            return b.find(function (w) {
              return +w.hours === tt(H) && w.minutes === '*' ? !0 : +w.minutes === ot(H) && +w.hours === tt(H);
            }) && X;
          },
          Z = function Z(b, H, X) {
            var _b = babelHelpers.slicedToArray(b, 2),
              w = _b[0],
              G = _b[1],
              _H = babelHelpers.slicedToArray(H, 2),
              N = _H[0],
              J = _H[1];
            return !K(w, N, X) && !K(G, J, X) && X;
          },
          O = function O(b, H) {
            var X = Array.isArray(H) ? H : [H];
            return Array.isArray(t.disabledTimes) ? Array.isArray(t.disabledTimes[0]) ? Z(t.disabledTimes, X, b) : !X.some(function (w) {
              return K(t.disabledTimes, w, b);
            }) : b;
          },
          D = function D(b, H) {
            var X = Array.isArray(H) ? [kt(H[0]), H[1] ? kt(H[1]) : void 0] : kt(H),
              w = !t.disabledTimes(X);
            return b && w;
          },
          W = function W(b, H) {
            return t.disabledTimes ? Array.isArray(t.disabledTimes) ? O(H, b) : D(H, b) : H;
          },
          E = function E(b) {
            var H = !0;
            if (!b || P()) return !0;
            var X = !a.value.minDate && !a.value.maxDate ? z(b) : b;
            return (t.maxTime || a.value.maxDate) && (H = za(t.maxTime, a.value.maxDate, 'max', Ne(X), H)), (t.minTime || a.value.minDate) && (H = za(t.minTime, a.value.minDate, 'min', Ne(X), H)), W(b, H);
          },
          Q = function Q(b) {
            if (!t.monthPicker) return !0;
            var H = !0;
            var X = j(Qe(b));
            if (a.value.minDate && a.value.maxDate) {
              var w = j(Qe(a.value.minDate)),
                G = j(Qe(a.value.maxDate));
              return $e(X, w) && Ce(X, G) || pe(X, w) || pe(X, G);
            }
            if (a.value.minDate) {
              var _w = j(Qe(a.value.minDate));
              H = $e(X, _w) || pe(X, _w);
            }
            if (a.value.maxDate) {
              var _w2 = j(Qe(a.value.maxDate));
              H = Ce(X, _w2) || pe(X, _w2);
            }
            return H;
          },
          re = e.computed(function () {
            return function (b) {
              return !t.enableTimePicker || t.ignoreTimeValidation ? !0 : E(b);
            };
          }),
          le = e.computed(function () {
            return function (b) {
              return t.monthPicker ? Array.isArray(b) && (n.value.enabled || o.value.enabled) ? !b.filter(function (X) {
                return !Q(X);
              }).length : Q(b) : !0;
            };
          });
        return {
          isDisabled: Y,
          validateDate: u,
          validateMonthYearInRange: g,
          isDateRangeAllowed: x,
          checkMinMaxRange: $,
          isValidTime: E,
          isTimeValid: re,
          isMonthValid: le
        };
      },
      tn = function tn() {
        var t = e.computed(function () {
            return function (a, o) {
              return a == null ? void 0 : a.includes(o);
            };
          }),
          r = e.computed(function () {
            return function (a, o) {
              return a.count ? a.solo ? !0 : o === 0 : !0;
            };
          }),
          n = e.computed(function () {
            return function (a, o) {
              return a.count ? a.solo ? !0 : o === a.count - 1 : !0;
            };
          });
        return {
          hideNavigationButtons: t,
          showLeftIcon: r,
          showRightIcon: n
        };
      },
      ei = function ei(t, r, n) {
        var _e$reactive;
        var a = e.ref(0),
          o = e.reactive((_e$reactive = {}, babelHelpers.defineProperty(_e$reactive, wt.timePicker, !t.enableTimePicker || t.timePicker || t.monthPicker), babelHelpers.defineProperty(_e$reactive, wt.calendar, !1), babelHelpers.defineProperty(_e$reactive, wt.header, !1), _e$reactive)),
          l = e.computed(function () {
            return t.monthPicker || t.timePicker;
          }),
          s = function s(S) {
            var g;
            if ((g = t.flow) != null && g.length) {
              if (!S && l.value) return m();
              o[S] = !0, Object.keys(o).filter(function (C) {
                return !o[C];
              }).length || m();
            }
          },
          c = function c() {
            var S, g;
            (S = t.flow) != null && S.length && a.value !== -1 && (a.value += 1, r('flow-step', a.value), m()), ((g = t.flow) == null ? void 0 : g.length) === a.value && e.nextTick().then(function () {
              return u();
            });
          },
          u = function u() {
            a.value = -1;
          },
          B = function B(S, g) {
            var _x9;
            var Y, x;
            for (var _len2 = arguments.length, C = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              C[_key2 - 2] = arguments[_key2];
            }
            t.flow[a.value] === S && n.value && ((x = (Y = n.value)[g]) == null || (_x9 = x).call.apply(_x9, [Y].concat(C)));
          },
          m = function m() {
            var S = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            S && (a.value += S), B(Re.month, 'toggleMonthPicker', !0), B(Re.year, 'toggleYearPicker', !0), B(Re.calendar, 'toggleTimePicker', !1, !0), B(Re.time, 'toggleTimePicker', !0, !0);
            var g = t.flow[a.value];
            (g === Re.hours || g === Re.minutes || g === Re.seconds) && B(g, 'toggleTimePicker', !0, !0, g);
          };
        return {
          childMount: s,
          updateFlowStep: c,
          resetFlow: u,
          handleFlow: m,
          flowStep: a
        };
      },
      ti = {
        key: 1,
        "class": 'dp__input_wrap'
      },
      ni = ['id', 'name', 'inputmode', 'placeholder', 'disabled', 'readonly', 'required', 'value', 'autocomplete', 'aria-disabled', 'aria-invalid'],
      ai = {
        key: 2,
        "class": 'dp--clear-btn'
      },
      ri = ['aria-label'],
      oi = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'DatepickerInput',
        props: _objectSpread({
          isMenuOpen: {
            type: Boolean,
            "default": !1
          },
          inputValue: {
            type: String,
            "default": ''
          }
        }, Jt),
        emits: ['clear', 'open', 'update:input-value', 'set-input-date', 'close', 'select-date', 'set-empty-date', 'toggle', 'focus-prev', 'focus', 'blur', 'real-blur', 'text-input'],
        setup: function setup(t, _ref83) {
          var r = _ref83.expose,
            n = _ref83.emit;
          var a = n,
            o = t,
            _Me23 = Me(o),
            l = _Me23.defaultedTextInput,
            s = _Me23.defaultedAriaLabels,
            c = _Me23.defaultedInline,
            u = _Me23.defaultedConfig,
            B = _Me23.defaultedRange,
            m = _Me23.defaultedMultiDates,
            S = _Me23.defaultedUI,
            g = _Me23.getDefaultPattern,
            C = _Me23.getDefaultStartTime,
            _dt7 = dt(o),
            Y = _dt7.checkMinMaxRange,
            x = e.ref(),
            I = e.ref(null),
            p = e.ref(!1),
            $ = e.ref(!1),
            P = e.ref(!1),
            z = e.ref(null),
            K = e.computed(function () {
              var _S$value$input;
              return _objectSpread({
                dp__pointer: !o.disabled && !o.readonly && !l.value.enabled,
                dp__disabled: o.disabled,
                dp__input_readonly: !l.value.enabled,
                dp__input: !0,
                dp__input_icon_pad: !o.hideInputIcon,
                dp__input_valid: typeof o.state == 'boolean' ? o.state : !1,
                dp__input_invalid: typeof o.state == 'boolean' ? !o.state : !1,
                dp__input_focus: p.value || o.isMenuOpen,
                dp__input_reg: !l.value.enabled
              }, (_S$value$input = S.value.input) !== null && _S$value$input !== void 0 ? _S$value$input : {});
            }),
            Z = function Z() {
              a('set-input-date', null), o.clearable && o.autoApply && (a('set-empty-date'), x.value = null);
            },
            O = function O(h) {
              var _l$value$format;
              var y = C();
              return kl(h, (_l$value$format = l.value.format) !== null && _l$value$format !== void 0 ? _l$value$format : g(), y !== null && y !== void 0 ? y : Fa({}, o.enableSeconds), o.inputValue, P.value, o.formatLocale);
            },
            D = function D(h) {
              var y = l.value.rangeSeparator,
                _h$split = h.split("".concat(y)),
                _h$split2 = babelHelpers.slicedToArray(_h$split, 2),
                L = _h$split2[0],
                f = _h$split2[1];
              if (L) {
                var v = O(L.trim()),
                  V = f ? O(f.trim()) : null;
                if (Pt(v, V)) return;
                var d = v && V ? [v, V] : [v];
                Y(V, d, 0) && (x.value = v ? d : null);
              }
            },
            W = function W() {
              P.value = !0;
            },
            E = function E(h) {
              if (B.value.enabled) D(h);else if (m.value.enabled) {
                var y = h.split(';');
                x.value = y.map(function (L) {
                  return O(L.trim());
                }).filter(function (L) {
                  return L;
                });
              } else x.value = O(h);
            },
            Q = function Q(h) {
              var L;
              var y = typeof h == 'string' ? h : (L = h.target) == null ? void 0 : L.value;
              y !== '' ? (l.value.openMenu && !o.isMenuOpen && a('open'), E(y), a('set-input-date', x.value)) : Z(), P.value = !1, a('update:input-value', y), a('text-input', h, x.value);
            },
            re = function re(h) {
              l.value.enabled ? (E(h.target.value), l.value.enterSubmit && $n(x.value) && o.inputValue !== '' ? (a('set-input-date', x.value, !0), x.value = null) : l.value.enterSubmit && o.inputValue === '' && (x.value = null, a('clear'))) : H(h);
            },
            le = function le(h, y) {
              var L;
              z.value && y && !$.value && (h.preventDefault(), $.value = !0, (L = z.value) == null || L.focus()), l.value.enabled && l.value.tabSubmit && E(h.target.value), l.value.tabSubmit && $n(x.value) && o.inputValue !== '' ? (a('set-input-date', x.value, !0, !0), x.value = null) : l.value.tabSubmit && o.inputValue === '' && (x.value = null, a('clear', !0));
            },
            b = function b() {
              p.value = !0, a('focus'), e.nextTick().then(function () {
                var h;
                l.value.enabled && l.value.selectOnFocus && ((h = I.value) == null || h.select());
              });
            },
            H = function H(h) {
              if (h.preventDefault(), lt(h, u.value, !0), l.value.enabled && l.value.openMenu && !c.value.input) {
                if (l.value.openMenu === 'open' && !o.isMenuOpen) return a('open');
                if (l.value.openMenu === 'toggle') return a('toggle');
              } else l.value.enabled || a('toggle');
            },
            X = function X() {
              a('real-blur'), p.value = !1, (!o.isMenuOpen || c.value.enabled && c.value.input) && a('blur'), o.autoApply && l.value.enabled && x.value && !o.isMenuOpen && (a('set-input-date', x.value), a('select-date'), x.value = null);
            },
            w = function w(h) {
              lt(h, u.value, !0), a('clear');
            },
            G = function G(h, y) {
              if (h.key === 'Tab' && le(h, y), h.key === 'Enter' && re(h), !l.value.enabled) {
                if (h.code === 'Tab') return;
                h.preventDefault();
              }
            },
            N = function N() {
              var h;
              (h = I.value) == null || h.focus({
                preventScroll: !0
              });
            },
            J = function J(h) {
              x.value = h;
            },
            se = function se(h) {
              h.key === ve.tab && ($.value = !1, le(h));
            };
          return r({
            focusInput: N,
            setParsedDate: J
          }), function (h, y) {
            var L, f;
            return e.openBlock(), e.createElementBlock('div', {
              onClick: H
            }, [h.$slots.trigger && !h.$slots['dp-input'] && !e.unref(c).enabled ? e.renderSlot(h.$slots, 'trigger', {
              key: 0
            }) : e.createCommentVNode('', !0), !h.$slots.trigger && (!e.unref(c).enabled || e.unref(c).input) ? (e.openBlock(), e.createElementBlock('div', ti, [h.$slots['dp-input'] && !h.$slots.trigger && (!e.unref(c).enabled || e.unref(c).enabled && e.unref(c).input) ? e.renderSlot(h.$slots, 'dp-input', {
              key: 0,
              value: t.inputValue,
              isMenuOpen: t.isMenuOpen,
              onInput: Q,
              onEnter: re,
              onTab: le,
              onClear: w,
              onBlur: X,
              onKeypress: G,
              onPaste: W,
              onFocus: b,
              openMenu: function openMenu() {
                return h.$emit('open');
              },
              closeMenu: function closeMenu() {
                return h.$emit('close');
              },
              toggleMenu: function toggleMenu() {
                return h.$emit('toggle');
              }
            }) : e.createCommentVNode('', !0), h.$slots['dp-input'] ? e.createCommentVNode('', !0) : (e.openBlock(), e.createElementBlock('input', {
              key: 1,
              id: h.uid ? "dp-input-".concat(h.uid) : void 0,
              ref_key: 'inputRef',
              ref: I,
              'data-test': 'dp-input',
              name: h.name,
              "class": e.normalizeClass(K.value),
              inputmode: e.unref(l).enabled ? 'text' : 'none',
              placeholder: h.placeholder,
              disabled: h.disabled,
              readonly: h.readonly,
              required: h.required,
              value: t.inputValue,
              autocomplete: h.autocomplete,
              'aria-disabled': h.disabled || void 0,
              'aria-invalid': h.state === !1 ? !0 : void 0,
              onInput: Q,
              onBlur: X,
              onFocus: b,
              onKeypress: G,
              onKeydown: y[0] || (y[0] = function (v) {
                return G(v, !0);
              }),
              onPaste: W
            }, null, 42, ni)), e.createElementVNode('div', {
              onClick: y[3] || (y[3] = function (v) {
                return a('toggle');
              })
            }, [h.$slots['input-icon'] && !h.hideInputIcon ? (e.openBlock(), e.createElementBlock('span', {
              key: 0,
              "class": 'dp__input_icon',
              onClick: y[1] || (y[1] = function (v) {
                return a('toggle');
              })
            }, [e.renderSlot(h.$slots, 'input-icon')])) : e.createCommentVNode('', !0), !h.$slots['input-icon'] && !h.hideInputIcon && !h.$slots['dp-input'] ? (e.openBlock(), e.createBlock(e.unref(Ie), {
              key: 1,
              'aria-label': (L = e.unref(s)) == null ? void 0 : L.calendarIcon,
              "class": 'dp__input_icon dp__input_icons',
              onClick: y[2] || (y[2] = function (v) {
                return a('toggle');
              })
            }, null, 8, ['aria-label'])) : e.createCommentVNode('', !0)]), h.$slots['clear-icon'] && t.inputValue && h.clearable && !h.disabled && !h.readonly ? (e.openBlock(), e.createElementBlock('span', ai, [e.renderSlot(h.$slots, 'clear-icon', {
              clear: w
            })])) : e.createCommentVNode('', !0), h.clearable && !h.$slots['clear-icon'] && t.inputValue && !h.disabled && !h.readonly ? (e.openBlock(), e.createElementBlock('button', {
              key: 3,
              ref_key: 'clearBtnRef',
              ref: z,
              'aria-label': (f = e.unref(s)) == null ? void 0 : f.clearInput,
              "class": 'dp--clear-btn',
              type: 'button',
              onBlur: y[4] || (y[4] = function (v) {
                return $.value = !1;
              }),
              onKeydown: y[5] || (y[5] = function (v) {
                return e.unref(xe)(v, function () {
                  return w(v);
                }, !0, se);
              }),
              onClick: y[6] || (y[6] = e.withModifiers(function (v) {
                return w(v);
              }, ['prevent']))
            }, [e.createVNode(e.unref(mt), {
              "class": 'dp__input_icons',
              'data-test': 'clear-icon'
            })], 40, ri)) : e.createCommentVNode('', !0)])) : e.createCommentVNode('', !0)]);
          };
        }
      }),
      li = (typeof window === "undefined" ? "undefined" : babelHelpers["typeof"](window)) < 'u' ? window : void 0,
      Ln = function Ln() {},
      si = function si(t) {
        return e.getCurrentScope() ? (e.onScopeDispose(t), !0) : !1;
      },
      ii = function ii(t, r, n, a) {
        if (!t) return Ln;
        var _o2 = Ln;
        var l = e.watch(function () {
            return e.unref(t);
          }, function (c) {
            _o2(), c && (c.addEventListener(r, n, a), _o2 = function o() {
              c.removeEventListener(r, n, a), _o2 = Ln;
            });
          }, {
            immediate: !0,
            flush: 'post'
          }),
          s = function s() {
            l(), _o2();
          };
        return si(s), s;
      },
      ui = function ui(t, r, n) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _a$window = a.window,
          o = _a$window === void 0 ? li : _a$window,
          _a$event = a.event,
          l = _a$event === void 0 ? 'pointerdown' : _a$event;
        return o ? ii(o, l, function (c) {
          var u = Oe(t),
            B = Oe(r);
          !u || !B || u === c.target || c.composedPath().includes(u) || c.composedPath().includes(B) || n(c);
        }, {
          passive: !0
        }) : void 0;
      },
      ci = e.defineComponent({
        compatConfig: {
          MODE: 3
        },
        __name: 'VueDatePicker',
        props: _objectSpread({}, Jt),
        emits: ['update:model-value', 'update:model-timezone-value', 'text-submit', 'closed', 'cleared', 'open', 'focus', 'blur', 'internal-model-change', 'recalculate-position', 'flow-step', 'update-month-year', 'invalid-select', 'invalid-fixed-range', 'tooltip-open', 'tooltip-close', 'time-picker-open', 'time-picker-close', 'am-pm-change', 'range-start', 'range-end', 'date-update', 'invalid-date', 'overlay-toggle', 'text-input'],
        setup: function setup(t, _ref84) {
          var r = _ref84.expose,
            n = _ref84.emit;
          var a = n,
            o = t,
            l = e.useSlots(),
            s = e.ref(!1),
            c = e.toRef(o, 'modelValue'),
            u = e.toRef(o, 'timezone'),
            B = e.ref(null),
            m = e.ref(null),
            S = e.ref(null),
            g = e.ref(!1),
            C = e.ref(null),
            Y = e.ref(!1),
            x = e.ref(!1),
            I = e.ref(!1),
            p = e.ref(!1),
            _Ua2 = Ua(),
            $ = _Ua2.setMenuFocused,
            P = _Ua2.setShiftKey,
            _ut8 = ut(),
            z = _ut8.clearArrowNav,
            _dt8 = dt(o),
            K = _dt8.validateDate,
            Z = _dt8.isValidTime,
            _Me24 = Me(o),
            O = _Me24.defaultedTransitions,
            D = _Me24.defaultedTextInput,
            W = _Me24.defaultedInline,
            E = _Me24.defaultedConfig,
            Q = _Me24.defaultedRange,
            re = _Me24.defaultedMultiDates,
            _Lt5 = Lt(O),
            le = _Lt5.menuTransition,
            b = _Lt5.showTransition;
          e.onMounted(function () {
            f(o.modelValue), e.nextTick().then(function () {
              if (!W.value.enabled) {
                var k = se(C.value);
                k == null || k.addEventListener('scroll', R), window == null || window.addEventListener('resize', q);
              }
            }), W.value.enabled && (s.value = !0), window == null || window.addEventListener('keyup', ne), window == null || window.addEventListener('keydown', T);
          }), e.onUnmounted(function () {
            if (!W.value.enabled) {
              var k = se(C.value);
              k == null || k.removeEventListener('scroll', R), window == null || window.removeEventListener('resize', q);
            }
            window == null || window.removeEventListener('keyup', ne), window == null || window.removeEventListener('keydown', T);
          });
          var H = Le(l, 'all', o.presetDates),
            X = Le(l, 'input');
          e.watch([c, u], function () {
            f(c.value);
          }, {
            deep: !0
          });
          var _Ks = Ks({
              menuRef: B,
              menuRefInner: m,
              inputRef: S,
              pickerWrapperRef: C,
              inline: W,
              emit: a,
              props: o,
              slots: l
            }),
            w = _Ks.openOnTop,
            G = _Ks.menuStyle,
            N = _Ks.xCorrect,
            J = _Ks.setMenuPosition,
            se = _Ks.getScrollableParent,
            h = _Ks.shadowRender,
            _zl = zl(a, o, g),
            y = _zl.inputValue,
            L = _zl.internalModelValue,
            f = _zl.parseExternalModelValue,
            v = _zl.emitModelValue,
            V = _zl.formatInputValue,
            d = _zl.checkBeforeEmit,
            ee = e.computed(function () {
              return {
                dp__main: !0,
                dp__theme_dark: o.dark,
                dp__theme_light: !o.dark,
                dp__flex_display: W.value.enabled,
                'dp--flex-display-collapsed': I.value,
                dp__flex_display_with_input: W.value.input
              };
            }),
            de = e.computed(function () {
              return o.dark ? 'dp__theme_dark' : 'dp__theme_light';
            }),
            A = e.computed(function () {
              return o.teleport ? {
                to: typeof o.teleport == 'boolean' ? 'body' : o.teleport,
                disabled: !o.teleport || W.value.enabled
              } : {};
            }),
            fe = e.computed(function () {
              return {
                "class": 'dp__outer_menu_wrap'
              };
            }),
            i = e.computed(function () {
              return W.value.enabled && (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker);
            }),
            _ = function _() {
              var k, U;
              return (U = (k = S.value) == null ? void 0 : k.$el) == null ? void 0 : U.getBoundingClientRect();
            },
            R = function R() {
              s.value && (E.value.closeOnScroll ? He() : J());
            },
            q = function q() {
              var U;
              s.value && J();
              var k = (U = m.value) == null ? void 0 : U.$el.getBoundingClientRect().width;
              I.value = document.body.offsetWidth <= k;
            },
            ne = function ne(k) {
              k.key === 'Tab' && !W.value.enabled && !o.teleport && E.value.tabOutClosesMenu && (C.value.contains(document.activeElement) || He()), x.value = k.shiftKey;
            },
            T = function T(k) {
              x.value = k.shiftKey;
            },
            F = function F() {
              !o.disabled && !o.readonly && (h(nr, o), J(!1), s.value = !0, s.value && a('open'), s.value || zt(), f(o.modelValue));
            },
            ie = function ie() {
              var k;
              y.value = '', zt(), (k = S.value) == null || k.setParsedDate(null), a('update:model-value', null), a('update:model-timezone-value', null), a('cleared'), E.value.closeOnClearValue && He();
            },
            me = function me() {
              var k = L.value;
              return !k || !Array.isArray(k) && K(k) ? !0 : Array.isArray(k) ? re.value.enabled || k.length === 2 && K(k[0]) && K(k[1]) ? !0 : Q.value.partialRange && !o.timePicker ? K(k[0]) : !1 : !1;
            },
            ze = function ze() {
              d() && me() ? (v(), He()) : a('invalid-select', L.value);
            },
            ue = function ue(k) {
              ft(), v(), E.value.closeOnAutoApply && !k && He();
            },
            ft = function ft() {
              S.value && D.value.enabled && S.value.setParsedDate(L.value);
            },
            et = function et() {
              var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              o.autoApply && Z(L.value) && me() && (Q.value.enabled && Array.isArray(L.value) ? (Q.value.partialRange || L.value.length === 2) && ue(k) : ue(k));
            },
            zt = function zt() {
              D.value.enabled || (L.value = null);
            },
            He = function He() {
              W.value.enabled || (s.value && (s.value = !1, N.value = !1, $(!1), P(!1), z(), a('closed'), y.value && f(c.value)), zt(), a('blur'));
            },
            Wt = function Wt(k, U) {
              var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              if (!k) {
                L.value = null;
                return;
              }
              var ke = Array.isArray(k) ? !k.some(function (bt) {
                  return !K(bt);
                }) : K(k),
                Ee = Z(k);
              ke && Ee && (p.value = !0, L.value = k, U && (Y.value = te, ze(), a('text-submit')), e.nextTick().then(function () {
                p.value = !1;
              }));
            },
            zn = function zn() {
              o.autoApply && Z(L.value) && v(), ft();
            },
            nn = function nn() {
              return s.value ? He() : F();
            },
            Wn = function Wn(k) {
              L.value = k;
            },
            qn = function qn() {
              D.value.enabled && (g.value = !0, V()), a('focus');
            },
            Un = function Un() {
              if (D.value.enabled && (g.value = !1, f(o.modelValue), Y.value)) {
                var k = yl(C.value, x.value);
                k == null || k.focus();
              }
              a('blur');
            },
            jn = function jn(k) {
              m.value && m.value.updateMonthYear(0, {
                month: Na(k.month),
                year: Na(k.year)
              });
            },
            Qn = function Qn(k) {
              f(k !== null && k !== void 0 ? k : o.modelValue);
            },
            Gn = function Gn(k, U) {
              var te;
              (te = m.value) == null || te.switchView(k, U);
            },
            ar = function ar(k) {
              return E.value.onClickOutside ? E.value.onClickOutside(k) : He();
            },
            M = function M() {
              var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var U;
              (U = m.value) == null || U.handleFlow(k);
            };
          return ui(B, S, function () {
            return ar(me);
          }), r({
            closeMenu: He,
            selectDate: ze,
            clearValue: ie,
            openMenu: F,
            onScroll: R,
            formatInputValue: V,
            updateInternalModelValue: Wn,
            setMonthYear: jn,
            parseModel: Qn,
            switchView: Gn,
            toggleMenu: nn,
            handleFlow: M,
            dpWrapMenuRef: B
          }), function (k, U) {
            return e.openBlock(), e.createElementBlock('div', {
              ref_key: 'pickerWrapperRef',
              ref: C,
              "class": e.normalizeClass(ee.value),
              'data-datepicker-instance': ''
            }, [e.createVNode(oi, e.mergeProps({
              ref_key: 'inputRef',
              ref: S,
              'input-value': e.unref(y),
              'onUpdate:inputValue': U[0] || (U[0] = function (te) {
                return e.isRef(y) ? y.value = te : null;
              }),
              'is-menu-open': s.value
            }, k.$props, {
              onClear: ie,
              onOpen: F,
              onSetInputDate: Wt,
              onSetEmptyDate: e.unref(v),
              onSelectDate: ze,
              onToggle: nn,
              onClose: He,
              onFocus: qn,
              onBlur: Un,
              onRealBlur: U[1] || (U[1] = function (te) {
                return g.value = !1;
              }),
              onTextInput: U[2] || (U[2] = function (te) {
                return k.$emit('text-input', te);
              })
            }), e.createSlots({
              _: 2
            }, [e.renderList(e.unref(X), function (te, ke) {
              return {
                name: te,
                fn: e.withCtx(function (Ee) {
                  return [e.renderSlot(k.$slots, te, e.normalizeProps(e.guardReactiveProps(Ee)))];
                })
              };
            })]), 1040, ['input-value', 'is-menu-open', 'onSetEmptyDate']), (e.openBlock(), e.createBlock(e.resolveDynamicComponent(k.teleport ? e.Teleport : 'div'), e.normalizeProps(e.guardReactiveProps(A.value)), {
              "default": e.withCtx(function () {
                return [e.createVNode(e.Transition, {
                  name: e.unref(le)(e.unref(w)),
                  css: e.unref(b) && !e.unref(W).enabled
                }, {
                  "default": e.withCtx(function () {
                    var _class;
                    return [s.value ? (e.openBlock(), e.createElementBlock('div', e.mergeProps({
                      key: 0,
                      ref_key: 'dpWrapMenuRef',
                      ref: B
                    }, fe.value, {
                      "class": {
                        'dp--menu-wrapper': !e.unref(W).enabled
                      },
                      style: e.unref(W).enabled ? void 0 : e.unref(G)
                    }), [e.createVNode(nr, e.mergeProps({
                      ref_key: 'dpMenuRef',
                      ref: m
                    }, k.$props, {
                      'internal-model-value': e.unref(L),
                      'onUpdate:internalModelValue': U[3] || (U[3] = function (te) {
                        return e.isRef(L) ? L.value = te : null;
                      }),
                      "class": (_class = {}, babelHelpers.defineProperty(_class, de.value, !0), babelHelpers.defineProperty(_class, 'dp--menu-wrapper', k.teleport), _class),
                      'open-on-top': e.unref(w),
                      'no-overlay-focus': i.value,
                      collapse: I.value,
                      'get-input-rect': _,
                      'is-text-input-date': p.value,
                      onClosePicker: He,
                      onSelectDate: ze,
                      onAutoApply: et,
                      onTimeUpdate: zn,
                      onFlowStep: U[4] || (U[4] = function (te) {
                        return k.$emit('flow-step', te);
                      }),
                      onUpdateMonthYear: U[5] || (U[5] = function (te) {
                        return k.$emit('update-month-year', te);
                      }),
                      onInvalidSelect: U[6] || (U[6] = function (te) {
                        return k.$emit('invalid-select', e.unref(L));
                      }),
                      onAutoApplyInvalid: U[7] || (U[7] = function (te) {
                        return k.$emit('invalid-select', te);
                      }),
                      onInvalidFixedRange: U[8] || (U[8] = function (te) {
                        return k.$emit('invalid-fixed-range', te);
                      }),
                      onRecalculatePosition: e.unref(J),
                      onTooltipOpen: U[9] || (U[9] = function (te) {
                        return k.$emit('tooltip-open', te);
                      }),
                      onTooltipClose: U[10] || (U[10] = function (te) {
                        return k.$emit('tooltip-close', te);
                      }),
                      onTimePickerOpen: U[11] || (U[11] = function (te) {
                        return k.$emit('time-picker-open', te);
                      }),
                      onTimePickerClose: U[12] || (U[12] = function (te) {
                        return k.$emit('time-picker-close', te);
                      }),
                      onAmPmChange: U[13] || (U[13] = function (te) {
                        return k.$emit('am-pm-change', te);
                      }),
                      onRangeStart: U[14] || (U[14] = function (te) {
                        return k.$emit('range-start', te);
                      }),
                      onRangeEnd: U[15] || (U[15] = function (te) {
                        return k.$emit('range-end', te);
                      }),
                      onDateUpdate: U[16] || (U[16] = function (te) {
                        return k.$emit('date-update', te);
                      }),
                      onInvalidDate: U[17] || (U[17] = function (te) {
                        return k.$emit('invalid-date', te);
                      }),
                      onOverlayToggle: U[18] || (U[18] = function (te) {
                        return k.$emit('overlay-toggle', te);
                      })
                    }), e.createSlots({
                      _: 2
                    }, [e.renderList(e.unref(H), function (te, ke) {
                      return {
                        name: te,
                        fn: e.withCtx(function (Ee) {
                          return [e.renderSlot(k.$slots, te, e.normalizeProps(e.guardReactiveProps(_objectSpread({}, Ee))))];
                        })
                      };
                    })]), 1040, ['internal-model-value', 'class', 'open-on-top', 'no-overlay-focus', 'collapse', 'is-text-input-date', 'onRecalculatePosition'])], 16)) : e.createCommentVNode('', !0)];
                  }),
                  _: 3
                }, 8, ['name', 'css'])];
              }),
              _: 3
            }, 16))], 2);
          };
        }
      }),
      Hn = function () {
        var t = ci;
        return t.install = function (r) {
          r.component('Vue3DatePicker', t);
        }, t;
      }();
    return Object.entries(Object.freeze(Object.defineProperty({
      __proto__: null,
      "default": Hn
    }, Symbol.toStringTag, {
      value: 'Module'
    }))).forEach(function (_ref85) {
      var _ref86 = babelHelpers.slicedToArray(_ref85, 2),
        t = _ref86[0],
        r = _ref86[1];
      t !== 'default' && (Hn[t] = r);
    }), Hn;
  }(window.BX.Vue3);

  var ControlDatepicker = VueDatePicker;

  exports.ControlDatepicker = ControlDatepicker;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
