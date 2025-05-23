/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,ui_vue3_pinia) {
  'use strict';

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        loadingControls: false,
        actions: {},
        controls: []
      };
    },
    actions: {
      bitrixLogs: function bitrixLogs(id, message) {
        //AJAX Bitrix
        if (window.BX) {
          BX.ajax.post('/local/ajax/logs.php', {
            id: id,
            el: 1,
            //document.querySelector('input[name = "APPEAL_ID"]').value,
            message: message,
            level: 1
          }, function (result) {});
        }
      },
      autosave: function autosave() {},
      timeoutAutosave: function timeoutAutosave() {},
      createMulti: function createMulti(_ref) {
        var parent = _ref.parent;
        parent.property = 'multi';
        parent.multi = [];
      },
      addMulti: function addMulti(_ref2) {
        var parent = _ref2.parent,
          add = _ref2.add;
        var randomId = Math.round(Math.random() * 1000);
        var sub = [];
        if (add.sub && add.sub.forEach) {
          add.sub.forEach(function (s) {
            s.id = "".concat(s.id).concat(randomId);
            sub.push(_objectSpread({}, s));
          });
          add.sub = sub;
        }
        add.id = "".concat(add.id).concat(randomId);
        parent.multi.push(add);
      },
      removeMulti: function removeMulti(_ref3) {
        var parent = _ref3.parent,
          index = _ref3.index;
        parent.multi.splice(index, 1);
      },
      changeTextControlValue: function changeTextControlValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref7) {
        var control = _ref7.control,
          value = _ref7.value;
        control.value = value;
      },
      changeFileValue: function changeFileValue(_ref8) {
        var control = _ref8.control,
          value = _ref8.value;
        control.value = value;
        if (control.type === 'upload') {
          this.uploadFile(control, value);
        }
      },
      changeControlValue: function changeControlValue(_ref9) {
        var control = _ref9.control,
          value = _ref9.value,
          checked = _ref9.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
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
      runControls: function runControls(data, callback) {
        var _this = this;
        this.loadingControls = true;
        var a = window.BX.ajax.runComponentAction(this.actions.controls.component, this.actions.controls.method, data);
        var state = this;
        a.then(function (result) {
          _this.loadingControls = false;
          resultFn(state, result);
        }, function (error) {
          _this.loadingControls = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['form-with-multi']) {
            resultFn(state, window.twinpx.vue['form-with-multi'].controls);
          }
        });
        function resultFn(state, data) {
          state.controls = data;
          if (callback) {
            callback();
          }
        }
      },
      //file
      uploadFile: function uploadFile(control, file) {
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var formData, xhr, first;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                control.upload = {};
                formData = new FormData();
                if (file === null) {
                  //delete
                  formData.append('DELETE', 'Y');
                  if (control.upload.response) {
                    formData.append('FILE', control.upload.response.FILE);
                  }
                } else {
                  //first
                  formData.append('FILES', file);
                  if (control.upload.response) {
                    //update
                    formData.append('FILE', control.upload.response.FILE);
                  }
                }
                xhr = new XMLHttpRequest();
                xhr.open('POST', '/markup/upload.php');
                //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                xhr.setRequestHeader('Authentication', BX.bitrix_sessid());

                //progress
                first = true;
                xhr.upload.addEventListener('progress', function (_ref10) {
                  var loaded = _ref10.loaded,
                    total = _ref10.total;
                  control.upload.progress = {
                    first: first,
                    loaded: loaded,
                    total: total
                  };
                  first = false;
                });
                xhr.upload.addEventListener('loadstart', function () {
                  // console.log('loadstart');
                });
                xhr.upload.addEventListener('abort', function () {
                  // console.log('abort');
                });
                xhr.upload.addEventListener('error', function () {
                  // console.log('error');
                });
                xhr.upload.addEventListener('load', function () {
                  // console.log('load');
                });
                xhr.upload.addEventListener('timeout', function () {
                  // console.log('timeout');
                });
                xhr.upload.addEventListener('loadend', function () {
                  // console.log('loadend');
                });
                xhr.onreadystatechange = function () {
                  control.upload.readyState = xhr.readyState;
                  if (xhr.readyState === 4) {
                    control.upload.response = JSON.parse(xhr.response);
                  }
                };
                xhr.send(formData);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    // language=Vue

    template: "\n    <div style=\"display: grid; grid-template-columns: 1fr 2fr; gap: 32px;\">\n      <form action=\"\">\n        <div v-for=\"control in controls\" :key=\"control.id\">\n          <ControlChoice :control=\"control\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlChoice>\n          <hr>\n        </div>\n\n      </form>\n      <pre style=\"font-size: 9pt; height: 700px; overflow: auto;\">{{controls}}</pre>\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(formStore, ['loadingControls', 'controls'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(formStore, ['runControls', 'changeControlValue', 'createMulti', 'addMulti', 'removeMulti', 'bitrixLogs', 'autosave', 'timeoutAutosave'])), {}, {
      input: function input(args) {
        //bitrix logs
        if (args.control.property === 'file' && args.control.type === 'load') {
          this.bitrixLogs(11, "".concat(args.control.label, ": ").concat(args.label));
        }
        this.changeControlValue(args);
        this.autosave();
      },
      focus: function focus() {
        console.log('focus');
      },
      blur: function blur() {
        console.log('blur');
      },
      enter: function enter() {
        console.log('enter');
      },
      hints: function hints(args) {
        console.log(args);
      }
    }),
    mounted: function mounted() {
      this.runControls({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid
        }
      });
    }
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: ''
      };
    }
  });

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FormWithMulti = /*#__PURE__*/function () {
    function FormWithMulti(rootNode, options) {
      babelHelpers.classCallCheck(this, FormWithMulti);
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
    babelHelpers.createClass(FormWithMulti, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Form with multi control Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            formStore().actions = {
              controls: self.options.controls || []
            };
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
    return FormWithMulti;
  }();

  exports.FormWithMulti = FormWithMulti;

}((this.BX = this.BX || {}),BX,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map
