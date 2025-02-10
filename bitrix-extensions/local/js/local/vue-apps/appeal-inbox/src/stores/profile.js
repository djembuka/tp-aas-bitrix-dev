import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const profileStore = defineStore('profile', {
  state: () => ({
    actions: {
      profiles: {},
    },
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
    hideErrorProfile() {
      this.errorProfile = '';
    },
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
                this.errorProfile = `${window.BX.message('ERROR_SUPPORT')}
                    <br>
                    <br>
                    Метод: ${method}. Код ошибки: ${
                  error.data.ajaxRejectData.data
                }. Описание: ${
                  window.BX.message(
                    'ERROR_' + error.data.ajaxRejectData.data
                  ) || window.BX.message('ERROR_SERVER')
                }.`;
              }
            } else if (window.BX.message) {
              this.errorProfile = `${window.BX.message('ERROR_SUPPORT')}
                <br>
                <br>
                Метод: ${method}. Код ошибки: NETWORK_ERROR. Описание: ${window.BX.message(
                'ERROR_OFFLINE'
              )}.`;
            }
          } else {
            this.errorProfile = `${window.BX.message('ERROR_SUPPORT')}
              <br>
              <br>
              Метод: ${method}.${
              error.errors[0].code
                ? ' Код ошибки: ' + error.errors[0].code + '.'
                : ''
            } ${
              error.errors[0].message
                ? ' Описание: ' + error.errors[0].message + '.'
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
        this.actions.profiles.component + '0',
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
          // this.showError({ error, method: 'profiles' });
          if (
            window.twinpx &&
            window.twinpx.vue.markup &&
            window.twinpx.vue['appeal-inbox0']
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
