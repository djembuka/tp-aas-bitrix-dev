import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formControlsMultiStore } from '../stores/form-controls-multi-store';

export const FormControlsComponent = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue
  template: `
    <div>
      <div class="twpx-design-system-block" v-for="control in controls" :key="control.id">
        <div>
          <h3>{{ control.property }} {{ control.type }}</h3>
          <ControlComponent :control="control" @input="input" @hints="hints" />
        </div>
        <pre>{{ control }}</pre>
        <div>
          <ButtonComponent text="+ tab" :props="['secondary','medium']" @clickButton="addTab(control)" />
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
      'addTab',
    ]),
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
  },
};
