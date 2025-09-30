/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_modalYesNo,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_modalAnyContent,ui_vue3_pinia) {
  'use strict';

  var DetailInfo = {
    props: ['voting', 'lang'],
    emits: ['clickChangeDetail'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-poll-detail-info\">\n            <div class=\"twpx-poll-detail-info__block\" v-for=\"block in detail\" :key=\"block.id\">\n                <h3 v-if=\"block.heading\">{{ block.heading }}</h3>\n                <div class=\"twpx-poll-detail-info__items\" v-if=\"block.items && block.items.length\">\n                    <div class=\"twpx-poll-detail-info__item\" v-for=\"item in block.items\" :key=\"item.title\">\n                        <div class=\"twpx-poll-detail-info__title\" v-html=\"item.title\"></div>\n                        <div class=\"twpx-poll-detail-info__value\" v-html=\"item.value\"></div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <ButtonComponent :text=\"lang.changeButton\" :props=\"['serve', 'small']\" @clickButton=\"$emit('clickChangeDetail')\" />\n            </div>\n        </div>\n    ",
    computed: {
      detail: function detail() {
        if (Object.keys(this.voting).length <= 0) return;
        return [{
          id: 1,
          heading: 'Общие данные',
          items: [{
            title: 'Название голосования',
            value: this.voting.name
          }, {
            title: 'Текст анонса',
            value: this.voting.announcement
          }, {
            title: 'Текст подробного описания',
            value: this.voting.description
          }]
        }, {
          id: 2,
          heading: 'Сроки',
          items: [{
            title: 'Дата начала активности',
            value: this.toHumanWithTimeBlock(this.voting.activityStartDate)
          }, {
            title: 'Дата окончания активности',
            value: this.toHumanWithTimeBlock(this.voting.activityEndDate)
          }, {
            title: 'Дата окончания голосования',
            value: this.toHumanWithTimeBlock(this.voting.voteEndDate)
          }]
        }, {
          id: 3,
          heading: 'Технические',
          items: [{
            title: 'Количество попыток',
            value: this.voting.numberVotesLimit
          }, {
            title: 'Количество голосующих',
            value: this.voting.numberVoters
          }, {
            title: 'Сообщение у кнопки',
            value: this.voting.buttonMessage
          }, {
            title: 'Сообщение после голосования',
            value: this.voting.messageAfterVoting
          }, {
            title: 'Порядок размещения',
            value: this.voting.sortIndex
          }]
        }, {
          id: 4,
          heading: 'Доступы',
          items: [{
            title: 'ID групп голосующих',
            value: this.voting.groupsVoting
          }, {
            title: 'ID групп Избирательных комиссий',
            value: this.voting.groupsCommission
          }]
        }];
      }
    },
    methods: {
      toHumanWithTimeBlock: function toHumanWithTimeBlock(input) {
        if (typeof input !== 'string') return '';
        var m = input.trim().match(/^(\d{4})-(\d{2})-(\d{2})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
        if (!m) return '';
        var _m = babelHelpers.slicedToArray(m, 6),
          yyyy = _m[1],
          mm = _m[2],
          dd = _m[3],
          _m$ = _m[4],
          hh = _m$ === void 0 ? '00' : _m$,
          _m$2 = _m[5],
          min = _m$2 === void 0 ? '00' : _m$2;
        return "".concat(dd, ".").concat(mm, ".").concat(yyyy, "<div class=\"text-muted\">").concat(hh, ":").concat(min, "</div>");
      }
    }
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
        signedParameters: '',
        lang: {
          'changeButton': 'Изменить',
          deleteModal: {
            group: {
              heading: 'Подтвердите удаление группы вопросов',
              text: 'Подтвердите удаление группы вопросов. Обратите внимание: после удаления восстановить её будет невозможно.',
              no: 'Отменить',
              yes: 'Удалить'
            },
            question: {
              heading: 'Подтвердите удаление вопроса',
              text: 'Подтвердите удаление вопроса. Обратите внимание: после удаления восстановить его будет невозможно.',
              no: 'Отменить',
              yes: 'Удалить'
            },
            answer: {
              heading: 'Подтвердите удаление ответа',
              text: 'Подтвердите удаление ответа. Обратите внимание: после удаления восстановить его будет невозможно.',
              no: 'Отменить',
              yes: 'Удалить'
            }
          },
          'group': {
            block: {
              'heading': 'Создать группу вопросов',
              'text': 'Создайте группу вопросов, чтобы объединить несколько вопросов под единым заголовком и описанием. Если ваши вопросы не разделены на группы, создайте одну общую группу и добавьте все вопросы в неё. Учтите: группа является обязательным элементом голосования.',
              'button': 'Добавить группу вопросов'
            }
          },
          'groupItem': {
            heading: 'Добавить вопрос',
            text: 'Используйте эту функцию, чтобы создать новый вопрос для голосования. Укажите формулировку вопроса, при необходимости добавьте варианты ответов и сохраните его в выбранной группе.',
            button: 'Добавить вопрос'
          }
        },
        uuid: '',
        groupUuid: '',
        questionUuid: '',
        actions: {
          'voting': ['twinpx:voting.form', 'voting'],
          'editVoting': ['twinpx:voting.form', 'editVoting'],
          'groupsQuestions': ['twinpx:voting.form', 'groupsQuestions'],
          'editGroupQuestions': ['twinpx:voting.form', 'editGroupQuestions'],
          'deleteGroupQuestions': ['twinpx:voting.form', 'deleteGroupQuestions'],
          'questions': ['twinpx:voting.form', 'questions'],
          'editQuestion': ['twinpx:voting.form', 'editQuestion'],
          'deleteQuestion': ['twinpx:voting.form', 'deleteQuestion'],
          'answers': ['twinpx:voting.form', 'answers'],
          'editAnswer': ['twinpx:voting.form', 'editAnswer'],
          'deleteAnswer': ['twinpx:voting.form', 'deleteAnswer']
        },
        typeMode: 'group',
        // group, question, answer
        actionMode: 'add',
        // add, edit

        voting: [],
        groups: [],
        questions: {},
        answers: {},
        loading: false,
        error: '',
        editModalStateWatcher: false,
        editModalLoading: false,
        editModalError: '',
        deleteModalStateWatcher: false,
        itemToDelete: null
      };
    },
    actions: {
      pushItemsArray: function pushItemsArray(_ref) {
        var type = _ref.type,
          parentUuid = _ref.parentUuid,
          itemsArray = _ref.itemsArray;
        this[type][parentUuid] = itemsArray;
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
          Object.entries(this.customData).forEach(function (_ref2) {
            var _ref3 = babelHelpers.slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
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
      return {
        groupFormBlocks: [{
          id: 'group1',
          heading: 'Общие данные',
          controls: [{
            property: 'hidden',
            id: 'group1control0',
            name: 'GROUP_UUID',
            label: '',
            value: ''
          }, {
            property: 'text',
            id: 'group1control1',
            name: 'GROUP_NAME',
            label: 'Название группы вопросов',
            value: '',
            required: true,
            hint_external: "Используйте название, которое объединит несколько вопросов в один."
          }, {
            property: 'textarea',
            id: 'group1control2',
            name: 'GROUP_DESCRIPTION',
            label: 'Текст подробного описания',
            value: '',
            required: true
          }, {
            "property": "file",
            "id": 'group1control3',
            "name": "GROUP_PIC",
            "label": "Иллюстрация",
            "value": "",
            "file": "",
            "required": true,
            "accept": ["png", "jpg", "jpeg"],
            "image": true,
            "maxsize": 20000000
          }]
        }, {
          id: 'group2',
          heading: 'Технические',
          controls: [{
            property: 'num',
            id: 'group2control1',
            name: 'GROUP_SORT',
            label: 'Порядок размещения группы',
            value: '',
            required: true,
            hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
          }]
        }],
        questionFormBlocks: [{
          id: 'question1',
          heading: 'Общие данные',
          controls: [{
            property: 'hidden',
            id: 'question1control0',
            name: 'QUESTION_UUID',
            label: '',
            value: ''
          }, {
            property: 'text',
            id: 'question1control1',
            name: 'QUESTION_NAME',
            label: 'Название вопроса',
            value: '',
            required: true
          }, {
            property: 'textarea',
            id: 'question1control2',
            name: 'QUESTION_DESCRIPTION',
            label: 'Текст подробного описания',
            value: '',
            required: true
          }, {
            "property": "file",
            "id": 'question1control3',
            "name": "QUESTION_PIC",
            "label": "Иллюстрация вопроса",
            "value": "",
            "file": "",
            "required": true,
            "accept": ["svg", "png", "jpg", "jpeg"],
            "image": true,
            "maxsize": 20000000
          }]
        }, {
          id: 'question2',
          heading: 'Технические',
          controls: [{
            "property": "select",
            "type": "dropdown",
            "id": 'question2control1',
            "name": "QUESTION_TYPE",
            "label": "Тип выбора",
            "options": [{
              "label": "Радио кнопка",
              "code": "0"
            }, {
              "label": "Чекбокс",
              "code": "1"
            }],
            "value": "",
            "disabled": false
          }, {
            property: 'num',
            id: 'question2control2',
            name: 'QUESTION_NUM',
            label: 'Количество ответов',
            value: '',
            required: true,
            hint_external: 'Максимальное количество ответов на вопрос.'
          }, {
            property: 'num',
            id: 'question2control3',
            name: 'QUESTION_SORT',
            label: 'Порядок размещения на странице',
            value: '',
            required: true,
            hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
          }]
        }],
        answerFormBlocks: [{
          id: 'answer1',
          heading: 'Общие данные',
          controls: [{
            property: 'hidden',
            id: 'answer1control0',
            name: 'ANSWER_UUID',
            label: '',
            value: ''
          }, {
            property: 'text',
            id: 'answer1control1',
            name: 'ANSWER_NAME',
            label: 'Название ответа',
            value: '',
            required: true
          }, {
            property: 'textarea',
            id: 'answer1control2',
            name: 'ANSWER_DESCRIPTION',
            label: 'Подробное описание ответа',
            value: '',
            required: true
          }, {
            "property": "file",
            "id": 'answer1control3',
            "name": "ANSWER_PIC",
            "label": "Иллюстрация ответа",
            "value": "",
            "file": "",
            "required": true,
            "accept": ["svg", "png", "jpg", "jpeg"],
            "image": true,
            "maxsize": 20000000
          }]
        }, {
          id: 'answer2',
          heading: 'Технические',
          controls: [{
            property: 'num',
            id: 'answer2control1',
            name: 'ANSWER_SORT',
            label: 'Порядок размещения на странице',
            value: '',
            required: true,
            hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
          }]
        }]
      };
    },
    actions: {
      changeGroupFormBlocks: function changeGroupFormBlocks(blocks) {
        this.groupFormBlocks = blocks;
      },
      changeQuestionFormBlocks: function changeQuestionFormBlocks(blocks) {
        this.questionFormBlocks = blocks;
      },
      fillGroupForm: function fillGroupForm(group) {
        var _this = this;
        if (group) {
          var groupArray = [[0, 0, 'uuid'], [0, 1, 'name'], [0, 2, 'description'], [0, 3, 'image'], [1, 0, 'sortIndex']];
          groupArray.forEach(function (item) {
            _this.changeControlValue({
              control: _this.groupFormBlocks[item[0]].controls[item[1]],
              value: String(group[item[2]])
            });
          });
        } else {
          this.groupFormBlocks.forEach(function (b) {
            var _b$controls;
            b === null || b === void 0 ? void 0 : (_b$controls = b.controls) === null || _b$controls === void 0 ? void 0 : _b$controls.forEach(function (c) {
              _this.changeControlValue({
                control: c,
                value: ''
              });
            });
          });
        }
      },
      fillQuestionForm: function fillQuestionForm(question) {
        var _this2 = this;
        if (question) {
          var questionArray = [[0, 0, 'uuid'], [0, 1, 'name'], [0, 2, 'description'], [0, 3, 'image'], [1, 0, 'type'], [1, 1, 'selectableAnswers'], [1, 2, 'sortIndex']];
          questionArray.forEach(function (item) {
            _this2.changeControlValue({
              control: _this2.questionFormBlocks[item[0]].controls[item[1]],
              value: String(question[item[2]])
            });
          });
        } else {
          this.questionFormBlocks.forEach(function (b) {
            var _b$controls2;
            b === null || b === void 0 ? void 0 : (_b$controls2 = b.controls) === null || _b$controls2 === void 0 ? void 0 : _b$controls2.forEach(function (c) {
              _this2.changeControlValue({
                control: c,
                value: ''
              });
            });
          });
        }
      },
      fillAnswerForm: function fillAnswerForm(answer) {
        var _this3 = this;
        if (answer) {
          var answerArray = [[0, 0, 'uuid'], [0, 1, 'name'], [0, 2, 'description'], [0, 3, 'image'], [1, 0, 'sortIndex']];
          answerArray.forEach(function (item) {
            _this3.changeControlValue({
              control: _this3.answerFormBlocks[item[0]].controls[item[1]],
              value: String(answer[item[2]])
            });
          });
        } else {
          this.answerFormBlocks.forEach(function (b) {
            var _b$controls3;
            b === null || b === void 0 ? void 0 : (_b$controls3 = b.controls) === null || _b$controls3 === void 0 ? void 0 : _b$controls3.forEach(function (c) {
              _this3.changeControlValue({
                control: c,
                value: ''
              });
            });
          });
        }
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
        var _this4 = this;
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
                  _this4.setHints(control, result.data);
                } else if (result.errors) {
                  _this4.error = (_result$errors$ = result.errors[0]) === null || _result$errors$ === void 0 ? void 0 : _result$errors$.message;
                } else {
                  _this4.error = 'Invalid response format';
                }
                _context.next = 20;
                break;
              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](2);
                _this4.error = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message;
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

  var addEditStore = ui_vue3_pinia.defineStore('add-edit', {
    state: function state() {
      return {
        lang: {
          group: {
            add: {
              heading: 'Создать группу вопросов',
              cancelButton: 'Отменить',
              sendButton: 'Создать'
            },
            edit: {
              heading: 'Изменить группу вопросов',
              cancelButton: 'Отменить',
              sendButton: 'Изменить'
            }
          },
          question: {
            add: {
              heading: 'Добавить вопрос',
              cancelButton: 'Отменить',
              sendButton: 'Добавить'
            },
            edit: {
              heading: 'Изменить вопрос',
              cancelButton: 'Отменить',
              sendButton: 'Изменить'
            }
          },
          answer: {
            add: {
              heading: 'Добавить ответ',
              cancelButton: 'Отменить',
              sendButton: 'Добавить'
            },
            edit: {
              heading: 'Изменить ответ',
              cancelButton: 'Отменить',
              sendButton: 'Изменить'
            }
          }
        },
        addEditStateWatcher: false,
        addEditLoading: false,
        addEditError: '',
        image: '' // string with image url, needed for detect imageUpdate property
      };
    },

    actions: {
      addEditChangeProp: function addEditChangeProp(prop, value) {
        this[prop] = value;
      }
    }
  });

  var AnswerItem = {
    data: function data() {
      return {
        nopic: '/local/templates/aas/images/nopic.svg',
        controls: [{
          "property": "select",
          "type": "radio",
          "id": "control".concat(Math.floor(Math.random() * 10000)),
          "name": "SELECT_BUTTON_TEXT".concat(Math.floor(Math.random() * 10000)),
          "label": "",
          "options": [{
            "label": "",
            "code": "1"
          }],
          "value": ""
        }, {
          "property": "checkbox",
          "type": "checkbox",
          "id": "control".concat(Math.floor(Math.random() * 10000)),
          "name": "DEPENDENCY_CHECKBOX".concat(Math.floor(Math.random() * 10000)),
          "label": "",
          "value": "on",
          "checked": true
        }]
      };
    },
    props: ['answer', 'type'],
    emits: ['deleteAnswer', 'editAnswer'],
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-poll-answer-item\">\n            <div class=\"twpx-poll-answer-item__info\">\n                <img :src=\"answer.image || nopic\" width=\"48\" height=\"48\" alt=\"\" />\n                <div class=\"twpx-poll-answer-item__text\">{{ answer.name }}</div>\n                <ControlChoice :control=\"controls[ type ]\" @input=\"input\" />\n            </div>\n            <div class=\"twpx-poll-answer-item__buttons\">\n                <ButtonComponent :text=\"Delete\" :props=\"['icon', 'delete', 'medium']\" @clickButton=\"clickDelete\" />\n                <ButtonComponent :text=\"Edit\" :props=\"['icon', 'edit', 'medium']\" @clickButton=\"clickEdit\" />\n            </div>\n        </div>\n    ",
    methods: {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        console.log(control, checked);
        if (checked) {
          control.checked = checked;
        } else if (value) {
          control.value = value;
        }
      },
      clickDelete: function clickDelete() {
        this.$emit('deleteAnswer', this.answer);
      },
      clickEdit: function clickEdit() {
        this.$emit('editAnswer', this.answer);
      }
    }
  };

  var QuestionItem = {
    props: ['question', 'answers'],
    emits: ['deleteQuestion', 'editQuestion', 'addAnswer', 'editAnswer', 'deleteAnswer'],
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      AnswerItem: AnswerItem
    },
    template: "\n        <div class=\"twpx-poll-question-item\">\n            <div class=\"twpx-poll-question-item__wrapper\">\n                <div class=\"twpx-poll-question-item__text\">{{ question.name }}</div>\n                <div class=\"twpx-poll-question-item__buttons\">\n                    <ButtonComponent :text=\"Delete\" :props=\"['icon', 'delete', 'medium']\" @clickButton=\"clickDelete\" />\n                    <ButtonComponent :text=\"Edit\" :props=\"['icon', 'edit', 'medium']\" @clickButton=\"clickEdit\" />\n                </div>\n            </div>\n\n            <div class=\"twpx-poll-question-item__answers-block\" v-if=\"answers && answers.length\">\n                <div class=\"twpx-poll-answers\">\n                    <AnswerItem v-for=\"answer in answers\"\n                        :key=\"answer.uuid\"\n                        :answer=\"answer\"\n                        :type=\"question.type\"\n                        @editAnswer=\"editAnswer\"\n                        @deleteAnswer=\"deleteAnswer\"\n                    />\n                </div>\n                <div class=\"twpx-poll-question-item__answers-block__button\">\n                    <ButtonComponent text=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442\" :props=\"['success', 'medium']\" @clickButton=\"addAnswer\" />\n                </div>\n            </div>\n\n            <div class=\"twpx-poll-question-item__button\" v-else>\n                <ButtonComponent text=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442\" :props=\"['success', 'medium']\" @clickButton=\"addAnswer\" />\n            </div>\n        </div>\n    ",
    methods: {
      clickDelete: function clickDelete() {
        this.$emit('deleteQuestion', this.question);
      },
      clickEdit: function clickEdit() {
        this.$emit('editQuestion', this.question);
      },
      addAnswer: function addAnswer() {
        this.$emit('addAnswer', this.question);
      },
      editAnswer: function editAnswer(args) {
        this.$emit('editAnswer', args);
      },
      deleteAnswer: function deleteAnswer(args) {
        this.$emit('deleteAnswer', args);
      }
    }
  };

  var GroupItem = {
    props: ['lang', 'group', 'questions', 'answers'],
    emits: ['editGroup', 'deleteGroup', 'addQuestion', 'editQuestion', 'deleteQuestion', 'addAnswer', 'editAnswer', 'deleteAnswer'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      QuestionItem: QuestionItem
    },
    template: "\n        <div class=\"twpx-poll-group-item\">\n            <div class=\"twpx-poll-group-item__wrapper\">\n                <div class=\"twpx-poll-group-item__info\">\n                    <h2>{{ group.name }}</h2>\n                    <div class=\"twpx-poll-group-item__text\">{{ group.description }}</div>\n                </div>\n                <div class=\"twpx-poll-group-item__buttons\">\n                    <ButtonComponent text=\"Delete\" :props=\"['icon', 'delete', 'medium']\" @clickButton=\"clickDelete\" />\n                    <ButtonComponent text=\"Edit\" :props=\"['icon', 'edit', 'medium']\" @clickButton=\"clickEdit\" />\n                </div>\n            </div>\n\n            <div class=\"twpx-poll-group-item__questions\" v-if=\"questions && questions.length\">\n                <QuestionItem v-for=\"question in questions\"\n                    :key=\"question.uuid\"\n                    :question=\"question\"\n                    :answers=\"answers[question.uuid]\"\n                    @editQuestion=\"editQuestion\"\n                    @deleteQuestion=\"deleteQuestion\"\n                    @addAnswer=\"addAnswer\"\n                    @editAnswer=\"editAnswer\"\n                    @deleteAnswer=\"deleteAnswer\"\n                />\n\n                <div class=\"twpx-poll-group-item__button\">\n                    <div class=\"twpx-poll-group-item__button__wrapper\">\n                        <h4>{{ lang.heading }}</h4>\n                        <div>{{ lang.text }}</div>\n                    </div>\n                    <ButtonComponent :text=\"lang.button\" :props=\"['success', 'medium']\" @clickButton=\"addQuestion\" />\n                </div>\n            </div>\n\n            <div class=\"twpx-poll-group-item__button\" v-else>\n                <ButtonComponent :text=\"lang.button\" :props=\"['success', 'medium']\" @clickButton=\"addQuestion\" />\n            </div>\n        </div>\n    ",
    methods: {
      clickDelete: function clickDelete() {
        this.$emit('deleteGroup', this.group);
      },
      clickEdit: function clickEdit() {
        this.$emit('editGroup', this.group);
      },
      addQuestion: function addQuestion() {
        this.$emit('addQuestion', this.group);
      },
      editQuestion: function editQuestion(args) {
        this.$emit('editQuestion', args);
      },
      deleteQuestion: function deleteQuestion(args) {
        this.$emit('deleteQuestion', args);
      },
      addAnswer: function addAnswer(args) {
        this.$emit('addAnswer', args);
      },
      editAnswer: function editAnswer(args) {
        this.$emit('editAnswer', args);
      },
      deleteAnswer: function deleteAnswer(args) {
        this.$emit('deleteAnswer', args);
      }
    }
  };

  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var GroupsComponent = {
    components: {
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      GroupItem: GroupItem,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-poll-group-block\">\n            <h2>{{ lang.group.block.heading }}</h2>\n            <div v-html=\"lang.group.block.text\"></div>\n            <div>\n                <ButtonComponent :text=\"lang.group.block.button\" :props=\"['success', 'medium']\" @clickButton=\"addGroup\" />\n            </div>\n        </div>\n\n        <GroupItem v-for=\"group in groups\" :key=\"group.id\"\n            :lang=\"lang.groupItem\"\n            :group=\"group\"\n            :questions=\"questions[group.uuid]\"\n            :answers=\"answers\"\n            @editGroup=\"editGroup\"\n            @deleteGroup=\"deleteGroup\"\n            @addQuestion=\"addQuestion\"\n            @editQuestion=\"editQuestion\"\n            @deleteQuestion=\"deleteQuestion\"\n            @addAnswer=\"addAnswer\"\n            @editAnswer=\"editAnswer\"\n            @deleteAnswer=\"deleteAnswer\"\n        />\n\n        <ModalYesNo\n            :heading=\"currentLang.heading\"\n            :text=\"currentLang.text\"\n            :yes=\"currentLang.yes\"\n            :no=\"currentLang.no\"\n            :buttons=\"{\n                yes: {\n                    props: ['danger', 'large']\n                },\n                no: {\n                    props: ['gray-color', 'large']\n                }\n            }\"\n            :stateWatcher=\"deleteModalStateWatcher\"\n            @clickYes=\"clickDeleteModalYes\"\n            @clickNo=\"clickDeleteModalNo\"\n        />\n    ",
    computed: _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'uuid', 'typeMode', 'actionMode', 'groups', 'questions', 'answers', 'deleteModalStateWatcher', 'itemToDelete'])), ui_vue3_pinia.mapState(controlsStore, ['questionFormBlocks'])), ui_vue3_pinia.mapState(addEditStore, ['addEditStateWatcher'])), {}, {
      currentLang: function currentLang() {
        return this.lang.deleteModal[this.typeMode];
      }
    }),
    methods: _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp', 'pushItemsArray'])), ui_vue3_pinia.mapActions(controlsStore, ['fillGroupForm', 'fillQuestionForm', 'fillAnswerForm', 'changeControlValue'])), ui_vue3_pinia.mapActions(addEditStore, ['addEditChangeProp'])), {}, {
      addGroup: function addGroup() {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', '');
        this.changeProp('typeMode', 'group');
        this.changeProp('actionMode', 'add');
      },
      editGroup: function editGroup(group) {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', group.image);
        this.changeProp('typeMode', 'group');
        this.changeProp('actionMode', 'edit');
        this.fillGroupForm(group);
      },
      deleteGroup: function deleteGroup(group) {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
        this.changeProp('typeMode', 'group');
        this.changeProp('itemToDelete', group);
      },
      clickDeleteModalYes: function clickDeleteModalYes() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
          var item, groupResult, questionsResult, _questionsResult, _error$errors, _error$errors$;
          return _regeneratorRuntime$1().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                item = _objectSpread$1({}, _this.itemToDelete);
                _context.prev = 1;
                _this.changeProp('loading', true);
                if (!(_this.typeMode === 'group')) {
                  _context.next = 12;
                  break;
                }
                _context.next = 6;
                return _this.runBitrixMethod('deleteGroupQuestions', {
                  uuid: item.uuid
                });
              case 6:
                _context.next = 8;
                return _this.runBitrixMethod('groupsQuestions', {
                  uuid: _this.uuid
                });
              case 8:
                groupResult = _context.sent;
                _this.changeProp('groups', groupResult.data);
                _context.next = 28;
                break;
              case 12:
                if (!(_this.typeMode === 'question')) {
                  _context.next = 21;
                  break;
                }
                _context.next = 15;
                return _this.runBitrixMethod('deleteQuestion', {
                  uuid: item.uuid
                });
              case 15:
                _context.next = 17;
                return _this.runBitrixMethod('questions', {
                  uuid: item.parentUuid
                });
              case 17:
                questionsResult = _context.sent;
                _this.pushItemsArray({
                  type: 'questions',
                  parentUuid: item.parentUuid,
                  itemsArray: questionsResult.data
                });
                _context.next = 28;
                break;
              case 21:
                if (!(_this.typeMode === 'answer')) {
                  _context.next = 28;
                  break;
                }
                _context.next = 24;
                return _this.runBitrixMethod('deleteAnswer', {
                  uuid: item.uuid
                });
              case 24:
                _context.next = 26;
                return _this.runBitrixMethod('answers', {
                  uuid: item.parentUuid
                });
              case 26:
                _questionsResult = _context.sent;
                _this.pushItemsArray({
                  type: 'answers',
                  parentUuid: item.parentUuid,
                  itemsArray: _questionsResult.data
                });
              case 28:
                _this.changeProp('loading', false);
                _context.next = 35;
                break;
              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](1);
                _this.changeProp('loading', false);
                _this.changeProp('error', (_context.t0 === null || _context.t0 === void 0 ? void 0 : (_error$errors = _context.t0.errors) === null || _error$errors === void 0 ? void 0 : (_error$errors$ = _error$errors[0]) === null || _error$errors$ === void 0 ? void 0 : _error$errors$.message) || _context.t0);
              case 35:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 31]]);
        }))();
      },
      clickDeleteModalNo: function clickDeleteModalNo() {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
      },
      addQuestion: function addQuestion(group) {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', '');
        this.changeProp('typeMode', 'question');
        this.changeProp('actionMode', 'add');
        this.changeProp('groupUuid', group.uuid);
      },
      editQuestion: function editQuestion(question) {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', question.image);
        this.changeProp('typeMode', 'question');
        this.changeProp('actionMode', 'edit');
        this.changeProp('groupUuid', question.parentUuid);
        this.fillQuestionForm(question);
      },
      deleteQuestion: function deleteQuestion(question) {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
        this.changeProp('typeMode', 'question');
        this.changeProp('itemToDelete', question);
      },
      addAnswer: function addAnswer(question) {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', '');
        this.changeProp('typeMode', 'answer');
        this.changeProp('actionMode', 'add');
        this.changeProp('questionUuid', question.uuid);
      },
      editAnswer: function editAnswer(answer) {
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditError', '');
        this.addEditChangeProp('image', answer.image);
        this.changeProp('typeMode', 'answer');
        this.changeProp('actionMode', 'edit');
        this.changeProp('questionUuid', answer.parentUuid);
        this.fillAnswerForm(answer);
      },
      deleteAnswer: function deleteAnswer(answer) {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
        this.changeProp('typeMode', 'answer');
        this.changeProp('itemToDelete', answer);
      }
    })
  };

  function _regeneratorRuntime$2() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$2 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var AddEditForm = {
    components: {
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    template: "\n        <ModalAnyContent :stateWatcher=\"addEditStateWatcher\">\n            <div class=\"twpx-poll-detail__loader\" v-if=\"addEditLoading\">\n                <LoaderCircle :show=\"addEditLoading\" />\n            </div>\n\n            <MessageComponent v-else-if=\"addEditError\" type=\"error\" size=\"big\" :message=\"addEditError\" />\n\n            <div v-else class=\"twpx-poll-add-form\">\n                <h2>{{ currentLang.heading }}</h2>\n\n                <div class=\"twpx-poll-add-form__block\" v-for=\"block in currentBlocks\" :key=\"block.id\" :data-id=\"block.id\">\n                    <h4>{{ block.heading }}</h4>\n                    <div class=\"twpx-poll-add-form__controls\">\n                        <ControlChoice  v-for=\"control in block.controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n                    </div>\n                </div>\n                    \n                <div class=\"twpx-poll-add-form__buttons\">\n                    <ButtonComponent :text=\"currentLang.cancelButton\" :props=\"['gray-color', 'large']\" @clickButton=\"clickCancel\" />\n                    <ButtonComponent :text=\"currentLang.sendButton\" :props=\"['secondary', 'large']\" @clickButton=\"clickSend\" />\n                </div>\n            </div>\n        </ModalAnyContent>\n    ",
    computed: _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['uuid', 'groupUuid', 'questionUuid', 'typeMode', 'actionMode', 'groups', 'questions', 'answers'])), ui_vue3_pinia.mapState(addEditStore, ['lang', 'addEditStateWatcher', 'addEditLoading', 'addEditError', 'image'])), ui_vue3_pinia.mapState(controlsStore, ['groupFormBlocks', 'questionFormBlocks', 'answerFormBlocks'])), {}, {
      currentLang: function currentLang() {
        return this.lang[this.typeMode][this.actionMode];
      },
      currentBlocks: function currentBlocks() {
        return this["".concat(this.typeMode, "FormBlocks")];
      }
    }),
    methods: _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp', 'pushItemsArray'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'changeGroupFormBlocks', 'changeQuestionFormBlocks', 'fillGroupForm', 'fillQuestionForm', 'fillAnswerForm', 'runHints', 'setHints'])), ui_vue3_pinia.mapActions(addEditStore, ['addEditChangeProp'])), {}, {
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
      clickCancel: function clickCancel() {
        var _this = this;
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        this.addEditChangeProp('addEditLoading', false);
        this.addEditChangeProp('addEditError', '');
        setTimeout(function () {
          var capitalizedType = _this.typeMode.charAt(0).toUpperCase() + _this.typeMode.slice(1);
          _this["fill".concat(capitalizedType, "Form")]();
        }, 300);
      },
      clickSend: function clickSend() {
        var _this2 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee() {
          var capitalizedType;
          return _regeneratorRuntime$2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this2.addEditChangeProp('addEditLoading', true);
                _context.prev = 1;
                capitalizedType = _this2.typeMode.charAt(0).toUpperCase() + _this2.typeMode.slice(1);
                _context.next = 5;
                return _this2["handle".concat(capitalizedType, "Submission")]();
              case 5:
                _context.next = 10;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                _this2.handleError(_context.t0);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 7]]);
        }))();
      },
      handleGroupSubmission: function handleGroupSubmission() {
        var _this3 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee2() {
          var formData, groupsResult;
          return _regeneratorRuntime$2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                formData = _this3.createGroupFormData();
                _context2.next = 3;
                return _this3.runBitrixMethod('editGroupQuestions', null, formData);
              case 3:
                _context2.next = 5;
                return _this3.runBitrixMethod('groupsQuestions', {
                  uuid: _this3.uuid
                });
              case 5:
                groupsResult = _context2.sent;
                _this3.handleSuccess(groupsResult.data);
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      handleQuestionSubmission: function handleQuestionSubmission() {
        var _this4 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee3() {
          var formData, questionsResult;
          return _regeneratorRuntime$2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                formData = _this4.createQuestionFormData();
                _context3.next = 3;
                return _this4.runBitrixMethod('editQuestion', null, formData);
              case 3:
                _context3.next = 5;
                return _this4.runBitrixMethod('questions', {
                  uuid: _this4.groupUuid
                });
              case 5:
                questionsResult = _context3.sent;
                _this4.handleSuccess(questionsResult.data);
              case 7:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      handleAnswerSubmission: function handleAnswerSubmission() {
        var _this5 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee4() {
          var formData, answersResult;
          return _regeneratorRuntime$2().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                formData = _this5.createAnswerFormData();
                _context4.next = 3;
                return _this5.runBitrixMethod('editAnswer', null, formData);
              case 3:
                _context4.next = 5;
                return _this5.runBitrixMethod('answers', {
                  uuid: _this5.questionUuid
                });
              case 5:
                answersResult = _context4.sent;
                _this5.handleSuccess(answersResult.data);
              case 7:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      createGroupFormData: function createGroupFormData() {
        var formData = new FormData();
        var imageUpdate = 2; // nothing to do with the image
        if (this.groupFormBlocks[0].controls[3].file) {
          imageUpdate = 1; // add or rewrite the image
        } else if (!this.groupFormBlocks[0].controls[3].value && this.image) {
          imageUpdate = 0; // delete the image
        }

        var data = {
          uuid: this.groupFormBlocks[0].controls[0].value,
          parentUuid: this.uuid,
          name: this.groupFormBlocks[0].controls[1].value,
          description: this.groupFormBlocks[0].controls[2].value,
          image: this.groupFormBlocks[0].controls[3].file,
          sortIndex: Number(this.groupFormBlocks[1].controls[0].value),
          imageUpdate: imageUpdate
        };
        Object.entries(data).forEach(function (_ref2) {
          var _ref3 = babelHelpers.slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          }
        });
        return formData;
      },
      createQuestionFormData: function createQuestionFormData() {
        var formData = new FormData();
        var imageUpdate = 2; // nothing to do with the image
        if (this.questionFormBlocks[0].controls[3].file) {
          imageUpdate = 1; // add or rewrite the image
        } else if (!this.questionFormBlocks[0].controls[3].value && this.image) {
          imageUpdate = 0; // delete the image
        }

        var data = {
          parentUuid: this.groupUuid,
          uuid: this.questionFormBlocks[0].controls[0].value,
          name: this.questionFormBlocks[0].controls[1].value,
          description: this.questionFormBlocks[0].controls[2].value,
          image: this.questionFormBlocks[0].controls[3].file,
          type: Number(this.questionFormBlocks[1].controls[0].value),
          selectableAnswers: Number(this.questionFormBlocks[1].controls[1].value),
          sortIndex: Number(this.questionFormBlocks[1].controls[2].value),
          imageUpdate: imageUpdate
        };
        Object.entries(data).forEach(function (_ref4) {
          var _ref5 = babelHelpers.slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          }
        });
        return formData;
      },
      createAnswerFormData: function createAnswerFormData() {
        var formData = new FormData();
        var imageUpdate = 2; // nothing to do with the image
        if (this.answerFormBlocks[0].controls[3].file) {
          imageUpdate = 1; // add or rewrite the image
        } else if (!this.answerFormBlocks[0].controls[3].value && this.image) {
          imageUpdate = 0; // delete the image
        }

        var data = {
          parentUuid: this.questionUuid,
          uuid: this.answerFormBlocks[0].controls[0].value,
          name: this.answerFormBlocks[0].controls[1].value,
          description: this.answerFormBlocks[0].controls[2].value,
          image: this.answerFormBlocks[0].controls[3].file,
          sortIndex: Number(this.answerFormBlocks[1].controls[0].value),
          imageUpdate: imageUpdate
        };
        Object.entries(data).forEach(function (_ref6) {
          var _ref7 = babelHelpers.slicedToArray(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          }
        });
        return formData;
      },
      handleSuccess: function handleSuccess(data) {
        this.addEditChangeProp('addEditLoading', false);
        this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
        if (data) {
          if (this.typeMode === 'group') {
            this.changeProp('groups', data);
            this.fillGroupForm();
          } else if (this.typeMode === 'question') {
            this.pushItemsArray({
              type: 'questions',
              parentUuid: this.groupUuid,
              itemsArray: data
            });
            this.changeProp('groupUuid', '');
            this.fillQuestionForm();
          } else if (this.typeMode === 'answer') {
            this.pushItemsArray({
              type: 'answers',
              parentUuid: this.questionUuid,
              itemsArray: data
            });
            this.changeProp('questionUuid', '');
            this.fillAnswerForm();
          }
        }
      },
      handleError: function handleError(error) {
        var _error$errors, _error$errors$;
        this.addEditChangeProp('addEditLoading', false);
        this.addEditChangeProp('addEditError', (error === null || error === void 0 ? void 0 : (_error$errors = error.errors) === null || _error$errors === void 0 ? void 0 : (_error$errors$ = _error$errors[0]) === null || _error$errors$ === void 0 ? void 0 : _error$errors$.message) || error);
      }
    })
  };

  var EditForm = {
    props: ['customData', 'signedParameters', 'actions', 'voting'],
    emits: ['input', 'hints', 'clickCancel', 'clickSend'],
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div id=\"votingEditForm\">voting edit form</div>\n    ",
    mounted: function mounted() {
      var _this = this;
      if (window.BX && BX.VotingCreate) {
        var editvoting = new BX.VotingCreate('#votingEditForm', {
          data: this.customData,
          signedParameters: this.signedParameters,
          voting: this.voting
        });
        editvoting.run();
      }
      if (document.querySelector('#votingEditForm')) {
        document.querySelector('#votingEditForm').addEventListener('clickCancel', function () {
          _this.$emit('clickCancel');
        });
        document.querySelector('#votingEditForm').addEventListener('clickSend', function () {
          _this.$emit('clickSend');
        });
      }
    }
  };

  function _regeneratorRuntime$3() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$3 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      DetailInfo: DetailInfo,
      GroupsComponent: GroupsComponent,
      AddEditForm: AddEditForm,
      EditForm: EditForm,
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent
    },
    // language=Vue
    template: "\n  <div class=\"twpx-poll-detail\">\n\n    <div class=\"twpx-poll-detail__loader\" v-if=\"loading\">\n      <LoaderCircle :show=\"loading\" />\n    </div>\n\n    <MessageComponent v-else-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n    <div class=\"twpx-poll-detail__wrapper\" v-else>\n\n      <DetailInfo\n        :voting=\"voting\"\n        :lang=\"lang\"\n        @clickChangeDetail=\"clickChangeDetail\"\n      />\n\n      <GroupsComponent />\n\n      <AddEditForm />\n\n      <ModalAnyContent :stateWatcher=\"editModalStateWatcher\" @onClose=\"onEditModalClose\">\n        <div class=\"twpx-poll-detail__loader\" v-if=\"editModalLoading\">\n          <LoaderCircle :show=\"editModalLoading\" />\n        </div>\n\n        <MessageComponent v-else-if=\"editModalError\" type=\"error\" size=\"big\" :message=\"editModalError\" />\n\n        <EditForm v-else\n          :customData=\"customData\"\n          :signedParameters=\"signedParameters\"\n          :voting=\"voting\"\n          @input=\"input\"\n          @hints=\"hints\"\n          @clickCancel=\"clickEditFormCancel\"\n          @clickSend=\"clickEditFormSend\"\n        />\n      </ModalAnyContent>\n      \n    </div>\n  </div>\n\t",
    computed: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['customData', 'signedParameters', 'lang', 'uuid', 'loading', 'error', 'typeMode', 'actionMode', 'voting', 'groups', 'questions', 'answers', 'modalStateWatcher', 'modalLoading', 'modalError', 'editModalStateWatcher', 'editModalLoading', 'editModalError'])), {}, {
      deleteHeading: function deleteHeading() {
        return this.lang[this.typeMode].deleteModal.heading;
      },
      deleteText: function deleteText() {
        return this.lang[this.typeMode].deleteModal.text;
      },
      deleteYes: function deleteYes() {
        return this.lang[this.typeMode].deleteModal.yes;
      },
      deleteNo: function deleteNo() {
        return this.lang[this.typeMode].deleteModal.no;
      }
    }),
    methods: _objectSpread$3(_objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp', 'pushItemsArray'])), ui_vue3_pinia.mapActions(controlsStore, ['changeGroupFormBlocks', 'changeQuestionFormBlocks', 'changeControlValue', 'clearGroupForm', 'clearQuestionForm', 'runHints', 'setHints'])), {}, {
      clickChangeDetail: function clickChangeDetail() {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      },
      addQuestion: function addQuestion() {
        this.changeProp('modalStateWatcher', !this.modalStateWatcher);
        this.changeProp('modalError', '');
        this.changeProp('typeMode', 'question');
        this.changeProp('actionMode', 'add');
      },
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
      clickEditFormCancel: function clickEditFormCancel() {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      },
      clickEditFormSend: function clickEditFormSend() {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
        this.getVoting();
      },
      onEditModalClose: function onEditModalClose() {
        if (document.querySelector('#PollCreateApp')) {
          document.querySelector('#PollCreateApp').dispatchEvent(new Event("closeModal"));
        }
      },
      getVoting: function getVoting() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee3() {
          var _result$data$, _result$data$$questio, result;
          return _regeneratorRuntime$3().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _this.changeProp('loading', true);
                _context3.prev = 1;
                _context3.next = 4;
                return _this.runBitrixMethod('voting', {
                  uuid: _this.uuid
                });
              case 4:
                result = _context3.sent;
                if (result && result.data && result.data.length) {
                  _this.changeProp('voting', result.data[0]);
                }
                if (result !== null && result !== void 0 && (_result$data$ = result.data[0]) !== null && _result$data$ !== void 0 && (_result$data$$questio = _result$data$.questionsGroups) !== null && _result$data$$questio !== void 0 && _result$data$$questio.length) {
                  _this.changeProp('groups', result.data[0].questionsGroups);

                  // get questions
                  result.data[0].questionsGroups.forEach( /*#__PURE__*/function () {
                    var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee2(g) {
                      var questions;
                      return _regeneratorRuntime$3().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this.runBitrixMethod('questions', {
                              uuid: g.uuid
                            });
                          case 2:
                            questions = _context2.sent;
                            _this.pushItemsArray({
                              type: 'questions',
                              parentUuid: g.uuid,
                              itemsArray: questions.data
                            });

                            // get answers
                            questions.data.forEach( /*#__PURE__*/function () {
                              var _ref3 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee(q) {
                                var answers;
                                return _regeneratorRuntime$3().wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return _this.runBitrixMethod('answers', {
                                        uuid: q.uuid
                                      });
                                    case 2:
                                      answers = _context.sent;
                                      _this.pushItemsArray({
                                        type: 'answers',
                                        parentUuid: q.uuid,
                                        itemsArray: answers.data
                                      });
                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }, _callee);
                              }));
                              return function (_x2) {
                                return _ref3.apply(this, arguments);
                              };
                            }());
                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                }
                _this.changeProp('loading', false);
                _context3.next = 14;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                _this.changeProp('loading', false);
                _this.changeProp('error', _context3.t0.errors[0].message);
              case 14:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[1, 10]]);
        }))();
      }
    }),
    mounted: function mounted() {
      var searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('ID')) {
        this.changeProp('uuid', searchParams.get('ID'));
        this.getVoting();
      } else {
        this.changeProp('error', 'В URL не передан параметр ID голосования.');
      }
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingDetail = /*#__PURE__*/function () {
    function VotingDetail(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingDetail);
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
    babelHelpers.createClass(VotingDetail, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'VotingDetail',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
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
    return VotingDetail;
  }();

  exports.VotingDetail = VotingDetail;

}((this.BX = this.BX || {}),BX.Vue3,BX.Modals,BX.Controls,BX.AAS,BX.Loaders,BX.AAS,BX.Modals,BX.Vue3.Pinia));
//# sourceMappingURL=application.bundle.js.map
