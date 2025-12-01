/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlTimeSingle = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    components: {
      IconLock: IconLock
    },
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--time': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <div class=\"twpx-form-control__label\">{{ label }}</div>\n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keyup.enter=\"enter\"\n        @keydown=\"keydown\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      label: function label() {
        if (this.control.required && !this.control.label.includes('*')) {
          return "".concat(this.control.label, " *");
        }
        return this.control.label;
      },
      value: {
        get: function get() {
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.control.value.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate() || this.setInvalidWatcher;
      },
      disabled: function disabled() {
        return this.control.disabled;
      },
      validateWatcher: function validateWatcher() {
        return this.control.validateWatcher;
      },
      focusWatcher: function focusWatcher() {
        return this.control.focusWatcher;
      },
      setInvalidWatcher: function setInvalidWatcher() {
        return this.control.setInvalidWatcher;
      }
    },
    watch: {
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      },
      setInvalidWatcher: function setInvalidWatcher(val) {
        this.warning = val ? this.control.regexp_description : '';
      }
    },
    methods: {
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      },
      blur: function blur() {
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      keydown: function keydown(e) {
        var key = e.key;
        // Разрешаем только цифры, двоеточие, Backspace, Delete, стрелки и Tab
        if (!/^\d$/.test(key) && key !== ':' && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
          e.preventDefault();
          return;
        }
        // Не даём ставить двоеточие в начало или если оно уже есть
        if (key === ':') {
          if (this.value.includes(':') || this.$refs.input && this.$refs.input.selectionStart === 0) {
            e.preventDefault();
            return;
          }
        }

        // Симулируем ввод
        var v = this.value.replace(/[^\d:]/g, '');
        var input = this.$refs.input;
        var pos = input ? input.selectionStart : v.length;
        var newValue = v;
        if (/^\d$/.test(key)) {
          // Проверка: если курсор сразу после двоеточия (первая цифра минут), не даём ввести > 5
          if (v.includes(':')) {
            var _colonIndex = v.indexOf(':');
            if (pos === _colonIndex + 1) {
              if (parseInt(key) > 5) {
                e.preventDefault();
                return;
              }
            }
          }
          // Вставляем цифру в нужное место
          if (input && input.selectionStart !== input.selectionEnd) {
            newValue = v.slice(0, input.selectionStart) + key + v.slice(input.selectionEnd);
          } else {
            newValue = v.slice(0, pos) + key + v.slice(pos);
          }
        } else if (key === ':') {
          // Вставляем двоеточие в нужное место
          if (input && input.selectionStart !== input.selectionEnd) {
            newValue = v.slice(0, input.selectionStart) + ':' + v.slice(input.selectionEnd);
          } else {
            newValue = v.slice(0, pos) + ':' + v.slice(pos);
          }
        } else if (['Backspace', 'Delete'].includes(key)) {
          // Не форматируем, просто разрешаем удаление
          return;
        }

        // Проверки и автоформатирование
        var colonIndex = newValue.indexOf(':');
        if (colonIndex !== -1) {
          var hours = newValue.slice(0, colonIndex);
          var minutes = newValue.slice(colonIndex + 1, colonIndex + 3);

          // Проверка часов
          if (hours.length === 1) {
            if (hours === '0') {
              // Не разрешаем 0:xx, только 00:xx
              e.preventDefault();
              return;
            }
          } else if (hours.length === 2) {
            if (parseInt(hours) > 23) {
              e.preventDefault();
              return;
            }
          }

          // Проверка минут
          if (minutes.length > 0) {
            if (minutes.length > 2 || parseInt(minutes) > 59) {
              e.preventDefault();
              return;
            }
          }

          // Обрезаем лишние символы после минут
          newValue = hours + ':' + minutes;
        } else {
          // Нет двоеточия, автоформатируем по правилам
          if (/^\d$/.test(key)) {
            if (newValue.length === 1) {
              if (parseInt(newValue) >= 3 && parseInt(newValue) <= 9) {
                // 3-9 → сразу ставим двоеточие
                newValue = newValue + ':';
              }
            } else if (newValue.length === 2) {
              var num = parseInt(newValue);
              if (num >= 0 && num <= 2) ; else if (num >= 10 && num <= 23) {
                // 10-23 → сразу ставим двоеточие
                newValue = newValue + ':';
              } else if (num >= 3 && num <= 9) {
                // 3-9 (например, 39) — невалидно, оставляем только первую цифру с двоеточием
                newValue = newValue[0] + ':';
              } else {
                // Всё остальное невалидно
                e.preventDefault();
                return;
              }
            } else if (newValue.length === 3) {
              // 00X, 01X, 02X — превращаем в 00:X, 01:X, 02:X
              if (newValue[0] === '0' && (newValue[1] === '0' || newValue[1] === '1' || newValue[1] === '2')) {
                newValue = newValue.slice(0, 2) + ':' + newValue[2];
              } else {
                e.preventDefault();
                return;
              }
            } else if (newValue.length > 3) {
              // Не даём ввести больше 4 цифр без двоеточия
              e.preventDefault();
              return;
            }
          }
        }
        // Устанавливаем новое значение
        this.value = newValue;
        e.preventDefault();
      },
      inputtime: function inputtime(e) {
        var key = e.key;

        // Разрешаем только цифры, Backspace, Delete, стрелки и Tab
        if (!/^\d$/.test(key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
          e.preventDefault();
          return;
        }

        // Получаем значение без двоеточия
        var val = this.value.replace(':', '');

        // Если нажата цифра
        if (/^\d$/.test(key)) {
          if (val.length >= 4) {
            e.preventDefault();
            return;
          }
          // Симулируем ввод
          val += key;
          // Проверяем часы
          if (val.length === 1 && parseInt(val[0]) > 2) {
            e.preventDefault();
            return;
          }
          if (val.length === 2) {
            var hours = parseInt(val.slice(0, 2));
            if (hours > 23) {
              e.preventDefault();
              return;
            }
          }
          // Проверяем минуты
          if (val.length === 3) {
            if (parseInt(val[2]) > 5) {
              e.preventDefault();
              return;
            }
          }
          if (val.length === 4) {
            var minutes = parseInt(val.slice(2, 4));
            if (minutes > 59) {
              e.preventDefault();
              return;
            }
          }
        }
      },
      validate: function validate() {
        if (!this.control.required) {
          if (!this.value.trim()) {
            return true;
          } else if (this.value.length >= 5) {
            return true;
          }
          return false;
        } else if (this.control.required && this.value.trim()) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else if (this.value.length >= 5) {
            return true;
          } else {
            return false;
          }
        } else if (this.control.required && !this.value.trim()) {
          return false;
        }
        return true;
      }
    }
  };

  exports.ControlTimeSingle = ControlTimeSingle;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
