import { ControlText } from 'local.vue-components.control-text';
import { ControlHint } from 'local.vue-components.control-hint';
import { ControlSelectDropdown } from 'local.vue-components.control-select-dropdown';
import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { ControlDateSingle } from 'local.vue-components.control-date-single';
import { ControlDateRange } from 'local.vue-components.control-date-range';

export const Control = {
  data() {
    return {
      id: `PROPERTY_${this.control.id}`,
      name: `PROPERTY_${this.control.id}`,
      componentType: `${this.control.property}${
        this.control.type ? '-' + this.control.type : ''
      }`,
    };
  },
  components: {
    ControlText,
    ControlHint,
    ControlSelectDropdown,
    ControlDatepicker,
    ControlDateSingle,
    ControlDateRange,
  },
  props: ['control'],
  // language=Vue
  template: `
		<component
      :is="componentName()"
      :control="control"
      :id="id"
      :name="name"
      @input="inputAddControl"
      @hints="hintsAddControl"
    ></component>
	`,
  emits: ['input', 'hints'],
  methods: {
    componentName() {
      return `control-${this.componentType}`;
    },
    inputAddControl({ value, checked }) {
      this.$emit('input', {
        control: this.control,
        value,
        checked,
      });
    },
    hintsAddControl({ type, action, value }) {
      this.$emit('hints', {
        type,
        control: this.control,
        action,
        value,
      });
    },
  },
};
