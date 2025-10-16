/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_buttonComponent,local_vueComponents_modalYesNo,ui_vue3_pinia) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        lang: {
          registration: {
            heading: 'Регистрация на съезд',
            text: 'Добро пожаловать на страницу  регистрации на съезд. Кнопка регистрации будет доступна в день съезда  24 октября 2025 года.',
            subtitle: 'Ваши данные',
            button: 'Зарегистрироваться'
          },
          list: {
            heading: 'Список голосований',
            text: 'Уважаемые делегаты, голосования проходят строго по порядку и автоматически выводятся в приложение. Следите за их ходом на экране. Как только голосование станет доступным, оно автоматически обновится в вашем приложении.'
          },
          error: {
            registration: 'Вы не зарегистрированы как делегат съезда. Если считаете это ошибкой, обратитесь в Дирекцию СРО ААС по телефону +7 (495) 734-22-22.',
            registrationButton: 'Регистрация закончена.'
          }
        },
        actions: {
          'getState': ['twinpx:voting.app', 'getState'],
          'congressRegistration': ['twinpx:voting.app', 'congressRegistration'],
          'votingStatuses': ['twinpx:voting.control', 'votingStatuses'],
          'groupsQuestions': ['twinpx:voting.form', 'groupsQuestions'],
          'submitVotingResult': ['twinpx:voting.app', 'submitVotingResult']
        },
        loading: false,
        loadingRegistration: false,
        loadingVoting: false,
        error: '',
        errorRegistration: '',
        errorVoting: '',
        params: {},
        statuses: [],
        groupInfo: {},
        stateWatcher: false,
        labels: {
          'voting_v1': 'label-gray',
          'voting_v2': 'label-blue',
          'voting_v3': 'label-orange',
          'voting_v4': 'label-gray',
          'voting_v5': 'label-green',
          'voting_v6': 'label-gray'
        }
      };
    },
    actions: {
      getStatuses: function getStatuses() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var statuses;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.runBitrixMethod('votingStatuses');
              case 3:
                statuses = _context.sent;
                _this.changeProp('statuses', statuses.data);
                _context.next = 10;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _this.changeProp('errorVoting', _context.t0 !== null && _context.t0 !== void 0 && _context.t0.errors ? _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.errors[0].message : _context.t0);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 7]]);
        }))();
      },
      addCheckedNum: function addCheckedNum() {
        this.params.voting.questionsGroups.forEach(function (g) {
          g.questions.forEach(function (q) {
            q.checkedNum = String(q.type) === '1' ? 0 : undefined;
          });
        });
      },
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
      },
      changeChecked: function changeChecked(_ref3) {
        var answer = _ref3.answer,
          checked = _ref3.checked;
        answer.checked = checked;
      },
      changeCheckedNum: function changeCheckedNum(_ref4) {
        var question = _ref4.question,
          checkedNum = _ref4.checkedNum;
        question.checkedNum = checkedNum;
      },
      setActiveQuestion: function setActiveQuestion(_ref5) {
        var question = _ref5.question;
        this.removeActiveQuestion();
        question.isActive = true;
      },
      removeActiveQuestion: function removeActiveQuestion() {
        this.params.voting.questionsGroups.forEach(function (group) {
          group.questions.forEach(function (question) {
            question.isActive = false;
          });
        });
      }
    }
  });

  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    components: {
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    template: "\n        <div class=\"twpx-voting-client__header\">\n            <img width=\"62\" height=\"54\" alt=\"\u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u043E\u0432 \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \xAB\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\xBB\" src=\"/local/templates/aas/images/logo-aas-small.svg\">\n            <span>{{ params.name }}</span>\n        </div>\n\n        <div class=\"twpx-voting-client\">\n\n            <div class=\"twpx-voting-client__loader\" v-if=\"loading\">\n                <LoaderCircle :show=\"loading\" />\n            </div>\n\n            <MessageComponent v-else-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n            <router-view v-else />\n        </div>\n    ",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['loading', 'error', 'params', 'statuses'])),
    methods: _objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp', 'runBitrixMethod', 'addCheckedNum', 'getStatuses'])),
    mounted: function mounted() {
      var _this = this;
      _this.changeProp('loading', true);
      if (window.BX && BX.ready) {
        BX.ready( /*#__PURE__*/babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
          return _regeneratorRuntime$1().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                BX.PULL.subscribe({
                  moduleId: 'voting-app',
                  callback: function (data) {
                    console.log('Command:', data.command);
                    console.log('Params:', data.params);
                    // console.log('Extra:', data.extra)
                    _this.changeProp('params', data.params);
                    if (data.command === 'state_3') {
                      _this.changeProp('pollId', data.params.votingId);
                      _this.addCheckedNum();
                      if (!_this.statuses.length) {
                        _this.getStatuses();
                      }
                    }
                    _this.$router.push("/".concat(data.command));
                    _this.changeProp('loading', false);
                    _this.changeProp('error', '');
                    _this.changeProp('errorVoting', '');
                  }.bind(this)
                });
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        })));
      }
      setTimeout( /*#__PURE__*/babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee2() {
        return _regeneratorRuntime$1().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this.runBitrixMethod('getState');
            case 3:
              _context2.next = 9;
              break;
            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              _this.changeProp('loading', false);
              _this.changeProp('error', _context2.t0 !== null && _context2.t0 !== void 0 && _context2.t0.errors ? _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.errors[0].message : _context2.t0);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 5]]);
      })), 5000);
    }
  };

  function _regeneratorRuntime$2() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$2 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Registration = {
    data: function data() {
      return {
        items: [{
          code: 'name',
          title: 'ФИО'
        }, {
          code: 'ornz',
          title: 'ОРНЗ'
        }]
      };
    },
    components: {
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue
    template: "\n    <div class=\"twpx-voting-registration twpx-voting-client-block\">\n\n      <h1>{{ lang.registration.heading }}</h1>\n\n      <div class=\"twpx-voting-client__loader\" v-if=\"loadingRegistration\">\n          <LoaderCircle :show=\"loadingRegistration\" />\n      </div>\n\n      <MessageComponent v-else-if=\"errorRegistration\" type=\"error\" size=\"big\" :message=\"errorRegistration\" />\n\n      <div v-else>\n\n        <div class=\"twpx-voting-client-content\">\n          <div class=\"twpx-voting-client-text\">{{ lang.registration.text }}</div>\n          <div class=\"twpx-voting-registration__items\">\n            <h2>{{ lang.registration.subtitle }}</h2>\n            <div class=\"twpx-voting-registration__item\" v-for=\"item in items\" :key=\"item.code\">\n              <span>{{ item.title }}</span>\n              <span>{{ params[item.code] }}</span>\n            </div>\n          </div>\n          <MessageComponent v-if=\"params.closeRegister\" type=\"error\" size=\"big\" :message=\"lang.error.registrationButton\" />\n          <ButtonComponent v-else :text=\"lang.registration.button\" :props=\"['secondary', 'large']\" :disabled=\"!params.canRegister\" @clickButton=\"register\" />\n        </div>\n\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'loadingRegistration', 'errorRegistration', 'params'])),
    methods: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp', 'runBitrixMethod'])), {}, {
      register: function register() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee() {
          var response;
          return _regeneratorRuntime$2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.changeProp('loadingRegistration', true);
                _context.prev = 1;
                _context.next = 4;
                return _this.runBitrixMethod('congressRegistration', {
                  userId: BX.message('USER_ID')
                });
              case 4:
                response = _context.sent;
                console.log(response);
                _this.changeProp('loadingRegistration', false);
                _this.changeProp('errorRegistration', '');
                _context.next = 14;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this.changeProp('loadingRegistration', false);
                _this.changeProp('errorRegistration', _context.t0 !== null && _context.t0 !== void 0 && _context.t0.errors ? _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.errors[0].message : _context.t0);
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 10]]);
        }))();
      }
    }),
    mounted: function mounted() {
      if (this.params.notInList === true) {
        this.changeProp('errorRegistration', this.lang.error.registration);
      } else {
        this.changeProp('errorRegistration', '');
      }
    }
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var List = {
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    template: "\n\n    <div class=\"twpx-voting-list twpx-voting-client-block\">\n      <h1>{{ lang.list.heading }}</h1>\n      \n      <MessageComponent v-if=\"error\" :message=\"error\" size=\"big\" type=\"error\" />\n\n      <div v-else class=\"twpx-voting-client-content\">\n        <div class=\"twpx-voting-client-text\">{{ lang.list.text }}</div>\n        <div class=\"twpx-voting-list__items\">\n          <div class=\"twpx-voting-list__item\" v-for=\"item in params.votingList\" :key=\"item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n              <path d=\"M3.25 10.25H1.5V20.75C1.5 21.7165 2.2835 22.5 3.25 22.5H20.75C21.7165 22.5 22.5 21.7165 22.5 20.75V10.25H20.75M3.25 10.25L12 15.5L20.75 10.25M3.25 10.25V5C3.25 3.067 4.817 1.5 6.75 1.5H17.25C19.183 1.5 20.75 3.067 20.75 5V10.25\" stroke=\"#F2762E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n            <span>{{ item }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\t",
    computed: _objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'error', 'params'])),
    methods: _objectSpread$3({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp'])),
    mounted: function mounted() {}
  };

  var formControlCheckbox = {
    data: function data() {
      return {
        checked: this.answer.checked
      };
    },
    props: ['pollId', 'groups', 'question', 'answer', 'disabled'],
    emits: ['setActiveQuestion', 'form-control-change'],
    template: "\n        <label class=\"b-poll__form-control\" :class=\"[{'i-active': checked}, {'i-disabled': getDisabledClass()}]\">\n            <div class=\"b-poll__form-control__content\">\n                <div class=\"b-poll__form-control__img\" :style=\"getStyle()\" v-if=\"answer.image\"></div>\n                <div class=\"b-poll__form-control__text\">\n                    <b v-if=\"answer.name\" v-html=\"answer.name\"></b>\n                    <span v-if=\"answer.description\" v-html=\"answer.description\"></span>\n                </div>\n            </div>\n            <div class=\"b-poll__checkbox\">\n                <input type=\"checkbox\" :name=\"answer.parentUuid\" v-model=\"checked\" :value=\"answer.uuid\" class=\"filled-in\" @change=\"change()\">\n                <span></span>\n            </div>\n        </label>\n    ",
    methods: {
      change: function change() {
        //emit control change
        this.$emit('form-control-change', {
          answer: this.answer,
          checked: this.checked
        });

        //set question as active
        this.$emit('setActiveQuestion');

        //change local storage
        var storageObj = {};
        if (window.localStorage.getItem(this.pollId)) {
          storageObj = JSON.parse(window.localStorage.getItem(this.pollId));
        }
        storageObj[this.answer.value] = this.checked;
        window.localStorage.setItem(this.pollId, JSON.stringify(storageObj));
      },
      getDisabledClass: function getDisabledClass() {
        return this.disabled || !this.checked && String(this.question.selectableAnswers) === String(this.question.checkedNum);
      },
      getStyle: function getStyle() {
        return "background-image: url('" + this.answer.image + "')";
      }
    }
  };

  var formControlNumber = {
    data: function data() {
      return {};
    },
    props: ['pollId', 'answer'],
    emits: ['removeActiveQuestion'],
    template: "\n    <div class=\"b-poll__form-control\">\n        <div class=\"b-poll__form-control__content\">\n            <div class=\"b-poll__form-control__img\" :style=\"getStyle()\" v-if=\"answer.img\"></div>\n            <div class=\"b-poll__form-control__text\"><b v-html=\"answer.title\"></b><span v-html=\"answer.note\"></span></div>\n        </div>\n        <div class=\"b-poll__input b-float-label\">\n            <label class=\"b-poll__input-label active\">{{answer.label}}</label>\n            <input type=\"number\" :name=\"answer.name\" v-model=\"answer.value\" @change=\"change\">\n        </div>\n    </div>\n    ",
    methods: {
      change: function change(e) {
        e.target.parentNode.classList.add('i-active');

        //set question as active
        this.$emit('removeActiveQuestion');

        //change local storage
        var storageObj = {};
        if (window.localStorage.getItem(this.pollId)) {
          storageObj = JSON.parse(window.localStorage.getItem(this.pollId));
        }
        storageObj[this.answer.name] = this.answer.value;
        window.localStorage.removeItem(this.pollId);
        window.localStorage.setItem(this.pollId, JSON.stringify(storageObj));
      },
      getStyle: function getStyle() {
        return "background-image: url('" + this.answer.img + "')";
      }
    }
  };

  var formControlRadio = {
    data: function data() {
      return {
        checked: this.answer.checked
      };
    },
    props: ['pollId', 'answer', 'disabled'],
    emits: ['removeActiveQuestion', 'form-control-change'],
    template: "\n        <label class=\"b-poll__form-control\" :class=\"{'i-active': checked, 'i-disabled': disabled}\">\n            <div class=\"b-poll__form-control__content\">\n                <div class=\"b-poll__form-control__img\" :style=\"getStyle()\" v-if=\"answer.image\"></div>\n                <div class=\"b-poll__form-control__text\">\n                    <b v-if=\"answer.name\" v-html=\"answer.name\"></b>\n                    <span v-if=\"answer.description\" v-html=\"answer.description\"></span>\n                </div>\n            </div>\n            <div class=\"b-poll__radio\"><input type=\"radio\" :name=\"answer.parentUuid\" :checked=\"checked\" :value=\"answer.uuid\" class=\"with-gap\" @change=\"change\"><span></span></div>\n        </label>\n    ",
    methods: {
      change: function change(e) {
        if (e.target.checked) {
          e.target.closest('.b-poll__questions__set').querySelectorAll('label').forEach(function (label) {
            //set inactive
            label.classList.remove('i-active');
          });
          e.target.closest('label').classList.add('i-active');
        }

        //set question as active
        this.$emit('removeActiveQuestion');

        //set checked
        this.checked = true;

        //emit control change
        this.$emit('form-control-change', {
          answer: this.answer,
          checked: this.checked
        });

        //change local storage
        var storageObj = {};
        if (window.localStorage.getItem(this.pollId)) {
          storageObj = JSON.parse(window.localStorage.getItem(this.pollId));
        }
        if (e.target.checked) {
          //sibling radios
          e.target.closest('.b-poll__questions__set').querySelectorAll('input[type=radio]').forEach(function (radio) {
            storageObj[radio.value] = radio.checked;
          });
          //this radio
          storageObj[this.answer.uuid] = this.checked;
        }
        window.localStorage.removeItem(this.pollId);
        window.localStorage.setItem(this.pollId, JSON.stringify(storageObj));
      },
      getStyle: function getStyle() {
        return "background-image: url('" + this.answer.image + "')";
      }
    }
  };

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var questionComponent = {
    data: function data() {
      return {
        timeoutId: undefined,
        animatePulse: false
      };
    },
    components: {
      formControlCheckbox: formControlCheckbox,
      formControlNumber: formControlNumber,
      formControlRadio: formControlRadio
    },
    props: ['pollId', 'groups', 'groupIndex', 'questionIndex', 'question', 'votingStatusXml'],
    emits: ['changeChecked', 'changeCheckedNum', 'setActiveQuestion'],
    template: "\n\n        <div class=\"b-poll__questions__item\" :id=\"'item_' + groupIndex + '_' + questionIndex\">\n            <div class=\"b-poll__questions__info\" :class=\"getInfoClass()\" v-if=\"question.selectableAnswers\">{{question.checkedNum}} \u0438\u0437 {{question.selectableAnswers}}</div>\n\n            <h3 v-if=\"question.name\">{{question.name}}</h3>\n            <p v-if=\"question.description\" v-html=\"question.description\" class=\"twpx-voting-description\"></p>\n\n            <div class=\"b-poll__questions__note\" :class=\"getNoteClass()\" v-if=\"noteVisibility\"><div>\u0412\u044B\u0431\u0440\u0430\u043D\u043E {{question.checkedNum}} \u0438\u0437 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0445 {{question.selectableAnswers}}</div></div>\n\n            <div class=\"b-poll__questions__set\" v-if=\"votingStatusXml!=='voting_v5' && votingStatusXml!=='voting_v6'\">\n                <div v-for=\"answer in question.answers\" :key=\"Math.floor(Math.random() * 100000)\">\n\n                    <formControlCheckbox v-if=\"question.type === '1'\"\n                        :pollId=\"pollId\"\n                        :groups=\"groups\"\n                        :answer=\"answer\"\n                        :question=\"question\"\n                        :disabled=\"votingStatusXml==='voting_v2' || votingStatusXml==='voting_v4'\"\n                        @form-control-change=\"formControlChange\"\n                        @setActiveQuestion=\"setActiveQ\"\n                    />\n\n                    <formControlRadio v-else-if=\"question.type === '0'\"\n                        :pollId=\"pollId\"\n                        :groups=\"groups\"\n                        :answer=\"answer\"\n                        :disabled=\"votingStatusXml==='voting_v2' || votingStatusXml==='voting_v4'\"\n                        @removeActiveQuestion=\"removeActiveQ\"\n                        @form-control-change=\"radioControlChange\"\n                    />\n\n                    <formControlNumber v-else-if=\"question.type === 'number'\"\n                        :pollId=\"pollId\"\n                        :groups=\"groups\"\n                        :answer=\"answer\"\n                        @removeActiveQuestion=\"removeActiveQ\"\n                    />\n                </div>\n            </div>\n\n        </div>\n    ",
    computed: {
      noteVisibility: function noteVisibility() {
        return this.votingStatusXml !== 'voting_v2' && this.votingStatusXml !== 'voting_v4' && this.votingStatusXml !== 'voting_v5' && this.votingStatusXml !== 'voting_v6' && this.question.type === '1' && this.question.selectableAnswers;
      }
    },
    methods: {
      setActiveQ: function setActiveQ(args) {
        this.$emit('setActiveQuestion', _objectSpread$4(_objectSpread$4({}, args), {}, {
          question: this.question
        }));
      },
      removeActiveQ: function removeActiveQ(args) {
        this.$emit('removeActiveQuestion', args);
      },
      getInfoClass: function getInfoClass() {
        return {
          'i-show': this.question.checkedNum > 0 && this.question.isActive,
          'bg-success': String(this.question.selectableAnswers) === String(this.question.checkedNum),
          animate__animated: true,
          animate__pulse: this.animatePulse
        };
      },
      getNoteClass: function getNoteClass() {
        return {
          'text-success': Number(this.question.selectableAnswers) === Number(this.question.checkedNum),
          'text-danger': this.question.checkedNum === 0
        };
      },
      formControlChange: function formControlChange(args) {
        var _this = this;
        //commit checked
        this.$emit('changeChecked', args);

        //change checked num
        this.changeCheckedNum();

        //animate the block
        this.animatePulse = false;
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () {
          return _this.animatePulse = true;
        }, 0);
      },
      radioControlChange: function radioControlChange(args) {
        this.$emit('changeChecked', args);
      },
      changeCheckedNum: function changeCheckedNum() {
        var num = this.question.answers.reduce(function (count, answer) {
          return answer.checked === true ? count + 1 : count;
        }, 0);
        this.$emit('changeCheckedNum', {
          question: this.question,
          checkedNum: num
        });
      }
    },
    mounted: function mounted() {
      this.changeCheckedNum();

      /*let observer = new IntersectionObserver((entries, observer) => {
          //console.log('item_' + this.questionIndex, observer);
          let entry = entries[0];
            if (entry.intersectionRatio > 0) {
          entry.target.classList.add('b-poll__questions__item--fixed');
          } else {
          entry.target.classList.remove('b-poll__questions__item--fixed');
          }
      });
        observer.observe(
          document.querySelector(`#item_${this.groupIndex}_${this.questionIndex}`)
      );*/
    }
  };

  function _regeneratorRuntime$3() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$3 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Voting = {
    data: function data() {
      return {};
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      questionComponent: questionComponent
    },
    // language=Vue
    template: "\n\n    <ModalYesNo\n      heading=\"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435\"\n      text=\"\u0412\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u043B\u043E\u0441, \u0438 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E.\"\n      yes=\"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C\"\n      no=\"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\"\n      :stateWatcher=\"stateWatcher\"\n      @clickYes=\"clickYes\"\n      @clickNo=\"clickNo\"\n    />\n\n    <div v-if=\"!params.votingStatusXml || params.votingStatusXml==='voting_v1'\" class=\"twpx-voting-voting-status\"></div>\n\n    <div v-else-if=\"params.votingStatusXml==='voting_v3' && params.userVoted\" class=\"twpx-voting-voting-status\">\n      <div class=\"twpx-voting-voting twpx-voting-client-block\">\n        <h1>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F</h1>\n        <MessageComponent type=\"success\" size=\"big\" message=\"\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0432\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u0432\u0430\u043B\u0438.\" />\n      </div>\n    </div>\n\n    <div v-else class=\"twpx-voting-voting twpx-voting-client-block\">\n\n      <div :class=\"'twpx-voting-status ' + labels[params.votingStatusXml]\" v-if=\"status\">{{ status }}</div>\n      \n      <div class=\"twpx-voting-voting-name\">\n        <h1 v-if=\"params.voting.name\">{{ params.voting.name }}</h1>\n        <p v-if=\"params.voting.description\" class=\"twpx-voting-description\">{{ params.voting.description }}</p>\n      </div>\n\n      <div class=\"twpx-voting-client__loader\" v-if=\"loadingVoting\">\n        <LoaderCircle :show=\"loadingVoting\" />\n      </div>\n      \n      <MessageComponent v-else-if=\"errorVoting\" type=\"error\" size=\"big\" :message=\"errorVoting\" />\n\n      <div v-else style=\"display: grid; gap: 24px;\">\n\n        <div class=\"b-poll__groups\" :data-id=\"pollId\">\n          <div class=\"b-poll__groups__item\" v-for=\"(group, groupIndex) in params.voting.questionsGroups\">\n\n            <h2 v-if=\"group.name\">{{group.name}}</h2>\n            <p v-if=\"group.description\" v-html=\"group.description\" class=\"twpx-voting-description\"></p>\n\n            <div class=\"b-poll__questions\">\n              <div v-for=\"(question, questionIndex) in group.questions\">\n\n                <questionComponent\n                  :pollId=\"pollId\"\n                  :groups=\"groups\"\n                  :groupIndex=\"groupIndex\"\n                  :questionIndex=\"questionIndex\"\n                  :question=\"question\"\n                  :votingStatusXml=\"params.votingStatusXml\"\n                  @changeChecked=\"changeChecked\"\n                  @changeCheckedNum=\"changeCheckedNum\"\n                  @setActiveQuestion=\"setActiveQuestion\"\n                />\n\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <MessageComponent v-if=\"params.votingStatusXml==='voting_v5'\" type=\"lock-green\" size=\"big\" message=\"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E\" />\n        <MessageComponent v-else-if=\"params.votingStatusXml==='voting_v6'\" type=\"lock\" size=\"big\" message=\"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432\u0435\" />\n        <ButtonComponent v-else text=\"\u041F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u0442\u044C\" :props=\"['wide', 'secondary', 'large']\" :disabled=\"isVoteButtonDisabled\" @clickButton=\"clickVoteButton\" />\n      \n      </div>\n    </div>\n  ",
    computed: _objectSpread$5(_objectSpread$5({}, ui_vue3_pinia.mapState(dataStore, ['loadingVoting', 'errorVoting', 'params', 'statuses', 'groupInfo', 'stateWatcher', 'labels', 'pollId', 'groups'])), {}, {
      status: function status() {
        var _this = this;
        var statusObj = this.statuses ? this.statuses.find(function (s) {
          return String(s.id) === String(_this.params.votingStatus);
        }) : undefined;
        return statusObj ? statusObj.status : '';
      },
      isVoteButtonDisabled: function isVoteButtonDisabled() {
        return this.params.votingStatusXml === 'voting_v2' || this.params.votingStatusXml === 'voting_v4' || !this.params.voting.questionsGroups.every(function (g) {
          return g.questions.every(function (q) {
            return q.answers.some(function (a) {
              return a.checked;
            });
          });
        });
      }
    }),
    methods: _objectSpread$5(_objectSpread$5({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp', 'runBitrixMethod', 'changeChecked', 'changeCheckedNum', 'setActiveQuestion', 'removeActiveQuestion', 'addCheckedNum'])), {}, {
      clickVoteButton: function clickVoteButton() {
        this.changeProp('stateWatcher', !this.stateWatcher);
      },
      clickYes: function clickYes() {
        this.changeProp('stateWatcher', !this.stateWatcher);
        this.submitVotingResult();
      },
      clickNo: function clickNo() {
        this.changeProp('stateWatcher', !this.stateWatcher);
      },
      submitVotingResult: function submitVotingResult() {
        var _this2 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee() {
          var answer, data;
          return _regeneratorRuntime$3().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                answer = {};
                _this2.params.voting.questionsGroups.forEach(function (g) {
                  g.questions.forEach(function (q) {
                    if (q.type === '1') {
                      // checkbox
                      answer[q.id] = q.answers.filter(function (a) {
                        return a.checked;
                      }).map(function (a) {
                        return a.id;
                      });
                    } else {
                      // radio
                      var checked = q.answers.find(function (a) {
                        return a.checked;
                      });
                      if (checked) {
                        answer[q.id] = checked.id;
                      }
                    }
                  });
                });
                data = {
                  sessid: BX.message('bitrix_sessid'),
                  uid: BX.message('USER_ID'),
                  poll: _this2.params.votingId,
                  answer: answer
                };
                _context.prev = 3;
                _this2.changeProp('loadingVoting', true);
                _context.next = 7;
                return _this2.runBitrixMethod('submitVotingResult', data);
              case 7:
                _this2.changeProp('loadingVoting', false);
                _context.next = 14;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                _this2.changeProp('loadingVoting', false);
                _this2.changeProp('errorVoting', _context.t0 !== null && _context.t0 !== void 0 && _context.t0.errors ? _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.errors[0].message : _context.t0);
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[3, 10]]);
        }))();
      }
    }),
    mounted: function mounted() {}
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingClient = /*#__PURE__*/function () {
    function VotingClient(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingClient);
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
          component: Registration,
          alias: '/state_1'
        }, {
          path: '/state_2',
          component: List
        }, {
          path: '/state_3',
          component: Voting
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(VotingClient, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'VotingClient',
          components: {
            Application: Application
          },
          template: "\n        <Application />\n      ",
          beforeMount: function beforeMount() {
            if (self.options) {
              dataStore().customData = self.options.data || {};
              dataStore().signedParameters = self.options.signedParameters || '';
            }
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
      key: "getFormStore",
      value: function getFormStore() {
        return formStore;
      }
    }]);
    return VotingClient;
  }();

  exports.VotingClient = VotingClient;

}((this.BX = this.BX || {}),BX.Vue3,BX.Vue3.VueRouter,BX.Loaders,BX.AAS,BX.AAS,BX.Modals,BX.Vue3.Pinia));//# sourceMappingURL=application.bundle.js.map
