import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { selectDependencyStore } from '../stores/select-dependency-store';
import { controlsStore } from '../stores/controls-store';

export const SelectDependencyComponent = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
  },
  // language=Vue

  template: `
    <div style="display: grid; gap: 32px;">

      <div
        class="twpx-design-system-block"
        style="grid-template-columns: 2fr 2fr;"
        v-for="control in controls"
        :key="control.id"
      >

        <div>
          <h3 class="mt-0">{{ control.property }} {{ control.type }}</h3>
          <ControlComponent :control="control" @input="changeControlValue" />
        </div>
        <pre style="max-height: 150px;">{{ control }}</pre>
      </div>
    </div>
	`,
  computed: {
    ...mapState(selectDependencyStore, ['controls']),
  },
  methods: {
    ...mapActions(controlsStore, [
      'changeControlValue',
    ]),
  },
};
