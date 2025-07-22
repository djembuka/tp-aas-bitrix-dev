import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';
import { controlsStore } from './controls';

export const formStore = defineStore('form', {
  state: () => ({
    loading: false,
    error: '',
    stateWatcher: false,
    historyItems: [],
    currentStatus: ''
  }),
  actions: {
    changeStateWatcher() {
      this.stateWatcher = !this.stateWatcher;
    },
    changeHistoryItems(historyItems) {
      this.historyItems = historyItems;
    },
    changeError(error) {
      this.error = error;
    },
    runGetForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      BX.ajax.runComponentAction(d.actions.getForm[0], d.actions.getForm[1], {
        mode: 'class',
        data: d.data,
      })
      .then((response) => {
        this.loading = false;
        if (response.status === 'success') {
          this.changeError('');
          controlsStore().changeControls(response.data[0].controls);

          // set current
          response.data[0].controls.forEach(c => {
            if (c.property === 'select') {
              this.currentStatus = c.value;
            }
          })
        } else {
          this.changeError(response.errors[0].message);
        }
      },
      (response) => {
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

      const formElem = document.querySelector(`#${dataStore().id} form`);
      const formData = new FormData(formElem);

      Object.keys(dataStore().data).forEach(key => {
        formData.append(key, dataStore().data[key]);
      })

      BX.ajax.runComponentAction(d.actions.saveForm[0], d.actions.saveForm[1], {
        mode: 'class',
        data: formData,
      })
      .then(
        (response) => {
          this.loading = false;
          if (response.status === 'success') {
            this.changeError('');
            this.runGetHistory();
            this.currentStatus = controlsStore().controls.find(c => c.property === 'select').value;
          } else {
            this.changeError(response.errors[0].message);
          }
        }, (response) => {
          this.loading = false;
          if (response && response.errors.length) {
            this.changeError(response.errors[0].message);
          }
        }
      );
    },
    runGetHistory() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      BX.ajax.runComponentAction(d.actions.getHistory[0], d.actions.getHistory[1], {
        mode: 'class',
        data: d.data,
      })
      .then(
        (response) => {
          this.loading = false;
          if (response.status === 'success') {
            this.changeError('');
            this.changeHistoryItems(response.data);
          } else {
            this.changeError(response.errors[0].message);
          }
        },
        (response) => {
          this.loading = false;
          if (response && response.errors.length) {
            this.changeError(response.errors[0].message);
          }
        }
      );
    }
  },
});
