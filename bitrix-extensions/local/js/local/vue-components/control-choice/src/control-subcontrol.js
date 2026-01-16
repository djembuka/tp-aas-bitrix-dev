import './control-subcontrol.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { IconSub } from './iconSub.js'

export const ControlSubcontrol = {
  data() {
    return {};
  },
  props: ['control'],
  components: {
    ControlComponent,
    IconSub,
  },
  // language=Vue
  template: `
		<div>
      <ControlComponent :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />

      <div class="twpx-form-control-sub">

        <div v-for="subControl in control.sub" :key="subControl.id">

          <hr>

          <div class="twpx-form-control-sub-item">

            <IconSub />

            <ControlComponent :control="subControl" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />

          </div>
        </div>

      </div>
    </div>
	`,
  emits: [
    'create',
    'add',
    'remove',
    'input',
    'focus',
    'blur',
    'enter',
    'hints',
  ],
  methods: {
    create(args) {
      this.$emit('create', args);
    },
    add(args) {
      this.$emit('add', args);
    },
    remove(args) {
      this.$emit('remove', args);
    },
    input(args) {
      this.$emit('input', args);
    },
    focus(args) {
      this.$emit('focus', args);
    },
    blur(args) {
      this.$emit('blur', args);
    },
    enter(args) {
      this.$emit('enter', args);
    },
    hints(args) {
      this.$emit('hints', args);
    },
  },
};
