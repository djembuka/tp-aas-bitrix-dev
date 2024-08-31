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
        arrowIcon: "\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"18\"\n          height=\"16\"\n          viewBox=\"0 0 18 16\"\n        >\n          <g transform=\"translate(17.589 16) rotate(180)\">\n            <ellipse\n              cx=\"9\"\n              cy=\"8\"\n              rx=\"9\"\n              ry=\"8\"\n              transform=\"translate(-0.411)\"\n              fill=\"#fff\"\n            />\n            <path\n              d=\"M3.822,0a.57.57,0,0,0-.386.147L.16,3.157a.473.473,0,0,0,0,.709.581.581,0,0,0,.772,0l2.89-2.655,2.89,2.655a.581.581,0,0,0,.772,0,.473.473,0,0,0,0-.709L4.208.147A.57.57,0,0,0,3.822,0Z\"\n              transform=\"translate(4.855 5.23)\"\n            />\n          </g>\n        </svg>"
      };
    },
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--select': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"false\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <div\n        class=\"twpx-form-control-select\"\n        :class=\"{ 'twpx-form-control-select--dropdown': opened }\"\n        :data-id=\"id\"\n        id=\"id\"\n      >\n        <input type=\"hidden\" :name=\"name\" :value=\"value\" />\n        <div class=\"twpx-form-control-select__arrow\" v-html=\"arrowIcon\"></div>\n        <div\n          class=\"twpx-form-control-select__content\"\n          @click.prevent=\"openDropdown\"\n        >\n          {{ text }}\n        </div>\n        <div class=\"twpx-form-control-select__dropdown\">\n          <div\n            class=\"twpx-form-control-select__dropdown-item\"\n            v-for=\"(option, i) in control.options\"\n            :key=\"option.code\"\n            @click.prevent=\"clickItem(i)\"\n          >\n            {{ option.label }}\n          </div>\n        </div>\n      </div>\n    </div>\n\t",
    props: ['control', 'name', 'customOnChange'],
    emits: ['input'],
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
      openDropdown: function openDropdown() {
        // if (window.twpxSelectManager) {
        //   Object.values(window.twpxSelectManager.selectObject).forEach(
        //     (select) => {
        //       select.hideDropdown();
        //     }
        //   );
        // }
        this.opened = true;
      },
      hideDropdown: function hideDropdown() {
        // if (this.selectDiv.classList.contains('twpx-select--dropdown')) {
        //   this.selectDiv.classList.remove('twpx-select--dropdown');
        //   this.selectDiv.classList.add('twpx-select--animate');
        //   setTimeout(() => {
        //     this.selectDiv.classList.remove('twpx-select--animate');
        //   }, 200);
        // }
        this.opened = false;
      },
      divElements: function divElements() {
        this.content = this.selectDiv.querySelector('.twpx-form-control-select__content');
        this.dropdown = this.selectDiv.querySelector('.twpx-form-control-select__dropdown');
        this.hidden = this.selectDiv.querySelector('input[type="hidden"]');
      },
      divEvents: function divEvents() {
        var _this2 = this;
        this.content.addEventListener('click', function () {
          if (_this2.selectDiv.classList.contains('twpx-form-control-select--dropdown')) {
            _this2.hideDropdown();
          } else {
            _this2.openDropdown();
          }
        });
        this.dropdown.addEventListener('click', function (e) {
          if (e.target.classList.contains('twpx-form-control-select__dropdown-item')) {
            _this2.clickItem(e.target);
          }
        });
      }
    },
    beforeMount: function beforeMount() {
      var _this3 = this;
      document.addEventListener('click', function (e) {
        if (e.target.className !== 'twpx-form-control-select__dropdown-item' && e.target.className !== 'twpx-form-control-select__content') {
          _this3.hideDropdown();
        }
      });
    }
  };

  exports.ControlSelectDropdown = ControlSelectDropdown;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
