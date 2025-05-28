import { Auth } from '../pages/auth.js';
import { Code } from '../pages/code.js';
import { Edit } from '../pages/edit.js';
import { Info } from '../pages/info.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { authStore } from '../stores/auth.js';
import { codeStore } from '../stores/code.js';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const TwoCols = {
  data() {
    return {};
  },
  components: {
    Auth,
    Code,
    Edit,
    Info,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">

      <h3 class="mt-0">{{ heading }}</h3>

      <div v-html="text"></div>

      <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

      <hr v-if="error" />

      <router-view />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'sessid',
      'signedParameters',
      'heading',
      'text',
      'lang',
      'info',
      'infoButton',
      'state',
      'error',
      'errorButton',
    ]),
    ...mapState(authStore, ['errorButton']),
    ...mapState(codeStore, ['uuid']),
    altButton() {
      return this.lang[
        `AUTH_SMS_${String(this.state).toUpperCase()}_ALT_BUTTON`
      ];
    },
  },
  methods: {
    ...mapActions(dataStore, ['changeState', 'setInfo', 'setInfoMessage']),
    clickErrorButton() {},
  },
  mounted() {},
};
