import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { codeStore } from './code.js';

export const smsStore = defineStore('sms', {
  state: () => ({
    lang: {},
    state: 'A1',
    controls: [
      {
        property: 'tel',
        id: 'id0',
        name: 'PHONE',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
      {
        property: 'checkbox',
        id: 'id1',
        name: 'NUM',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
    ],
    submitProps: { large: true, secondary: true, wide: true },
    timer: 0,
  }),
  getters: {
    buttonDisabled() {
      let result = false;

      if (this.state === 'C1' && this.timer) {
        result = true;
      } else {
        result =
          this.controls[0].setInvalidWatcher ||
          this.controls[0].disabled ||
          !this.controls[0].value.trim() ||
          this.controls[0].value.trim().length < 11 ||
          !this.controls[1].value;
      }
      return result;
    },
    buttonSubmitTimerText() {
      return this.timer
        ? `${this.lang.AUTH_SMS_SMS_BUTTON_SUBMIT_TIMER} ${new Date(
            this.timer * 1000
          )
            .toISOString()
            .substring(14, 19)}`
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
    input({ control, value }) {
      control.value = value;
      if (control.property === 'tel') {
        control.setInvalidWatcher = false;
      }
    },
    runSend() {
      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.controls[0].value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });
              dataStore().error = '';

              //show code
              this.controls[0].focusWatcher = false;
              this.controls[0].setInvalidWatcher = false;
              this.controls[0].regexp_description = '';
              dataStore().errorButton = '';

              codeStore().uuid = response.data.UUID;
              codeStore().timer = response.data.remain || NaN;
              this.$router.push('/two-cols/code');

              const tel = this.controls[0].value.split('-');
              dataStore().info = `${
                dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE
              } ${tel[0].substring(0, tel[0].length - 3)}...-..-${tel[2]}`;
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              dataStore().error = response.errors[0].message;

              if (String(response.errors[0].code) === String(1001)) {
                //B1
                this.state = 'B1';
                this.controls[0].disabled = true;
                dataStore().errorButton = this.lang.AUTH_SMS_SMS_ERROR_BUTTON;
              } else if (String(response.errors[0].code) === String(1002)) {
                //C1
                this.state = 'C1';
                this.buttonSubmitTimer(response.errors[0].customData.remain);
              } else if (String(response.errors[0].code) === String(1003)) {
                //A2
                this.state = 'A2';
                this.controls[0].focusWatcher = true;
                this.controls[0].setInvalidWatcher = true;
                this.controls[0].regexp_description =
                  response.errors[0].message || '';
              } else if (String(response.errors[0].code) === String(1004)) {
                //B2
              } else if (String(response.errors[0].code) === String(1005)) {
                //A3
                this.state = 'A3';
                this.controls[0].focusWatcher = true;
                this.controls[0].setInvalidWatcher = true;
                this.controls[0].regexp_description =
                  response.errors[0].message || '';
              } else if (String(response.errors[0].code) === String(1006)) {
                //A3
                this.state = 'A3';
                this.controls[0].focusWatcher = true;
                this.controls[0].setInvalidWatcher = true;
                this.controls[0].regexp_description =
                  response.errors[0].message || '';
              }
            }
          );
      }
    },
  },
});
