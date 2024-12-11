import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { codeStore } from '../stores/code.js';

import './code.css';

import { ButtonComponent } from 'local.vue-components.button-component';

export const Code = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  emits: ['openOrnz'],
  // language=Vue

  template: `
      <div class="vue-auth-sms-code-form">
        <div class="vue-auth-sms-code-form-body">
          <div class="vue-auth-sms-code-controls">
            <input type="text" class="vue-auth-sms-code-control" ref="input1" @input="input(1)" />
            <input type="text" class="vue-auth-sms-code-control" ref="input2" @input="input(2)" />
            <input type="text" class="vue-auth-sms-code-control" ref="input3" @input="input(3)" />
            <input type="text" class="vue-auth-sms-code-control" ref="input4" @input="input(4)" />
            <input type="text" class="vue-auth-sms-code-control" ref="input5" @input="input(5)" />
            <input type="text" class="vue-auth-sms-code-control" ref="input6" @input="input(6)" />
          </div>
          <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_CODE_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
        </div>
      </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(codeStore, [
      'state',
      'tel',
      'checkbox',
      'submitProps',
      'error',
      'errorButton',
      'buttonDisabled',
      'buttonSubmitTimerText',
    ]),
  },
  methods: {
    ...mapActions(codeStore, [
      'changeControlValue',
      'runFormSubmit',
      'changeSubmitProps',
    ]),
    input(num) {
      if (this.$refs[`input${num}`].value && this.$refs[`input${num + 1}`]) {
        this.$refs[`input${num + 1}`].focus();
      }
    },
  },
  mounted() {},
};
