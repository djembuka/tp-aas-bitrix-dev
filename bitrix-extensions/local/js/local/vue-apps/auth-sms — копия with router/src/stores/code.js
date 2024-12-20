import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const codeStore = defineStore('code', {
  state: () => ({
    lang: {},
    inputs: [
      { id: 'input1', value: '5' },
      { id: 'input2', value: '5' },
      { id: 'input3', value: '5' },
      { id: 'input4', value: '5' },
      { id: 'input5', value: '5' },
      { id: 'input6', value: '5' },
    ],
    uuid: '',
    submitProps: { large: true, secondary: true, wide: true },
    timerProps: { small: true, secondary: true },
    timer: 5,
    clearInputs: false,
    invalidInputs: true,
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
      return this.inputs.some((i) => !i.value || i.invalid || i.disabled);
    },
    buttonTimerText() {
      return this.timer
        ? `${this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER} ${new Date(
            this.timer * 1000
          )
            .toISOString()
            .substring(14, 19)}`
        : this.lang.AUTH_SMS_CODE_BUTTON_SUBMIT_TIMER;
    },
    timerDisabled() {
      return !!this.timer;
    },
  },
  actions: {
    setInvalidInputs(val) {
      this.invalidInputs = val;
    },
    buttonTimer(start) {
      this.timer = Number(start);
      const intervalId = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(intervalId);
        } else {
          this.timer--;
        }
      }, 1000);
    },
    changeButtonProps(obj, type) {
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          this[`${type}Props`][key] = true;
        } else {
          delete this[`${type}Props`][key];
        }
      });
    },
    changeInputValue({ control, value }) {
      control.value = value;
    },
    runCheck() {
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
              this.changeButtonProps({ 'load-circle': false }, 'submit');
              window.location.href = response.data.redirect;
            },
            (response) => {
              this.changeButtonProps({ 'load-circle': false }, 'submit');

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
                this.timer = NaN;
              } else {
                //2001 2002 2003 2004 2005
                //E1
                //invalid inputs
                //invalid message
                this.invalidInputs = true;
                //disabled button
                //timer
                if (
                  response.errors[0].customData &&
                  response.errors[0].customData.remain
                ) {
                  this.timer = response.errors[0].customData.remain;
                  this.buttonTimer(this.timer);
                } else {
                  this.timer = 0;
                }
              }
            }
          );
      }
    },
  },
});
