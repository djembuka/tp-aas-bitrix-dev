import { ControlComponent } from 'local.vue-components.control-component';
import { ControlMulti } from 'local.vue-components.control-multi';
import { ControlSubcontrol } from 'local.vue-components.control-subcontrol';

export const ControlWrapper = {
  data() {
    return {};
  },
  props: ['control'],
  components: {
    ControlComponent,
    ControlMulti,
    ControlSubcontrol,
  },
  // language=Vue
  template: `
		<ControlMulti v-if="control.multi" :parent="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlMulti>

    <ControlSubcontrol v-else-if="control.sub" :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>

    <ControlComponent v-else :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>
	`,
  emits: [
    'createMulti',
    'addMulti',
    'removeMulti',
    'input',
    'focus',
    'blur',
    'enter',
    'hints',
  ],
  methods: {
    createMulti(args) {
      this.$emit('createMulti', args);
    },
    addMulti(args) {
      this.$emit('addMulti', args);
    },
    removeMulti(args) {
      this.$emit('removeMulti', args);
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
    hints() {},
  },
};
