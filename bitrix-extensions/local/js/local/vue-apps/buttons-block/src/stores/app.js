import { defineStore } from 'ui.vue3.pinia';
import { buttonsBlockDataStore } from './data';

export const buttonsBlockAppStore = defineStore('buttons-block-app', {
  state: () => ({
    loading: false,
    error: '',
    stateWatcher: false,
    modal: {}
  }),
  actions: {
    changeModal(modal) {
      this.modal = modal
    },
    changeStateWatcher() {
      this.stateWatcher = !this.stateWatcher;
    },
    changeError(error) {
      this.error = error;
    },
    runDelete(action) {
      this.error = '';
      this.loading = true;
      const d = buttonsBlockDataStore();

      this.loading = false;
      return;

      BX.ajax.runComponentAction(action[0], action[1], {
        mode: 'class',
        data: d.data,
      })
      .then((response) => {
        this.loading = false;
        if (response.status === 'success' && response.data.redirect) {
          this.changeError('');
          this.window.location = response.data.redirect;
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
  },
});
