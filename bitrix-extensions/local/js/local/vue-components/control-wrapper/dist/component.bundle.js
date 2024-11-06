/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent,local_vueComponents_controlMulti,local_vueComponents_controlSubcontrol) {
  'use strict';

  var ControlWrapper = {
    data: function data() {
      return {};
    },
    props: ['control'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ControlMulti: local_vueComponents_controlMulti.ControlMulti,
      ControlSubcontrol: local_vueComponents_controlSubcontrol.ControlSubcontrol
    },
    // language=Vue
    template: "\n\t\t<ControlMulti v-if=\"control.multi\" :parent=\"control\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlMulti>\n\n    <ControlSubcontrol v-else-if=\"control.sub\" :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"/>\n\n    <ControlComponent v-else :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"/>\n\t",
    emits: ['createMulti', 'addMulti', 'removeMulti', 'input', 'focus', 'blur', 'enter', 'hints'],
    methods: {
      createMulti: function createMulti(args) {
        this.$emit('createMulti', args);
      },
      addMulti: function addMulti(args) {
        this.$emit('addMulti', args);
      },
      removeMulti: function removeMulti(args) {
        this.$emit('removeMulti', args);
      },
      input: function input(args) {
        this.$emit('input', args);
      },
      focus: function focus(args) {
        this.$emit('focus', args);
      },
      blur: function blur(args) {
        this.$emit('blur', args);
      },
      enter: function enter(args) {
        this.$emit('enter', args);
      },
      hints: function hints() {}
    }
  };

  exports.ControlWrapper = ControlWrapper;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
