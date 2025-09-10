import './component.css';
import CheckboxIcon from './CheckboxIcon';

export const ControlSelectMulti = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      hint: this.control.hint_external,

      disabled: false,
    };
  },
  components: {
    CheckboxIcon,
  },
  // language=Vue
  template: `
		<div>
      <label :class="{
          'twpx-form-control': true,
          'twpx-form-control--checkbox-block': true,
          'twpx-form-control--active': active,
          'twpx-form-control--checked': control.checked,
          'twpx-form-control--invalid': invalid,
          'twpx-form-control--disabled': disabled,
        }"
        v-for="option in control.options"
        :key="option.code"
      >
        <input
          type="checkbox"
          :name="controlName"
          :value="option.code"
          :checked="false"
          v-model="checked"
          @focus="focus"
          @blur="blur"
          :disabled="disabled"
          ref="input"
        />
        <CheckboxIcon />
        <span class="twpx-form-control__label" v-if="option.label" v-html="option.label"></span>
      </label>
    
      <div class="twpx-form-control-hint" v-if="hint" v-html="hint"></div>
    </div>
	`,
  props: ['control', 'id', 'name'],
  emits: ['input'],
  computed: {
    checked: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    invalid() {
      return !this.validate();
    },
    disabled() {
      return this.control.disabled;
    },
  },
  methods: {
    validate() {
      if (
        !this.control.required ||
        (this.control.required && this.control.value)
      ) {
        return true;
      }
      return false;
    },
  },
};
