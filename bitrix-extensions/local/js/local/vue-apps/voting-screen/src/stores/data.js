import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    command: '',
    params: {},
    extra: {}

  }),
  actions: {
    changeProp(prop, value) {
      this[prop] = value;
    }
  }
});
