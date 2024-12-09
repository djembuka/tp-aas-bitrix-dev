import './component.css';

export const ButtonComponent = {
  data() {
    return {};
  },
  props: ['text', 'props'],
  emits: ['clickButton'],
  // language=Vue
  template: `
		<button class="vue-button" :class="propsClass">{{ text }}</button>
	`,
  computed: {
    propsClass() {
      const result = {};
      if (this.props) {
        this.props.forEach((p) => {
          result[`vue-button--${p}`] = true;
        });
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
