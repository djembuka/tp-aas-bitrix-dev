import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const changePasswordStore = defineStore('change-password', {
  state: () => ({
    controls: [
      {
        property: 'password',
        id: 'id0',
        name: 'NEW_PASSWORD',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
      {
        property: 'password',
        id: 'id1',
        name: 'REPEAT_NEW_PASSWORD',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
    ],
    submitProps: { large: true, secondary: true, wide: true },
    state: 'change-password',
  }),
  getters: {
    buttonDisabled() {
      return (
        this.controls[0].value.length < 6 ||
        this.controls[0].value !== this.controls[1].value
      );
    },
  },
  actions: {
    changeState(value) {
      this.state = value;
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
      this.controls.forEach((c) => {
        c.setInvalidWatcher = false;
      });
    },
    runChange({ login, checkword }) {
      this.changeSubmitProps({ 'load-circle': true });
      const self = this;

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.change', {
            data: {
              login,
              checkword,
              password: self.controls[0].value,
              repassword: self.controls[1].value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });
              dataStore().setError('');
              this.controls.forEach((c) => {
                c.value = '';
                c.setInvalidWatcher = false;
              });

              if (response && response.data) {
                if (response.data.message) {
                  dataStore().setInfo(response.data.message);
                }
              }

              this.changeState('change-password-info');
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              if (response && response.errors && response.errors[0]) {
                dataStore().setError(response.errors[0].message);
                this.controls[0].regexp_description =
                  response.errors[0].message || '';
                this.controls[1].regexp_description =
                  response.errors[0].message || '';

                this.controls[0].setInvalidWatcher = true;
                this.controls[1].setInvalidWatcher = true;
              }
            }
          );
      }
    },
  },
});
