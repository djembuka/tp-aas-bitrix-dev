import { defineStore } from 'ui.vue3.pinia';

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
    runFormSubmit() {
      const self = this;

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.ornz.value,
            },
          })
          .then(
            (response) => {},
            (response) => {}
          );
      }
    },
  },
});
