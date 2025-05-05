/* eslint-disable */
(function (
  exports,
  ui_vue3,
  ui_vue3_router,
  local_vueComponents_controlComponent,
  ui_vue3_pinia,
  local_vueComponents_messageComponent,
  local_vueComponents_buttonComponent
) {
  'use strict';

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
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
        lang: {},
        state: 'sms',
        title: '',
        info: '',
        infoMessage: '',
        infoButton: true,
        error: '',
        errorButton: false,
      };
    },
    actions: {
      changeState: function changeState(value) {
        this.state = value;
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
      getQuery: function getQuery(queryObject) {
        var result = [];
        for (var k in queryObject) {
          result.push(k + '=' + queryObject[k]);
        }
        return '?' + result.join('&');
      },
      setQuery: function setQuery(queryObject) {
        var obj = _objectSpread(
          _objectSpread({}, this.parseQuery(window.location.search)),
          queryObject
        );
        var url = new URL(location);
        Object.keys(obj).forEach(function (key) {
          url.searchParams.set(key, obj[key]);
        });
        history.pushState({}, '', url);
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
        timerEnd: 0,
        timer: 0,
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
        this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
        this.timer = Number(start);
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = setInterval(function () {
          if (_this.timer <= 0) {
            clearInterval(_this.timerIntervalId);
          } else {
            _this.timer =
              _this.timerEnd - Math.round(new Date().getTime() / 1000);
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
        if (String(value).length > 1) {
          value = String(value).substring(String(value).length - 1);
        }
        control.value = value;
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
                if (String(response.errors[0].code) === String(0)) {
                  _this3.clearInputs = !_this3.clearInputs;
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
        timerEnd: 0,
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
        this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
        this.timer = Number(start);
        var intervalId = setInterval(function () {
          if (_this.timer <= 0) {
            clearInterval(intervalId);
          } else {
            _this.timer =
              _this.timerEnd - Math.round(new Date().getTime() / 1000);
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
        this.changeSubmitProps({
          'load-circle': true,
        });
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
                dataStore().setError('');

                //show code
                _this3.controls[0].focusWatcher = false;
                _this3.controls[0].setInvalidWatcher = false;
                _this3.controls[0].regexp_description = '';
                dataStore().setErrorButton('');
                codeStore().uuid = response.data.uuid;
                codeStore().timer = response.data.remain || 0;
                if (codeStore().timer) {
                  codeStore().buttonTimer(codeStore().timer);
                }
                dataStore().changeState('code');
                var tel = _this3.controls[0].value.split('-');
                dataStore().setInfo(
                  ''
                    .concat(dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE, ' ')
                    .concat(tel[0].substring(0, tel[0].length - 3), '...-..-')
                    .concat(tel[2])
                );
              },
              function (response) {
                _this3.changeSubmitProps({
                  'load-circle': false,
                });
                dataStore().setError(response.errors[0].message);
                if (String(response.errors[0].code) === String(1001)) {
                  //B1
                  _this3.state = 'B1';
                  _this3.controls[0].disabled = true;
                  dataStore().setErrorButton(
                    _this3.lang.AUTH_SMS_SMS_ERROR_BUTTON
                  );
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
      '\n    <div class="vue-auth-sms-sms">\n\n      <div v-for="control in controls" :key="control.id">\n        <ControlComponent :control="control" @input="input" />\n        <hr />\n        <div v-if="control.value">\n          <ButtonComponent text="\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C" :props="[\'secondary\', \'medium\']" @clickButton="clickChange" />\n\n          <ButtonComponent text="Delete" :props="[\'icon\',\'delete\',\'medium\']" @clickButton="clickDelete" />\n           \n        </div>\n      </div>\n\n      <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />\n      \n    </div>\n\t',
    computed: _objectSpread$1(
      _objectSpread$1(
        {},
        ui_vue3_pinia.mapState(dataStore, ['lang', 'state', 'infoMessage'])
      ),
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
    methods: _objectSpread$1(
      _objectSpread$1(
        _objectSpread$1(
          {},
          ui_vue3_pinia.mapActions(dataStore, [
            'setInfo',
            'setInfoButton',
            'setError',
            'setQuery',
          ])
        ),
        ui_vue3_pinia.mapActions(smsStore, ['input', 'runSend'])
      ),
      {},
      {
        clickSubmit: function clickSubmit() {
          this.runSend();
        },
      }
    ),
    mounted: function mounted() {
      if (this.infoMessage) {
        this.setInfo(this.infoMessage);
      } else {
        this.setInfo('');
      }
      this.setInfoButton(this.lang.AUTH_SMS_INFO_BUTTON);
      this.setError('');
      this.setQuery({
        type: 'sms',
      });
    },
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
      '\n      <div class="vue-auth-sms-code-form">\n        <div class="vue-auth-sms-code-form-body">\n\n          <div :class="{\'vue-auth-sms-code-inputs\': true, \'vue-auth-sms-code-inputs--invalid\': invalidInputs}">\n\n            <div :class="{\'vue-auth-sms-code-inputs-label\': true, \'vue-auth-sms-code-inputs-label--disabled\': inputs.every(i => i.disabled)}">{{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}</div>\n            \n            <div class="vue-auth-sms-code-inputs-body" ref="inputs">\n\n              <input v-for="(input, index) in inputs"\n                :key="input.id"\n                :type="inputType()"\n                :class="{\'vue-auth-sms-code-input\': true, \'vue-auth-sms-code-input--disabled\': input.disabled}"\n                v-model="this[\'inputValue\'+index]"\n                @keydown.backspace="backspaceInput(input, index)"\n                @focus="focusText()"\n              />\n\n            </div>\n\n            <div class="vue-auth-sms-code-inputs__warning">{{ error }}</div>\n          </div>\n\n          <div>\n            <ButtonComponent :text="lang.AUTH_SMS_CODE_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runCheck" />\n          </div>\n\n          <div>\n            <ButtonComponent v-if="timer === 0 || !!timer" :text="buttonTimerText" :props="Object.keys(timerProps)" :disabled="timerDisabled" @clickButton="clickNewCode" />\n          </div>\n\n        </div>\n      </div>\n\t',
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
            if (String(value) && String(value).match(/[0-9]/) && next) {
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
            if (String(value) && String(value).match(/[0-9]/) && next) {
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
            if (String(value) && String(value).match(/[0-9]/) && next) {
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
            if (String(value) && String(value).match(/[0-9]/) && next) {
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
            if (String(value) && String(value).match(/[0-9]/) && next) {
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
            if (String(value)) {
              this.$refs.inputs
                .querySelectorAll('.vue-auth-sms-code-input')
                [index].blur();
            }
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
            ui_vue3_pinia.mapActions(dataStore, ['setInfoButton', 'setError'])
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
          this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
          this.runSend();
        },
        backspaceInput: function backspaceInput(input, index) {
          if (String(input.value).trim() === '') {
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
        inputType: function inputType() {
          if (window.matchMedia('(max-width: 767px)').matches) {
            return 'number';
          } else {
            return 'text';
          }
        },
      }
    ),
    mounted: function mounted() {
      this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
      this.setInfoButton('');
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
      Code: Code,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n\n      <h3 class="mt-0">{{ title }}</h3>\n\n      <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />\n\n      <Sms v-if="state === \'sms\'" />\n      <Code v-else-if="state === \'code\'" />\n      \n    </div>\n\t',
    computed: _objectSpread$3(
      _objectSpread$3(
        _objectSpread$3(
          _objectSpread$3(
            {},
            ui_vue3_pinia.mapState(dataStore, [
              'sessid',
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
      {},
      ui_vue3_pinia.mapActions(dataStore, ['changeState', 'setInfo'])
    ),
    mounted: function mounted() {},
  };

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
      Code: Code,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div class="vue-auth-sms">\n\n      <h3 class="mt-0">{{ title }}</h3>\n\n      <p>{{ text }}</p>\n\n      <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />\n\n      <hr v-if="error" />\n\n      <router-view />\n      \n    </div>\n\t',
    computed: _objectSpread$4(
      _objectSpread$4(
        _objectSpread$4(
          _objectSpread$4(
            {},
            ui_vue3_pinia.mapState(dataStore, [
              'sessid',
              'signedParameters',
              'lang',
              'info',
              'infoButton',
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
          return this.lang['AUTH_SMS_SIMPLE_TITLE'];
        },
        text: function text() {
          return this.lang['AUTH_SMS_SIMPLE_TEXT'];
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
        ui_vue3_pinia.mapActions(dataStore, [
          'changeState',
          'setInfo',
          'setInfoMessage',
        ])
      ),
      {},
      {
        clickInfoButton: function clickInfoButton() {
          this.setInfo('');
          this.setInfoMessage('');
        },
        clickErrorButton: function clickErrorButton() {},
      }
    ),
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
  var _router = /*#__PURE__*/ new WeakMap();
  var _rootNode = /*#__PURE__*/ new WeakMap();
  var _application = /*#__PURE__*/ new WeakMap();
  var AuthSMSSimple = /*#__PURE__*/ (function () {
    function AuthSMSSimple(rootNode, options) {
      babelHelpers.classCallCheck(this, AuthSMSSimple);
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
    babelHelpers.createClass(AuthSMSSimple, [
      {
        key: 'run',
        value: function run() {
          var self = this;
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Authorization for non auditors',
              components: {
                Application: Application,
              },
              template: '<router-view />',
              mounted: function mounted() {
                dataStore().sessid = self.options.sessid || '';
                dataStore().signedParameters =
                  self.options.signedParameters || '';
                dataStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH'
                );
                dataStore().info = self.options.infoMessage || '';
                dataStore().infoMessage = self.options.infoMessage || '';
                smsStore().controls[0].label = this.$Bitrix.Loc.getMessage(
                  'AUTH_SMS_SMS_LABEL_TEL'
                );
                smsStore().controls[1].label = self.options.checkboxLabel || '';
                smsStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS_SMS'
                );
                codeStore().lang = ui_vue3.BitrixVue.getFilteredPhrases(
                  this,
                  'AUTH_SMS_CODE'
                );

                //query
                var urlQuery = self.parseQuery(window.location.search);
                if (urlQuery.type) {
                  switch (urlQuery.type) {
                    case 'sms':
                      dataStore().state = 'sms';
                      this.$router.push('/two-cols/sms');
                      break;
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
    return AuthSMSSimple;
  })();

  exports.AuthSMSSimple = AuthSMSSimple;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.Vue3.VueRouter,
  BX.Controls,
  BX.Vue3.Pinia,
  BX.AAS,
  BX.AAS
); //# sourceMappingURL=application.bundle.js.map
