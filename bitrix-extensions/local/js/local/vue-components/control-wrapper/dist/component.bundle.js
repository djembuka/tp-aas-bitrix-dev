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
      createMulti: function createMulti(attrs) {
        this.$emit('createMulti', attrs);
      },
      addMulti: function addMulti(attrs) {
        this.$emit('addMulti', attrs);
      },
      removeMulti: function removeMulti(attrs) {
        this.$emit('removeMulti', attrs);
      },
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

  exports.ControlWrapper = ControlWrapper;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
