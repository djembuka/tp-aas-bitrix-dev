import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreStore } from '../stores/restore.js';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Restore = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-restore">
      <router-link to="/sms">Go to sms</router-link>
      <router-view />
      <div v-for="control in controls" :key="control.id">
        <ControlComponent :control="control" @input="input" />
        <hr />
      </div>
      <ButtonComponent :text="lang.AUTH_RESTORE_BUTTON" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runRestore" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(restoreStore, [
      'controls',
      'submitProps',
      'buttonDisabled',
      'input',
    ]),
  },
  methods: {
    ...mapActions(restoreStore, ['runRestore']),
  },
};
