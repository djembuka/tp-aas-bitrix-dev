import { defineStore } from 'ui.vue3.pinia';

export const smsStore = defineStore('sms', {
  state: () => ({
    lang: {},
    state: 'A1',
    tel: {
      property: 'tel',
      id: 'id0',
      name: 'PHONE',
      label: '',
      value: '',
      required: true,
      disabled: false,
    },
    checkbox: {
      property: 'checkbox',
      id: 'id1',
      name: 'NUM',
      label: '',
      value: '',
      required: false,
      disabled: false,
    },
    submitProps: { large: true, secondary: true, wide: true },
    error: null,
    errorButton: false,
    timer: 0,
  }),
  getters: {
    buttonDisabled() {
      let result = false;

      if (this.state === 'C1' && this.timer) {
        result = true;
      } else {
        result =
          this.tel.setInvalidWatcher ||
          this.tel.disabled ||
          !this.tel.value.trim() ||
          !this.checkbox.value;
      }
      return result;
    },
    buttonSubmitTimerText() {
      return this.timer
        ? `${this.lang.AUTH_SMS_SMS_BUTTON_SUBMIT_TIMER} ${new Date(
            this.timer * 1000
          )
            .toISOString()
            .substring(14, 5)}`
        : '';
    },
  },
  actions: {
    buttonSubmitTimer(start) {
      this.timer = Number(start);
      const intervalId = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(intervalId);
        } else {
          this.timer--;
        }
      }, 1000);
    },
    changeSubmitProps(obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          this.submitProps[key] = true;
        } else {
          delete this.submitProps[key];
        }
      });
    },
    changeControlValue({ control, value }) {
      control.value = value;
      if (control.property === 'tel') {
        control.setInvalidWatcher = false;
      }
    },
    runFormSubmit() {
      const self = this;

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.tel.value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              //show code
              this.tel.focusWatcher = false;
              this.tel.setInvalidWatcher = false;
              this.tel.regexp_description = '';
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              this.error = response.errors[0];

              if (String(response.errors[0].code) === String(1003)) {
                //code
                this.state = 'code';

                //C1 1002
                // this.state = 'C1';
                // this.buttonSubmitTimer(127); //response.errors[0].customData.remain

                //B1 1001
                // this.state = 'B1';
                // this.tel.disabled = true;
                // this.errorButton = this.lang.AUTH_SMS_ERROR_BUTTON;
                //A2
                // this.state = 'A2';
                // this.tel.focusWatcher = true;
                // this.tel.setInvalidWatcher = true;
                // this.tel.regexp_description = lang.AUTH_SMS_ERROR_1003;
              } else if (String(response.errors[0].code) === String(1005)) {
                //A3
                this.state = 'A3';
                this.tel.focusWatcher = true;
                this.tel.setInvalidWatcher = true;
                this.tel.regexp_description = lang.AUTH_SMS_ERROR_1005;
              }
            }
          );
      }
    },
  },
});
