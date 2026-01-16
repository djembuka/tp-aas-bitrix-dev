import './control-multi.css';

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
        <div class="twpx-form-control-multi">

          <div class="btn-delete" @click.prevent="remove(index)" v-if="controlsLength > 1"></div>

          <ControlComponent
            :control="addedControl"
            @input="$emit('input', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @enter="$emit('enter', $event)"
            @hints="$emit('hints', $event)"
          />

        </div>

        <hr>

      </div>
      <div class="btn btn-success btn-md" :class="{'btn-disabled': isDisabled}" @click.prevent="add()">Добавить</div>
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
    add(value) {
      if (!this.isDisabled) {

        let copy = JSON.parse(JSON.stringify(this.copy));
        
        if (value) {
          copy.value = value;
        }

        this.$emit('add', {
          parent: this.parent,
          add: copy,
        });
      }
    },
    remove(index) {
      this.$emit('remove', { parent: this.parent, index });
    },
  },
  beforeMount() {
    if (this.parent.property === 'multi') return;
    
    this.multi = this.parent.multi;

    this.copy = JSON.parse(JSON.stringify(this.parent));
    delete this.copy.multi;
    this.copy.value = '';

    this.$emit('create', { parent: this.parent });

    if (Array.isArray(this.parent.value) && this.parent.value.length > 0) {
      this.parent.value.forEach(v => {
        this.add(v);
      })
      this.parent.value = [];
    } else {
      this.add();
    }
  },
};
