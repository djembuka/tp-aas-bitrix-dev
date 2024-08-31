import { ControlText } from 'local.vue-components.control-text';
import { ControlSelectDropdown } from 'local.vue-components.control-select-dropdown';

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
    ControlSelectDropdown,
  },
  props: ['control'],
  // language=Vue
  template: `
		<component
      :is="componentName()"
      :control="control"
      :id="id"
      :name="name"
      @input="addControl"
    ></component>
	`,
  emits: ['input'],
  methods: {
    componentName() {
      return `control-${this.componentType}`;
    },
    addControl({ value, checked }) {
      this.$emit('input', {
        control: this.control,
        value,
        checked,
      });
    },
  },
};
