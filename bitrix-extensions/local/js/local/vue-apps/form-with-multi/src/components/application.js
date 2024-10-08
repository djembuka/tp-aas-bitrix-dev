import './application.css';

import { Control } from 'local.vue-components.control';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    Control,
  },
  // language=Vue

  template: `
    <div>
      <pre>{{controls}}</pre>
      <Control v-for="control in controls" :key="control.id" :control="control" @input="input" @hints="hints"></Control>
    </div>
	`,
  computed: {
    ...mapState(formStore, ['loadingControls', 'controls']),
    // error() {
    //   return this.errorTable || this.errorFilter;
    // },
  },
  methods: {
    ...mapActions(formStore, ['runControls']),
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
  },
  mounted() {
    this.runControls({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });
  },
};
