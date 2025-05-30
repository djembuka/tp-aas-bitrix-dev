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
    template: "\n\t\t<div>\n      <div v-for=\"(addedControl, index) in parent.multi\" :key=\"addedControl.id\">\n        <div class=\"twpx-form-control-multi\">\n\n          <div class=\"btn-delete\" @click.prevent=\"remove(index)\" v-if=\"controlsLength > 1\"></div>\n\n          <ControlComponent :control=\"addedControl\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n\n        </div>\n\n        <hr>\n\n      </div>\n      <div class=\"btn btn-success btn-md\" :class=\"{'btn-disabled': isDisabled}\" @click.prevent=\"add()\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</div>\n    </div>\n\t",
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
      add: function add(value) {
        if (!this.isDisabled) {
          var copy = Object.assign({}, this.copy);
          if (value) {
            copy.value = value;
          }
          this.$emit('add', {
            parent: this.parent,
            add: copy
          });
        }
      },
      remove: function remove(index) {
        this.$emit('remove', {
          parent: this.parent,
          index: index
        });
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
      hints: function hints(args) {
        this.$emit('hints', args);
      }
    },
    beforeMount: function beforeMount() {
      var _this = this;
      this.multi = this.parent.multi;
      this.copy = Object.assign({}, this.parent);
      delete this.copy.multi;
      this.copy.value = '';
      this.$emit('create', {
        parent: this.parent
      });
      if (this.parent.value !== null && babelHelpers["typeof"](this.parent.value) === 'object' && this.parent.value.forEach && this.parent.value.length) {
        this.parent.value.forEach(function (v) {
          _this.add(v);
        });
        this.parent.value = [];
      } else {
        this.add();
      }
    }
  };

  exports.ControlMulti = ControlMulti;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
