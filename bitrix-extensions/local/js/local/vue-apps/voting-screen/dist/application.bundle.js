/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,ui_vue3_pinia) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
        signedParameters: '',
        lang: {
          messageSuccess: 'Спасибо за ваше мнение!<br>Протоколы с вашими результатами доступны<br>в вашем личном кабинете'
        },
        uuid: '',
        actions: {
          'voting': ['twinpx:voting.form', 'voting'],
          'editVoting': ['twinpx:voting.form', 'editVoting']
        },
        loading: false,
        error: ''
      };
    },
    actions: {
      changeProp: function changeProp(prop, value) {
        this[prop] = value;
      },
      runBitrixMethod: function runBitrixMethod(method, data, formData) {
        if (!this.actions[method] || !Array.isArray(this.actions[method])) {
          return Promise.reject({
            errors: [{
              message: "No such method ".concat(method)
            }]
          });
        }
        var payload;

        // Если есть formData, добавляем к нему customData и передаем как data
        if (formData instanceof FormData) {
          // Добавляем customData к FormData
          Object.entries(this.customData).forEach(function (_ref) {
            var _ref2 = babelHelpers.slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            if (value !== undefined && value !== null) {
              formData.append(key, value);
            }
          });
          payload = formData;
        } else if (data) {
          // Если есть data, объединяем с customData в объект
          payload = _objectSpread(_objectSpread({}, this.customData), data);
        } else {
          // Если нет ни data, ни formData, передаем только customData
          payload = this.customData;
        }
        return BX.ajax.runComponentAction(this.actions[method][0], this.actions[method][1], {
          mode: 'class',
          data: payload,
          signedParameters: this.signedParameters
        });
      }
    }
  });

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var controlsStore = ui_vue3_pinia.defineStore('controls', {
    state: function state() {
      return {};
    },
    actions: {
      changeTextControlValue: function changeTextControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        control.value = value;
      },
      changeFileValue: function changeFileValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value,
          file = _ref5.file;
        control.value = value;
        control.file = file;
        if (value === '') {
          control.file = '';
        }
      },
      changeControlValue: function changeControlValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value,
          file = _ref6.file,
          checked = _ref6.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
          case 'tel':
          case 'email':
          case 'num':
          case 'hidden':
            this.changeTextControlValue({
              control: control,
              value: value
            });
            break;
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value
            });
            break;
          case 'file':
            this.changeFileValue({
              control: control,
              value: value,
              file: file
            });
            break;
          case 'date':
            this.changeDateValue({
              control: control,
              value: value
            });
            break;
        }
      },
      runHints: function runHints(control, action) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var url, controller, timeoutId, response, result, _result$errors$;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                url = new URL(action, window.location.origin);
                url.searchParams.append('s', control.value);
                _context.prev = 2;
                // Создаем AbortController для возможности отмены запроса
                controller = new AbortController();
                timeoutId = setTimeout(function () {
                  return controller.abort();
                }, 20000); // 20 секунд таймаут
                _context.next = 7;
                return fetch(url, {
                  signal: controller.signal,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 7:
                response = _context.sent;
                clearTimeout(timeoutId);
                if (response.ok) {
                  _context.next = 11;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 11:
                _context.next = 13;
                return response.json();
              case 13:
                result = _context.sent;
                if (result.status === 'success' && result.data) {
                  _this.setHints(control, result.data);
                } else if (result.errors) {
                  _this.error = (_result$errors$ = result.errors[0]) === null || _result$errors$ === void 0 ? void 0 : _result$errors$.message;
                } else {
                  _this.error = 'Invalid response format';
                }
                _context.next = 20;
                break;
              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](2);
                _this.error = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message;
              case 20:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 17]]);
        }))();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      }
    }
  });

  var StatusTimer = {
    template: "\n        <div style=\"display: grid; gap: 16px; justify-items: flex-end;\">\n            <div class=\"twpx-voting-screen__state-0\">\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430</div>\n            \n            <div class=\"twpx-voting-screen__state-1\">\n                <div class=\"twpx-voting-screen__status\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0434\u0435\u0442</div>\n                <div class=\"twpx-voting-screen__timer\">01:54</div>\n            </div>\n            \n            <div class=\"twpx-voting-screen__state-2\">\n                <div class=\"twpx-voting-screen__status\">\u0417\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043E</div>\n                <div class=\"twpx-voting-screen__timer\">00:00</div>\n            </div>\n            \n            <div class=\"twpx-voting-screen__state-3\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432\u0435</div>\n        </div>\n    "
  };

  var GraphComponent = {
    template: "\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-graph\">\n            <div class=\"twpx-voting-screen-graph-item twpx-voting-screen-graph-item--voted\">\n                <div class=\"twpx-voting-screen-graph-item__rect\" style=\"height: 85%;\">\n                    <div class=\"twpx-voting-screen-graph-item__num\">85</div>\n                    <div class=\"twpx-voting-screen-graph-item__proc\">85%</div>\n                </div>\n                <div class=\"twpx-voting-screen-graph-item__text\">\u041F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n            </div>\n            <div class=\"twpx-voting-screen-graph-item twpx-voting-screen-graph-item--not twpx-voting-screen-graph-item--zero\">\n                <div class=\"twpx-voting-screen-graph-item__rect\" style=\"height: 0%;\">\n                    <div class=\"twpx-voting-screen-graph-item__num\">0</div>\n                    <div class=\"twpx-voting-screen-graph-item__proc\">0%</div>\n                </div>\n                <div class=\"twpx-voting-screen-graph-item__text\">\u041D\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n            </div>\n        </div>\n    "
  };

  var ListComponent = {
    template: "\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-list twpx-voting-screen-list--lt10 twpx-voting-screen-list--successrty\">\n            <div class=\"twpx-voting-screen-list__items-wrapper\">\n                <div class=\"twpx-voting-screen-list__items\">\n                    <div class=\"twpx-voting-screen-list__item\">\u0418\u0432\u0430\u043D\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430 \u041C\u0430\u0440\u0438\u044F \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u043D\u0430</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u041A\u0443\u0437\u044C\u043C\u0438\u0447 \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0421\u0435\u0440\u0433\u0435\u0435\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u043D\u0430</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0418\u0432\u0430\u043D\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447</div>\n                    <div class=\"twpx-voting-screen-list__item\">\u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430 \u041C\u0430\u0440\u0438\u044F \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u043D\u0430</div>\n                </div>\n            </div>\n            <div class=\"twpx-voting-screen-list__text\">\u0415\u0449\u0435 \u043D\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n        </div>\n    "
  };

  var AnswerComponent = {
    props: ['answer'],
    template: "\n      <div class=\"twpx-voting-answer\" @showeffect=\"showEffect()\">\n        <div class=\"twpx-voting-answer__title\">{{ answer.title }}</div>\n        <div class=\"twpx-voting-answer__graph twpx-graph\">\n          <div class=\"twpx-graph__wrapper\">\n            <div class=\"twpx-graph__img\"></div>\n            <div class=\"twpx-graph__num\">{{Number(answer.votes).toLocaleString()}}</div>\n          </div>\n        </div>\n      </div>\n    ",
    methods: {
      showEffect: function showEffect() {
        var _this = this;
        var wrapper = this.$el.querySelector('.twpx-graph__img');
        wrapper.style.width = 0;
        setTimeout(function () {
          wrapper.style.width = _this.answer.percentage;
        }, 0);
      }
    }
  };

  var ResultComponent = {
    data: function data() {
      return {
        result: [{
          title: 'За',
          votes: '100',
          percentage: '100%'
        }, {
          title: 'Против',
          votes: '50',
          percentage: '100%'
        }, {
          title: 'Воздержался',
          votes: '10',
          percentage: '100%'
        }]
      };
    },
    components: {
      AnswerComponent: AnswerComponent
    },
    template: "\n        <div class=\"twpx-voting-result\">\n            <AnswerComponent v-for=\"answer in result\" :answer=\"answer\" />\n        </div>\n    ",
    methods: {
      countPercentage: function countPercentage() {
        var biggest = this.result.reduce(function (b, a) {
          return b > Number(a.votes) ? b : Number(a.votes);
        }, 0);
        this.result.forEach(function (a) {
          a.percentage = "".concat(Number(a.votes) / biggest * 100, "%");
        });
      }
    },
    mounted: function mounted() {
      var _this = this;
      this.countPercentage();
      setTimeout(function () {
        _this.$el.querySelectorAll('.twpx-voting-answer').forEach(function (answer) {
          answer.dispatchEvent(new Event('showeffect'));
        });
      }, 0);
    }
  };

  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      StatusTimer: StatusTimer,
      GraphComponent: GraphComponent,
      ListComponent: ListComponent,
      ResultComponent: ResultComponent
    },
    // language=Vue
    template: "\n    <div class=\"twpx-voting-screen\">\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"assets/aas-logo.png\" alt=\"\" />\n        <StatusTimer />\n      </div>\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u044A\u0435\u0437\u0434\u0430</div>\n        <div class=\"twpx-voting-screen__question\">1.1.\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u043E\u0447\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0433\u043E \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0431\u0440\u0430\u043D\u0438\u044F \u0447\u043B\u0435\u043D\u043E\u0432 \u0421\u0420\u041E \u0410\u0410\u0421 \u043F\u043E \u041F\u0440\u0438\u0432\u043E\u043B\u0436\u0441\u043A\u043E\u043C\u0443 \u043E\u043A\u0440\u0443\u0433\u0443</div>\n      </div>\n\n      <div class=\"twpx-voting-screen__body\">\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-app\">\n          <div class=\"twpx-voting-screen__body-title\">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435<br>\u0434\u043B\u044F \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F</div>\n          <div class=\"twpx-voting-screen__body-content\">\n            <div class=\"twpx-voting-screen__phone\"></div>\n          </div>\n        </div>\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-app\">\n          <div class=\"twpx-voting-screen__body-title\">\u0418\u043B\u0438 \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR</div>\n          <div class=\"twpx-voting-screen__body-content\">\n            <div class=\"twpx-voting-screen__phone\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"twpx-voting-screen__body\">\n        <GraphComponent />\n        <ListComponent />\n      </div>\n\n      <div class=\"twpx-voting-screen-block\">\n        <ResultComponent />\n        <div class=\"twpx-voting-screen__message\" v-html=\"lang.messageSuccess\"></div>\n      </div>\n      \n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['customData', 'signedParameters', 'actions', 'lang', 'uuid', 'loading', 'error'])),
    methods: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'runHints', 'setHints'])), {}, {
      input: function input(args) {
        this.changeControlValue(args);
      },
      hints: function hints(_ref) {
        var control = _ref.control,
          type = _ref.type,
          action = _ref.action,
          value = _ref.value;
        if (type === 'get') {
          this.runHints(control, action);
        } else if (type === 'set') {
          this.setHints(control, value);
        }
      },
      getVoting: function getVoting() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
          var result;
          return _regeneratorRuntime$1().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.changeProp('loading', true);
                _context.prev = 1;
                _context.next = 4;
                return _this.runBitrixMethod('voting', {
                  uuid: _this.uuid
                });
              case 4:
                result = _context.sent;
                _this.changeProp('loading', false);
                _context.next = 12;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                _this.changeProp('loading', false);
                _this.changeProp('error', _context.t0.errors[0].message);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 8]]);
        }))();
      }
    }),
    mounted: function mounted() {
      this.getVoting();
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingScreen = /*#__PURE__*/function () {
    function VotingScreen(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingScreen);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0
      });
      babelHelpers.classPrivateFieldSet(this, _store, ui_vue3_pinia.createPinia());
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(VotingScreen, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'VotingScreen',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().uuid = self.options.uuid || '';
          }
        }));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
        babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
      }
    }, {
      key: "initStorageBeforeStartApplication",
      value: function initStorageBeforeStartApplication() {
        ui_vue3_pinia.setActivePinia(babelHelpers.classPrivateFieldGet(this, _store));
      }
    }, {
      key: "getFormStore",
      value: function getFormStore() {
        return formStore;
      }
    }]);
    return VotingScreen;
  }();

  exports.VotingScreen = VotingScreen;

}((this.BX = this.BX || {}),BX,BX.Controls,BX.AAS,BX.Loaders,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
