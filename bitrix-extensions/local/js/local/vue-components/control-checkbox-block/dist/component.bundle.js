/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var CheckboxIcon = {
    props: {
      rect: {
        type: String,
        "default": '#4F74D1'
      },
      stroke: {
        type: String,
        "default": '#F2F7FF'
      }
    },
    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <rect width=\"24\" height=\"24\" rx=\"8\" :fill=\"rect\"/>\n            <path d=\"M6 12L11.6 16L18 8\" :stroke=\"stroke\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n    "
  };

  var _ControlCheckboxBlock;
  var ControlCheckboxBlock = (_ControlCheckboxBlock = {
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
    components: {
      CheckboxIcon: CheckboxIcon
    },
    props: ['control', 'id', 'name'],
    emits: [],
    // language=Vue
    template: "\n\t\t<label :class=\"{\n      'twpx-form-control': true,\n      'twpx-form-control--checkbox-block': true,\n      'twpx-form-control--active': active,\n      'twpx-form-control--checked': control.checked,\n      'twpx-form-control--invalid': invalid,\n      'twpx-form-control--disabled': disabled,\n    }\">\n      <input\n        type=\"checkbox\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        :value=\"control.value\"\n        :checked=\"control.checked\"\n        v-model=\"checked\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n      />\n      <CheckboxIcon />\n      <span class=\"twpx-form-control__label\" v-if=\"control.label\" v-html=\"control.label\"></span>\n    </label>\n\t"
  }, babelHelpers.defineProperty(_ControlCheckboxBlock, "emits", ['input', 'focus', 'blur']), babelHelpers.defineProperty(_ControlCheckboxBlock, "computed", {
    checked: {
      get: function get() {
        return this.control.checked;
      },
      set: function set(checked) {
        this.$emit('input', {
          checked: checked
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
  }), babelHelpers.defineProperty(_ControlCheckboxBlock, "watch", {
    validateWatcher: function validateWatcher() {
      this.blured = true;
    },
    focusWatcher: function focusWatcher() {
      this.$refs.input.focus();
    }
  }), babelHelpers.defineProperty(_ControlCheckboxBlock, "methods", {
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
      if (this.control.required && this.checked || !this.control.required) {
        return true;
      } else if (this.control.required && !this.checked) {
        return false;
      }
      return true;
    }
  }), _ControlCheckboxBlock);

  exports.ControlCheckboxBlock = ControlCheckboxBlock;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
