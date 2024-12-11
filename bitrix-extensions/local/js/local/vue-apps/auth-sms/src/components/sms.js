import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { smsStore } from '../stores/sms.js';

import './sms.css';

import { ControlTel } from 'local.vue-components.control-tel';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Sms = {
  data() {
    return {};
  },
  components: {
    ControlTel,
    ControlCheckbox,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-sms">
      <div class="vue-auth-sms-sms-form">
        <div class="vue-auth-sms-sms-form-body">
          <ControlTel :control="tel" @input="inputTel" @focus="focus" @blur="blur" @enter="enter" />
          <hr />
          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />
          <hr />
          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(smsStore, [
      'tel',
      'checkbox',
      'submitProps',
      'buttonDisabled',
      'buttonSubmitTimerText',
    ]),
  },
  methods: {
    ...mapActions(smsStore, [
      'changeControlValue',
      'runFormSubmit',
      'changeSubmitProps',
    ]),
    inputTel({ value }) {
      this.changeControlValue({ value, control: this.tel });
    },
    inputCheckbox({ value }) {
      this.changeControlValue({ value, control: this.checkbox });
    },
    clickSubmit() {
      this.changeSubmitProps({ 'load-circle': true });
      this.runFormSubmit();
    },
  },
  mounted() {},
};
