/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlSelectDropdown = {
    data: function data() {
      return {
        id: Math.floor(Math.random() * 100000),
        optionsArray: [],
        opened: false,
        animation: false,
        arrowIcon: "\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"18\"\n          height=\"16\"\n          viewBox=\"0 0 18 16\"\n        >\n          <g transform=\"translate(17.589 16) rotate(180)\">\n            <ellipse\n              cx=\"9\"\n              cy=\"8\"\n              rx=\"9\"\n              ry=\"8\"\n              transform=\"translate(-0.411)\"\n              fill=\"#fff\"\n            />\n            <path\n              d=\"M3.822,0a.57.57,0,0,0-.386.147L.16,3.157a.473.473,0,0,0,0,.709.581.581,0,0,0,.772,0l2.89-2.655,2.89,2.655a.581.581,0,0,0,.772,0,.473.473,0,0,0,0-.709L4.208.147A.57.57,0,0,0,3.822,0Z\"\n              transform=\"translate(4.855 5.23)\"\n              fill=\"#003B78\"\n            />\n          </g>\n        </svg>"
      };
    },
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--select': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n        'twpx-form-control--opened': opened,\n        'twpx-form-control--animation': animation,\n      }\"\n      @close=\"console.log('close')\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <div\n        class=\"twpx-form-control-select\"\n        :data-id=\"id\"\n        id=\"id\"\n      >\n        <input type=\"hidden\" :name=\"name\" :value=\"value\" />\n        <div class=\"twpx-form-control-select__arrow\" v-html=\"arrowIcon\"></div>\n        <div\n          class=\"twpx-form-control-select__content\"\n          @click.prevent=\"openHideDropdown\"\n        >\n          {{ text }}\n        </div>\n        <div class=\"twpx-form-control-select__dropdown\">\n          <div\n            class=\"twpx-form-control-select__dropdown-item\"\n            :class=\"{'twpx-form-control-select__dropdown-item': true, 'twpx-form-control-select__dropdown-item--current': option.code === control.value}\"\n            v-for=\"(option, i) in control.options\"\n            :key=\"option.code\"\n            @click.prevent=\"clickItem(i)\"\n          >\n            {{ option.label }}\n          </div>\n        </div>\n      </div>\n    </div>\n\t",
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
