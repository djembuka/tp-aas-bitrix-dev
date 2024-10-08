import { defineStore } from 'ui.vue3.pinia';

export const formStore = defineStore('form', {
  state: () => ({
    loadingControls: false,
    actions: {},
    controls: [],
  }),
  actions: {
    runControls(data, callback) {
      this.loadingControls = true;
      let a = window.BX.ajax.runComponentAction(this.actions.controls, data);
      let state = this;

      a.then(
        (result) => {
          this.loadingControls = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingControls = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['form-with-multi']
          ) {
            resultFn(state, window.twinpx.vue['form-with-multi'].controls);
          } else {
            // this.showError({ error, method: 'controls' });
          }
        }
      );

      function resultFn(state, data) {
        state.controls = data;
        if (callback) {
          callback();
        }
      }
    },
  },
});
