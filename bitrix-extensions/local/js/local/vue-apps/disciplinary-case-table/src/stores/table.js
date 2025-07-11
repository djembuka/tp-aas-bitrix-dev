import { defineStore } from 'ui.vue3.pinia';

export const tableStore = defineStore('table', {
  state: () => {
    return {
      data: {},
      ajax: {},
      lang: {},
      constructor: {},
      loadingCols: false,
      loadingItems: false,
      columnsNames: [],
      items: {},
      errorTable: '',
      deleteModalStateWatcher: false,
      activeItemId: null
    };
  },
  getters: {
    loadingTable() {
      return this.loadingCols || this.loadingItems;
    },
    cols() {
      if (!this.columnsNames.length) {
        return [];
      }

      const length = this.columnsNames.length - 1;
      const value = `${Math.floor(100 / length)}%`;

      const arr = Array(length).fill(value);
      arr.push('160px');

      return arr;
    }
  },
  actions: {
    getItemId() {
      return this.activeItemId;
    },
    changeActiveItemId(itemId) {
      this.activeItemId = itemId;
    },
    changeDeleteModalStateWatcher() {
      this.deleteModalStateWatcher = !this.deleteModalStateWatcher;
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
    loadTable() {
      this.runColumnsNames();
      this.runItems();
    },
    deleteItem() {
      this.runDelete()
    },
    runColumnsNames() {
      this.loadingCols = true;

      let a = window.BX.ajax.runComponentAction( this.ajax.columnsNames[0], this.ajax.columnsNames[1], {
        mode: 'class',
        data: this.data,
      });

      a.then(
        (result) => {
          this.loadingCols = false;
          if (result.data) {
            this.columnsNames = result.data;
            this.columnsNames.push({
              id: Math.floor(Math.random() * 100),
              name: '',
              type: 'buttons'
            });
          }
        },
        (error) => {
          this.loadingCols = false;
          this.showError({ error, method: 'columnsNames' });
        }
      );
    },
    runItems() {
      this.loadingItems = true;

      window.BX.ajax.runComponentAction( this.ajax.items[0], this.ajax.items[1], {
        mode: 'class',
        data: this.data,
      }).then(
        (result) => {
          this.loadingItems = false;
          if (result.data) {
            this.items = result.data;

            this.items?.items?.forEach(i => {
              i.buttons = [
                {
                  code: 'edit',
                  text: 'Edit',
                  props: ['icon','edit','medium']
                },
                {
                  code: 'delete',
                  text: 'Delete',
                  props: ['icon','delete','medium']
                }
              ];
            });
          }
        },
        (error) => {
          this.loadingItems = false;
          this.showError({ error, method: 'items' });
        }
      );
    },
    runDelete() {
      this.loadingItems = true;

      window.BX.ajax.runComponentAction( this.ajax.deleteItem[0], this.ajax.deleteItem[1], {
        mode: 'class',
        data: {
          ...this.data,
          item_id: this.activeItemId
        },
      }).then(
        (result) => {
          this.loadingItems = false;
          this.loadTable();
        },
        (error) => {
          this.loadingItems = false;
          this.showError({ error, method: 'deleteItem' });
        }
      );
    },
  },
});
