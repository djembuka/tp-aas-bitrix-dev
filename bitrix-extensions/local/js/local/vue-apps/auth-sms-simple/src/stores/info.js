import { defineStore } from 'ui.vue3.pinia';

export const infoStore = defineStore('info', {
  state: () => ({
    heading: '',
    text: ''
  }),
});
