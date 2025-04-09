import { IconOpen } from './svg/icon-open.js';
import { IconItemClear } from './svg/icon-item-clear.js';

export const FilterClosed = {
  props: ['filterState', 'filledControls'],
  emits: ['changeState', 'input'],
  components: {
    IconOpen,
    IconItemClear,
  },
  template: `
    <div class="twpx-vue-filter--closed">

      <div class="twpx-vue-filter__open-button" @click="$emit('changeState', 'open')">
        <IconOpen />
        <span>Отфильтровать</span>
      </div>

      <div class="twpx-vue-filter__open-text" v-if="filledControls.length === 0">Нажмите и выберите фильтры, чтобы сузить выборку.</div>

      <div class="twpx-vue-filter__filled-items" v-if="filledControls.length">

        <div class="twpx-vue-filter__filled-item" v-for="control in filledControls" :key="control.id">
          <div class="twpx-vue-filter__filled-item__text">
            <span>{{ control.label }}:</span>
            <b>{{ getValue(control) }}</b>
          </div>
          <IconItemClear @click="clear(control)" />
        </div>

      </div>
    </div>
  `,
  methods: {
    getValue(c) {
      if (c.property === 'select' && c.type === 'dropdown') {
        return c.options.find((o) => o.code === c.value)?.label;
      } else if (c.property === 'date' && c.type === 'range') {
        if (c.value[0] && c.value[1]) {
          return `${c.value[0]} - ${c.value[1]}`;
        }
      } else if (c.property === 'hint') {
        return c.value?.value;
      }

      return c.value;
    },
    clear(control) {
      this.$emit('input', {
        control,
        value: control.property === 'date' ? null : '',
      });
    },
  },
};
