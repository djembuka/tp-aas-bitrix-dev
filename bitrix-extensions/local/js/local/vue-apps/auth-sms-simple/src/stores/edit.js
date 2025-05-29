import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { codeStore } from './code.js';

export const editStore = defineStore('edit', {
  state: () => ({
    lang: {
      heading: 'Ваш телефон',
      html: '<p>Номер телефона, который используется для авторизации в личном кабинете.</p>',
      label: 'Номер телефона',
      button: 'Изменить'
    },
    controls: [
      {
        property: 'tel',
        id: 'id0',
        name: 'PHONE',
        label: 'Номер телефона',
        value: dataStore().tel,
        disabled: true,
      },
    ],
    editProps: { large: true, secondary: true, medium: true },
    deleteProps: { icon: true, delete: true, medium: true },
  }),
  actions: {
    changeEditProps(obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          this.editProps[key] = true;
        } else {
          delete this.editProps[key];
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
    runSend() {
      this.changeEditProps({ 'load-circle': true });
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
