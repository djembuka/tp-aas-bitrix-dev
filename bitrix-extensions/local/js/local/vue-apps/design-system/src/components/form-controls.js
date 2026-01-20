import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const FormControlsComponent = {
  data() {
    return {
      essential: []
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
    <div v-if="controls && controls.length" style="display: grid; gap: 16px; grid-template-columns: 4fr 1fr;">

      <div style="display: grid; gap: 32px;">

        <div
          class="twpx-design-system-block"
          style="grid-template-columns: 2fr 2fr;"
          v-for="(control, index) in controls"
          :key="control.id"
        >

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

        </div>
      </div>

      <div style="display: flex; gap: 5px; flex-wrap: wrap; align-self: start;">

        <ButtonComponent text="Check required and *" :props="['blue-color','small']" @clickButton="$emit('checkRequired', controls[0])" />
        <ButtonComponent text="+ tab" :props="['gray-color','small']" @clickButton="$emit('addTab', controls[0])" />
        <ButtonComponent :text="textDisabled(controls[0])" :props="['light','small']" @clickButton="$emit('setDisabled', controls[0])" />

      </div>
    </div>
	`,
  watch: {
    controls(newVal) {
      this.essential = JSON.parse(JSON.stringify(newVal));
    }
  },
  methods: {
    textDisabled(control) {
      return `set ${control.disabled ? 'enabled' : 'disabled'}`;
    },
  },
  beforeMount() {
    this.essential = JSON.parse(JSON.stringify(this.controls || []));
  }
};
