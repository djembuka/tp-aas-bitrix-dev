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

  var ControlCheckboxCheckbox = {
    data: function data() {
      var _this$control;
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: ((_this$control = this.control) === null || _this$control === void 0 ? void 0 : _this$control.hint_external) || ''
      };
    },
    components: {
      CheckboxIcon: CheckboxIcon
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n    <div :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--checkbox-checkbox': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--checked': control.checked,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\">\n      <label>\n        <input\n          type=\"checkbox\"\n          :id=\"controlId\"\n          :name=\"controlName\"\n          :value=\"control.value\"\n          :checked=\"control.checked\"\n          v-model=\"checked\"\n          @focus=\"focus\"\n          @blur=\"blur\"\n          :disabled=\"disabled\"\n          ref=\"input\"\n        />\n        <CheckboxIcon />\n        <span class=\"twpx-form-control__label\" v-if=\"label\" v-html=\"label\"></span>\n      </label>\n      <div class=\"twpx-form-control__hint\" v-if=\"hint\" v-html=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur'],
    computed: {
      label: function label() {
        if (this.control.required && !this.control.label.includes('*')) {
          return "".concat(this.control.label, " *");
        }
        return this.control.label;
      },
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
    },
    watch: {
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      }
    },
    methods: {
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
    }
  };

  exports.ControlCheckboxCheckbox = ControlCheckboxCheckbox;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
