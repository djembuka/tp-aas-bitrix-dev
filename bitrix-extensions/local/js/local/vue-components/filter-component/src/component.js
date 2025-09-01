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
      const url = new URL(window.location.href);

      if (control.name) {
        let paramValue = value;
        
        // Обработка hint элементов
        if (control.property === 'hint') {
          if (typeof value === 'object' && value !== null && value.id !== undefined) {
            paramValue = JSON.stringify(value);
          } else {
            paramValue = '';
          }
        }

        // Устанавливаем или удаляем параметр
        if (paramValue && paramValue !== '') {
          url.searchParams.set(control.name, paramValue);
        } else {
          url.searchParams.delete(control.name);
        }
        
        // Обновляем URL
        window.history.replaceState({}, '', url.toString());
      }
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
  mounted() {
    let counter = 0;
    const intervalId = setInterval(() => {
      counter++;
      if (counter > 100) {
        clearInterval(intervalId);
      }
      if (this.filters && typeof this.filters === 'object' && this.filters.length) {
        clearInterval(intervalId);

        const url = new URL(window.location.href);
        url.searchParams.entries().forEach(e => {
          const control = this.filters?.find(c => c.name === e[0]);
          if (control) {
            let value = e[1];
            if (String(control.property === 'date') && String(control.type === 'range')) {
              value = String(e[1]).split(',');
            }
            this.$emit('input', { control, value: control.property === 'hint' ? JSON.parse(e[1]) : value });
          }
        });
      }
    }, 200);
  }
};
