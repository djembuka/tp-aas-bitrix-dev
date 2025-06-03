import './template2.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreStore } from '../stores/restore.js';

import { Restore } from './restore.js';

import { MessageComponent } from 'local.vue-components.message-component';

export const Template2 = {
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
        <Restore />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(restoreStore, ['info']),
    title() {
      return this.lang[`AUTH_RESTORE_TITLE`];
    },
  },
  methods: {
    clickInfoButton() {},
  },
};
