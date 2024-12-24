import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const ornzStore = defineStore('ornz', {
  state: () => ({
    controls: [
      {
        property: 'text',
        id: 'id2',
        name: 'ORNZ',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
      {
        property: 'password',
        id: 'id3',
        name: 'PASSWORD',
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
  }),
  getters: {
    buttonDisabled() {
      return this.controls.some(
        (input) => !input.value || input.setInvalidWatcher
      );
    },
  },
  actions: {
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
      control.setInvalidWatcher = false;
    },
    runOrnz() {
      this.changeSubmitProps({ 'load-circle': true });
      const self = this;

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.ornz', {
            data: {
              login: self.controls[0].value,
              password: self.controls[1].value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              if (response && response.data && response.data.redirect) {
                window.location.href = response.data.redirect;
              }
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              if (response && response.errors && response.errors[0]) {
                dataStore().error = response.errors[0].message;
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
