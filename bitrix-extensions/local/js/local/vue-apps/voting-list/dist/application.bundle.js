/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_messageComponent,local_vueComponents_loaderCircle,local_vueComponents_modalAnyContent,local_vueComponents_modalYesNo,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var WizardBlock = {
    props: ['lang'],
    emits: ['clickButton'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-poll-wizard-block\">\n            <div class=\"twpx-poll-wizard-block__text\">\n                <h4>{{ lang.wizard.heading }}</h4>\n                <p>{{ lang.wizard.text }}</p>\n            </div>\n            <ButtonComponent :text=\"lang.wizard.button\" :props=\"['success', 'medium']\" @clickButton=\"$emit('clickButton')\" />\n        </div>\n    "
  };

  var VotingItem = {
    props: ['voting', 'url', 'status', 'label'],
    emits: ['edit', 'delete'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-voting-list__voting-item\" :data-id=\"voting.uuid\">\n            <div class=\"twpx-voting-list__voting-item__info\">\n                <div class=\"twpx-voting-list__voting-item__heading\">\n                    <a :href=\"detailUrl\">{{ voting.name }}</a>\n                </div>\n                <div class=\"twpx-voting-list__voting-item__text\">{{ voting.description }}</div>\n            </div>\n            <div class=\"twpx-voting-list__voting-item__status\">\n                <span :class=\"label\">{{ status.status }}</span>\n            </div>\n            <div class=\"twpx-voting-list__voting-item__buttons\">\n                <ButtonComponent :text=\"Edit\" :props=\"['icon', 'edit', 'medium']\" @clickButton=\"$emit('edit', voting)\" />\n                <ButtonComponent :text=\"Delete\" :props=\"['icon', 'delete', 'medium']\" @clickButton=\"$emit('delete', voting)\" />\n            </div>\n        </div>\n    ",
    computed: {
      detailUrl: function detailUrl() {
        return "".concat(this.url, "?ID=").concat(this.voting.uuid);
      }
    }
  };

  var EditForm = {
    flag: false,
    f: false,
    props: ['customData', 'signedParameters', 'actions', 'voting'],
    emits: ['input', 'hints', 'clickCancel', 'clickSend'],
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div id=\"votingEditForm\">voting edit form</div>\n    ",
    watch: {
      voting: function voting() {
        this.create();
      }
    },
    methods: {
      create: function create() {
        if (window.BX && BX.VotingCreate) {
          var editvoting = new BX.VotingCreate('#votingEditForm', {
            data: this.customData,
            signedParameters: this.signedParameters,
            voting: this.voting
          });
          editvoting.run();
        }
      }
    },
    mounted: function mounted() {
      var _this = this;
      if (document.querySelector('#votingEditForm') && !this.f) {
        this.f = true;
        document.querySelector('#votingEditForm').addEventListener('clickCancel', function () {
          _this.$emit('clickCancel');
        });
        document.querySelector('#votingEditForm').addEventListener('clickSend', function () {
          _this.$emit('clickSend');
        });
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
        actions: {
          votings: ['twinpx:voting.form', 'votings'],
          deleteVoting: ['twinpx:voting.form', 'deleteVoting'],
          votingStatuses: ['twinpx:voting.control', 'votingStatuses']
        },
        lang: {
          wizard: {
            heading: 'Мастер создания голосования',
            text: 'Создайте новое голосование',
            button: 'Создать голосование'
          },
          deleteModal: {
            heading: 'Подтвердите удаление голосования',
            text: 'Подтвердите удаление голосования. Обратите внимание: после удаления восстановить его будет невозможно.',
            yes: 'Удалить',
            no: 'Отменить'
          }
        },
        votingCreateURL: '',
        votingDetailURL: '',
        error: '',
        loading: false,
        pollItems: [],
        deleteModalStateWatcher: false,
        activePollId: null,
        editModalStateWatcher: false,
        editModalLoading: false,
        editModalError: '',
        activeVoting: {},
        labels: {
          'voting_v1': 'label-gray',
          'voting_v2': 'label-blue',
          'voting_v3': 'label-orange',
          'voting_v4': 'label-gray',
          'voting_v5': 'label-green',
          'voting_v6': 'label-gray'
        },
        statuses: []
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
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      WizardBlock: WizardBlock,
      VotingItem: VotingItem,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      EditForm: EditForm
    },
    template: "\n    <div class=\"twpx-poll-list\">\n      <div v-if=\"loading\" class=\"twpx-poll-list__loader\">\n        <LoaderCircle :show=\"loading\" />\n      </div>\n\n      <MessageComponent v-else-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n      <div class=\"twpx-poll-list__wrapper\" v-else>\n\n        <ModalAnyContent :stateWatcher=\"editModalStateWatcher\" @onClose=\"onEditModalClose\">\n          <div class=\"twpx-poll-detail__loader\" v-if=\"editModalLoading\">\n            <LoaderCircle :show=\"editModalLoading\" />\n          </div>\n\n          <MessageComponent v-else-if=\"editModalError\" type=\"error\" size=\"big\" :message=\"editModalError\" />\n\n          <EditForm v-else\n            :customData=\"customData\"\n            :signedParameters=\"signedParameters\"\n            :voting=\"activeVoting\"\n            @input=\"input\"\n            @hints=\"hints\"\n            @clickCancel=\"clickEditFormCancel\"\n            @clickSend=\"clickEditFormSend\"\n          />\n        </ModalAnyContent>\n\n        <ModalYesNo\n          :heading=\"lang.deleteModal.heading\"\n          :text=\"lang.deleteModal.text\"\n          :yes=\"lang.deleteModal.yes\"\n          :no=\"lang.deleteModal.no\"\n          :buttons=\"{\n            yes: {\n              props: ['danger', 'large']\n            },\n            no: {\n              props: ['gray-color', 'large']\n            }\n          }\"\n          :stateWatcher=\"deleteModalStateWatcher\"\n          @clickYes=\"clickDeleteModalYes\"\n          @clickNo=\"clickDeleteModalNo\"\n        />\n\n        <WizardBlock :lang=\"lang\" @clickButton=\"goToPollCreate\" />\n\n        <div class=\"twpx-poll-list__list\">\n          <VotingItem v-for=\"voting in pollItems\"\n            :key=\"voting.uuid\"\n            :voting=\"voting\"\n            :url=\"votingDetailURL\"\n            :status=\"statuses.find(s => s.id === voting.state)\"\n            :label=\"labels[voting.stateXml]\"\n            @edit=\"editVoting\"\n            @delete=\"deleteVoting\"\n          />\n        </div>\n\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['customData', 'signedParameters', 'lang', 'votingCreateURL', 'votingDetailURL', 'error', 'loading', 'pollItems', 'deleteModalStateWatcher', 'activePollId', 'editModalStateWatcher', 'editModalLoading', 'editModalError', 'activeVoting', 'labels', 'statuses'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp'])), {}, {
      goToPollCreate: function goToPollCreate() {
        window.location.href = this.votingCreateURL;
      },
      editVoting: function editVoting(voting) {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
        this.changeProp('activeVoting', voting);
      },
      deleteVoting: function deleteVoting(voting) {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
        this.changeProp('activePollId', voting.uuid);
      },
      clickDeleteModalYes: function clickDeleteModalYes() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.changeProp('deleteModalStateWatcher', !_this.deleteModalStateWatcher);
                _this.changeProp('loading', true);
                _context.prev = 2;
                _context.next = 5;
                return _this.runBitrixMethod('deleteVoting', {
                  uuid: _this.activePollId
                });
              case 5:
                _context.next = 7;
                return _this.runBitrixMethod('votings');
              case 7:
                result = _context.sent;
                if (result && result.data) {
                  _this.changeProp('pollItems', result.data);
                }
                _this.changeProp('loading', false);
                _context.next = 17;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                _this.changeProp('deleteModalStateWatcher', !_this.deleteModalStateWatcher);
                _this.changeProp('loading', false);
                _this.changeProp('error', _context.t0.errors[0].message);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 12]]);
        }))();
      },
      clickDeleteModalNo: function clickDeleteModalNo() {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
      },
      clickEditFormCancel: function clickEditFormCancel() {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      },
      clickEditFormSend: function clickEditFormSend() {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
        this.getVotings();
      },
      getVotings: function getVotings() {
        var _this2 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var result;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.changeProp('loading', true);
                _context2.prev = 1;
                _context2.next = 4;
                return _this2.runBitrixMethod('votings');
              case 4:
                result = _context2.sent;
                if (result && result.data) {
                  _this2.changeProp('pollItems', result.data);
                }
                _this2.changeProp('loading', false);
                _context2.next = 13;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                _this2.changeProp('loading', false);
                _this2.changeProp('error', _context2.t0.errors[0].message);
              case 13:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[1, 9]]);
        }))();
      },
      getStatuses: function getStatuses() {
        var _this3 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var result;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.runBitrixMethod('votingStatuses');
              case 3:
                result = _context3.sent;
                if (result && result.data) {
                  _this3.changeProp('statuses', result.data);
                }
                _context3.next = 10;
                break;
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                _this3.changeProp('error', _context3.t0.errors[0].message);
              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 7]]);
        }))();
      }
    }),
    mounted: function mounted() {
      this.getVotings();
      this.getStatuses();
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingList = /*#__PURE__*/function () {
    function VotingList(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingList);
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
    babelHelpers.createClass(VotingList, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'VotingList',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().votingCreateURL = self.options.votingCreateURL || '';
            dataStore().votingDetailURL = self.options.votingDetailURL || '';
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
      key: "getTableStore",
      value: function getTableStore() {
        return tableStore;
      }
    }]);
    return VotingList;
  }();

  exports.VotingList = VotingList;

}((this.BX = this.BX || {}),BX.Vue3,BX.AAS,BX.Loaders,BX.Modals,BX.Modals,BX.Controls,BX.AAS,BX.Vue3.Pinia));
//# sourceMappingURL=application.bundle.js.map
