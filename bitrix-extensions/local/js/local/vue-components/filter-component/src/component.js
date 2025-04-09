import { Placeholder } from './placeholder.js';
import { FilterClosed } from './filter-closed.js';
import { FilterOpen } from './filter-open.js';

import './component.css';

export const FilterComponent = {
  data() {
    return {
      filterState: 'closed', // open, closed
    };
  },
  props: ['filters', 'loading'],
  emits: ['input', 'hints', 'reset'],
  components: {
    Placeholder,
    FilterClosed,
    FilterOpen,
  },
  // language=Vue
  template: `
    <Placeholder v-if="loading" />

		<div class="vue-tf-filter" v-else>

      <FilterClosed v-if="filterState === 'closed'" :filledControls="filledControls" @changeState="changeState" @input="input" />

      <FilterOpen v-else :filters="filters" @input="input" @hints="hints" @changeState="changeState" />
      
    </div>
	`,
  computed: {
    filledControls() {
      return this.filters.filter((c) => {
        if (!c.value) return false;

        if (c.propery === 'date' && c.type === 'range') {
          if (!c.value[0] || !c.value[1]) {
            return false;
          }
        }

        return true;
      });
    },
  },
  methods: {
    changeState(value) {
      this.filterState = value;
    },
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
