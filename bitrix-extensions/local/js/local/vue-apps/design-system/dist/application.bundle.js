/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_controlComponent,local_vueComponents_controlChoice,local_vueComponents_modalYesNo,local_vueComponents_modalAnyContent,local_vueComponents_buttonComponent,local_vueComponents_docComponent,local_vueComponents_loaderCircle,local_vueComponents_loaderBubbles,local_vueComponents_loaderSquares,local_vueComponents_messageComponent,ui_vue3_pinia) {
  'use strict';

  var TheMenu = {
    data: function data() {
      return {
        items: [{
          path: '/',
          name: 'Form controls'
        }, {
          path: 'select-dependency',
          name: 'Select dependency'
        }, {
          path: 'multi',
          name: 'Form controls multi'
        }, {
          path: 'buttons',
          name: 'Buttons'
        }, {
          path: 'filter',
          name: 'Filter'
        }, {
          path: 'modals',
          name: 'Modals'
        }, {
          path: 'docs',
          name: 'Docs'
        }, {
          path: 'loaders',
          name: 'Loaders'
        }, {
          path: 'messages',
          name: 'Messages'
        }]
      };
    },
    template: "\n    <div class=\"twpx-desing-system-menu\">\n      <router-link v-for=\"item in items\" :key=\"item.path\" :to=\"item.path\" @click=\"click(item.path)\">{{ item.name }}</router-link>\n    </div>\n  ",
    methods: {
      click: function click(tab) {
        var url = new URL(window.location.href);
        if (tab && tab !== '') {
          url.searchParams.set('tab', tab);
        } else {
          url.searchParams["delete"]('tab');
        }

        // Обновляем URL
        window.history.replaceState({}, '', url.toString());
      }
    }
  };

  var Application = {
    components: {
      TheMenu: TheMenu
    },
    template: "\n    <TheMenu />\n    <router-view />\n\t",
    mounted: function mounted() {
      var _this = this;
      var url = new URL(window.location.href);
      url.searchParams.entries().forEach(function (e) {
        if (e[0] === 'tab') {
          _this.$router.push(e[1]);
        }
      });
    }
  };

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var formControlsStore = ui_vue3_pinia.defineStore('form-controls-store', {
    state: function state() {
      return {
        controls: [{
          property: 'num',
          id: 'id51',
          name: 'NUMBER',
          label: 'Number',
          value: '123,54',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'time',
          type: 'single',
          id: 'id50',
          name: 'TIME',
          label: 'Time single',
          value: '11:00',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'hint',
          id: 'id5',
          name: 'AUDITOR_ORNZ',
          label: 'Simple',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints.json',
          required: false,
          disabled: false,
          tab: 1,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'hint',
          id: 'id5-1',
          name: 'AUDITOR_ORNZ_WITH_PHOTO',
          label: 'With HTML - data-value',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints-html.json',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'hint',
          id: 'id5-2',
          name: 'AUDITOR_ORNZ_WITH_PHOTO',
          label: 'Autocomplete',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints-autocomplete.json',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'hint',
          id: 'id5-3',
          name: 'AUDITOR_ORNZ_WITH_HIDDEN',
          label: 'With hidden data',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints-hidden.json',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          id: 'id1',
          property: 'text',
          name: 'SOME_TEXT',
          label: 'Some text',
          value: '',
          multi: 3,
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          id: 'id1-1',
          property: 'textarea',
          name: 'MESSAGE',
          label: 'Message',
          value: '',
          multi: 3,
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          id: 'id2',
          property: 'tel',
          name: 'PHONE',
          label: 'Phone number',
          value: '',
          multi: 3,
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          id: 'id3',
          property: 'email',
          name: 'EMAIL',
          label: 'Your email',
          value: '',
          multi: 3,
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          id: 'id4',
          property: 'hidden',
          name: 'HIDDEN_FIELD',
          value: '',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'password',
          id: 'id6',
          name: 'PASSWORD',
          label: 'Password',
          value: '',
          required: false,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'date',
          type: 'range',
          id: 'id7',
          label: 'Calendar',
          name: 'DATE_FROM_TO',
          required: true,
          value: ['20.02.2024', '28.02.2024'],
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'date',
          type: 'single',
          id: 'id8',
          label: 'Calendar',
          name: 'DATE',
          required: true,
          value: '28.02.2024',
          hint_external: 'Обсуждаем проекты международных стандартов и документов',
          dependency: 'id6'
        }, {
          property: 'file',
          id: 'id11',
          name: 'FILE_LOGO',
          label: 'Logo',
          value: '',
          file: '',
          hint_external: 'Обсуждаем проекты международных стандартов и документов',
          required: true,
          disabled: false,
          accept: ['svg', 'png', 'jpg', 'jpeg'],
          image: true,
          maxsize: 10000000
        }, {
          property: 'file',
          type: 'upload',
          id: 'id12',
          name: 'FILE_LOGO_UPLOADED',
          label: 'Upload logo',
          value: null,
          upload: {},
          hint_external: 'Обсуждаем проекты международных стандартов и документов',
          required: true,
          disabled: false,
          accept: ['svg', 'png', 'jpg', 'jpeg'],
          image: true,
          maxsize: 10000000
        }, {
          property: 'select',
          type: 'dropdown',
          id: 'id13',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'molestias',
            code: '23423423423'
          }, {
            label: 'Farming',
            code: '324234324'
          }, {
            label: 'Very',
            code: '324234325'
          }],
          value: '',
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'select',
          type: 'radio',
          id: 'id9',
          name: 'SELECT_BUTTON_TEXT',
          label: 'Buttons',
          options: [{
            label: 'Thin',
            code: '1'
          }, {
            label: 'Thick',
            code: '2'
          }, {
            label: 'Uppercase',
            code: '3'
          }],
          value: '2',
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'select',
          type: 'multi',
          id: 'id9-1',
          name: 'SELECT_BUTTON_TEXT',
          label: 'Multiselect',
          options: [{
            label: 'Experience working with foreign structures',
            code: '1'
          }, {
            label: 'Part of international networks',
            code: '2'
          }, {
            label: 'Access to state secrets',
            code: '3'
          }],
          value: ['2'],
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'checkbox',
          type: 'switch',
          id: 'id14',
          name: 'SWITCH',
          required: false,
          label: 'labore',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов',
          dependency: 'id6'
        }, {
          property: 'checkbox',
          type: 'checkbox',
          id: 'id10',
          name: 'DEPENDENCY_CHECKBOX',
          required: false,
          label: 'Checkbox',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'checkbox',
          id: 'id11',
          name: 'SIMPLE_CHECKBOX',
          required: false,
          label: 'Checkbox',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }, {
          property: 'checkbox',
          type: 'block',
          id: 'id12',
          name: 'CHECKBOX_BLOCK',
          required: false,
          label: 'Checkbox block',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: 'Обсуждаем проекты международных стандартов и документов'
        }]
      };
    },
    actions: {
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        switch (control.property) {
          case 'text':
          case 'tel':
          case 'email':
          case 'hidden':
          case 'password':
          case 'date':
          case 'time':
          case 'textarea':
          case 'num':
            control.value = value;
            break;
          case 'hint':
            this.changeHintControlValue({
              control: control,
              value: value
            });
            break;
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value,
              checked: checked
            });
            break;
          case 'checkbox':
            control.checked = checked;
            break;
          // case 'file':
          //   commit('changeFileValue', { control, value });
          //   break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runHints: function runHints(control, action) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var controller, timeoutId, response, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Создаем AbortController для возможности отмены запроса
                controller = new AbortController();
                timeoutId = setTimeout(function () {
                  return controller.abort();
                }, 20000); // 20 секунд таймаут
                _context.next = 5;
                return fetch(action, {
                  signal: controller.signal,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 5:
                response = _context.sent;
                clearTimeout(timeoutId);
                if (response.ok) {
                  _context.next = 9;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 9:
                _context.next = 11;
                return response.json();
              case 11:
                result = _context.sent;
                if (!(result.status === 'success' && result.data)) {
                  _context.next = 16;
                  break;
                }
                _this.setHints(control, result.data);
                _context.next = 21;
                break;
              case 16:
                if (!result.errors) {
                  _context.next = 20;
                  break;
                }
                console.error('Server returned errors:', result.errors);
                _context.next = 21;
                break;
              case 20:
                throw new Error('Invalid response format');
              case 21:
                _context.next = 26;
                break;
              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching hints:', _context.t0);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 23]]);
        }))();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      },
      changeHintControlValue: function changeHintControlValue(_ref2) {
        var _this2 = this;
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
        if (value.autocomplete && value.autocomplete.forEach) {
          value.autocomplete.forEach(function (o) {
            var control = _this2.controls.find(function (c) {
              return c.id === o.id;
            });
            if (control) {
              control.value = o.value;
            }
          });
        }
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        control.value = value;
      },
      changeSelectMultiValue: function changeSelectMultiValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value,
          checked = _ref5.checked;
        console.log(control.value, value, checked);
        if (checked) {
          var set = new Set(control.value).add(value);
          control.value = Array.from(set);
        } else {
          control.value.splice(control.value.indexOf(value), 1);
        }
      },
      addTab: function addTab(control) {
        control.tab = control.tab ? ++control.tab : 1;
      },
      setDisabled: function setDisabled(control, value) {
        control.disabled = value;
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var FormControlsComponent = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div>\n      <div class=\"twpx-design-system-block\" v-for=\"control in controls\" :key=\"control.id\">\n        <div>\n          <h3>{{ control.property }} {{ control.type }}</h3>\n          <ControlComponent :control=\"control\" @input=\"input\" @hints=\"hints\" />\n        </div>\n        <pre>{{ control }}</pre>\n        <div>\n          <ButtonComponent text=\"+ tab\" :props=\"['secondary','medium']\" @clickButton=\"addTab(control)\" />\n\n          <ButtonComponent :text=\"textDisabled(control)\" :props=\"['light','medium']\" @clickButton=\"setDisabledEnabled(control)\" />\n        </div>\n      </div>\n    </div>\n\t",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(formControlsStore, ['controls'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(formControlsStore, ['changeControlValue', 'runHints', 'setHints', 'addTab', 'setDisabled'])), {}, {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      },
      hints: function hints(_ref2) {
        var control = _ref2.control,
          type = _ref2.type,
          action = _ref2.action,
          value = _ref2.value;
        if (type === 'get') {
          this.runHints(control, action);
        } else if (type === 'set') {
          this.setHints(control, value);
        }
      },
      setDisabledEnabled: function setDisabledEnabled(control) {
        this.setDisabled(control, !control.disabled);
      },
      textDisabled: function textDisabled(control) {
        return "set ".concat(control.disabled ? 'enabled' : 'disabled');
      }
    })
  };

  var FormControls = {
    components: {
      FormControlsComponent: FormControlsComponent
    },
    template: "\n    <FormControlsComponent />\n  "
  };

  var selectDependencyStore = ui_vue3_pinia.defineStore('select-dependency-store', {
    state: function state() {
      return {
        controls: [{
          property: 'select',
          type: 'dropdown',
          id: 'sd1',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'Будут выбраны 1, 2, 3',
            code: '23423423423',
            dependent_options: ['1', '2', '3']
          }, {
            label: 'Будут выбраны 2, 3, 4',
            code: '324234324',
            dependent_options: ['2', '3', '4']
          }, {
            label: 'Будут выбраны 3, 4, 5',
            code: '324234325',
            dependent_options: ['3', '4', '5']
          }, {
            label: 'Будут выбраны 4, 5, 6',
            code: '123',
            dependent_options: ['4', '5', '6']
          }],
          value: '',
          disabled: false,
          dependent_id: 'sd2'
        }, {
          property: 'select',
          type: 'dropdown',
          id: 'sd2',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'Пункт 1, будут выбраны 7, 9',
            code: '1',
            dependent_options: ['7', '9']
          }, {
            label: 'Пункт 2, будут выбраны 8, 10',
            code: '2',
            dependent_options: ['8', '10']
          }, {
            label: 'Пункт 3, будут выбраны 9, 11',
            code: '3',
            dependent_options: ['9', '11']
          }, {
            label: 'Пункт 4, будут выбраны 10, 12',
            code: '4',
            dependent_options: ['10', '12']
          }, {
            label: 'Пункт 5, будут выбраны 7, 10',
            code: '5',
            dependent_options: ['7', '10']
          }, {
            label: 'Пункт 6, будут выбраны 8, 11',
            code: '6',
            dependent_options: ['8', '11']
          }],
          value: '',
          disabled: false,
          dependent_id: 'sd3'
        }, {
          property: 'select',
          type: 'dropdown',
          id: 'sd3',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'Пункт 7, будут выбраны 13, 14',
            code: '7',
            dependent_options: ['13', '14']
          }, {
            label: 'Пункт 8, будут выбраны 13, 15',
            code: '8',
            dependent_options: ['13', '15']
          }, {
            label: 'Пункт 9, будут выбраны 14, 15',
            code: '9',
            dependent_options: ['14', '15']
          }, {
            label: 'Пункт 10, будут выбраны 15, 16',
            code: '10',
            dependent_options: ['15', '16']
          }, {
            label: 'Пункт 11, будут выбраны 16, 17',
            code: '11',
            dependent_options: ['16', '17']
          }, {
            label: 'Пункт 12, будут выбраны 17, 18',
            code: '12',
            dependent_options: ['17', '18']
          }],
          value: '',
          disabled: false,
          dependent_id: 'sd4'
        }, {
          property: 'select',
          type: 'dropdown',
          id: 'sd4',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'Пункт 13',
            code: '13'
          }, {
            label: 'Пункт 14',
            code: '14'
          }, {
            label: 'Пункт 15',
            code: '15'
          }, {
            label: 'Пункт 16',
            code: '16'
          }, {
            label: 'Пункт 17',
            code: '17'
          }, {
            label: 'Пункт 18',
            code: '18'
          }],
          value: '',
          disabled: false
        }]
      };
    },
    actions: {
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        switch (control.property) {
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value
            });
            break;
        }
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var SelectDependencyComponent = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue

    template: "\n    <div>\n      <div class=\"twpx-design-system-block twpx-design-system-block--small twpx-design-system-block--two-cols\" v-for=\"control in controls\" :key=\"control.id\">\n        <div>\n          <h3>{{ control.property }} {{ control.type }}</h3>\n          <ControlComponent :control=\"control\" @input=\"input\" />\n        </div>\n        <pre>{{ control }}</pre>\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(selectDependencyStore, ['controls'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(selectDependencyStore, ['changeControlValue'])), {}, {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      }
    })
  };

  var SelectDependency = {
    components: {
      SelectDependencyComponent: SelectDependencyComponent
    },
    template: "\n    <SelectDependencyComponent />\n  "
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var formControlsMultiStore = ui_vue3_pinia.defineStore('form-controls-multi-store', {
    state: function state() {
      return {
        controls: [{
          property: 'hint',
          id: 'id5',
          name: 'AUDITOR_ORNZ',
          label: 'Simple',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints.json',
          required: false,
          disabled: false,
          multi: 3
        }, {
          property: 'hint',
          id: 'id5-1',
          name: 'AUDITOR_ORNZ_WITH_PHOTO',
          label: 'With HTML - data-value',
          value: [{
            "id": "1",
            "value": "First"
          }, {
            "id": "2",
            "value": "Second"
          }],
          count: 3,
          action: '/markup/vue/design-system/hints-html.json',
          required: false,
          disabled: false,
          multi: 3
        }, {
          property: 'hint',
          id: 'id5-2',
          name: 'AUDITOR_ORNZ_WITH_PHOTO',
          label: 'Autocomplete',
          value: '',
          count: 3,
          action: '/markup/vue/design-system/hints-autocomplete.json',
          required: false,
          disabled: false,
          multi: 3
        }, {
          id: 'id1',
          property: 'text',
          name: 'SOME_TEXT',
          label: 'Some text',
          value: '',
          required: false,
          disabled: false,
          multi: 3
        }, {
          id: 'id1-2',
          property: 'text',
          name: 'SOME_TEXT',
          label: 'Поле text заполнено',
          value: ['one', 'two', 'three'],
          required: false,
          disabled: false,
          multi: 3
        }, {
          id: 'id1-1',
          property: 'textarea',
          name: 'MESSAGE',
          label: 'Message',
          value: ['One', 'Two', 'Three'],
          required: false,
          disabled: false,
          multi: 3
        }, {
          id: 'id2',
          property: 'tel',
          name: 'PHONE',
          label: 'Phone number',
          value: ['+7 (903) 255-50-50', '+7 (916) 255-52-52'],
          required: false,
          disabled: false,
          multi: 3
        }, {
          id: 'id3',
          property: 'email',
          name: 'EMAIL',
          label: 'Your email',
          value: ['he@is.here', 'she@is.here', 'you@are.here'],
          required: false,
          disabled: false,
          multi: 3
        }, {
          property: 'password',
          id: 'id6',
          name: 'PASSWORD',
          label: 'Password',
          value: ['passwordone', 'passwordtwo'],
          required: false,
          disabled: false,
          multi: 3
        }, {
          property: 'date',
          type: 'range',
          id: 'id7',
          label: 'Calendar',
          name: 'DATE_FROM_TO',
          required: true,
          value: [["03.06.2025", "11.06.2025"], ["05.06.2025", "21.06.2025"], ["25.06.2025", "26.06.2025"]],
          multi: 3
        }, {
          property: 'date',
          type: 'single',
          id: 'id8',
          label: 'Calendar',
          name: 'DATE',
          required: true,
          value: ["03.06.2025", "11.06.2025"],
          hint_external: '',
          dependency: 'id6',
          multi: 3
        }, {
          property: 'file',
          id: 'id11',
          name: 'FILE_LOGO',
          label: 'Logo',
          value: ['my-png-file.png', 'your-png-file.png'],
          file: null,
          hint_external: '',
          required: true,
          disabled: false,
          accept: ['svg', 'png', 'jpg', 'jpeg'],
          image: true,
          multi: 5,
          maxsize: 10000000
        }, {
          property: 'file',
          type: 'upload',
          id: 'id12',
          name: 'FILE_LOGO_UPLOADED',
          label: 'Upload logo',
          value: ['my-png-file.png', 'your-png-file.png'],
          upload: {},
          hint_external: '',
          required: true,
          disabled: false,
          accept: ['svg', 'png', 'jpg', 'jpeg'],
          image: true,
          maxsize: 10000000,
          multi: 3
        }, {
          property: 'select',
          type: 'dropdown',
          id: 'id13',
          name: 'STATUS',
          label: 'Status',
          options: [{
            label: 'molestias',
            code: '23423423423'
          }, {
            label: 'Farming',
            code: '324234324'
          }, {
            label: 'Very',
            code: '324234325'
          }],
          value: ['molestias', 'Farming'],
          disabled: false,
          multi: 3
        }, {
          property: 'select',
          type: 'radio',
          id: 'id9',
          name: 'SELECT_BUTTON_TEXT',
          label: 'Buttons',
          options: [{
            label: 'Thin',
            code: '1'
          }, {
            label: 'Thick',
            code: '2'
          }, {
            label: 'Uppercase',
            code: '3'
          }],
          value: ['2'],
          multi: 3
        }, {
          property: 'checkbox',
          type: 'switch',
          id: 'id14',
          name: 'SWITCH',
          required: false,
          label: 'labore',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: '',
          dependency: 'id6',
          multi: 3
        }, {
          property: 'checkbox',
          type: 'checkbox',
          id: 'id10',
          name: 'DEPENDENCY_CHECKBOX',
          required: false,
          label: 'Checkbox',
          value: 'on',
          checked: true,
          disabled: false,
          hint_external: 'Active checkbox',
          multi: 3
        }]
      };
    },
    actions: {
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        switch (control.property) {
          case 'text':
          case 'tel':
          case 'email':
          case 'hidden':
          case 'password':
          case 'date':
          case 'textarea':
            control.value = value;
            break;
          case 'hint':
            this.changeHintControlValue({
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
          case 'checkbox':
            control.checked = checked;
            break;
          // case 'file':
          //   commit('changeFileValue', { control, value });
          //   break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runHints: function runHints(control, action) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
          var controller, timeoutId, response, result;
          return _regeneratorRuntime$1().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Создаем AbortController для возможности отмены запроса
                controller = new AbortController();
                timeoutId = setTimeout(function () {
                  return controller.abort();
                }, 20000); // 20 секунд таймаут
                _context.next = 5;
                return fetch(action, {
                  signal: controller.signal,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 5:
                response = _context.sent;
                clearTimeout(timeoutId);
                if (response.ok) {
                  _context.next = 9;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 9:
                _context.next = 11;
                return response.json();
              case 11:
                result = _context.sent;
                if (!(result.status === 'success' && result.data)) {
                  _context.next = 16;
                  break;
                }
                _this.setHints(control, result.data);
                _context.next = 21;
                break;
              case 16:
                if (!result.errors) {
                  _context.next = 20;
                  break;
                }
                console.error('Server returned errors:', result.errors);
                _context.next = 21;
                break;
              case 20:
                throw new Error('Invalid response format');
              case 21:
                _context.next = 26;
                break;
              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching hints:', _context.t0);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 23]]);
        }))();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      },
      changeHintControlValue: function changeHintControlValue(_ref2) {
        var _this2 = this;
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
        if (value.autocomplete && value.autocomplete.forEach) {
          value.autocomplete.forEach(function (o) {
            var control = _this2.controls.find(function (c) {
              return c.id === o.id;
            });
            if (control) {
              control.value = o.value;
            }
          });
        }
      },
      createMulti: function createMulti(_ref3) {
        var parent = _ref3.parent;
        parent.property = 'multi';
        parent.multi = [];
      },
      addMulti: function addMulti(_ref4) {
        var parent = _ref4.parent,
          add = _ref4.add;
        var randomId = Math.round(Math.random() * 1000);
        var sub = [];
        if (add.sub && add.sub.forEach) {
          add.sub.forEach(function (s) {
            s.id = "".concat(s.id).concat(randomId);
            sub.push(_objectSpread$2({}, s));
          });
          add.sub = sub;
        }
        add.id = "".concat(add.id).concat(randomId);
        parent.multi.push(add);
      },
      removeMulti: function removeMulti(_ref5) {
        var parent = _ref5.parent,
          index = _ref5.index;
        parent.multi.splice(index, 1);
      }
    }
  });

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var FormControlsMultiComponent = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    // language=Vue
    template: "\n    <div>\n      <div class=\"twpx-design-system-block\" v-for=\"control in controls\" :key=\"control.id\">\n        <div>\n          <h3>{{ heading3(control) }}</h3>\n          <ControlChoice :control=\"control\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n        </div>\n        <pre>{{ control }}</pre>\n        <div>\n        </div>\n      </div>\n    </div>\n\t",
    computed: _objectSpread$3({}, ui_vue3_pinia.mapState(formControlsMultiStore, ['controls'])),
    methods: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapActions(formControlsMultiStore, ['changeControlValue', 'runHints', 'setHints', 'createMulti', 'addMulti', 'removeMulti'])), {}, {
      heading3: function heading3(control) {
        return "".concat(babelHelpers["typeof"](control.multi) === 'object' ? control.multi[0].property : control.property, " ").concat(babelHelpers["typeof"](control.multi) === 'object' ? control.multi[0].type || '' : control.type || '');
      },
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      },
      hints: function hints(_ref2) {
        var control = _ref2.control,
          type = _ref2.type,
          action = _ref2.action,
          value = _ref2.value;
        if (type === 'get') {
          this.runHints(control, action);
        } else if (type === 'set') {
          this.setHints(control, value);
        }
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

  var FormControlsMulti = {
    components: {
      FormControlsMultiComponent: FormControlsMultiComponent
    },
    template: "\n    <FormControlsMultiComponent />\n  "
  };

  var buttonsStore = ui_vue3_pinia.defineStore('buttons-store', {
    state: function state() {
      return {
        buttons: [{
          id: '1',
          text: 'Primary',
          props: ['primary', 'medium'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '2',
          text: 'Secondary',
          props: ['secondary', 'medium'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '3',
          text: 'Small',
          props: ['primary', 'small'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '4',
          text: 'Medium',
          props: ['primary', 'medium'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '4',
          text: 'Large',
          props: ['primary', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '5',
          text: 'More',
          props: ['more', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '6',
          text: 'Dark',
          props: ['dark', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '7',
          text: 'Success',
          props: ['success', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '8',
          text: 'Danger',
          props: ['danger', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '9',
          text: 'Serve',
          props: ['serve', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '10',
          text: 'Disabled',
          props: ['disabled', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '11',
          text: 'Link-color',
          props: ['link-color', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '11',
          text: 'Blue-color',
          props: ['blue-color', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '12',
          text: 'Gray-color',
          props: ['gray-color', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '13',
          text: 'Red-color',
          props: ['red-color', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '14',
          text: 'Wide',
          props: ['wide', 'secondary', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '15',
          text: 'Tag',
          props: ['tag'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '16',
          text: 'Load-circle',
          props: ['load-circle', 'secondary', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '17',
          text: 'Delete',
          props: ['icon', 'delete', 'medium'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '19',
          text: 'Edit',
          props: ['icon', 'edit', 'medium'],
          clickButton: function clickButton() {
            alert('click');
          }
        }, {
          id: '18',
          text: 'Delete',
          props: ['icon-delete', 'danger', 'large'],
          clickButton: function clickButton() {
            alert('click');
          }
        }]
      };
    },
    actions: {}
  });

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ButtonsComponent = {
    data: function data() {},
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n    <div>\n      <div class=\"twpx-design-system-block\" v-for=\"button in buttons\" :key=\"button.id\">\n        <div>\n          <ButtonComponent :text=\"button.text\" :props=\"button.props\" @clickButton=\"button.clickButton\" />\n        </div>\n        <pre>{{ getButtonCode(button) }}</pre>\n      </div>\n    </div>\n  ",
    computed: _objectSpread$4({}, ui_vue3_pinia.mapState(buttonsStore, ['buttons'])),
    methods: {
      getButtonCode: function getButtonCode(button) {
        return "ButtonComponent :text=\"".concat(button.text, "\" :props=\"[").concat(button.props, "]\" @clickButton=\"\"");
      }
    }
  };

  var Buttons = {
    components: {
      ButtonsComponent: ButtonsComponent
    },
    template: "\n    <div><ButtonsComponent/></div>\n  "
  };

  var Filter = {
    template: "\n    <div>Filter</div>\n  "
  };

  var modalsStore = ui_vue3_pinia.defineStore('modals-store', {
    state: function state() {
      return {
        modal_yes_no: {
          id: 1,
          heading: "Подтверждение",
          text: "Вы действительно хотите изменить номер телефона?",
          yes: "Да",
          no: "Нет",
          stateWatcher: false,
          clickYes: function clickYes() {
            console.log('modal yes');
          },
          clickNo: function clickNo() {
            console.log('modal no');
          }
        },
        modal_any_content: {
          id: 2,
          buttons: {
            yes: {
              text: 'Да',
              props: ['secondary', 'large']
            },
            no: {
              text: 'Нет',
              props: ['gray-color', 'large']
            }
          },
          stateWatcher: false,
          clickYes: function clickYes() {
            console.log('modal yes');
          },
          clickNo: function clickNo() {
            console.log('modal no');
          }
        }
      };
    },
    actions: {}
  });

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ModalsComponent = {
    data: function data() {},
    components: {
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      DocComponent: local_vueComponents_docComponent.DocComponent
    },
    template: "\n    <div>\n      <div class=\"twpx-design-system-block\">\n        <ModalYesNo\n          :heading=\"modal_yes_no.heading\"\n          :text=\"modal_yes_no.text\"\n          :yes=\"modal_yes_no.yes\"\n          :no=\"modal_yes_no.no\"\n          :stateWatcher=\"modal_yes_no.stateWatcher\"\n          @clickYes=\"modal_yes_no.clickYes\"\n          @clickNo=\"modal_yes_no.clickNo\"\n        />\n        <div>\n          <ButtonComponent text=\"Show\" :props=\"['secondary', 'medium']\" @clickButton=\"modal_yes_no.stateWatcher = !modal_yes_no.stateWatcher\" />\n        </div>\n        <pre>{{ getModalYesNoCode(button) }}</pre>\n      </div>\n\n      <div class=\"twpx-design-system-block\">\n        <ModalAnyContent :stateWatcher=\"modal_any_content.stateWatcher\">\n          <DocComponent :doc='{\n            \"id\": 123,\n            \"href\": \"/pages/\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0437\u0430\u0441\u0435\u0434\u0430\u043D\u0438\u044F \u0434\u0438\u0441\u0438\u0446\u043F\u043B\u0438\u043D\u0430\u0440\u043D\u043E\u0439 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 234.pdf\",\n            \"size\": 654000,\n            \"date\": \"15 \u044F\u043D\u0432\u0430\u0440\u044F 2020\",\n            \"author\": \"\u0410\u0437\u0430\u0440\u044F\u043D\u0446 \u0410\u0448\u043E\u0442 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447\",\n            \"icon\": \"/template/images/pdf.svg\",\n            \"remove\": true\n          }' @clickDelete.prevent=\"alert('delete')\" />\n          <ButtonComponent text=\"Success\" :props=\"['success','large']\" @clickButton=\"\" />\n        </ModalAnyContent>\n        <div>\n          <ButtonComponent text=\"Show\" :props=\"['secondary', 'medium']\" @clickButton=\"modal_any_content.stateWatcher = !modal_any_content.stateWatcher\" />\n        </div>\n        <pre>{{ getModalAnyContentCode(button) }}</pre>\n      </div>\n    </div>\n  ",
    computed: _objectSpread$5({}, ui_vue3_pinia.mapState(modalsStore, ['modal_yes_no', 'modal_any_content'])),
    methods: {
      getModalYesNoCode: function getModalYesNoCode() {
        return "ModalYesNo\n  :heading=\"heading\"\n  :text=\"text\"\n  :yes=\"yes\"\n  :no=\"no\"\n  :stateWatcher=\"stateWatcher\"\n  @clickYes=\"clickYes\"\n  @clickNo=\"clickNo\"\n/";
      },
      getModalAnyContentCode: function getModalAnyContentCode() {
        return "ModalAnyContent :stateWatcher=\"modal_any_content.stateWatcher\"\n  Some text\n/ModalAnyContent";
      }
    }
  };

  var Modals = {
    components: {
      ModalsComponent: ModalsComponent
    },
    template: "\n    <div><ModalsComponent /></div>\n  "
  };

  var docsStore = ui_vue3_pinia.defineStore('docs-store', {
    state: function state() {
      return {
        docs: [{
          id: 123,
          href: '/pages/Протокол заседания дисицплинарной комиссии 234.pdf',
          name: "Протокол заседания дисицплинарной комиссии",
          size: 654000,
          date: '15 января 2020',
          author: 'Азарянц Ашот Александрович',
          icon: '/template/images/pdf.svg',
          remove: true
        }]
      };
    },
    actions: {}
  });

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var DocsComponent = {
    data: function data() {},
    components: {
      DocComponent: local_vueComponents_docComponent.DocComponent
    },
    template: "\n    <div>\n      <div class=\"twpx-design-system-block twpx-design-system-block--two-cols\" v-for=\"doc in docs\" :key=\"doc.id\">\n        <div>\n          <DocComponent :doc=\"doc\" @clickDelete.prevent=\"alert('delete')\" />\n        </div>\n        <pre>{{ doc }}</pre>\n      </div>\n    </div>\n  ",
    computed: _objectSpread$6({}, ui_vue3_pinia.mapState(docsStore, ['docs'])),
    methods: {}
  };

  var Docs = {
    components: {
      DocsComponent: DocsComponent
    },
    template: "\n    <div>&lt;DocComponent :doc=\"doc\" @clickDelete.prevent=\"alert('delete')\" /&gt;</div>\n    <div><DocsComponent /></div>\n  "
  };

  var loadersStore = ui_vue3_pinia.defineStore('loaders-store', {
    state: function state() {
      return {
        loaders: [{
          component: 'LoaderCircle'
        }, {
          component: 'LoaderBubbles'
        }, {
          component: 'LoaderSquares'
        }]
      };
    },
    actions: {}
  });

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var LoadersComponent = {
    data: function data() {},
    components: {
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      LoaderBubbles: local_vueComponents_loaderBubbles.LoaderBubbles,
      LoaderSquares: local_vueComponents_loaderSquares.LoaderSquares
    },
    template: "\n    <div>\n      <div class=\"twpx-design-system-block twpx-design-system-block--two-cols\" v-for=\"loader in loaders\" :key=\"loader.id\">\n        <div>\n          <component :is=\"loader.component\" :show=\"true\" />\n        </div>\n        <pre>{{ getLoaderCode(loader) }}</pre>\n      </div>\n    </div>\n  ",
    computed: _objectSpread$7({}, ui_vue3_pinia.mapState(loadersStore, ['loaders'])),
    methods: {
      getLoaderCode: function getLoaderCode(loader) {
        return "".concat(loader.component, " :show=\"true\"");
      }
    }
  };

  var Loaders = {
    components: {
      LoadersComponent: LoadersComponent
    },
    template: "\n    <div><LoadersComponent /></div>\n  "
  };

  var messagesStore = ui_vue3_pinia.defineStore('messages-store', {
    state: function state() {
      return {
        messages: [{
          id: '1',
          type: 'info',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '2',
          type: 'info',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '1-1',
          type: 'info',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '2-1',
          type: 'info',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '3',
          type: 'error',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '4',
          type: 'error',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '3-1',
          type: 'error',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '4-1',
          type: 'error',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '5',
          type: 'table-result',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '6',
          type: 'table-result',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '5-1',
          type: 'table-result',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '6-1',
          type: 'table-result',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '7',
          type: 'success',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '8',
          type: 'success',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '7-1',
          type: 'success',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '8-1',
          type: 'success',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '9',
          type: 'lock-green',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '10',
          type: 'lock-green',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '9-1',
          type: 'lock-green',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '10-1',
          type: 'lock-green',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '11',
          type: 'lock',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '12',
          type: 'lock',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
        }, {
          id: '11-1',
          type: 'lock',
          size: 'big',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }, {
          id: '12-1',
          type: 'lock',
          size: 'small',
          message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
          button: 'Done'
        }]
      };
    },
    actions: {}
  });

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var MessagesComponent = {
    data: function data() {},
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    template: "\n    <div style=\"display: grid; gap: 16px;\">\n      <div class=\"twpx-design-system-block\" v-for=\"message in messages\" :key=\"message.id\">\n        <div>\n          <MessageComponent :type=\"message.type\" :size=\"message.size\" :message=\"message.message\" :button=\"message.button\" />\n        </div>\n        <pre>{{ getMessageCode(message) }}</pre>\n      </div>\n    </div>\n  ",
    computed: _objectSpread$8({}, ui_vue3_pinia.mapState(messagesStore, ['messages'])),
    methods: {
      getMessageCode: function getMessageCode(message) {
        return "MessageComponent\n  :type=\"".concat(message.type, "\"\n  :size=\"").concat(message.size, "\"\n  :message=\"").concat(message.message, "\"\n  ").concat(message.button ? ':button="' + message.button : '', " /");
      }
    }
  };

  var Messages = {
    components: {
      MessagesComponent: MessagesComponent
    },
    template: "\n    <div><MessagesComponent/></div>\n  "
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var DesignSystem = /*#__PURE__*/function () {
    function DesignSystem(rootNode, options) {
      babelHelpers.classCallCheck(this, DesignSystem);
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
          component: FormControls
        }, {
          path: '/select-dependency',
          component: SelectDependency
        }, {
          path: '/multi',
          component: FormControlsMulti
        }, {
          path: '/buttons',
          component: Buttons
        }, {
          path: '/filter',
          component: Filter
        }, {
          path: '/modals',
          component: Modals
        }, {
          path: '/docs',
          component: Docs
        }, {
          path: '/loaders',
          component: Loaders
        }, {
          path: '/messages',
          component: Messages
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(DesignSystem, [{
      key: "run",
      value: function run() {
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Design System Application',
          components: {
            Application: Application
          },
          template: '<Application />',
          mounted: function mounted() {}
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
    }]);
    return DesignSystem;
  }();

  exports.DesignSystem = DesignSystem;

}((this.BX = this.BX || {}),BX,BX,BX.Controls,BX.Controls,BX.Modals,BX.Modals,BX.AAS,BX.AAS,BX.Loaders,BX.Loaders,BX.Loaders,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
