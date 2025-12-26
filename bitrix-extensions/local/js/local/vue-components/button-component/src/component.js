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
    <button v-if="isButtonTag && isIcon"
      :class="propsClass"
      :title="text"
      @click.stop.prevent="clickButton"
    >
      <DeleteIcon v-if="isDelete" />
      <EditIcon v-else-if="isEdit" />
    </button>

		<button v-else-if="isButtonTag"
      class="vue-button"
      :class="propsClass"
      @click.prevent="clickButton"
    >
      <DeleteWhiteIcon v-if="isIconDelete" />
      <ContentWhiteIcon v-if="isIconContent" />
      <LinkIcon v-if="isIconLink" />
      {{ text }}
    </button>

    <a v-else-if="isATag && isIcon"
      :class="propsClass"
      :title="text"
      :href="href"
    >
      <DeleteIcon v-if="isDelete" />
      <EditIcon v-else-if="isEdit" />
    </a>

		<a v-else-if="isATag"
      class="vue-button"
      :class="propsClass"
      :href="href"
    >
      <DeleteWhiteIcon v-if="isIconDelete" />
      <ContentWhiteIcon v-if="isIconContent" />
      <LinkIcon v-if="isIconLink" />
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
    isButtonTag() {
      return !this.href;
    },
    isATag() {
      return !!this.href;
    },
    isIcon() {
      return this.props.find(e => e === 'icon');
    },
    isDelete() {
      return this.props.find(e => e === 'delete');
    },
    isEdit() {
      return this.props.find(e => e === 'edit');
    },
    isIconDelete() {
      return this.props.find(e => e === 'icon-delete');
    },
    isIconContent() {
      return this.props.find(e => e === 'icon-content');
    },
    isIconLink() {
      return this.props.find(e => e === 'icon-link');
    }
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  }
};
