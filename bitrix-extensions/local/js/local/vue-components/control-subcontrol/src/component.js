import './component.css';

import { ControlChoice } from 'local.vue-components.control-choice';

export const ControlSubcontrol = {
  data() {
    return {};
  },
  props: ['control'],
  components: {
    ControlChoice,
  },
  // language=Vue
  template: `
		<div>
      <ControlChoice :control="control" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlChoice>

      <div class="twpx-form-control-sub">

        <div v-for="subControl in control.sub" :key="subControl.id">
          Sub
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
    create(attrs) {
      this.$emit('create', attrs);
    },
    add(attrs) {
      this.$emit('add', attrs);
    },
    remove(attrs) {
      this.$emit('remove', attrs);
    },
    input(attrs) {
      this.$emit('input', attrs);
    },
    focus(attrs) {
      this.$emit('focus', attrs);
    },
    blur(attrs) {
      this.$emit('blur', attrs);
    },
    enter(attrs) {
      this.$emit('enter', attrs);
    },
    hints(attrs) {
      this.$emit('hints', attrs);
    },
  },
};
