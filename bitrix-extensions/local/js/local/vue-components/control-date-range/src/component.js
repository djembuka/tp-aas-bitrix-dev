import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { Icon } from './Icon.js';
import { IconClear } from './IconClear.js';
import { IconLock } from './IconLock.js';
import './component.css';

export const ControlDateRange = {
  data() {
    return {
      open: false,
      start: '',
      hint: this.control.hint_external,
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
    };
  },
  components: {
    ControlDatepicker,
    Icon,
    IconLock,
  },
  template: `
    <div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--date': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
        'twpx-form-control--open': open,
      }"
      ref="control"
    >
      <IconLock
        class="twpx-form-control__disabled-icon"
        v-if="disabled"
      />
      <Icon class="twpx-form-control__calendar-icon" />
      <div class="twpx-form-control__label">{{ label }}</div>
      <ControlDatepicker
        v-model="date"
        @open="onOpen"
        @closed="onClosed"
        @range-start="onRangeStart"
        @range-end="onRangeEnd"
        locale="ru"
        range
        multi-calendars
        ref="controlDateRange"
        :format="'dd.MM.yyyy'"
      >
        <template #action-buttons></template>
        <template #action-preview></template>
        <template #time-picker></template
      ></ControlDatepicker>
      <input type="hidden" :name="controlName" :value="dateFormatted" />
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
  `,
  props: ['control'],
  emits: ['input'],
  computed: {
    label() {
      if (this.control.required && !this.control.label.includes('*')) {
        return `${this.control.label} *`
      }
      return this.control.label;
    },
    dateFormatted() {
      if (this.date && this.date.length) {
        const arr = this.date.map(d => d.split('/').reverse().join('.').replace(/^(\d{4})\.(\d{2})\.(\d{2})$/, '$2.$3.$1'));
        return `${arr[0]}-${arr[1]}`;
      }
      return ''
    },
    date: {
      get() {
        let date = [];
        if (
          this.control.value &&
          typeof this.control.value === 'object' &&
          this.control.value.length
        ) {
          this.control.value.forEach((d) => {
            if (typeof d === 'string') {
              const valueArray = d.split('.');
              if (valueArray.length && valueArray.length === 3) {
                date.push(`${valueArray[1]}/${valueArray[0]}/${valueArray[2]}`);
              }
            }
          });
        }

        return date;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    active() {
      let result = false;
      if (this.control.value && typeof this.control.value === 'object') {
        result = !!this.control.value.length;
      }
      return result;
    },
    invalid() {
      return false;
    },
    disabled() {
      return this.control.disabled;
    },
  },
  methods: {
    onOpen() {
      this.open = true;

      //чтобы иконки delete от multi были под календарём
      const multi = this.$refs.control.closest('.twpx-form-control-multi');
      if (multi) {
        multi.classList.add('twpx-form-control-multi--open');
      }
    },
    onClosed() {
      this.open = false;

      //чтобы иконки delete от multi были под календарём
      const multi = this.$refs.control.closest('.twpx-form-control-multi');
      if (multi) {
        multi.classList.remove('twpx-form-control-multi--open');
      }
    },
    onRangeStart(start) {
      this.start = start;
    },
    onRangeEnd(end) {
      this.date = [this.formatDate(this.start), this.formatDate(end)];
      this.$refs.controlDateRange.closeMenu();
      this.replaceClear();
    },
    formatDate(date) {
      const d = new Date(date);
      let day = String(d.getDate());
      let month = String(d.getMonth() + 1);

      day = day.length === 1 ? `0${day}` : day;
      month = month.length === 1 ? `0${month}` : month;

      return `${day}.${month}.${d.getFullYear()}`;
    },
    replaceClear() {
      setTimeout(() => {
        const clear = this.$refs.control.querySelector('.dp--clear-btn');
        if (clear) {
          clear.innerHTML = IconClear;
        }
      }, 100);
    },
  },
  mounted() {
    this.replaceClear();
  },
};
