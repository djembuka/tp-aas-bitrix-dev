import './application.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formControlsStore } from '../stores/form-controls-store';

export const FormControlsComponent = {
  data() {
    return {};
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  template: `
    <div>
      <div class="twpx-design-system-block" v-for="control in controls" :key="control.id">
        <div>
          <h3>{{ control.property }} {{ control.type }}</h3>
          <ControlComponent :control="control" @input="changeControlValue($event)" @hints="hints" />
        </div>
        <pre>{{ control }}</pre>
        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
          <ButtonComponent text="Check required and *" :props="['secondary','small']" @clickButton="checkRequired(control)" />

          <ButtonComponent text="+ tab" :props="['secondary','small']" @clickButton="addTab(control)" />

          <ButtonComponent :text="textDisabled(control)" :props="['light','small']" @clickButton="setDisabledEnabled(control)" />
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
      'addTab',
      'setDisabled',
      'checkRequired',
    ]),
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    setDisabledEnabled(control) {
      this.setDisabled(control, !control.disabled);
    },
    textDisabled(control) {
      return `set ${control.disabled ? 'enabled' : 'disabled'}`;
    },
  },
};
