/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlComponent) {
  'use strict';

  var Placeholder = {
    template: "\n    <div class=\"vue-tf-filter-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  "
  };

  var IconOpen = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M5.27947 13.0643L4.03407 9.83735C3.9333 9.5768 3.8003 9.3312 3.63707 9.1091L1.62286 6.35305C0.0116969 4.14907 1.73672 0.984043 4.39076 1.00006H11.703C14.2623 0.984043 15.9863 4.14907 14.3751 6.35305L12.3609 9.1091C12.1977 9.33227 12.0647 9.5768 11.9639 9.83735L10.7185 13.0643C9.72302 15.6452 6.27398 15.6452 5.27846 13.0643H5.27947Z\" fill=\"white\"/>\n      <path d=\"M5.18475 4.68618H11.1337M6.62865 8.02419H9.37035M7.64835 11.3611H8.35065M5.27947 13.0643L4.03407 9.83735C3.9333 9.5768 3.8003 9.3312 3.63707 9.1091L1.62286 6.35305C0.0116969 4.14907 1.73672 0.984043 4.39076 1.00006H11.703C14.2623 0.984043 15.9863 4.14907 14.3751 6.35305L12.3609 9.1091C12.1977 9.33227 12.0647 9.5768 11.9639 9.83735L10.7185 13.0643C9.72302 15.6452 6.27398 15.6452 5.27846 13.0643H5.27947Z\" stroke=\"#231F20\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n    </svg>\n\t"
  };

  var IconItemClear = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\">\n      <path d=\"M4.59983 3.99312L7.87383 0.71912C7.91698 0.681154 7.9519 0.634756 7.97643 0.582784C8.00097 0.530812 8.0146 0.474366 8.0165 0.416925C8.01839 0.359483 8.0085 0.302262 7.98744 0.248787C7.96638 0.195312 7.9346 0.146715 7.89404 0.105991C7.85349 0.0652659 7.80503 0.0332758 7.75164 0.0119911C7.69825 -0.0092936 7.64107 -0.0194221 7.58363 -0.0177704C7.52618 -0.0161188 7.46967 -0.00272195 7.4176 0.0215947C7.36552 0.0459114 7.31898 0.080633 7.28083 0.12362L4.00633 3.40012L0.732332 0.12362C0.653364 0.0446521 0.54626 0.000288244 0.434582 0.000288244C0.322904 0.000288244 0.2158 0.0446521 0.136832 0.12362C0.0578639 0.202589 0.0135 0.309692 0.0135 0.42137C0.0135 0.533048 0.0578639 0.640152 0.136832 0.71912L3.41083 3.99312L0.123332 7.28112C0.0443639 7.36009 0 7.46719 0 7.57887C0 7.69055 0.0443639 7.79765 0.123332 7.87662C0.2023 7.95559 0.309404 7.99995 0.421082 7.99995C0.53276 7.99995 0.639864 7.95559 0.718832 7.87662L4.00633 4.58912L7.28033 7.86362C7.3593 7.94259 7.4664 7.98695 7.57808 7.98695C7.68976 7.98695 7.79686 7.94259 7.87583 7.86362C7.9548 7.78465 7.99916 7.67755 7.99916 7.56587C7.99916 7.45419 7.9548 7.34709 7.87583 7.26812L4.59983 3.99312Z\" fill=\"#5F7696\"/>\n    </svg>\n  "
  };

  var FilterClosed = {
    props: ['filterState', 'filledControls'],
    emits: ['changeState', 'input'],
    components: {
      IconOpen: IconOpen,
      IconItemClear: IconItemClear
    },
    template: "\n    <div class=\"twpx-vue-filter--closed\">\n\n      <div class=\"twpx-vue-filter__open-button\" @click=\"$emit('changeState', 'open')\">\n        <IconOpen />\n        <span>\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C</span>\n      </div>\n\n      <div class=\"twpx-vue-filter__open-text\" v-if=\"filledControls.length === 0\">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B, \u0447\u0442\u043E\u0431\u044B \u0441\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440\u043A\u0443.</div>\n\n      <div class=\"twpx-vue-filter__filled-items\" v-if=\"filledControls.length\">\n\n        <div class=\"twpx-vue-filter__filled-item\" v-for=\"control in filledControls\" :key=\"control.id\">\n          <div class=\"twpx-vue-filter__filled-item__text\">\n            <span>{{ control.label }}:</span>\n            <b>{{ getValue(control) }}</b>\n          </div>\n          <IconItemClear @click=\"clear(control)\" />\n        </div>\n\n      </div>\n    </div>\n  ",
    methods: {
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
        } else if (c.property === 'hint') {
          var _c$value;
          return (_c$value = c.value) === null || _c$value === void 0 ? void 0 : _c$value.value;
        }
        return c.value;
      },
      clear: function clear(control) {
        this.$emit('input', {
          control: control,
          value: control.property === 'date' ? null : ''
        });
      }
    }
  };

  var IconClose = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M4.9064 7.51473L8 4.5M8 4.5L11.0936 7.51473M8 4.5V11.1239M12.375 15L3.62498 15C2.17525 15 1 13.8247 1 12.375L1 3.625C1 2.17525 2.17525 1 3.62499 1L12.375 1C13.8248 1 15 2.17525 15 3.625V12.375C15 13.8247 13.8248 15 12.375 15Z\" stroke=\"#5F7696\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n\t"
  };

  var IconClear = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" fill=\"none\">\n      <path d=\"M12.2507 2.0014H9.49946V1.50078C9.4996 1.30374 9.46091 1.10861 9.38561 0.926536C9.31031 0.74446 9.19986 0.579006 9.06059 0.439632C8.92132 0.300258 8.75594 0.189695 8.57392 0.11426C8.3919 0.038826 8.1968 -5.14326e-08 7.99976 0H5.99837C5.60062 0 5.21917 0.158003 4.93792 0.43925C4.65668 0.720497 4.49867 1.10195 4.49867 1.49969V2.00031H1.74743C1.41597 2.0006 1.09819 2.13247 0.863917 2.36695C0.629644 2.60143 0.498048 2.91932 0.498048 3.25078V4.25094C0.497905 4.31658 0.510728 4.3816 0.535781 4.44227C0.560835 4.50294 0.597625 4.55806 0.64404 4.60448C0.690455 4.65089 0.74558 4.68768 0.806251 4.71274C0.866922 4.73779 0.931944 4.75062 0.997584 4.75047H13.0005C13.0662 4.75062 13.1313 4.7378 13.192 4.71276C13.2528 4.68772 13.308 4.65095 13.3545 4.60454C13.401 4.55814 13.4379 4.50303 13.463 4.44235C13.4882 4.38167 13.5012 4.31663 13.5012 4.25094V3.25078C13.5009 2.91932 13.369 2.60154 13.1345 2.36727C12.9001 2.13299 12.5822 2.0014 12.2507 2.0014ZM5.49883 1.50078C5.49912 1.36838 5.55184 1.24149 5.64546 1.14787C5.73908 1.05425 5.86597 1.00153 5.99837 1.00124H7.99976C8.13216 1.00153 8.25905 1.05425 8.35267 1.14787C8.44629 1.24149 8.49901 1.36838 8.4993 1.50078V2.0014H5.49883V1.50078Z\" fill=\"#5F7696\"/>\n      <path d=\"M1.45003 5.74812C1.42889 5.7481 1.40796 5.75237 1.38851 5.76068C1.36907 5.76899 1.35152 5.78117 1.33693 5.79647C1.32233 5.81178 1.311 5.82989 1.30362 5.8497C1.29624 5.86952 1.29297 5.89063 1.294 5.91175L1.70684 14.5707C1.72469 14.9561 1.89043 15.3196 2.16956 15.5859C2.44869 15.8521 2.81973 16.0004 3.20545 16H10.8004C11.1857 15.9999 11.5562 15.8513 11.8349 15.5851C12.1135 15.319 12.279 14.9557 12.2968 14.5707L12.7097 5.91175C12.7107 5.89063 12.7074 5.86952 12.7 5.8497C12.6926 5.82989 12.6813 5.81178 12.6667 5.79647C12.6521 5.78117 12.6346 5.76899 12.6151 5.76068C12.5957 5.75237 12.5748 5.7481 12.5536 5.74812H1.45003ZM9.00376 6.99751C9.00975 6.8689 9.06505 6.74755 9.15818 6.65866C9.2513 6.56977 9.3751 6.52017 9.50384 6.52017C9.63258 6.52017 9.75637 6.56977 9.8495 6.65866C9.94263 6.74755 9.99793 6.8689 10.0039 6.99751V13.4991C10.0071 13.5667 9.99647 13.6343 9.97276 13.6977C9.94904 13.7611 9.91272 13.819 9.86597 13.868C9.81922 13.917 9.76303 13.956 9.70079 13.9826C9.63854 14.0092 9.57154 14.023 9.50384 14.023C9.43614 14.023 9.36914 14.0092 9.30689 13.9826C9.24465 13.956 9.18846 13.917 9.14171 13.868C9.09496 13.819 9.05863 13.7611 9.03492 13.6977C9.01121 13.6343 9.00061 13.5667 9.00376 13.4991V6.99751ZM6.50283 6.99751C6.50283 6.86488 6.55551 6.73768 6.6493 6.6439C6.74308 6.55011 6.87028 6.49743 7.00291 6.49743C7.13553 6.49743 7.26273 6.55011 7.35651 6.6439C7.4503 6.73768 7.50298 6.86488 7.50298 6.99751V13.4991C7.50298 13.6317 7.4503 13.7589 7.35651 13.8527C7.26273 13.9465 7.13553 13.9991 7.00291 13.9991C6.87028 13.9991 6.74308 13.9465 6.6493 13.8527C6.55551 13.7589 6.50283 13.6317 6.50283 13.4991V6.99751ZM4.00189 6.99751C4.00788 6.8689 4.06318 6.74755 4.15631 6.65866C4.24944 6.56977 4.37323 6.52017 4.50197 6.52017C4.63071 6.52017 4.75451 6.56977 4.84763 6.65866C4.94076 6.74755 4.99606 6.8689 5.00205 6.99751V13.4991C5.0052 13.5667 4.9946 13.6343 4.97089 13.6977C4.94718 13.7611 4.91085 13.819 4.8641 13.868C4.81736 13.917 4.76116 13.956 4.69892 13.9826C4.63667 14.0092 4.56968 14.023 4.50197 14.023C4.43427 14.023 4.36727 14.0092 4.30503 13.9826C4.24278 13.956 4.18659 13.917 4.13984 13.868C4.0931 13.819 4.05677 13.7611 4.03306 13.6977C4.00935 13.6343 3.99875 13.5667 4.00189 13.4991V6.99751Z\" fill=\"#5F7696\"/>\n    </svg>\n\t"
  };

  var FilterOpen = {
    components: {
      IconClose: IconClose,
      IconClear: IconClear,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    props: ['filters'],
    emits: ['input', 'hints'],
    template: "\n    <div class=\"twpx-vue-filter--open\">\n\n      <div class=\"twpx-vue-filter__open-head\">\n\n        <h3 class=\"twpx-vue-filter__open-title\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B</h3>\n\n        <div class=\"twpx-vue-filter__clear-button\" @click=\"reset\">\n          <IconClear />\n          <span>\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440</span>\n        </div>\n\n      </div>\n\n      <div class=\"twpx-vue-filter__controls\">\n        <ControlComponent v-for=\"control in filters\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\" />\n      </div>\n\n      <div class=\"twpx-vue-filter__close-button\" @click=\"$emit('changeState', 'closed')\">\n        <IconClose />\n        <span>\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C</span>\n      </div>\n    </div>\n  ",
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
      reset: function reset() {
        var _this = this;
        this.filters.forEach(function (control) {
          _this.$emit('input', {
            control: control,
            value: control.property === 'date' ? null : ''
          });
        });
      }
    }
  };

  var FilterComponent = {
    data: function data() {
      return {
        filterState: 'closed' // open, closed
      };
    },

    props: ['filters', 'loading'],
    emits: ['input', 'hints', 'reset'],
    components: {
      Placeholder: Placeholder,
      FilterClosed: FilterClosed,
      FilterOpen: FilterOpen
    },
    // language=Vue
    template: "\n    <Placeholder v-if=\"loading\" />\n\n\t\t<div class=\"vue-tf-filter\" v-else>\n\n      <FilterClosed v-if=\"filterState === 'closed'\" :filledControls=\"filledControls\" @changeState=\"changeState\" @input=\"input\" />\n\n      <FilterOpen v-else :filters=\"filters\" @input=\"input\" @hints=\"hints\" @changeState=\"changeState\" />\n      \n    </div>\n\t",
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
      changeState: function changeState(value) {
        this.filterState = value;
      },
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
      }
    }
  };

  exports.FilterComponent = FilterComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
