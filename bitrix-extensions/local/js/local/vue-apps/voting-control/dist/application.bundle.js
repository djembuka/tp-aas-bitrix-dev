/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var InfoBlocks = {
    props: ['lang', 'adminData'],
    template: "\n    <div class=\"twpx-voting-control__info-blocks\">\n        <div class=\"twpx-voting-control__info-block\">\n            <div class=\"twpx-voting-control__info-block__heading\">{{ lang[0] }}</div>\n            <div class=\"twpx-voting-control__info-block__nums\">\n                <span>{{ adminData.totalVotes }}</span>\n            </div>\n        </div>\n\n        <div class=\"twpx-voting-control__info-block\">\n            <div class=\"twpx-voting-control__info-block__heading\">{{ lang[1] }}</div>\n            <div class=\"twpx-voting-control__info-block__nums\">\n                <span>{{ adminData.numberOfVoters }}</span>\n                <span>{{ percentage(adminData.numberOfVoters) }}%</span>\n            </div>\n        </div>\n\n        <div class=\"twpx-voting-control__info-block\">\n            <div class=\"twpx-voting-control__info-block__heading\">{{ lang[2] }}</div>\n            <div class=\"twpx-voting-control__info-block__nums\">\n                <span>{{ adminData.numberOfNonVoters }}</span>\n                <span>{{ percentage(adminData.numberOfNonVoters) }}%</span>\n            </div>\n        </div>\n    </div>\n  ",
    methods: {
      percentage: function percentage(value) {
        return Math.round(value / this.adminData.totalVotes * 100);
      }
    }
  };

  var StatusForm = {
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: {
      lang: {
        type: Object,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      controls: {
        type: Array,
        required: true
      }
    },
    emits: ['setStatus', 'input'],
    template: "\n    <div class=\"twpx-voting-control__status-from\">\n      <h3>{{ lang.heading }}</h3>\n      <div class=\"twpx-voting-control__status-from__label\">\n        <span>{{ lang.label }}</span>\n        <span class=\"twpx-voting-control__status-from__value\">\n          <span v-if=\"statusValue\">{{ statusValue }}</span>\n        </span>\n      </div>\n      <ControlChoice :control=\"controls[0]\" @input=\"input\" />\n\n      <div v-if=\"isTimer\" class=\"twpx-voting-control__status-from__timer\">\n        <h4>{{ lang.timerHeading }}</h4>\n        <div>{{ lang.timerText }}</div>\n        <div class=\"twpx-voting-control__status-from__timer-grid\">\n          <ControlChoice :control=\"controls[1]\" @input=\"input\" />\n          <ControlChoice :control=\"controls[2]\" @input=\"input\" />\n        </div>\n      </div>\n\n      <div class=\"twpx-voting-control__status-from__button\">\n        <ButtonComponent :text=\"lang.button\" :props=\"['secondary', 'large']\" @clickButton=\"clickButton\" />\n      </div>\n    </div>\n  ",
    computed: {
      statusValue: function statusValue() {
        var _this = this;
        var select = this.controls[0].options.find(function (option) {
          return option.code === _this.value;
        });
        if (select) {
          return select.label;
        }
        return '';
      },
      isTimer: function isTimer() {
        var _this$controls$0$opti,
          _this2 = this;
        return (_this$controls$0$opti = this.controls[0].options.find(function (option) {
          return option.code === _this2.controls[0].value;
        })) === null || _this$controls$0$opti === void 0 ? void 0 : _this$controls$0$opti.timer;
      }
    },
    methods: {
      input: function input(args) {
        this.$emit('input', args);
      },
      clickButton: function clickButton() {
        this.$emit('setStatus', this.controls[0].value);
      }
    }
  };

  var VotingList = {
    props: {
      lang: {
        type: Object,
        required: true
      },
      adminData: {
        type: Object,
        required: true
      }
    },
    template: "\n    <div class=\"twpx-voting-control__voting-list\">\n      <h2>{{ lang.heading }} {{ adminData.totalVotes }}</h2>\n      <div class=\"twpx-voting-control__voting-list__grid\">\n        <div class=\"twpx-voting-control__voting-list__grid__item\">\n            <h3>{{ lang.success }} {{ adminData.numberOfVoters }}</h3>\n            <div class=\"twpx-voting-control__voting-list__items\">\n                <div class=\"twpx-voting-control__voting-list__item\" v-for=\"voter in adminData.listVoters\" :key=\"voter.name\">\n                    <div class=\"twpx-voting-control__voting-list__name\">{{ voter.name }}</div>\n                    <div class=\"twpx-voting-control__voting-list__ornz\" v-if=\"voter.ornz\">{{ voter.ornz }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"twpx-voting-control__voting-list__grid__item\">\n            <h3>{{ lang.warning }} {{ adminData.numberOfNonVoters }}</h3>\n            <div class=\"twpx-voting-control__voting-list__items\">\n                <div class=\"twpx-voting-control__voting-list__item\" v-for=\"voter in adminData.listNoneVoters\" :key=\"voter.name\">\n                    <div class=\"twpx-voting-control__voting-list__name\">{{ voter.name }}</div>\n                    <div class=\"twpx-voting-control__voting-list__ornz\" v-if=\"voter.ornz\">{{ voter.ornz }}</div>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  "
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
        signedParameters: '',
        lang: {
          heading: 'Управление голосованием',
          infoBlocks: ['Голосует', 'Проголосовали', 'Не проголосовали'],
          statusForm: {
            heading: 'Изменить статус голосования',
            label: 'Статус',
            button: 'Сохранить',
            timerHeading: 'Таймер голосования',
            timerText: 'Установите время, которое будет выводиться на публичном экране, время не влияет на старт или окончания голосования, если вы хотите перезапустить таймер, выберите статус Голосование идет, установите новое время и сохраните статус.'
          },
          votingList: {
            heading: 'Списки голосующих',
            success: 'Проголосовавшие',
            warning: 'Не проголосовавшие'
          }
        },
        uuid: '',
        adminData: {},
        actions: {
          'votingAdminData': ['twinpx:voting.control', 'votingAdminData'],
          'setStatus': ['twinpx:voting.control', 'setStatus']
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
        var options = {
          mode: 'class',
          data: payload
        };
        if (this.signedParameters) {
          options.signedParameters = this.signedParameters;
        }
        return BX.ajax.runComponentAction(this.actions[method][0], this.actions[method][1], options);
      }
    }
  });

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var controlsStore = ui_vue3_pinia.defineStore('controls', {
    state: function state() {
      return {
        controls: [{
          "property": "select",
          "type": "dropdown",
          "id": "statusControl",
          "name": "STATUS",
          "label": "Статус дела",
          "options": [{
            "label": "Вывести на экраны",
            "code": "1"
          }, {
            "label": "Начать голосование",
            "code": "2"
          }, {
            "label": "Приостановить голосование",
            "code": "3"
          }, {
            "label": "Завершить голосование",
            "code": "4"
          }],
          "value": "",
          "disabled": false
        }, {
          "property": "num",
          "id": "minutesControl",
          "name": "MINUTES",
          "label": "Минут",
          "value": "",
          "required": true
        }, {
          "property": "num",
          "id": "secondsControl",
          "name": "SECONDS",
          "label": "Секунд",
          "value": "",
          "required": true
        }]
      };
    },
    actions: {
      changeTimer: function changeTimer(statuses) {
        var timerStatus = statuses.find(function (s) {
          return s.timer;
        });
        var timer = timerStatus ? timerStatus.timer : 0;
        this.controls[1].value = String(parseInt(timer / 60, 10));
        this.controls[2].value = String(parseInt(timer % 60, 10));
      },
      changeStatus: function changeStatus(options, selected) {
        this.controls[0].options = options.map(function (option) {
          return _objectSpread$1(_objectSpread$1({}, option), {}, {
            label: option.status,
            code: option.id
          });
        });
        this.controls[0].value = selected;
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

  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {
        adminDataTimestamp: 0
      };
    },
    components: {
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      InfoBlocks: InfoBlocks,
      StatusForm: StatusForm,
      VotingList: VotingList
    },
    // language=Vue
    template: "\n    <div class=\"twpx-voting-control\">\n\n      <div class=\"twpx-voting-control__loader\" v-if=\"loading\">\n        <LoaderCircle :show=\"loading\" />\n      </div>\n\n      <MessageComponent v-else-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n      <div class=\"twpx-voting-control__wrapper\" v-else>\n\n        <h2>{{ lang.heading }}</h2>\n\n        <InfoBlocks :lang=\"lang.infoBlocks\" :adminData=\"adminData\" />\n\n        <StatusForm :lang=\"lang.statusForm\" :value=\"adminData.selectedStatus\" :controls=\"controls\" @input=\"input\" @setStatus=\"setStatus\" />\n\n        <VotingList :lang=\"lang.votingList\" :adminData=\"adminData\" />\n\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['customData', 'signedParameters', 'actions', 'lang', 'infoBlocks', 'adminData', 'uuid', 'loading', 'error'])), ui_vue3_pinia.mapState(controlsStore, ['controls'])),
    methods: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp', 'changeSelectedStatus'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'changeStatus', 'changeTimer'])), {}, {
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
      getVotingAdminData: function getVotingAdminData() {
        var _this2 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
          var timestamp, result;
          return _regeneratorRuntime$1().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                timestamp = Date.now();
                _this2.adminDataTimestamp = timestamp;
                _context.prev = 2;
                _context.next = 5;
                return _this2.runBitrixMethod('votingAdminData', {
                  uuid: _this2.uuid
                });
              case 5:
                result = _context.sent;
                if (!(timestamp !== _this2.adminDataTimestamp)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return");
              case 8:
                _this2.changeProp('adminData', result.data);
                _this2.changeStatus(result.data.statuses, result.data.selectedStatus);
                _this2.changeTimer(result.data.statuses);
                _this2.changeProp('loading', false);
                _context.next = 18;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);
                _this2.changeProp('loading', false);
                _this2.changeProp('error', _context.t0.errors[0].message);
              case 18:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 14]]);
        }))();
      },
      setStatus: function setStatus(value) {
        var _this3 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee2() {
          var options;
          return _regeneratorRuntime$1().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this3.changeProp('loading', true);
                _context2.prev = 1;
                options = {
                  uuid: _this3.uuid,
                  id: String(value),
                  timer: parseInt(_this3.controls[1].value || 0, 10) * 60 + parseInt(_this3.controls[2].value || 0, 10)
                };
                _context2.next = 5;
                return _this3.runBitrixMethod('setStatus', options);
              case 5:
                _context2.next = 11;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                _this3.changeProp('loading', false);
                _this3.changeProp('error', _context2.t0.errors[0].message);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[1, 7]]);
        }))();
      },
      setPushAndPull: function setPushAndPull() {
        var _this = this;
        if (window.BX && BX.ready) {
          BX.ready(function () {
            BX.PULL.subscribe({
              moduleId: 'voting',
              command: _this.uuid,
              callback: function (params, extra, command) {
                // console.log('Receive params:', params)
                // console.log('Receive extra:', extra)
                // console.log('Receive command:', command)
                console.log('pull');
                _this.getVotingAdminData();
              }.bind(this)
            });
            BX.PULL.extendWatch('VOTING-CONTROL');
          });
        }
      }
    }),
    mounted: function mounted() {
      this.changeProp('loading', true);
      this.getVotingAdminData();
      this.setPushAndPull();
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingControl = /*#__PURE__*/function () {
    function VotingControl(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingControl);
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
    babelHelpers.createClass(VotingControl, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'VotingControl',
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
    return VotingControl;
  }();

  exports.VotingControl = VotingControl;

}((this.BX = this.BX || {}),BX,BX.Loaders,BX.AAS,BX.Controls,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
