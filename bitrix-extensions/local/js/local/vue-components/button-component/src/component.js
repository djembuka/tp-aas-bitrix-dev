import './component.css';

import { iconButtonContent } from './content/iconButtonContent.js';
import { textButtonContent } from './content/textButtonContent.js';

export const ButtonComponent = {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    props: {
      type: Array,
      default() {
        return ['secondary', 'medium']
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
    }
  },
  emits: ['clickButton'],
  components: {
    iconButtonContent,
    textButtonContent
  },
  // language=Vue
  template: ` 
    <button v-if="isButtonTag && isIcon"
      :class="propsClass"
      :title="text"
      @click.stop.prevent="clickButton"
    >
      <iconButtonContent :props="props" />
    </button>

		<button v-else-if="isButtonTag"
      class="vue-button"
      :class="propsClass"
      @click.prevent="clickButton"
    >
      <textButtonContent :text="text" :props="props" />
    </button>

    <a v-else-if="isATag && isIcon"
      :class="propsClass"
      :title="text"
      :href="href"
    >
      <iconButtonContent :props="props" />
    </a>

		<a v-else-if="isATag"
      class="vue-button"
      :class="propsClass"
      :href="href"
    >
      <textButtonContent :text="text" :props="props" />
    </a>
	`,
  computed: {
    propsClass() {
      const result = {};
      if (this.props) {
        this.props.forEach((p) => {
          if (!p.startsWith('icon-')) {
            result[`vue-button--${p}`] = true;
          }
        });
      }

      if (this.disabled) {
        result[`vue-button--disabled`] = true;
      }
      return result;
    },
    isButtonTag() {
      return !this.href;
    },
    isATag() {
      return !!this.href;
    },
    isIcon() {
      return this.props.find(e => e === 'icon');
    },
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  }
};
