import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';
import { applicationStore } from './application';

export const apiStore = defineStore('api', {
  state: () => ({
  }),
  actions: {
    runApplicationTemplate() {
      const d = dataStore();

      d.changeError('');
      d.changeLoading(true);

      BX.ajax.runComponentAction(d.actions.applicationTemplate[0], d.actions.applicationTemplate[1], {
        mode: 'class',
        data: d.customData,
      })
      .then(
        (response) => {
          d.changeLoading(false);
          d.changeError('');
          applicationStore().changeApplicationControls(response.data);
        },
        (response) => {
          d.changeLoading(false);
          if (response && response.errors.length) {
            d.changeError(response.errors[0].message);
          }
        }
      );
    }
  }
});
