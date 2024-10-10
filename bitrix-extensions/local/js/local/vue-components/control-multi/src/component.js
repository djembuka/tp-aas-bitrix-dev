import { ControlComponent } from 'local.vue-components.control-component';

export const ControlMulti = {
  data() {
    return {
      multi: 1,
      copy: {},
    };
  },
  props: ['parent'],
  components: {
    ControlComponent,
  },
  // language=Vue
  template: `
		<div>
      <div v-for="(addedControl, index) in parent.multi" :key="addedControl.id">
        <div class="btn-delete" @click.prevent="remove(index)" v-if="controlsLength > 1"></div>
        <ControlComponent :control="addedControl" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlComponent>
      </div>
      <div class="btn btn-success btn-md" :class="{'btn-disabled': isDisabled}" @click.prevent="add">Добавить</div>
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
  computed: {
    controlsLength() {
      if (
        this.parent.multi &&
        typeof this.parent.multi === 'object' &&
        this.parent.multi.length !== undefined
      ) {
        return this.parent.multi.length;
      }
      return 0;
    },
    isDisabled() {
      return this.controlsLength >= this.multi;
    },
  },
  methods: {
    add() {
      if (!this.isDisabled) {
        this.$emit('add', {
          parent: this.parent,
          add: Object.assign({}, this.copy),
        });
      }
    },
    remove(index) {
      this.$emit('remove', { parent: this.parent, index });
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
  beforeMount() {
    this.multi = this.parent.multi;

    this.copy = Object.assign({}, this.parent);
    delete this.copy.multi;

    this.$emit('create', { parent: this.parent });
    this.add();
  },
};
