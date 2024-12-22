/* eslint-disable */
(function (
  exports,
  ui_vue3,
  ui_vue3_router,
  local_vueComponents_messageComponent,
  ui_vue3_pinia,
  local_vueComponents_controlComponent,
  local_vueComponents_buttonComponent
) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: '',
        templateFolder: '',
        lang: {},
        state: 'sms',
        info: '',
        error: '',
        errorButton: false,
      };
    },
    actions: {
      changeState: function changeState(value) {
        this.state = value;
      },
      setInfo: function setInfo(message) {
        this.info = message;
      },
      setError: function setError(message) {
        this.error = message;
      },
    },
  });

  var codeStore = ui_vue3_pinia.defineStore('code', {
    state: function state() {
      return {
        lang: {},
        inputs: [
          {
            id: 'input1',
            value: '',
          },
          {
            id: 'input2',
            value: '',
          },
          {
            id: 'input3',
            value: '',
          },
          {
            id: 'input4',
            value: '',
          },
          {
            id: 'input5',
            value: '',
          },
          {
            id: 'input6',
            value: '',
          },
        ],
        uuid: '',
        submitProps: {
          large: true,
          secondary: true,
          wide: true,
        },
        timerProps: {
          medium: true,
          secondary: true,
        },
        timer: 5,
        timerIntervalId: '',
        clearInputs: false,
        invalidInputs: true,
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
        return this.timer
          ? ''
              .concat(this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER, ' ')
              .concat(
                new Date(this.timer * 1000).toISOString().substring(14, 19)
              )
          : this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER;
      },
      timerDisabled: function timerDisabled() {
        return !!this.timer;
      },
    },
    actions: {
      setInvalidInputs: function setInvalidInputs(val) {
        this.invalidInputs = val;
      },
      buttonTimer: function buttonTimer(start) {
        var _this = this;
        this.timer = Number(start);
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = setInterval(function () {
          if (_this.timer === 0) {
            clearInterval(intervalId);
          } else {
            _this.timer--;
          }
        }, 1000);
      },
      changeButtonProps: function changeButtonProps(obj, type) {
        var _this2 = this;
        Object.keys(obj).forEach(function (key) {
          if (obj[key]) {
            _this2[''.concat(type, 'Props')][key] = true;
          } else {
            delete _this2[''.concat(type, 'Props')][key];
          }
        });
      },
      changeInputValue: function changeInputValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        if (value.length > 1) {
          value = value.substring(value.length - 1);
        }
        control.value = value;
        setTimeout(function () {
          if (!value.match(/[0-9]/)) {
            value = '';
          }
          control.value = value;
        }, 0);
      },
      runCheck: function runCheck() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.check', {
              data: {
                code: this.code,
                uuid: this.uuid,
              },
            })
            .then(
              function (response) {
                _this3.changeButtonProps(
                  {
                    'load-circle': false,
                  },
                  'submit'
                );
                window.location.href = response.data.redirect;
              },
              function (response) {
                _this3.changeButtonProps(
                  {
                    'load-circle': false,
                  },
                  'submit'
                );
                dataStore().error = response.errors[0].message;
                if (String(response.errors[0].code) === String(1001)) {
                  //B2
                  //error button
                  //disabled inputs
                  //disabled button
                  dataStore().errorButton = true;
                  _this3.clearInputs = !_this3.clearInputs;
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
                  if (
                    response.errors[0].customData &&
                    response.errors[0].customData.remain
                  ) {
                    _this3.timer = response.errors[0].customData.remain;
                    _this3.buttonTimer(_this3.timer);
                  } else {
                    _this3.timer = 0;
                  }
                }
              }
            );
        }
      },
    },
  });

  var smsStore = ui_vue3_pinia.defineStore('sms', {
    state: function state() {
      return {
        lang: {},
        state: 'A1',
        controls: [
          {
            property: 'tel',
            id: 'id0',
            name: 'PHONE',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
          {
            property: 'checkbox',
            id: 'id1',
            name: 'NUM',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
        ],
        submitProps: {
          large: true,
          secondary: true,
          wide: true,
        },
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
            this.controls[0].setInvalidWatcher ||
            this.controls[0].disabled ||
            !this.controls[0].value.trim() ||
            this.controls[0].value.trim().length < 11 ||
            !this.controls[1].value;
        }
        return result;
      },
      buttonSubmitTimerText: function buttonSubmitTimerText() {
        return this.timer
          ? ''
              .concat(this.lang.AUTH_SMS_SMS_BUTTON_SUBMIT_TIMER, ' ')
              .concat(
                new Date(this.timer * 1000).toISOString().substring(14, 19)
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
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
        if (control.property === 'tel') {
          control.setInvalidWatcher = false;
        }
      },
      runSend: function runSend() {
        var _this3 = this;
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.send', {
              data: {
                phone: this.controls[0].value,
              },
            })
            .then(
              function (response) {
                _this3.changeSubmitProps({
                  'load-circle': false,
                });
                dataStore().error = '';

                //show code
                _this3.controls[0].focusWatcher = false;
                _this3.controls[0].setInvalidWatcher = false;
                _this3.controls[0].regexp_description = '';
                dataStore().errorButton = '';
                codeStore().uuid = response.data.UUID;
                codeStore().timer = response.data.remain || NaN;
                dataStore().changeState('code');
                var tel = _this3.controls[0].value.split('-');
                dataStore().info = ''
                  .concat(dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE, ' ')
                  .concat(tel[0].substring(0, tel[0].length - 3), '...-..-')
                  .concat(tel[2]);
              },
              function (response) {
                _this3.changeSubmitProps({
                  'load-circle': false,
                });
                dataStore().error = response.errors[0].message;
                if (String(response.errors[0].code) === String(1001)) {
                  //B1
                  _this3.state = 'B1';
                  _this3.controls[0].disabled = true;
                  dataStore().errorButton =
                    _this3.lang.AUTH_SMS_SMS_ERROR_BUTTON;
                } else if (String(response.errors[0].code) === String(1002)) {
                  //C1
                  _this3.state = 'C1';
                  _this3.buttonSubmitTimer(
                    response.errors[0].customData.remain
                  );
                } else if (String(response.errors[0].code) === String(1003)) {
                  //A2
                  _this3.state = 'A2';
                  _this3.controls[0].focusWatcher = true;
                  _this3.controls[0].setInvalidWatcher = true;
                  _this3.controls[0].regexp_description =
                    response.errors[0].message || '';
                } else if (String(response.errors[0].code) === String(1004));
                else if (String(response.errors[0].code) === String(1005)) {
                  //A3
                  _this3.state = 'A3';
                  _this3.controls[0].focusWatcher = true;
                  _this3.controls[0].setInvalidWatcher = true;
                  _this3.controls[0].regexp_description =
                    response.errors[0].message || '';
                } else if (String(response.errors[0].code) === String(1006)) {
                  //A3
                  _this3.state = 'A3';
                  _this3.controls[0].focusWatcher = true;
                  _this3.controls[0].setInvalidWatcher = true;
                  _this3.controls[0].regexp_description =
                    response.errors[0].message || '';
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
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-sms">\n      <div class="vue-auth-sms-sms-form">\n        <div class="vue-auth-sms-sms-form-body">\n          <div v-for="control in controls" :key="control.id">\n            <ControlComponent :control="control" @input="input" />\n            <hr />\n          </div>\n          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'state'])),
      ui_vue3_pinia.mapState(smsStore, [
        'controls',
        'submitProps',
        'buttonDisabled',
        'buttonSubmitTimerText',
      ])
    ),
    watch: {
      state: function state(val) {
        if (val === 'code') {
          this.$router.push('/two-cols/code');
        }
      },
    },
    methods: _objectSpread(
      _objectSpread(
        {},
        ui_vue3_pinia.mapActions(smsStore, [
          'input',
          'runSend',
          'changeSubmitProps',
        ])
      ),
      {},
      {
        clickSubmit: function clickSubmit() {
          this.changeSubmitProps({
            'load-circle': true,
          });
          this.runSend();
        },
      }
    ),
    mounted: function mounted() {
      console.log(this.$route.path);
    },
  };

  var ornzStore = ui_vue3_pinia.defineStore('ornz', {
    state: function state() {
      return {
        controls: [
          {
            property: 'text',
            id: 'id2',
            name: 'ORNZ',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
          {
            property: 'password',
            id: 'id3',
            name: 'PASSWORD',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
          {
            property: 'checkbox',
            id: 'id1',
            name: 'NUM',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
        ],
        submitProps: {
          large: true,
          secondary: true,
          wide: true,
        },
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return this.controls.some(function (input) {
          return !input.value;
        });
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
      changeInputValue: function changeInputValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      runOrnz: function runOrnz() {
        var _this2 = this;
        this.changeSubmitProps({
          'load-circle': true,
        });
        var self = this;
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.ornz', {
              data: {
                login: self.controls[0].value,
                password: self.controls[1].value,
              },
            })
            .then(
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });
                if (response && response.data && response.data.redirect) {
                  window.location.href = response.data.redirect;
                }
              },
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });
                console.log(response);

                // if (response && response.errors && response.errors[0]) {
                //   dataStore().error = response.errors[0].message;
                //   this.controls[0].regexp_description =
                //     response.errors[0].message || '';
                //   this.controls[1].regexp_description =
                //     response.errors[0].message || '';

                //   this.controls[0].setInvalidWatcher = true;
                //   this.controls[1].setInvalidWatcher = true;
                // }
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
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-ornz-form">\n      <div class="vue-auth-sms-ornz-form-body">\n        <div v-for="control in controls" :key="control.id">\n          <ControlComponent :control="control" @input="input" @hints="hints" />\n          <hr />\n        </div>\n        <ButtonComponent :text="lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n      </div>\n    </div>\n\t',
    computed: _objectSpread$1(
      _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang'])),
      ui_vue3_pinia.mapState(ornzStore, [
        'controls',
        'submitProps',
        'errorORNZ',
        'buttonDisabled',
        'changeInputValue',
      ])
    ),
    methods: _objectSpread$1(
      _objectSpread$1(
        {},
        ui_vue3_pinia.mapActions(ornzStore, ['changeInputValue', 'runOrnz'])
      ),
      {},
      {
        input: function input(args) {
          this.changeInputValue(args);
        },
        clickSubmit: function clickSubmit() {
          this.runOrnz();
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
  var Code = {
    data: function data() {
      return {};
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    emits: ['openOrnz'],
    // language=Vue

    template:
      '\n      <div class="vue-auth-sms-code-form">\n        <div class="vue-auth-sms-code-form-body">\n          <div :class="{\'vue-auth-sms-code-inputs\': true, \'vue-auth-sms-code-inputs--invalid\': invalidInputs}">\n\n            <div :class="{\'vue-auth-sms-code-inputs-label\': true, \'vue-auth-sms-code-inputs-label--disabled\': inputs.every(i => i.disabled)}">{{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}</div>\n            \n            <div class="vue-auth-sms-code-inputs-body" ref="inputs">\n\n              <input v-for="(input, index) in inputs"\n                :key="input.id"\n                type="text"\n                :class="{\'vue-auth-sms-code-input\': true, \'vue-auth-sms-code-input--disabled\': input.disabled}"\n                v-model="this[\'inputValue\'+index]"\n                @keydown.backspace="backspaceInput(input, index)"\n                @focus="focusText()"\n              />\n\n            </div>\n\n            <div class="vue-auth-sms-code-inputs__warning">{{ error }}</div>\n          </div>\n\n          <div><ButtonComponent :text="lang.AUTH_SMS_CODE_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runCheck" /></div>\n          <div><ButtonComponent v-if="timer === 0 || !!timer" :text="buttonTimerText" :props="Object.keys(timerProps)" :disabled="timerDisabled" @clickButton="clickNewCode" /></div>\n        </div>\n      </div>\n\t',
    computed: _objectSpread$2(
      _objectSpread$2(
        _objectSpread$2(
          {},
          ui_vue3_pinia.mapState(dataStore, ['lang', 'error'])
        ),
        ui_vue3_pinia.mapState(codeStore, [
          'inputs',
          'uuid',
          'submitProps',
          'buttonDisabled',
          'buttonTimerText',
          'timerDisabled',
          'timerProps',
          'timer',
          'clearInputs',
          'invalidInputs',
        ])
      ),
      {},
      {
        inputValue0: {
          get: function get() {
            var index = 0;
            return this.inputs[index].value;
          },
          set: function set(value) {
            var index = 0;
            this.changeInputValue({
              control: this.inputs[index],
              value: value,
            });
            var next = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index + 1];
            if (value && value.match(/[0-9]/) && next) {
              next.focus();
            }
          },
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
              value: value,
            });
            var next = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index + 1];
            if (value && value.match(/[0-9]/) && next) {
              next.focus();
            }
          },
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
              value: value,
            });
            var next = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index + 1];
            if (value && value.match(/[0-9]/) && next) {
              next.focus();
            }
          },
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
              value: value,
            });
            var next = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index + 1];
            if (value && value.match(/[0-9]/) && next) {
              next.focus();
            }
          },
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
              value: value,
            });
            var next = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index + 1];
            if (value && value.match(/[0-9]/) && next) {
              next.focus();
            }
          },
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
              value: value,
            });
          },
        },
      }
    ),
    watch: {
      clearInputs: function clearInputs() {
        this.$refs.inputs
          .querySelectorAll('.vue-auth-sms-code-input')
          .forEach(function (input) {
            return (input.value = '');
          });
      },
    },
    methods: _objectSpread$2(
      _objectSpread$2(
        _objectSpread$2(
          _objectSpread$2(
            {},
            ui_vue3_pinia.mapActions(dataStore, ['setError'])
          ),
          ui_vue3_pinia.mapActions(smsStore, ['runSend'])
        ),
        ui_vue3_pinia.mapActions(codeStore, [
          'changeInputValue',
          'runCheck',
          'changeButtonProps',
          'buttonTimer',
          'setInvalidInputs',
        ])
      ),
      {},
      {
        clickNewCode: function clickNewCode() {
          this.runSend();
        },
        backspaceInput: function backspaceInput(input, index) {
          if (input.value.trim() === '') {
            var prev = this.$refs.inputs.querySelectorAll(
              '.vue-auth-sms-code-input'
            )[index - 1];
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
            this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
          }
        },
      }
    ),
    mounted: function mounted() {
      this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
    },
  };

  function ownKeys$3(object, enumerableOnly) {
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
  function _objectSpread$3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$3(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$3(Object(source)).forEach(function (key) {
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
      return {};
    },
    components: {
      Sms: Sms,
      Ornz: Ornz,
      Code: Code,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n      <div class="vue-auth-sms-left">\n\n        <h3 class="mt-0">{{ title }}</h3>\n\n        <MessageComponent type="info" :message="info" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />\n        <hr v-if="info && error">\n        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />\n\n        <Sms v-if="state === \'sms\'" />\n        <Ornz v-else-if="state === \'ornz\'" />\n        <Code v-else-if="state === \'code\'" />\n\n        <hr class="hr--line hr--none" />\n\n        <div class="vue-auth-sms-alt">\n          <div><ButtonComponent :text="altButton" :props="[\'medium\', \'primary\']" @clickButton="clickAlt" /></div>\n          <div><router-link to="/two-cols/ornz">{{ lang.AUTH_SMS_ENTER_LINK }}</router-link></div>\n        </div>\n\n      </div>\n      <div class="vue-auth-sms-right">\n        <img :src="templateFolder + \'/auth-sms-ill.png\'" alt="">\n      </div>\n      \n    </div>\n\t',
    computed: _objectSpread$3(
      _objectSpread$3(
        _objectSpread$3(
          _objectSpread$3(
            {},
            ui_vue3_pinia.mapState(dataStore, [
              'sessionid',
              'signedParameters',
              'templateFolder',
              'lang',
              'info',
              'state',
              'error',
              'errorButton',
            ])
          ),
          ui_vue3_pinia.mapState(smsStore, ['errorButton'])
        ),
        ui_vue3_pinia.mapState(codeStore, ['uuid'])
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
    methods: _objectSpread$3(
      _objectSpread$3(
        {},
        ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setInfo'])
      ),
      {},
      {
        clickInfoButton: function clickInfoButton() {
          this.setInfo('');
        },
        clickAlt: function clickAlt() {
          if (this.state === 'ornz') {
            this.changeState('sms');
          } else {
            this.changeState('ornz');
          }
          // window.location.href = '/auth/';
        },
        clickErrorButton: function clickErrorButton() {
          this.changeState('ornz');
        },
      }
    ),
    mounted: function mounted() {},
  };

  var restoreStore = ui_vue3_pinia.defineStore('restore', {
    state: function state() {
      return {
        lang: {},
        info: '',
        state: 'restore',
        controls: [
          {
            property: 'text',
            id: 'id0',
            name: 'ORNZ',
            label: '',
            value: '',
            required: true,
            disabled: false,
          },
        ],
        submitProps: {
          large: true,
          primary: true,
          wide: true,
        },
      };
    },
    getters: {
      buttonDisabled: function buttonDisabled() {
        return (
          !this.controls[0].value || this.controls[0].setInvalidWatcher === true
        );
      },
    },
    actions: {
      changeState: function changeState(value) {
        this.state = value;
      },
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
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      runRestore: function runRestore() {
        var _this2 = this;
        this.changeSubmitProps({
          'load-circle': true,
        });
        this.changeState('restore-info');
        if (window.BX) {
          BX.ajax
            .runAction('twinpx:authorization.api.restore', {
              data: {
                login: this.controls[0].value,
              },
            })
            .then(
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });
                dataStore().error = '';
                dataStore().info = response.data.message;
                _this2.changeState('restore-info');
              },
              function (response) {
                _this2.changeSubmitProps({
                  'load-circle': false,
                });
                if (response.errors[0]) {
                  dataStore().error = response.errors[0].message;
                  _this2.controls[0].regexp_description =
                    response.errors[0].message || '';
                  _this2.controls[0].setInvalidWatcher = true;
                }
              }
            );
        }
      },
    },
  });

  function ownKeys$4(object, enumerableOnly) {
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
  function _objectSpread$4(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$4(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$4(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var TwoCols = {
    data: function data() {
      return {};
    },
    components: {
      Sms: Sms,
      Ornz: Ornz,
      Code: Code,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n      <div class="vue-auth-sms-left">\n\n        <h3 class="mt-0">{{ title }}</h3>\n\n        <MessageComponent v-if="info" type="info" :message="info" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />\n        <hr v-if="info && error">\n        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />\n\n        <router-view />\n\n        <hr class="hr--line hr--none" />\n\n        <div class="vue-auth-sms-alt">\n          <div><ButtonComponent :text="altButton" :props="[\'medium\', \'primary\']" @clickButton="clickAlt" /></div>\n          <div><router-link to="/center-col/restore">{{ lang.AUTH_SMS_ENTER_LINK }}</router-link></div>\n        </div>\n\n      </div>\n      <div class="vue-auth-sms-right">\n        <img :src="templateFolder + \'/auth-sms-ill.png\'" alt="">\n      </div>\n      \n    </div>\n\t',
    computed: _objectSpread$4(
      _objectSpread$4(
        _objectSpread$4(
          _objectSpread$4(
            {},
            ui_vue3_pinia.mapState(dataStore, [
              'sessionid',
              'signedParameters',
              'templateFolder',
              'lang',
              'info',
              'state',
              'error',
              'errorButton',
            ])
          ),
          ui_vue3_pinia.mapState(smsStore, ['errorButton'])
        ),
        ui_vue3_pinia.mapState(codeStore, ['uuid'])
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
    methods: _objectSpread$4(
      _objectSpread$4(
        {},
        ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setInfo'])
      ),
      {},
      {
        clickInfoButton: function clickInfoButton() {
          this.setInfo('');
        },
        clickAlt: function clickAlt() {
          if (this.$route.path === '/two-cols/ornz') {
            this.$router.push('/two-cols/sms');
            this.changeState('sms');
          } else {
            this.$router.push('/two-cols/ornz');
            this.changeState('ornz');
          }
        },
        clickErrorButton: function clickErrorButton() {
          this.$router.push('/two-cols/ornz');
          this.changeState('ornz');
        },
      }
    ),
    mounted: function mounted() {},
  };

  function ownKeys$5(object, enumerableOnly) {
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
  function _objectSpread$5(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$5(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$5(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var Restore = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms-restore">\n      <router-view />\n      <div v-for="control in controls" :key="control.id">\n        <ControlComponent :control="control" @input="input" />\n        <hr />\n      </div>\n      <ButtonComponent :text="lang.AUTH_RESTORE_BUTTON" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runRestore" />\n    </div>\n\t',
    computed: _objectSpread$5(
      _objectSpread$5({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'info'])),
      ui_vue3_pinia.mapState(restoreStore, [
        'controls',
        'submitProps',
        'buttonDisabled',
        'input',
        'state',
      ])
    ),
    watch: {
      state: function state(val) {
        if (val === 'restore-info') {
          this.$router.push('/center-col/restore-info');
        }
      },
    },
    methods: _objectSpread$5(
      _objectSpread$5({}, ui_vue3_pinia.mapActions(dataStore, ['setInfo'])),
      ui_vue3_pinia.mapActions(restoreStore, ['runRestore'])
    ),
  };

  function ownKeys$6(object, enumerableOnly) {
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
  function _objectSpread$6(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$6(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$6(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var CenterCol = {
    data: function data() {
      return {};
    },
    components: {
      Restore: Restore,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-center">\n\n      <h3 class="mt-0">{{ title }}</h3>\n\n      <MessageComponent v-if="info" type="info" :message="info" :button="lang.AUTH_SMS_RESTORE_BUTTON" @clickButton="clickInfoButton" />\n      <hr v-if="info">\n\n      <div class="vue-auth-center-body">\n        <router-view />\n      </div>\n    </div>\n\t',
    computed: _objectSpread$6(
      _objectSpread$6(
        _objectSpread$6(
          {},
          ui_vue3_pinia.mapState(dataStore, ['lang', 'info'])
        ),
        ui_vue3_pinia.mapState(restoreStore, [])
      ),
      {},
      {
        title: function title() {
          return this.lang['AUTH_RESTORE_TITLE'];
        },
      }
    ),
    methods: _objectSpread$6(
      _objectSpread$6({}, ui_vue3_pinia.mapActions(dataStore, ['setInfo'])),
      {},
      {
        clickInfoButton: function clickInfoButton() {
          this.setInfo('');
        },
      }
    ),
  };

  function ownKeys$7(object, enumerableOnly) {
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
  function _objectSpread$7(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$7(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$7(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var RestoreInfo = {
    data: function data() {
      return {};
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div>\n      <ButtonComponent :text="lang.AUTH_RESTORE_INFO_BUTTON" :props="[\'large\', \'more\']" @clickButton="$router.push(\'/two-cols/sms\')" />\n    </div>\n\t',
    computed: _objectSpread$7(
      {},
      ui_vue3_pinia.mapState(dataStore, ['lang', 'info'])
    ),
  };

  var NewPassword = {
    data: function data() {
      return {};
    },
    components: {},
    // language=Vue

    template: '\n    <div>\n    New Password\n    </div>\n\t',
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
  var _router = /*#__PURE__*/ new WeakMap();
  var _rootNode = /*#__PURE__*/ new WeakMap();
  var _application = /*#__PURE__*/ new WeakMap();
  var AuthSMS = /*#__PURE__*/ (function () {
    function AuthSMS(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthSMS);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _router, {
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
        _router,
        ui_vue3_router.createRouter({
          history: ui_vue3_router.createMemoryHistory(),
          routes: [
            {
              path: '/',
              component: TwoCols,
              children: [
                {
                  path: '/',
                  component: Sms,
                },
              ],
            },
            {
              path: '/two-cols',
              component: TwoCols,
              children: [
                {
                  path: 'sms',
                  component: Sms,
                },
                {
                  path: 'code',
                  component: Code,
                },
                {
                  path: 'ornz',
                  component: Ornz,
                },
              ],
            },
            {
              path: '/center-col',
              component: CenterCol,
              children: [
                {
                  path: 'restore',
                  component: Restore,
                },
                {
                  path: 'restore-info',
                  component: RestoreInfo,
                },
                {
                  path: 'new-password',
                  component: NewPassword,
                },
              ],
            },
          ],
        })
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
              template: '<router-view />',
              mounted: function mounted() {
                dataStore().sessid = self.options.sessid || '';
                dataStore().signedParameters =
                  self.options.signedParameters || '';
                dataStore().templateFolder = self.options.templateFolder || '';
                dataStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH'
                );
                dataStore().info = self.options.infoMessage || '';
                smsStore().controls[0].label = this.$Bitrix.Loc.getMessage(
                  'AUTH_SMS_SMS_LABEL_TEL'
                );
                smsStore().controls[1].label = self.options.checkboxLabel || '';
                smsStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS_SMS'
                );
                ornzStore().controls[0].label = this.$Bitrix.Loc.getMessage(
                  'AUTH_SMS_ORNZ_LABEL_ORNZ'
                );
                ornzStore().controls[1].label = this.$Bitrix.Loc.getMessage(
                  'AUTH_SMS_ORNZ_LABEL_PASSWORD'
                );
                ornzStore().controls[2].label =
                  self.options.checkboxLabel || '';
                codeStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS_CODE'
                );
                restoreStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_RESTORE'
                );
                restoreStore().info = self.options.restoreInfoMessage || '';
                restoreStore().controls[0].label = this.$Bitrix.Loc.getMessage(
                  'AUTH_RESTORE_LABEL_ORNZ'
                );

                //query
                var urlQuery = self.parseQuery(window.location.search);
                if (urlQuery.type) {
                  switch (urlQuery.type) {
                    case 'ornz':
                      dataStore().state = 'ornz';
                      this.$router.push('/two-cols/ornz');
                      break;
                    case 'new-password':
                      this.$router.push('/center-col/new-password');
                  }
                }
              },
            })
          );
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _router));
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
      {
        key: 'getQuery',
        value: function getQuery(queryObject) {
          var result = [];
          for (var k in queryObject) {
            result.push(k + '=' + queryObject[k]);
          }
          return '?' + result.join('&');
        },
      },
      {
        key: 'parseQuery',
        value: function parseQuery(queryString) {
          var query = {};
          var pairs = [];
          if (queryString) {
            pairs = (
              queryString[0] === '?' ? queryString.substr(1) : queryString
            ).split('&');
          }
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(
              pair[1] || ''
            );
          }
          return query;
        },
      },
    ]);
    return AuthSMS;
  })();

  exports.AuthSMS = AuthSMS;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.Vue3.VueRouter,
  BX.AAS,
  BX.Vue3.Pinia,
  BX.Controls,
  BX.AAS
); //# sourceMappingURL=application.bundle.js.map
