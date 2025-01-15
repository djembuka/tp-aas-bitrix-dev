/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlCheckboxSwitch = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        hint: this.control.hint_external
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n    :class=\"{\n      'twpx-form-control': true,\n      'twpx-form-control--checkbox': true,\n      'twpx-form-control--invalid': invalid,\n      'twpx-form-control--disabled': disabled,\n    }\"\n  >\n    <label>\n      <span\n        class=\"twpx-form-control__switch\"\n        :class=\"{ 'twpx-form-control__switch--off': !value }\"\n      >\n        <input\n          type=\"checkbox\"\n          :id=\"controlId\"\n          :name=\"controlName\"\n          :value=\"control.value\"\n          v-model=\"value\"\n      /></span>\n      <span\n        class=\"twpx-form-control__switch-text\"\n        v-if=\"control.label !== undefined\"\n        >{{ control.label }}</span\n      >\n    </label>\n    <div class=\"twpx-form-control-hint\" v-if=\"hint\" v-html=\"hint\"></div>\n  </div>\n\t",
    emits: ['input', 'focus', 'blur'],
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
      invalid: function invalid() {
        return !this.validate();
      },
      disabled: function disabled() {
        return this.control.disabled;
      }
    },
    methods: {
      validate: function validate() {
        if (!this.control.required || this.control.required && this.control.value) {
          return true;
        }
        return false;
      }
    }
  };

  exports.ControlCheckboxSwitch = ControlCheckboxSwitch;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
