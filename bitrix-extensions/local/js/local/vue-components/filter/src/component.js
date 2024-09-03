import { Control } from 'local.vue-components.control';
import './component.css';

export const FilterComponent = {
  data() {
    return {};
  },
  props: ['filters'],
  emits: ['input', 'hintsRequest'],
  components: {
    Control,
  },
  // language=Vue
  template: `
		<div class="vue-tf-filter">
      <Control v-for="control in filters" :key="control.id" :control="control" @input="input" @hintsRequest="hintsRequest" />
    </div>
	`,
  methods: {
    input({ control, value, checked }) {
      this.$emit('input', { control, value, checked });
    },
    hintsRequest({ control, hintsAction }) {
      this.$emit('hintsRequest', { control, hintsAction });
    },
  },
};
