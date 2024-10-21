/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlMulti,local_vueComponents_controlComponent) {
  'use strict';

  var ControlChoice = {
    data: function data() {},
    props: ['control'],
    components: {
      ControlMulti: local_vueComponents_controlMulti.ControlMulti,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n\t\t<ControlMulti v-if=\"control.multi\" :parent=\"control\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n    <ControlComponent v-else :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"/>\n\t",
    emits: ['create', 'add', 'remove', 'input', 'focus', 'blur', 'enter', 'hints'],
    methods: {
      create: function create(attrs) {
        this.$emit('create', attrs);
      },
      add: function add(attrs) {
        this.$emit('add', attrs);
      },
      remove: function remove(attrs) {
        this.$emit('remove', attrs);
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
      hints: function hints(attrs) {
        this.$emit('hints', attrs);
      }
    }
  };

  exports.ControlChoice = ControlChoice;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
