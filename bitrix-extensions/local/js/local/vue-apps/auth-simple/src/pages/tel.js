import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { telStore } from '../stores/tel.js';

import '../style/sms.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Tel = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue
  template: `
    <div class="twpx-auth-simple-tel">
      <ControlComponent :control="control" @input="input" />
      <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SIMPLE_TEL_BUTTON" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'state', 'infoMessage']),
    ...mapState(telStore, [
      'control',
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
    ...mapActions(telStore, ['input', 'runSend']),
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
