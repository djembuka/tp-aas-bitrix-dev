import { defineStore } from 'ui.vue3.pinia';

export const buttonsBlockDataStore = defineStore('buttons-block-data', {
  state: () => ({
    id: `id${Math.floor(Math.random() * 1000)}`,
    data: {},
    lang: {},
    actions: []
  }),
});
