/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_messageInfo,local_vueComponents_controlTel,local_vueComponents_controlCheckbox,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: ''
      };
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {
        lang: {
          messageInfo: 'Управление организацией доступно в личном кабинете «Единоличного органа управления» (генерального директора) по данным реестра СРО ААС',
          messageInfoButton: 'Понятно'
        },
        tel: {
          property: 'tel',
          id: 'id0',
          name: 'NUM',
          label: 'Поле с подполем',
          value: '',
          required: false,
          disabled: false
        }
      };
    },
    components: {
      MessageInfo: local_vueComponents_messageInfo.MessageInfo
    },
    // language=Vue

    template: "\n    <div class=\"vue-auth-sms\">\n      <div class=\"vue-auth-sms-left\">\n        <h3 class=\"mt-0\">\u0412\u0445\u043E\u0434 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0421\u041C\u0421 \u043A\u043E\u0434\u0430</h3>\n        <MessageInfo :message=\"lang.messageInfo\" :button=\"lang.messageInfoButton\" @clickButton=\"console.log('click button')\" />\n\n        <ControlTel :control=\"tel\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" />\n        <ControlCheckbox :control=\"checkbox\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" />\n      </div>\n      <div class=\"vue-auth-sms-right\">\n        <img src=\"/markup/pages/auth-sms/auth-sms-ill.png\" alt=\"\">\n      </div>\n      \n    </div>\n\t",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['sessionid', 'signedParameters'])),
    methods: {
      // ...mapActions(tableStore, [
      //   'hideErrorTable',
      //   'runColumnsNames',
      //   'runItems',
      //   'runDefaultSort',
      //   'runSetDefaultSort',
      // ]),
    },
    mounted: function mounted() {}
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var AuthSMS = /*#__PURE__*/function () {
    function AuthSMS(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthSMS);
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
    babelHelpers.createClass(AuthSMS, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
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
      key: "getTableStore",
      value: function getTableStore() {
        return tableStore;
      }
    }]);
    return AuthSMS;
  }();

  exports.AuthSMS = AuthSMS;

}((this.BX = this.BX || {}),BX,BX.AAS,BX.Controls,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map