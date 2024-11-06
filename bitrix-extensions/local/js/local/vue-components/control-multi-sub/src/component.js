import './component.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ControlMultiForSubcontrol } from 'local.vue-components.control-multi-for-subcontrol';

export const ControlMultiSub = {
  data() {
    return {
      multi: 1,
      copy: {},
    };
  },
  props: ['parent'],
  components: {
    ControlComponent,
    ControlMultiForSubcontrol,
  },
  // language=Vue
  template: `
		<div>
      <div v-for="(addedControl, index) in parent.multi" :key="addedControl.id">
        <div class="twpx-form-control-multi">

          <div class="btn-delete" @click.prevent="remove(index)" v-if="controlsLength > 1"></div>

          <ControlComponent :control="addedControl" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />

          <div v-for="subControl in addedControl.sub" :key="subControl.id">

            <hr>

            <ControlMultiForSubcontrol v-if="subControl.multi" :parent="subControl" @create="createSub" @add="addSub" @remove="removeSub" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />

            <div v-else class="twpx-form-control-sub">

              <div class="twpx-form-control-sub-item">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g id="copy-success" transform="translate(-746 -382)">
                    <path id="Vector" d="M14,9.1V4.9C14,1.4,12.6,0,9.1,0H4.9C1.4,0,0,1.4,0,4.9V6H3.1C6.6,6,8,7.4,8,10.9V14H9.1C12.6,14,14,12.6,14,9.1Z" transform="translate(754 384)" fill="none" stroke="#154d8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M14,9.1V4.9C14,1.4,12.6,0,9.1,0H4.9C1.4,0,0,1.4,0,4.9V9.1C0,12.6,1.4,14,4.9,14H9.1C12.6,14,14,12.6,14,9.1Z" transform="translate(748 390)" fill="none" stroke="#154d8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,1.95,1.95,3.9,5.84,0" transform="translate(752.08 395.05)" fill="none" stroke="#154d8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(746 382)" fill="none" opacity="0"/>
                  </g>
                </svg>

                <ControlComponent :control="subControl" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />

              </div>
              
            </div>

          </div>

        </div>

        <hr>

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
    createSub(args) {
      this.$emit('create', args);
    },
    addSub(args) {
      this.$emit('add', args);
    },
    removeSub(args) {
      this.$emit('remove', args);
    },
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
