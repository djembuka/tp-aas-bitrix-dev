/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_control) {
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
      Control: local_vueComponents_control.Control
    },
    // language=Vue
    template: "\n\t\t<div>\n      <div v-for=\"(addedControl, index) in parent.multi\" :key=\"addedControl.id\">\n        <div class=\"btn-delete\" @click.prevent=\"remove(index)\" v-if=\"controlsLength > 1\"></div>\n        <Control :control=\"addedControl\" @input=\"input\" @hints=\"hints\"></Control>\n      </div>\n      <div class=\"btn btn-success btn-md\" :class=\"{'btn-disabled': isDisabled}\" @click.prevent=\"add\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</div>\n    </div>\n\t",
    emits: ['create', 'add', 'remove', 'input', 'hints'],
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
