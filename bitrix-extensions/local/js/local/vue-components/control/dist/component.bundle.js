/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlText,local_vueComponents_controlHint,local_vueComponents_controlSelectDropdown,local_vueComponents_controlDatepicker,local_vueComponents_controlDateSingle,local_vueComponents_controlDateRange) {
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
      ControlSelectDropdown: local_vueComponents_controlSelectDropdown.ControlSelectDropdown,
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker,
      ControlDateSingle: local_vueComponents_controlDateSingle.ControlDateSingle,
      ControlDateRange: local_vueComponents_controlDateRange.ControlDateRange
    },
    props: ['control'],
    // language=Vue
    template: "\n\t\t<component\n      :is=\"componentName()\"\n      :control=\"control\"\n      :id=\"id\"\n      :name=\"name\"\n      @input=\"inputAddControl\"\n      @hints=\"hintsAddControl\"\n    ></component>\n\t",
    emits: ['input', 'hints'],
    methods: {
      componentName: function componentName() {
        return "control-".concat(this.componentType);
      },
      inputAddControl: function inputAddControl(_ref) {
        var value = _ref.value,
          checked = _ref.checked;
        this.$emit('input', {
          control: this.control,
          value: value,
          checked: checked
        });
      },
      hintsAddControl: function hintsAddControl(_ref2) {
        var type = _ref2.type,
          action = _ref2.action,
          value = _ref2.value;
        this.$emit('hints', {
          type: type,
          control: this.control,
          action: action,
          value: value
        });
      }
    }
  };

  exports.Control = Control;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
