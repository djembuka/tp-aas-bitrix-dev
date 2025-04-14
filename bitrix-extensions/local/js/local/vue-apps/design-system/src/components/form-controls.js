import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formControlsStore } from '../stores/form-controls-store';

export const FormControlsComponent = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
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
          <button @click="">Focus</button>
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(formControlsStore, ['controls']),
  },
  methods: {
    ...mapActions(formControlsStore, [
      'changeControlValue',
      'runHints',
      'setHints',
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
