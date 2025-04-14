import { IconDropdown } from './IconDropdown.js';
import './component.css';

export const ControlSelectDropdown = {
  data() {
    return {
      id: Math.floor(Math.random() * 100000),
      optionsArray: [],
      opened: false,
      animation: false,
    };
  },
  components: {
    IconDropdown,
  },
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--select': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
        'twpx-form-control--opened': opened,
        'twpx-form-control--animation': animation,
      }"
      @close="console.log('close')"
    >
      <img
        :src="disabled"
        class="twpx-form-control__disabled-icon"
        v-if="false"
      />
      <div class="twpx-form-control__label">{{ control.label }}</div>
      <div
        class="twpx-form-control-select"
        :data-id="id"
        id="id"
      >
        <input type="hidden" :name="name" :value="value" />
        <IconDropdown class="twpx-form-control-select__arrow" />
        <div
          class="twpx-form-control-select__content"
          @click.prevent="openHideDropdown"
        >
          {{ text }}
        </div>
        <div class="twpx-form-control-select__dropdown">
          <div
            class="twpx-form-control-select__dropdown-item"
            :class="{'twpx-form-control-select__dropdown-item': true, 'twpx-form-control-select__dropdown-item--current': option.code === control.value}"
            v-for="(option, i) in control.options"
            :key="option.code"
            @click.prevent="clickItem(i)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
	`,
  props: ['control', 'name', 'customOnChange'],
  emits: ['input', 'focus', 'blur'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    text() {
      let option = this.control.options.find((c) => c.code === this.value);
      if (option) {
        return option.label;
      }
      return '';
    },
    active() {
      return !!this.text.trim();
    },
    invalid() {
      return false; //!this.validate();
    },
    disabled() {
      return this.control.disabled;
    },
  },
  methods: {
    createOptionsArray() {
      this.optionsArray = this.control.options;
    },
    clickItem(index) {
      let option = this.control.options[index];
      this.value = option.code;
      this.hideDropdown();
      //onchange
      if (typeof this.customOnChange === 'function') {
        this.customOnChange();
      }
    },
    openHideDropdown() {
      this.opened ? this.hideDropdown() : this.openDropdown();
    },
    openDropdown() {
      // if (window.twpxSelectManager) {
      //   Object.values(window.twpxSelectManager.selectObject).forEach(
      //     (select) => {
      //       select.hideDropdown();
      //     }
      //   );
      // }

      document
        .querySelectorAll(
          '.twpx-form-control--select.twpx-form-control--opened'
        )
        .forEach((select) => {
          const close = new Event('close');
          select.dispatchEvent(close);
        });

      this.opened = true;
      this.$emit('focus');
    },
    hideDropdown() {
      if (this.opened) {
        this.animation = true;
        setTimeout(() => {
          this.animation = false;
        }, 300);
      }
      this.opened = false;
      this.$emit('blur');
    },
    divElements() {
      this.content = this.selectDiv.querySelector(
        '.twpx-form-control-select__content'
      );
      this.dropdown = this.selectDiv.querySelector(
        '.twpx-form-control-select__dropdown'
      );
      this.hidden = this.selectDiv.querySelector('input[type="hidden"]');
    },
    divEvents() {
      this.content.addEventListener('click', () => {
        if (
          this.selectDiv.classList.contains(
            'twpx-form-control-select--dropdown'
          )
        ) {
          this.hideDropdown();
        } else {
          this.openDropdown();
        }
      });

      this.dropdown.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('twpx-form-control-select__dropdown-item')
        ) {
          this.clickItem(e.target);
        }
      });
    },
  },
  beforeMount() {
    document.addEventListener('click', (e) => {
      if (
        e.target.className !== 'twpx-form-control-select__dropdown-item' &&
        e.target.className !== 'twpx-form-control-select__content'
      ) {
        this.hideDropdown();
      }
    });
  },
};
