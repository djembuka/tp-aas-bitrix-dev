/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_demo_components_vue) {
  'use strict';

  var BitrixVueComponent = {
    data: function data() {
      return {
        counter: 0
      };
    },
    components: {
      VueComponent: local_demo_components_vue.VueComponent
    },
    computed: {
      buttonName: function buttonName() {
        return this.$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_BUTTON_COUNTER', {
          '#COUNTER#': this.counter
        });
      }
    },
    // language=Vue
    template: "\n    <VueComponent/>\n\t\t{{$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_TITLE')}} <button @click=\"counter++\">{{buttonName}}</button>\n\t"
  };

  exports.BitrixVueComponent = BitrixVueComponent;

}((this.BX.Demo = this.BX.Demo || {}),BX.Demo));
//# sourceMappingURL=component.bundle.js.map
