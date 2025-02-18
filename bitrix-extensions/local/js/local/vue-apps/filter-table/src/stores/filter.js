import { defineStore } from 'ui.vue3.pinia';

export const filterStore = defineStore('filter', {
  state: () => ({
    loadingFilter: false,
    actions: {},
    filters: [],
    errorFilter: '',
  }),
  actions: {
    hideErrorFilter() {
      this.errorFilter = '';
    },
    showError({ error, method }) {
      if (typeof error === 'boolean') {
        this.errorFilter = error;
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
                this.errorFilter = `${window.BX.message('ERROR_SUPPORT')}
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
              this.errorFilter = `${window.BX.message('ERROR_SUPPORT')}
                <br>
                <br>
                Метод: ${method}. Код ошибки: NETWORK_ERROR. Описание: ${window.BX.message(
                'ERROR_OFFLINE'
              )}.`;
            }
          } else {
            this.errorFilter = `${window.BX.message('ERROR_SUPPORT')}
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
    changeTextControlValue({ control, value }) {
      control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
      control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
      control.value = value;
    },
    changeDateValue({ control, value }) {
      control.value = value;
    },
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
          this.changeTextControlValue({ control, value });
          break;
        // case 'multiselect':
        //   commit('changeMultiselectValue', { control, value, checked });
        //   break;
        // case 'checkbox':
        //   commit('changeCheckboxValue', { control, checked });
        //   break;
        case 'select':
          this[
            `changeSelect${control.type
              .substring(0, 1)
              .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
          ]({ control, value });
          break;
        // case 'file':
        //   commit('changeFileValue', { control, value });
        //   break;
        case 'date':
          this.changeDateValue({ control, value });
          break;
        // case 'color':
        //   commit('changeColorValue', { control, value });
        //   break;
      }
    },
    runFilters(data, callback) {
      this.loadingFilter = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.filters.component,
        this.actions.filters.method,
        data
      );
      let state = this;

      a.then(
        (result) => {
          this.loadingFilter = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingFilter = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['filter-table']
          ) {
            resultFn(state, window.twinpx.vue['filter-table'].filters);
          } else {
            this.showError({ error, method: 'filters' });
          }
        }
      );

      function resultFn(state, data) {
        state.filters = data;
        if (callback) {
          callback();
        }
      }
    },
    runHintsAction({ control, hintsAction }, callback) {
      control.loading = true;

      let a = window.BX.ajax.runComponentAction(hintsAction, {
        string:
          typeof control.value === 'object'
            ? control.value.value
            : control.value,
      });

      a.then(
        (result) => {
          control.loading = false;
          resultFn(result);
        },
        (error) => {
          control.loading = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['filter-table']
          ) {
            resultFn(window.twinpx.vue['filter-table'].hints);
          } else {
            this.showError({ error, method: hintsAction });
          }
        }
      );

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
  },
});
