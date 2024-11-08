/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlHidden = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--hidden': true,\n      }\"\n    >\n      <input\n        type=\"hidden\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n      />\n    </div>\n\t",
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
      }
    }
  };

  exports.ControlHidden = ControlHidden;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
