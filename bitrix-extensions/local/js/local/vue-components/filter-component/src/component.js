import { ControlComponent } from 'local.vue-components.control-component';
import './component.css';

export const FilterComponent = {
  data() {
    return {};
  },
  props: ['filters', 'loading', 'cols'],
  emits: ['input', 'hints'],
  components: {
    ControlComponent,
  },
  // language=Vue
  template: `
    <div class="vue-tf-filter-ph" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
		<div class="vue-tf-filter" v-else :style="gridTemplateColumns()">
      <ControlComponent v-for="control in filters" :key="control.id" :control="control" @input="input" @hints="hints" />
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
    gridTemplateColumns() {
      let result = '1fr 2fr 2fr 2fr';
      if (typeof this.cols === 'object' && this.cols.reduce) {
        result = this.cols.reduce((acc, cur) => `${acc} ${cur}fr`, '');
      }

      return `grid-template-columns: ${result};`;
    },
  },
};
