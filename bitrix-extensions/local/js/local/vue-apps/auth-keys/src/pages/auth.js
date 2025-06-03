import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { authStore } from '../stores/auth.js';

import '../style/auth.css';

import { MessageComponent } from 'local.vue-components.message-component';
import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Auth = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue
  template: `
    <h2 v-if="lang.heading">{{ lang.heading }}</h2>

    <div v-if="lang.html" v-html="lang.html"></div>

    <div class="auth-keys-auth">

      <MessageComponent v-if="error" type="error" :message="error" />

      <ControlComponent v-for="control in controls" :key="control.id" :control="control" @input="input" />

      <ButtonComponent :text="buttonSubmitTimerText || lang.submit" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher', 'error']),
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
      'setLabels'
    ]),
    clickSubmit() {
      this.runSend();
    },
  },
  mounted() {
    this.setError('');
    this.setLabels();
  },
};
