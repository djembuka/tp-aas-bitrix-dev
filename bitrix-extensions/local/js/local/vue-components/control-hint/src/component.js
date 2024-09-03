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

      controlValue: this.control.value,
      hintItems: [],
      activeHintItem: {},
      activeHint: [],
      hover: false,
      compare: this.controlValue,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--text': true,
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

      <div class="b-input-hint">
        <div v-for="(hint, index) in hintItems" :data-id="hint.id" :data-value="hint.value" :class="{active: activeHint[index]}" class="b-input-hint__item" @click.prevent="clickHint($event)"></div>
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
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    placeholder() {
      if (this.focused && !this.value.trim()) {
        return this.control.hint_internal;
      } else {
        return '';
      }
    },
    active() {
      return this.focused || !!this.control.value.trim();
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
    controlValue(value) {
      this.change(value);
      get() {
        return this.control.value;
      },
      set(value) {
        this.change(value);
        // this.$emit('input', { value });
      },
    },
  },
  watch: {
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
  },
  methods: {
    change() {
      this.activeHint = [];
      this.activeHintItem = {};

      if (this.controlValue.length >= this.control.count) {
        const state = this;

        let a = window.BX.ajax.runComponentAction(this.control.action, {
          sessionid: 'id',
          userid: 'id',
        });

        a.then(
          (result) => {
            resultFn(state, result);
          },
          (error) => {
            if (window.twinpx.vue.markup) {
              resultFn(state, [
                {
                  id: 'id1',
                  value: '456456',
                },
                {
                  id: 'id2',
                  value: '123133',
                },
                {
                  id: 'id3',
                  value: '798798',
                },
              ]);
            } else {
              //showError(error)
            }
          }
        );

        function resultFn(state, data) {
          state.hintItems = data;
        }
      } else {
        this.hintItems = [];
      }
    },
    upArrow() {
      let activeIndex = this.activeHint.indexOf(true);
      let arr = this.activeHint.map((elem) => null);

      if (activeIndex >= 0) {
        this.activeHint[activeIndex] = null;
      }
      if (--activeIndex < 0) {
        activeIndex = this.activeHint.length - 1;
      }
      arr[activeIndex] = true;
      //lightlight hint
      this.activeHint = arr;
      //set active user
      this.activeHintItem =
        this.users.find((user) => user.ORNZ === this.controlValue) || {};
    },
    downArrow() {
      let activeIndex = this.activeHint.indexOf(true);
      let arr = this.activeHint.map((elem) => null);
      if (activeIndex >= 0) {
        this.activeHint[activeIndex] = null;
      }
      if (++activeIndex > this.activeHint.length - 1) {
        activeIndex = 0;
      }
      arr[activeIndex] = true;
      //lightlight hint
      this.activeHint = arr;
      //set active user
      this.activeHintItem =
        this.users.find((user) => user.ORNZ === this.controlValue) || {};
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
        this.hintItems = [];
      }, 200);

      setTimeout(() => {
        this.validate();
      }, 100);

      if (this.controlValue !== this.compare) {
        this.$emit('autosave');
        bitrixLogs(6, `${this.formControl.label}: ${this.controlValue}`);
      }
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
