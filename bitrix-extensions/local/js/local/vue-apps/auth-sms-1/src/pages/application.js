import '../style/application.css';
import { Sms } from '../pages/sms.js';
import { Ornz } from '../pages/ornz.js';
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
    Ornz,
    Code,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <router-view />
	`,
  computed: {
    ...mapState(dataStore, [
      'sessionid',
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
    clickInfoButton() {
      this.setInfo('');
    },
    clickAlt() {
      if (this.state === 'ornz') {
        this.changeState('sms');
      } else {
        this.changeState('ornz');
      }
      // window.location.href = '/auth/';
    },
    clickErrorButton() {
      this.changeState('ornz');
    },
  },
  mounted() {},
};
