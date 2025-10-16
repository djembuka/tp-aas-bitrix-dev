/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlDatepicker) {
  'use strict';

  var Icon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M2.125 5.59998H14.375M3.70833 1V2.20014M12.625 1V2.19999M12.625 2.19999H3.875C2.42525 2.19999 1.25 3.2745 1.25 4.59998V12.6C1.25 13.9255 2.42525 15 3.875 15H12.625C14.0747 15 15.25 13.9255 15.25 12.6L15.25 4.59998C15.25 3.2745 14.0747 2.19999 12.625 2.19999ZM4.3125 8.4H12.1875M4.3125 11.6H12.1875\" stroke=\"#5F7696\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>"
  };

  var IconClear = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\">\n      <path d=\"M8.04995 6.98787L13.7795 1.25837C13.855 1.19193 13.9161 1.11073 13.959 1.01978C14.0019 0.928829 14.0258 0.830049 14.0291 0.729527C14.0324 0.629004 14.0151 0.528868 13.9783 0.435286C13.9414 0.341705 13.8858 0.25666 13.8148 0.185392C13.7438 0.114124 13.659 0.0581411 13.5656 0.0208929C13.4722 -0.0163553 13.3721 -0.0340802 13.2716 -0.0311898C13.1711 -0.0282994 13.0722 -0.00485496 12.981 0.0376992C12.8899 0.0802535 12.8085 0.141016 12.7417 0.216244L7.01132 5.95012L1.28183 0.216244C1.14363 0.0780497 0.956199 0.000412874 0.760763 0.000412874C0.565326 0.000412874 0.377895 0.0780497 0.2397 0.216244C0.101506 0.354438 0.0238691 0.54187 0.0238691 0.737307C0.0238691 0.932743 0.101506 1.12017 0.2397 1.25837L5.9692 6.98787L0.216075 12.7419C0.0778809 12.8801 0.000244141 13.0675 0.000244141 13.2629C0.000244141 13.4584 0.0778809 13.6458 0.216075 13.784C0.35427 13.9222 0.541701 13.9998 0.737138 13.9998C0.932574 13.9998 1.12001 13.9222 1.2582 13.784L7.01132 8.03087L12.7408 13.7612C12.879 13.8994 13.0665 13.9771 13.2619 13.9771C13.4573 13.9771 13.6448 13.8994 13.783 13.7612C13.9211 13.623 13.9988 13.4356 13.9988 13.2402C13.9988 13.0447 13.9211 12.8573 13.783 12.7191L8.04995 6.98787Z\" fill=\"#5F7696\"/>\n    </svg>";

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlDatetimeSingle = {
    data: function data() {
      return {
        open: false,
        hint: this.control.hint_external,
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null
      };
    },
    components: {
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker,
      Icon: Icon,
      IconLock: IconLock
    },
    template: "\n    <div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--date': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--open': open,\n      }\"\n      ref=\"control\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <Icon class=\"twpx-form-control__calendar-icon\" />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <ControlDatepicker\n        v-model=\"date\"\n        @open=\"onOpen\"\n        @closed=\"onClosed\"\n        locale=\"ru\"\n        ref=\"controlDate\"\n        :format=\"'dd.MM.yyyy hh:mm'\"\n      >\n\n        <template #action-row>\n          <div class=\"time-inputs\">\n            <input\n              v-model=\"hours\"\n              type=\"text\"\n              maxlength=\"2\"\n              placeholder=\"hh\"\n              @input=\"validateHours\"\n              class=\"time-input\"\n            />\n            :\n            <input\n              v-model=\"minutes\"\n              type=\"text\"\n              maxlength=\"2\"\n              placeholder=\"mm\"\n              @input=\"validateMinutes\"\n              class=\"time-input\"\n            />\n          </div>\n          <button\n            @click=\"selectDateTime\"\n            :disabled=\"!isValidTime\"\n            class=\"select-button\"\n          >\n            \u0412\u044B\u0431\u0440\u0430\u0442\u044C\n          </button>\n        </template>\n\n      </ ControlDatepicker>\n      <input type=\"hidden\" :name=\"controlName\" :value=\"dateFormatted\" />\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n  ",
    props: ['control'],
    emits: ['input'],
    computed: {
      dateFormatted: function dateFormatted() {
        if (this.date) {
          return this.date.split('/').reverse().join('.').replace(/^(\d{4})\.(\d{2})\.(\d{2})$/, '$2.$3.$1');
        }
        return '';
      },
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
      },
      hoursArray: function hoursArray() {
        var arr = [];
        for (var i = 0; i < 24; i++) {
          arr.push({
            text: i < 10 ? "0".concat(i) : i,
            value: i
          });
        }
        return arr;
      },
      minutesArray: function minutesArray() {
        var arr = [];
        for (var i = 0; i < 60; i++) {
          arr.push({
            text: i < 10 ? "0".concat(i) : i,
            value: i
          });
        }
        return arr;
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
        console.log(date);
        this.date = this.formatDate(date);
        this.$refs.controlDate.closeMenu();
        this.replaceClear();
      },
      formatDate: function formatDate(date) {
        var d = new Date(date);
        var day = String(d.getDate());
        var month = String(d.getMonth() + 1);
        day = day.length === 1 ? "0".concat(day) : day;
        month = month.length === 1 ? "0".concat(month) : month;
        return "".concat(day, ".").concat(month, ".").concat(d.getFullYear());
      },
      replaceClear: function replaceClear() {
        var _this = this;
        setTimeout(function () {
          var clear = _this.$refs.control.querySelector('.dp--clear-btn');
          if (clear) {
            clear.innerHTML = IconClear;
          }
        }, 100);
      },
      selectDate: function selectDate() {
        console.log(this.$refs.controlDate.value);
      }
    },
    mounted: function mounted() {
      this.replaceClear();
    }
  };

  exports.ControlDatetimeSingle = ControlDatetimeSingle;

}((this.BX.Controls = this.BX.Controls || {}),BX.Controls));
//# sourceMappingURL=component.bundle.js.map
