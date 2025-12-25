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
  props: {
    filters: Array,
    loading: Boolean,
    onload: {
      type: Boolean,
      default: true
    }
  },
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

      <FilterClosed v-if="filterState === 'closed'"
        :filledControls="filledControls"
        @changeState="changeState"
        @input="input"
      />

      <FilterOpen v-else
        :filters="filters"
        @input="input"
        @hints="$emit('hints', $event)"
        @changeState="changeState"
      />
      
    </div>
	`,
  computed: {
    filledControls() {
      return this.filters.filter((c) => {
        if (!c.value) return false;

        if (c.property === 'date' && c.type === 'range') {
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
    input(args) {
      this.$emit('input', args);
      this.setUrl(args);
    },
    setUrl({ control, value }) {
      const url = new URL(window.location.href);

      if (control.name) {
        let paramValue = value;

        // Обработка hint элементов
        if (control.property === 'hint') {
          if (
            typeof value === 'object' &&
            value !== null &&
            value.id !== undefined
          ) {
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
  },
  mounted() {
    if (!this.onload) return;

    let counter = 0;
    const intervalId = setInterval(() => {
      counter++;
      if (counter > 100) {
        clearInterval(intervalId);
      }
      if (Array.isArray(this.filters)) {
        clearInterval(intervalId);

        const searchParams = new URLSearchParams(window.location.search);

        searchParams.entries().forEach((e) => {
          const control = this.filters?.find((c) => c.name === e[0]);

          if (!control) return;

          let value = e[1];
          const property = String(control.property);
          const type = String(control.type);

          if (property === 'date' && type === 'range') {
            value = String(e[1]).split(',');
          } else if (property === 'hint') {
            value = JSON.parse(e[1]);
          }

          this.$emit('input', { control, value });
        });
      }
    }, 200);
  },
};
