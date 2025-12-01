import '../css/application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';


import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
  },
  // language=Vue
  template: `
    <div>Voting screen</div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'actions',
      'lang',
      'uuid',

      'loading',
      'error',
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    ...mapActions(controlsStore, [
      'changeControlValue',
      'runHints',
      'setHints'
    ]),
    input(args) {
      this.changeControlValue(args);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    async getVoting() {
      this.changeProp('loading', true)
      try {
        const result = await this.runBitrixMethod('voting', {uuid: this.uuid})        
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    }
  },
  mounted() {
    this.getVoting();
  }
};
