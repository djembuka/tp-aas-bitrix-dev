/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconLoad = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <g clip-path=\"url(#paint0_angular_1898_4387_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0 0.008 -0.008 0 8 8)\"><foreignObject x=\"-1125\" y=\"-1125\" width=\"2250\" height=\"2250\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"background:conic-gradient(from 90deg,rgba(67, 117, 216, 1) 0deg,rgba(255, 255, 255, 0) 360deg);height:100%;width:100%;opacity:1\"></div></foreignObject></g></g><path d=\"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6C4.46538 1.6 1.6 4.46538 1.6 8Z\"/>\n      <defs>\n        <clipPath id=\"paint0_angular_1898_4387_clip_path\"><path d=\"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6C4.46538 1.6 1.6 4.46538 1.6 8Z\"/></clipPath>\n      </defs>\n    </svg>\n  "
  };

  var IconClear = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\">\n      <path d=\"M8.04995 6.98787L13.7795 1.25837C13.855 1.19193 13.9161 1.11073 13.959 1.01978C14.0019 0.928829 14.0258 0.830049 14.0291 0.729527C14.0324 0.629004 14.0151 0.528868 13.9783 0.435286C13.9414 0.341705 13.8858 0.25666 13.8148 0.185392C13.7438 0.114124 13.659 0.0581411 13.5656 0.0208929C13.4722 -0.0163553 13.3721 -0.0340802 13.2716 -0.0311898C13.1711 -0.0282994 13.0722 -0.00485496 12.981 0.0376992C12.8899 0.0802535 12.8085 0.141016 12.7417 0.216244L7.01132 5.95012L1.28183 0.216244C1.14363 0.0780497 0.956199 0.000412874 0.760763 0.000412874C0.565326 0.000412874 0.377895 0.0780497 0.2397 0.216244C0.101506 0.354438 0.0238691 0.54187 0.0238691 0.737307C0.0238691 0.932743 0.101506 1.12017 0.2397 1.25837L5.9692 6.98787L0.216075 12.7419C0.0778809 12.8801 0.000244141 13.0675 0.000244141 13.2629C0.000244141 13.4584 0.0778809 13.6458 0.216075 13.784C0.35427 13.9222 0.541701 13.9998 0.737138 13.9998C0.932574 13.9998 1.12001 13.9222 1.2582 13.784L7.01132 8.03087L12.7408 13.7612C12.879 13.8994 13.0665 13.9771 13.2619 13.9771C13.4573 13.9771 13.6448 13.8994 13.783 13.7612C13.9211 13.623 13.9988 13.4356 13.9988 13.2402C13.9988 13.0447 13.9211 12.8573 13.783 12.7191L8.04995 6.98787Z\" fill=\"#5F7696\"/>\n    </svg>\n  "
  };

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlHint = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external,
        activeHintItem: {},
        activeHintArray: [],
        hover: false,
        compare: this.controlValue
      };
    },
    components: {
      IconLoad: IconLoad,
      IconClear: IconClear,
      IconLock: IconLock
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--hint': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--open': !!hintItems.length,\n      }\"\n        @mouseenter=\"mouseenter\"\n        @mouseleave=\"mouseleave\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      \n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"controlValue\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keydown.enter.prevent=\"enterInput\"\n        @keydown.up.prevent=\"upArrow()\"\n        @keydown.down.prevent=\"downArrow()\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n\n      <IconClear class=\"twpx-form-control-clear\" @click.prevent=\"clearInput()\" v-show=\"isClearable\" />\n\n      <IconLoad class=\"twpx-form-control-loader\" v-show=\"isLoading\" />\n\n      <div class=\"twpx-form-control-hint\" v-if=\"hintItems.length\">\n        <div v-for=\"(hint, index) in hintItems\" :data-id=\"hint.id\" :data-value=\"hint.value\" :class=\"{active: activeHintArray[index]}\" class=\"twpx-form-control-hint__item\" @click.prevent=\"clickHint(hint)\" v-html=\"hint.value\"></div>\n      </div>\n\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter', 'hints'],
    computed: {
      hintItems: function hintItems() {
        return this.control.hints || [];
      },
      placeholder: function placeholder() {
        if (this.focused && (!this.controlValue || !this.controlValue.trim())) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.controlValue.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate();
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
      isClearable: function isClearable() {
        return this.controlValue !== '' && this.hover && !this.isLoading ? true : false;
      },
      isLoading: function isLoading() {
        return this.control.loading;
      },
      controlValue: {
        get: function get() {
          if (babelHelpers["typeof"](this.control.value) === 'object') {
            if (typeof this.control.value.value === 'string' && this.control.value.value.indexOf('data-value') >= 0) {
              // если html и есть элемент, содержащий значение
              var div = document.createElement('div');
              div.innerHTML = this.control.value.value;
              return div.querySelector('[data-value]').textContent;
            }
            return this.control.value.value;
          }
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
          if (this.controlValue.length >= this.control.count) {
            this.$emit('hints', {
              type: 'get',
              action: this.control.action
            });
          } else {
            this.$emit('hints', {
              type: 'set',
              value: []
            });
          }
        }
      }
    },
    watch: {
      hintItems: function hintItems() {
        this.activeHintArray = this.hintItems.map(function () {
          return null;
        });
      },
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      }
    },
    methods: {
      mouseenter: function mouseenter() {
        this.hover = true;
      },
      mouseleave: function mouseleave() {
        this.hover = false;
      },
      clearInput: function clearInput() {
        this.$emit('input', {
          value: ''
        });
      },
      enterInput: function enterInput() {
        this.$emit('input', {
          value: this.activeHintItem
        });
        this.$emit('hints', {
          type: 'set',
          value: []
        });
        this.$emit('enter');
      },
      clickHint: function clickHint(hint) {
        this.activeHintItem = hint || {};
        this.$emit('input', {
          value: this.activeHintItem
        });
        this.$emit('hints', {
          type: 'set',
          value: []
        });
        this.mouseleave();

        // this.validate();
      },
      upArrow: function upArrow() {
        var activeIndex = this.activeHintArray.indexOf(true);
        var arr = this.activeHintArray.map(function (elem) {
          return null;
        });
        if (--activeIndex < 0) {
          activeIndex = this.activeHintArray.length - 1;
        }
        arr[activeIndex] = true;
        this.activeHintArray = arr;
        this.activeHintItem = this.hintItems[activeIndex] || {};
      },
      downArrow: function downArrow() {
        var activeIndex = this.activeHintArray.indexOf(true);
        var arr = this.activeHintArray.map(function (elem) {
          return null;
        });
        if (++activeIndex > this.activeHintArray.length - 1) {
          activeIndex = 0;
        }
        arr[activeIndex] = true;
        this.activeHintArray = arr;
        this.activeHintItem = this.hintItems[activeIndex] || {};
      },
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.compare = this.controlValue;
        this.$emit('focus');
      },
      blur: function blur() {
        var _this = this;
        this.focused = false;
        this.blured = true;
        setTimeout(function () {
          if (babelHelpers["typeof"](_this.control.value) !== 'object') {
            _this.controlValue = '';
          }
          _this.$emit('hints', {
            type: 'set',
            value: []
          });
        }, 200);
        this.$emit('blur');

        // setTimeout(() => {
        //   this.validate();
        // }, 100);

        // if (this.controlValue !== this.compare) {
        //   this.$emit('autosave');
        //   bitrixLogs(6, `${this.formControl.label}: ${this.controlValue}`);
        // }
      },
      validate: function validate() {
        if (this.control.required && this.control.value.trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.control.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else {
            return true;
          }
        } else if (this.control.required && !this.control.value) {
          return false;
        }
        return true;
      }
    }
  };

  exports.ControlHint = ControlHint;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
