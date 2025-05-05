import { Sms } from '../pages/sms.js';
import { Code } from '../pages/code.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { smsStore } from '../stores/sms.js';
import { codeStore } from '../stores/code.js';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const TwoCols = {
  data() {
    return {};
  },
  components: {
    Sms,
    Code,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">

      <h3 class="mt-0">{{ title }}</h3>

      <p>{{ text }}</p>

      <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

      <hr v-if="error" />

      <router-view />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'sessid',
      'signedParameters',
      'lang',
      'info',
      'infoButton',
      'state',
      'error',
      'errorButton',
    ]),
    ...mapState(smsStore, ['errorButton']),
    ...mapState(codeStore, ['uuid']),
    title() {
      return this.lang[`AUTH_SMS_SIMPLE_TITLE`];
    },
    text() {
      return this.lang[`AUTH_SMS_SIMPLE_TEXT`];
    },
    altButton() {
      return this.lang[
        `AUTH_SMS_${String(this.state).toUpperCase()}_ALT_BUTTON`
      ];
    },
  },
  methods: {
    ...mapActions(dataStore, ['changeState', 'setInfo', 'setInfoMessage']),
    clickInfoButton() {
      this.setInfo('');
      this.setInfoMessage('');
    },
    clickErrorButton() {},
  },
  mounted() {},
};
