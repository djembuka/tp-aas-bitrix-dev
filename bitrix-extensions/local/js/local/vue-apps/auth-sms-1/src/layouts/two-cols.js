import '../style/layout.css';

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
    <div class="vue-auth-grid">
      <div class="vue-auth-grid-col">

        <h3 class="mt-0">{{ title }}</h3>

        <MessageComponent v-if="info" type="info" :message="info" :button="infoButton" @clickButton="clickInfoButton" />
        <hr v-if="info && error">
        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

        <router-view />

        <hr class="hr--line hr--none" />

        <div class="vue-auth-alt">
          <div><ButtonComponent :text="altButton" :props="['medium', 'primary']" @clickButton="clickAlt" /></div>
          <div><router-link to="/center-col/restore">{{ lang.AUTH_SMS_ENTER_LINK }}</router-link></div>
        </div>

      </div>
      <div class="vue-auth-grid-col">
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
      'infoButton',
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
    ...mapActions(dataStore, [
      'changeState',
      'setInfo',
      'setInfoMessageDefault',
    ]),
    clickInfoButton() {
      this.setInfo('');
      this.setInfoMessageDefault('');
    },
    clickAlt() {
      if (this.$route.path === '/two-cols/ornz') {
        this.$router.push('/two-cols/sms');
        this.changeState('sms');
      } else {
        this.$router.push('/two-cols/ornz');
        this.changeState('ornz');
      }
    },
    clickErrorButton() {
      this.$router.push('/two-cols/ornz');
      this.changeState('ornz');
    },
  },
  mounted() {},
};
