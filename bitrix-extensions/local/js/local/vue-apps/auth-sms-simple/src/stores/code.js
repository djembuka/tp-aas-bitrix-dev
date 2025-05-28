import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { authStore } from './auth.js';

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
    timerProps: { medium: true, secondary: true },
    timerEnd: 0,
    timer: 0,
    timerIntervalId: '',
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
    invertClearInputs() {
      this.clearInputs = !this.clearInputs;
    },
    setInvalidInputs(val) {
      this.invalidInputs = val;
    },
    buttonTimer(start) {
      this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
      this.timer = Number(start);
      clearInterval(this.timerIntervalId);

      this.timerIntervalId = setInterval(() => {
        if (this.timer <= 0) {
          clearInterval(this.timerIntervalId);
        } else {
          this.timer = this.timerEnd - Math.round(new Date().getTime() / 1000);
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
      if (String(value).length > 1) {
        value = String(value).substring(String(value).length - 1);
      }

      control.value = value;
    },
    runCheck() {
      if (window.BX) {
        BX.ajax
          .runComponentAction('twinpx:profile.edit', 'confirm', {
            mode: 'class',
            data: {
              code: this.code,
              uuid: this.uuid,
            },
            signedParameters: dataStore().signedParameters,
          })
          .then(
            (response) => {
              if (response.status === 'success' && response.data === true) {
                this.changeButtonProps({ 'load-circle': false }, 'submit');
                this.invertClearInputs();
                this.inputs.forEach((input) => {
                  input.disabled = true;
                  input.value = '';
                });
                dataStore().changeState('sms');
                authStore().setTelIsFilled(true);
                authStore().changeInterface('filled');
              }
            },
            (response) => {
              this.changeButtonProps({ 'load-circle': false }, 'submit');

              dataStore().error = response.errors[0].message;

              if (String(response.errors[0].code) === String(0)) {
                this.invertClearInputs();
                this.inputs.forEach((input) => {
                  input.disabled = true;
                  input.value = '';
                });
                this.timer = NaN;
              } else if (String(response.errors[0].code) === String(1001)) {
                //B2
                //error button
                //disabled inputs
                //disabled button
                dataStore().errorButton = true;
                this.invertClearInputs();
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
