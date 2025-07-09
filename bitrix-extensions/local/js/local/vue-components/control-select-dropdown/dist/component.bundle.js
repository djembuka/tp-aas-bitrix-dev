/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconDropdown = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path d=\"M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z\" fill=\"white\"/>\n      <path class=\"twpx-icon-dropdown__arrow\" d=\"M8.02698 10.77C8.09292 10.7702 8.15824 10.7572 8.21916 10.732C8.28009 10.7068 8.33542 10.6697 8.38198 10.623L11.392 7.61304C11.486 7.51902 11.5388 7.3915 11.5388 7.25854C11.5388 7.12558 11.486 6.99806 11.392 6.90404C11.298 6.81002 11.1704 6.7572 11.0375 6.7572C10.9045 6.7572 10.777 6.81002 10.683 6.90404L8.02798 9.55904L5.37298 6.90404C5.27896 6.81002 5.15144 6.7572 5.01848 6.7572C4.88552 6.7572 4.758 6.81002 4.66398 6.90404C4.56996 6.99806 4.51714 7.12558 4.51714 7.25854C4.51714 7.3915 4.56996 7.51902 4.66398 7.61304L7.67398 10.623C7.76752 10.7169 7.89448 10.7697 8.02698 10.77Z\" fill=\"#003B78\"/>\n    </svg>\n  "
  };

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlSelectDropdown = {
    data: function data() {
      return {
        controlName: this.name || this.control.name || null,
        id: Math.floor(Math.random() * 100000),
        optionsArray: [],
        opened: false,
        animation: false
      };
    },
    components: {
      IconDropdown: IconDropdown,
      IconLock: IconLock
    },
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--select': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--opened': opened,\n        'twpx-form-control--animation': animation,\n      }\"\n      @close=\"console.log('close')\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <div\n        class=\"twpx-form-control-select\"\n        :data-id=\"id\"\n        id=\"id\"\n      >\n        <input type=\"hidden\" :name=\"controlName\" :value=\"value\" />\n        <IconDropdown class=\"twpx-form-control-select__arrow\" />\n        <div\n          class=\"twpx-form-control-select__content\"\n          @click.prevent=\"openHideDropdown\"\n        >\n          {{ text }}\n        </div>\n        <div class=\"twpx-form-control-select__dropdown\">\n          <div\n            class=\"twpx-form-control-select__dropdown-item\"\n            :class=\"{'twpx-form-control-select__dropdown-item': true, 'twpx-form-control-select__dropdown-item--current': option.code === control.value}\"\n            v-for=\"(option, i) in control.options\"\n            :key=\"option.code\"\n            @click.prevent=\"clickItem(i)\"\n          >\n            {{ option.label }}\n          </div>\n        </div>\n      </div>\n    </div>\n\t",
    props: ['control', 'name', 'customOnChange'],
    emits: ['input', 'focus', 'blur'],
    computed: {
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
      text: function text() {
        var _this = this;
        var option = this.control.options.find(function (c) {
          return c.code === _this.value;
        });
        if (option) {
          return option.label;
        }
        return '';
      },
      active: function active() {
        return !!this.text.trim();
      },
      invalid: function invalid() {
        return false; //!this.validate();
      },
      disabled: function disabled() {
        return this.control.disabled;
      }
    },
    methods: {
      createOptionsArray: function createOptionsArray() {
        this.optionsArray = this.control.options;
      },
      clickItem: function clickItem(index) {
        var option = this.control.options[index];
        this.value = option.code;
        this.hideDropdown();
        //onchange
        if (typeof this.customOnChange === 'function') {
          this.customOnChange();
        }
      },
      openHideDropdown: function openHideDropdown() {
        this.opened ? this.hideDropdown() : this.openDropdown();
      },
      openDropdown: function openDropdown() {
        // if (window.twpxSelectManager) {
        //   Object.values(window.twpxSelectManager.selectObject).forEach(
        //     (select) => {
        //       select.hideDropdown();
        //     }
        //   );
        // }

        document.querySelectorAll('.twpx-form-control--select.twpx-form-control--opened').forEach(function (select) {
          var close = new Event('close');
          select.dispatchEvent(close);
        });
        this.opened = true;
        this.$emit('focus');
      },
      hideDropdown: function hideDropdown() {
        var _this2 = this;
        if (this.opened) {
          this.animation = true;
          setTimeout(function () {
            _this2.animation = false;
          }, 300);
        }
        this.opened = false;
        this.$emit('blur');
      },
      divElements: function divElements() {
        this.content = this.selectDiv.querySelector('.twpx-form-control-select__content');
        this.dropdown = this.selectDiv.querySelector('.twpx-form-control-select__dropdown');
        this.hidden = this.selectDiv.querySelector('input[type="hidden"]');
      },
      divEvents: function divEvents() {
        var _this3 = this;
        this.content.addEventListener('click', function () {
          if (_this3.selectDiv.classList.contains('twpx-form-control-select--dropdown')) {
            _this3.hideDropdown();
          } else {
            _this3.openDropdown();
          }
        });
        this.dropdown.addEventListener('click', function (e) {
          if (e.target.classList.contains('twpx-form-control-select__dropdown-item')) {
            _this3.clickItem(e.target);
          }
        });
      }
    },
    beforeMount: function beforeMount() {
      var _this4 = this;
      document.addEventListener('click', function (e) {
        if (e.target.className !== 'twpx-form-control-select__dropdown-item' && e.target.className !== 'twpx-form-control-select__content') {
          _this4.hideDropdown();
        }
      });
    }
  };

  exports.ControlSelectDropdown = ControlSelectDropdown;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
