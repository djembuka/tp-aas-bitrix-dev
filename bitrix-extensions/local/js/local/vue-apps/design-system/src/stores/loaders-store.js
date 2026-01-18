import { defineStore } from 'ui.vue3.pinia';

export const loadersStore = defineStore('loaders-store', {
  state: () => ({
    loaders: [
      'circle','bubbles','squares'
    ],
  }),
  actions: {},
});
