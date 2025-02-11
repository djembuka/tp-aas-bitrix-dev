import { defineStore } from 'ui.vue3.pinia';

export const profileStore = defineStore('profile', {
  state: () => ({
    actions: {
      profiles: {},
    },
    localize: {},
    profiles: [],
    profilesCounter: 0,
    errorProfile: '',
    loadingProfiles: true,
  }),
  getters: {
    defaultProfile() {
      return this.profiles.find((p) => p.default);
    },
  },
  actions: {
    showError({ error, method }) {
      if (typeof error === 'boolean') {
        this.errorProfile = error;
      } else if (typeof error === 'object') {
        if (
          error.errors &&
          typeof error.errors === 'object' &&
          error.errors[0] &&
          error.errors[0].code !== undefined
        ) {
          if (error.errors[0].code === 'NETWORK_ERROR') {
            if (error.data && error.data.ajaxRejectData) {
              if (error.data.ajaxRejectData.data) {
                this.errorProfile = `${
                  this.localize.APPEAL_INBOX_ERROR_METHOD
                }: ${method}. ${this.localize.APPEAL_INBOX_ERROR_CODE}: ${
                  error.data.ajaxRejectData.data
                }. ${this.localize.APPEAL_INBOX_ERROR_DESCRIPTION}: ${
                  window.BX.message(
                    'ERROR_' + error.data.ajaxRejectData.data
                  ) || window.BX.message('ERROR_SERVER')
                }.`;
              }
            } else if (window.BX.message) {
              this.errorProfile = `${
                this.localize.APPEAL_INBOX_ERROR_METHOD
              }: ${method}. ${
                this.localize.APPEAL_INBOX_ERROR_CODE
              }: NETWORK_ERROR. ${
                this.localize.APPEAL_INBOX_ERROR_DESCRIPTION
              }: ${window.BX.message('ERROR_OFFLINE')}.`;
            }
          } else {
            this.errorProfile = `${
              this.localize.APPEAL_INBOX_ERROR_METHOD
            }: ${method}.${
              error.errors[0].code
                ? ' ' +
                  this.localize.APPEAL_INBOX_ERROR_CODE +
                  ': ' +
                  error.errors[0].code +
                  '.'
                : ''
            } ${
              error.errors[0].message
                ? ' ' +
                  this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                  ': ' +
                  error.errors[0].message +
                  '.'
                : ''
            }`;
          }
        }
      }
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
        if (typeof data === 'object' && data.length === 0) {
          state.showError({
            error: {
              errors: [
                {
                  code: '',
                  message: 'No profiles found',
                },
              ],
            },
            method: 'profiles',
          });
        }
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
