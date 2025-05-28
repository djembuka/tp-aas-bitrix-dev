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
    <router-view />
	`,
  computed: {
    ...mapState(dataStore, [
      'sessid',
      'signedParameters',
      'lang',
      'info',
      'error',
      'errorButton',
    ]),
    ...mapState(smsStore, ['errorButton']),
    ...mapState(codeStore, ['uuid']),
  },
  methods: {
    ...mapActions(dataStore, ['setInfo']),
    clickInfoButton() {
      this.setInfo('');
    },
  },
  mounted() {},
};
