import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { a1Store } from '../stores/A1.js';

import './A1.css';

import { MessageComponent } from 'local.vue-components.message-component';
import { ControlTel } from 'local.vue-components.control-tel';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';
import { ButtonComponent } from 'local.vue-components.button-component';

export const A1 = {
  data() {
    return {
      submitProps: ['large', 'secondary', 'wide'],
    };
  },
  components: {
    MessageComponent,
    ControlTel,
    ControlCheckbox,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-a1">
      <h3 class="mt-0">{{ lang.AUTH_SMS_TITLE }}</h3>
      <MessageComponent type="info" :message="lang.AUTH_SMS_A1_MESSAGE_INFO" :button="lang.AUTH_SMS_A1_BUTTON_INFO" @clickButton="console.log('click button')" />
      
      <MessageComponent type="error" :message="lang.AUTH_SMS_A1_MESSAGE_INFO" />

      <div class="vue-auth-sms-a1-form">
        <div class="vue-auth-sms-a1-form-body">
          <ControlTel :control="tel" @input="inputTel" @focus="focus" @blur="blur" @enter="enter" />
          <hr />
          <ControlCheckbox :control="checkbox" @input="inputCheckbox" @focus="focus" @blur="blur" />
          <hr />
          <ButtonComponent :text="lang.AUTH_SMS_A1_BUTTON_SUBMIT" :props="submitProps" :disabled="buttonDisabled" @clickButton="clickSubmit" />
        </div>
      </div>

      <hr class="hr--line hr--none" />

      <div class="vue-auth-sms-a1-ornz-enter">

        <div>
          <ButtonComponent :text="lang.AUTH_SMS_A1_BUTTON_ORNZ" :props="['medium', 'primary']" @clickButton="clickORNZ" />
        </div>

        <div>
          <a href="">{{ lang.AUTH_SMS_A1_ENTER }}</a>
        </div>

      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(a1Store, ['tel', 'checkbox', 'buttonDisabled']),
  },
  methods: {
    ...mapActions(a1Store, ['changeControlValue', 'runFormSubmit']),
    inputTel({ value }) {
      this.changeControlValue({ value, control: this.tel });
    },
    inputCheckbox({ value }) {
      this.changeControlValue({ value, control: this.checkbox });
    },
    clickSubmit() {
      this.submitProps.push('load-circle');
      this.runFormSubmit();
    },
    clickORNZ() {
      console.log('click ornz');
    },
  },
  mounted() {},
};
