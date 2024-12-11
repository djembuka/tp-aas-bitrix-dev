import './application.css';
import { Sms } from './sms.js';
import { Ornz } from './ornz.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Application = {
  data() {
    return {
      state: 'sms',
      info: true,
      error: 'Error',
    };
  },
  components: {
    Sms,
    Ornz,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">


        <h3 class="mt-0">{{ title }}</h3>

        <MessageComponent v-if="info" type="info" :message="lang.AUTH_SMS_INFO_MESSAGE" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />
        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

        <Sms @openOrnz="openOrnz" v-if="state === 'sms'" />
        <Ornz @openA1="openA1" v-else-if="state === 'ornz'" />

        <hr class="hr--line hr--none" />

        <div class="vue-auth-sms-alt">
          <div><ButtonComponent :text="altButton" :props="['medium', 'primary']" @clickButton="clickAlt" /></div>
          <div><a href="">{{ lang.AUTH_SMS_ENTER_LINK }}</a></div>
        </div>

      </div>
      <div class="vue-auth-sms-right">
        <img src="/markup/pages/auth-sms/auth-sms-ill.png" alt="">
      </div>
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'signedParameters', 'lang']),
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
    // ...mapActions(tableStore, [
    //   'hideErrorTable',
    //   'runColumnsNames',
    //   'runItems',
    //   'runDefaultSort',
    //   'runSetDefaultSort',
    // ]),
    openOrnz() {
      this.state = 'ornz';
    },
    openA1() {
      this.state = 'A1';
    },
    clickInfoButton() {
      this.info = false;
    },
    clickAlt() {
      if (this.state === 'ornz') {
        this.state = 'sms';
      } else {
        this.state = 'ornz';
      }
    },
  },
  mounted() {},
};
