import './component.css';

export const ControlCheckboxSwitch = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      hint: this.control?.hint_external || '',
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
    :class="{
      'twpx-form-control': true,
      'twpx-form-control--checkbox': true,
      'twpx-form-control--invalid': invalid,
      'twpx-form-control--disabled': disabled,
    }"
  >
    <label>
      <span
        class="twpx-form-control__switch"
        :class="{ 'twpx-form-control__switch--off': !checked }"
      >
        <input
          type="checkbox"
          :id="controlId"
          :name="controlName"
          :value="control.value"
          :checked="control.checked"
          v-model="checked"
      /></span>
      <span
        class="twpx-form-control__switch-text"
        v-if="label !== undefined"
        >{{ label }}</span
      >
    </label>
    <div class="twpx-form-control__hint" v-if="hint" v-html="hint"></div>
  </div>
	`,
  emits: ['input', 'focus', 'blur'],
  computed: {
    label() {
      if (this.control.required && !this.control.label.includes('*')) {
        return `${this.control.label} *`
      }
      return this.control.label;
    },
    checked: {
      get() {
        return this.control.checked;
      },
      set(checked) {
        this.$emit('input', { checked });
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
        (this.control.required && this.control.checked)
      ) {
        return true;
      }
      return false;
    },
  },
};
