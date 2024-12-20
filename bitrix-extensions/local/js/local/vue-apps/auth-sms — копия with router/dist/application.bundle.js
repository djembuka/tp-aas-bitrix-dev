/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_controlComponent,local_vueComponents_messageComponent,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: '',
        templateFolder: '',
        lang: {},
        state: 'sms',
        info: '',
        error: '',
        errorButton: false
      };
    },
    actions: {
      changeState: function changeState(value) {
        this.state = value;
      },
      setInfo: function setInfo(message) {
        this.info = message;
      },
      setError: function setError(message) {
        this.error = message;
      }
    }
  });

  var codeStore = ui_vue3_pinia.defineStore('code', {
    state: function state() {
      return {
        lang: {},
        inputs: [{
          id: 'input1',
          value: '5'
        }, {
          id: 'input2',
          value: '5'
        }, {
          id: 'input3',
          value: '5'
        }, {
          id: 'input4',
          value: '5'
        }, {
          id: 'input5',
          value: '5'
        }, {
          id: 'input6',
          value: '5'
        }],
        uuid: '',
        submitProps: {
          large: true,
          secondary: true,
          wide: true
        },
        timerProps: {
          small: true,
          secondary: true
        },
        timer: 5,
        clearInputs: false,
        invalidInputs: true
      };
    },
    getters: {
      code: function code() {
        return this.inputs.reduce(function (accumulator, currentValue) {
          return String(accumulator) + String(currentValue.value);
        }, '');
      },
      buttonDisabled: function buttonDisabled() {
        return this.inputs.some(function (i) {
          return !i.value || i.invalid || i.disabled;
        });
      },
      buttonTimerText: function buttonTimerText() {
        return this.timer ? "".concat(this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER, " ").concat(new Date(this.timer * 1000).toISOString().substring(14, 19)) : this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER;
      },
      timerDisabled: function timerDisabled() {
        return !!this.timer;
      }
    },
    actions: {
      setInvalidInputs: function setInvalidInputs(val) {
        this.invalidInputs = val;
      },
      buttonTimer: function buttonTimer(start) {
        var _this = this;
        this.timer = Number(start);
        var intervalId = setInterval(function () {
          if (_this.timer === 0) {
            clearInterval(intervalId);
          } else {
            _this.timer--;
          }
        }, 1000);
      },
      changeButtonProps: function changeButtonProps(obj, type) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2["".concat(type, "Props")][key] = true;
          } else {
            delete _this2["".concat(type, "Props")][key];
          }
        });
      },
      changeInputValue: function changeInputValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      runCheck: function runCheck() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax.runAction('twinpx:authorization.api.check', {
            data: {
              code: this.code,
              uuid: this.uuid
            }
          }).then(function (response) {
            _this3.changeButtonProps({
              'load-circle': false
            }, 'submit');
            window.location.href = response.data.redirect;
          }, function (response) {
            _this3.changeButtonProps({
              'load-circle': false
            }, 'submit');
            dataStore().error = response.errors[0].message;
            if (String(response.errors[0].code) === String(1001)) {
              //B2
              //error button
              //disabled inputs
              //disabled button
              dataStore().errorButton = true;
              _this3.clearInputs = !_this3.clearInputs;
              _this3.inputs.forEach(function (input) {
                input.disabled = true;
                input.value = '';
              });
              _this3.timer = NaN;
            } else {
              //2001 2002 2003 2004 2005
              //E1
              //invalid inputs
              //invalid message
              _this3.invalidInputs = true;
              //disabled button
              //timer
              if (response.errors[0].customData && response.errors[0].customData.remain) {
                _this3.timer = response.errors[0].customData.remain;
                _this3.buttonTimer(_this3.timer);
              } else {
                _this3.timer = 0;
              }
            }
          });
        }
      }
    }
  });

  var smsStore = ui_vue3_pinia.defineStore('sms', {
    state: function state() {
      return {
        lang: {},
        state: 'A1',
        controls: [{
          property: 'tel',
          id: 'id0',
          name: 'PHONE',
          label: '',
          value: '',
          required: true,
          disabled: false
        }, {
          property: 'checkbox',
          id: 'id1',
          name: 'NUM',
          label: '',
          value: '',
          required: true,
          disabled: false
        }],
        submitProps: {
          large: true,
          secondary: true,
          wide: true
        },
        timer: 0
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        var result = false;
        if (this.state === 'C1' && this.timer) {
          result = true;
        } else {
          result = this.controls[0].setInvalidWatcher || this.controls[0].disabled || !this.controls[0].value.trim() || !this.controls[1].value;
        }
        return result;
      },
      buttonSubmitTimerText: function buttonSubmitTimerText() {
        return this.timer ? "".concat(this.lang.AUTH_SMS_SMS_BUTTON_SUBMIT_TIMER, " ").concat(new Date(this.timer * 1000).toISOString().substring(14, 19)) : '';
      }
    },
    actions: {
      buttonSubmitTimer: function buttonSubmitTimer(start) {
        var _this = this;
        this.timer = Number(start);
        var intervalId = setInterval(function () {
          if (_this.timer === 0) {
            clearInterval(intervalId);
          } else {
            _this.timer--;
          }
        }, 1000);
      },
      changeSubmitProps: function changeSubmitProps(obj) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2.submitProps[key] = true;
          } else {
            delete _this2.submitProps[key];
          }
        });
      },
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
        if (control.property === 'tel') {
          control.setInvalidWatcher = false;
        }
      },
      runSend: function runSend() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax.runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.controls[0].value
            }
          }).then(function (response) {
            _this3.changeSubmitProps({
              'load-circle': false
            });
            dataStore().error = '';

            //show code
            _this3.controls[0].focusWatcher = false;
            _this3.controls[0].setInvalidWatcher = false;
            _this3.controls[0].regexp_description = '';
            dataStore().errorButton = '';
            codeStore().uuid = response.data.UUID;
            codeStore().timer = response.data.remain || NaN;
            dataStore().changeState('code');
            var tel = _this3.controls[0].value.split('-');
            dataStore().info = "".concat(dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE, " ").concat(tel[0].substring(0, tel[0].length - 3), "...-..-").concat(tel[2]);
          }, function (response) {
            _this3.changeSubmitProps({
              'load-circle': false
            });
            dataStore().error = response.errors[0].message;
            if (String(response.errors[0].code) === String(1001)) {
              //B1
              _this3.state = 'B1';
              _this3.controls[0].disabled = true;
              dataStore().errorButton = _this3.lang.AUTH_SMS_SMS_ERROR_BUTTON;
            } else if (String(response.errors[0].code) === String(1002)) {
              //C1
              _this3.state = 'C1';
              _this3.buttonSubmitTimer(response.errors[0].customData.remain);
            } else if (String(response.errors[0].code) === String(1003)) {
              //A2
              _this3.state = 'A2';
              _this3.controls[0].focusWatcher = true;
              _this3.controls[0].setInvalidWatcher = true;
              _this3.controls[0].regexp_description = response.errors[0].message || '';
            } else if (String(response.errors[0].code) === String(1004)) ; else if (String(response.errors[0].code) === String(1005)) {
              //A3
              _this3.state = 'A3';
              _this3.controls[0].focusWatcher = true;
              _this3.controls[0].setInvalidWatcher = true;
              _this3.controls[0].regexp_description = response.errors[0].message || '';
            } else if (String(response.errors[0].code) === String(1006)) {
              //A3
              _this3.state = 'A3';
              _this3.controls[0].focusWatcher = true;
              _this3.controls[0].setInvalidWatcher = true;
              _this3.controls[0].regexp_description = response.errors[0].message || '';
            }
          });
        }
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Sms = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-sms-sms\">\n      <div class=\"vue-auth-sms-sms-form\">\n        <div class=\"vue-auth-sms-sms-form-body\">\n          <div v-for=\"control in controls\" :key=\"control.id\">\n            <ControlComponent :control=\"control\" @input=\"input\" />\n            <hr />\n          </div>\n          <ButtonComponent :text=\"buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"clickSubmit\" />\n        </div>\n      </div>\n    </div>\n\t",
    computed: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(smsStore, ['controls', 'submitProps', 'buttonDisabled', 'buttonSubmitTimerText'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(smsStore, ['input', 'runSend', 'changeSubmitProps'])), {}, {
      clickSubmit: function clickSubmit() {
        this.changeSubmitProps({
          'load-circle': true
        });
        this.runSend();
      }
    }),
    mounted: function mounted() {}
  };

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var ornzStore = ui_vue3_pinia.defineStore('ornz', {
    state: function state() {
      return {
        controls: [{
          property: 'text',
          id: 'id2',
          name: 'ORNZ',
          label: '',
          value: '',
          required: true,
          disabled: false
        }, {
          property: 'password',
          id: 'id3',
          name: 'PASSWORD',
          label: '',
          value: '',
          required: true,
          disabled: false
        }, {
          property: 'checkbox',
          id: 'id1',
          name: 'NUM',
          label: '',
          value: '',
          required: true,
          disabled: false
        }],
        submitProps: {
          large: true,
          secondary: true,
          wide: true
        }
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return this.controls.some(function (input) {
          return !input.value;
        });
      }
    },
    actions: {
      runHintsAction: function runHintsAction(_ref, callback) {
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var control, action, response, result, resultFn;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                resultFn = function _resultFn(data) {
                  control.hints = data;
                  if (callback) {
                    callback();
                  }
                };
                control = _ref.control, action = _ref.action;
                control.loading = true;
                _context.next = 5;
                return fetch(action);
              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();
              case 8:
                result = _context.sent;
                control.loading = false;
                resultFn(result.data.hints);

                // let a = window.BX.ajax.runComponentAction(action, {
                //   string:
                //     typeof control.value === 'object'
                //       ? control.value.value
                //       : control.value,
                // });

                // a.then(
                //   (result) => {
                //     control.loading = false;
                //     resultFn(result);
                //   },
                //   (error) => {
                //     control.loading = false;
                //     if (
                //       window.twinpx &&
                //       window.twinpx.vue.markup &&
                //       window.twinpx.vue['filter-table']
                //     ) {
                //       resultFn(window.twinpx.vue['filter-table'].hints);
                //     } else {
                //       this.showError({ error, method: hintsAction });
                //     }
                //   }
                // );
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      setHints: function setHints(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.hints = value;
      },
      changeSubmitProps: function changeSubmitProps(obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this.submitProps[key] = true;
          } else {
            delete _this.submitProps[key];
          }
        });
      },
      input: function input(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      runFormSubmit: function runFormSubmit() {
        if (window.BX) {
          BX.ajax.runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.ornz.value
            }
          }).then(function (response) {}, function (response) {});
        }
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Ornz = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-sms-ornz-form\">\n      <div class=\"vue-auth-sms-ornz-form-body\">\n        <form action=\"\" method=\"\">\n          <div v-for=\"control in controls\" :key=\"control.id\">\n            <ControlComponent :control=\"control\" @input=\"input\" @hints=\"hints\" />\n            <hr />\n          </div>\n          <ButtonComponent :text=\"lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"clickSubmit\" />\n        </form>\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(ornzStore, ['controls', 'submitProps', 'errorORNZ', 'buttonDisabled', 'runHintsAction', 'setHints'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(ornzStore, ['input', 'runFormSubmit', 'changeSubmitProps'])), {}, {
      hints: function hints(_ref) {
        var type = _ref.type,
          control = _ref.control,
          action = _ref.action,
          value = _ref.value;
        switch (type) {
          case 'get':
            this.runHintsAction({
              control: control,
              action: action
            });
            break;
          case 'set':
            this.setHints({
              control: control,
              value: value
            });
            break;
        }
      },
      clickSubmit: function clickSubmit() {
        this.changeSubmitProps({
          'load-circle': true
        });
        this.runFormSubmit();
      }
    }),
    mounted: function mounted() {}
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Code = {
    data: function data() {
      return {
        inputValue: ''
      };
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    emits: ['openOrnz'],
    // language=Vue

    template: "\n      <div class=\"vue-auth-sms-code-form\">\n        <div class=\"vue-auth-sms-code-form-body\">\n          <div :class=\"{'vue-auth-sms-code-inputs': true, 'vue-auth-sms-code-inputs--invalid': invalidInputs}\">\n\n            <div :class=\"{'vue-auth-sms-code-inputs-label': true, 'vue-auth-sms-code-inputs-label--disabled': inputs.every(i => i.disabled)}\">{{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}</div>\n            \n            <div class=\"vue-auth-sms-code-inputs-body\" ref=\"inputs\">\n\n              <input v-for=\"(input, index) in inputs\"\n                :key=\"input.id\"\n                type=\"text\"\n                :class=\"{'vue-auth-sms-code-input': true, 'vue-auth-sms-code-input--disabled': input.disabled}\"\n                v-model=\"input.value\"\n                @input=\"inputText(input, index, $event)\"\n                @keyup.backspace=\"backspaceInput(index)\"\n                @focus=\"focusText()\"\n              />\n\n            </div>\n\n            <div class=\"vue-auth-sms-code-inputs__warning\">{{ error }}</div>\n          </div>\n\n          <div><ButtonComponent :text=\"lang.AUTH_SMS_CODE_BUTTON_SUBMIT\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"runCheck\" /></div>\n          <div><ButtonComponent v-if=\"timer === 0 || !!timer\" :text=\"buttonTimerText\" :props=\"Object.keys(timerProps)\" :disabled=\"timerDisabled\" @clickButton=\"clickNewCode\" /></div>\n        </div>\n      </div>\n\t",
    computed: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'error'])), ui_vue3_pinia.mapState(codeStore, ['inputs', 'uuid', 'submitProps', 'buttonDisabled', 'buttonTimerText', 'timerDisabled', 'timerProps', 'timer', 'clearInputs', 'invalidInputs'])),
    watch: {
      clearInputs: function clearInputs() {
        this.$refs.inputs.querySelectorAll(".vue-auth-sms-code-input").forEach(function (input) {
          return input.value = '';
        });
      },
      inputValue: function inputValue(value) {
        this.changeInputValue({
          value: value
        });
      }
    },
    methods: _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setError'])), ui_vue3_pinia.mapActions(smsStore, ['runSend'])), ui_vue3_pinia.mapActions(codeStore, ['changeInputValue', 'runCheck', 'changeButtonProps', 'buttonTimer', 'setInvalidInputs'])), {}, {
      clickNewCode: function clickNewCode() {
        this.runSend();
      },
      backspaceInput: function backspaceInput(index) {
        var prev = this.$refs.inputs.querySelectorAll(".vue-auth-sms-code-input")[index - 1];
        if (prev) {
          prev.focus();
        }
      },
      inputText: function inputText(input, index, event) {
        var value = event.target.value;
        this.changeInputValue({
          control: input,
          value: value
        });
        var next = this.$refs.inputs.querySelectorAll(".vue-auth-sms-code-input")[index + 1];
        if (value && next) {
          next.focus();
        }
      },
      focusText: function focusText() {
        if (this.invalidInputs) {
          this.inputs.forEach(function (input) {
            input.value = '';
          });
          this.setInvalidInputs(false);
          this.setError('');
          this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
        }
      }
    }),
    mounted: function mounted() {
      this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
    }
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var TwoCols = {
    data: function data() {
      return {};
    },
    components: {
      Sms: Sms,
      Ornz: Ornz,
      Code: Code,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-sms\">\n      <div class=\"vue-auth-sms-left\">\n\n        <h3 class=\"mt-0\">{{ title }}</h3>\n\n        <MessageComponent type=\"info\" :message=\"info\" :button=\"lang.AUTH_SMS_INFO_BUTTON\" @clickButton=\"clickInfoButton\" />\n        <hr v-if=\"info && error\">\n        <MessageComponent v-if=\"error\" type=\"error\" :message=\"error\" :button=\"errorButton\" @clickButton=\"clickErrorButton\" />\n\n        <router-view />\n\n        <hr class=\"hr--line hr--none\" />\n\n        <div class=\"vue-auth-sms-alt\">\n          <div><ButtonComponent :text=\"altButton\" :props=\"['medium', 'primary']\" @clickButton=\"clickAlt\" /></div>\n          <div><a href=\"\">{{ lang.AUTH_SMS_ENTER_LINK }}</a></div>\n        </div>\n\n      </div>\n      <div class=\"vue-auth-sms-right\">\n        <img :src=\"templateFolder + '/auth-sms-ill.png'\" alt=\"\">\n      </div>\n      \n    </div>\n\t",
    computed: _objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['sessionid', 'signedParameters', 'templateFolder', 'lang', 'info', 'state', 'error', 'errorButton'])), ui_vue3_pinia.mapState(smsStore, ['errorButton'])), ui_vue3_pinia.mapState(codeStore, ['uuid'])), {}, {
      title: function title() {
        return this.lang["AUTH_SMS_".concat(String(this.state).toUpperCase(), "_TITLE")];
      },
      altButton: function altButton() {
        return this.lang["AUTH_SMS_".concat(String(this.state).toUpperCase(), "_ALT_BUTTON")];
      }
    }),
    methods: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setInfo'])), {}, {
      clickInfoButton: function clickInfoButton() {
        this.setInfo('');
      },
      clickAlt: function clickAlt() {
        if (this.state === 'ornz') {
          this.changeState('sms');
        } else {
          this.changeState('ornz');
        }
      },
      clickErrorButton: function clickErrorButton() {
        this.changeState('ornz');
      }
    }),
    mounted: function mounted() {}
  };

  var restoreStore = ui_vue3_pinia.defineStore('restore', {
    state: function state() {
      return {
        lang: {},
        info: '',
        state: '',
        controls: [{
          property: 'text',
          id: 'id0',
          name: 'ORNZ',
          label: '',
          value: '',
          required: true,
          disabled: false
        }],
        submitProps: {
          large: true,
          primary: true,
          wide: true
        }
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return !this.controls[0].value || this.controls[0].setInvalidWatcher === true;
      }
    },
    actions: {
      changeState: function changeState(value) {
        this.state = value;
      },
      changeSubmitProps: function changeSubmitProps(obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this.submitProps[key] = true;
          } else {
            delete _this.submitProps[key];
          }
        });
      },
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      runRestore: function runRestore() {
        var _this2 = this;
        this.changeSubmitProps({
          'load-circle': true
        });
        if (window.BX) {
          BX.ajax.runAction('twinpx:authorization.api.restore', {
            data: {
              login: this.controls[0].value
            }
          }).then(function (response) {
            _this2.changeSubmitProps({
              'load-circle': false
            });
            dataStore().error = '';
            // window.location.href = response.data.redirect;
          }, function (response) {
            _this2.changeSubmitProps({
              'load-circle': false
            });
            if (response.errors[0]) {
              dataStore().error = response.errors[0].message;
              _this2.controls[0].regexp_description = response.errors[0].message || '';
              _this2.controls[0].setInvalidWatcher = true;
            }
          });
        }
      }
    }
  });

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Restore = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-sms-restore\">\n      <router-link to=\"/sms\">Go to sms</router-link>\n      <router-view />\n      <div v-for=\"control in controls\" :key=\"control.id\">\n        <ControlComponent :control=\"control\" @input=\"input\" />\n        <hr />\n      </div>\n      <ButtonComponent :text=\"lang.AUTH_RESTORE_BUTTON\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"runRestore\" />\n    </div>\n\t",
    computed: _objectSpread$4(_objectSpread$4({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(restoreStore, ['controls', 'submitProps', 'buttonDisabled', 'input'])),
    methods: _objectSpread$4({}, ui_vue3_pinia.mapActions(restoreStore, ['runRestore']))
  };

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var CenterCol = {
    data: function data() {
      return {};
    },
    components: {
      Restore: Restore,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-center\">\n\n      <h3 class=\"mt-0\">{{ title }}</h3>\n\n      <MessageComponent v-if=\"info\" type=\"info\" :message=\"info\" :button=\"lang.AUTH_SMS_RESTORE_BUTTON\" @clickButton=\"clickInfoButton\" />\n      <hr v-if=\"info\">\n\n      <div class=\"vue-auth-center-body\">\n        <router-view />\n      </div>\n    </div>\n\t",
    computed: _objectSpread$5(_objectSpread$5(_objectSpread$5({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(restoreStore, ['info'])), {}, {
      title: function title() {
        return this.lang["AUTH_RESTORE_TITLE"];
      }
    }),
    methods: {
      clickInfoButton: function clickInfoButton() {}
    }
  };

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      Sms: Sms,
      Ornz: Ornz,
      Code: Code,
      TwoCols: TwoCols,
      CenterCol: CenterCol,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div>\n      <router-view />\n    </div>\n\t",
    computed: _objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, ui_vue3_pinia.mapState(dataStore, ['sessionid', 'signedParameters', 'templateFolder', 'lang', 'info', 'state', 'error', 'errorButton'])), ui_vue3_pinia.mapState(smsStore, ['errorButton'])), ui_vue3_pinia.mapState(codeStore, ['uuid'])), {}, {
      title: function title() {
        return this.lang["AUTH_SMS_".concat(String(this.state).toUpperCase(), "_TITLE")];
      },
      altButton: function altButton() {
        return this.lang["AUTH_SMS_".concat(String(this.state).toUpperCase(), "_ALT_BUTTON")];
      }
    }),
    methods: _objectSpread$6(_objectSpread$6({}, ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setInfo'])), {}, {
      clickInfoButton: function clickInfoButton() {
        this.setInfo('');
      },
      clickAlt: function clickAlt() {
        if (this.state === 'ornz') {
          this.changeState('sms');
        } else {
          this.changeState('ornz');
        }
      },
      clickErrorButton: function clickErrorButton() {
        this.changeState('ornz');
      }
    }),
    mounted: function mounted() {}
  };

  var RestoreInfo = {
    data: function data() {
      return {};
    },
    components: {},
    // language=Vue

    template: "\n    <div>Restore info</div>\n\t"
  };

  var NewPassword = {
    data: function data() {
      return {};
    },
    components: {},
    // language=Vue

    template: "\n    <div>New password</div>\n\t"
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var AuthSMS = /*#__PURE__*/function () {
    function AuthSMS(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthSMS);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _router, {
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
      babelHelpers.classPrivateFieldSet(this, _router, ui_vue3_router.createRouter({
        history: ui_vue3_router.createMemoryHistory(),
        routes: [{
          path: '/',
          component: TwoCols,
          children: [{
            path: '/',
            component: Sms
          }]
        }, {
          path: '/two-cols',
          component: TwoCols,
          children: [{
            path: 'sms',
            component: Sms
          }, {
            path: 'code',
            component: Code
          }, {
            path: 'ornz',
            component: Ornz
          }]
        }, {
          path: '/center-col',
          component: CenterCol,
          children: [{
            path: 'restore',
            component: Restore
          }, {
            path: 'restore-info',
            component: RestoreInfo
          }, {
            path: 'new-password',
            component: NewPassword
          }]
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(AuthSMS, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().templateFolder = self.options.templateFolder || '';
            dataStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(this, 'AUTH');
            dataStore().info = self.options.infoMessage || '';
            smsStore().controls[0].label = this.$Bitrix.Loc.getMessage('AUTH_SMS_SMS_LABEL_TEL');
            smsStore().controls[1].label = self.options.checkboxLabel || '';
            smsStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_SMS');
            ornzStore().controls[0].label = this.$Bitrix.Loc.getMessage('AUTH_SMS_ORNZ_LABEL_ORNZ');
            ornzStore().controls[1].label = this.$Bitrix.Loc.getMessage('AUTH_SMS_ORNZ_LABEL_PASSWORD');
            ornzStore().controls[2].label = self.options.checkboxLabel || '';
            codeStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_CODE');
            var urlQuery = self.parseQuery(window.location.search);
            if (urlQuery.type && urlQuery.type === 'ornz') {
              dataStore().state = 'ornz';
            }
            restoreStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(this, 'AUTH_RESTORE');
            restoreStore().info = self.options.restoreInfoMessage || '';
            restoreStore().controls[0].label = this.$Bitrix.Loc.getMessage('AUTH_RESTORE_LABEL_ORNZ');
          }
        }));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _router));
        babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
      }
    }, {
      key: "initStorageBeforeStartApplication",
      value: function initStorageBeforeStartApplication() {
        ui_vue3_pinia.setActivePinia(babelHelpers.classPrivateFieldGet(this, _store));
      }
    }, {
      key: "getTableStore",
      value: function getTableStore() {
        return tableStore;
      }
    }, {
      key: "getQuery",
      value: function getQuery(queryObject) {
        var result = [];
        for (var k in queryObject) {
          result.push(k + '=' + queryObject[k]);
        }
        return '?' + result.join('&');
      }
    }, {
      key: "parseQuery",
      value: function parseQuery(queryString) {
        var query = {};
        var pairs = [];
        if (queryString) {
          pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        }
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
      }
    }]);
    return AuthSMS;
  }();

  exports.AuthSMS = AuthSMS;

}((this.BX = this.BX || {}),BX,BX,BX.Controls,BX.AAS,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
