import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    id: `id${Math.floor(Math.random() * 1000)}`,
    customData: {},
    lang: {
      heading: window.BX.message('TWPX_VOTING_CREATE_HEADING'),
      editHeading: window.BX.message('TWPX_VOTING_CREATE_EDIT_HEADING'),
      cancelButton: window.BX.message('TWPX_VOTING_CREATE_CANCEL_BUTTON'),
      sendButton: window.BX.message('TWPX_VOTING_CREATE_SEND_BUTTON'),
      editSendButton: window.BX.message('TWPX_VOTING_CREATE_EDIT_SEND_BUTTON'),
    },
    actions: {
      editVoting: ['twinpx:voting.form', 'editVoting'],
      voting: ['twinpx:voting.form', 'voting'],
    },
    votingDetailURL: '',
    voting: {},
  }),
  actions: {
    changeProp(prop, value) {
      this[prop] = value;
    },
    runBitrixMethod(method, data) {
      if (!this.actions[method] || !Array.isArray(this.actions[method])) {
        return Promise.reject({
          errors: [{ message: `No such method ${method}` }],
        });
      }

      return BX.ajax.runComponentAction(
        this.actions[method][0],
        this.actions[method][1],
        {
          mode: 'class',
          data: {
            ...this.customData,
            ...data,
          },
          signedParameters: this.signedParameters,
        }
      );
    },
  },
});
