import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const ControlMulti = {
  data() {
    return {
      multi: 1,
      copy: {}
    };
  },
  props: ['parent'],
  components: {
    ControlComponent,
    ButtonComponent
  },
  // language=Vue
  template: `
		<div class="twpx-form-control-multi-grid">
      <div v-for="(addedControl, index) in parent.multi" :key="addedControl.id">
        <div class="twpx-form-control-multi">

          <ButtonComponent
            v-if="controlsLength > 1"
            class="twpx-form-control-multi__btn-delete"
            text="Delete"
            :props="deleteButtonProps(addedControl)"
            @clickButton="remove(index)"
          />

          <ControlComponent
            :class="{'twpx-form-control-multi__control': isMultiControl}"
            :control="addedControl"
            @input="$emit('input', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @enter="$emit('enter', $event)"
            @hints="$emit('hints', $event)"
          />

        </div>

      </div>

      <div>
        <ButtonComponent text="Добавить еще" :props="['success', 'small']" :disabled="isDisabled" @clickButton="clickAddButton" />
      </div>
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
    isMultiControl() {
      return this.controlsLength > 1;
    },
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
    deleteButtonProps(control) {
      const result = ['icon', 'small'];
      result.push(control.property === 'file' && control.value ? 'delete-white' : 'delete');
      return result;
    },
    clickAddButton() {
      this.add();
    },
    add(value) {
      if (this.isDisabled) return;
      
      let copy = JSON.parse(JSON.stringify(this.copy));
      
      if (value) {
        copy.value = value;
      }

      this.$emit('add', {
        parent: this.parent,
        add: copy,
      });
      
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

    const hasParentMultiValues = Array.isArray(this.parent.value) && this.parent.value.length > 0;
    
    if (hasParentMultiValues) {
      // spread - to iterate empty values
      [...this.parent.value].forEach(v => {
        this.add(v);
      })
      this.parent.value = [];
    } else {
      this.add();
    }
  },
};
