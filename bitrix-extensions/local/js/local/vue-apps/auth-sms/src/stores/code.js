import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const codeStore = defineStore('code', {
  state: () => ({
    lang: {},
    inputs: [
      { id: 'input1', value: '' },
      { id: 'input2', value: '' },
      { id: 'input3', value: '' },
      { id: 'input4', value: '' },
      { id: 'input5', value: '' },
      { id: 'input6', value: '' },
    ],
    uuid: '',
    submitProps: { large: true, secondary: true, wide: true },
    timerProps: { small: true, secondary: true },
    timer: 20,
    clearInputs: false,
  }),
  getters: {
    code() {
      return this.inputs.reduce(
        (accumulator, currentValue) =>
          String(accumulator) + String(currentValue.value),
        ''
      );
    },
    buttonDisabled() {
      return this.inputs.some((i) => !i.value);
    },
    buttonSubmitTimerText() {
      return this.timer
        ? `${this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER} ${new Date(
            this.timer * 1000
          )
            .toISOString()
            .substring(14, 19)}`
        : '';
    },
    timerDisabled() {
      return false;
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
    changeInputValue({ control, value }) {
      control.value = value;
    },
    runFormSubmit() {
      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.check', {
            data: {
              code: this.code,
              uuid: this.uuid,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });
              window.location.href = response.data.redirect;
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              dataStore().error = response.errors[0].message;

              if (String(response.errors[0].code) === String(1001)) {
                //B2
                //error button
                //disabled inputs
                //disabled button
                dataStore().errorButton = true;
                this.clearInputs = !this.clearInputs;
                this.inputs.forEach((input) => {
                  input.disabled = true;
                  input.value = '';
                });
              } else if (String(response.errors[0].code) === String(1002)) {
                //E1
                //invalid inputs
                //invalid message
                //disabled button
                //timer
              } else if (String(response.errors[0].code) === String(1003)) {
                //disabled button
                //timer
              } else if (String(response.errors[0].code) === String(1004)) {
                //enabled button
                //timer
              } else if (String(response.errors[0].code) === String(1005)) {
              }
            }
          );
      }
    },
  },
});
