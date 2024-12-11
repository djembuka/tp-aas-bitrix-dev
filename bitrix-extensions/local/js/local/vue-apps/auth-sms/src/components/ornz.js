import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { ornzStore } from '../stores/ornz.js';

import './ornz.css';

import { MessageComponent } from 'local.vue-components.message-component';
import { ControlHint } from 'local.vue-components.control-hint';
import { ControlPassword } from 'local.vue-components.control-password';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Ornz = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
    ControlHint,
    ControlPassword,
    ControlCheckbox,
    ButtonComponent,
  },
  emits: ['openA1'],
  // language=Vue

  template: `
    <div class="vue-auth-sms-ornz">
      <h3 class="mt-0">{{ lang.AUTH_SMS_ORNZ_TITLE }}</h3>
      <MessageComponent type="info" :message="lang.AUTH_SMS_ORNZ_MESSAGE_INFO" :button="lang.AUTH_SMS_ORNZ_BUTTON_INFO" @clickButton="console.log('click button')" />

      <div class="vue-auth-sms-ornz-form">
        <div class="vue-auth-sms-ornz-form-body">
          <ControlHint :control="hint" @input="inputHint" @focus="focus" @blur="blur" @enter="enter" />
          <hr />
          <ControlPassword :control="password" @input="inputPassword" @focus="focus" @blur="blur" @enter="enter" />
          <hr />
          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />
          <hr />
          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
        </div>
      </div>

      <hr class="hr--line hr--none" />

      <div class="vue-auth-sms-ornz-ornz-enter">

        <div>
          <ButtonComponent :text="lang.AUTH_SMS_ORNZ_BUTTON_ORNZ" :props="['medium', 'primary']" @clickButton="clickA1" />
        </div>

        <div>
          <a href="">{{ lang.AUTH_SMS_ORNZ_ENTER }}</a>
        </div>

      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(ornzStore, [
      'state',
      'hint',
      'password',
      'checkbox',
      'submitProps',
      'error',
      'errorButton',
      'buttonDisabled',
      'buttonSubmitTimerText',
    ]),
  },
  methods: {
    ...mapActions(ornzStore, [
      'changeControlValue',
      'runFormSubmit',
      'changeSubmitProps',
    ]),
    inputHint({ value }) {
      this.changeControlValue({ value, control: this.hint });
    },
    inputCheckbox({ value }) {
      this.changeControlValue({ value, control: this.checkbox });
    },
    clickSubmit() {
      this.changeSubmitProps({ 'load-circle': true });
      this.runFormSubmit();
    },
    clickA1() {
      this.$emit('openA1');
    },
  },
  mounted() {},
};
