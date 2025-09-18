import './component.css';
import CheckboxIcon from './CheckboxIcon';

export const ControlSelectMulti = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      hint: this.control?.hint_external || '',

      disabled: false,
    };
  },
  components: {
    CheckboxIcon,
  },
  // language=Vue
  template: `
		<div class="twpx-form-control--select-multi">
      <div class="twpx-form-control--select-multi__heading">{{ control.label }}</div>
      <div :class="{
        'twpx-form-control': true,
        'twpx-form-control--checkbox-block': true,
        'twpx-form-control--active': active,
        'twpx-form-control--checked': control.checked,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }">
        <label :class="{
            'twpx-form-control': true,
            'twpx-form-control--checkbox-block': true,
            'twpx-form-control--active': active,
            'twpx-form-control--checked': control.value?.some(v => String(v) === String(option.code)),
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
            :checked="control.value?.some(v => String(v) === String(option.code)) ? 'checked' : ''"
            @input="input"
            @focus="focus"
            @blur="blur"
            :disabled="!!option.disabled"
            ref="input"
          />
          <CheckboxIcon />
          <span class="twpx-form-control--checkbox-block__label" v-if="option.label" v-html="option.label"></span>
        </label>
      
        <div class="twpx-form-control__hint" v-if="hint" v-html="hint"></div>
      </div>
    </div>
	`,
  props: ['control', 'id', 'name'],
  emits: ['input'],
  computed: {
    invalid() {
      return !this.validate();
    },
  },
  methods: {
    input(event) {
      this.$emit('input', { value: event.target.value, checked: !this.control.value.some(v => String(v) === String(event.target.value)) });
    },
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
