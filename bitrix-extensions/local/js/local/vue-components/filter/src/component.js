import { Control } from 'local.vue-components.control';
import './component.css';
import './placeholder.css';

export const FilterComponent = {
  data() {
    return {};
  },
  props: ['filters', 'loading'],
  emits: ['input', 'hints'],
  components: {
    Control,
  },
  // language=Vue
  template: `
    <div class="vue-tf-filter-ph" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
		<div class="vue-tf-filter" v-else>
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
