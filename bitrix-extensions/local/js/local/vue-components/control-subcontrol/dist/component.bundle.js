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
    template: "\n\t\t<div>\n      <ControlComponent :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n\n      <div class=\"twpx-form-control-sub\">\n\n        <div v-for=\"subControl in control.sub\" :key=\"subControl.id\">\n\n          <hr>\n\n          <div class=\"twpx-form-control-sub-item\">\n\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <g id=\"copy-success\" transform=\"translate(-746 -382)\">\n                <path id=\"Vector\" d=\"M14,9.1V4.9C14,1.4,12.6,0,9.1,0H4.9C1.4,0,0,1.4,0,4.9V6H3.1C6.6,6,8,7.4,8,10.9V14H9.1C12.6,14,14,12.6,14,9.1Z\" transform=\"translate(754 384)\" fill=\"none\" stroke=\"#154d8a\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n                <path id=\"Vector-2\" data-name=\"Vector\" d=\"M14,9.1V4.9C14,1.4,12.6,0,9.1,0H4.9C1.4,0,0,1.4,0,4.9V9.1C0,12.6,1.4,14,4.9,14H9.1C12.6,14,14,12.6,14,9.1Z\" transform=\"translate(748 390)\" fill=\"none\" stroke=\"#154d8a\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n                <path id=\"Vector-3\" data-name=\"Vector\" d=\"M0,1.95,1.95,3.9,5.84,0\" transform=\"translate(752.08 395.05)\" fill=\"none\" stroke=\"#154d8a\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n                <path id=\"Vector-4\" data-name=\"Vector\" d=\"M0,0H24V24H0Z\" transform=\"translate(746 382)\" fill=\"none\" opacity=\"0\"/>\n              </g>\n            </svg>\n\n            <ControlComponent :control=\"subControl\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\t",
    emits: ['create', 'add', 'remove', 'input', 'focus', 'blur', 'enter', 'hints'],
    methods: {
      create: function create(args) {
        this.$emit('create', args);
      },
      add: function add(args) {
        this.$emit('add', args);
      },
      remove: function remove(args) {
        this.$emit('remove', args);
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
    }
  };

  exports.ControlSubcontrol = ControlSubcontrol;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
