/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlText,local_vueComponents_controlHint,local_vueComponents_controlSelectDropdown) {
  'use strict';

  var Control = {
    data: function data() {
      return {
        id: "PROPERTY_".concat(this.control.id),
        name: "PROPERTY_".concat(this.control.id),
        componentType: "".concat(this.control.property).concat(this.control.type ? '-' + this.control.type : '')
      };
    },
    components: {
      ControlText: local_vueComponents_controlText.ControlText,
      ControlHint: local_vueComponents_controlHint.ControlHint,
      ControlSelectDropdown: local_vueComponents_controlSelectDropdown.ControlSelectDropdown
    },
    props: ['control'],
    // language=Vue
    template: "\n\t\t<component\n      :is=\"componentName()\"\n      :control=\"control\"\n      :id=\"id\"\n      :name=\"name\"\n      @input=\"addControl\"\n    ></component>\n\t",
    emits: ['input'],
    methods: {
      componentName: function componentName() {
        return "control-".concat(this.componentType);
      },
      addControl: function addControl(_ref) {
        var value = _ref.value,
          checked = _ref.checked;
        this.$emit('input', {
          control: this.control,
          value: value,
          checked: checked
        });
      }
    }
  };

  exports.Control = Control;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
