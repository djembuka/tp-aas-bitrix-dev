import './component.css';

export const ControlCheckbox = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control.hint_external,
    };
  },
  props: ['control', 'id', 'name'],
  emits: [],
  // language=Vue
  template: `
		<div :class="{
        'twpx-form-control': true,
        'twpx-form-control--checkbox': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }">
      <label>
        <input
          type="checkbox"
          :id="controlId"
          :name="controlName"
          v-model="value"
          @focus="focus"
          @blur="blur"
          :disabled="disabled"
          ref="input"
          class="twpx-form-control--filled-in"
        />
        <span class="twpx-form-control__label" v-if="control.label" v-html="control.label">
        </span>
      </label>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value, checked: value });
      },
    },
    active() {
      return this.focused;
    },
    invalid() {
      return !this.validate();
    },
    disabled() {
      return this.control.disabled;
    },
    validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher() {
      return this.control.focusWatcher;
    },
  },
  watch: {
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
  },
  methods: {
    focus() {
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    validate() {
      if ((this.control.required && this.value) || !this.control.required) {
        return true;
      } else if (this.control.required && !this.value) {
        return false;
      }
      return true;
    },
  },
};
