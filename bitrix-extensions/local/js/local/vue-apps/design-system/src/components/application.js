import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
  },
  // language=Vue

  template: `
    <div>
      <div v-for="control in controls" :key="control.id">
        <h3>{{ control.property }} {{ control.type }}</h3>
        <ControlComponent :control="control" @input="input" />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['controls']),
  },
  methods: {
    ...mapActions(dataStore, ['changeControlValue']),
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
  },
};
