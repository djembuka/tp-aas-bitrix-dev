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
        <ControlComponent :control="control.sub" @input="inputSub" @focus="focusSub" @blur="blurSub" @enter="enterSub" @hints="hintsSub"></ControlComponent>
      </div>
    </div>
	`,
  emits: [
    'input',
    'focus',
    'blur',
    'enter',
    'hints',
    'inputSub',
    'focusSub',
    'blurSub',
    'enterSub',
    'hintsSub',
  ],
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
  beforeMount() {
    this.multi = this.parent.multi;

    this.copy = Object.assign({}, this.parent);
    delete this.copy.multi;

    this.$emit('create', { parent: this.parent });
    this.add();
  },
};
