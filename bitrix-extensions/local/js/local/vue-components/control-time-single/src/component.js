import { IconLock } from './IconLock.js';

import './component.css';

export const ControlTimeSingle = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control.hint_external,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  components: {
    IconLock,
  },
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--time': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }"
    >
      <IconLock
        class="twpx-form-control__disabled-icon"
        v-if="disabled"
      />
      <div class="twpx-form-control__label">{{ control.label }}</div>
      <input
        type="text"
        :id="controlId"
        :name="controlName"
        v-model="value"
        @focus="focus"
        @blur="blur"
        @keyup.enter="enter"
        @keydown="keydown"
        :disabled="disabled"
        ref="input"
        autocomplete="off"
        :placeholder="placeholder"
        class="twpx-form-control__input"
      />
      <div
        class="twpx-form-control__warning"
        v-html="warning"
        v-if="warning"
      ></div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    placeholder() {
      if (this.focused && !this.value.trim()) {
        return this.control.hint_internal;
      } else {
        return '';
      }
    },
    active() {
      return this.focused || !!this.control.value.trim();
    },
    invalid() {
      return (this.blured && !this.validate()) || this.setInvalidWatcher;
    },
    disabled() {
      return this.control.disabled;
    },
    validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher() {
      return this.control.focusWatcher;
    },
    setInvalidWatcher() {
      return this.control.setInvalidWatcher;
    },
  },
  watch: {
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
    setInvalidWatcher(val) {
      this.warning = val ? this.control.regexp_description : '';
    },
  },
  methods: {
    focus() {
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    enter() {
      this.$emit('enter');
    },
    keydown(e) {
      const key = e.key;
      // Разрешаем только цифры, двоеточие, Backspace, Delete, стрелки и Tab
      if (!/^\d$/.test(key) && key !== ':' && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
        e.preventDefault();
        return;
      }
      // Не даём ставить двоеточие в начало или если оно уже есть
      if (key === ':') {
        if (this.value.includes(':') || (this.$refs.input && this.$refs.input.selectionStart === 0)) {
          e.preventDefault();
          return;
        }
      }

      // Симулируем ввод
      let v = this.value.replace(/[^\d:]/g, '');
      let input = this.$refs.input;
      let pos = input ? input.selectionStart : v.length;
      let newValue = v;
      if (/^\d$/.test(key)) {
        // Проверка: если курсор сразу после двоеточия (первая цифра минут), не даём ввести > 5
        if (v.includes(':')) {
          const colonIndex = v.indexOf(':');
          if (pos === colonIndex + 1) {
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
      const colonIndex = newValue.indexOf(':');
      if (colonIndex !== -1) {
        let hours = newValue.slice(0, colonIndex);
        let minutes = newValue.slice(colonIndex + 1, colonIndex + 3);

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
            const num = parseInt(newValue);
            if (num >= 0 && num <= 2) {
              // 00, 01, 02 — ждём третью цифру или двоеточие
            } else if (num >= 10 && num <= 23) {
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
    inputtime(e) {
      const key = e.key;

      // Разрешаем только цифры, Backspace, Delete, стрелки и Tab
      if (!/^\d$/.test(key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
        e.preventDefault();
        return;
      }

      // Получаем значение без двоеточия
      let val = this.value.replace(':', '');

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
          const hours = parseInt(val.slice(0, 2));
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
          const minutes = parseInt(val.slice(2, 4));
          if (minutes > 59) {
            e.preventDefault();
            return;
          }
        }
      }
    },
    validate() {
      if (!this.control.required) {
        if (!this.value.trim()) {
          return true;
        } else if (this.value.length >= 5) {
          return true;
        }
        return false;
      } else if (this.control.required && this.value.trim()) {
        if (this.control.regexp) {
          const match = String(this.value.trim()).match(
            RegExp(this.control.regexp)
          );
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
    },
  },
};
