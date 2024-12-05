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
      }
    },
    // language=Vue
    template: "\n    <div v-if=\"loading\" class=\"vue-predefined-filters-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div v-else-if=\"predefined.fields.length\">\n      <h3 class=\"mt-0\">{{ predefined.predefinedFiltersTitle }}</h3>\n      <div class=\"vue-predefined-filters\">\n        <div class=\"vue-predefined-filters__item\"\n          v-for=\"field in predefined.fields\" :key=\"field.id\"\n          :class=\"{'vue-predefined-filters__item--inactive': !field.selectable, 'vue-predefined-filters__item--active': field.active}\"\n          @click=\"if(field.selectable) {click(field);}\">\n          <div class=\"vue-predefined-filters__item__data\">\n            <i>{{ field.name }}</i>\n            <b>{{ field.value }}</b>\n          </div>\n        </div>\n      </div>\n    </div>\n\t",
    emits: ['clickPredefined'],
    methods: {
      click: function click(field) {
        this.$emit('clickPredefined', {
          field: field
        });
      }
    }
  };

  exports.PredefinedFilters = PredefinedFilters;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
