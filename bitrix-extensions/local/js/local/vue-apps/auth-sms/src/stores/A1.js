import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const a1Store = defineStore('A1', {
  state: () => ({
    tel: {
      property: 'tel',
      id: 'id0',
      name: 'PHONE',
      label: (() => {
        return dataStore().lang;
      })(),
      value: '',
      required: true,
      disabled: false,
    },
    checkbox: {
      property: 'checkbox',
      id: 'id1',
      name: 'NUM',
      label: dataStore().lang,
      value: '',
      required: false,
      disabled: false,
    },
  }),
  getters: {
    buttonDisabled() {
      return !this.tel.value.trim() || !this.checkbox.value;
    },
  },
  actions: {
    changeControlValue({ control, value }) {
      control.value = value;
    },
    runFormSubmit() {
      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.tel.value,
            },
          })
          .then(
            (response) => {
              //show code
            },
            (response) => {
              console.log(response.errors[0].message);
            }
          );
      }
    },
  },
});
