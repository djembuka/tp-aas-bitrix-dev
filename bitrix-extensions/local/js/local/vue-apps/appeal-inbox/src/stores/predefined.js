import { defineStore } from 'ui.vue3.pinia';

export const predefinedStore = defineStore('predefined', {
  state: () => ({
    actions: {
      predefined: {},
    },
    localize: {},
    predefined: [],
    errorPredefined: '',
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
      if (typeof error === 'boolean') {
        this.errorPredefined = error;
      } else if (typeof error === 'object') {
        if (
          error.errors &&
          typeof error.errors === 'object' &&
          error.errors[0] &&
          error.errors[0].code !== undefined
        ) {
          if (error.errors[0].code === 'NETWORK_ERROR') {
            if (error.data && error.data.ajaxRejectData) {
              if (error.data.ajaxRejectData.data) {
                this.errorPredefined = `${
                  this.localize.APPEAL_INBOX_ERROR_METHOD
                }: ${method}. ${this.localize.APPEAL_INBOX_ERROR_CODE}: ${
                  error.data.ajaxRejectData.data
                }. ${this.localize.APPEAL_INBOX_ERROR_DESCRIPTION}: ${
                  window.BX.message(
                    'ERROR_' + error.data.ajaxRejectData.data
                  ) || window.BX.message('ERROR_SERVER')
                }.`;
              }
            } else if (window.BX.message) {
              this.errorPredefined = `${
                this.localize.APPEAL_INBOX_ERROR_METHOD
              }: ${method}. ${
                this.localize.APPEAL_INBOX_ERROR_CODE
              }: NETWORK_ERROR. ${
                this.localize.APPEAL_INBOX_ERROR_DESCRIPTION
              }: ${window.BX.message('ERROR_OFFLINE')}.`;
            }
          } else {
            this.errorPredefined = `${
              this.localize.APPEAL_INBOX_ERROR_METHOD
            }: ${method}.${
              error.errors[0].code
                ? ' ' +
                  this.localize.APPEAL_INBOX_ERROR_CODE +
                  ': ' +
                  error.errors[0].code +
                  '.'
                : ''
            } ${
              error.errors[0].message
                ? ' ' +
                  this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                  ': ' +
                  error.errors[0].message +
                  '.'
                : ''
            }`;
          }
        }
      }
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
