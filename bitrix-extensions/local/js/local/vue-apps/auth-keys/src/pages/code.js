import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { codeStore } from '../stores/code.js';
import { authStore } from '../stores/auth.js';

import '../style/code.css';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Code = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
    ButtonComponent,
  },
  emits: ['openOrnz'],
  // language=Vue

  template: `

      <h2 v-if="lang.heading">{{ lang.heading }}</h2>

      <div v-if="lang.html" v-html="lang.html"></div>

      <MessageComponent v-if="error" type="error" :message="error" />

      <div class="auth-keys-code-form">

        <div class="auth-keys-code-form-body">

          <div :class="{'auth-keys-code-inputs': true, 'auth-keys-code-inputs--invalid': invalidInputs}">

            <div :class="{'auth-keys-code-inputs-label': true, 'auth-keys-code-inputs-label--disabled': inputs.every(i => i.disabled)}">{{ lang.label }}</div>
            
            <div class="auth-keys-code-inputs-body" ref="inputs">

              <input v-for="(input, index) in inputs"
                :key="input.id"
                :type="inputType()"
                :class="{'auth-keys-code-input': true, 'auth-keys-code-input--disabled': input.disabled}"
                v-model="this['inputValue'+index]"
                @keydown.backspace="backspaceInput(input, index)"
                @focus="focusText()"
              />

            </div>

            <div class="auth-keys-code-inputs__warning">{{ error }}</div>
          </div>

          <div>
            <ButtonComponent :text="lang.submit" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="runCheck" />
          </div>

          <div>
            <ButtonComponent v-if="timer === 0 || !!timer" :text="buttonTimerText" :props="Object.keys(timerProps)" :disabled="timerDisabled" @clickButton="clickNewCode" />
          </div>

        </div>
      </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher', 'error']),
    ...mapState(codeStore, [
      'lang',
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
          `.auth-keys-code-input`
        )[index + 1];

        if (String(value) && String(value).match(/[0-9]/) && next) {
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
          `.auth-keys-code-input`
        )[index + 1];

        if (String(value) && String(value).match(/[0-9]/) && next) {
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
          `.auth-keys-code-input`
        )[index + 1];

        if (String(value) && String(value).match(/[0-9]/) && next) {
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
          `.auth-keys-code-input`
        )[index + 1];

        if (String(value) && String(value).match(/[0-9]/) && next) {
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
          `.auth-keys-code-input`
        )[index + 1];

        if (String(value) && String(value).match(/[0-9]/) && next) {
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

        if (String(value)) {
          this.$refs.inputs
            .querySelectorAll(`.auth-keys-code-input`)
            [index].blur();
        }
      },
    },
  },
  watch: {
    clearInputs() {
      this.$refs.inputs
        .querySelectorAll(`.auth-keys-code-input`)
        .forEach((input) => (input.value = ''));
    },
    routeWatcher(val) {
      this.$router.push(val);
    },
  },
  methods: {
    ...mapActions(dataStore, ['setInfoButton', 'setError']),
    ...mapActions(authStore, ['runSend']),
    ...mapActions(codeStore, [
      'invertClearInputs',
      'changeInputValue',
      'runCheck',
      'changeButtonProps',
      'buttonTimer',
      'setInvalidInputs',
    ]),
    clickNewCode() {
      this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
      this.runSend();
    },
    backspaceInput(input, index) {
      if (String(input.value).trim() === '') {
        const prev = this.$refs.inputs.querySelectorAll(
          `.auth-keys-code-input`
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

        this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
      }
    },
    inputType() {
      if (window.matchMedia('(max-width: 767px)').matches) {
        return 'number';
      } else {
        return 'text';
      }
    },
  },
  mounted() {
    this.$refs.inputs.querySelector('.auth-keys-code-input').focus();
    this.setInfoButton('');
  },
};
