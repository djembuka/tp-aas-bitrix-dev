import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const TwoCols = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">

        <h3 class="mt-0">{{ title }}</h3>

        <MessageComponent v-if="info" type="info" :message="info" :button="infoButton" @clickButton="clickInfoButton" />
        <hr v-if="info && error">
        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

        <router-view />

        <hr class="hr--line hr--none" />

        <div class="vue-auth-sms-alt">
          <div><ButtonComponent :text="altButton" :props="['medium', 'primary']" @clickButton="clickAlt" /></div>
          <div><router-link to="/center-col/restore">{{ lang.AUTH_SMS_ENTER_LINK }}</router-link></div>
        </div>

      </div>
      <div class="vue-auth-sms-right">
        <img :src="templateFolder + '/auth-sms-ill.png'" alt="">
      </div>
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'templateFolder',
      'lang',
      'title',
      'info',
      'infoButton',
      'state',
      'error',
      'errorButton',
      'altButton',
    ]),
  },
  methods: {
    ...mapActions(dataStore, ['changeState', 'setInfo', 'setInfoMessage']),
    clickInfoButton() {
      this.setInfo('');
      this.setInfoMessage('');
    },
    clickErrorButton() {
      this.$router.push('/two-cols/ornz');
      this.changeState('ornz');
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
  },
  mounted() {},
};
