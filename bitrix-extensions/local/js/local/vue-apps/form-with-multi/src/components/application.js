import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
  },
  // language=Vue

  template: `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
      <form action="">
        <div v-for="control in controls" :key="control.id">
          <ControlChoice :control="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlChoice>
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
      'bitrixLogs',
      'autosave',
      'timeoutAutosave',
    ]),
    input(args) {
      //bitrix logs
      if (args.control.property === 'file' && args.control.type === 'load') {
        this.bitrixLogs(11, `${args.control.label}: ${args.label}`);
      }

      this.changeControlValue(args);
      this.autosave();
    },
    focus() {
      console.log('focus');
    },
    blur() {
      console.log('blur');
    },
    enter() {
      console.log('enter');
    },
    hints(args) {
      console.log(args);
    },
  },
  mounted() {
    this.runControls({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });
  },
};
