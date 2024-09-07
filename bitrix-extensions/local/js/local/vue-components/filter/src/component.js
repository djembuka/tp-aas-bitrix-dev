import { Control } from 'local.vue-components.control';
import './component.css';

export const FilterComponent = {
  data() {
    return {};
  },
  props: ['filters'],
  emits: ['input', 'hints'],
  components: {
    Control,
  },
  // language=Vue
  template: `
		<div class="vue-tf-filter">
      <Control v-for="control in filters" :key="control.id" :control="control" @input="input" @hints="hints" />
    </div>
	`,
  methods: {
    input({ control, value, checked }) {
      this.$emit('input', { control, value, checked });
    },
    hints({ type, control, action, value }) {
      this.$emit('hints', {
        type,
        control,
        action,
        value,
      });
    },
  },
};
