import { defineStore } from 'ui.vue3.pinia';

export const infoStore = defineStore('info', {
  state: () => ({
    heading: '',
    info: 'На вашу почту отправлено письмо с подтверждением вашего действия, откройте письмо и действуйте по инструкции.',
  }),
});
