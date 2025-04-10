/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlDatepicker) {
  'use strict';

  var Icon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M2.125 5.59998H14.375M3.70833 1V2.20014M12.625 1V2.19999M12.625 2.19999H3.875C2.42525 2.19999 1.25 3.2745 1.25 4.59998V12.6C1.25 13.9255 2.42525 15 3.875 15H12.625C14.0747 15 15.25 13.9255 15.25 12.6L15.25 4.59998C15.25 3.2745 14.0747 2.19999 12.625 2.19999ZM4.3125 8.4H12.1875M4.3125 11.6H12.1875\" stroke=\"#5F7696\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>"
  };

  var ControlDateSingle = {
    data: function data() {
      return {
        open: false,
        hint: this.control.hint_external
      };
    },
    template: "\n    <div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--date': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--open': open,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <Icon class=\"twpx-form-control__calendar-icon\" />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <ControlDatepicker\n        v-model=\"date\"\n        @open=\"onOpen\"\n        @closed=\"onClosed\"\n        @date-update=\"update\"\n        locale=\"ru\"\n        ref=\"controlDate\"\n        :format=\"'dd.MM.yyyy'\"\n      >\n        <template #action-buttons></template>\n        <template #action-preview></template>\n        <template #time-picker></template>\n      </ControlDatepicker>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n  ",
    props: ['control'],
    emits: ['input'],
    computed: {
      date: {
        get: function get() {
          var date = this.control.value || null;
          if (typeof this.control.value === 'string') {
            var valueArray = this.control.value.split('.');
            if (valueArray.length && valueArray.length === 3) {
              date = "".concat(valueArray[1], "/").concat(valueArray[0], "/").concat(valueArray[2]);
            }
          }
          return date;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
        }
      },
      active: function active() {
        var result = false;
        if (this.control.value && typeof this.control.value === 'string') {
          result = !!this.control.value;
        }
        return result;
      },
      invalid: function invalid() {
        return false;
      },
      disabled: function disabled() {
        return this.control.disabled;
      }
    },
    methods: {
      onOpen: function onOpen() {
        this.open = true;
      },
      onClosed: function onClosed() {
        this.open = false;
      },
      update: function update(date) {
        this.date = this.formatDate(date);
        this.$refs.controlDate.closeMenu();
      },
      formatDate: function formatDate(date) {
        var d = new Date(date);
        var day = String(d.getDate());
        var month = String(d.getMonth() + 1);
        day = day.length === 1 ? "0".concat(day) : day;
        month = month.length === 1 ? "0".concat(month) : month;
        return "".concat(day, ".").concat(month, ".").concat(d.getFullYear());
      }
    },
    components: {
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker,
      Icon: Icon
    }
  };

  exports.ControlDateSingle = ControlDateSingle;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
