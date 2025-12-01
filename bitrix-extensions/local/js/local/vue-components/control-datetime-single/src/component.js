import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { ButtonComponent } from 'local.vue-components.button-component';

import { Icon } from './icon.js';
import { IconClear } from './IconClear.js';
import { IconLock } from './IconLock.js';
import './component.css';

export const ControlDatetimeSingle = {
  data() {
    return {
      open: false,
      hint: this.control.hint_external,
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
    };
  },
  components: {
    ControlDatepicker,
    ButtonComponent,
    Icon,
    IconLock,
  },
  template: `
    <div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--datetime': true,
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
        @update:model-value="update"
        @cleared="cleared"
        locale="ru"
        ref="controlDate"
        :format="'dd.MM.yyyy HH:mm'"
      >

        <template #time-picker="{ time, updateTime }">
          <div class="twpx-form-control-timecontainer">
            <div class="twpx-form-control-timeinput">
              <div class="twpx-form-control-timelabel">ЧЧ</div>
              <input type="text" name="MINUTES" :value="time.hours" @input="updateTime(+$event.target.value)" />
            </div>
            <div class="twpx-form-control-timeinput">
              <div class="twpx-form-control-timelabel">ММ</div>
              <input type="text" name="HOURS" :value="time.minutes" @input="updateTime(+$event.target.value, false)" />
            </div>
          </div>
        </template>

        <template #action-row="{ internalModelValue, selectDate }">
          <ButtonComponent text="Установить" :props="['secondary', 'small', 'wide']" @clickButton="selectDate" />
        </template>

      </ ControlDatepicker>
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
      if (this.date) {
        return this.date.split('/').reverse().join('.').replace(/^(\d{4})\.(\d{2})\.(\d{2})$/, '$2.$3.$1');
      }
      return ''
    },
    date: {
      get() {
        let date = this.control.value || null;
        if (typeof this.control.value === 'string') {
          const valueArray = this.control.value.split('.');
          if (valueArray.length && valueArray.length === 3) {
            date = `${valueArray[1]}/${valueArray[0]}/${valueArray[2]}`;
          }
        }
        return date;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    active() {
      let result = false;
      if (this.control.value && typeof this.control.value === 'string') {
        result = !!this.control.value;
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
    },
    onClosed() {
      this.open = false;
    },
    update(date) {
      this.date = this.formatDate(date);
      // this.$refs.controlDate.closeMenu();
      this.replaceClear();
    },
    formatDate(date) {
      const d = new Date(date);
      let day = String(d.getDate());
      let month = String(d.getMonth() + 1);

      day = day.length === 1 ? `0${day}` : day;
      month = month.length === 1 ? `0${month}` : month;

      return `${day}.${month}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    },
    replaceClear() {
      setTimeout(() => {
        const clear = this.$refs.control.querySelector('.dp--clear-btn');
        if (clear) {
          clear.innerHTML = IconClear;
        }
      }, 100);
    },
    cleared(args) {
      this.date = '';
    }
  },
  mounted() {
    this.replaceClear();
  },
};
