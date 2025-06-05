/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_controlComponent,ui_vue3_pinia,local_vueComponents_buttonComponent) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
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
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    template: "\n    <router-view />\n\t",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['sessid', 'signedParameters'])),
    mounted: function mounted() {
      // this.runColumnsNames({
      //   mode: 'class',
      //   data: {
      //     signedParameters: this.signedParameters,
      //     sessid: this.sessid,
      //   },
      // });

      // this.runItems({
      //   mode: 'class',
      //   data: {
      //     signedParameters: this.signedParameters,
      //     sessid: this.sessid,
      //     startIndex: this.items.startIndex || 0,
      //     maxCountPerRequest: this.maxCountPerRequest,
      //   },
      // });
    }
  };

  var TheNavigation = {
    data: function data() {
      return {};
    },
    props: ['steps'],
    emits: ['clickNavItem'],
    template: "\n        <div class=\"twpx-vue-marketplace-nav\">\n            <div class=\"twpx-vue-marketplace-nav-items\">\n                <div\n                    :class=\"{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': isStepActive(stepIndex)}\"\n                    v-for=\"(step, stepIndex) in steps\"\n                    :key=\"step.id\"\n                    @click.prevent=\"click(step)\">\n                        {{ step.name }}\n                </div>\n            </div>\n            <div :class=\"{'twpx-vue-marketplace-nav-line': true, 'twpx-vue-marketplace-nav-line--full': lineWidth === '100%'}\">\n                <div :style=\"'width: ' + lineWidth\"></div>\n            </div>\n        </div>\n    ",
    computed: {
      currentIndex: function currentIndex() {
        var _this = this;
        var index = this.steps.findIndex(function (s) {
          return String(s.id) === String(_this.$route.params.id);
        }) || 0;
        return index === -1 ? 0 : index;
      },
      lineWidth: function lineWidth() {
        return (this.currentIndex + 1) * 100 / this.steps.length + '%';
      }
    },
    methods: {
      click: function click(step) {
        this.$emit('clickNavItem', {
          step: step
        });
        this.highlightItem(step);
      },
      isStepActive: function isStepActive(stepIndex) {
        return stepIndex <= this.currentIndex;
      }
    }
  };

  var StepComponent = {
    props: ['step'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-html\" v-if=\"step.html\" v-html=\"step.html\"></div>\n\n        <div class=\"twpx-vue-marketplace-controls\">\n            <ControlComponent v-for=\"control in step.controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" />\n        </div>\n    "
  };

  var TheButtons = {
    props: ['steps'],
    emits: ['send'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-buttons\">\n            <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_PREV')\" :props=\"['gray-color','large']\" @clickButton=\"goBack\" v-if=\"currentIndex > 0\" />\n            <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_NEXT')\" :props=\"['secondary','large']\" @clickButton=\"goForward\" v-if=\"currentIndex < steps.length - 1\" />\n            <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_SEND')\" :props=\"['secondary','large']\" @clickButton=\"$emit('send')\" v-if=\"currentIndex == steps.length - 1\" />\n        </div>\n    ",
    computed: {
      currentIndex: function currentIndex() {
        var _this = this;
        return this.$route.params.id ? this.steps.findIndex(function (s) {
          return String(s.id) === String(_this.$route.params.id);
        }) : 0;
      }
    },
    methods: {
      goBack: function goBack() {
        var step = this.steps[this.currentIndex - 1];
        if (step) {
          this.$router.push("/step/".concat(step.id));
        }
      },
      goForward: function goForward() {
        var step = this.steps[this.currentIndex + 1];
        if (step) {
          this.$router.push("/step/".concat(step.id));
        }
      }
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Step = {
    components: {
      TheNavigation: TheNavigation,
      StepComponent: StepComponent,
      TheButtons: TheButtons
    },
    template: "\n        <div class=\"twpx-vue-marketplace\">\n\n            <h2>{{ $Bitrix.Loc.getMessage('TWPX_MARKETPLACE_H2') }}</h2>\n\n            <TheNavigation :steps=\"steps\" @clickNavItem=\"clickNavItem\" />\n\n            <StepComponent :step=\"step\" />\n\n            <TheButtons :steps=\"steps\" @send=\"send\" />\n\n        </div>\n    ",
    computed: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['steps'])), {}, {
      step: function step() {
        var _this = this;
        return this.steps.find(function (s) {
          return s.id === _this.$route.params.id;
        }) || this.steps[0];
      }
    }),
    methods: {
      clickNavItem: function clickNavItem(_ref) {
        var step = _ref.step;
        this.$router.push("/step/".concat(step.id));
      },
      send: function send() {
        console.log('send');
        this.$router.push("/result");
      }
    }
  };

  var ResultComponent = {
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div class=\"twpx-vue-marketplace-result\">\n            <div class=\"twpx-vue-marketplace-company\">\n                <div class=\"twpx-vue-marketplace-company__logo\">\n                    <img src=\"\" alt=\"\">\n                </div>\n                <div class=\"twpx-vue-marketplace-company__profile\">\n                    <div class=\"twpx-vue-marketplace-company__text\">\n                        <h3>\n                            <a href=\"\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</a>\n                        </h3>\n                        <p>\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 15-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E\u043C \u0430\u0443\u0434\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0438 \u043A\u0440\u0443\u043F\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0432\u0441\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438, \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u2014 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B \u0441 \u0434\u043E\u043F\u0443\u0441\u043A\u043E\u043C \u043A \u0430\u0443\u0434\u0438\u0442\u0443 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0437\u043D\u0430\u043D\u0438\u0435\u043C \u041C\u0421\u0424\u041E.</p>\n                    </div>\n                    <div class=\"twpx-vue-marketplace-company__properties\">\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438</b>\n                            <span>1990</span>\n                        </div>\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u043E\u0432</b>\n                            <span>156</span>\n                        </div>\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u043E\u043C \u0441\u0435\u0442\u0438</b>\n                            <span>\u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0410\u0411\u041A</span>\n                        </div>\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u0410\u0443\u0434\u0438\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u043D\u0430 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u043C \u0440\u044B\u043D\u043A\u0435</b>\n                            <span>\u0414\u0430</span>\n                        </div>\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u0410\u0443\u0434\u0438\u0442 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u043C\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439</b>\n                            <span>\u0414\u0430</span>\n                        </div>\n                        <div class=\"twpx-vue-marketplace-company__prop\">\n                            <b>\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</b>\n                            <span>\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E, \u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0417\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F, \u0418\u0422 \u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</span>\n                        </div>\n                    </div>\n                    <div class=\"twpx-vue-marketplace-company__buttons\">\n                        <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_RESULT_BUTTON_GET')\" :props=\"['serve', 'medium']\" @clickButton=\"\" />\n                        <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_RESULT_BUTTON_SEND')\" :props=\"['secondary', 'medium']\" @clickButton=\"\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
  };

  var Result = {
    components: {
      ResultComponent: ResultComponent
    },
    template: "\n        <ResultComponent />\n    "
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
            dataStore().sessid = self.options.sessid || '';
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

}((this.BX = this.BX || {}),BX,BX,BX.Controls,BX,BX.AAS));
//# sourceMappingURL=application.bundle.js.map
