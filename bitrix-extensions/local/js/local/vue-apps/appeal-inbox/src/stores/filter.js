import { defineStore } from 'ui.vue3.pinia';

export const filterStore = defineStore('filter', {
  state: () => ({
    loadingFilter: false,
    actions: {},
    localize: {},
    filters: [],
    errorFilter: '',
  }),
  actions: {
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
                this.errorFilter = `${
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
              this.errorFilter = `${
                this.localize.APPEAL_INBOX_ERROR_METHOD
              }: ${method}. ${
                this.localize.APPEAL_INBOX_ERROR_CODE
              }: NETWORK_ERROR. ${
                this.localize.APPEAL_INBOX_ERROR_DESCRIPTION
              }: ${window.BX.message('ERROR_OFFLINE')}.`;
            }
          } else {
            this.errorFilter = `${
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

      return a.then(
        (result) => {
          this.loadingFilter = false;
          resultFn(state, result);

          return result;
        },
        (error) => {
          this.loadingFilter = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].filters);
          } else {
            this.showError({ error, method: 'filters' });
          }
        }
      );

      function resultFn(state, result) {
        state.filters = result.data;
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
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(window.twinpx.vue['appeal-inbox'].hints);
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
