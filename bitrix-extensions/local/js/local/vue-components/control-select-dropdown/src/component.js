import './component.css';

export const ControlSelectDropdown = {
  data() {
    return {
      id: Math.floor(Math.random() * 100000),
      optionsArray: [],
      opened: false,
      animation: false,
      arrowIcon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
        >
          <g transform="translate(17.589 16) rotate(180)">
            <ellipse
              cx="9"
              cy="8"
              rx="9"
              ry="8"
              transform="translate(-0.411)"
              fill="#fff"
            />
            <path
              d="M3.822,0a.57.57,0,0,0-.386.147L.16,3.157a.473.473,0,0,0,0,.709.581.581,0,0,0,.772,0l2.89-2.655,2.89,2.655a.581.581,0,0,0,.772,0,.473.473,0,0,0,0-.709L4.208.147A.57.57,0,0,0,3.822,0Z"
              transform="translate(4.855 5.23)"
              fill="#003B78"
            />
          </g>
        </svg>`,
    };
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
        <div class="twpx-form-control-select__arrow" v-html="arrowIcon"></div>
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
