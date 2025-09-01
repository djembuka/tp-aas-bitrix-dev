import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { selectDependencyStore } from '../stores/select-dependency-store';

export const SelectDependencyComponent = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
  },
  // language=Vue

  template: `
    <div>
      <div class="twpx-design-system-block twpx-design-system-block--small twpx-design-system-block--two-cols" v-for="control in controls" :key="control.id">
        <div>
          <h3>{{ control.property }} {{ control.type }}</h3>
          <ControlComponent :control="control" @input="input" />
        </div>
        <pre>{{ control }}</pre>
      </div>
    </div>
	`,
  computed: {
    ...mapState(selectDependencyStore, ['controls']),
  },
  methods: {
    ...mapActions(selectDependencyStore, [
      'changeControlValue',
    ]),
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
  },
};
