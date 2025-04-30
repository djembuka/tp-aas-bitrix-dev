import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formControlsMultiStore } from '../stores/form-controls-multi-store';

export const FormControlsMultiComponent = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
  },
  // language=Vue
  template: `
    <div>
      <div class="twpx-design-system-block" v-for="control in controls" :key="control.id">
        <div>
          <h3>{{ heading3(control) }}</h3>
          <ControlChoice :control="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
        </div>
        <pre>{{ control }}</pre>
        <div>
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(formControlsMultiStore, ['controls']),
  },
  methods: {
    ...mapActions(formControlsMultiStore, [
      'changeControlValue',
      'runHints',
      'setHints',

      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
    heading3(control) {
      return `${
        typeof control.multi === 'object'
          ? control.multi[0].property
          : control.property
      } ${
        typeof control.multi === 'object'
          ? control.multi[0].type || ''
          : control.type || ''
      }`;
    },
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    focus() {
      // console.log('focus');
    },
    blur() {
      // console.log('blur');
    },
    enter() {
      // console.log('enter');
    },
  },
};
