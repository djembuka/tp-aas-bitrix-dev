/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_messageComponent,local_vueComponents_loaderCircle,local_vueComponents_moreButton,local_vueComponents_modalAnyContent,local_vueComponents_controlComponent,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
        signedParameters: '',
        lang: {},
        actions: [],
        error: '',
        loading: false,
        resultApplicationGroupId: 1,
        steps: [{
          id: 'one',
          name: 'Цель',
          html: '<h3>Определите вашу цель</h3><p>Выберите необходимые вам требования и параметры аудиторской организации.</p>',
          controls: [{
            "property": "select",
            "type": "dropdown",
            "id": "id13",
            "name": "PURPOSE",
            "label": "Цель аудита",
            "options": [{
              "label": "molestias",
              "code": "23423423423"
            }, {
              "label": "Farming",
              "code": "324234324"
            }, {
              "label": "Very",
              "code": "324234325"
            }],
            "value": "",
            "disabled": false
          }, {
            "property": "select",
            "type": "dropdown",
            "id": "id14",
            "name": "TYPE",
            "label": "Тип отчетности",
            "options": [{
              "label": "molestias",
              "code": "23423423423"
            }, {
              "label": "Farming",
              "code": "324234324"
            }, {
              "label": "Very",
              "code": "324234325"
            }],
            "value": "",
            "disabled": false
          }]
        }, {
          id: 'two',
          name: 'Сроки',
          html: '<h3>Определите сроки</h3><p>Определите ваши требования к срокам проведения аудита.</p>',
          controls: [{
            "id": "id21",
            "property": "text",
            "name": "PERIOD",
            "label": "Период аудита",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Определите период за который будет проводится аудит.'
          }, {
            "id": "id22",
            "property": "text",
            "name": "TIME",
            "label": "Сколько времени есть на проведение аудита",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Определите ограничения по срокам проведения аудита.'
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id23",
            "name": "URGENT",
            "required": false,
            "label": "Требуется срочная проверка",
            "value": "on",
            "checked": true,
            "disabled": false
          }]
        }, {
          id: 'three',
          name: 'Размер бизнеса',
          html: '<h3>Уточните размер вашего бизнеса</h3><p>Для определения критериев компании уточните параметры вашего бизнеса.</p>',
          controls: [{
            "id": "id31",
            "property": "text",
            "name": "REVENUE",
            "label": "Выручка",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите выручку в миллионах рублей.'
          }, {
            "id": "id32",
            "property": "text",
            "name": "ASSETS",
            "label": "Объем активов",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите объем активов компании в миллионах рублей.'
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id33",
            "name": "ISSUER",
            "required": false,
            "label": "Эмитент",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id34",
            "name": "MEMBER",
            "required": false,
            "label": "Участник госзакупок",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id35",
            "name": "INFO",
            "required": false,
            "label": "Наличие требования к раскрытию информации",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "id": "id36",
            "property": "text",
            "name": "REGION",
            "label": "Регион или город, где находится заказчик",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите название вашего города или населенного пункта.'
          }]
        }, {
          id: 'four',
          name: 'Требования',
          html: '<h3>Сформулируйте требования</h3><p>Укажите требования к аудиторской организации, которые могут влиять на ограничения к доступу.</p>',
          controls: [{
            "property": "checkbox",
            "type": "checkbox",
            "id": "id41",
            "name": "EXPERIENCE",
            "required": false,
            "label": "Опыт работы с иностранными структурами",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id42",
            "name": "INTERNATIONAL",
            "required": false,
            "label": "Входит в международные сети",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id43",
            "name": "SECRET",
            "required": false,
            "label": "Доступ к гос. тайне",
            "value": "on",
            "checked": true,
            "disabled": false
          }, {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id44",
            "name": "SERVICE",
            "required": false,
            "label": "Оказание аудиторских услуг общественно значимым организациям на финансовом рынке",
            "value": "on",
            "checked": true,
            "disabled": false
          }]
        }, {
          id: 'five',
          name: 'Дополнительно',
          html: '<h3>Дополнительные требования</h3><p>Укажите требования к аудиторской организации, которые могут влиять на ограничения к доступу.</p>',
          controls: [{
            "property": "checkbox",
            "type": "checkbox",
            "id": "id51",
            "name": "ENGLISH",
            "required": false,
            "label": "Необходимость в англоязычном сопровождении",
            "value": "on",
            "checked": true,
            "disabled": false
          }]
        }]
      };
    },
    actions: {
      setStepActive: function setStepActive(_ref) {
        var step = _ref.step,
          active = _ref.active;
        step.active = active;
      },
      changeError: function changeError(value) {
        this.error = value;
      },
      changeLoading: function changeLoading(value) {
        this.loading = value;
      },
      createUrl: function createUrl(controls) {
        var url = new URL(window.location.href);
        controls.forEach(function (c) {
          url.searchParams.set(c.name, String(c.value));
        });
        window.history.pushState({}, '', url);
      },
      runApiMethod: function runApiMethod() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'applicationTemplate';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var formData = arguments.length > 2 ? arguments[2] : undefined;
        if (method === 'send') {
          return new Promise(function (res, rej) {
            setTimeout(function () {
              rej({
                errors: [{
                  code: 123,
                  message: 'Ошибка рассылки заявки.'
                }]
              });
            }, 1000);
          });
        }
        if (formData) {
          Object.entries(this.customData).forEach(function (key, value) {
            formData.append(key, value);
          });
        }
        return BX.ajax.runComponentAction(this.actions[method][0], this.actions[method][1], {
          mode: 'class',
          data: formData || _objectSpread(_objectSpread({}, this.customData), data),
          signedParameters: this.signedParameters
        });
      }
    }
  });

  var resultStore = ui_vue3_pinia.defineStore('result', {
    state: function state() {
      return {
        formIdArray: [],
        formDataArray: [],
        startIndex: 0,
        maxCountPerRequest: 3,
        loadingMore: false,
        applicationModalStateWatcher: false,
        resultApplicationGroup: {},
        resultApplicationControls: [],
        resultApplicationState: 'form',
        resultApplicationError: ''
      };
    },
    getters: {
      groupApplicationArray: function groupApplicationArray(state) {
        return state.formDataArray.filter(function (d) {
          return d.checkbox.checked;
        }).map(function (d) {
          return d.id;
        });
      }
    },
    actions: {
      changeResultApplicationGroup: function changeResultApplicationGroup(groups, resultApplicationGroupId) {
        if (groups && groups.filter) {
          this.resultApplicationGroup = groups.filter(function (g) {
            return String(g.id) === String(resultApplicationGroupId);
          });
        }
      },
      changeResultApplicationControls: function changeResultApplicationControls(controls, resultApplicationGroupId) {
        if (controls && controls.filter) {
          this.resultApplicationControls = controls.filter(function (c) {
            return String(c.groupid) === String(resultApplicationGroupId);
          }).map(function (c) {
            if (c.required) {
              c.label = "".concat(c.label, " *");
            }
            return c;
          });
        }
      },
      setFormIdArray: function setFormIdArray(data) {
        this.formIdArray = data;
      },
      setFormDataArray: function setFormDataArray(data) {
        this.formDataArray = this.formDataArray.concat(data);
      },
      setStartIndex: function setStartIndex(value) {
        this.startIndex = value;
      },
      setMaxCountPerRequest: function setMaxCountPerRequest(value) {
        this.maxCountPerRequest = value;
      },
      changeLoadingMore: function changeLoadingMore(value) {
        this.loadingMore = value;
      },
      changeProp: function changeProp(prop, value) {
        this[prop] = value;
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    template: "\n    <router-view />\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['sessid', 'signedParameters'])),
    mounted: function mounted() {}
  };

  var TheNavigation = {
    data: function data() {
      return {};
    },
    props: ['groups'],
    emits: ['clickNavItem'],
    template: "\n        <div class=\"twpx-vue-marketplace-nav\">\n            <div class=\"twpx-vue-marketplace-nav-items\">\n                <div\n                    :class=\"{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': isGroupActive(groupIndex)}\"\n                    v-for=\"(group, groupIndex) in groups\"\n                    :key=\"group.id\"\n                    @click.prevent=\"click(group)\">\n                        {{ group.label }}\n                </div>\n            </div>\n            <div :class=\"{'twpx-vue-marketplace-nav-line': true, 'twpx-vue-marketplace-nav-line--full': lineWidth === '100%'}\">\n                <div :style=\"'width: ' + lineWidth\"></div>\n            </div>\n        </div>\n    ",
    computed: {
      currentIndex: function currentIndex() {
        var _this = this;
        var index = this.groups.findIndex(function (s) {
          return String(s.id) === String(_this.$route.params.id);
        }) || 0;
        return index === -1 ? 0 : index;
      },
      lineWidth: function lineWidth() {
        return (this.currentIndex + 1) * 100 / this.groups.length + '%';
      }
    },
    methods: {
      click: function click(group) {
        this.$emit('clickNavItem', {
          group: group
        });
      },
      isGroupActive: function isGroupActive(groupIndex) {
        return groupIndex <= this.currentIndex;
      }
    }
  };

  var StepComponent = {
    props: ['step'],
    emits: ['input', 'hints'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-application-html\" v-if=\"step.title || step.subtitle\">\n            <h4 v-if=\"step.title\">{{ step.title }}</h4>\n            <p v-if=\"step.subtitle\">{{ step.subtitle }}</p>\n        </div>\n\n        <div class=\"twpx-vue-marketplace-application-controls\">\n            <ControlComponent v-for=\"control in step.controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n        </div>\n    ",
    methods: {
      input: function input(args) {
        this.$emit('input', args);
      },
      hints: function hints(args) {
        this.$emit('hints', args);
      }
    }
  };

  var TheButtons = {
    props: ['groups', 'step', 'lang'],
    emits: ['send'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-buttons\">\n            <ButtonComponent :text=\"lang.prevButton\" :props=\"['gray-color','large']\" @clickButton=\"goBack\" v-if=\"currentIndex > 0\" />\n            <ButtonComponent :text=\"lang.nextButton\" :props=\"['secondary','large']\" :disabled=\"isDisabled\" @clickButton=\"goForward\" v-if=\"currentIndex < groups.length - 1\" />\n            <ButtonComponent :text=\"lang.sendButton\" :props=\"['secondary','large']\" :disabled=\"isDisabled\" @clickButton=\"$emit('send')\" v-if=\"currentIndex == groups.length - 1\" />\n        </div>\n    ",
    computed: {
      currentIndex: function currentIndex() {
        var _this = this;
        return this.$route.params.id ? this.groups.findIndex(function (s) {
          return String(s.id) === String(_this.$route.params.id);
        }) : 0;
      },
      isDisabled: function isDisabled() {
        if (this.step.controls && this.step.controls.find) {
          return this.step.controls.find(function (c) {
            return c.property !== 'checkbox' && c.required && !c.value;
          });
        }
      }
    },
    methods: {
      goBack: function goBack() {
        var group = this.groups[this.currentIndex - 1];
        if (group) {
          this.$router.push("/step/".concat(group.id));
        }
      },
      goForward: function goForward() {
        var group = this.groups[this.currentIndex + 1];
        if (group) {
          this.$router.push("/step/".concat(group.id));
        }
      }
    }
  };

  var applicationStore = ui_vue3_pinia.defineStore('application', {
    state: function state() {
      return {
        applicationControls: [],
        applicationGroups: []
      };
    },
    actions: {
      setStepActive: function setStepActive(_ref) {
        var step = _ref.step,
          active = _ref.active;
        step.active = active;
      },
      changeApplicationControls: function changeApplicationControls(controls, resultApplicationGroupId) {
        if (controls && controls.filter) {
          this.applicationControls = controls.filter(function (c) {
            return String(c.groupid) !== String(resultApplicationGroupId);
          }).map(function (c) {
            if (c.required) {
              c.label = "".concat(c.label, " *");
            }
            return c;
          });
        }
      },
      changeApplicationGroups: function changeApplicationGroups(groups, resultApplicationGroupId) {
        if (groups && groups.filter) {
          this.applicationGroups = groups.filter(function (g) {
            return String(g.id) !== String(resultApplicationGroupId);
          });
        }
      }
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
      changeCheckboxValue: function changeCheckboxValue(_ref5) {
        var control = _ref5.control,
          checked = _ref5.checked;
        control.checked = checked;
      },
      changeFileValue: function changeFileValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value;
        control.value = value;
        if (control.type === 'upload') {
          this.uploadFile(control, value);
        }
      },
      changeControlValue: function changeControlValue(_ref7) {
        var control = _ref7.control,
          value = _ref7.value,
          checked = _ref7.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
          case 'tel':
          case 'email':
          case 'num':
            this.changeTextControlValue({
              control: control,
              value: value
            });
            break;
          // case 'multiselect':
          //   commit('changeMultiselectValue', { control, value, checked });
          //   break;
          case 'checkbox':
            this.changeCheckboxValue({
              control: control,
              checked: checked
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
      runHintsAction: function runHintsAction(_ref8) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var control, action, url, controller, timeoutId, response, result, _result$errors$;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                control = _ref8.control, action = _ref8.action;
                url = new URL(action, window.location.origin);
                url.searchParams.append('s', control.value);
                _context.prev = 3;
                // Создаем AbortController для возможности отмены запроса
                controller = new AbortController();
                timeoutId = setTimeout(function () {
                  return controller.abort();
                }, 20000); // 20 секунд таймаут
                _context.next = 8;
                return fetch(url, {
                  signal: controller.signal,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 8:
                response = _context.sent;
                clearTimeout(timeoutId);
                if (response.ok) {
                  _context.next = 12;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 12:
                _context.next = 14;
                return response.json();
              case 14:
                result = _context.sent;
                if (result.status === 'success' && result.data) {
                  _this.setHints(control, result.data);
                } else if (result.errors) {
                  _this.error = (_result$errors$ = result.errors[0]) === null || _result$errors$ === void 0 ? void 0 : _result$errors$.message;
                } else {
                  _this.error = 'Invalid response format';
                }
                _context.next = 21;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](3);
                _this.error = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message;
              case 21:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[3, 18]]);
        }))();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      }
    }
  });

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Step = {
    components: {
      TheNavigation: TheNavigation,
      StepComponent: StepComponent,
      TheButtons: TheButtons,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle
    },
    template: "\n        <div class=\"twpx-vue-marketplace-application\">\n\n            <LoaderCircle :show=\"loading\" />\n\n            <MessageComponent type=\"error\" size=\"big\" :message=\"error\" v-if=\"!loading && error\" />\n\n            <div v-if=\"!loading\" class=\"twpx-vue-marketplace-application__content\">\n\n                <h2>{{ lang.application.heading }}</h2>\n\n                <TheNavigation :groups=\"applicationGroups\" @clickNavItem=\"clickNavItem\" />\n\n                <StepComponent :step=\"step\" @input=\"input\" @hints=\"hints\" />\n\n                <TheButtons :groups=\"applicationGroups\" :step=\"step\" :lang=\"lang.application\" @send=\"send\" />\n\n            </div>\n\n        </div>\n    ",
    computed: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'steps', 'error', 'loading', 'resultApplicationGroupId'])), ui_vue3_pinia.mapState(applicationStore, ['applicationControls', 'applicationGroups'])), {}, {
      step: function step() {
        var groupId = this.$route.params.id || (this.applicationGroups.length ? this.applicationGroups[0].id : undefined);
        var group = this.applicationGroups.find(function (g) {
          return String(g.id) === String(groupId);
        });
        var controls = this.applicationControls.filter(function (c) {
          return String(c.groupid) === String(groupId);
        });
        return controls.length ? {
          id: groupId,
          title: group.title,
          subtitle: group.subtitle,
          controls: controls
        } : {};
      }
    }),
    methods: _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['runApiMethod', 'changeError', 'changeLoading', 'createUrl'])), ui_vue3_pinia.mapActions(applicationStore, ['changeApplicationControls', 'changeApplicationGroups'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'runHintsAction', 'setHints'])), ui_vue3_pinia.mapActions(resultStore, ['setFormIdArray', 'setFormTemplate', 'setFormDataArray', 'changeResultApplicationGroup', 'changeResultApplicationControls'])), {}, {
      clickNavItem: function clickNavItem(_ref) {
        var group = _ref.group;
        this.$router.push("/step/".concat(group.id));
      },
      showError: function showError(response, method) {
        this.changeLoading(false);
        if (response && response.errors.length) {
          this.changeError("".concat(method ? method + ' - ' : '').concat(response.errors[0].message));
        }
      },
      send: function send() {
        var _this = this;
        this.changeLoading(true);
        this.changeError('');
        var controls = this.applicationControls.slice();
        controls.forEach(function (c) {
          if (c.property === 'date' && c.type === 'range') {
            c.value = "".concat(c.value[0], "-").concat(c.value[1]);
          }
        });
        this.runApiMethod('applicationSave', {
          fields: controls
        }).then(function (response) {
          var _response$data;
          return _this.runApiMethod('searchForms', {
            applicationID: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.applicationID
          });
        }, function (r) {
          _this.showError(r, 'applicationSave');
        }).then(function (response) {
          _this.setFormIdArray(response.data);
          _this.createUrl(_this.applicationControls);
          _this.$router.push("/result");
        }, function (r) {
          _this.showError(r, 'searchForms');
        })["catch"](function (err) {
          _this.showError(err);
        });
      },
      input: function input(args) {
        this.changeControlValue(args);
      },
      hints: function hints(_ref2) {
        var type = _ref2.type,
          control = _ref2.control,
          action = _ref2.action,
          value = _ref2.value;
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
      }
    }),
    mounted: function mounted() {
      var _this2 = this;
      this.changeLoading(true);
      this.changeError('');
      this.runApiMethod('applicationGroups').then(function (response) {
        _this2.changeApplicationGroups(response.data, _this2.resultApplicationGroupId);
        _this2.changeResultApplicationGroup(response.data, _this2.resultApplicationGroupId);
        return _this2.runApiMethod('applicationTemplate');
      }, function (r) {
        _this2.showError(r, 'applicationGroups');
      }).then(function (response) {
        _this2.changeLoading(false);
        _this2.changeError('');
        _this2.changeApplicationControls(response.data, _this2.resultApplicationGroupId);
        _this2.changeResultApplicationControls(response.data, _this2.resultApplicationGroupId);
      }, function (r) {
        _this2.showError(r, 'applicationTemplate');
      });
    }
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ResultItemComponent = {
    data: function data() {
      return {
        s: false
      };
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    props: ['company'],
    emits: ['createApplication'],
    template: "\n        <div class=\"twpx-vue-marketplace-company\" :data-id=\"company.id\">\n            <div class=\"twpx-vue-marketplace-company__text\">\n                <h3 v-if=\"companyName\" v-html=\"companyName\"></h3>\n                <p v-if=\"companyDescription\">{{ companyDescription }}</p>\n            </div>\n            <div class=\"twpx-vue-marketplace-company__properties\">\n                <div class=\"twpx-vue-marketplace-company__props\">\n                    <div class=\"twpx-vue-marketplace-company__prop\" v-for=\"prop in getProperties().slice(0,6)\" :key=\"prop.id\">\n                        <b>{{ prop.label }}</b>\n                        <span v-html=\"getValue(prop)\"></span>\n                    </div>\n                    <TransitionGroup name=\"list\">\n                        <div class=\"twpx-vue-marketplace-company__prop\" v-for=\"prop in getProperties().slice(6)\" :key=\"prop.id\" v-show=\"s\">\n                            <b>{{ prop.label }}</b>\n                            <span v-html=\"getValue(prop)\"></span>\n                        </div>\n                    </TransitionGroup>\n                </div>\n                <ButtonComponent :text=\"lang.result.moreProps\" :props=\"['serve', 'small']\" @clickButton=\"moreProperties\" />\n            </div>\n            <div class=\"twpx-vue-marketplace-company__buttons\">\n                <ButtonComponent :text=\"lang.result.getButton\" :props=\"['icon-content', 'primary', 'medium']\" @clickButton=\"\" />\n                <div class=\"twpx-vue-marketplace-company__buttons__right\">\n                    <ControlComponent :control='company.checkbox' @input=\"input\" />\n                    <ButtonComponent :text=\"lang.result.sendButton\" :props=\"['secondary', 'medium']\" @clickButton=\"createApplication\" />\n                </div>\n            </div>\n        </div>\n    ",
    computed: _objectSpread$3(_objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(resultStore, ['formTemplate', 'formData'])), {}, {
      dataObject: function dataObject() {
        var _this = this;
        return this.company.data.filter(function (d) {
          return String(d.value);
        }).forEach(function (d) {
          d.label = _this.template[d.name];
        });
      },
      companyName: function companyName() {
        var site = this.company.data.find(function (c) {
          return c.name === 'UF_SITE';
        });
        var name = this.company.data.find(function (c) {
          return c.name === 'UF_NAME';
        });
        if (site) {
          return "<a href=\"".concat(site.value, "\">").concat(name.value, "</a>");
        }
        return name === null || name === void 0 ? void 0 : name.value;
      },
      companyDescription: function companyDescription() {
        var _this$company$data$fi;
        return (_this$company$data$fi = this.company.data.find(function (c) {
          return c.name === 'UF_DESCRIPTION';
        })) === null || _this$company$data$fi === void 0 ? void 0 : _this$company$data$fi.value;
      }
    }),
    methods: {
      createApplication: function createApplication() {
        this.$emit('createApplication', {
          groupApplicationArray: [this.company.id]
        });
      },
      getProperties: function getProperties() {
        var result = this.company.data.slice();
        result = result.filter(function (d) {
          return d.name !== 'UF_NAME' && d.name !== 'UF_DESCRIPTION';
        });
        result.sort(function (a, b) {
          return Number(a.sort) - Number(b.sort);
        });
        return result;
      },
      getValue: function getValue(d) {
        if (!d.value) {
          return '-';
        } else if (d.name === 'UF_SITE') {
          var site = d.value;
          if (!String(d.value).startsWith('http')) {
            site = "http://".concat(d.value);
          }
          return "<a href=\"".concat(site, "\" target=\"_blank\">").concat(d.value, "</a>");
        } else if (d.name === 'UF_EMAIL') {
          return "<a href=\"mailto:".concat(d.value, "\">").concat(d.value, "</a>");
        } else if (d.name === 'UF_EGRUL_DATA') {
          var s = d.value;
          var date = new Date(s);
          var dd = String(date.getDate()).padStart(2, "0");
          var mm = String(date.getMonth() + 1).padStart(2, "0");
          var yyyy = date.getFullYear();
          var formatted = "".concat(dd, ".").concat(mm, ".").concat(yyyy); // "15.02.1996"

          return formatted;
        }
        return d.value;
      },
      moreProperties: function moreProperties() {
        this.s = true;
      }
    }
  };

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var GroupApplicationComponent = {
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: ['groupApplicationArray'],
    emits: ['createApplication'],
    template: "\n        <div class=\"twpx-vue-marketplace-group-application\" v-if=\"groupApplicationArray.length > 0\">\n            <div class=\"twpx-vue-marketplace-group-application__text\">\n                <h4>{{ lang.result.groupApplicationHeading }}</h4>\n                <div>{{ lang.result.groupApplicationText }}: {{ num }} {{ pluralizeOrganization(num) }}.</div>\n            </div>\n            <ButtonComponent :text=\"lang.result.sendButton\" :props=\"['secondary', 'medium']\" @clickButton=\"createApplication\" />\n        </div>\n    ",
    computed: _objectSpread$4(_objectSpread$4({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), {}, {
      num: function num() {
        return this.groupApplicationArray.length;
      }
    }),
    methods: {
      createApplication: function createApplication() {
        this.$emit('createApplication', {
          groupApplicationArray: this.groupApplicationArray
        });
      },
      pluralizeOrganization: function pluralizeOrganization(n) {
        var forms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lang.result.groupApplicationCompany;
        var abs = Math.abs(n);
        var mod10 = abs % 10;
        var mod100 = abs % 100;
        if (mod100 >= 11 && mod100 <= 14) return forms[2];
        if (mod10 === 1) return forms[0];
        if (mod10 >= 2 && mod10 <= 4) return forms[1];
        return forms[2];
      }
    }
  };

  var ResultApplicationForm = {
    data: function data() {
      return {
        id: "resultApplicationForm".concat(Math.round(Math.random() * 1000))
      };
    },
    props: ['controls', 'lang'],
    emits: ['input', 'hints', 'cancel', 'send'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <form :data-id=\"id\">\n            <div class=\"twpx-vue-marketplace__result-application-form\">\n                <h2 v-if=\"lang && lang?.result?.formHeading\">{{ lang.result.formHeading }}</h2>\n                <p v-if=\"lang && lang?.result?.formText\">{{ lang.result.formText }}</p>\n                <div class=\"twpx-vue-marketplace__result-application-form__wrapper\">\n                    <ControlComponent v-for=\"control in controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n                </div>\n                <div class=\"twpx-vue-marketplace__result-application-form__buttons\">\n                    <ButtonComponent :text=\"lang.result.formCancel\" :props=\"['gray-color','large']\" @clickButton=\"clickCancel\" />\n                    <ButtonComponent :text=\"lang.result.formSend\" :props=\"['secondary','large']\" @clickButton=\"clickSend\" />\n                </div>\n            </div>\n        </form>\n    ",
    methods: {
      input: function input(args) {
        this.$emit('input', args);
      },
      hints: function hints(args) {
        this.$emit('hints', args);
      },
      clickCancel: function clickCancel() {
        this.$emit('cancel');
      },
      clickSend: function clickSend() {
        var formData = new FormData(document.querySelector("[data-id=\"".concat(this.id, "\"]")));
        this.$emit('send', formData);
      }
    }
  };

  var ResultApplicationSuccess = {
    props: ['lang'],
    emits: ['close'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n            <div class=\"twpx-vue-marketplace__result-application-success\">\n                <h2 v-if=\"lang && lang?.result?.formSuccessHeading\">{{ lang.result.formSuccessHeading }}</h2>\n                <p v-if=\"lang && lang?.result?.formSuccessText\">{{ lang.result.formSuccessText }}</p>\n                <div class=\"twpx-vue-marketplace__result-application-success__button\">\n                    <ButtonComponent :text=\"lang.result.formSuccessButton\" :props=\"['gray-color','large']\" @clickButton=\"close\" />\n                </div>\n            </div>\n    ",
    methods: {
      close: function close() {
        this.$emit('close');
      }
    }
  };

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Result = {
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MoreButton: local_vueComponents_moreButton.MoreButton,
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent,
      ResultApplicationForm: ResultApplicationForm,
      ResultApplicationSuccess: ResultApplicationSuccess,
      ResultItemComponent: ResultItemComponent,
      GroupApplicationComponent: GroupApplicationComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-result\">\n\n            <LoaderCircle :show=\"loading\" />\n\n            <MessageComponent type=\"error\" size=\"big\" :message=\"error\" v-if=\"!loading && error\" />\n\n            <ModalAnyContent :stateWatcher=\"applicationModalStateWatcher\" @onClose=\"onClose\">\n                <LoaderCircle v-if=\"resultApplicationLoading\" :show=\"resultApplicationLoading\" />\n                <MessageComponent\n                    v-else-if=\"resultApplicationError\"\n                    type=\"error\"\n                    size=\"big\"\n                    :message=\"resultApplicationError\"\n                />\n                <ResultApplicationForm\n                    v-else-if=\"resultApplicationState === 'form'\"\n                    :lang=\"lang\"\n                    :controls=\"resultApplicationControls\"\n                    @input=\"input\"\n                    @hints=\"hints\"\n                    @cancel=\"close\"\n                    @send=\"send\"\n                />\n                <ResultApplicationSuccess v-else :lang=\"lang\" @close=\"close\" />\n            </ModalAnyContent>\n\n            <div v-if=\"!loading && !error\" class=\"twpx-vue-marketplace-result__content\">\n\n                <h2>{{ lang.result.heading }}</h2>\n\n                <ResultItemComponent v-for=\"company in formDataArray\" :key=\"company.id\" :company=\"company\" @createApplication=\"createApplication\" />\n\n                <MoreButton :loading=\"loadingMore\" :show=\"showMore\" @clickMore=\"clickMore\" />\n\n                <GroupApplicationComponent :groupApplicationArray=\"groupApplicationArray\" @createApplication=\"createApplication\" />\n\n            </div>\n\n        </div>\n    ",
    computed: _objectSpread$5(_objectSpread$5(_objectSpread$5({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'error', 'loading'])), ui_vue3_pinia.mapState(resultStore, ['formIdArray', 'formDataArray', 'groupApplicationArray', 'startIndex', 'maxCountPerRequest', 'loadingMore', 'applicationModalStateWatcher', 'resultApplicationGroup', 'resultApplicationControls', 'resultApplicationState', 'resultApplicationLoading', 'resultApplicationError'])), {}, {
      showMore: function showMore() {
        return this.startIndex < this.formIdArray.length;
      }
    }),
    methods: _objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5({}, ui_vue3_pinia.mapActions(dataStore, ['runApiMethod', 'changeError', 'changeLoading'])), ui_vue3_pinia.mapActions(resultStore, ['setFormDataArray', 'setStartIndex', 'setMaxCountPerRequest', 'changeLoadingMore', 'changeProp'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControlValue', 'runHintsAction', 'setHints'])), {}, {
      createApplication: function createApplication(_ref) {
        var groupApplicationArray = _ref.groupApplicationArray;
        this.changeProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
      },
      clickMore: function clickMore() {
        this.loadNextPage();
      },
      loadNextPage: function loadNextPage() {
        var _this = this;
        this.changeLoadingMore(true);
        try {
          var requestArr = this.formIdArray.slice(this.startIndex, this.startIndex + this.maxCountPerRequest).map(function (formID) {
            return _this.runApiMethod('formData', {
              code: formID
            });
          });
          Promise.all(requestArr).then(function (formDataArray) {
            _this.setFormDataArray(formDataArray.map(function (r, i) {
              return {
                id: _this.formIdArray[i],
                data: r.data,
                checkbox: {
                  "property": "checkbox",
                  "type": "block",
                  "id": Math.floor(Math.random() * 1000),
                  "name": "APPLICATION_GROUP",
                  "required": false,
                  "label": _this.lang.result.checkboxLable,
                  "value": _this.formIdArray[i],
                  "checked": false
                }
              };
            }));
            _this.changeLoading(false);
            _this.changeLoadingMore(false);
            _this.setStartIndex(_this.startIndex + _this.maxCountPerRequest);
          })["catch"](function (response) {
            _this.changeLoading(false);
            if (response && response.errors.length) {
              _this.changeError("formData - ".concat(response.errors[0].message));
            }
          });
        } catch (err) {
          throw err;
        }
      },
      input: function input(args) {
        this.changeControlValue(args);
      },
      hints: function hints(_ref2) {
        var type = _ref2.type,
          control = _ref2.control,
          action = _ref2.action,
          value = _ref2.value;
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
      send: function send(formData) {
        var _this2 = this;
        this.changeProp('resultApplicationLoading', true);
        this.runApiMethod('send', {}, formData).then(function (response) {
          _this2.changeProp('resultApplicationLoading', false);
          _this2.changeProp('resultApplicationState', 'success');
        }, function (res) {
          _this2.changeProp('resultApplicationLoading', false);
          if (res && res.errors) {
            _this2.changeProp('resultApplicationError', res.errors[0].message);
          }
        })["catch"](function (err) {
          _this2.changeProp('resultApplicationLoading', false);
          console.log(err);
        });
      },
      close: function close() {
        this.changeProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
      },
      onClose: function onClose() {
        this.changeProp('resultApplicationState', 'form');
        this.changeProp('resultApplicationError', '');
      }
    }),
    mounted: function mounted() {
      this.changeLoading(true);
      this.loadNextPage();
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var Marketplace = /*#__PURE__*/function () {
    function Marketplace(rootNode, options) {
      babelHelpers.classCallCheck(this, Marketplace);
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
          component: Step,
          alias: '/step'
        }, {
          path: '/step/:id',
          component: Step
        }, {
          path: '/result',
          component: Result
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(Marketplace, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Marketplace Application',
          components: {
            Application: Application
          },
          template: '<Application />',
          beforeMount: function beforeMount() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().lang = self.options.lang || {};
            dataStore().actions = self.options.actions || [];
            resultStore().maxCountPerRequest = self.options.maxCountPerRequest || 3;
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
    }]);
    return Marketplace;
  }();

  exports.Marketplace = Marketplace;

}((this.BX = this.BX || {}),BX,BX,BX.AAS,BX.Loaders,BX.AAS,BX.Modals,BX.Controls,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
