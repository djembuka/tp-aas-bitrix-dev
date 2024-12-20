import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { codeStore } from '../stores/code.js';
import { smsStore } from '../stores/sms.js';

import '../style/code.css';

import { ButtonComponent } from 'local.vue-components.button-component';

export const Code = {
  data() {
    return {
      inputValue: '',
    };
  },
  components: {
    ButtonComponent,
  },
  emits: ['openOrnz'],
  // language=Vue

  template: `
      <div class="vue-auth-sms-code-form">
        <div class="vue-auth-sms-code-form-body">
          <div :class="{'vue-auth-sms-code-inputs': true, 'vue-auth-sms-code-inputs--invalid': invalidInputs}">

            <div :class="{'vue-auth-sms-code-inputs-label': true, 'vue-auth-sms-code-inputs-label--disabled': inputs.every(i => i.disabled)}">{{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}</div>
            
            <div class="vue-auth-sms-code-inputs-body" ref="inputs">

              <input v-for="(input, index) in inputs"
                :key="input.id"
                type="text"
                :class="{'vue-auth-sms-code-input': true, 'vue-auth-sms-code-input--disabled': input.disabled}"
                v-model="input.value"
                @input="inputText(input, index, $event)"
                @keyup.backspace="backspaceInput(index)"
                @focus="focusText()"
              />

            </div>

            <div class="vue-auth-sms-code-inputs__warning">{{ error }}</div>
          </div>

          <div><ButtonComponent :text="lang.AUTH_SMS_CODE_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runCheck" /></div>
          <div><ButtonComponent v-if="timer === 0 || !!timer" :text="buttonTimerText" :props="Object.keys(timerProps)" :disabled="timerDisabled" @clickButton="clickNewCode" /></div>
        </div>
      </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'error']),
    ...mapState(codeStore, [
      'inputs',
      'uuid',
      'submitProps',
      'buttonDisabled',
      'buttonTimerText',
      'timerDisabled',
      'timerProps',
      'timer',
      'clearInputs',
      'invalidInputs',
    ]),
  },
  watch: {
    clearInputs() {
      this.$refs.inputs
        .querySelectorAll(`.vue-auth-sms-code-input`)
        .forEach((input) => (input.value = ''));
    },
    inputValue(value) {
      this.changeInputValue({ value });
    },
  },
  methods: {
    ...mapActions(dataStore, ['changeState', 'setError']),
    ...mapActions(smsStore, ['runSend']),
    ...mapActions(codeStore, [
      'changeInputValue',
      'runCheck',
      'changeButtonProps',
      'buttonTimer',
      'setInvalidInputs',
    ]),
    clickNewCode() {
      this.runSend();
    },
    backspaceInput(index) {
      const prev = this.$refs.inputs.querySelectorAll(
        `.vue-auth-sms-code-input`
      )[index - 1];

      if (prev) {
        prev.focus();
      }
    },
    inputText(input, index, event) {
      const value = event.target.value;
      this.changeInputValue({ control: input, value });

      const next = this.$refs.inputs.querySelectorAll(
        `.vue-auth-sms-code-input`
      )[index + 1];

      if (value && next) {
        next.focus();
      }
    },
    focusText() {
      if (this.invalidInputs) {
        this.inputs.forEach((input) => {
          input.value = '';
        });
        this.setInvalidInputs(false);
        this.setError('');

        this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
      }
    },
  },
  mounted() {
    this.$refs.inputs.querySelector('.vue-auth-sms-code-input').focus();
  },
};
