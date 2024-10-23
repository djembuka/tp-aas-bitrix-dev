import { defineStore } from 'ui.vue3.pinia';

export const formStore = defineStore('form', {
  state: () => ({
    loadingControls: false,
    actions: {},
    controls: [],
  }),
  actions: {
    createMulti({ parent }) {
      parent.property = 'multi';
      parent.multi = [];
    },
    addMulti({ parent, add }) {
      console.log(add);
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
    },
    changeTextControlValue({ control, value }) {
      console.log(control, value);
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
    runControls(data, callback) {
      this.loadingControls = true;
      let a = window.BX.ajax.runComponentAction(this.actions.controls, data);
      let state = this;

      a.then(
        (result) => {
          this.loadingControls = false;
          resultFn(state, result);
        },
        (error) => {
          this.loadingControls = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['form-with-multi']
          ) {
            resultFn(state, window.twinpx.vue['form-with-multi'].controls);
          } else {
            // this.showError({ error, method: 'controls' });
          }
        }
      );

      function resultFn(state, data) {
        state.controls = data;
        if (callback) {
          callback();
        }
      }
    },
  },
});
