/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlDatepicker) {
  'use strict';

  var ControlDateRange = {
    data: function data() {
      return {
        open: false,
        start: '',
        hint: this.control.hint_external,
        calendarIcon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.9\" height=\"17.499\" viewBox=\"0 0 15.9 17.499\">\n        <g transform=\"translate(0.75 0.75)\">\n            <path d=\"M0,0V2.4\" transform=\"translate(4)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n            <path d=\"M0,0V2.4\" transform=\"translate(10.4)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n            <path d=\"M0,0H13.6\" transform=\"translate(0.4 5.672)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n            <path d=\"M14.4,4v6.8c0,2.4-1.2,4-4,4H4c-2.8,0-4-1.6-4-4V4C0,1.6,1.2,0,4,0h6.4C13.2,0,14.4,1.6,14.4,4Z\" transform=\"translate(0 1.199)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(9.662 8.859)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(9.662 11.26)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(6.701 8.859)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(6.701 11.26)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(3.74 8.859)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n            <path d=\"M.495.5H.5\" transform=\"translate(3.74 11.26)\" fill=\"none\" stroke=\"#2d3142\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>\n        </g>\n      </svg>"
      };
    },
    template: "\n    <div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--date': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--open': open,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <div class=\"twpx-form-control__calendar-icon\" v-html=\"calendarIcon\"></div>\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <ControlDatepicker\n        v-model=\"date\"\n        @open=\"onOpen\"\n        @closed=\"onClosed\"\n        @range-start=\"onRangeStart\"\n        @range-end=\"onRangeEnd\"\n        locale=\"ru\"\n        range\n        multi-calendars\n        ref=\"controlDateRange\"\n        :format=\"'dd.MM.yyyy'\"\n      >\n        <template #action-buttons></template>\n        <template #action-preview></template>\n        <template #time-picker></template\n      ></ControlDatepicker>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n  ",
    props: ['control'],
    emits: ['input'],
    computed: {
      date: {
        get: function get() {
          var date = [];
          if (this.control.value && babelHelpers["typeof"](this.control.value) === 'object' && this.control.value.length) {
            this.control.value.forEach(function (d) {
              if (typeof d === 'string') {
                var valueArray = d.split('.');
                if (valueArray.length && valueArray.length === 3) {
                  date.push("".concat(valueArray[1], "/").concat(valueArray[0], "/").concat(valueArray[2]));
                }
              }
            });
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
        if (this.control.value && babelHelpers["typeof"](this.control.value) === 'object') {
          result = !!this.control.value.length;
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
      onRangeStart: function onRangeStart(start) {
        this.start = start;
      },
      onRangeEnd: function onRangeEnd(end) {
        this.date = [this.formatDate(this.start), this.formatDate(end)];
        this.$refs.controlDateRange.closeMenu();
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
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker
    }
  };

  exports.ControlDateRange = ControlDateRange;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
