import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { ornzStore } from '../stores/ornz.js';

import '../style/ornz.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const Ornz = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-ornz-form">
      <div class="vue-auth-sms-ornz-form-body">
        <div v-for="control in controls" :key="control.id">
          <ControlComponent :control="control" @input="input" @hints="hints" />
          <hr />
        </div>
        <ButtonComponent :text="lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(ornzStore, [
      'controls',
      'submitProps',
      'errorORNZ',
      'buttonDisabled',
      'runHintsAction',
      'setHints',
    ]),
  },
  methods: {
    ...mapActions(ornzStore, ['input', 'runOrnz']),
    hints({ type, control, action, value }) {
      switch (type) {
        case 'get':
          this.runHintsAction({
            control,
            action,
          });
          break;
        case 'set':
          this.setHints({
            control,
            value,
          });
          break;
      }
    },
    clickSubmit() {
      this.runOrnz();
    },
  },
  mounted() {},
};
