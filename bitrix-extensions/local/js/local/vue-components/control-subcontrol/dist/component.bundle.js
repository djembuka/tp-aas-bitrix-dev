/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlChoice) {
  'use strict';

  var ControlSubcontrol = {
    data: function data() {
      return {};
    },
    props: ['control'],
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    // language=Vue
    template: "\n\t\t<div>\n      <ControlChoice :control=\"control\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlChoice>\n\n      <div class=\"twpx-form-control-sub\">\n\n        <div v-for=\"subControl in control.sub\" :key=\"subControl.id\">\n          Sub\n        </div>\n\n      </div>\n    </div>\n\t",
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

  exports.ControlSubcontrol = ControlSubcontrol;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
