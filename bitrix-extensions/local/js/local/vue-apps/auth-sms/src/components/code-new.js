import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { codeStore } from '../stores/code.js';
import { smsStore } from '../stores/sms.js';

import './code.css';

import { ButtonComponent } from 'local.vue-components.button-component';

export const Code = {
  data() {
    return {
      codeValues: Array(6).fill(''),
      inputRefs: [],
    };
  },
  components: {
    ButtonComponent,
  },
  computed: {
    // Можно синхронизировать codeValues со стором, если нужно:
    // get/set через mapState/mapActions codeStore
    ...mapState(dataStore, ['lang', 'error']),
    ...mapState(codeStore, [
      'inputs', 'submitProps', 'buttonDisabled',
      'buttonTimerText', 'timerDisabled', 'timerProps',
      'timer', 'clearInputs', 'invalidInputs',
    ]),
  },
  methods: {
    ...mapActions(dataStore, ['setError']),
    ...mapActions(smsStore, ['runSend']),
    ...mapActions(codeStore, ['runCheck', 'setInvalidInputs', 'changeInputValue']),
    setRef(el, index) {
      if (el) this.inputRefs[index] = el;
    },
    handleInput(e, index) {
      let v = (e.target.value || '').replace(/\D/g, '');
      if (v.length > 1) v = v.slice(-1);
      this.$set(this.codeValues, index, v);
      this.changeInputValue({ control: this.inputs[index], value: v });
      if (v && this.inputRefs[index + 1]) this.inputRefs[index + 1].focus();
    },
    handleKeydownBackspace(e, index) {
      if ((this.codeValues[index] || '').trim() === '' && this.inputRefs[index - 1]) {
        this.inputRefs[index - 1].focus();
      }
    },
    handlePaste(e) {
      const text = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
      if (!text) return;
      e.preventDefault();
      text.split('').forEach((ch, i) => {
        if (i < this.codeValues.length) {
          this.$set(this.codeValues, i, ch);
          this.changeInputValue({ control: this.inputs[i], value: ch });
        }
      });
      const next = this.inputRefs[text.length] || this.inputRefs[this.codeValues.length - 1];
      if (next) next.focus();
    },
    focusText() {
      if (this.invalidInputs) {
        this.codeValues = Array(6).fill('');
        this.inputs.forEach((input, i) => (input.value = ''));
        this.setInvalidInputs(false);
        this.setError('');
        this.inputRefs[0]?.focus();
      }
    },
    clickNewCode() {
      this.runSend();
    },
  },
  watch: {
    clearInputs() {
      this.codeValues = Array(6).fill('');
      this.$nextTick(() => this.inputRefs[0]?.focus());
    },
  },
  mounted() {
    this.inputRefs[0]?.focus();
  },
  template: `
    <div class="vue-auth-sms-code-form">
      <div class="vue-auth-sms-code-form-body">
        <div :class="{'vue-auth-sms-code-inputs': true, 'vue-auth-sms-code-inputs--invalid': invalidInputs}">
          <div :class="{'vue-auth-sms-code-inputs-label': true, 'vue-auth-sms-code-inputs-label--disabled': inputs.every(i => i.disabled)}">
            {{ lang.AUTH_SMS_CODE_LABEL_INPUTS }}
          </div>

          <div class="vue-auth-sms-code-inputs-body" ref="inputs" @paste="handlePaste">
            <input
              v-for="(input, index) in inputs"
              :key="input.id"
              type="text"
              inputmode="numeric"
              autocomplete="one-time-code"
              enterkeyhint="done"
              maxlength="1"
              pattern="[0-9]*"
              :class="{'vue-auth-sms-code-input': true, 'vue-auth-sms-code-input--disabled': input.disabled}"
              :value="codeValues[index]"
              @input="handleInput($event, index)"
              @keydown.backspace.prevent="handleKeydownBackspace($event, index)"
              @focus="focusText()"
              :ref="el => setRef(el, index)"
            />
          </div>

          <div class="vue-auth-sms-code-inputs__warning">{{ error }}</div>
        </div>

        <div>
          <ButtonComponent
            :text="lang.AUTH_SMS_CODE_BUTTON_SUBMIT"
            :props="Object.keys(submitProps)"
            :disabled="buttonDisabled"
            @clickButton="runCheck"
          />
        </div>
        <div>
          <ButtonComponent
            v-if="timer === 0 || !!timer"
            :text="buttonTimerText"
            :props="Object.keys(timerProps)"
            :disabled="timerDisabled"
            @clickButton="clickNewCode"
          />
        </div>
      </div>
    </div>
  `,
};