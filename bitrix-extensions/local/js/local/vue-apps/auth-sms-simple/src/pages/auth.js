import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { authStore } from '../stores/auth.js';

import '../style/sms.css';

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
    <div class="vue-auth-sms-sms">

      <div v-for="control in controls" :key="control.id">
        <div v-if="control.property === 'tel' && interface === 'filled'" class="vue-auth-sms-sms__tel">
          <ControlComponent :control="control" @input="input" />
          <div class="vue-auth-sms-sms__buttons">
            <ButtonComponent text="Изменить" :props="['secondary', 'medium']" @clickButton="clickChange" />

            <ButtonComponent text="Delete" :props="Object.keys(deleteProps)" @clickButton="clickDelete" />
          </div>
        </div>
        <div v-else>
          <ControlComponent :control="control" @input="input" />
        </div>
        <hr />
        
      </div>

      <ButtonComponent :text="buttonSubmitTimerText || lang.AUTH_SMS_SMS_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'state']),
    ...mapState(authStore, [
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
    state(val) {
      if (val === 'code') {
        this.$router.push('/code');
      }
    },
  },
  methods: {
    ...mapActions(dataStore, ['setError']),
    ...mapActions(authStore, [
      'input',
      'runSend',
      'runUpdate',
      'runDelete',
      'changeTel',
      'setTelIsFilled',
      'changeInterface',
    ]),
    clickSubmit() {
      if (this.interface === 'add') {
        this.runSend();
      } else if (this.interface === 'change') {
        this.runUpdate();
      }
    },
    clickChange() {
      this.changeInterface('change');
      this.setTelIsFilled(false);
    },
    clickDelete() {
      this.runDelete();
    },
  },
  mounted() {
    this.setError('');
    // if tel
    const telControl = this.controls.find((c) => c.property === 'tel');
    if (telControl && telControl.value) {
      this.setTelIsFilled(true);
      this.changeInterface('filled');
    }
  },
};
