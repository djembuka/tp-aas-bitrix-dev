/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_control) {
  'use strict';

  var FilterComponent = {
    data: function data() {
      return {};
    },
    props: ['filters'],
    emits: ['input', 'hints'],
    components: {
      Control: local_vueComponents_control.Control
    },
    // language=Vue
    template: "\n\t\t<div class=\"vue-tf-filter\">\n      <Control v-for=\"control in filters\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n    </div>\n\t",
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
      }
    }
  };

  exports.FilterComponent = FilterComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
