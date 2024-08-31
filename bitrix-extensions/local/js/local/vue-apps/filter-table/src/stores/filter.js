import { defineStore } from 'ui.vue3.pinia';

export const filterStore = defineStore('filter', {
  state: () => ({
    actions: {},
    filters: [],
  }),
  actions: {
    changeTextControlValue({ control, value }) {
      control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
      control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
      control.value = value;
    },
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
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
        // case 'date':
        //   commit('changeDateValue', { control, value });
        //   break;
        // case 'color':
        //   commit('changeColorValue', { control, value });
        //   break;
      }
    },
    runFilters(data, callback) {
      let a = window.BX.ajax.runComponentAction(this.actions.filters, data);
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
            resultFn(state, window.twinpx.vue['filter-table'].filters);
          } else {
            //showError(error)
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
  },
});
