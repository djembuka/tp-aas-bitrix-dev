import { defineStore } from 'ui.vue3.pinia';

export const profileStore = defineStore('profile', {
  state: () => ({
    actions: {
      profiles: {},
    },
    profiles: [],
  }),
  actions: {
    runProfiles(data, callback) {
      this.loadingProfiles = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.profiles.component,
        this.actions.profiles.method,
        data
      );
      let state = this;

      a.then(
        (result) => {
          this.loadingProfiles = false;
          resultFn(state, result.data);
        },
        (error) => {
          this.loadingProfiles = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].profiles);
          } else {
            this.showError({ error, method: 'profiles' });
          }
        }
      );

      function resultFn(state, data) {
        state.profiles = data;
        if (callback) {
          callback();
        }
      }
    },
    bitrixLogs() {},
  },
});
