import { defineStore } from 'ui.vue3.pinia';

export const restoreInfoStore = defineStore('restore-info', {
  state: () => ({
    email: '',
  }),
  actions: {
    setEmail(email) {
      this.email = email;
    },
  },
});
