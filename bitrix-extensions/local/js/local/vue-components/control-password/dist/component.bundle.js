/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlPassword = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external,
        type: 'password'
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--password': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <div :class=\"classIconObject\" @click.prevent=\"clickIcon\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\">\n          <path d=\"M10.25 6.02127C10.25 6.96173 9.4665 7.72413 8.5 7.72413C7.5335 7.72413 6.75 6.96173 6.75 6.02127C6.75 5.0808 7.5335 4.3184 8.5 4.3184C9.4665 4.3184 10.25 5.0808 10.25 6.02127Z\" stroke=\"#5F7696\" stroke-width=\"1.5\"/>\n        </svg>\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M14.125 13.4688L3.1875 2.53125M6.6875 6.86365C6.41522 7.16383 6.25 7.55815 6.25 7.99002C6.25 8.93048 7.0335 9.69288 8 9.69288C8.44563 9.69288 8.85235 9.5308 9.16131 9.26393M14.1533 9.69288C14.7557 8.79102 15 8.05551 15 8.05551C15 8.05551 13.4071 2.96875 8 2.96875C7.69644 2.96875 7.40491 2.98478 7.125 3.01505M11.9375 11.9006C10.9331 12.5414 9.64014 12.9944 8 12.9676C2.66026 12.8803 1 8.05551 1 8.05551C1 8.05551 1.77135 5.59235 4.0625 4.09409\" stroke=\"#5F7696\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n        </svg>\n      </div>\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <input\n        :type=\"type\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keyup.enter=\"enter\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      classIconObject: function classIconObject() {
        var obj = {
          'twpx-form-control__password-icon': true
        };
        obj["twpx-form-control__password-icon--".concat(this.type)] = true;
        return obj;
      },
      value: {
        get: function get() {
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.control.value.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate() || this.setInvalidWatcher;
      },
      disabled: function disabled() {
        return this.control.disabled;
      },
      validateWatcher: function validateWatcher() {
        return this.control.validateWatcher;
      },
      focusWatcher: function focusWatcher() {
        return this.control.focusWatcher;
      },
      setInvalidWatcher: function setInvalidWatcher() {
        return this.control.setInvalidWatcher;
      }
    },
    watch: {
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      },
      setInvalidWatcher: function setInvalidWatcher(val) {
        this.warning = val ? this.control.regexp_description : '';
      }
    },
    methods: {
      clickIcon: function clickIcon() {
        this.type = this.type === 'password' ? 'text' : 'password';
      },
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      },
      blur: function blur() {
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      validate: function validate() {
        if (this.control.required && this.value.trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
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
      }
    }
  };

  exports.ControlPassword = ControlPassword;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
