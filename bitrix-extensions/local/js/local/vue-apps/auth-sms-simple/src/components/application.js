import '../style/application.css';
import { Sms } from '../pages/sms.js';
import { Code } from '../pages/code.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { smsStore } from '../stores/sms';
import { codeStore } from '../stores/code';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Application = {
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

      <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

      <Sms v-if="state === 'sms'" />
      <Code v-else-if="state === 'code'" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'sessid',
      'signedParameters',
      'templateFolder',
      'lang',
      'info',
      'state',
      'error',
      'errorButton',
    ]),
    ...mapState(smsStore, ['errorButton']),
    ...mapState(codeStore, ['uuid']),
    title() {
      return this.lang[`AUTH_SMS_${String(this.state).toUpperCase()}_TITLE`];
    },
    altButton() {
      return this.lang[
        `AUTH_SMS_${String(this.state).toUpperCase()}_ALT_BUTTON`
      ];
    },
  },
  methods: {
    ...mapActions(dataStore, ['changeState', 'setInfo']),
  },
  mounted() {},
};
