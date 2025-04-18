/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var _ControlCheckbox;
  var ControlCheckbox = (_ControlCheckbox = {
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
    emits: [],
    // language=Vue
    template: "\n\t\t<div :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--checkbox': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\">\n      <label>\n        <input\n          type=\"checkbox\"\n          :id=\"controlId\"\n          :name=\"controlName\"\n          v-model=\"value\"\n          @focus=\"focus\"\n          @blur=\"blur\"\n          :disabled=\"disabled\"\n          ref=\"input\"\n          class=\"twpx-form-control--filled-in\"\n        />\n        <span class=\"twpx-form-control__label\" v-if=\"control.label\" v-html=\"control.label\">\n        </span>\n      </label>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t"
  }, babelHelpers.defineProperty(_ControlCheckbox, "emits", ['input', 'focus', 'blur']), babelHelpers.defineProperty(_ControlCheckbox, "computed", {
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
    active: function active() {
      return this.focused;
    },
    invalid: function invalid() {
      return !this.validate();
    },
    disabled: function disabled() {
      return this.control.disabled;
    },
    validateWatcher: function validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher: function focusWatcher() {
      return this.control.focusWatcher;
    }
  }), babelHelpers.defineProperty(_ControlCheckbox, "watch", {
    validateWatcher: function validateWatcher() {
      this.blured = true;
    },
    focusWatcher: function focusWatcher() {
      this.$refs.input.focus();
    }
  }), babelHelpers.defineProperty(_ControlCheckbox, "methods", {
    focus: function focus() {
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur: function blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    validate: function validate() {
      if (this.control.required && this.value || !this.control.required) {
        return true;
      } else if (this.control.required && !this.value) {
        return false;
      }
      return true;
    }
  }), _ControlCheckbox);

  exports.ControlCheckbox = ControlCheckbox;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
