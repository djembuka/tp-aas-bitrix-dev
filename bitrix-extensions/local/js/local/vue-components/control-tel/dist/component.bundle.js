/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlTel = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--tel': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keydown=\"keydown\"\n        @keyup.enter=\"enter\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
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
        return this.blured && !this.validate() || this.setInvalidWatcher;
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
      setInvalidWatcher: function setInvalidWatcher() {
        return this.control.setInvalidWatcher;
      }
    },
    watch: {
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      },
      setInvalidWatcher: function setInvalidWatcher(val) {
        this.warning = val ? this.control.regexp_description : '';
      }
    },
    methods: {
      focus: function focus() {
        if (this.value === '') {
          this.value = '+7 (';
        }
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      },
      blur: function blur() {
        if (this.value === '+7 (') {
          this.value = '';
        }
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      keydown: function keydown($event) {
        this.inputphone($event);
      },
      inputphone: function inputphone(e) {
        var key = e.key;
        var not = key.replace(/([0-9])/, 1);
        if (not == 1) {
          if (this.value.length < 4 || this.value === '') {
            this.value = '+7 (';
          }
          if (this.value.length === 7) {
            this.value = this.value + ') ';
          }
          if (this.value.length === 12) {
            this.value = this.value + '-';
          }
          if (this.value.length === 15) {
            this.value = this.value + '-';
          }
          if (this.value.length >= 18) {
            this.value = this.value.substring(0, 17);
          }
        } else if ('Backspace' !== not && 'Tab' !== not) {
          e.preventDefault();
        }
      },
      validate: function validate() {
        if (!this.control.required) {
          if (!this.value.trim()) {
            return true;
          } else if (this.value.length >= 11) {
            return true;
          }
          return false;
        } else if (this.control.required && this.value.trim()) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else if (this.value.length >= 11) {
            return true;
          } else {
            return false;
          }
        } else if (this.control.required && !this.value.trim()) {
          return false;
        }
        return true;
      }
    }
  };

  exports.ControlTel = ControlTel;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
