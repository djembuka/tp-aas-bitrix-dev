import '../style/center-col.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreStore } from '../stores/restore.js';

import { Restore } from '../pages/restore.js';

import { MessageComponent } from 'local.vue-components.message-component';

export const CenterCol = {
  data() {
    return {};
  },
  components: {
    Restore,
    MessageComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-center">

      <h3 class="mt-0">{{ title }}</h3>

      <MessageComponent v-if="info" type="info" :message="info" :button="lang.AUTH_SMS_RESTORE_BUTTON" @clickButton="clickInfoButton" />
      <hr v-if="info">

      <div class="vue-auth-center-body">
        <router-view />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'info']),
    ...mapState(restoreStore, []),
    title() {
      return this.lang[`AUTH_RESTORE_TITLE`];
    },
  },
  methods: {
    ...mapActions(dataStore, ['setInfo']),
    clickInfoButton() {
      this.setInfo('');
    },
  },
};
