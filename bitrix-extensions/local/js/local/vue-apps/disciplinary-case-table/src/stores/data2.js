import { defineStore } from 'ui.vue3.pinia';

export const data2Store = defineStore('data2', {
  state: () => {
    return {
      data: {},
      ajax: {},
      lang: {},
      constructor: {}
    }
  },
});
