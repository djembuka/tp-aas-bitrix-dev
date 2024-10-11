import { ControlComponent } from 'local.vue-components.control-component';

export const ControlSubcontrol = {
  data() {
    return {};
  },
  props: ['control'],
  components: {
    ControlComponent,
  },
  // language=Vue
  template: `
		<div>
      <ControlComponent :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlComponent>

      <div class="sub">

        <div v-for="subControl in control.sub" :key="subControl.id">
          <ControlComponent :control="subControl" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlComponent>
        </div>

      </div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter', 'hints'],
  methods: {
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
