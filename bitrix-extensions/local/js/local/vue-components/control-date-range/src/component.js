import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import './component.css';

export const ControlDateRange = {
  data() {
    return {
      open: false,
      start: '',
      hint: this.control.hint_external,
      calendarIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15.9" height="17.499" viewBox="0 0 15.9 17.499">
        <g transform="translate(0.75 0.75)">
            <path d="M0,0V2.4" transform="translate(4)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path d="M0,0V2.4" transform="translate(10.4)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path d="M0,0H13.6" transform="translate(0.4 5.672)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path d="M14.4,4v6.8c0,2.4-1.2,4-4,4H4c-2.8,0-4-1.6-4-4V4C0,1.6,1.2,0,4,0h6.4C13.2,0,14.4,1.6,14.4,4Z" transform="translate(0 1.199)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path d="M.495.5H.5" transform="translate(9.662 8.859)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M.495.5H.5" transform="translate(9.662 11.26)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M.495.5H.5" transform="translate(6.701 8.859)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M.495.5H.5" transform="translate(6.701 11.26)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M.495.5H.5" transform="translate(3.74 8.859)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M.495.5H.5" transform="translate(3.74 11.26)" fill="none" stroke="#2d3142" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </g>
      </svg>`,
    };
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
    >
      <img
        :src="disabled"
        class="twpx-form-control__disabled-icon"
        v-if="false"
      />
      <div class="twpx-form-control__calendar-icon" v-html="calendarIcon"></div>
      <div class="twpx-form-control__label">{{ control.label }}</div>
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
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
  `,
  props: ['control'],
  emits: ['input'],
  computed: {
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
    },
    onClosed() {
      this.open = false;
    },
    onRangeStart(start) {
      this.start = start;
    },
    onRangeEnd(end) {
      this.date = [this.formatDate(this.start), this.formatDate(end)];
      this.$refs.controlDateRange.closeMenu();
    },
    formatDate(date) {
      const d = new Date(date);
      let day = String(d.getDate());
      let month = String(d.getMonth() + 1);

      day = day.length === 1 ? `0${day}` : day;
      month = month.length === 1 ? `0${month}` : month;

      return `${day}.${month}.${d.getFullYear()}`;
    },
  },
  components: {
    ControlDatepicker,
  },
};
