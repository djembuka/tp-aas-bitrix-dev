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
      appealsCounter: 0,
    };
  },
  getters: {
    loadingTable() {
      return this.loadingCols || this.loadingAppeals;
    },
  },
  actions: {
    increaseAppealsCounter() {
      return ++this.appealsCounter;
    },
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
      this.loadingAppeals = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.columnsNames.component,
        this.actions.columnsNames.method,
        data
      );
      let state = this;

      return a.then(
        (result) => {
          this.loadingCols = false;
          resultFn(state, result);

          return result;
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

      function resultFn(state, result) {
        state.columnsNames = result.data;
        if (callback) {
          callback();
        }
      }
    },
    runAppeals(data, callback, counter) {
      this.loadingAppeals = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.appeals.component,
        this.actions.appeals.method,
        data
      );
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
              window.twinpx.vue['appeal-inbox'].appeals(data.data.startIndex)
            );
          } else {
            this.showError({ error, method: 'appeals' });
          }
        }
      );

      function resultFn(state, result) {
        if (counter === state.appealsCounter) {
          state.appeals = result.data;

          if (callback) {
            callback();
          }
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

      return a.then(
        (result) => {
          resultFn(state, result);

          return result;
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

      function resultFn(state, result) {
        state.setSort(result.data);
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
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].setDefaultSort);
          } else {
            this.showError({ error, method: 'setDefaultSort' });
          }
        }
      );

      function resultFn(state, result) {
        state.setSort({
          columnSort: data.data.columnSort,
          sortType: data.data.sortType,
        });
        if (callback) {
          callback();
        }
      }
    },
    setSort(sort) {
      this.sort = sort;
    },
  },
});
