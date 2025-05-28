/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_controlComponent,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
        steps: [{
          id: 'one',
          name: 'Цель',
          html: '<h3>Определите вашу цель</h3><p>Выберите необходимы вам требования и параметры аудиторской организации.</p>',
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
          }],
          active: true
        }, {
          id: 'two',
          name: 'Сроки'
        }, {
          id: 'three',
          name: 'Размер бизнеса'
        }, {
          id: 'four',
          name: 'Требования'
        }, {
          id: 'five',
          name: 'Дополнительно'
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
  var TheNavigation = {
    template: "\n        <div class=\"twpx-vue-marketplace-nav\">\n            <div class=\"twpx-vue-marketplace-nav-items\">\n                <div\n                    :class=\"{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': step.active}\"\n                    v-for=\"step in steps\"\n                    :key=\"step.id\"\n                    @click.prevent=\"click(step)\">\n                        {{ step.name }}\n                </div>\n            </div>\n            <div class=\"twpx-vue-marketplace-nav-line\">\n                <div></div>\n            </div>\n        </div>\n    ",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['steps'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(dataStore, ['setStepActive'])), {}, {
      click: function click(step) {
        this.$router.push("/step/".concat(step.id));
        var before = true;
        this.steps.forEach(function (s) {
          if (String(s.id) === String(step.id)) {
            before = false;
            setStepActive({
              step: s,
              active: true
            });
          } else {
            setStepActive({
              step: s,
              active: before
            });
          }
        });
      }
    })
  };

  var TheButtons = {
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n        <div>\n            <ButtonComponent :text=\"$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_NEXT')\" :props=\"['secondary','medium']\" @clickButton=\"\" />\n        </div>\n    "
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      TheNavigation: TheNavigation,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      TheButtons: TheButtons
    },
    // language=Vue

    template: "\n    <div class=\"twpx-vue-marketplace\">\n      <h2>{{ $Bitrix.Loc.getMessage('TWPX_MARKETPLACE_H2') }}</h2>\n      <TheNavigation />\n      <router-view />\n      <div v-html=\"steps[0].html\"></div>\n      <div>\n        <ControlComponent v-for=\"control in steps[0].controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" />\n      </div>\n      <TheButtons />\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['sessid', 'signedParameters', 'steps'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, [])), {}, {
      one: function one() {
        console.log(this.$route.path);
        console.log(this.$route.params.id);
      }
    }),
    mounted: function mounted() {
      this.one();
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

  var Step = {
    template: "\n        <div>Step id {{ $route.params.id }}</div>\n    "
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

}((this.BX = this.BX || {}),BX,BX,BX.Controls,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
