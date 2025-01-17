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
      if (control.type === 'upload') {
        this.uploadFile({ control, file: value });
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
    async uploadFile({ control, file }) {
      control.upload = control.upload || {};
      let formData = new FormData();

      if (file === null) {
        //delete
        formData.append('DELETE', 'Y');
        if (control.upload.response) {
          formData.append('FILE', control.upload.response.FILE);
        }
      } else {
        //first
        formData.append('FILES', file);
        if (control.upload.response) {
          //update
          formData.append('FILE', control.upload.response.FILE);
        }
      }

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/markup/upload.php');
      //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      xhr.setRequestHeader('Authentication', BX.bitrix_sessid());

      //progress
      let first = true;
      xhr.upload.addEventListener('progress', ({ loaded, total }) => {
        control.upload.progress = { first, loaded, total };
        first = false;
      });
      xhr.upload.addEventListener('loadstart', () => {
        // console.log('loadstart');
      });
      xhr.upload.addEventListener('abort', () => {
        // console.log('abort');
      });
      xhr.upload.addEventListener('error', () => {
        // console.log('error');
      });
      xhr.upload.addEventListener('load', () => {
        // console.log('load');
      });
      xhr.upload.addEventListener('timeout', () => {
        // console.log('timeout');
      });
      xhr.upload.addEventListener('loadend', () => {
        // console.log('loadend');
      });

      xhr.onreadystatechange = () => {
        control.upload.readyState = xhr.readyState;

        if (xhr.readyState === 4) {
          control.upload.response = JSON.parse(xhr.response);
        }
      };

      xhr.send(formData);
    },
  },
});
