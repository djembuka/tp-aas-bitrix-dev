import './component.css';

import { ControlHidden } from 'local.vue-components.control-hidden';
import { ControlText } from 'local.vue-components.control-text';
import { ControlPassword } from 'local.vue-components.control-password';
import { ControlTel } from 'local.vue-components.control-tel';
import { ControlEmail } from 'local.vue-components.control-email';
import { ControlHint } from 'local.vue-components.control-hint';
import { ControlSelectDropdown } from 'local.vue-components.control-select-dropdown';
import { ControlSelectRadio } from 'local.vue-components.control-select-radio';
import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { ControlDateSingle } from 'local.vue-components.control-date-single';
import { ControlDateRange } from 'local.vue-components.control-date-range';
import { ControlFile } from 'local.vue-components.control-file';
import { ControlFileUpload } from 'local.vue-components.control-file-upload';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';
import { ControlCheckboxCheckbox } from 'local.vue-components.control-checkbox-checkbox';
import { ControlCheckboxSwitch } from 'local.vue-components.control-checkbox-switch';

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
    ControlPassword,
    ControlTel,
    ControlEmail,
    ControlHint,
    ControlSelectDropdown,
    ControlSelectRadio,
    ControlDatepicker,
    ControlDateSingle,
    ControlDateRange,
    ControlFile,
    ControlFileUpload,
    ControlCheckbox,
    ControlCheckboxCheckbox,
    ControlCheckboxSwitch,
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
  },
};
