/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ButtonComponent = {
    data: function data() {
      return {};
    },
    props: ['text', 'props', 'disabled'],
    emits: ['clickButton'],
    // language=Vue
    template: "\n\t\t<button class=\"vue-button\" :class=\"propsClass\" @click=\"clickButton\">{{ text }}</button>\n\t",
    computed: {
      propsClass: function propsClass() {
        var result = {};
        if (this.props) {
          this.props.forEach(function (p) {
            result["vue-button--".concat(p)] = true;
          });
        }
        if (this.disabled) {
          result["vue-button--disabled"] = true;
        }
        return result;
      }
    },
    methods: {
      clickButton: function clickButton() {
        this.$emit('clickButton');
      }
    }
  };

  exports.ButtonComponent = ButtonComponent;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
