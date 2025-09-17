/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlSelectRadio = {
    data: function data() {
      var _this$control;
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        hint: ((_this$control = this.control) === null || _this$control === void 0 ? void 0 : _this$control.hint_external) || ''
      };
    },
    // language=Vue
    template: "\n\t\t<div\n    :class=\"{\n      'twpx-form-control': true,\n      'twpx-form-control--radio': true,\n      'twpx-form-control--invalid': invalid,\n      'twpx-form-control--disabled': disabled,\n    }\"\n  >\n    <label\n      class=\"twpx-form-control__radio\"\n      v-for=\"option in control.options\"\n      :key=\"option.code\"\n    >\n      <input\n        class=\"with-gap\"\n        :name=\"controlName\"\n        type=\"radio\"\n        :value=\"option.code\"\n        v-model=\"checked\"\n      />\n      <span>{{ option.label || '' }}</span>\n    </label>\n    <div class=\"twpx-form-control__hint\" v-if=\"hint\" v-html=\"hint\"></div>\n  </div>\n\t",
    props: ['control', 'id', 'name'],
    emits: ['input'],
    computed: {
      checked: {
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

  exports.ControlSelectRadio = ControlSelectRadio;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
