/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent) {
  'use strict';

  var IconOpen = {
    // language=Vue
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M5.18475 4.68618H11.1337M6.62865 8.02419H9.37035M7.64835 11.3611H8.35065M5.27947 13.0643L4.03407 9.83735C3.9333 9.5768 3.8003 9.3312 3.63707 9.1091L1.62286 6.35305C0.0116969 4.14907 1.73672 0.984043 4.39076 1.00006H11.703C14.2623 0.984043 15.9863 4.14907 14.3751 6.35305L12.3609 9.1091C12.1977 9.33227 12.0647 9.5768 11.9639 9.83735L10.7185 13.0643C9.72302 15.6452 6.27398 15.6452 5.27846 13.0643H5.27947Z\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n    </svg>\n\t"
  };

  var IconItemClear = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\">\n      <path d=\"M4.59983 3.99312L7.87383 0.71912C7.91698 0.681154 7.9519 0.634756 7.97643 0.582784C8.00097 0.530812 8.0146 0.474366 8.0165 0.416925C8.01839 0.359483 8.0085 0.302262 7.98744 0.248787C7.96638 0.195312 7.9346 0.146715 7.89404 0.105991C7.85349 0.0652659 7.80503 0.0332758 7.75164 0.0119911C7.69825 -0.0092936 7.64107 -0.0194221 7.58363 -0.0177704C7.52618 -0.0161188 7.46967 -0.00272195 7.4176 0.0215947C7.36552 0.0459114 7.31898 0.080633 7.28083 0.12362L4.00633 3.40012L0.732332 0.12362C0.653364 0.0446521 0.54626 0.000288244 0.434582 0.000288244C0.322904 0.000288244 0.2158 0.0446521 0.136832 0.12362C0.0578639 0.202589 0.0135 0.309692 0.0135 0.42137C0.0135 0.533048 0.0578639 0.640152 0.136832 0.71912L3.41083 3.99312L0.123332 7.28112C0.0443639 7.36009 0 7.46719 0 7.57887C0 7.69055 0.0443639 7.79765 0.123332 7.87662C0.2023 7.95559 0.309404 7.99995 0.421082 7.99995C0.53276 7.99995 0.639864 7.95559 0.718832 7.87662L4.00633 4.58912L7.28033 7.86362C7.3593 7.94259 7.4664 7.98695 7.57808 7.98695C7.68976 7.98695 7.79686 7.94259 7.87583 7.86362C7.9548 7.78465 7.99916 7.67755 7.99916 7.56587C7.99916 7.45419 7.9548 7.34709 7.87583 7.26812L4.59983 3.99312Z\" fill=\"#5F7696\"/>\n    </svg>\n  "
  };

  var FilterComponent = {
    data: function data() {
      return {
        filterState: 'closed' // open, closed
      };
    },

    props: ['filters', 'loading'],
    emits: ['input', 'hints'],
    components: {
      IconOpen: IconOpen,
      IconItemClear: IconItemClear,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n    <div class=\"vue-tf-filter-ph\" v-if=\"loading\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\t\t<div class=\"vue-tf-filter\" v-else>\n    <pre>{{filters}}</pre>\n\n      <div class=\"twpx-vue-filter--closed\" v-if=\"filterState === 'closed'\">\n\n        <div class=\"twpx-vue-filter__open-button\">\n          <IconOpen />\n          <span>\u0424\u0438\u043B\u044C\u0442\u0440</span>\n        </div>\n\n        <div class=\"twpx-vue-filter__open-text\" v-if=\"filledControls.length === 0\">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B, \u0447\u0442\u043E\u0431\u044B \u0441\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440\u043A\u0443.</div>\n\n        <div class=\"twpx-vue-filter__filled-item\" v-for=\"control in filledControls\" :key=\"control.id\">\n          <div class=\"twpx-vue-filter__filled-item__text\">\n            <span>{{ control.label }}:</span>\n            <b>{{ getValue(control) }}</b>\n          </div>\n          <IconItemClear />\n        </div>\n\n        <div class=\"twpx-vue-filter__filled-items--mobile\">\n          <div class=\"twpx-vue-filter__filled-item\" v-for=\"control in filledControls\" :key=\"control.id\">\n            <div class=\"twpx-vue-filter__filled-item__text\">\n              <span>{{ control.label }}:</span>\n              <b>{{ getValue(control) }}</b>\n            </div>\n            <IconItemClear />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"twpx-vue-filter--open\">\n        <div class=\"twpx-vue-filter__open-head\">\n          <h3 class=\"twpx-vue-filter__open-title\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B</h3>\n          <div class=\"twpx-vue-filter__open-clear\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B</div>\n        </div>\n        <div class=\"twpx-vue-filter__controls\">\n          <ControlComponent v-for=\"control in filters\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n        </div>\n        <div class=\"twpx-vue-filter__close-button\">\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C</div>\n      </div>\n      \n    </div>\n\t",
    computed: {
      filledControls: function filledControls() {
        return this.filters.filter(function (c) {
          if (!c.value) return false;
          if (c.propery === 'date' && c.type === 'range') {
            if (!c.value[0] || !c.value[1]) {
              return false;
            }
          }
          return true;
        });
      }
    },
    methods: {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.$emit('input', {
          control: control,
          value: value,
          checked: checked
        });
      },
      hints: function hints(_ref2) {
        var type = _ref2.type,
          control = _ref2.control,
          action = _ref2.action,
          value = _ref2.value;
        this.$emit('hints', {
          type: type,
          control: control,
          action: action,
          value: value
        });
      },
      getValue: function getValue(c) {
        if (c.property === 'select' && c.type === 'dropdown') {
          var _c$options$find;
          return (_c$options$find = c.options.find(function (o) {
            return o.code === c.value;
          })) === null || _c$options$find === void 0 ? void 0 : _c$options$find.label;
        } else if (c.property === 'date' && c.type === 'range') {
          if (c.value[0] && c.value[1]) {
            return "".concat(c.value[0], " - ").concat(c.value[1]);
          }
        }
        return c.value;
      }
    }
  };

  exports.FilterComponent = FilterComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
