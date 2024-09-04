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
        showHints: false,
        activeHintItem: {},
        activeHint: [],
        hover: false,
        compare: this.controlValue
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--hint': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      \n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"controlValue\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keydown.enter.prevent=\"enterInput\"\n        @keydown.up.prevent=\"upArrow()\"\n        @keydown.down.prevent=\"downArrow()\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n\n      <div class=\"b-input-clear\" @click.prevent=\"clearInput()\" v-show=\"isClearable\"></div>\n\n      <div class=\"b-input-hint\" v-if=\"showHints\">\n        <div v-for=\"(hint, index) in hintItems\" :data-id=\"hint.id\" :data-value=\"hint.value\" :class=\"{active: activeHint[index]}\" class=\"b-input-hint__item\" @click.prevent=\"clickHint(hint)\">{{ hint.value }}</div>\n      </div>\n\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input'],
    computed: {
      hintItems: function hintItems() {
        return this.control.hints;
      },
      placeholder: function placeholder() {
        if (this.focused && (!this.controlValue || !this.controlValue.trim())) {
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
      },
      controlValue: {
        get: function get() {
          if (babelHelpers["typeof"](this.control.value) === 'object') {
            return this.control.value.value;
          }
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
          this.activeHint = [];
          this.activeHintItem = {};
          if (this.controlValue.length >= this.control.count) {
            this.$emit('input', {
              value: this.controlValue,
              hintsAction: this.control.action
            });
          } else {
            console.log(3);
            this.showHints = false;
          }
        }
      }
    },
    watch: {
      controlValue: function controlValue() {
        if (this.controlValue.length >= this.control.count && this.control.hints.length && !this.loading) {
          this.showHints = true;
        }
      },
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      }
    },
    methods: {
      clickHint: function clickHint(hint) {
        // const id = hint.id;
        // this.activeHint = this.hintItems.find((h) => h.id === id) || {};
        console.log(hint, 1);
        this.$emit('input', {
          value: hint
        });
        this.showHints = false;

        // this.validate();
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
          console.log(2);
          // this.showHints = false;
        }, 200);
        setTimeout(function () {
          _this3.validate();
        }, 100);
        if (babelHelpers["typeof"](this.control.value) !== 'object') {
          this.controlValue = '';
        }

        // if (this.controlValue !== this.compare) {
        //   this.$emit('autosave');
        //   bitrixLogs(6, `${this.formControl.label}: ${this.controlValue}`);
        // }
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
