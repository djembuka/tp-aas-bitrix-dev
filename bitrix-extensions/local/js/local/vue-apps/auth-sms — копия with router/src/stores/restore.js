import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const restoreStore = defineStore('restore', {
  state: () => ({
    lang: {},
    info: '',
    state: '',
    controls: [
      {
        property: 'text',
        id: 'id0',
        name: 'ORNZ',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
    ],
    submitProps: { large: true, primary: true, wide: true },
  }),
  getters: {
    buttonDisabled() {
      return (
        !this.controls[0].value || this.controls[0].setInvalidWatcher === true
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
    },
    runRestore() {
      this.changeSubmitProps({ 'load-circle': true });

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.restore', {
            data: {
              login: this.controls[0].value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });
              dataStore().error = '';
              // window.location.href = response.data.redirect;
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              if (response.errors[0]) {
                dataStore().error = response.errors[0].message;
                this.controls[0].regexp_description =
                  response.errors[0].message || '';
                this.controls[0].setInvalidWatcher = true;
              }
            }
          );
      }
    },
  },
});
