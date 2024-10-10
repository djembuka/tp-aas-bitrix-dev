/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent) {
  'use strict';

  var ControlMulti = {
    data: function data() {
      return {
        multi: 1,
        copy: {}
      };
    },
    props: ['parent'],
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n\t\t<div>\n      <div v-for=\"(addedControl, index) in parent.multi\" :key=\"addedControl.id\">\n        <div class=\"btn-delete\" @click.prevent=\"remove(index)\" v-if=\"controlsLength > 1\"></div>\n        <ControlComponent :control=\"addedControl\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\"></ControlComponent>\n      </div>\n      <div class=\"btn btn-success btn-md\" :class=\"{'btn-disabled': isDisabled}\" @click.prevent=\"add\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</div>\n    </div>\n\t",
    emits: ['create', 'add', 'remove', 'input', 'focus', 'blur', 'enter', 'hints'],
    computed: {
      controlsLength: function controlsLength() {
        if (this.parent.multi && babelHelpers["typeof"](this.parent.multi) === 'object' && this.parent.multi.length !== undefined) {
          return this.parent.multi.length;
        }
        return 0;
      },
      isDisabled: function isDisabled() {
        return this.controlsLength >= this.multi;
      }
    },
    methods: {
      add: function add() {
        if (!this.isDisabled) {
          this.$emit('add', {
            parent: this.parent,
            add: Object.assign({}, this.copy)
          });
        }
      },
      remove: function remove(index) {
        this.$emit('remove', {
          parent: this.parent,
          index: index
        });
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
    },
    beforeMount: function beforeMount() {
      this.multi = this.parent.multi;
      this.copy = Object.assign({}, this.parent);
      delete this.copy.multi;
      this.$emit('create', {
        parent: this.parent
      });
      this.add();
    }
  };

  exports.ControlMulti = ControlMulti;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
