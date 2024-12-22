import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data.js';

export const ornzStore = defineStore('new-password', {
  state: () => ({
    controls: [
      {
        property: 'password',
        id: 'id0',
        name: 'PASSWORD',
        label: '',
        value: '',
        required: true,
        disabled: false,
      },
      {
        property: 'password',
        id: 'id1',
        name: 'NEW_PASSWORD',
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
      return this.controls.some((input) => !input.value);
    },
  },
  actions: {
    async runHintsAction({ control, action }, callback) {
      control.loading = true;

      let response = await fetch(action);
      let result = await response.json();

      control.loading = false;
      resultFn(result.data.hints);

      // let a = window.BX.ajax.runComponentAction(action, {
      //   string:
      //     typeof control.value === 'object'
      //       ? control.value.value
      //       : control.value,
      // });

      // a.then(
      //   (result) => {
      //     control.loading = false;
      //     resultFn(result);
      //   },
      //   (error) => {
      //     control.loading = false;
      //     if (
      //       window.twinpx &&
      //       window.twinpx.vue.markup &&
      //       window.twinpx.vue['filter-table']
      //     ) {
      //       resultFn(window.twinpx.vue['filter-table'].hints);
      //     } else {
      //       this.showError({ error, method: hintsAction });
      //     }
      //   }
      // );

      function resultFn(data) {
        control.hints = data;
        if (callback) {
          callback();
        }
      }
    },
    setHints({ control, value }) {
      control.hints = value;
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
