/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_modalYesNo,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        id: "id".concat(Math.floor(Math.random() * 1000)),
        data: {},
        lang: {},
        actions: []
      };
    }
  });

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var controlsStore = ui_vue3_pinia.defineStore('controls', {
    state: function state() {
      return {
        controls: []
      };
    },
    actions: {
      changeControls: function changeControls(controls) {
        this.controls = controls;
      },
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
          value = _ref5.value;
        control.value = value;
        if (control.type === 'upload') {
          this.uploadFile(control, value);
        }
      },
      changeControlValue: function changeControlValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value,
          checked = _ref6.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
          case 'tel':
          case 'email':
            this.changeTextControlValue({
              control: control,
              value: value
            });
            break;
          // case 'multiselect':
          //   commit('changeMultiselectValue', { control, value, checked });
          //   break;
          // case 'checkbox':
          //   commit('changeCheckboxValue', { control, checked });
          //   break;
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value
            });
            break;
          case 'file':
            this.changeFileValue({
              control: control,
              value: value
            });
            break;
          case 'date':
            this.changeDateValue({
              control: control,
              value: value
            });
            break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
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

  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        loading: false,
        error: '',
        stateWatcher: false,
        historyItems: []
      };
    },
    actions: {
      changeStateWatcher: function changeStateWatcher() {
        this.stateWatcher = !this.stateWatcher;
      },
      changeHistoryItems: function changeHistoryItems(historyItems) {
        console.log(historyItems);
        this.historyItems = historyItems;
      },
      changeError: function changeError(error) {
        this.error = error;
      },
      runGetForm: function runGetForm() {
        var _this = this;
        this.error = '';
        this.loading = true;
        var d = dataStore();
        BX.ajax.runComponentAction(d.actions.getForm[0], d.actions.getForm[1], {
          mode: 'class',
          data: d.data
        }).then(function (response) {
          _this.loading = false;
          if (response.status === 'success') {
            _this.changeError('');
            controlsStore().changeControls(response.data[0].controls);
          } else {
            _this.changeError(response.errors[0].message);
          }
        }, function (response) {
          _this.loading = false;
          if (response && response.errors.length) {
            _this.changeError(response.errors[0].message);
          }
        });
      },
      runSaveForm: function runSaveForm() {
        var _this2 = this;
        this.error = '';
        this.loading = true;
        var d = dataStore();
        var formElem = document.querySelector("#".concat(dataStore().id, " form"));
        var formData = new FormData(formElem);
        Object.keys(dataStore().data).forEach(function (key) {
          formData.append(key, dataStore().data[key]);
        });
        BX.ajax.runComponentAction(d.actions.saveForm[0], d.actions.saveForm[1], {
          mode: 'class',
          data: formData
        }).then(function (response) {
          _this2.loading = false;
          if (response.status === 'success') {
            _this2.changeError('');
            _this2.runGetHistory();
          } else {
            _this2.changeError(response.errors[0].message);
          }
        }, function (response) {
          _this2.loading = false;
          if (response && response.errors.length) {
            _this2.changeError(response.errors[0].message);
          }
        });
      },
      runGetHistory: function runGetHistory() {
        var _this3 = this;
        this.error = '';
        this.loading = true;
        var d = dataStore();
        BX.ajax.runComponentAction(d.actions.getHistory[0], d.actions.getHistory[1], {
          mode: 'class',
          data: d.data
        }).then(function (response) {
          _this3.loading = false;
          if (response.status === 'success') {
            _this3.changeError('');
            _this3.changeHistoryItems(response.data);
          } else {
            _this3.changeError(response.errors[0].message);
          }
        }, function (response) {
          _this3.loading = false;
          if (response && response.errors.length) {
            _this3.changeError(response.errors[0].message);
          }
        });
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo
    },
    // language=Vue
    template: "\n  <div class=\"twpx-form-status-change\" :id=\"id\">\n\n    <LoaderCircle :show=\"loading\" />\n\n    <MessageComponent v-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n    <ModalYesNo\n      :heading=\"lang.modal.heading\"\n      :text=\"lang.modal.text\"\n      :yes=\"lang.modal.yes\"\n      :no=\"lang.modal.no\"\n      :stateWatcher=\"stateWatcher\"\n      @clickYes=\"clickYes\"\n      @clickNo=\"clickNo\"\n    />\n\n    <div class=\"twpx-form-status-change__grid\">\n      <div class=\"twpx-form-status-change__form\">\n        <form action=\"\">\n          <div class=\"twpx-form-status-change__form-wrapper\" v-if=\"!loading\">\n\n            <h3>{{ lang.form.heading }}</h3>\n            <ControlChoice  v-for=\"control in controls\" :key=\"control.id\" :control=\"control\" @input=\"input\"></ControlChoice>\n            <ButtonComponent :text=\"lang.form.button\" :props=\"buttonProps\" @clickButton=\"clickButton\" />\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\t",
    computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'id'])), ui_vue3_pinia.mapState(formStore, ['loading', 'error', 'historyItems', 'stateWatcher'])), ui_vue3_pinia.mapState(controlsStore, ['controls'])), {}, {
      buttonProps: function buttonProps() {
        var result = new Set();
        result.add('wide');
        result.add('secondary');
        result.add('large');
        if (babelHelpers["typeof"](this.controls) === 'object' && this.controls.forEach) {
          this.controls.forEach(function (c) {
            if (c.required && !c.value) {
              result.add('disabled');
            }
          });
        }
        return babelHelpers.toConsumableArray(result);
      }
    }),
    methods: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(formStore, ['runGetForm', 'runSaveForm', 'changeStateWatcher'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'runHints', 'setHints'])), {}, {
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
      clickButton: function clickButton() {
        this.changeStateWatcher();
      },
      clickYes: function clickYes() {
        this.runSaveForm();
        this.changeStateWatcher();
        var commentControl = this.controls.find(function (c) {
          return c.property === 'textarea';
        });
        this.changeControlValue({
          control: commentControl,
          value: ''
        });
      },
      clickNo: function clickNo() {
        this.changeStateWatcher();
      }
    })
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FormStatusChange = /*#__PURE__*/function () {
    function FormStatusChange(rootNode, options) {
      babelHelpers.classCallCheck(this, FormStatusChange);
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
    babelHelpers.createClass(FormStatusChange, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'DisciplinaryCaseForm',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().data = self.options.data || {};
            dataStore().lang = self.options.lang || {};
            dataStore().actions = self.options.actions || [];
          },
          mounted: function mounted() {
            formStore().runGetForm();
            formStore().runGetHistory();
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
    return FormStatusChange;
  }();

  exports.FormStatusChange = FormStatusChange;

}((this.BX = this.BX || {}),BX,BX.Controls,BX.AAS,BX.Loaders,BX.AAS,BX.Modals,BX));
//# sourceMappingURL=application.bundle.js.map
