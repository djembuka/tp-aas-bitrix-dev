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
          <ControlComponent :control="control" @input="input" />
          <hr />
        </div>
        <ButtonComponent :text="lang.AUTH_SMS_ORNZ_BUTTON_SUBMIT" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickSubmit" />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'infoMessageDefault']),
    ...mapState(ornzStore, [
      'controls',
      'submitProps',
      'errorORNZ',
      'buttonDisabled',
      'changeInputValue',
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setError',
      'setTitle',
      'setQuery',
    ]),
    ...mapActions(ornzStore, ['changeInputValue', 'runOrnz']),
    input(args) {
      this.changeInputValue(args);
    },
    clickSubmit() {
      this.runOrnz();
    },
  },
  mounted() {
    this.setTitle(this.lang[`AUTH_SMS_ORNZ_TITLE`]);

    if (this.infoMessageDefault) {
      this.setInfo(this.infoMessageDefault);
    } else {
      this.setInfo('');
    }
    this.setInfoButton(this.lang.AUTH_SMS_INFO_BUTTON);

    this.setError('');
    this.setQuery({ type: 'ornz' });
  },
};
