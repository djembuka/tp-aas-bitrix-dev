export const ControlHidden = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--hidden': true,
      }"
    >
      <input
        type="hidden"
        :id="controlId"
        :name="controlName"
        v-model="value"
        :disabled="disabled"
        ref="input"
      />
    </div>
	`,
  emits: ['input'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
  },
};
