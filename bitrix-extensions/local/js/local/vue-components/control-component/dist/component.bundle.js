/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlHidden,local_vueComponents_controlText,local_vueComponents_controlTel,local_vueComponents_controlEmail,local_vueComponents_controlHint,local_vueComponents_controlSelectDropdown,local_vueComponents_controlDatepicker,local_vueComponents_controlDateSingle,local_vueComponents_controlDateRange,local_vueComponents_controlFile,local_vueComponents_controlFileLoad) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ControlComponent = {
    data: function data() {
      return {
        id: "PROPERTY_".concat(this.control.id),
        name: "PROPERTY_".concat(this.control.id),
        componentType: "".concat(this.control.property).concat(this.control.type ? '-' + this.control.type : '')
      };
    },
    components: {
      ControlHidden: local_vueComponents_controlHidden.ControlHidden,
      ControlText: local_vueComponents_controlText.ControlText,
      ControlTel: local_vueComponents_controlTel.ControlTel,
      ControlEmail: local_vueComponents_controlEmail.ControlEmail,
      ControlHint: local_vueComponents_controlHint.ControlHint,
      ControlSelectDropdown: local_vueComponents_controlSelectDropdown.ControlSelectDropdown,
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker,
      ControlDateSingle: local_vueComponents_controlDateSingle.ControlDateSingle,
      ControlDateRange: local_vueComponents_controlDateRange.ControlDateRange,
      ControlFile: local_vueComponents_controlFile.ControlFile,
      ControlFileLoad: local_vueComponents_controlFileLoad.ControlFileLoad
    },
    props: ['control'],
    // language=Vue
    template: "\n\t\t<component\n      :is=\"componentName()\"\n      :control=\"control\"\n      :id=\"id\"\n      :name=\"name\"\n      @input=\"inputAddControl\"\n      @focus=\"focusAddControl\"\n      @blur=\"blurAddControl\"\n      @enter=\"enterAddControl\"\n      @hints=\"hintsAddControl\"\n      @upload=\"uploadAddControl\"\n    ></component>\n\t",
    emits: ['input', 'focus', 'blur', 'hints', 'upload'],
    methods: {
      componentName: function componentName() {
        return "control-".concat(this.componentType);
      },
      inputAddControl: function inputAddControl(args) {
        this.$emit('input', _objectSpread(_objectSpread({}, args), {}, {
          control: this.control
        }));
      },
      focusAddControl: function focusAddControl() {
        this.$emit('focus', {
          control: this.control
        });
      },
      blurAddControl: function blurAddControl() {
        this.$emit('blur', {
          control: this.control
        });
      },
      enterAddControl: function enterAddControl() {
        this.$emit('enter', {
          control: this.control
        });
      },
      hintsAddControl: function hintsAddControl(args) {
        this.$emit('hints', _objectSpread(_objectSpread({}, args), {}, {
          control: this.control
        }));
      },
      uploadAddControl: function uploadAddControl(args) {
        this.$emit('upload', _objectSpread(_objectSpread({}, args), {}, {
          control: this.control
        }));
      }
    }
  };

  exports.ControlComponent = ControlComponent;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
