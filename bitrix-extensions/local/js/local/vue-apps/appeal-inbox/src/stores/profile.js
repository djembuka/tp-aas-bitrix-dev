import { defineStore } from 'ui.vue3.pinia';

export const profileStore = defineStore('profile', {
  state: () => ({
    actions: {
      profiles: {},
    },
    profiles: [],
    profilesCounter: 0,
    loadingProfiles: true,
  }),
  getters: {
    defaultProfile() {
      return this.profiles.find((p) => p.default);
    },
  },
  actions: {
    showError({ error, method }) {
      console.log(error, method);
    },
    setDefaultProfile({ id }) {
      if (this.profiles.length) {
        this.profiles.forEach((p) => {
          p.default = String(p.id) === String(id);
        });
      }
    },
    increaseProfilesCounter() {
      ++this.profilesCounter;
    },
    runProfiles(data, callback) {
      this.loadingProfiles = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.profiles.component,
        this.actions.profiles.method,
        data
      );
      let state = this;

      return a.then(
        (result) => {
          this.loadingProfiles = false;
          resultFn(state, result.data);

          return result;
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
    runSetDefaultProfile(data, callback, counter) {
      this.loadingProfiles = true;
      let a = window.BX.ajax.runComponentAction(
        this.actions.setDefaultProfile.component,
        this.actions.setDefaultProfile.method,
        data
      );
      let state = this;

      return a.then(
        (result) => {
          this.loadingProfiles = false;
          resultFn(state, result);

          return result;
        },
        (error) => {
          this.loadingProfiles = false;
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox']
          ) {
            resultFn(
              state,
              window.twinpx.vue['appeal-inbox'].setDefaultProfile
            );
          } else {
            this.showError({ error, method: 'setDefaultProfile' });
          }
        }
      );

      function resultFn(state, result) {
        if (counter === state.profilesCounter) {
          state.setDefaultProfile({ id: result.data });

          if (callback) {
            callback();
          }
        }
      }
    },
    bitrixLogs() {},
  },
});
