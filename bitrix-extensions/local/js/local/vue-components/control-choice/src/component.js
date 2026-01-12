import { ControlSubcontrol } from 'local.vue-components.control-subcontrol';
import { ControlMulti } from 'local.vue-components.control-multi';
import { ControlMultiSub } from 'local.vue-components.control-multi-sub';
import { ControlComponent } from 'local.vue-components.control-component';

export const ControlChoice = {
  props: ['control'],
  emits: [
    'create',
    'add',
    'remove',
    'input',
    'focus',
    'blur',
    'enter',
    'hints',
  ],
  components: {
    ControlSubcontrol,
    ControlMulti,
    ControlMultiSub,
    ControlComponent,
  },
  template: `
		<ControlSubcontrol
      v-if="control.sub && !control.multi"
      :control="control"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @enter="$emit('enter', $event)"
      @hints="$emit('hints', $event)"
    />

    <ControlMulti
      v-else-if="!control.sub && control.multi"
      :parent="control"
      @create="$emit('create', $event)"
      @add="$emit('add', $event)"
      @remove="$emit('remove', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @enter="$emit('enter', $event)"
      @hints="$emit('hints', $event)"
    />

    <ControlMultiSub
      v-else-if="control.sub && control.multi"
      :parent="control"
      @create="$emit('create', $event)"
      @add="$emit('add', $event)"
      @remove="$emit('remove', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @enter="$emit('enter', $event)"
      @hints="$emit('hints', $event)"
    />

    <ControlComponent
      v-else
      :control="control"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @enter="$emit('enter', $event)"
      @hints="$emit('hints', $event)"
    />
	`
};
