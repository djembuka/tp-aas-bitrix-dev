import { IconDropdown } from './IconDropdown.js';
import { IconLock } from './IconLock.js';

import './component.css';

export const ControlSelectDropdown = {
  data() {
    return {
      controlName: this.name || this.control.name || null,
      id: Math.floor(Math.random() * 100000),
      optionsArray: [],
      opened: false,
      animation: false,
      hint: this.control?.hint_external || '',
      dropdownUp: false,
    };
  },
  components: {
    IconDropdown,
    IconLock,
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
      ref="twpxSelect"
      :data-id="'twpxControl' + control.id"
    >
      <IconLock
        class="twpx-form-control__disabled-icon"
        v-if="disabled"
      />
      <div class="twpx-form-control__label">{{ label }}</div>
      <div
        class="twpx-form-control-select"
        :data-id="id"
      >
        <input type="hidden" :name="controlName" :value="value" />
        <IconDropdown class="twpx-form-control-select__arrow" />
        <div
          class="twpx-form-control-select__content"
          @click.prevent="openHideDropdown"
        >
          <span>{{ text }}</span>
        </div>
        <div class="twpx-form-control-select__dropdown"
          ref="dropdownEl"
          :class="{
            'twpx-form-control-select__dropdown--visible': opened,
            'twpx-form-control-select__dropdown--up': dropdownUp
          }">

          <div
            class="twpx-form-control-select__dropdown-item"
            :class="{
              'twpx-form-control-select__dropdown-item': true,
              'twpx-form-control-select__dropdown-item--visible': opened,
              'twpx-form-control-select__dropdown-item--current': option.code === control.value,
              'twpx-form-control-select__dropdown-item--hidden': option.hidden
            }"
            v-for="(option, i) in control.options"
            :key="option.code"
            @click.prevent="clickItem(i)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  props: ['control', 'name', 'customOnChange'],
  emits: ['input', 'focus', 'blur'],
  computed: {
    label() {
      if (this.control.required && !this.control.label.includes('*')) {
        return `${this.control.label} *`
      }
      return this.control.label;
    },
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });

        // dependency
        if (this.control.dependent_id) {
          const dependentSelect = document.querySelector(
            `[data-id="twpxControl${this.control.dependent_id}"]`
          );
          const option = this.control.options.find((o) => o.code === value);

          if (dependentSelect) {
            const event = new CustomEvent('twpxFilterOptionsSelectEvent', {
              detail: {
                options: option.dependent_options,
              },
            });
            dependentSelect.dispatchEvent(event);
          }
        }
      },
    },
    text() {
      let option = this.control.options.find(
        (c) => String(c.code) === String(this.value)
      );
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
      const closeSelectEvent = new Event('twpxCloseSelectEvent');

      document
        .querySelectorAll(
          '.twpx-form-control--select.twpx-form-control--opened'
        )
        .forEach((s) => {
          s.dispatchEvent(closeSelectEvent);
        });

      this.opened = true;
      this.$emit('focus');

      // проверяем, хватает ли места снизу
      this.$nextTick(() => {
        const trigger = this.$refs.twpxSelect.querySelector('.twpx-form-control-select__content');
        const dropdown = this.$refs.dropdownEl;

        if (!trigger || !dropdown) return;

        const triggerRect = trigger.getBoundingClientRect();
        const modal = trigger.closest('.twpx-modal-any-content-container');
        const dropdownHeight = dropdown.offsetHeight || 200; // fallback, если ещё не отрисован
        let rectBottom = window.innerHeight;
        if (modal) {
          rectBottom = modal.getBoundingClientRect().bottom;
        }
        const spaceBelow = rectBottom - triggerRect.bottom;
        const spaceAbove = triggerRect.top;

        // Если снизу меньше места, чем высота дропдауна + небольшой отступ (например 16px)
        this.dropdownUp = (spaceBelow < dropdownHeight + 16) && (spaceAbove > spaceBelow);
      });

      //чтобы иконки delete от multi были под календарём
      const multi = this.$refs.twpxSelect.closest('.twpx-form-control-multi');
      if (multi) {
        multi.classList.add('twpx-form-control-multi--open');
      }
    },
    hideDropdown(quickly) {
      if (this.opened && !quickly) {
        this.animation = true;
        setTimeout(() => {
          this.animation = false;
          this.dropdownUp = false; // сбрасываем направление при закрытии
        }, 200);
      }
      this.opened = false;
      this.$emit('blur');

      //чтобы иконки delete от multi были под календарём
      const multi = this.$refs.twpxSelect.closest('.twpx-form-control-multi');
      if (multi) {
        multi.classList.remove('twpx-form-control-multi--open');
      }
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
    filterOptions(options) {
      // options
      this.control.options.forEach((o) => {
        o.hidden = options.find((elem) => String(o.code) === String(elem))
          ? false
          : true;
      });

      // value
      if (
        this.control.options.find(
          (o) => !o.hidden && String(o.code) === String(this.value)
        )
      ) {
        return;
      }

      if (String(this.value).trim() !== '') {
        const firstVisibleOption = this.control.options.find((o) => !o.hidden);
        if (firstVisibleOption) {
          this.value = firstVisibleOption.code;
        }
      }
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
  mounted() {
    // close when open another twpx select
    this.$refs.twpxSelect.addEventListener('twpxCloseSelectEvent', () => {
      this.hideDropdown(true); // true => quickly
    });

    // filter options if dependent
    this.$refs.twpxSelect.addEventListener(
      'twpxFilterOptionsSelectEvent',
      (event) => {
        this.filterOptions(event.detail.options);
      }
    );
  },
};
