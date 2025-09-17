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

  var ControlSelectMulti = {
    data: function data() {
      var _this$control;
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        hint: ((_this$control = this.control) === null || _this$control === void 0 ? void 0 : _this$control.hint_external) || '',
        disabled: false
      };
    },
    components: {
      CheckboxIcon: CheckboxIcon
    },
    // language=Vue
    template: "\n\t\t<div class=\"twpx-form-control--select-multi\">\n      <div class=\"twpx-form-control--select-multi__heading\">{{ control.label }}</div>\n      <label :class=\"{\n          'twpx-form-control': true,\n          'twpx-form-control--checkbox-block': true,\n          'twpx-form-control--active': active,\n          'twpx-form-control--checked': control.value?.some(v => String(v) === String(option.code)),\n          'twpx-form-control--invalid': invalid,\n          'twpx-form-control--disabled': disabled,\n        }\"\n        v-for=\"option in control.options\"\n        :key=\"option.code\"\n      >\n        <input\n          type=\"checkbox\"\n          :name=\"controlName\"\n          :value=\"option.code\"\n          :checked=\"control.value?.some(v => String(v) === String(option.code)) ? 'checked' : ''\"\n          @input=\"input\"\n          @focus=\"focus\"\n          @blur=\"blur\"\n          :disabled=\"!!option.disabled\"\n          ref=\"input\"\n        />\n        <CheckboxIcon />\n        <span class=\"twpx-form-control--checkbox-block__label\" v-if=\"option.label\" v-html=\"option.label\"></span>\n      </label>\n    \n      <div class=\"twpx-form-control__hint\" v-if=\"hint\" v-html=\"hint\"></div>\n    </div>\n\t",
    props: ['control', 'id', 'name'],
    emits: ['input'],
    computed: {
      invalid: function invalid() {
        return !this.validate();
      }
    },
    methods: {
      input: function input(event) {
        this.$emit('input', {
          value: event.target.value,
          checked: !this.control.value.some(function (v) {
            return String(v) === String(event.target.value);
          })
        });
      },
      validate: function validate() {
        if (!this.control.required || this.control.required && this.control.value) {
          return true;
        }
        return false;
      }
    }
  };

  exports.ControlSelectMulti = ControlSelectMulti;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
