import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    lang: {},
    actions: [],
    modalStateWatcher: false,
    modal: false,
    cancelUrl: '',
    constructor: {},
    args: null
  }),
  actions: {
    changeModalStateWatcher() {
      this.modalStateWatcher = !this.modalStateWatcher;
    }
  }
});
