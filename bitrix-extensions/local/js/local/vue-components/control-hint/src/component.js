import './component.css';

export const ControlHint = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control.hint_external,

      showHints: false,
      activeHintItem: {},
      activeHintArray: [],
      hover: false,
      compare: this.controlValue,
      memoryValue: '',
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--hint': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }"
    >
      <img
        :src="disabled"
        class="twpx-form-control__disabled-icon"
        v-if="false"
      />

      <div class="twpx-form-control__label">{{ control.label }}</div>
      
      <input
        type="text"
        :id="controlId"
        :name="controlName"
        v-model="controlValue"
        @focus="focus"
        @blur="blur"
        @keydown.enter.prevent="enterInput"
        @keydown.up.prevent="upArrow()"
        @keydown.down.prevent="downArrow()"
        :disabled="disabled"
        ref="input"
        autocomplete="off"
        :placeholder="placeholder"
        class="twpx-form-control__input"
      />

      <div class="b-input-clear" @click.prevent="clearInput()" v-show="isClearable"></div>

      <div class="b-input-hint" v-if="showHints">
        <div v-for="(hint, index) in hintItems" :data-id="hint.id" :data-value="hint.value" :class="{active: activeHintArray[index]}" class="b-input-hint__item" @click.prevent="clickHint(hint)">{{ hint.value }}</div>
      </div>

      <div
        class="twpx-form-control__warning"
        v-html="warning"
        v-if="warning"
      ></div>

      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input'],
  computed: {
    hintItems() {
      return this.control.hints;
    },
    placeholder() {
      if (this.focused && (!this.controlValue || !this.controlValue.trim())) {
        return this.control.hint_internal;
      } else {
        return '';
      }
    },
    active() {
      return this.focused || !!this.controlValue.trim();
    },
    invalid() {
      return this.blured && !this.validate();
    },
    disabled() {
      return this.control.disabled;
    },
    validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher() {
      return this.control.focusWatcher;
    },
    isClearable() {
      return this.controlValue !== '' && this.hover ? true : false;
    },
    controlValue: {
      get() {
        if (typeof this.control.value === 'object') {
          return this.control.value.value;
        }
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });

        // this.activeHintArray = [];
        // this.activeHintItem = {};

        if (this.controlValue.length >= this.control.count) {
          this.$emit('input', { hintsAction: this.control.action });
        } else {
          this.showHints = false;
        }
      },
    },
  },
  watch: {
    hintItems() {
      this.activeHintArray = this.hintItems.map(() => null);
    },
    controlValue() {
      if (
        this.controlValue.length >= this.control.count &&
        typeof this.control.hints === 'object' &&
        this.control.hints.length &&
        !this.loading
      ) {
        console.log(1);
        this.showHints = true;
      }
    },
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
  },
  methods: {
    enterInput() {
      //check if there is an active hint
      let activeIndex = this.activeHintArray.indexOf(true);
      if (activeIndex >= 0) {
        this.activeHintItem = this.hintItems[activeIndex] || {};
      } else {
        //if not
        this.activeHintItem =
          this.hintItems.find(
            (hint) => hint.value.search(this.controlValue) >= 0
          ) || {};
      }
      this.controlValue = this.activeHintItem.value || this.memoryValue;
      this.memoryValue = this.controlValue;
      this.showHints = false;
    },
    clickHint(hint) {
      this.activeHintItem = this.hintItems.find((h) => h.id === hint.id) || {};
      this.$emit('input', { value: hint });
      this.showHints = false;

      // this.validate();
    },
    upArrow() {
      let activeIndex = this.activeHintArray.indexOf(true);
      let arr = this.activeHintArray.map((elem) => null);

      if (activeIndex >= 0) {
        this.activeHintArray[activeIndex] = null;
      }
      if (--activeIndex < 0) {
        activeIndex = this.activeHintArray.length - 1;
      }
      arr[activeIndex] = true;
      //lightlight hint
      this.activeHintArray = arr;
      //set active user
      this.activeHintItem =
        this.hintItems.find((hint) => hint.value === this.controlValue) || {};
    },
    downArrow() {
      let activeIndex = this.activeHintArray.indexOf(true);
      console.log(activeIndex);
      let arr = this.activeHintArray.map((elem) => null);
      if (activeIndex >= 0) {
        this.activeHintArray[activeIndex] = null;
      }
      if (++activeIndex > this.activeHintArray.length - 1) {
        activeIndex = 0;
      }
      arr[activeIndex] = true;
      //lightlight hint
      this.activeHintArray = arr;
      //set active user
      this.activeHintItem =
        this.hintItems.find((hint) => hint.value === this.controlValue) || {};
    },
    focus() {
      this.focused = true;
      this.blured = false;

      this.compare = this.controlValue;
    },
    blur() {
      this.focused = false;
      this.blured = true;

      setTimeout(() => {
        this.showHints = false;
      }, 200);

      setTimeout(() => {
        this.validate();
      }, 100);

      if (typeof this.control.value !== 'object' && !this.showHints) {
        this.controlValue = '';
      }

      // if (this.controlValue !== this.compare) {
      //   this.$emit('autosave');
      //   bitrixLogs(6, `${this.formControl.label}: ${this.controlValue}`);
      // }
    },
    validate() {
      if (
        (this.control.required && this.value.trim()) ||
        !this.control.required
      ) {
        if (this.control.regexp) {
          const match = String(this.value.trim()).match(
            RegExp(this.control.regexp)
          );
          if (!match) {
            this.warning = this.control.regexp_description;
          } else {
            this.warning = '';
          }
          return match;
        } else {
          return true;
        }
      } else if (this.control.required && !this.value) {
        return false;
      }
      return true;
    },
  },
};
