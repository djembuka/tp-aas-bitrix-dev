import { IconClose } from './svg/icon-close.js';
import { IconClear } from './svg/icon-clear.js';
import { ControlComponent } from 'local.vue-components.control-component';

export const FilterOpen = {
  components: {
    IconClose,
    IconClear,
    ControlComponent,
  },
  props: ['filters'],
  emits: ['input', 'hints'],
  template: `
    <div class="twpx-vue-filter--open">

      <div class="twpx-vue-filter__open-head">

        <h3 class="twpx-vue-filter__open-title">Выберите фильтры</h3>

        <div class="twpx-vue-filter__clear-button" @click="reset">
          <IconClear />
          <span>Очистить фильтр</span>
        </div>

      </div>

      <div class="twpx-vue-filter__controls">
        <ControlComponent v-for="control in filters" :key="control.id" :control="control" @input="input" @hints="hints" />
      </div>

      <div class="twpx-vue-filter__close-button" @click="$emit('changeState', 'closed')">
        <IconClose />
        <span>Свернуть</span>
      </div>
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
    reset() {
      this.filters.forEach((control) => {
        this.$emit('input', {
          control,
          value: control.property === 'date' ? null : '',
        });
      });
    },
  },
};
