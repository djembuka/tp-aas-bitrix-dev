/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_controlTel,
  local_vueComponents_controlHint,
  local_vueComponents_controlPassword,
  local_vueComponents_controlCheckbox,
  local_vueComponents_messageComponent,
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
    actions: {
      setInfo: function setInfo(message) {
        this.info = message;
      },
      setError: function setError(message) {
        this.error = message;
      },
    },
  });

  var smsStore = ui_vue3_pinia.defineStore('sms', {
    state: function state() {
      return {
        lang: {},
        state: 'A1',
        tel: {
          property: 'tel',
          id: 'id0',
          name: 'PHONE',
          label: '',
          value: '',
          required: true,
          disabled: false,
        },
        checkbox: {
          property: 'checkbox',
          id: 'id1',
          name: 'NUM',
          label: '',
          value: '',
          required: false,
          disabled: false,
        },
        submitProps: {
          large: true,
          secondary: true,
          wide: true,
        },
        error: null,
        errorButton: false,
        timer: 0,
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        var result = false;
        if (this.state === 'C1' && this.timer) {
          result = true;
        } else {
          result =
            this.tel.setInvalidWatcher ||
            this.tel.disabled ||
            !this.tel.value.trim() ||
            !this.checkbox.value;
        }
        return result;
      },
      buttonSubmitTimerText: function buttonSubmitTimerText() {
        return this.timer
          ? ''
              .concat(this.lang.AUTH_SMS_SMS_BUTTON_SUBMIT_TIMER, ' ')
              .concat(
                new Date(this.timer * 1000).toISOString().substring(14, 5)
              )
          : '';
      },
    },
    actions: {
      buttonSubmitTimer: function buttonSubmitTimer(start) {
        var _this = this;
        this.timer = Number(start);
        var intervalId = setInterval(function () {
          if (_this.timer === 0) {
            clearInterval(intervalId);
          } else {
            _this.timer--;
          }
        }, 1000);
      },
      changeSubmitProps: function changeSubmitProps(obj) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2.submitProps[key] = true;
          } else {
            delete _this2.submitProps[key];
          }
        });
      },
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
        if (control.property === 'tel') {
          control.setInvalidWatcher = false;
        }
      },
      runFormSubmit: function runFormSubmit() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.send', {
              data: {
                phone: this.tel.value,
              },
            })
            .then(
              function (response) {
                _this3.changeSubmitProps({
                  'load-circle': false,
                });

                //show code
                _this3.tel.focusWatcher = false;
                _this3.tel.setInvalidWatcher = false;
                _this3.tel.regexp_description = '';
              },
              function (response) {
                _this3.changeSubmitProps({
                  'load-circle': false,
                });
                _this3.error = response.errors[0];
                if (String(response.errors[0].code) === String(1003)) {
                  //code
                  _this3.state = 'code';

                  //C1 1002
                  // this.state = 'C1';
                  // this.buttonSubmitTimer(127); //response.errors[0].customData.remain

                  //B1 1001
                  // this.state = 'B1';
                  // this.tel.disabled = true;
                  // this.errorButton = this.lang.AUTH_SMS_ERROR_BUTTON;
                  //A2
                  // this.state = 'A2';
                  // this.tel.focusWatcher = true;
                  // this.tel.setInvalidWatcher = true;
                  // this.tel.regexp_description = lang.AUTH_SMS_ERROR_1003;
                } else if (String(response.errors[0].code) === String(1005)) {
                  //A3
                  _this3.state = 'A3';
                  _this3.tel.focusWatcher = true;
                  _this3.tel.setInvalidWatcher = true;
                  _this3.tel.regexp_description = lang.AUTH_SMS_ERROR_1005;
                }
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
  var Sms = {
    data: function data() {
      return {};
    },
    components: {
      ControlTel: local_vueComponents_controlTel.ControlTel,
      ControlCheckbox: local_vueComponents_controlCheckbox.ControlCheckbox,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-sms">\n      <div class="vue-auth-sms-sms-form">\n        <div class="vue-auth-sms-sms-form-body">\n          <ControlTel :control="tel" @input="inputTel" @focus="focus" @blur="blur" @enter="enter" />\n          <hr />\n          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />\n          <hr />\n          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang'])),
      ui_vue3_pinia.mapState(smsStore, [
        'tel',
        'checkbox',
        'submitProps',
        'buttonDisabled',
        'buttonSubmitTimerText',
      ])
    ),
    methods: _objectSpread(
      _objectSpread(
        {},
        ui_vue3_pinia.mapActions(smsStore, [
          'changeControlValue',
          'runFormSubmit',
          'changeSubmitProps',
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
          this.changeSubmitProps({
            'load-circle': true,
          });
          this.runFormSubmit();
        },
      }
    ),
    mounted: function mounted() {},
  };

  var ornzStore = ui_vue3_pinia.defineStore('ornz', {
    state: function state() {
      return {
        lang: {},
        state: 'A1',
        hint: {
          property: 'hint',
          id: 'id0',
          name: 'ORNZ',
          label: '',
          value: '',
          required: true,
          disabled: false,
        },
        password: {
          property: 'password',
          id: 'id2',
          name: 'PASSWORD',
          label: '',
          value: '',
          required: true,
          disabled: false,
        },
        checkbox: {
          property: 'checkbox',
          id: 'id1',
          name: 'CHECKBOX',
          label: '',
          value: '',
          required: false,
          disabled: false,
        },
        submitProps: {
          large: true,
          secondary: true,
          wide: true,
        },
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return (
          this.hint.setInvalidWatcher ||
          this.hint.disabled ||
          !this.hint.value.trim() ||
          !this.checkbox.value
        );
      },
    },
    actions: {
      changeSubmitProps: function changeSubmitProps(obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this.submitProps[key] = true;
          } else {
            delete _this.submitProps[key];
          }
        });
      },
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
        if (control.property === 'tel') {
          control.setInvalidWatcher = false;
        }
      },
      runFormSubmit: function runFormSubmit() {
        var _this2 = this;
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.send', {
              data: {
                phone: this.hint.value,
              },
            })
            .then(
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });

                //show code
                _this2.hint.focusWatcher = false;
                _this2.hint.setInvalidWatcher = false;
                _this2.hint.regexp_description = '';
              },
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });
                _this2.error = response.errors[0];
                if (String(response.errors[0].code) === String(1003)) {
                  //C1 1002
                  _this2.state = 'C1';
                  _this2.buttonSubmitTimer(127); //response.errors[0].customData.remain

                  //B1 1001
                  // this.state = 'B1';
                  // this.hint.disabled = true;
                  // this.errorButton = this.lang.AUTH_SMS_A1_ERROR_BUTTON_1001;
                  //A2
                  // this.state = 'A2';
                  // this.hint.focusWatcher = true;
                  // this.hint.setInvalidWatcher = true;
                  // this.hint.regexp_description = lang.AUTH_SMS_A1_TEL_1003;
                } else if (String(response.errors[0].code) === String(1005)) {
                  //A3
                  _this2.state = 'A3';
                  _this2.hint.focusWatcher = true;
                  _this2.hint.setInvalidWatcher = true;
                  _this2.hint.regexp_description = lang.AUTH_SMS_A1_TEL_1005;
                }
              }
            );
        }
      },
    },
  });

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
  var Ornz = {
    data: function data() {
      return {};
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ControlHint: local_vueComponents_controlHint.ControlHint,
      ControlPassword: local_vueComponents_controlPassword.ControlPassword,
      ControlCheckbox: local_vueComponents_controlCheckbox.ControlCheckbox,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    emits: ['openA1'],
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-ornz">\n      <h3 class="mt-0">{{ lang.AUTH_SMS_ORNZ_TITLE }}</h3>\n      <MessageComponent type="info" :message="lang.AUTH_SMS_ORNZ_MESSAGE_INFO" :button="lang.AUTH_SMS_ORNZ_BUTTON_INFO" @clickButton="console.log(\'click button\')" />\n\n      <div class="vue-auth-sms-ornz-form">\n        <div class="vue-auth-sms-ornz-form-body">\n          <ControlHint :control="hint" @input="inputHint" @focus="focus" @blur="blur" @enter="enter" />\n          <hr />\n          <ControlPassword :control="password" @input="inputPassword" @focus="focus" @blur="blur" @enter="enter" />\n          <hr />\n          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />\n          <hr />\n          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n        </div>\n      </div>\n\n      <hr class="hr--line hr--none" />\n\n      <div class="vue-auth-sms-ornz-ornz-enter">\n\n        <div>\n          <ButtonComponent :text="lang.AUTH_SMS_ORNZ_BUTTON_ORNZ" :props="[\'medium\', \'primary\']" @clickButton="clickA1" />\n        </div>\n\n        <div>\n          <a href="">{{ lang.AUTH_SMS_ORNZ_ENTER }}</a>\n        </div>\n\n      </div>\n    </div>\n\t',
    computed: _objectSpread$1(
      _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang'])),
      ui_vue3_pinia.mapState(ornzStore, [
        'state',
        'hint',
        'password',
        'checkbox',
        'submitProps',
        'error',
        'errorButton',
        'buttonDisabled',
        'buttonSubmitTimerText',
      ])
    ),
    methods: _objectSpread$1(
      _objectSpread$1(
        {},
        ui_vue3_pinia.mapActions(ornzStore, [
          'changeControlValue',
          'runFormSubmit',
          'changeSubmitProps',
        ])
      ),
      {},
      {
        inputHint: function inputHint(_ref) {
          var value = _ref.value;
          this.changeControlValue({
            value: value,
            control: this.hint,
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
          this.changeSubmitProps({
            'load-circle': true,
          });
          this.runFormSubmit();
        },
        clickA1: function clickA1() {
          this.$emit('openA1');
        },
      }
    ),
    mounted: function mounted() {},
  };

  function ownKeys$2(object, enumerableOnly) {
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
  function _objectSpread$2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$2(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$2(Object(source)).forEach(function (key) {
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
    data: function data() {
      return {
        state: 'sms',
        info: true,
        error: 'Error',
      };
    },
    components: {
      Sms: Sms,
      Ornz: Ornz,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n      <div class="vue-auth-sms-left">\n\n\n        <h3 class="mt-0">{{ title }}</h3>\n\n        <MessageComponent v-if="info" type="info" :message="lang.AUTH_SMS_INFO_MESSAGE" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />\n        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />\n\n        <Sms @openOrnz="openOrnz" v-if="state === \'sms\'" />\n        <Ornz @openA1="openA1" v-else-if="state === \'ornz\'" />\n\n        <hr class="hr--line hr--none" />\n\n        <div class="vue-auth-sms-alt">\n          <div><ButtonComponent :text="altButton" :props="[\'medium\', \'primary\']" @clickButton="clickAlt" /></div>\n          <div><a href="">{{ lang.AUTH_SMS_ENTER_LINK }}</a></div>\n        </div>\n\n      </div>\n      <div class="vue-auth-sms-right">\n        <img src="/markup/pages/auth-sms/auth-sms-ill.png" alt="">\n      </div>\n      \n    </div>\n\t',
    computed: _objectSpread$2(
      _objectSpread$2(
        {},
        ui_vue3_pinia.mapState(dataStore, [
          'sessionid',
          'signedParameters',
          'lang',
        ])
      ),
      {},
      {
        title: function title() {
          return this.lang[
            'AUTH_SMS_'.concat(String(this.state).toUpperCase(), '_TITLE')
          ];
        },
        altButton: function altButton() {
          return this.lang[
            'AUTH_SMS_'.concat(String(this.state).toUpperCase(), '_ALT_BUTTON')
          ];
        },
      }
    ),
    methods: {
      // ...mapActions(tableStore, [
      //   'hideErrorTable',
      //   'runColumnsNames',
      //   'runItems',
      //   'runDefaultSort',
      //   'runSetDefaultSort',
      // ]),
      openOrnz: function openOrnz() {
        this.state = 'ornz';
      },
      openA1: function openA1() {
        this.state = 'A1';
      },
      clickInfoButton: function clickInfoButton() {
        this.info = false;
      },
      clickAlt: function clickAlt() {
        if (this.state === 'ornz') {
          this.state = 'sms';
        } else {
          this.state = 'ornz';
        }
      },
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
                smsStore().tel.label =
                  this.$Bitrix.Loc.getMessage('AUTH_SMS_A1_TEL');
                smsStore().checkbox.label = this.$Bitrix.Loc.getMessage(
                  'AUTH_SMS_A1_CHECKBOX'
                );
                smsStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS_A1'
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
  BX.Controls,
  BX.Controls,
  BX.Controls,
  BX.Controls,
  BX.AAS,
  BX.AAS,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
