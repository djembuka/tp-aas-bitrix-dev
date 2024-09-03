/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_control) {
  'use strict';

  var FilterComponent = {
    data: function data() {
      return {};
    },
    props: ['filters'],
    emits: ['input', 'hintsRequest'],
    components: {
      Control: local_vueComponents_control.Control
    },
    // language=Vue
    template: "\n\t\t<div class=\"vue-tf-filter\">\n      <Control v-for=\"control in filters\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hintsRequest=\"hintsRequest\" />\n    </div>\n\t",
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
      hintsRequest: function hintsRequest(_ref2) {
        var control = _ref2.control,
          hintsAction = _ref2.hintsAction;
        this.$emit('hintsRequest', {
          control: control,
          hintsAction: hintsAction
        });
      }
    }
  };

  exports.FilterComponent = FilterComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
