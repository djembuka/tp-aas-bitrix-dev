import './component.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ControlMultiForSubcontrol } from 'local.vue-components.control-multi-for-subcontrol';
import { IconSub } from './IconSub';

export const ControlMultiSub = {
  data() {
    return {
      multi: 1,
      copy: {},
    };
  },
  props: ['parent'],
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
  components: {
    ControlComponent,
    ControlMultiForSubcontrol,
    IconSub
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

          <div v-for="subControl in addedControl.sub" :key="subControl.id">

            <hr>

            <ControlMultiForSubcontrol
              v-if="subControl.multi"
              :parent="subControl"
              @create="$emit('create', $event)"
              @add="$emit('add', $event)"
              @remove="$emit('remove', $event)"
              @input="$emit('input', $event)"
              @focus="$emit('focus', $event)"
              @blur="$emit('blur', $event)"
              @enter="$emit('enter', $event)"
              @hints="$emit('hints', $event)"
            />

            <div v-else class="twpx-form-control-sub">
              <div class="twpx-form-control-sub-item">

                <IconSub />

                <ControlComponent
                  :control="subControl"
                  @input="$emit('input', $event)"
                  @focus="$emit('focus', $event)"
                  @blur="$emit('blur', $event)"
                  @enter="$emit('enter', $event)"
                  @hints="$emit('hints', $event)"
                />

              </div>
            </div>
          </div>
        </div>

        <hr>

      </div>
      <div class="btn btn-success btn-md" :class="{'btn-disabled': isDisabled}" @click.prevent="add">Добавить</div>
    </div>
	`,
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
  },
  beforeMount() {
    this.multi = this.parent.multi;

    const sub = [];

    if (this.parent.sub && this.parent.sub.forEach) {
      this.parent.sub.forEach((s) => {
        sub.push({ ...s });
      });
    }

    this.copy = Object.assign({}, this.parent);
    delete this.copy.multi;
    this.copy.sub = sub;

    this.$emit('create', { parent: this.parent });
    this.add();
  },
};
