import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const tableStore = defineStore('table', {
  state: () => {
    return {
      loadingCols: false,
      loadingItems: false,
      columnsNames: [],
      items: {},
      actions: {},
      errorTable: '',
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

      const length = this.columnsNames.length;
      const value = `${Math.floor(100 / length)}%`;

      const arr = Array(length-1).fill(value);
      arr.push('150px');

      return arr;
    }
  },
  actions: {
    clickButton({itemId, code}) {
      console.log(itemId, code)
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
      this.runColumnsNames({ ...dataStore().data });
      this.runItems({ ...dataStore().data });
    },
    runColumnsNames(data) {
      this.loadingCols = true;
      const d = dataStore();

      setTimeout(() => {
        this.loadingCols = false;
        // this.showError({ error: {errors: [{code: 500, message: 'Server error'}]}, method: 'columnsNames' });
        this.columnsNames = [
          {
            id: 1,
            name: 'Дата создания',
            type: 'date'
          },
          {
            id: 2,
            name: 'Категория нарушений',
            type: 'cat'
          },
          {
            id: 3,
            name: 'Название нарушения',
            type: 'name'
          },
          {
            id: 4,
            name: 'Источник',
            type: 'src'
          }
        ];
        this.columnsNames.push({
          id: Math.floor(Math.random() * 100),
          name: '',
          type: 'buttons'
        })
      }, 1000)

      return;

      let a = window.BX.ajax.runComponentAction( d.actions.columnsNames[0], d.actions.columnsNames[1], {
        mode: 'class',
        data,
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
    runItems(data) {
      this.loadingItems = true;

      setTimeout(() => {
        this.loadingItems = false;
        this.items = {
            resultCount: 2,
            startIndex: 0,
            excelLink: false,
            items: [
              {
                id: 1,
                cell: [{
                    id: 2,
                    type: 'date',
                    value: '14.07.2025'
                }, {
                    id: 3,
                    type: 'cat',
                    value: 'Невнесение (несвоевременное) внесение сведений в реестр'
                }, {
                    id: 4,
                    type: 'name',
                    value: 'Нарушение ч. 8 ст. 19 Федерального закона № 307-ФЗ  от 30.12.2008 г. «Об аудиторской деятельности»....'
                }, {
                    id: 5,
                    type: 'src',
                    value: '<a href="/">831Ж040725</a>'
                }]
              },
              {
                id: 6,
                cell: [{
                    id: 7,
                    type: 'date',
                    value: '14.07.2025'
                }, {
                    id: 8,
                    type: 'cat',
                    value: 'Несоблюдение требования к доле в уставном капитале'
                }, {
                    id: 9,
                    type: 'name',
                    value: 'Нарушение п.3 ч.2 ст.18 № 307-ФЗ от 30.12.2008 г. «Об аудиторской деятельности»...'
                }, {
                    id: 10,
                    type: 'src',
                    value: '<a href="/">831Ж040725</a>'
                }]
              }]
        };

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
        
      }, 1000)

      return;

      let a = window.BX.ajax.runComponentAction( d.actions.items[0], d.actions.items[1], {
        mode: 'class',
        data,
      });

      a.then(
        (result) => {
          this.loadingItems = false;
          if (result.data) {
            this.items = result.data;
            this.items?.items?.forEach(i => {
              i?.cell?.push({
                id: Math.floor(Math.random() * 1000),
                type: 'buttons',
                value: '<b>buttons</b>'
              });
            });
          }
        },
        (error) => {
          this.loadingItems = false;
          this.showError({ error, method: 'items' });
        }
      );
    },
  },
});
