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
        activeHintArray: [],
        hover: false,
        compare: this.controlValue,
        memoryValue: ''
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--hint': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      \n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"controlValue\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keydown.enter.prevent=\"enterInput\"\n        @keydown.up.prevent=\"upArrow()\"\n        @keydown.down.prevent=\"downArrow()\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n\n      <div class=\"b-input-clear\" @click.prevent=\"clearInput()\" v-show=\"isClearable\"></div>\n\n      <div class=\"b-input-hint\" v-if=\"showHints\">\n        <div v-for=\"(hint, index) in hintItems\" :data-id=\"hint.id\" :data-value=\"hint.value\" :class=\"{active: activeHintArray[index]}\" class=\"b-input-hint__item\" @click.prevent=\"clickHint(hint)\">{{ hint.value }}</div>\n      </div>\n\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
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
        return this.focused || !!this.controlValue.trim();
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

          // this.activeHintArray = [];
          // this.activeHintItem = {};

          if (this.controlValue.length >= this.control.count) {
            this.$emit('input', {
              hintsAction: this.control.action
            });
          } else {
            this.showHints = false;
          }
        }
      }
    },
    watch: {
      hintItems: function hintItems() {
        this.activeHintArray = this.hintItems.map(function () {
          return null;
        });
      },
      controlValue: function controlValue() {
        if (this.controlValue.length >= this.control.count && babelHelpers["typeof"](this.control.hints) === 'object' && this.control.hints.length && !this.loading) {
          console.log(1);
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
      enterInput: function enterInput() {
        var _this = this;
        //check if there is an active hint
        var activeIndex = this.activeHintArray.indexOf(true);
        if (activeIndex >= 0) {
          this.activeHintItem = this.hintItems[activeIndex] || {};
        } else {
          //if not
          this.activeHintItem = this.hintItems.find(function (hint) {
            return hint.value.search(_this.controlValue) >= 0;
          }) || {};
        }
        this.controlValue = this.activeHintItem.value || this.memoryValue;
        this.memoryValue = this.controlValue;
        this.showHints = false;
      },
      clickHint: function clickHint(hint) {
        this.activeHintItem = this.hintItems.find(function (h) {
          return h.id === hint.id;
        }) || {};
        this.$emit('input', {
          value: hint
        });
        this.showHints = false;

        // this.validate();
      },
      upArrow: function upArrow() {
        var _this2 = this;
        var activeIndex = this.activeHintArray.indexOf(true);
        var arr = this.activeHintArray.map(function (elem) {
          return null;
        });
        if (activeIndex >= 0) {
          this.activeHintArray[activeIndex] = null;
        }
        if (--activeIndex < 0) {
          activeIndex = this.activeHintArray.length - 1;
        }
        arr[activeIndex] = true;
        //lightlight hint
        this.activeHintArray = arr;
        //set active user
        this.activeHintItem = this.hintItems.find(function (hint) {
          return hint.value === _this2.controlValue;
        }) || {};
      },
      downArrow: function downArrow() {
        var _this3 = this;
        var activeIndex = this.activeHintArray.indexOf(true);
        console.log(activeIndex);
        var arr = this.activeHintArray.map(function (elem) {
          return null;
        });
        if (activeIndex >= 0) {
          this.activeHintArray[activeIndex] = null;
        }
        if (++activeIndex > this.activeHintArray.length - 1) {
          activeIndex = 0;
        }
        arr[activeIndex] = true;
        //lightlight hint
        this.activeHintArray = arr;
        //set active user
        this.activeHintItem = this.hintItems.find(function (hint) {
          return hint.value === _this3.controlValue;
        }) || {};
      },
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.compare = this.controlValue;
      },
      blur: function blur() {
        var _this4 = this;
        this.focused = false;
        this.blured = true;
        setTimeout(function () {
          _this4.showHints = false;
        }, 200);
        setTimeout(function () {
          _this4.validate();
        }, 100);
        if (babelHelpers["typeof"](this.control.value) !== 'object' && !this.showHints) {
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
