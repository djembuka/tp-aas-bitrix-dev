/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent) {
  'use strict';

  var FilterComponent = {
    data: function data() {
      return {};
    },
    props: ['filters', 'loading', 'cols'],
    emits: ['input', 'hints'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n    <div class=\"vue-tf-filter-ph\" v-if=\"loading\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\t\t<div class=\"vue-tf-filter\" v-else :style=\"gridTemplateColumns()\">\n      <ControlComponent v-for=\"control in filters\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n    </div>\n\t",
    methods: {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.$emit('input', {
          control: control,
          value: value,
          checked: checked
        });
      },
      hints: function hints(_ref2) {
        var type = _ref2.type,
          control = _ref2.control,
          action = _ref2.action,
          value = _ref2.value;
        this.$emit('hints', {
          type: type,
          control: control,
          action: action,
          value: value
        });
      },
      gridTemplateColumns: function gridTemplateColumns() {
        var result = '1fr 2fr 2fr 2fr';
        if (babelHelpers["typeof"](this.cols) === 'object' && this.cols.reduce) {
          result = this.cols.reduce(function (acc, cur) {
            return "".concat(acc, " ").concat(cur, "fr");
          }, '');
        }
        return "grid-template-columns: ".concat(result, ";");
      }
    }
  };

  exports.FilterComponent = FilterComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
