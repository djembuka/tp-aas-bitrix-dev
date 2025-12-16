import './application.css';
import { ControlChoice } from 'local.vue-components.control-choice';

export const FormControlsMultiComponent = {
  data() {
    return {
      essential: []
    };
  },
  props: ['controls'],
  emits: [
    'input',
    'hints',
    'create',
    'add',
    'remove'
  ],
  components: {
    ControlChoice,
  },
  // language=Vue
  template: `
    <div>
      <div class="twpx-design-system-block" v-for="(control, index) in controls" :key="control.id">
        <div>
          <h3>{{ heading3(control) }}</h3>
          <ControlChoice
            :control="control"
            @input="$emit('input', $event)"
            @hints="$emit('hints', $event)"
            @create="$emit('create', $event)"
            @add="$emit('add', $event)"
            @remove="$emit('remove', $event)"
          />
        </div>
        <pre>{{ essential[index] }}</pre>
        <pre>{{ control }}</pre>
        <div>
        </div>
      </div>
    </div>
	`,
  methods: {
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
  },
  beforeMount() {
    this.essential = JSON.parse(JSON.stringify(this.controls));
  }
};
