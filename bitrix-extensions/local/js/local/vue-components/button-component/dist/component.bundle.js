/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var DeleteIcon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"18\" viewBox=\"0 0 16 18\" fill=\"none\">\n      <path d=\"M1 3.82353H15M5.375 1H10.625M6.25 13.2353V7.58824M9.75 13.2353V7.58824M11.0625 17H4.9375C3.971 17 3.1875 16.1572 3.1875 15.1176L2.78798 4.80389C2.76726 4.26918 3.16468 3.82353 3.66222 3.82353H12.3378C12.8353 3.82353 13.2327 4.26918 13.212 4.80389L12.8125 15.1176C12.8125 16.1572 12.029 17 11.0625 17Z\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n  "
  };

  var ButtonComponent = {
    data: function data() {
      return {};
    },
    props: ['text', 'props', 'disabled'],
    emits: ['clickButton'],
    components: {
      DeleteIcon: DeleteIcon
    },
    // language=Vue
    template: "\n    <button v-if=\"props.find(e => e === 'icon')\" :class=\"propsClass\" @click.prevent=\"clickButton\" :title=\"text\">\n      <DeleteIcon />\n    </button>\n\n\t\t<button v-else class=\"vue-button\" :class=\"propsClass\" @click.prevent=\"clickButton\">{{ text }}</button>\n\t",
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
