import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const formStore = defineStore('form', {
  state: () => ({
    loading: false,
    error: '',
    blocks: [],
    stateWatcher: false,
    formId: `id${Math.floor(Math.random() * 100000)}`
  }),
  actions: {
    changeError(message) {
      this.error = message;
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
        this.uploadFile(control, value);
      }
    },
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
        case 'tel':
        case 'email':
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
    changeBlocks(blocks) {
      this.blocks = blocks;
    },
    async runHints(control, action) {
      try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const url = new URL(action, window.location.origin);
        url.searchParams.set('s', control.value);

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
    changeStateWatcher() {
      this.stateWatcher = !this.stateWatcher;
    },
    sendForm() {
      this.runSaveForm();
    },
    runGetForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      const data = {
        sessid: dataStore().sessid,
        signedParameters: dataStore().signedParameters
      };

      if (d.id && d.type) {
        data.id = d.id;
        data.type = d.type;
      }

      BX.ajax.runComponentAction(d.actions.getForm[0], d.actions.getForm[1], {
        mode: 'class',
        data,
      })
      .then((res) => {
        this.loading = false;
        this.changeError('');

        if (res.data){
          this.changeBlocks(res.data);
        }
      }, (response) => {
        this.loading = false;
        if (response && response.errors.length) {
          this.changeError(response.errors[0].message);
        }
      });
    },
    runSaveForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      const formElem = document.querySelector(`#${this.formId} form`);
      const formData = new FormData(formElem);
      formData.append('sessid', dataStore().sessid);
      formData.append('signedParameters', dataStore().signedParameters);

      BX.ajax.runComponentAction(d.actions.saveForm[0], d.actions.saveForm[1], {
        mode: 'class',
        data: formData,
      })
      .then((res) => {
        this.loading = false;
        this.changeError('');
        if (res?.data?.redirect) {
          window.location.href = res.data.redirect;
        }
      }, (response) => {
        this.loading = false;
        if (response && response.errors.length) {
          this.changeError(response.errors[0].message);
        }
      });
    }
  },
});
