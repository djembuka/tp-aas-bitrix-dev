import { defineStore } from 'ui.vue3.pinia';

export const tableStore = defineStore('table', {
  state: () => {
    return {
      loadingCols: false,
      loadingAppeals: false,
      columnsNames: [],
      appeals: {},
      sort: {},
      actions: {},
      errorTable: '',
    };
  },
  getters: {
    loadingTable() {
      return this.loadingCols || this.loadingAppeals;
    },
  },
  actions: {
    hideErrorTable() {
      this.errorTable = '';
    },
    showError({ error, method }) {
      if (typeof error === 'boolean') {
        this.errorTable = error;
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
                this.errorTable = `${window.BX.message('ERROR_SUPPORT')}
                    <br>
                    <br>
                    Метод: ${method}. Код ошибки: ${
                  error.data.ajaxRejectData.data
                }. Описание: ${
                  window.BX.message(
                    'ERROR_' + error.data.ajaxRejectData.data
                  ) || window.BX.message('ERROR_SERVER')
                }.`;
              }
            } else if (window.BX.message) {
              this.errorTable = `${window.BX.message('ERROR_SUPPORT')}
                <br>
                <br>
                Метод: ${method}. Код ошибки: NETWORK_ERROR. Описание: ${window.BX.message(
                'ERROR_OFFLINE'
              )}.`;
            }
          } else {
            this.errorTable = `${window.BX.message('ERROR_SUPPORT')}
              <br>
              <br>
              Метод: ${method}.${
              error.errors[0].code
                ? ' Код ошибки: ' + error.errors[0].code + '.'
                : ''
            } ${
              error.errors[0].message
                ? ' Описание: ' + error.errors[0].message + '.'
                : ''
            }`;
          }
        }
      }
    },
    runColumnsNames(data, callback) {
      this.loadingCols = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.columnsNames,
        data
      );
      let state = this;

      a.then(
        (result) => {
          this.loadingCols = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingCols = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].columnsNames);
          } else {
            this.showError({ error, method: 'columnsNames' });
          }
        }
      );

      function resultFn(state, data) {
        state.columnsNames = data;
        if (callback) {
          callback();
        }
      }
    },
    runAppeals(data, callback) {
      this.loadingAppeals = true;
      let a = window.BX.ajax.runComponentAction(this.actions.appeals, data);
      let state = this;

      a.then(
        (result) => {
          this.loadingAppeals = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingAppeals = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(
              state,
              window.twinpx.vue['appeal-inbox'].appeals(data.startIndex)
            );
          } else {
            this.showError({ error, method: 'appeals' });
          }
        }
      );

      function resultFn(state, data) {
        const items = data.appeals;
        data.items = items;
        delete data.appeals;
        state.appeals = data;

        if (callback) {
          callback();
        }
      }
    },
    runDefaultSort(data, callback) {
      let a = window.BX.ajax.runComponentAction(this.actions.defaultSort, data);
      let state = this;

      a.then(
        (result) => {
          resultFn(state, result);
        },
        (error) => {
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].defaultSort);
          } else {
            this.showError({ error, method: 'defaultSort' });
          }
        }
      );

      function resultFn(state, data) {
        state.sort = data;
        if (callback) {
          callback();
        }
      }
    },
    runSetDefaultSort(data, callback) {
      let a = window.BX.ajax.runComponentAction(
        this.actions.setDefaultSort,
        data
      );
      let state = this;

      a.then(
        (result) => {
          resultFn(state, result);
        },
        (error) => {
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].setDefaultSort);
          } else {
            this.showError({ error, method: 'setDefaultSort' });
          }
        }
      );

      function resultFn(state, data) {
        state.sort = data;
        if (callback) {
          callback();
        }
      }
    },
  },
});
