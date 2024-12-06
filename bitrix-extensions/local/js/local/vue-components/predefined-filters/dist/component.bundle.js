/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var PredefinedFilters = {
    data: function data() {},
    props: {
      predefined: {
        type: Object,
        "default": {
          fields: []
        }
      },
      loading: {
        type: Boolean,
        "default": true
      },
      selected: {
        type: Boolean,
        "default": false
      }
    },
    // language=Vue
    template: "\n    <div v-if=\"loading\" class=\"vue-predefined-filters-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div v-else-if=\"predefined && predefined.fields && predefined.fields.length\">\n      <h3 class=\"mt-0\" v-if=\"predefined.predefinedFiltersTitle\">{{ predefined.predefinedFiltersTitle }}</h3>\n      <div class=\"vue-predefined-filters\">\n      \n        <div class=\"vue-predefined-filters__item\"\n          v-for=\"field in predefined.fields\" :key=\"field.id\"\n          :class=\"{'vue-predefined-filters__item--inactive': !field.selectable, 'vue-predefined-filters__item--active': field.active}\"\n          @click=\"if(field.selectable) {click(field);}\">\n          <div class=\"vue-predefined-filters__item__data\">\n            <i>{{ field.name }}</i>\n            <b>{{ field.value }}</b>\n          </div>\n        </div>\n        \n        <div class=\"vue-predefined-filters__item vue-predefined-filters__item--selected\"\n          v-if=\"selected\"\n          @click=\"clickSelected\">\n          <div class=\"vue-predefined-filters__item__data\">\n            <i>\u0412\u044B\u0431\u0440\u0430\u043D\u043E</i>\n            <b>{{ selected }}</b>\n          </div>\n          <div class=\"vue-predefined-filters__item__icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23.177\" height=\"32\" viewBox=\"0 0 23.177 32\">\n              <g>\n                <path d=\"M28.171,8.7V29.869a2.062,2.062,0,0,1-2.062,2.063H7.056a2.062,2.062,0,0,1-2.062-2.063V1.994A2.062,2.062,0,0,1,7.056-.068H19.407Z\" transform=\"translate(-4.994 0.068)\" fill=\"#288c0a\"/>\n              </g>\n              <path d=\"M20.6,8.506l7.569,3.118V8.7L23.88,7.429Z\" transform=\"translate(-4.994 0.068)\" fill=\"#0e5429\"/>\n              <path d=\"M28.171,8.7h-6.7a2.062,2.062,0,0,1-2.062-2.063v-6.7Z\" transform=\"translate(-4.994 0.068)\" fill=\"#cef4ae\"/>\n              <g transform=\"translate(5.029 11.693)\">\n                <rect width=\"13.119\" height=\"1.458\" rx=\"0.729\" transform=\"translate(0 2.577)\" fill=\"#fff\"/>\n                <rect width=\"7.853\" height=\"1.458\" rx=\"0.729\" transform=\"translate(0 9.089)\" fill=\"#fff\"/>\n                <rect width=\"13.119\" height=\"1.458\" rx=\"0.729\" transform=\"translate(2.511 13.119) rotate(-90)\" fill=\"#fff\"/>\n                <rect width=\"7.288\" height=\"1.458\" rx=\"0.729\" transform=\"translate(9.149 7.29) rotate(-90)\" fill=\"#fff\"/>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\t",
    emits: ['clickPredefined', 'clickSelected'],
    methods: {
      click: function click(field) {
        this.$emit('clickPredefined', {
          field: field
        });
      },
      clickSelected: function clickSelected() {
        this.$emit('clickSelected');
      }
    }
  };

  exports.PredefinedFilters = PredefinedFilters;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
