import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessionid: '',
    signedParameters: '',
    templateFolder: '',
    lang: {},
    state: 'sms',
    title: '',
    info: '',
    infoButton: true,
    error: '',
    errorButton: false,
  }),
  actions: {
    changeState(value) {
      this.state = value;
    },
    setTitle(title) {
      this.title = title;
    },
    setInfo(message) {
      this.info = message;
    },
    setInfoButton(infoButton) {
      this.infoButton = infoButton;
    },
    setError(message) {
      this.error = message;
    },
    setErrorButton(errorButton) {
      this.errorButton = errorButton;
    },
  },
});
