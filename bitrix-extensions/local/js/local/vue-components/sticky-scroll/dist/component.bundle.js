/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var StickyScroll = {
    data: function data() {
      return {
        visible: true,
        clickThumbStep: 100,
        hoverSpaceStep: 10,
        hoverSpaceInterval: 30,
        hoverSpaceIntervalId: undefined,
        thumbClickedFlag: false,
        thumbClickedCoords: 0,
        resizeTimeoutId: undefined
      };
    },
    template: "\n    <div class=\"twpx-sticky-scroll\">\n      <div class=\"twpx-sticky-scroll-space-right\" ref=\"spaceRight\" @mouseover=\"spaceAndArrowMouseover('right')\" @mouseout=\"spaceAndArrowMouseout\" v-show=\"visible\"></div>\n      <div class=\"twpx-sticky-scroll-space-left\" ref=\"spaceLeft\" @mouseover=\"spaceAndArrowMouseover('left')\" @mouseout=\"spaceAndArrowMouseout\" v-show=\"visible\"></div>\n\n      <div class=\"twpx-sticky-scroll-arrows\" v-show=\"visible\">\n        <div class=\"twpx-sticky-scroll-arrow-right\" ref=\"arrowRight\" @mouseover=\"spaceAndArrowMouseover('right')\" @mouseout=\"spaceAndArrowMouseout\"></div>\n        <div class=\"twpx-sticky-scroll-arrow-left\" ref=\"arrowLeft\" @mouseover=\"spaceAndArrowMouseover('left')\" @mouseout=\"spaceAndArrowMouseout\"></div>\n      </div>\n\n      <div class=\"twpx-sticky-scroll-content-wrapper\" ref=\"contentWrapper\">\n        <div ref=\"content\">\n          <slot></slot>\n        </div>\n      </div>\n\n      <div class=\"twpx-sticky-scroll-scrollbar\" ref=\"scrollbar\" @click=\"scrollbarClick($event)\" v-show=\"visible\">\n        <div class=\"twpx-sticky-scroll-scrollbar-thumb\" ref=\"thumb\" @mousedown=\"thumbMousedown($event)\" @click=\"thumbClick($event)\"></div>\n      </div>\n    </div>\n  ",
    watch: {
      reInitWatcher: function reInitWatcher(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.setContentWidth();
        }
      }
    },
    methods: {
      init: function init() {
        if (window.matchMedia('(min-width: 768px)').matches) {
          this.setThumbWidth();
        }
      },
      setThumbWidth: function setThumbWidth() {
        var _this = this;
        var ratio = this.$refs.contentWrapper.clientWidth / this.$refs.content.clientWidth;
        this.visible = ratio < 1;
        if (this.visible) {
          setTimeout(function () {
            _this.$refs.thumb.style.width = "".concat(_this.$refs.scrollbar.clientWidth * ratio, "px");
            _this.setDelta();
          }, 0);
        }
      },
      setDelta: function setDelta() {
        this.scrollbarDelta = this.$refs.scrollbar.clientWidth - this.$refs.thumb.clientWidth;
        this.contentDelta = this.$refs.content.clientWidth - this.$refs.contentWrapper.clientWidth;
      },
      thumbMousedown: function thumbMousedown(e) {
        this.thumbClickedFlag = true;
        this.thumbClickedCoords = e.clientX - this.$refs.thumb.getBoundingClientRect().x;
      },
      thumbClick: function thumbClick(e) {
        e.stopPropagation();
      },
      scrollbarClick: function scrollbarClick(e) {
        e.preventDefault();
        var scrollbarX = this.$refs.scrollbar.getBoundingClientRect().x;
        var thumbX = this.$refs.thumb.getBoundingClientRect().x;
        var step = this.clickThumbStep;
        if (e.clientX - thumbX < 0) {
          step = -1 * this.clickThumbStep;
        }
        var left = thumbX - scrollbarX + step;
        this.moveThumbAndContent(left);
      },
      spaceAndArrowMouseover: function spaceAndArrowMouseover(type) {
        var _this2 = this;
        var step = this.hoverSpaceStep;
        if (type === 'left') {
          step = -1 * this.hoverSpaceStep;
        }
        this.hoverSpaceIntervalId = setInterval(function () {
          var left = _this2.$refs.contentWrapper.scrollLeft + step;
          _this2.moveContentAndThumb(left);
        }, this.hoverSpaceInterval);
      },
      spaceAndArrowMouseout: function spaceAndArrowMouseout() {
        clearInterval(this.hoverSpaceIntervalId);
      },
      moveThumbAndContent: function moveThumbAndContent(left) {
        if (left > this.scrollbarDelta) {
          left = this.scrollbarDelta;
        } else if (left < 0) {
          left = 0;
        }
        this.$refs.thumb.style.left = "".concat(left, "px");

        //move content
        var contentDelta;
        if (left === this.scrollbarDelta) {
          contentDelta = this.contentDelta;
        } else if (left === 0) {
          contentDelta = 0;
          left = 0;
        } else {
          contentDelta = left / this.scrollbarDelta * this.contentDelta;
        }
        this.$refs.contentWrapper.scrollTo(contentDelta, 0);
      },
      moveContentAndThumb: function moveContentAndThumb(left) {
        if (left > this.contentDelta) {
          left = this.contentDelta;
          clearInterval(this.hoverSpaceIntervalId);
        } else if (left < 0) {
          left = 0;
          clearInterval(this.hoverSpaceIntervalId);
        }
        this.$refs.contentWrapper.scrollTo(left, 0);

        //move content
        var scrollDelta;
        if (left === this.contentDelta) {
          scrollDelta = this.scrollbarDelta;
        } else if (left === 0) {
          scrollDelta = 0;
          left = 0;
        } else {
          scrollDelta = left / this.contentDelta * this.scrollbarDelta;
        }
        this.$refs.thumb.style.left = "".concat(scrollDelta, "px");
      },
      setContentWidth: function setContentWidth() {
        var _this3 = this;
        this.$refs.content.style.width = 'auto';
        if (this.resizeTimeoutId) {
          clearInterval(this.resizeTimeoutId);
        }
        this.resizeTimeoutId = setTimeout(function () {
          if (_this3.$refs.content && _this3.$refs.content.querySelector('table.table')) {
            _this3.$refs.content.style.width = "".concat(_this3.$refs.content.querySelector('table.table').clientWidth, "px");
            setTimeout(function () {
              _this3.init();
            }, 0);
          }
        }, 200);
      },
      initContentWidth: function initContentWidth() {
        var _this4 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this4.$refs.content || !_this4.$refs.content.querySelector('table.table'))) {
                  _context.next = 5;
                  break;
                }
                _context.next = 3;
                return new Promise(function (r) {
                  return setTimeout(r, 500);
                });
              case 3:
                _context.next = 7;
                break;
              case 5:
                _this4.setContentWidth();
                return _context.abrupt("break", 8);
              case 7:
                {
                  _context.next = 0;
                  break;
                }
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    },
    mounted: function mounted() {
      var _this5 = this;
      window.addEventListener('resize', function () {
        _this5.setContentWidth();
      });
      this.initContentWidth();

      //document mouseup
      document.addEventListener('mouseup', function () {
        if (_this5.thumbClickedFlag) {
          _this5.thumbClickedFlag = false;
        }
      });

      //document mousemove
      document.addEventListener('mousemove', function (e) {
        if (_this5.thumbClickedFlag) {
          e.preventDefault();
          var left = e.clientX - _this5.$refs.scrollbar.getBoundingClientRect().x - _this5.thumbClickedCoords;
          _this5.moveThumbAndContent(left);
        }
      });
    }
  };

  exports.StickyScroll = StickyScroll;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
