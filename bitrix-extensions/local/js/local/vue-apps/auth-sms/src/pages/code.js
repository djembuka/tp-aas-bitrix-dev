import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { codeStore } from '../stores/code.js';
import { smsStore } from '../stores/sms.js';

import '../style/code.css';

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
          <div :class="{'vue-auth-sms-code-inputs': true, 'vue-auth-sms-code-inputs--invalid': invalidInputs}">

            <div :class="{'vue-auth-sms-code-inputs-label': true, 'vue-auth-sms-code-inputs-label--disabled': inputs.every(i => i.disabled)}">{{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}</div>
            
            <div class="vue-auth-sms-code-inputs-body" ref="inputs">

              <input v-for="(input, index) in inputs"
                :key="input.id"
                type="text"
                :class="{'vue-auth-sms-code-input': true, 'vue-auth-sms-code-input--disabled': input.disabled}"
                v-model="this['inputValue'+index]"
                @keydown.backspace="backspaceInput(input, index)"
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
    inputValue0: {
      get() {
        const index = 0;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 0;

        this.changeInputValue({ control: this.inputs[index], value });

        const next = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index + 1];

        if (value && value.match(/[0-9]/) && next) {
          next.focus();
        }
      },
    },
    inputValue1: {
      get() {
        const index = 1;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 1;

        this.changeInputValue({ control: this.inputs[index], value });

        const next = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index + 1];

        if (value && value.match(/[0-9]/) && next) {
          next.focus();
        }
      },
    },
    inputValue2: {
      get() {
        const index = 2;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 2;

        this.changeInputValue({ control: this.inputs[index], value });

        const next = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index + 1];

        if (value && value.match(/[0-9]/) && next) {
          next.focus();
        }
      },
    },
    inputValue3: {
      get() {
        const index = 3;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 3;

        this.changeInputValue({ control: this.inputs[index], value });

        const next = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index + 1];

        if (value && value.match(/[0-9]/) && next) {
          next.focus();
        }
      },
    },
    inputValue4: {
      get() {
        const index = 4;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 4;

        this.changeInputValue({ control: this.inputs[index], value });

        const next = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index + 1];

        if (value && value.match(/[0-9]/) && next) {
          next.focus();
        }
      },
    },
    inputValue5: {
      get() {
        const index = 5;
        return this.inputs[index].value;
      },
      set(value) {
        const index = 5;

        this.changeInputValue({ control: this.inputs[index], value });
      },
    },
  },
  watch: {
    clearInputs() {
      this.$refs.inputs
        .querySelectorAll(`.vue-auth-sms-code-input`)
        .forEach((input) => (input.value = ''));
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
    backspaceInput(input, index) {
      if (input.value.trim() === '') {
        const prev = this.$refs.inputs.querySelectorAll(
          `.vue-auth-sms-code-input`
        )[index - 1];

        if (prev) {
          prev.focus();
        }
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
