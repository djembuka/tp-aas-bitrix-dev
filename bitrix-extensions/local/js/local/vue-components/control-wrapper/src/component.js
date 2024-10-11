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
    createMulti(attrs) {
      this.$emit('createMulti', attrs);
    },
    addMulti(attrs) {
      this.$emit('addMulti', attrs);
    },
    removeMulti(attrs) {
      this.$emit('removeMulti', attrs);
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
    hints() {},
  },
};
