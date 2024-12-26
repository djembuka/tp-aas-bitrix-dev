import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { smsStore } from '../stores/sms.js';

import './sms.css';

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
    <div class="vue-auth-sms-sms">Timer: {{timerEnd}}, {{timer}}
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
    ...mapState(dataStore, ['lang']),
    ...mapState(smsStore, [
      'controls',
      'submitProps',
      'buttonDisabled',
      'buttonSubmitTimerText',
      'timer',
      'timerEnd',
    ]),
  },
  methods: {
    ...mapActions(smsStore, [
      'input',
      'runSend',
      'changeSubmitProps',
      'buttonSubmitTimer',
    ]),
    clickSubmit() {
      this.changeSubmitProps({ 'load-circle': true });
      this.runSend();
    },
  },
  mounted() {
    this.buttonSubmitTimer(60);
  },
};
