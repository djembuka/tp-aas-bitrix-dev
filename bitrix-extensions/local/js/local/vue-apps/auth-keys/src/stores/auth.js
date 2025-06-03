import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { codeStore } from './code.js';

export const authStore = defineStore('auth', {
  state: () => ({
    lang: {
      heading: 'Введите ваш номер',
      html: '<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>',
      label: 'Номер телефона',
      checkbox: 'Я даю согласие на обработку, хранение и использование персональных данных в целях осуществления функций саморегулируемой организации аудиторов.',
      submit: 'Получить код',
      submit_timer: "Получите новый код через:"
    },
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
    deleteProps: { icon: true, delete: true, medium: true },
    timerEnd: 0,
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
        ? `${this.lang.submit_timer} ${new Date(
            this.timer * 1000
          )
            .toISOString()
            .substring(14, 19)}`
        : '';
    },
  },
  actions: {
    setLabels(){
      this.controls[0].label = this.lang.label;
      this.controls[1].label = this.lang.checkbox;
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

      if (window.BX) {
        BX.ajax
          .runComponentAction('twinpx:profile.edit', 'add', {
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

              codeStore().uuid = response.data.uuid;
              codeStore().timer = response.data.remain || 0;

              if (codeStore().timer) {
                codeStore().buttonTimer(codeStore().timer);
              }

              dataStore().routeWatcher = '/code'

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
  },
});
