import { defineStore } from 'ui.vue3.pinia';

export const predefinedStore = defineStore('predefined', {
  state: () => ({
    actions: {
      predefined: {},
    },
    predefined: [],
    loadingPredefined: true,
    loadingSelected: false,
  }),
  getters: {
    predefinedActive() {
      if (!this.predefined.fields) return undefined;
      return this.predefined.fields.find((f) => f.active);
    },
  },
  actions: {
    showError({ error, method }) {
      console.log(error, method);
    },
    setPredefinedActive({ field }) {
      this.predefined.fields.forEach((f) => {
        if (f.id !== field.id) {
          delete f.active;
        }
        field.active = !field.active;
      });
    },
    runPredefinedFilters(data, callback) {
      this.loadingPredefined = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.predefinedFilters.component,
        this.actions.predefinedFilters.method,
        data
      );
      let state = this;

      return a.then(
        (result) => {
          this.loadingPredefined = false;
          resultFn(state, result.data);

          return result;
        },
        (error) => {
          this.loadingPredefined = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(
              state,
              window.twinpx.vue['appeal-inbox'].predefinedFilters
            );
          } else {
            this.showError({ error, method: 'predefinedFilters' });
          }
        }
      );

      function resultFn(state, data) {
        state.predefined = data;
        if (callback) {
          callback();
        }
      }
    },
    runExportFile(data, callback) {
      console.log(data);
      this.loadingSelected = true;

      let a = window.BX.ajax.runComponentAction(
        this.actions.exportFile.component,
        this.actions.exportFile.method,
        data
      );
      let state = this;

      return a.then(
        (result) => {
          this.loadingSelected = false;
          resultFn(state, result.data);

          return result;
        },
        (error) => {
          this.loadingSelected = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(
              state,
              window.twinpx.vue['appeal-inbox'].predefinedFilters
            );
          } else {
            this.showError({ error, method: 'predefinedFilters' });
          }
        }
      );

      function resultFn(_, data) {
        window.open(data.link);
        if (callback) {
          callback();
        }
      }
    },
  },
});
