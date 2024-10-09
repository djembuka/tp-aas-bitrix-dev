import './application.css';

import { Control } from 'local.vue-components.control';
import { ControlMulti } from 'local.vue-components.control-multi';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    Control,
    ControlMulti,
  },
  // language=Vue

  template: `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
      <form action="">
        <div v-for="control in controls" :key="control.id">

          <ControlMulti v-if="control.multi" :parent="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @hints="hints"></ControlMulti>

          <Control v-else :control="control" @input="input" @hints="hints"></Control>

          <hr>
          
        </div>
      </form>
      <pre style="font-size: 9pt;">{{controls}}</pre>
    </div>
	`,
  computed: {
    ...mapState(formStore, ['loadingControls', 'controls']),
    // error() {
    //   return this.errorTable || this.errorFilter;
    // },
  },
  methods: {
    ...mapActions(formStore, [
      'runControls',
      'changeControlValue',
      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
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
