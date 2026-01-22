import { ControlComponent } from 'local.vue-components.control-component';
import { ControlMultiForSubcontrol } from './control-multi-for-subcontrol.js';
import { ButtonComponent } from 'local.vue-components.button-component';
import { IconSub } from './iconSub.js';

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
    ButtonComponent,
    IconSub
  },
  // language=Vue
  template: `
		<div class="twpx-form-control-multi-grid">
      <div v-for="(addedControl, index) in parent.multi" :key="addedControl.id">
        <div class="twpx-form-control-multi twpx-form-control-multi-grid">

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

          <div v-for="subControl in addedControl.sub" :key="subControl.id">

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

      </div>

      <div>
        <ButtonComponent text="Добавить еще" :props="['success', 'small']" :disabled="isDisabled" @clickButton="clickAddButton" />
      </div>
    </div>
	`,
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
    add(value, subValue) {
      if (this.isDisabled) return;

      let copy = JSON.parse(JSON.stringify(this.copy));
      
      if (value) {
        copy.value = value;
      }

      copy.sub.forEach(s => {
        const randomId = Math.round(Math.random() * 1000);
        s.id = `${s.id}${randomId}`;
        s.name = `${s.name}[${this.parent.multi.length}]`;
      });

      if (subValue) {
        const isSubValueArray = Array.isArray(subValue);
        if (!isSubValueArray) throw new Error('Sub value should be an array');

        subValue.forEach((sv, i) => {
          copy.sub[i].value = JSON.parse(JSON.stringify(sv ?? '')) ?? '';
        });
      }

      this.$emit('add', {
        parent: this.parent,
        add: copy,
      });
    },
    remove(index) {
      this.$emit('remove', { parent: this.parent, index });
    },
    createCopy() {
      this.copy = JSON.parse(JSON.stringify(this.parent));
      delete this.copy.multi;
      this.copy.value = '';

      const sub = JSON.parse(JSON.stringify(this.parent.sub));

      sub.forEach(s => {
        s.value = '';
      });

      this.copy.sub = sub;
    },
    getSubValue(index = 0) {
      return this.parent.sub.map(sub => {
        const isSubValueArray = Array.isArray(sub.value);
        if (!isSubValueArray) throw new Error(`Sub value should be an array ${this.parent.id}`);

        return sub.value[index];
      });
    }
  },
  beforeMount() {
    if (this.parent.property === 'multi') return;

    const isParentSubArray = Array.isArray(this.parent.sub);
    if (!isParentSubArray) throw new Error(`Sub should be an array ${this.parent.id}`);

    this.multi = this.parent.multi;

    this.createCopy();

    this.$emit('create', { parent: this.parent });
    
    const hasParentMultiValues = Array.isArray(this.parent.value) && this.parent.value.length > 0;
    
    if (hasParentMultiValues) {
      // spread - to iterate empty values
      [...this.parent.value].forEach((v, i) => {
        this.add(v, this.getSubValue(i));
      })
      this.parent.value = [];
    } else {
      this.add(undefined, this.getSubValue());
    }
  },
};
