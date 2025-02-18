import { defineStore } from 'ui.vue3.pinia';

export const tableStore = defineStore('table', {
  state: () => {
    return {
      loadingCols: false,
      loadingItems: false,
      columnsNames: [],
      items: {},
      sort: {},
      actions: {},
      errorTable: '',
    };
  },
  getters: {
    loadingTable() {
      return this.loadingCols || this.loadingItems;
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
        this.actions.columnsNames.component,
        this.actions.columnsNames.method,
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
            window.twinpx.vue['table']
          ) {
            resultFn(state, window.twinpx.vue['table'].columnsNames);
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
    runItems(data, callback) {
      this.loadingItems = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.items.component,
        this.actions.items.method,
        data
      );
      let state = this;

      a.then(
        (result) => {
          this.loadingItems = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingItems = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['table']
          ) {
            resultFn(state, window.twinpx.vue['table'].items(data.startIndex));
          } else {
            this.showError({ error, method: 'items' });
          }
        }
      );

      function resultFn(state, data) {
        state.items = data;

        if (callback) {
          callback();
        }
      }
    },
    runDefaultSort(data, callback) {
      let a = window.BX.ajax.runComponentAction(
        this.actions.defaultSort.component,
        this.actions.defaultSort.method,
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
            window.twinpx.vue['table']
          ) {
            resultFn(state, window.twinpx.vue['table'].defaultSort);
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
        this.actions.setDefaultSort.component,
        this.actions.setDefaultSort.method,
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
            window.twinpx.vue['table']
          ) {
            resultFn(state, window.twinpx.vue['table'].setDefaultSort);
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
