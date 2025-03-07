import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { smsStore } from '../stores/sms.js';

import '../style/sms.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Sms = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-sms">
      <div class="vue-auth-sms-sms-form">
        <div class="vue-auth-sms-sms-form-body">
          <div v-for="control in controls" :key="control.id">
            <ControlComponent :control="control" @input="input" />
            <hr />
          </div>
          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'state', 'infoMessage']),
    ...mapState(smsStore, [
      'controls',
      'submitProps',
      'buttonDisabled',
      'buttonSubmitTimerText',
    ]),
  },
  watch: {
    state(val) {
      if (val === 'code') {
        this.$router.push('/two-cols/code');
      }
    },
  },
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setError',
      'setQuery',
      'setAltButton',
      'setTitle',
    ]),
    ...mapActions(smsStore, ['input', 'runSend']),
    clickSubmit() {
      this.runSend();
    },
  },
  mounted() {
    this.setTitle(this.lang[`AUTH_SMS_SMS_TITLE`]);
    this.setAltButton(this.lang[`AUTH_SMS_SMS_ALT_BUTTON`]);
    if (this.infoMessage) {
      this.setInfo(this.infoMessage);
    } else {
      this.setInfo('');
    }
    this.setInfoButton(this.lang.AUTH_SMS_INFO_BUTTON);
    this.setError('');
    this.setQuery({ type: 'sms' });
  },
};
