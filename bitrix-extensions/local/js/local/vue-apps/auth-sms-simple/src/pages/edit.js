import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { editStore } from '../stores/edit.js';

import '../style/sms.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

export const Edit = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
    MessageComponent,
    ModalYesNo
  },
  // language=Vue
  template: `

    <ModalYesNo />
  
    <h3>{{ lang.heading }}</h3>

    <div v-html="lang.html"></div>

    <MessageComponent v-if="error" type="error" :message="error" />

    <div class="vue-auth-sms-sms">

      <div class="vue-auth-sms-sms__tel">
        <ControlComponent :control="controls[0]" />
        <div class="vue-auth-sms-sms__buttons">
          <ButtonComponent :text="lang.button" :props="Object.keys(editProps)" @clickButton="clickEdit" />
          <ButtonComponent text="Delete" :props="Object.keys(deleteProps)" @clickButton="clickDelete" />
        </div>
      </div>

    </div>
	`,
  computed: {
    ...mapState(dataStore, ['error']),
    ...mapState(editStore, [
      'lang',
      'controls',
      'editProps',
      'deleteProps'
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
    ...mapActions(editStore, []),
    clickEdit() {
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
