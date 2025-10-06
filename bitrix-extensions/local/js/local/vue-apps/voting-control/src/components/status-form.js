import '../css/status-form.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const StatusForm = {
  components: {
    ControlChoice,
    ButtonComponent,
  },
  props: {
    lang: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    controls: {
      type: Array,
      required: true
    }
  },
  emits: ['setStatus', 'input'],
  template: `
    <div class="twpx-voting-control__status-from">
      <h3>{{ lang.heading }}</h3>
      <div class="twpx-voting-control__status-from__label">
        <span>{{ lang.label }}</span>
        <span class="twpx-voting-control__status-from__value">
          <span v-if="statusValue">{{ statusValue }}</span>
        </span>
      </div>
      <ControlChoice v-for="control in controls" :key="control.id" :control="control" @input="input" />
      <div class="twpx-voting-control__status-from__button">
        <ButtonComponent :text="lang.button" :props="['secondary', 'large']" @clickButton="clickButton" />
      </div>
    </div>
  `,
  computed: {
    statusValue() {
      const select = this.controls[0].options.find(option => option.code === this.value);
      if (select) {
        return select.label;
      }
      return '';
    }
  },
  methods: {
    input(args) {
      this.$emit('input', args);
    },
    clickButton() {
      this.$emit('setStatus', this.controls[0].value);
    }
  }
};