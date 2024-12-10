/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_messageComponent,
  local_vueComponents_controlTel,
  local_vueComponents_controlCheckbox,
  local_vueComponents_buttonComponent,
  ui_vue3_pinia
) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: '',
        lang: {},
      };
    },
  });

  var a1Store = ui_vue3_pinia.defineStore('A1', {
    state: function state() {
      return {
        tel: {
          property: 'tel',
          id: 'id0',
          name: 'PHONE',
          label: (function () {
            return dataStore().lang;
          })(),
          value: '',
          required: true,
          disabled: false,
        },
        checkbox: {
          property: 'checkbox',
          id: 'id1',
          name: 'NUM',
          label: dataStore().lang,
          value: '',
          required: false,
          disabled: false,
        },
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return !this.tel.value.trim() || !this.checkbox.value;
      },
    },
    actions: {
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      runFormSubmit: function runFormSubmit() {
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.send', {
              data: {
                phone: this.tel.value,
              },
            })
            .then(
              function (response) {
                //show code
              },
              function (response) {
                console.log(response.errors[0].message);
              }
            );
        }
      },
    },
  });

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var A1 = {
    data: function data() {
      return {
        submitProps: ['large', 'secondary', 'wide'],
      };
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ControlTel: local_vueComponents_controlTel.ControlTel,
      ControlCheckbox: local_vueComponents_controlCheckbox.ControlCheckbox,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-a1">\n      <h3 class="mt-0">{{ lang.AUTH_SMS_TITLE }}</h3>\n      <MessageComponent type="info" :message="lang.AUTH_SMS_A1_MESSAGE_INFO" :button="lang.AUTH_SMS_A1_BUTTON_INFO" @clickButton="console.log(\'click button\')" />\n      \n      <MessageComponent type="error" :message="lang.AUTH_SMS_A1_MESSAGE_INFO" />\n\n      <div class="vue-auth-sms-a1-form">\n        <div class="vue-auth-sms-a1-form-body">\n          <ControlTel :control="tel" @input="inputTel" @focus="focus" @blur="blur" @enter="enter" />\n          <hr />\n          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />\n          <hr />\n          <ButtonComponent :text="lang.AUTH_SMS_A1_BUTTON_SUBMIT" :props="submitProps" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n        </div>\n      </div>\n\n      <hr class="hr--line hr--none" />\n\n      <div class="vue-auth-sms-a1-ornz-enter">\n\n        <div>\n          <ButtonComponent :text="lang.AUTH_SMS_A1_BUTTON_ORNZ" :props="[\'medium\', \'primary\']" @clickButton="clickORNZ" />\n        </div>\n\n        <div>\n          <a href="">{{ lang.AUTH_SMS_A1_ENTER }}</a>\n        </div>\n\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang'])),
      ui_vue3_pinia.mapState(a1Store, ['tel', 'checkbox', 'buttonDisabled'])
    ),
    methods: _objectSpread(
      _objectSpread(
        {},
        ui_vue3_pinia.mapActions(a1Store, [
          'changeControlValue',
          'runFormSubmit',
        ])
      ),
      {},
      {
        inputTel: function inputTel(_ref) {
          var value = _ref.value;
          this.changeControlValue({
            value: value,
            control: this.tel,
          });
        },
        inputCheckbox: function inputCheckbox(_ref2) {
          var value = _ref2.value;
          this.changeControlValue({
            value: value,
            control: this.checkbox,
          });
        },
        clickSubmit: function clickSubmit() {
          this.submitProps.push('load-circle');
          this.runFormSubmit();
        },
        clickORNZ: function clickORNZ() {
          console.log('click ornz');
        },
      }
    ),
    mounted: function mounted() {},
  };

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$1(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$1(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var Application = {
    data: function data() {},
    components: {
      A1: A1,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n      <div class="vue-auth-sms-left">\n        <A1 />\n      </div>\n      <div class="vue-auth-sms-right">\n        <img src="/markup/pages/auth-sms/auth-sms-ill.png" alt="">\n      </div>\n      \n    </div>\n\t',
    computed: _objectSpread$1(
      {},
      ui_vue3_pinia.mapState(dataStore, ['sessionid', 'signedParameters'])
    ),
    methods: {
      // ...mapActions(tableStore, [
      //   'hideErrorTable',
      //   'runColumnsNames',
      //   'runItems',
      //   'runDefaultSort',
      //   'runSetDefaultSort',
      // ]),
    },
    mounted: function mounted() {},
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError(
        'Cannot initialize the same private elements twice on an object'
      );
    }
  }
  var _store = /*#__PURE__*/ new WeakMap();
  var _rootNode = /*#__PURE__*/ new WeakMap();
  var _application = /*#__PURE__*/ new WeakMap();
  var AuthSMS = /*#__PURE__*/ (function () {
    function AuthSMS(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthSMS);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0,
      });
      babelHelpers.classPrivateFieldSet(
        this,
        _store,
        ui_vue3_pinia.createPinia()
      );
      babelHelpers.classPrivateFieldSet(
        this,
        _rootNode,
        document.querySelector(rootNode)
      );
      this.options = options;
    }
    babelHelpers.createClass(AuthSMS, [
      {
        key: 'run',
        value: function run() {
          var self = this;
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Table Application',
              components: {
                Application: Application,
              },
              template: '<Application/>',
              mounted: function mounted() {
                dataStore().sessid = self.options.sessid || '';
                dataStore().signedParameters =
                  self.options.signedParameters || '';
                dataStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS'
                );
              },
            })
          );
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
        },
      },
      {
        key: 'initStorageBeforeStartApplication',
        value: function initStorageBeforeStartApplication() {
          ui_vue3_pinia.setActivePinia(
            babelHelpers.classPrivateFieldGet(this, _store)
          );
        },
      },
      {
        key: 'getTableStore',
        value: function getTableStore() {
          return tableStore;
        },
      },
    ]);
    return AuthSMS;
  })();

  exports.AuthSMS = AuthSMS;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.AAS,
  BX.Controls,
  BX.Controls,
  BX.AAS,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
