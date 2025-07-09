import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    lang: {},
    id: null,
    actions: [],
    modalStateWatcher: false,
    modal: false,
    cancelUrl: ''
  }),
  actions: {
    changeModalStateWatcher() {
      console.log(1, this.modalStateWatcher)
      this.modalStateWatcher = !this.modalStateWatcher;
      console.log(2, this.modalStateWatcher)
    }
  }
});
