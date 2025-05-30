import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { authStore } from '../stores/auth.js';

import '../style/auth.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Auth = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue
  template: `
    <h3>{{ lang.heading }}</h3>

    <div v-html="lang.html"></div>

    <MessageComponent v-if="error" type="error" :message="error" />

    <div class="vue-auth-sms-auth">

      <ControlComponent v-for="control in controls" :key="control.id" :control="control" @input="input" />

      <ButtonComponent :text="buttonSubmitTimerText || lang.button" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher']),
    ...mapState(authStore, [
      'lang',
      'interface',
      'controls',
      'submitProps',
      'deleteProps',
      'buttonDisabled',
      'buttonSubmitTimerText',
      'telIsFilled',
    ]),
  },
  watch: {
    routeWatcher(val) {
      this.$router.push(val);
    },
  },
  methods: {
    ...mapActions(dataStore, ['setError']),
    ...mapActions(authStore, [
      'input',
      'runSend',
    ]),
    clickSubmit() {
      this.runSend();
    },
  },
  mounted() {
    this.setError('');
  },
};
