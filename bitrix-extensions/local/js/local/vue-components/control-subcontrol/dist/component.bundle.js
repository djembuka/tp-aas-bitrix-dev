/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent) {
  'use strict';

  var ControlSubcontrol = {
    data: function data() {
      return {};
    },
    props: ['control'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n\t\t<div>\n      <ControlComponent :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlComponent>\n\n      <div class=\"sub\">\n\n        <div v-for=\"subControl in control.sub\" :key=\"subControl.id\">\n          <ControlComponent :control=\"subControl\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlComponent>\n        </div>\n\n      </div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter', 'hints'],
    methods: {
      input: function input(attrs) {
        this.$emit('input', attrs);
      },
      focus: function focus(attrs) {
        this.$emit('focus', attrs);
      },
      blur: function blur(attrs) {
        this.$emit('blur', attrs);
      },
      enter: function enter(attrs) {
        this.$emit('enter', attrs);
      },
      hints: function hints() {}
    }
  };

  exports.ControlSubcontrol = ControlSubcontrol;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
