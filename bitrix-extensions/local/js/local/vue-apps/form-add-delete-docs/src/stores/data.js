import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    id: '',
    type: '',
    actions: {},
    lang: {}
  }),
});
