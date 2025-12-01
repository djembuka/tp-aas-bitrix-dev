/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlNum = {
    props: {
      control: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        "default": null
      },
      name: {
        type: String,
        "default": null
      }
    },
    data: function data() {
      var _this$control;
      // Проверяем существование control и его свойств
      if (!this.control) {
        console.error('ControlNum: prop "control" is required');
        return {};
      }
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: ((_this$control = this.control) === null || _this$control === void 0 ? void 0 : _this$control.hint_external) || ''
      };
    },
    components: {
      IconLock: IconLock
    },
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--num': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <div class=\"twpx-form-control__label\">{{ label }}</div>\n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keyup.enter=\"enter\"\n        @keydown=\"keydown\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        :aria-label=\"label\"\n        :aria-invalid=\"invalid\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      label: function label() {
        if (this.control.required && !this.control.label.includes('*')) {
          return "".concat(this.control.label, " *");
        }
        return this.control.label;
      },
      value: {
        get: function get() {
          var _this$control2, _this$control3;
          var value = isNaN(Number((_this$control2 = this.control) === null || _this$control2 === void 0 ? void 0 : _this$control2.value)) ? 0 : (_this$control3 = this.control) === null || _this$control3 === void 0 ? void 0 : _this$control3.value;
          return value || '';
        },
        set: function set(value) {
          if (!this.control) return;
          this.control.setInvalidWatcher = false;
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !String(this.value).trim()) {
          var _this$control4;
          return ((_this$control4 = this.control) === null || _this$control4 === void 0 ? void 0 : _this$control4.hint_internal) || '';
        }
        return '';
      },
      active: function active() {
        var _String, _this$control5;
        return this.focused || !!((_String = String((_this$control5 = this.control) === null || _this$control5 === void 0 ? void 0 : _this$control5.value)) !== null && _String !== void 0 && _String.trim());
      },
      invalid: function invalid() {
        return this.blured && !this.validate() || this.setInvalidWatcher;
      },
      disabled: function disabled() {
        var _this$control6;
        return !!((_this$control6 = this.control) !== null && _this$control6 !== void 0 && _this$control6.disabled);
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
      keydown: function keydown($event) {
        this.inputnum($event);
      },
      inputnum: function inputnum(e) {
        var key = e.key;
        var allowedChar = /[0-9.,]/;
        var controlKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

        // Разрешаем навигацию/редактирование и сочетания клавиш (копировать/вставить и т.п.)
        if (controlKeys.includes(key) || e.ctrlKey || e.metaKey) {
          return;
        }

        // Разрешаем только одну запятую или точку в значении
        if (key === '.' || key === ',') {
          var currentValue = this.value || '';
          var hasSeparator = currentValue.includes('.') || currentValue.includes(',');
          if (hasSeparator) {
            var inputEl = this.$refs.input;
            var selStart = inputEl && typeof inputEl.selectionStart === 'number' ? inputEl.selectionStart : null;
            var selEnd = inputEl && typeof inputEl.selectionEnd === 'number' ? inputEl.selectionEnd : null;

            // Разрешаем ввод, только если в выделении уже есть разделитель (тем самым заменяем его)
            if (selStart !== null && selEnd !== null && selStart !== selEnd) {
              var selectedText = currentValue.slice(selStart, selEnd);
              var selectionHasSeparator = selectedText.includes('.') || selectedText.includes(',');
              if (!selectionHasSeparator) {
                e.preventDefault();
                return;
              }
            } else {
              e.preventDefault();
              return;
            }
          }
        }

        // Разрешаем только цифры, точку и запятую
        if (!allowedChar.test(key)) {
          e.preventDefault();
        }
      },
      validate: function validate() {
        if (this.control.required && String(this.value).trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.value).trim().match(RegExp(this.control.regexp));
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
    },
    created: function created() {
      var _this = this;
      // Проверка обязательных свойств control при создании компонента
      var requiredProps = ['value', 'label'];
      requiredProps.forEach(function (prop) {
        if (!(prop in _this.control)) {
          console.warn("ControlNum: Missing required control property \"".concat(prop, "\""));
        }
      });
    }
  };

  exports.ControlNum = ControlNum;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
