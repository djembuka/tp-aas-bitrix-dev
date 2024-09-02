/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlHint = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external,
        controlValue: this.control.value,
        hintItems: [],
        activeHintItem: {},
        activeHint: [],
        hover: false,
        compare: this.controlValue
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--text': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      \n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"controlValue\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keydown.enter.prevent=\"enterInput\"\n        @keydown.up.prevent=\"upArrow()\"\n        @keydown.down.prevent=\"downArrow()\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n\n      <div class=\"b-input-clear\" @click.prevent=\"clearInput()\" v-show=\"isClearable\"></div>\n\n      <div class=\"b-input-hint\">\n        <div v-for=\"(hint, index) in hintItems\" :data-id=\"hint.id\" :data-value=\"hint.value\" :class=\"{active: activeHint[index]}\" class=\"b-input-hint__item\" @click.prevent=\"clickHint($event)\"></div>\n      </div>\n\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input'],
    computed: {
      value: {
        get: function get() {
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.control.value.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate();
      },
      disabled: function disabled() {
        return this.control.disabled;
      },
      validateWatcher: function validateWatcher() {
        return this.control.validateWatcher;
      },
      focusWatcher: function focusWatcher() {
        return this.control.focusWatcher;
      },
      isClearable: function isClearable() {
        return this.controlValue !== '' && this.hover ? true : false;
      }
    },
    watch: {
      // controlValue(value) {
      //   this.change(value);
      //   get() {
      //     return this.control.value;
      //   },
      //   set(value) {
      //     this.change(value);
      //     // this.$emit('input', { value });
      //   },
      // },
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      }
    },
    methods: {
      change: function change() {
        this.activeHint = [];
        this.activeHintItem = {};
        if (this.controlValue.length >= this.control.count) {
          var resultFn = function resultFn(state, data) {
            state.hintItems = data;
          };
          var state = this;
          var a = window.BX.ajax.runComponentAction(this.control.action, {
            sessionid: 'id',
            userid: 'id'
          });
          a.then(function (result) {
            resultFn(state, result);
          }, function (error) {
            if (window.twinpx.vue.markup) {
              resultFn(state, [{
                id: 'id1',
                value: '456456'
              }, {
                id: 'id2',
                value: '123133'
              }, {
                id: 'id3',
                value: '798798'
              }]);
            }
          });
        } else {
          this.hintItems = [];
        }
      },
      upArrow: function upArrow() {
        var _this = this;
        var activeIndex = this.activeHint.indexOf(true);
        var arr = this.activeHint.map(function (elem) {
          return null;
        });
        if (activeIndex >= 0) {
          this.activeHint[activeIndex] = null;
        }
        if (--activeIndex < 0) {
          activeIndex = this.activeHint.length - 1;
        }
        arr[activeIndex] = true;
        //lightlight hint
        this.activeHint = arr;
        //set active user
        this.activeHintItem = this.users.find(function (user) {
          return user.ORNZ === _this.controlValue;
        }) || {};
      },
      downArrow: function downArrow() {
        var _this2 = this;
        var activeIndex = this.activeHint.indexOf(true);
        var arr = this.activeHint.map(function (elem) {
          return null;
        });
        if (activeIndex >= 0) {
          this.activeHint[activeIndex] = null;
        }
        if (++activeIndex > this.activeHint.length - 1) {
          activeIndex = 0;
        }
        arr[activeIndex] = true;
        //lightlight hint
        this.activeHint = arr;
        //set active user
        this.activeHintItem = this.users.find(function (user) {
          return user.ORNZ === _this2.controlValue;
        }) || {};
      },
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.compare = this.controlValue;
      },
      blur: function blur() {
        var _this3 = this;
        this.focused = false;
        this.blured = true;
        setTimeout(function () {
          _this3.hintItems = [];
        }, 200);
        setTimeout(function () {
          _this3.validate();
        }, 100);
        if (this.controlValue !== this.compare) {
          this.$emit('autosave');
          bitrixLogs(6, "".concat(this.formControl.label, ": ").concat(this.controlValue));
        }
      },
      validate: function validate() {
        if (this.control.required && this.value.trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else {
            return true;
          }
        } else if (this.control.required && !this.value) {
          return false;
        }
        return true;
      }
    }
  };

  exports.ControlHint = ControlHint;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
