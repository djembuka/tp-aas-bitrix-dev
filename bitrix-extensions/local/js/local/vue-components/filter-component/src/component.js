import { IconOpen } from './icon-open.js';
import { IconItemClear } from './icon-item-clear.js';
import { ControlComponent } from 'local.vue-components.control-component';
import './component.css';

export const FilterComponent = {
  data() {
    return {
      filterState: 'closed', // open, closed
    };
  },
  props: ['filters', 'loading'],
  emits: ['input', 'hints'],
  components: {
    IconOpen,
    IconItemClear,
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
		<div class="vue-tf-filter" v-else>
    <pre>{{filters}}</pre>

      <div class="twpx-vue-filter--closed" v-if="filterState === 'closed'">

        <div class="twpx-vue-filter__open-button">
          <IconOpen />
          <span>Фильтр</span>
        </div>

        <div class="twpx-vue-filter__open-text" v-if="filledControls.length === 0">Нажмите и выберите фильтры, чтобы сузить выборку.</div>

        <div class="twpx-vue-filter__filled-item" v-for="control in filledControls" :key="control.id">
          <div class="twpx-vue-filter__filled-item__text">
            <span>{{ control.label }}:</span>
            <b>{{ getValue(control) }}</b>
          </div>
          <IconItemClear />
        </div>

        <div class="twpx-vue-filter__filled-items--mobile">
          <div class="twpx-vue-filter__filled-item" v-for="control in filledControls" :key="control.id">
            <div class="twpx-vue-filter__filled-item__text">
              <span>{{ control.label }}:</span>
              <b>{{ getValue(control) }}</b>
            </div>
            <IconItemClear />
          </div>
        </div>
      </div>

      <div class="twpx-vue-filter--open">
        <div class="twpx-vue-filter__open-head">
          <h3 class="twpx-vue-filter__open-title">Выберите фильтры</h3>
          <div class="twpx-vue-filter__open-clear">Очистить фильтры</div>
        </div>
        <div class="twpx-vue-filter__controls">
          <ControlComponent v-for="control in filters" :key="control.id" :control="control" @input="input" @hints="hints" />
        </div>
        <div class="twpx-vue-filter__close-button">Свернуть</div>
      </div>
      
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
    getValue(c) {
      if (c.property === 'select' && c.type === 'dropdown') {
        return c.options.find((o) => o.code === c.value)?.label;
      } else if (c.property === 'date' && c.type === 'range') {
        if (c.value[0] && c.value[1]) {
          return `${c.value[0]} - ${c.value[1]}`;
        }
      }

      return c.value;
    },
  },
};
