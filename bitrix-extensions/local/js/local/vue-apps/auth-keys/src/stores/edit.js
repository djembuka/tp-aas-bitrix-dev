import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';
import { infoStore } from './info.js';

export const editStore = defineStore('edit', {
  state: () => ({
    lang: {
      heading: 'Ваш телефон',
      html: '<p>Номер телефона, который используется для авторизации в личном кабинете.</p>',
      label: 'Номер телефона',
      button: 'Изменить',
      modalHeading: 'Подтверждение',
      modalHtmlEdit: 'Вы действительно хотите изменить номер телефона?',
      modalHtmlDelete: 'Вы действительно хотите удалить номер телефона?'
    },
    controls: [
      {
        property: 'tel',
        id: 'id0',
        name: 'PHONE',
        label: '',
        value: dataStore().tel,
        disabled: true,
      },
    ],
    editProps: { large: true, secondary: true, medium: true },
    deleteProps: { icon: true, delete: true, medium: true },
  }),
  actions: {
    setLabels(){
      this.controls[0].label = this.lang.label;
    },
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
    edit() {
      this.changeEditProps({ 'load-circle': true });
      this.runDelete();
    },
    delete() {
      this.changeDeleteProps({ 'load-circle': true });
      this.runDelete();
    },
    runDelete() {
      BX.ajax
        .runComponentAction('twinpx:profile.edit', 'remove', {
          mode: 'class',
          data: {
            phone: dataStore().tel,
          },
          signedParameters: dataStore().signedParameters,
        })
        .then((response) => {
          if (response.status === 'success' && response.data === true) {
            dataStore().routeWatcher = '/info'

            infoStore().heading = 'Подтвердите права';
            infoStore().text = 'На вашу почту отправлено письмо с подтверждением вашего действия, откройте письмо и действуйте по инструкции.';
          }
        },
        (response) => {
          this.changeDeleteProps({ 'load-circle': false });
          this.changeEditProps({ 'load-circle': false });

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
    },
  },
});
