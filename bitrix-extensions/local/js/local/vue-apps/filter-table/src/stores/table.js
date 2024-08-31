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
    };
  },
  getters: {
    loadingTable() {
      return this.loadingCols || this.loadingItems;
    },
  },
  actions: {
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
            window.twinpx.vue['filter-table']
          ) {
            resultFn(state, window.twinpx.vue['filter-table'].columnsNames);
          } else {
            //showError(error)
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
      let a = window.BX.ajax.runComponentAction(this.actions.items, data);
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
            window.twinpx.vue['filter-table']
          ) {
            resultFn(
              state,
              window.twinpx.vue['filter-table'].items(data.startIndex)
            );
          } else {
            //showError(error)
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
            window.twinpx.vue['filter-table']
          ) {
            resultFn(state, window.twinpx.vue['filter-table'].defaultSort);
          } else {
            //showError(error)
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
            window.twinpx.vue['filter-table']
          ) {
            resultFn(state, window.twinpx.vue['filter-table'].setDefaultSort);
          } else {
            //showError(error)
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
