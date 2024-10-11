import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ControlMulti } from 'local.vue-components.control-multi';
import { ControlSubcontrol } from 'local.vue-components.control-subcontrol';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ControlMulti,
    ControlSubcontrol,
  },
  // language=Vue

  template: `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
      <form action="">
        <div v-for="control in controls" :key="control.id">

          <ControlMulti v-if="control.multi" :parent="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlMulti>

          <ControlSubcontrol v-else-if="control.sub" :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>

          <ControlComponent v-else :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>

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
    focus() {
      console.log('focus');
    },
    blur() {
      console.log('blur');
    },
    enter() {
      console.log('enter');
    },
  },
  mounted() {
    this.runControls({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });
  },
};
