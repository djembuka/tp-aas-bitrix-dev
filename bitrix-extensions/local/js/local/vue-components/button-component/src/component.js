import './component.css';
import { DeleteIcon } from './icons/delete.js';

export const ButtonComponent = {
  data() {
    return {};
  },
  props: ['text', 'props', 'disabled'],
  emits: ['clickButton'],
  components: {
    DeleteIcon,
  },
  // language=Vue
  template: `
    <button v-if="props.find(e => e === 'icon')" :class="propsClass" @click.prevent="clickButton" :title="text">
      <DeleteIcon />
    </button>

		<button v-else class="vue-button" :class="propsClass" @click.prevent="clickButton">{{ text }}</button>
	`,
  computed: {
    propsClass() {
      const result = {};
      if (this.props) {
        this.props.forEach((p) => {
          result[`vue-button--${p}`] = true;
        });
      }

      if (this.disabled) {
        result[`vue-button--disabled`] = true;
      }
      return result;
    },
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  },
};
