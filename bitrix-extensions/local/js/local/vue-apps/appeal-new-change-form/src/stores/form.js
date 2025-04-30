import { defineStore } from 'ui.vue3.pinia';

export const formStore = defineStore('form', {
  state: () => ({
    hidden: [],
    docsBlock: {},
    controlsBlock: {},
    confirmDocsBlock: {},
    autosaveTimeoutId: 0,
    autosave: 5000,
    agreement: {},
    url: {},
  }),
  actions: {
    bitrixLogs({ id, message }) {
      if (window.BX) {
        BX.ajax.post(
          '/local/ajax/logs.php',
          {
            id,
            el: document.querySelector('input[name = "APPEAL_ID"]').value,
            message,
            level: 1,
          },
          function (result) {}
        );
      }
    },
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

    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'tel':
        case 'email':
          this.changeTextControlValue({ control, value });
          break;
        case 'hint':
          this.changeHintControlValue({ control, value });
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
    changeTextControlValue({ control, value }) {
      control.value = value;
    },
    changeHintControlValue({ control, value }) {
      control.value = value;

      if (value.autocomplete && value.autocomplete.forEach) {
        value.autocomplete.forEach((o) => {
          const control = this.controlsBlock.controls.find(
            (c) => c.id === o.id
          );
          if (control) {
            control.value = o.value;
          }
        });
      }
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
        this.uploadFile(control, value);
      }
    },

    //hint
    async runHintsAction({ control, action }) {
      if (control.value && typeof control.value === 'string') {
        const sign = action.indexOf('?') < 0 ? '?' : '&';
        action = `${action}${sign}s=${control.value}`;
      }
      const response = await fetch(action);
      const result = await response.json();
      this.setHints({ control, value: result });
    },
    setHints({ control, value }) {
      control.hints = value;
    },

    //file
    async uploadFile(control, file) {
      control.upload = {};
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
      const url = control.action;
      xhr.open('POST', url /*'/markup/upload.php'*/);
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
      xhr.upload.addEventListener('error', (err) => {
        console.log('error', err);

        control.upload.response = {
          STATUS: 'error',
          errors: [
            {
              message: err,
            },
          ],
        };
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
          try {
            control.upload.response = JSON.parse(xhr.response);
          } catch (err) {
            control.upload.response = {
              STATUS: 'error',
              errors: [
                {
                  message: err,
                },
              ],
            };
            console.log(err);
          }
        }
      };

      xhr.send(formData);
    },
  },
});
