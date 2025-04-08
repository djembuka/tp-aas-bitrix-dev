/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,ui_vue3_pinia) {
  'use strict';

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        hidden: [],
        docsBlock: {},
        controlsBlock: {},
        confirmDocsBlock: {},
        autosaveTimeoutId: 0,
        autosave: 5000,
        agreement: {},
        url: {}
      };
    },
    actions: {
      bitrixLogs: function bitrixLogs(_ref) {
        var id = _ref.id,
          message = _ref.message;
        if (window.BX) {
          BX.ajax.post('/local/ajax/logs.php', {
            id: id,
            el: document.querySelector('input[name = "APPEAL_ID"]').value,
            message: message,
            level: 1
          }, function (result) {});
        }
      },
      createMulti: function createMulti(_ref2) {
        var parent = _ref2.parent;
        parent.property = 'multi';
        parent.multi = [];
      },
      addMulti: function addMulti(_ref3) {
        var parent = _ref3.parent,
          add = _ref3.add;
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
      removeMulti: function removeMulti(_ref4) {
        var parent = _ref4.parent,
          index = _ref4.index;
        parent.multi.splice(index, 1);
      },
      changeTextControlValue: function changeTextControlValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref7) {
        var control = _ref7.control,
          value = _ref7.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref8) {
        var control = _ref8.control,
          value = _ref8.value;
        control.value = value;
      },
      changeFileValue: function changeFileValue(_ref9) {
        var control = _ref9.control,
          value = _ref9.value;
        control.value = value;
        if (control.type === 'upload') {
          this.uploadFile(control, value);
        }
      },
      changeControlValue: function changeControlValue(_ref10) {
        var control = _ref10.control,
          value = _ref10.value,
          checked = _ref10.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'tel':
          case 'email':
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
      //hint
      runHintsAction: function runHintsAction(_ref11) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var control, action, response, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                control = _ref11.control, action = _ref11.action;
                _context.next = 3;
                return fetch(action);
              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();
              case 6:
                result = _context.sent;
                _this.setHints({
                  control: control,
                  value: result
                });
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      setHints: function setHints(_ref12) {
        var control = _ref12.control,
          value = _ref12.value;
        control.hints = value;
      },
      //file
      uploadFile: function uploadFile(control, file) {
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var formData, xhr, first;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
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
                xhr.upload.addEventListener('progress', function (_ref13) {
                  var loaded = _ref13.loaded,
                    total = _ref13.total;
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
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }
  });

  var HiddenFields = {
    data: function data() {
      return {};
    },
    props: ['hidden'],
    template: "\n    <div>\n      <input v-for=\"field in hidden\" :key=\"generateKey()\" type=\"hidden\" :name=\"field.name\" :value=\"field.value\">\n    </div>\n  ",
    methods: {
      generateKey: function generateKey() {
        return Date.now() * Math.random();
      }
    }
  };

  var DocsBlock = {
    data: function data() {
      return {};
    },
    props: ['docsBlock'],
    template: "\n    <div>\n      <h2 v-if=\"docsBlock.title\">{{docsBlock.title}}</h2>\n      <p v-if=\"docsBlock.text\" v-html=\"docsBlock.text\"></p>\n      <div class=\"b-docs-block\" v-if=\"docsBlock && docsBlock.items.length\">\n        <div class=\"b-docs-block__item\" href=\"/pages/news/\" v-for=\"(item, index) in docsBlock.items\" :key=\"item.id\">\n          <hr v-if=\"index !== 0\">\n          <div class=\"b-docs-block__body\">\n            <a class=\"b-docs-block__icon\" :href=\"item.url\" :style=\"'background-image: url( ' + item.icon + ' );'\"></a>\n            <span class=\"b-docs-block__text\">\n              <a :href=\"item.url\">{{item.title}}</a>\n              <span class=\"b-docs-block__data\" v-if=\"item.data.length\">\n                <span class=\"text-muted\" v-for=\"data in item.data\" :key=\"data\">{{data}}</span>\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
  };

  var ControlsBlock = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    props: ['controlsBlock'],
    template: "\n  <div>\n    <h2>{{ controlsBlock.title }}</h2>\n    <p v-html=\"controlsBlock.text\"></p>\n    <hr class=\"hr--sl\">\n    <div v-for=\"(formControl, controlIndex) in controlsBlock.controls\" :key=\"formControl.id\">\n\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-6 col-12\">\n          <ControlChoice :control=\"formControl\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n        </div>\n        <hr class=\"hr--xs d-block d-lg-none w-100\">\n        <div class=\"col-lg-6 col-12 small\">\n          <div v-if=\"formControl.completeBlock && formControl.completeBlock.comment\" class=\"text-muted b-complete-comment\">{{formControl.completeBlock.comment}}</div>\n        </div>\n      </div>\n\n      <hr class=\"hr--sl\">\n\n    </div>\n  </div>\n  ",
    emits: ['autosave', 'timeoutAutosave', 'create', 'add', 'remove', 'input', 'focus', 'blur', 'enter'],
    methods: {
      autosave: function autosave() {
        this.$emit('autosave');
      },
      timeoutAutosave: function timeoutAutosave() {
        this.$emit('timeoutAutosave');
      },
      create: function create(args) {
        this.$emit('create', args);
      },
      add: function add(args) {
        this.$emit('add', args);
      },
      remove: function remove(args) {
        this.$emit('remove', args);
      },
      input: function input(args) {
        this.$emit('input', args);
      },
      focus: function focus(args) {
        this.$emit('focus', args);
      },
      blur: function blur(args) {
        this.$emit('blur', args);
      },
      enter: function enter(args) {
        this.$emit('enter', args);
      },
      hints: function hints(args) {
        this.$emit('hints', args);
      }
    }
  };

  var ConfirmDocsBlock = {
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    props: ['confirmDocsBlock'],
    template: "\n    <div>\n\n      <h2 v-if=\"confirmDocsBlock.title\">{{ confirmDocsBlock.title }}</h2>\n\n      <p v-if=\"confirmDocsBlock.items.length !== 1 && confirmDocsBlock.text\" v-html=\"confirmDocsBlock.text\"></p>\n\n      <div v-for=\"(doc, index) in confirmDocsBlock.items\">\n\n        <div>\n          <b v-if=\"doc.title\" v-html=\"doc.title\"></b>\n          <span v-html=\"doc.text\"></span>\n        </div>\n        \n        <div>\n\n          <hr class=\"hr--line\" style=\"margin-bottom: 2.5rem;\">\n\n          <div v-for=\"(control, index) in doc.controls\" :key=\"control.id\">\n            <ControlChoice :control=\"control\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlChoice>\n            <hr>\n          </div>\n          \n        </div>\n\n        <hr>\n      </div>\n\n    </div>",
    emits: ['autosave', 'timeoutAutosave', 'create', 'add', 'remove', 'input', 'focus', 'blur', 'enter'],
    methods: {
      autosave: function autosave() {
        this.$emit('autosave');
      },
      timeoutAutosave: function timeoutAutosave() {
        this.$emit('timeoutAutosave');
      },
      create: function create(args) {
        this.$emit('create', args);
      },
      add: function add(args) {
        this.$emit('add', args);
      },
      remove: function remove(args) {
        this.$emit('remove', args);
      },
      input: function input(args) {
        this.$emit('input', args);
      },
      focus: function focus() {
        this.$emit('focus', args);
      },
      blur: function blur() {
        this.$emit('blur', args);
      },
      enter: function enter() {
        this.$emit('enter', args);
      }
    }
  };

  var SubmitButton = {
    data: function data() {
      return {};
    },
    props: ['agreement', 'controlsBlock', 'confirmDocsFlag'],
    emits: ['bitrixLogs'],
    template: "\n    <div v-if=\"agreement\">\n      <div class=\"b-checkbox\" id=\"agreement\" :class=\"{invalid: agreement.invalid}\">\n        <label>\n          <input class=\"filled-in\" type=\"checkbox\" required=\"\" :name=\"agreement.name\" :value=\"agreement.value\" :checked=\"checked\" v-model=\"checked\"><span v-html=\"agreement.text\"></span>\n        </label>\n      </div>\n      <hr class=\"hr--lg\">\n      <div class=\"b-appeal-new-change-form__submit\">\n        <a href=\"#\" class=\"btn btn-secondary btn-lg\" data-toggle=\"modal\" data-target=\"#submitConfirmModal\" :disabled=\"isDisabled\" @click=\"clickSubmit($event)\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</a>\n        <small class=\"text-muted\" v-if=\"isDisabled\">\u0412\u044B \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043B\u0435\u0439. <a href=\"#\" @click.prevent=\"clickContinue\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</a></small>\n      </div>\n    </div>\n  ",
    watch: {
      checked: function checked(val) {
        this.$emit('bitrixLogs', {
          id: 12,
          message: "".concat(this.agreement.text, ": ").concat(val)
        });
      }
    },
    computed: {
      checked: function checked() {
        return this.agreement ? this.agreement.checked : false;
      },
      isDisabled: function isDisabled() {
        //controls
        var controlsFlag = true;
        var controlsPatternFlag = true;
        if (this.controlsBlock && this.controlsBlock.controls) {
          //required
          var requiredControls = this.controlsBlock.controls.filter(function (control) {
            return control.required;
          });
          controlsFlag = requiredControls.every(function (control) {
            if (control.multy) {
              return control.value.every(function (value) {
                return value.val !== '';
              });
            } else {
              return control.value !== '';
            }
          });
          //width pattern
          var patternControls = this.controlsBlock.controls.filter(function (control) {
            return control.pattern;
          });
          controlsPatternFlag = patternControls.every(function (control) {
            if (control.multy) {
              return control.value.every(function (value) {
                return value.val === '' || new RegExp(control.pattern, 'ig').test(value.val);
              });
            } else {
              return control.value === '' || new RegExp(control.pattern, 'ig').test(control.value);
            }
          });
        }

        //confirm docs
        var confirmDocsFlag = true;
        if (this.confirmDocsBlock && this.confirmDocsBlock.items) {
          var checked = this.confirmDocsBlock.items.find(function (item) {
            return item.checked === true;
          });
          var requiredConfirm = checked ? checked.controls.filter(function (control) {
            return control.required;
          }) : undefined;
          confirmDocsFlag = requiredConfirm ? requiredConfirm.every(function (control) {
            return control.value && babelHelpers["typeof"](control.value) === 'object' ? control.value.every(function (value) {
              return value.val !== '';
            }) : control.value !== '';
          }) : false;
        }

        //checkbox
        var checkboxFlag = this.checked;
        return !(controlsFlag && controlsPatternFlag && confirmDocsFlag && checkboxFlag);
      }
    },
    methods: {
      clickSubmit: function clickSubmit(e) {
        this.$emit('bitrixLogs', {
          id: 13,
          message: e.target.innerHTML
        });
      },
      clickContinue: function clickContinue() {
        var control = Array.from(document.querySelector('.b-appeal-new-change-form form').elements).find(function (elem) {
          var isRequired = elem.classList.contains('mx-input') ? elem.closest('.mx-datepicker').getAttribute('data-required') : elem.getAttribute('data-required');
          if (elem.getAttribute('type') === 'file' && !elem.closest('.b-form-control-vc').querySelector('input[type=radio]').checked) {
            isRequired = false;
          }
          var value = elem.getAttribute('type') === 'file' ? elem.getAttribute('data-value') : elem.value;
          var pattern = elem.getAttribute('data-pattern');
          if (pattern && value !== '') {
            return !new RegExp(pattern, 'ig').test(value);
          } else {
            return isRequired && elem.tagName.toLowerCase() !== 'button' && elem.getAttribute('type') !== 'hidden' && value === '';
          }
        });
        if (!control) return;
        if (control.closest('.b-float-label')) {
          control.closest('.b-float-label').classList.add('invalid');
        } else if (control.closest('.b-float-label--file')) {
          control.closest('.b-float-label--file').classList.add('invalid');
        }
        window.scrollTo({
          top: control.getBoundingClientRect().top + window.scrollY - 120,
          behavior: 'smooth'
        });
        setTimeout(function () {
          control.focus();
        }, 1000);
      }
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      HiddenFields: HiddenFields,
      DocsBlock: DocsBlock,
      ControlsBlock: ControlsBlock,
      ConfirmDocsBlock: ConfirmDocsBlock,
      SubmitButton: SubmitButton
    },
    // language=Vue

    template: "\n    <div>\n      <HiddenFields v-if=\"hidden\" :hidden=\"hidden\" />\n\n      <div v-if=\"docsBlock && docsBlock.items && docsBlock.items.length\">\n        <DocsBlock :docsBlock=\"docsBlock\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <div v-if=\"controlsBlock && controlsBlock.controls && controlsBlock.controls.length\">\n        <ControlsBlock :controlsBlock=\"controlsBlock\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <div v-if=\"confirmDocsBlock && confirmDocsBlock.items && confirmDocsBlock.items.length\">\n        <ConfirmDocsBlock :confirmDocsBlock=\"confirmDocsBlock\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"  @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <SubmitButton :agreement=\"agreement\" :controlsBlock=\"controlsBlock\" :confirmDocsBlock=\"confirmDocsBlock\" @bitrixLogs=\"bitrixLogs\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(formStore, ['hidden', 'docsBlock', 'controlsBlock', 'confirmDocsBlock', 'autosaveTimeoutId', 'autosave', 'agreement', 'url'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(formStore, ['bitrixLogs', 'runHintsAction', 'setHints', 'changeControlValue', 'createMulti', 'addMulti', 'removeMulti'])), {}, {
      hints: function hints(_ref) {
        var type = _ref.type,
          control = _ref.control,
          action = _ref.action,
          value = _ref.value;
        console.log({
          type: type,
          control: control,
          action: action,
          value: value
        });
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
      input: function input(_ref2) {
        var control = _ref2.control,
          value = _ref2.value,
          checked = _ref2.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      },
      focus: function focus() {
        // console.log('focus');
      },
      blur: function blur() {
        // console.log('blur');
      },
      enter: function enter() {
        // console.log('enter');
      }
    })
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
  var AppealNewChangeForm = /*#__PURE__*/function () {
    function AppealNewChangeForm(rootNode, options) {
      babelHelpers.classCallCheck(this, AppealNewChangeForm);
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
    babelHelpers.createClass(AppealNewChangeForm, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Appeal new change form component',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            formStore().hidden = self.options.data.hidden;
            formStore().docsBlock = self.options.data.docsBlock;
            formStore().controlsBlock = self.options.data.controlsBlock;
            formStore().confirmDocsBlock = self.options.data.confirmDocsBlock;
            formStore().autosaveTimeoutId = self.options.data.autosaveTimeoutId;
            formStore().autosave = self.options.data.autosave;
            formStore().agreement = self.options.data.agreement;
            formStore().url = self.options.data.url;
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
    return AppealNewChangeForm;
  }();

  exports.AppealNewChangeForm = AppealNewChangeForm;

}((this.BX = this.BX || {}),BX,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map
