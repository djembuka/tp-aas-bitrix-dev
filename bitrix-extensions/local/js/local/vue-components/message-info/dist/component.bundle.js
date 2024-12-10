/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_buttonComponent) {
  'use strict';

  var MessageInfo = {
    data: function data() {
      return {};
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: ['message', 'button'],
    emits: ['clickButton'],
    // language=Vue
    template: "\n\t\t<div class=\"vue-message-info\">\n      <div class=\"vue-message-info__icon\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\">\n          <path d=\"M11 12.25V8.5M11 4.75V4.84399M13.7174 15.7826L11 21L8.5 15.7826H3.5C2.11929 15.7826 1 14.6633 1 13.2826V3.5C1 2.11929 2.11929 1 3.5 1H18.5C19.8807 1 21 2.11929 21 3.5V13.2826C21 14.6633 19.8807 15.7826 18.5 15.7826H13.7174Z\" stroke=\"#FF9300\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n      <div class=\"vue-message-info__text\">\n        <div class=\"vue-message-info__message\" v-html=\"message\"></div>\n        <ButtonComponent :text=\"button\" :props=\"['30', 'secondary']\" @clickButton=\"clickButton\" />\n      </div>\n    </div>\n\t",
    methods: {
      clickButton: function clickButton() {
        this.$emit('clickButton');
      }
    }
  };

  exports.MessageInfo = MessageInfo;

}((this.BX.AAS = this.BX.AAS || {}),BX.AAS));
//# sourceMappingURL=component.bundle.js.map
