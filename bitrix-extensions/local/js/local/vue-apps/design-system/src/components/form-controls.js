import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const FormControlsComponent = {
  data() {
    return {
      essential: {}
    };
  },
  props: ['controls', 'showEssential'],
  emits: [
    'input',
    'hints',
    'create',
    'add',
    'remove',
    'addTab',
    'setDisabled',
    'checkRequired',
  ],
  components: {
    ControlChoice,
    ButtonComponent,
  },
  template: `
    <div style="display: grid; gap: 32px;">
      <div class="twpx-design-system-block" v-for="(control, index) in controls" :key="control.id">
        <div>
          <h3 class="mt-0">{{ essential[index].property }} {{ control.type }}</h3>
          <ControlChoice
            :control="control"
            @input="$emit('input', $event)"
            @hints="$emit('hints', $event)"
            @create="$emit('create', $event)"
            @add="$emit('add', $event)"
            @remove="$emit('remove', $event)"
          />
        </div>
        <pre v-show="showEssential">{{ essential[index] }}</pre>
        <pre v-show="!showEssential">{{ control }}</pre>

        <div style="display: flex; gap: 5px; flex-wrap: wrap; align-self: start;">
          <ButtonComponent text="Check required and *" :props="['blue-color','small']" @clickButton="$emit('checkRequired', control)" />

          <ButtonComponent text="+ tab" :props="['gray-color','small']" @clickButton="$emit('addTab', control)" />

          <ButtonComponent :text="textDisabled(control)" :props="['light','small']" @clickButton="$emit('setDisabled', control)" />
        </div>

      </div>
    </div>
	`,
  methods: {
    textDisabled(control) {
      return `set ${control.disabled ? 'enabled' : 'disabled'}`;
    },
  },
  beforeMount() {
    this.essential = JSON.parse(JSON.stringify(this.controls));
  }
};
