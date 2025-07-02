/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,local_vueComponents_controlComponent,local_vueComponents_buttonComponent,local_vueComponents_modalYesNo,ui_vue3_pinia,local_vueComponents_messageComponent) {
  'use strict';

  var Application = {
    // language=Vue
    template: "\n    <div class=\"auth-keys\">\n\n      <router-view />\n      \n    </div>\n\t"
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
        lang: {},
        routeWatcher: '',
        title: '',
        info: '',
        infoMessage: '',
        infoButton: true,
        error: '',
        errorButton: false,
        tel: ''
      };
    },
    actions: {
      setTel: function setTel(tel) {
        this.tel = tel;
      },
      setTitle: function setTitle(title) {
        this.title = title;
      },
      setInfo: function setInfo(message) {
        this.info = message;
      },
      setInfoMessage: function setInfoMessage(message) {
        this.infoMessage = message;
      },
      setInfoButton: function setInfoButton(infoButton) {
        this.infoButton = infoButton;
      },
      setError: function setError(message) {
        this.error = message;
      },
      setErrorButton: function setErrorButton(errorButton) {
        this.errorButton = errorButton;
      },
      parseQuery: function parseQuery(queryString) {
        var query = {};
        var pairs = [];
        if (queryString) {
          pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        }
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
      },
      getQuery: function getQuery(queryObject) {
        var result = [];
        for (var k in queryObject) {
          result.push(k + '=' + queryObject[k]);
        }
        return '?' + result.join('&');
      }
    }
  });

  var infoStore = ui_vue3_pinia.defineStore('info', {
    state: function state() {
      return {
        lang: {
          heading: 'Подтвердите права',
          html: '<p>На вашу почту отправлено письмо с подтверждением вашего действия, откройте письмо и действуйте по инструкции.</p>'
        }
      };
    }
  });

  var editStore = ui_vue3_pinia.defineStore('edit', {
    state: function state() {
      return {
        lang: {
          heading: 'Ваш телефон',
          html: '<p>Номер телефона, который используется для авторизации в личном кабинете.</p>',
          label: 'Номер телефона',
          button: 'Изменить',
          modalHeading: 'Подтверждение',
          modalHtmlEdit: 'Вы действительно хотите изменить номер телефона?',
          modalHtmlDelete: 'Вы действительно хотите удалить номер телефона?'
        },
        controls: [{
          property: 'tel',
          id: 'id0',
          name: 'PHONE',
          label: '',
          value: dataStore().tel,
          disabled: true
        }],
        editProps: {
          large: true,
          secondary: true,
          medium: true
        },
        deleteProps: {
          icon: true,
          "delete": true,
          medium: true
        }
      };
    },
    actions: {
      setLabels: function setLabels() {
        this.controls[0].label = this.lang.label;
      },
      changeEditProps: function changeEditProps(obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this.editProps[key] = true;
          } else {
            delete _this.editProps[key];
          }
        });
      },
      changeDeleteProps: function changeDeleteProps(obj) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2.deleteProps[key] = true;
          } else {
            delete _this2.deleteProps[key];
          }
        });
      },
      edit: function edit() {
        this.changeEditProps({
          'load-circle': true
        });
        this.runDelete();
      },
      "delete": function _delete() {
        this.changeDeleteProps({
          'load-circle': true
        });
        this.runDelete();
      },
      runDelete: function runDelete() {
        var _this3 = this;
        BX.ajax.runComponentAction('twinpx:profile.edit', 'remove', {
          mode: 'class',
          data: {
            phone: dataStore().tel
          },
          signedParameters: dataStore().signedParameters
        }).then(function (response) {
          if (response.status === 'success' && response.data === true) {
            dataStore().routeWatcher = '/info';
            infoStore().heading = 'Подтвердите права';
            infoStore().text = 'На вашу почту отправлено письмо с подтверждением вашего действия, откройте письмо и действуйте по инструкции.';
          }
        }, function (response) {
          _this3.changeDeleteProps({
            'load-circle': false
          });
          _this3.changeEditProps({
            'load-circle': false
          });
          dataStore().setError(response.errors[0].message);
          if (String(response.errors[0].code) === String(1001)) {
            //B1
            _this3.state = 'B1';
            telControl.disabled = true;
            dataStore().setErrorButton(_this3.lang.AUTH_SMS_SMS_ERROR_BUTTON);
          } else if (String(response.errors[0].code) === String(1002)) {
            //C1
            _this3.state = 'C1';
            _this3.buttonSubmitTimer(response.errors[0].customData.remain);
          } else if (String(response.errors[0].code) === String(1003)) {
            //A2
            _this3.state = 'A2';
            telControl.focusWatcher = true;
            telControl.setInvalidWatcher = true;
            telControl.regexp_description = response.errors[0].message || '';
          } else if (String(response.errors[0].code) === String(1004)) ; else if (String(response.errors[0].code) === String(1005)) {
            //A3
            _this3.state = 'A3';
            telControl.focusWatcher = true;
            telControl.setInvalidWatcher = true;
            telControl.regexp_description = response.errors[0].message || '';
          } else if (String(response.errors[0].code) === String(1006)) {
            //A3
            _this3.state = 'A3';
            telControl.focusWatcher = true;
            telControl.setInvalidWatcher = true;
            telControl.regexp_description = response.errors[0].message || '';
          }
        });
      }
    }
  });

  var codeStore = ui_vue3_pinia.defineStore('code', {
    state: function state() {
      return {
        lang: {
          heading: 'Код',
          html: '<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>',
          label: 'Введите код',
          submit: 'Сохранить',
          submit_timer: 'Получить новый код'
        },
        inputs: [{
          id: 'input1',
          value: ''
        }, {
          id: 'input2',
          value: ''
        }, {
          id: 'input3',
          value: ''
        }, {
          id: 'input4',
          value: ''
        }, {
          id: 'input5',
          value: ''
        }, {
          id: 'input6',
          value: ''
        }],
        uuid: '',
        submitProps: {
          large: true,
          secondary: true,
          wide: true
        },
        timerProps: {
          medium: true,
          secondary: true
        },
        timerEnd: 0,
        timer: 0,
        timerIntervalId: '',
        clearInputs: false,
        invalidInputs: true
      };
    },
    getters: {
      code: function code() {
        return this.inputs.reduce(function (accumulator, currentValue) {
          return String(accumulator) + String(currentValue.value);
        }, '');
      },
      buttonDisabled: function buttonDisabled() {
        return this.inputs.some(function (i) {
          return !i.value || i.invalid || i.disabled;
        });
      },
      buttonTimerText: function buttonTimerText() {
        return this.timer ? "".concat(this.lang.submit_timer, " ").concat(new Date(this.timer * 1000).toISOString().substring(14, 19)) : this.lang.submit_timer;
      },
      timerDisabled: function timerDisabled() {
        return !!this.timer;
      }
    },
    actions: {
      invertClearInputs: function invertClearInputs() {
        this.clearInputs = !this.clearInputs;
      },
      setInvalidInputs: function setInvalidInputs(val) {
        this.invalidInputs = val;
      },
      buttonTimer: function buttonTimer(start) {
        var _this = this;
        this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
        this.timer = Number(start);
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = setInterval(function () {
          if (_this.timer <= 0) {
            clearInterval(_this.timerIntervalId);
          } else {
            _this.timer = _this.timerEnd - Math.round(new Date().getTime() / 1000);
          }
        }, 1000);
      },
      changeButtonProps: function changeButtonProps(obj, type) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2["".concat(type, "Props")][key] = true;
          } else {
            delete _this2["".concat(type, "Props")][key];
          }
        });
      },
      changeInputValue: function changeInputValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        if (String(value).length > 1) {
          value = String(value).substring(String(value).length - 1);
        }
        control.value = value;
      },
      runCheck: function runCheck() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax.runComponentAction('twinpx:profile.edit', 'confirm', {
            mode: 'class',
            data: {
              code: this.code,
              uuid: this.uuid
            },
            signedParameters: dataStore().signedParameters
          }).then(function (response) {
            if (response.status === 'success' && response.data === true) {
              _this3.changeButtonProps({
                'load-circle': false
              }, 'submit');
              _this3.invertClearInputs();
              _this3.inputs.forEach(function (input) {
                input.disabled = true;
                input.value = '';
              });
              dataStore().routeWatcher = '/edit';
              editStore().controls[0].value = authStore().controls[0].value;
            }
          }, function (response) {
            _this3.changeButtonProps({
              'load-circle': false
            }, 'submit');
            dataStore().error = response.errors[0].message;
            if (String(response.errors[0].code) === String(0)) {
              _this3.invertClearInputs();
              _this3.inputs.forEach(function (input) {
                input.disabled = true;
                input.value = '';
              });
              _this3.timer = NaN;
            } else if (String(response.errors[0].code) === String(1001)) {
              //B2
              //error button
              //disabled inputs
              //disabled button
              dataStore().errorButton = true;
              _this3.invertClearInputs();
              _this3.inputs.forEach(function (input) {
                input.disabled = true;
                input.value = '';
              });
              _this3.timer = NaN;
            } else {
              //2001 2002 2003 2004 2005
              //E1
              //invalid inputs
              //invalid message
              _this3.invalidInputs = true;
              //disabled button
              //timer
              if (response.errors[0].customData && response.errors[0].customData.remain) {
                _this3.timer = response.errors[0].customData.remain;
                _this3.buttonTimer(_this3.timer);
              } else {
                _this3.timer = 0;
              }
            }
          });
        }
      }
    }
  });

  var authStore = ui_vue3_pinia.defineStore('auth', {
    state: function state() {
      return {
        lang: {
          heading: 'Введите ваш номер',
          html: '<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>',
          label: 'Номер телефона',
          checkbox: 'Я даю согласие на обработку, хранение и использование персональных данных в целях осуществления функций саморегулируемой организации аудиторов.',
          submit: 'Получить код',
          submit_timer: "Получите новый код через:"
        },
        state: 'A1',
        controls: [{
          property: 'tel',
          id: 'id0',
          name: 'PHONE',
          label: '',
          value: '',
          required: true,
          disabled: false
        }, {
          property: 'checkbox',
          id: 'id1',
          name: 'NUM',
          label: '',
          value: '',
          required: true,
          disabled: false
        }],
        submitProps: {
          large: true,
          secondary: true,
          wide: true
        },
        deleteProps: {
          icon: true,
          "delete": true,
          medium: true
        },
        timerEnd: 0,
        timer: 0
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        var result = false;
        if (this.state === 'C1' && this.timer) {
          result = true;
        } else {
          result = this.controls[0].setInvalidWatcher || this.controls[0].disabled || !this.controls[0].value.trim() || this.controls[0].value.trim().length < 11 || !this.controls[1].value;
        }
        return result;
      },
      buttonSubmitTimerText: function buttonSubmitTimerText() {
        return this.timer ? "".concat(this.lang.submit_timer, " ").concat(new Date(this.timer * 1000).toISOString().substring(14, 19)) : '';
      }
    },
    actions: {
      setLabels: function setLabels() {
        this.controls[0].label = this.lang.label;
        this.controls[1].label = this.lang.checkbox;
      },
      buttonSubmitTimer: function buttonSubmitTimer(start) {
        var _this = this;
        this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
        this.timer = Number(start);
        var intervalId = setInterval(function () {
          if (_this.timer <= 0) {
            clearInterval(intervalId);
          } else {
            _this.timer = _this.timerEnd - Math.round(new Date().getTime() / 1000);
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
      changeDeleteProps: function changeDeleteProps(obj) {
        var _this3 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this3.deleteProps[key] = true;
          } else {
            delete _this3.deleteProps[key];
          }
        });
      },
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
        if (control.property === 'tel') {
          control.setInvalidWatcher = false;
        }
      },
      runSend: function runSend() {
        var _this4 = this;
        this.changeSubmitProps({
          'load-circle': true
        });
        var telControl = this.controls.find(function (c) {
          return c.property === 'tel';
        });
        var phone = telControl.value;
        if (window.BX) {
          BX.ajax.runComponentAction('twinpx:profile.edit', 'add', {
            mode: 'class',
            data: {
              phone: phone
            },
            signedParameters: dataStore().signedParameters
          }).then(function (response) {
            _this4.changeSubmitProps({
              'load-circle': false
            });
            dataStore().setError('');

            //show code
            telControl.focusWatcher = false;
            telControl.setInvalidWatcher = false;
            telControl.regexp_description = '';
            codeStore().uuid = response.data.uuid;
            codeStore().timer = response.data.remain || 0;
            if (codeStore().timer) {
              codeStore().buttonTimer(codeStore().timer);
            }
            dataStore().routeWatcher = '/code';
            var tel = telControl.value.split('-');
            dataStore().setInfo("".concat(dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE, " ").concat(tel[0].substring(0, tel[0].length - 3), "...-..-").concat(tel[2]));
          }, function (response) {
            _this4.changeSubmitProps({
              'load-circle': false
            });
            dataStore().setError(response.errors[0].message);
            if (String(response.errors[0].code) === String(1001)) {
              //B1
              _this4.state = 'B1';
            } else if (String(response.errors[0].code) === String(1002)) {
              //C1
              _this4.state = 'C1';
              _this4.buttonSubmitTimer(response.errors[0].customData.remain);
            } else if (String(response.errors[0].code) === String(1003)) {
              //A2
              _this4.state = 'A2';
              telControl.focusWatcher = true;
              telControl.setInvalidWatcher = true;
              telControl.regexp_description = response.errors[0].message || '';
            } else if (String(response.errors[0].code) === String(1004)) ; else if (String(response.errors[0].code) === String(1005)) {
              //A3
              _this4.state = 'A3';
              telControl.focusWatcher = true;
              telControl.setInvalidWatcher = true;
              telControl.regexp_description = response.errors[0].message || '';
            } else if (String(response.errors[0].code) === String(1006)) {
              //A3
              _this4.state = 'A3';
              telControl.focusWatcher = true;
              telControl.setInvalidWatcher = true;
              telControl.regexp_description = response.errors[0].message || '';
            }
          });
        }
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Auth = {
    data: function data() {
      return {};
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue
    template: "\n    <h2 v-if=\"lang.heading\">{{ lang.heading }}</h2>\n\n    <div v-if=\"lang.html\" v-html=\"lang.html\"></div>\n\n    <div class=\"auth-keys-auth\">\n\n      <MessageComponent v-if=\"error\" type=\"error\" :message=\"error\" />\n\n      <ControlComponent v-for=\"control in controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" />\n\n      <ButtonComponent :text=\"buttonSubmitTimerText || lang.submit\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"clickSubmit\" />\n      \n    </div>\n\t",
    computed: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['routeWatcher', 'error'])), ui_vue3_pinia.mapState(authStore, ['lang', 'interface', 'controls', 'submitProps', 'deleteProps', 'buttonDisabled', 'buttonSubmitTimerText', 'telIsFilled'])),
    watch: {
      routeWatcher: function routeWatcher(val) {
        this.$router.push(val);
      }
    },
    methods: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(dataStore, ['setError', 'setTel'])), ui_vue3_pinia.mapActions(authStore, ['input', 'runSend', 'setLabels'])), {}, {
      clickSubmit: function clickSubmit() {
        this.runSend();
        this.setTel(this.controls[0].value);
      }
    }),
    mounted: function mounted() {
      this.setError('');
      this.setLabels();
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Code = {
    data: function data() {
      return {};
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    emits: ['openOrnz'],
    // language=Vue

    template: "\n\n      <h2 v-if=\"lang.heading\">{{ lang.heading }}</h2>\n\n      <div v-if=\"lang.html\" v-html=\"lang.html\"></div>\n\n      <MessageComponent v-if=\"error\" type=\"error\" :message=\"error\" />\n\n      <div class=\"auth-keys-code-form\">\n\n        <div class=\"auth-keys-code-form-body\">\n\n          <div :class=\"{'auth-keys-code-inputs': true, 'auth-keys-code-inputs--invalid': invalidInputs}\">\n\n            <div :class=\"{'auth-keys-code-inputs-label': true, 'auth-keys-code-inputs-label--disabled': inputs.every(i => i.disabled)}\">{{ lang.label }}</div>\n            \n            <div class=\"auth-keys-code-inputs-body\" ref=\"inputs\">\n\n              <input v-for=\"(input, index) in inputs\"\n                :key=\"input.id\"\n                :type=\"inputType()\"\n                :class=\"{'auth-keys-code-input': true, 'auth-keys-code-input--disabled': input.disabled}\"\n                v-model=\"this['inputValue'+index]\"\n                @keydown.backspace=\"backspaceInput(input, index)\"\n                @focus=\"focusText()\"\n              />\n\n            </div>\n\n            <div class=\"auth-keys-code-inputs__warning\">{{ error }}</div>\n          </div>\n\n          <div>\n            <ButtonComponent :text=\"lang.submit\" :props=\"Object.keys(submitProps)\" :disabled=\"buttonDisabled\" @clickButton=\"runCheck\" />\n          </div>\n\n          <div>\n            <ButtonComponent v-if=\"timer === 0 || !!timer\" :text=\"buttonTimerText\" :props=\"Object.keys(timerProps)\" :disabled=\"timerDisabled\" @clickButton=\"clickNewCode\" />\n          </div>\n\n        </div>\n      </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['routeWatcher', 'error'])), ui_vue3_pinia.mapState(codeStore, ['lang', 'inputs', 'uuid', 'submitProps', 'buttonDisabled', 'buttonTimerText', 'timerDisabled', 'timerProps', 'timer', 'clearInputs', 'invalidInputs'])), {}, {
      inputValue0: {
        get: function get() {
          var index = 0;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 0;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          var next = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index + 1];
          if (String(value) && String(value).match(/[0-9]/) && next) {
            next.focus();
          }
        }
      },
      inputValue1: {
        get: function get() {
          var index = 1;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 1;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          var next = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index + 1];
          if (String(value) && String(value).match(/[0-9]/) && next) {
            next.focus();
          }
        }
      },
      inputValue2: {
        get: function get() {
          var index = 2;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 2;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          var next = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index + 1];
          if (String(value) && String(value).match(/[0-9]/) && next) {
            next.focus();
          }
        }
      },
      inputValue3: {
        get: function get() {
          var index = 3;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 3;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          var next = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index + 1];
          if (String(value) && String(value).match(/[0-9]/) && next) {
            next.focus();
          }
        }
      },
      inputValue4: {
        get: function get() {
          var index = 4;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 4;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          var next = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index + 1];
          if (String(value) && String(value).match(/[0-9]/) && next) {
            next.focus();
          }
        }
      },
      inputValue5: {
        get: function get() {
          var index = 5;
          return this.inputs[index].value;
        },
        set: function set(value) {
          var index = 5;
          this.changeInputValue({
            control: this.inputs[index],
            value: value
          });
          if (String(value)) {
            this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index].blur();
          }
        }
      }
    }),
    watch: {
      clearInputs: function clearInputs() {
        this.$refs.inputs.querySelectorAll(".auth-keys-code-input").forEach(function (input) {
          return input.value = '';
        });
      },
      routeWatcher: function routeWatcher(val) {
        this.$router.push(val);
      }
    },
    methods: _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['setInfoButton', 'setError'])), ui_vue3_pinia.mapActions(authStore, ['runSend'])), ui_vue3_pinia.mapActions(codeStore, ['invertClearInputs', 'changeInputValue', 'runCheck', 'changeButtonProps', 'buttonTimer', 'setInvalidInputs'])), {}, {
      clickNewCode: function clickNewCode() {
        this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
        this.runSend();
      },
      backspaceInput: function backspaceInput(input, index) {
        if (String(input.value).trim() === '') {
          var prev = this.$refs.inputs.querySelectorAll(".auth-keys-code-input")[index - 1];
          if (prev) {
            prev.focus();
          }
        }
      },
      focusText: function focusText() {
        if (this.invalidInputs) {
          this.inputs.forEach(function (input) {
            input.value = '';
          });
          this.setInvalidInputs(false);
          this.setError('');
          this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
        }
      },
      inputType: function inputType() {
        if (window.matchMedia('(max-width: 767px)').matches) {
          return 'number';
        } else {
          return 'text';
        }
      }
    }),
    mounted: function mounted() {
      this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
      this.setInfoButton('');
    }
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Edit = {
    data: function data() {
      return {
        modalStateWatcher: true,
        clickType: ''
      };
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo
    },
    // language=Vue
    template: "\n\n    <ModalYesNo\n      :heading=\"lang.modalHeading\"\n      :text=\"getModalText()\"\n      :yes=\"lang.modalButtonYes\"\n      :no=\"lang.modalButtonNo\"\n      :stateWatcher=\"modalStateWatcher\"\n      @clickYes=\"clickYes\"\n      @clickNo=\"clickNo\"\n    />\n  \n    <h2 v-if=\"lang.heading\">{{ lang.heading }}</h2>\n\n    <div v-if=\"lang.html\" v-html=\"lang.html\"></div>\n\n    <MessageComponent v-if=\"error\" type=\"error\" :message=\"error\" />\n\n    <div class=\"auth-keys-edit\">\n\n      <div class=\"auth-keys-edit__tel\">\n        <ControlComponent :control=\"controls[0]\" />\n        <div class=\"auth-keys-edit__buttons\">\n          <ButtonComponent :text=\"lang.button\" :props=\"Object.keys(editProps)\" @clickButton=\"clickEdit\" />\n          <ButtonComponent text=\"Delete\" :props=\"Object.keys(deleteProps)\" @clickButton=\"clickDelete\" />\n        </div>\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['routeWatcher', 'error'])), ui_vue3_pinia.mapState(editStore, ['lang', 'controls', 'editProps', 'deleteProps', 'setLabels'])),
    watch: {
      routeWatcher: function routeWatcher(val) {
        this.$router.push(val);
      }
    },
    methods: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(dataStore, ['setError'])), ui_vue3_pinia.mapActions(editStore, ['edit', 'delete'])), {}, {
      clickEdit: function clickEdit() {
        this.clickType = 'edit';
        this.modalStateWatcher = !this.modalStateWatcher;
      },
      clickDelete: function clickDelete() {
        this.clickType = 'delete';
        this.modalStateWatcher = !this.modalStateWatcher;
      },
      clickYes: function clickYes() {
        if (this.clickType === 'edit') {
          this.edit();
        } else if (this.clickType === 'delete') {
          this["delete"]();
        }
        this.modalStateWatcher = !this.modalStateWatcher;
      },
      clickNo: function clickNo() {
        this.modalStateWatcher = !this.modalStateWatcher;
      },
      getModalText: function getModalText() {
        if (this.clickType === 'edit') {
          return this.lang.modalHtmlEdit;
        } else if (this.clickType === 'delete') {
          return this.lang.modalHtmlDelete;
        }
      }
    }),
    mounted: function mounted() {
      this.setLabels();
    }
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Info = {
    data: function data() {
      return {};
    },
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    // language=Vue
    template: "\n    <div class=\"auth-keys-info\">\n\n      <h2 v-if=\"lang.heading\">{{ lang.heading }}</h2>\n\n      <MessageComponent v-if=\"lang.html\" type=\"info\" :message=\"lang.html\" :button=\"false\" />\n      \n    </div>\n\t",
    computed: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['routeWatcher', 'error'])), ui_vue3_pinia.mapState(infoStore, ['lang'])),
    watch: {
      routeWatcher: function routeWatcher(val) {
        this.$router.push(val);
      }
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var AuthKeys = /*#__PURE__*/function () {
    function AuthKeys(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthKeys);
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
          component: Auth,
          alias: '/auth'
        }, {
          path: '/code',
          component: Code
        }, {
          path: '/edit',
          component: Edit
        }, {
          path: '/info',
          component: Info
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(AuthKeys, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Authorization keys',
          components: {
            Application: Application
          },
          template: '<Application />',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().tel = self.options.tel || '';
            authStore().controls[0].label = this.$Bitrix.Loc.getMessage('AUTH_SMS_SMS_LABEL_TEL');
            authStore().controls[0].value = self.options.tel || '';
            authStore().controls[1].label = self.options.checkboxLabel || '';

            // lang
            if (self.options.lang) {
              var lang = self.options.lang; //JSON.parse(self.options.lang)
              if (lang.auth) {
                authStore().lang = lang.auth;
              }
              if (lang.code) {
                codeStore().lang = lang.code;
              }
              if (lang.edit) {
                editStore().lang = lang.edit;
              }
              if (lang.info) {
                infoStore().lang = lang.info;
              }
            }

            // routing
            if (self.options.tel) {
              this.$router.push('/edit');
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
      key: "getQuery",
      value: function getQuery(queryObject) {
        var result = [];
        for (var k in queryObject) {
          result.push(k + '=' + queryObject[k]);
        }
        return '?' + result.join('&');
      }
    }, {
      key: "parseQuery",
      value: function parseQuery(queryString) {
        var query = {};
        var pairs = [];
        if (queryString) {
          pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        }
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
      }
    }]);
    return AuthKeys;
  }();

  exports.AuthKeys = AuthKeys;

}((this.BX = this.BX || {}),BX,BX,BX.Controls,BX.AAS,BX.Modals,BX,BX.AAS));
//# sourceMappingURL=application.bundle.js.map
