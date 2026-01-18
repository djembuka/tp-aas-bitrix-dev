import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    controls: []
  }),
  actions: {
    createMulti({ parent }) {
      parent.property = 'multi';
      parent.multi = [];
    },
    addMulti({ parent, add }) {
      const randomId = Math.round(Math.random() * 1000);

      add.id = `${add.id}${randomId}`;
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
    },
    
    changeControlValue({ control, value, file, checked }) {
        switch (control.property) {
            case 'text':
            case 'tel':
            case 'email':
            case 'hidden':
            case 'password':
            case 'date':
            case 'datetime':
            case 'time':
            case 'textarea':
            case 'num':
                this.changeTextControlValue({ control, value });
                break;
            case 'hint':
            this.changeHintControlValue({ control, value });
            break;
            case 'select':
                this[
                `changeSelect${control.type
                    .substring(0, 1)
                    .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
                ]({ control, value });
                break;
            case 'file':
                this.changeFileValue({ control, value, file });
                break;
            case 'checkbox':
                this.changeCheckboxValue({ control, checked });
                break;
        }
    },
    changeCheckboxValue({ control, checked }) {
      control.checked = checked;
    },
    changeTextControlValue({ control, value }) {
        control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
        control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
        control.value = value;
    },
    changeSelectMultiValue({ control, value, checked }) {
      if (checked) {
        const set = new Set(control.value).add(value);
        control.value = Array.from(set);
      } else {
        control.value.splice(control.value.indexOf(value), 1);
      }
    },
    changeFileValue({ control, value, file }) {
      control.value = value;

      if (control.type === 'upload') {
        this.uploadFile(control, value, file);
      } else {
        control.file = file;

        if (value === '') {
          control.file = '';
        }
      }
    },
    changeHintControlValue({ control, value }) {
      control.value = value;

      if (value.autocomplete && value.autocomplete.forEach) {
        value.autocomplete.forEach((o) => {
          const control = this.controls.find((c) => c.id === o.id);
          if (control) {
            control.value = o.value;
          }
        });
      }
    },
    async runHints(control, action) {
        const url = new URL(action, window.location.origin);
        url.searchParams.append('s', control.value);

        try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 СЃРµРєСѓРЅРґ С‚Р°Р№РјР°СѓС‚

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'success' && result.data) {
            this.setHints(control, result.data);
        } else if (result.errors) {
            this.error = result.errors[0]?.message
        } else {
            this.error = 'Invalid response format';
        }
        } catch (error) {
            this.error = error?.message
        }
    },
    setHints(control, value) {
        control.hints = value;
    },
    async uploadFile(control, file) {
      if (!control.action) return;

      control.upload = {};
      let formData = new FormData();

      const isDeleting = file === null;

      if (isDeleting) {
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
      xhr.open('POST', control.action);
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
  }
});