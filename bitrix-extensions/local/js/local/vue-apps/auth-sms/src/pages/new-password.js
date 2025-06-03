import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { newPasswordStore } from '../stores/new-password.js';

export const NewPassword = {
  data() {
    return {};
  },
  components: {},
  // language=Vue

  template: `
    <div class="vue-auth-sms-restore">
      <div v-for="control in controls" :key="control.id">
        <ControlComponent :control="control" @input="input" />
        <hr />
      </div>
      <ButtonComponent :text="lang.AUTH_RESTORE_BUTTON" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runRestore" />
    </div>
	`,
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setTitle',
      'setError',
    ]),
    ...mapActions(newPasswordStore, ['controls', 'run']),
  },
  mounted() {
    this.setTitle(this.lang[`AUTH_NEW_PASSWORD_TITLE`]);
    this.setInfo(this.lang['AUTH_NEW_PASSWORD_MESSAGE']);
    this.setInfoButton(false);
    this.setError('');
  },
};
