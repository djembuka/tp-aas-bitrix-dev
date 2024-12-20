import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessionid: '',
    signedParameters: '',
    templateFolder: '',
    lang: {},
    state: 'sms',
    info: '',
    error: '',
    errorButton: false,
  }),
  actions: {
    changeState(value) {
      this.state = value;
    },
    setInfo(message) {
      this.info = message;
    },
    setError(message) {
      this.error = message;
    },
  },
});
