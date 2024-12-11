import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessionid: '',
    signedParameters: '',
    lang: {},
  }),
  actions: {
    setInfo(message) {
      this.info = message;
    },
    setError(message) {
      this.error = message;
    },
  },
});
