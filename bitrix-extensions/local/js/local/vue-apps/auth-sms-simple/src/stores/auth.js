import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { codeStore } from './code.js';

export const authStore = defineStore('auth', {
  state: () => ({
    lang: {},
    state: 'A1',
    interface: 'add',
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
    deleteProps: { icon: true, delete: true, medium: true },
    timerEnd: 0,
    timer: 0,
    telIsFilled: false,
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
    changeInterface(value) {
      this.interface = value;

      const tel = this.controls.find((c) => c.property === 'tel');
      const checkbox = this.controls.find((c) => c.property === 'checkbox');

      switch (value) {
        case 'add':
          this.controls.forEach((c) => {
            c.disabled = false;
          });
          tel.value = '';
          checkbox.value = false;
          break;
        case 'filled':
          this.controls.forEach((c) => {
            c.disabled = true;
          });
          break;
        case 'change':
          this.controls.forEach((c) => {
            c.disabled = false;
          });
          checkbox.value = false;
          break;
      }
    },
    setTelIsFilled(value) {
      this.telIsFilled = value;
    },
    changeTel() {
      this.controls.find((c) => c.property === 'tel').disabled = false;
    },
    buttonSubmitTimer(start) {
      this.timerEnd = Math.round(new Date().getTime() / 1000) + Number(start);
      this.timer = Number(start);
      const intervalId = setInterval(() => {
        if (this.timer <= 0) {
          clearInterval(intervalId);
        } else {
          this.timer = this.timerEnd - Math.round(new Date().getTime() / 1000);
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
    changeDeleteProps(obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          this.deleteProps[key] = true;
        } else {
          delete this.deleteProps[key];
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
      this.changeSubmitProps({ 'load-circle': true });
      const telControl = this.controls.find((c) => c.property === 'tel');
      const phone = telControl.value;

      const method = this.interface === 'add' ? 'add' : 'update';

      if (window.BX) {
        BX.ajax
          .runComponentAction('twinpx:profile.edit', method, {
            mode: 'class',
            data: {
              phone,
            },
            signedParameters: dataStore().signedParameters,
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });
              dataStore().setError('');

              //show code
              telControl.focusWatcher = false;
              telControl.setInvalidWatcher = false;
              telControl.regexp_description = '';
              dataStore().setErrorButton('');

              codeStore().uuid = response.data.uuid;
              codeStore().timer = response.data.remain || 0;

              if (codeStore().timer) {
                codeStore().buttonTimer(codeStore().timer);
              }

              dataStore().changeState('code');

              const tel = telControl.value.split('-');
              dataStore().setInfo(
                `${
                  dataStore().lang.AUTH_SMS_CODE_INFO_MESSAGE
                } ${tel[0].substring(0, tel[0].length - 3)}...-..-${tel[2]}`
              );
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              dataStore().setError(response.errors[0].message);

              if (String(response.errors[0].code) === String(1001)) {
                //B1
                this.state = 'B1';
                telControl.disabled = true;
                dataStore().setErrorButton(this.lang.AUTH_SMS_SMS_ERROR_BUTTON);
              } else if (String(response.errors[0].code) === String(1002)) {
                //C1
                this.state = 'C1';
                this.buttonSubmitTimer(response.errors[0].customData.remain);
              } else if (String(response.errors[0].code) === String(1003)) {
                //A2
                this.state = 'A2';
                telControl.focusWatcher = true;
                telControl.setInvalidWatcher = true;
                telControl.regexp_description =
                  response.errors[0].message || '';
              } else if (String(response.errors[0].code) === String(1004)) {
                //B2
              } else if (String(response.errors[0].code) === String(1005)) {
                //A3
                this.state = 'A3';
                telControl.focusWatcher = true;
                telControl.setInvalidWatcher = true;
                telControl.regexp_description =
                  response.errors[0].message || '';
              } else if (String(response.errors[0].code) === String(1006)) {
                //A3
                this.state = 'A3';
                telControl.focusWatcher = true;
                telControl.setInvalidWatcher = true;
                telControl.regexp_description =
                  response.errors[0].message || '';
              }
            }
          );
      }
    },
    runUpdate() {
      this.runSend();
    },
    runDelete() {
      this.changeDeleteProps({ 'load-circle': true });
      const telControl = this.controls.find((c) => c.property === 'tel');
      const phone = telControl.value;

      BX.ajax
        .runComponentAction('twinpx:profile.edit', 'remove', {
          mode: 'class',
          data: {
            phone,
          },
          signedParameters: dataStore().signedParameters,
        })
        .then((response) => {
          if (response.status === 'success' && response.data === true) {
            this.changeDeleteProps({ 'load-circle': false });
            this.setTelIsFilled(false);
            this.changeInterface('add');
          }
        });
    },
  },
});
