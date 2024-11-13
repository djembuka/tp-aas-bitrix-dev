import './component.css';

import { ControlHidden } from 'local.vue-components.control-hidden';
import { ControlText } from 'local.vue-components.control-text';
import { ControlTel } from 'local.vue-components.control-tel';
import { ControlEmail } from 'local.vue-components.control-email';
import { ControlHint } from 'local.vue-components.control-hint';
import { ControlSelectDropdown } from 'local.vue-components.control-select-dropdown';
import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { ControlDateSingle } from 'local.vue-components.control-date-single';
import { ControlDateRange } from 'local.vue-components.control-date-range';
import { ControlFile } from 'local.vue-components.control-file';
import { ControlFileLoad } from 'local.vue-components.control-file-load';

export const ControlComponent = {
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
    ControlHidden,
    ControlText,
    ControlTel,
    ControlEmail,
    ControlHint,
    ControlSelectDropdown,
    ControlDatepicker,
    ControlDateSingle,
    ControlDateRange,
    ControlFile,
    ControlFileLoad,
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
      @focus="focusAddControl"
      @blur="blurAddControl"
      @enter="enterAddControl"
      @hints="hintsAddControl"
      @upload="uploadAddControl"
    ></component>
	`,
  emits: ['input', 'focus', 'blur', 'hints', 'upload'],
  methods: {
    componentName() {
      return `control-${this.componentType}`;
    },
    inputAddControl(args) {
      this.$emit('input', {
        ...args,
        control: this.control,
      });
    },
    focusAddControl() {
      this.$emit('focus', {
        control: this.control,
      });
    },
    blurAddControl() {
      this.$emit('blur', {
        control: this.control,
      });
    },
    enterAddControl() {
      this.$emit('enter', {
        control: this.control,
      });
    },
    hintsAddControl(args) {
      this.$emit('hints', {
        ...args,
        control: this.control,
      });
    },
    uploadAddControl(args) {
      this.$emit('upload', {
        ...args,
        control: this.control,
      });
    },
  },
};
