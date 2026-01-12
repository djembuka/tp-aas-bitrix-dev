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
      <div class="btn btn-success btn-md" :class="{'btn-disabled': isDisabled}" @click.prevent="clickAddButton">Добавить</div>
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
    clickAddButton() {
      this.add();
    },
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


    const sub = JSON.parse(JSON.stringify(this.parent.sub));

    if (Array.isArray(sub)) {
      sub.forEach(s => {
        s.value = '';
      });
    }

    this.copy.sub = sub;


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
