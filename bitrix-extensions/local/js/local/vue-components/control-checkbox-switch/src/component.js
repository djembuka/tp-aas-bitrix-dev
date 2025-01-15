import './component.css';

export const ControlCheckboxSwitch = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      hint: this.control.hint_external,
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
        :class="{ 'twpx-form-control__switch--off': !value }"
      >
        <input
          type="checkbox"
          :id="controlId"
          :name="controlName"
          :value="control.value"
          v-model="value"
      /></span>
      <span
        class="twpx-form-control__switch-text"
        v-if="control.label !== undefined"
        >{{ control.label }}</span
      >
    </label>
    <div class="twpx-form-control-hint" v-if="hint" v-html="hint"></div>
  </div>
	`,
  emits: ['input', 'focus', 'blur'],
  computed: {
    value: {
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
