import { ControlMulti } from 'local.vue-components.control-multi';
import { ControlComponent } from 'local.vue-components.control-component';

export const ControlChoice = {
  data() {},
  props: ['control'],
  components: {
    ControlMulti,
    ControlComponent,
  },
  // language=Vue
  template: `
		<ControlMulti v-if="control.multi" :parent="control" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
    <ControlComponent v-else :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>
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
