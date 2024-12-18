import { Sms } from '../pages/sms.js';
import { Ornz } from '../pages/ornz.js';
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
    Ornz,
    Code,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">

        <h3 class="mt-0">{{ title }}</h3>

        <MessageComponent type="info" :message="info" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />
        <hr v-if="info && error">
        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

        <router-view />

        <hr class="hr--line hr--none" />

        <div class="vue-auth-sms-alt">
          <div><ButtonComponent :text="altButton" :props="['medium', 'primary']" @clickButton="clickAlt" /></div>
          <div><a href="">{{ lang.AUTH_SMS_ENTER_LINK }}</a></div>
        </div>

      </div>
      <div class="vue-auth-sms-right">
        <img :src="templateFolder + '/auth-sms-ill.png'" alt="">
      </div>
      
    </div>
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
    },
    clickErrorButton() {
      this.changeState('ornz');
    },
  },
  mounted() {},
};
