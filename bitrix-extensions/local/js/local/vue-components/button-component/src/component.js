import './component.css';
import { DeleteIcon } from './icons/delete.js';
import { DeleteWhiteIcon } from './icons/delete-white.js';
import { ContentWhiteIcon } from './icons/content-white.js';
import { LinkIcon } from './icons/link.js';
import { EditIcon } from './icons/edit.js';

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
    DeleteIcon,
    DeleteWhiteIcon,
    ContentWhiteIcon,
    EditIcon,
    LinkIcon
  },
  // language=Vue
  template: ` 
    <button v-if="!href && props.find(e => e === 'icon')"
      :class="propsClass"
      :title="text"
      @click.stop.prevent="clickButton"
    >
      <DeleteIcon v-if="props.find(e => e === 'delete')" />
      <EditIcon v-else-if="props.find(e => e === 'edit')" />
    </button>

		<button v-else-if="!href"
      class="vue-button"
      :class="propsClass"
      @click.prevent="clickButton"
    >
      <DeleteWhiteIcon v-if="props.find(e => e === 'icon-delete')" />
      <ContentWhiteIcon v-if="props.find(e => e === 'icon-content')" />
      <LinkIcon v-if="props.find(e => e === 'icon-link')" />
      {{ text }}
    </button>

    <a v-else-if="href && props.find(e => e === 'icon')"
      :class="propsClass"
      :title="text"
      :href="href"
    >
      <DeleteIcon v-if="props.find(e => e === 'delete')" />
      <EditIcon v-else-if="props.find(e => e === 'edit')" />
    </a>

		<a v-else-if="href"
      class="vue-button"
      :class="propsClass"
      :href="href"
    >
      <DeleteWhiteIcon v-if="props.find(e => e === 'icon-delete')" />
      <ContentWhiteIcon v-if="props.find(e => e === 'icon-content')" />
      <LinkIcon v-if="props.find(e => e === 'icon-link')" />
      {{ text }}
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
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  }
};
