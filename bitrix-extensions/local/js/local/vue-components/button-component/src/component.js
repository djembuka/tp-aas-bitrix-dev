import './component.css';

export const ButtonComponent = {
  data() {
    return {};
  },
  props: ['text', 'props', 'disabled'],
  emits: ['clickButton'],
  // language=Vue
  template: `
		<button class="vue-button" :class="propsClass" @click="clickButton">{{ text }}</button>
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
