import './component.css';

import { IconClose } from './IconClose.js';

export const ModalAnyContent = {
  props: {
    stateWatcher: {
      type: Boolean,
      default: true
    },
    opacoClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onClose'],
  data() {
    return {
      isOpen: false,
      isAnimate: false,
    }
  },
  components: {
    IconClose,
  },
  // language=Vue
  template: `
		<div :class="{
      'twpx-modal-any-content': true,
      'twpx-modal-any-content--open': isOpen,
      'twpx-modal-any-content--animate': isAnimate
    }" @click="clickOpaco">

      <div class="twpx-modal-any-content-body" @click.stop>
        <div class="twpx-modal-any-content-close">
          <IconClose @click.prevent="close" />
        </div>

        <div class="twpx-modal-any-content-container">
          <slot></slot>
        </div>
      </div>
    </div>
	`,
  watch: {
    stateWatcher() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  methods: {
    open() {
      this.isOpen = true;
      setTimeout(() => {
        this.isAnimate = true;
      }, 0)
    },
    close() {
      this.isAnimate = false;
      setTimeout(() => {
        this.isOpen = false;
        this.$emit('onClose');
      }, 300)
    },
    clickOpaco() {
      if (this.opacoClose) {
        this.close();
      }
    }
  },
};
