import { defineStore } from 'ui.vue3.pinia';

export const modalsStore = defineStore('modals-store', {
  state: () => ({
    modal_yes_no: {
      id: 1,
      heading: "Подтверждение",
      text: "Вы действительно хотите изменить номер телефона?",
      yes: "Да",
      no: "Нет",
      stateWatcher: false,
      clickYes() {
        console.log('modal yes')
      },
      clickNo() {
        console.log('modal no')
      }
    },
    modal_any_content: {
      id: 2,
      buttons: {
        yes: {
          text: 'Да',
          props: ['secondary', 'large']
        },
        no: {
          text: 'Нет',
          props: ['gray-color', 'large']
        }
      },
      stateWatcher: false,
      clickYes() {
        console.log('modal yes')
      },
      clickNo() {
        console.log('modal no')
      }
    }
  }),
  actions: {},
});
