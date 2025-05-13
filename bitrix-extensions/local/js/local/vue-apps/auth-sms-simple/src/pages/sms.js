import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { smsStore } from '../stores/sms.js';

import '../style/sms.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Sms = {
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
        <div v-if="control.property === 'tel' && telIsFilled" class="vue-auth-sms-sms__tel">
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
    ...mapState(smsStore, [
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
    ...mapActions(dataStore, ['setError', 'setQuery']),
    ...mapActions(smsStore, [
      'input',
      'runSend',
      'runUpdate',
      'runDelete',
      'changeTel',
      'setTelIsFilled',
    ]),
    clickSubmit() {
      this.runSend();
    },
    clickChange() {
      const telControl = this.controls.find((c) => c.property === 'tel');
      if (telControl) {
        telControl.disabled = false;
      }
      this.setTelIsFilled(false);
    },
    clickDelete() {
      this.runDelete();
    },
  },
  mounted() {
    this.setError('');
    this.setQuery({ type: 'sms' });
    // if tel
    const telControl = this.controls.find((c) => c.property === 'tel');
    if (telControl && telControl.value) {
      this.setTelIsFilled(true);
      this.controls.forEach((c) => {
        c.disabled = true;
      });
    }
  },
};
