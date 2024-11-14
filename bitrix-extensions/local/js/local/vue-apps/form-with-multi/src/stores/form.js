import { defineStore } from 'ui.vue3.pinia';

export const formStore = defineStore('form', {
  state: () => ({
    loadingControls: false,
    actions: {},
    controls: [],
  }),
  actions: {
    bitrixLogs(id, message) {
      //AJAX Bitrix
      if (window.BX) {
        BX.ajax.post(
          '/local/ajax/logs.php',
          {
            id,
            el: 1, //document.querySelector('input[name = "APPEAL_ID"]').value,
            message,
            level: 1,
          },
          (result) => {}
        );
      }
    },
    autosave() {},
    timeoutAutosave() {},
    createMulti({ parent }) {
      parent.property = 'multi';
      parent.multi = [];
    },
    addMulti({ parent, add }) {
      const randomId = Math.round(Math.random() * 1000);
      const sub = [];

      if (add.sub && add.sub.forEach) {
        add.sub.forEach((s) => {
          s.id = `${s.id}${randomId}`;
          sub.push({ ...s });
        });
        add.sub = sub;
      }

      add.id = `${add.id}${randomId}`;
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
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
    changeFileValue({ control, value }) {
      control.value = value;
      if (typeof value !== 'string') {
        this.uploadFile({ file: value });
      }
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
        case 'file':
          this.changeFileValue({ control, value });
          break;
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

    //file
    async uploadFile({ file }) {
      let xhrStatus = '';
      // this.percentage = 0;

      let formData = new FormData();
      formData.append('FILES', file);

      const url = '/markup/upload.php';
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      xhr.setRequestHeader('Authentication', 'BX.sessid()');
      xhr.send(formData);
    },
  },
});
