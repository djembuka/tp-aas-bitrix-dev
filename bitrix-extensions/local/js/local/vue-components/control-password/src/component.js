import './component.css';

export const ControlPassword = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control.hint_external,
      type: 'password',
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--password': true,
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
      <div :class="classIconObject" @click.prevent="clickIcon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80457 8.07476C1.85179 7.95783 1.91866 7.80326 2.00746 7.62214C2.22128 7.18606 2.55773 6.6054 3.046 6.02733C4.01361 4.88174 5.56828 3.75 8.00067 3.75C10.4331 3.75 11.9877 4.88174 12.9553 6.02733C13.4436 6.6054 13.7801 7.18606 13.9939 7.62214C14.084 7.80585 14.1515 7.96226 14.1988 8.07976C14.1502 8.19457 14.0813 8.34671 13.9901 8.52497C13.7717 8.95188 13.4299 9.5195 12.9383 10.0821C11.9642 11.1969 10.4117 12.2882 8.01294 12.249C5.59804 12.2095 4.03485 11.1092 3.05868 10.0116C2.56646 9.45822 2.22481 8.9056 2.00703 8.49235C1.91946 8.32617 1.8526 8.18382 1.80457 8.07476ZM15.0007 8.08676C15.7164 7.86263 15.7163 7.86227 15.7162 7.86189L15.7152 7.85898L15.7135 7.85346L15.7081 7.83694C15.7037 7.82353 15.6975 7.80537 15.6897 7.78276C15.6739 7.73757 15.6511 7.67455 15.6206 7.59624C15.5597 7.43976 15.468 7.22142 15.3407 6.96177C15.0869 6.44408 14.6871 5.75305 14.1013 5.05943C12.9207 3.66164 10.9753 2.25 8.00067 2.25C5.02601 2.25 3.08069 3.66164 1.90006 5.05943C1.3142 5.75305 0.914481 6.44408 0.660647 6.96177C0.533339 7.22142 0.441603 7.43976 0.380722 7.59624C0.350254 7.67455 0.327431 7.73757 0.311676 7.78276C0.303797 7.80537 0.297678 7.82353 0.293249 7.83694L0.28786 7.85346L0.286097 7.85898L0.285445 7.86104C0.285327 7.86142 0.284946 7.86263 1.00067 8.08676L0.284946 7.86263L0.211304 8.09779L0.291485 8.3308L1.00067 8.08676C0.291485 8.3308 0.291355 8.33042 0.291485 8.3308L0.292033 8.33239L0.29274 8.33442L0.294631 8.33981L0.30035 8.3558C0.305031 8.36874 0.311463 8.38619 0.319713 8.40785C0.336207 8.45117 0.359994 8.51142 0.3916 8.58621C0.45476 8.73566 0.549464 8.94392 0.680012 9.19165C0.9404 9.68577 1.34754 10.3448 1.93786 11.0085C3.12675 12.3452 5.06356 13.7009 7.98841 13.7488C10.9294 13.7969 12.8769 12.4321 14.0679 11.069C14.6588 10.3927 15.0658 9.7159 15.3255 9.20815C15.4558 8.95348 15.5502 8.73905 15.6131 8.58527C15.6446 8.50831 15.6682 8.44632 15.6846 8.40185C15.6928 8.3796 15.6992 8.36171 15.7038 8.34849L15.7094 8.3322L15.7112 8.32675L15.7119 8.32471C15.712 8.32434 15.7124 8.32313 15.0007 8.08676ZM15.0007 8.08676L15.7124 8.32313L15.7887 8.09352L15.7162 7.86189L15.0007 8.08676ZM8.00067 7.0684C7.42895 7.0684 7.00067 7.51419 7.00067 8.02127C7.00067 8.52835 7.42895 8.97413 8.00067 8.97413C8.57239 8.97413 9.00067 8.52835 9.00067 8.02127C9.00067 7.51419 8.57239 7.0684 8.00067 7.0684ZM5.50067 8.02127C5.50067 6.64742 6.6394 5.5684 8.00067 5.5684C9.36195 5.5684 10.5007 6.64742 10.5007 8.02127C10.5007 9.39512 9.36195 10.4741 8.00067 10.4741C6.6394 10.4741 5.50067 9.39512 5.50067 8.02127Z" fill="#5F7696"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.125 13.4688L3.1875 2.53125M6.6875 6.86365C6.41522 7.16383 6.25 7.55815 6.25 7.99002C6.25 8.93048 7.0335 9.69288 8 9.69288C8.44563 9.69288 8.85235 9.5308 9.16131 9.26393M14.1533 9.69288C14.7557 8.79102 15 8.05551 15 8.05551C15 8.05551 13.4071 2.96875 8 2.96875C7.69644 2.96875 7.40491 2.98478 7.125 3.01505M11.9375 11.9006C10.9331 12.5414 9.64014 12.9944 8 12.9676C2.66026 12.8803 1 8.05551 1 8.05551C1 8.05551 1.77135 5.59235 4.0625 4.09409" stroke="#5F7696" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="twpx-form-control__label">{{ control.label }}</div>
      <input
        :type="type"
        :id="controlId"
        :name="controlName"
        v-model="value"
        @focus="focus"
        @blur="blur"
        @keyup.enter="enter"
        :disabled="disabled"
        ref="input"
        autocomplete="off"
        :placeholder="placeholder"
        class="twpx-form-control__input"
      />
      <div
        class="twpx-form-control__warning"
        v-html="warning"
        v-if="warning"
      ></div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  computed: {
    classIconObject() {
      const obj = {
        'twpx-form-control__password-icon': true,
      };
      obj[`twpx-form-control__password-icon--${this.type}`] = true;
      return obj;
    },
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
      return (this.blured && !this.validate()) || this.setInvalidWatcher;
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
    setInvalidWatcher() {
      return this.control.setInvalidWatcher;
    },
  },
  watch: {
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
    setInvalidWatcher(val) {
      this.warning = val ? this.control.regexp_description : '';
    },
  },
  methods: {
    clickIcon() {
      this.type = this.type === 'password' ? 'text' : 'password';
    },
    focus() {
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    enter() {
      this.$emit('enter');
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
