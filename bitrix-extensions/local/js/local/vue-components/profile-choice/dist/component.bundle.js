/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ProfileChoice = {
    data: function data() {},
    props: {
      profiles: {
        type: Object,
        "default": []
      },
      loading: {
        type: Boolean,
        "default": true
      }
    },
    // language=Vue
    template: "\n    <div v-if=\"loading\" class=\"vue-profile-choice-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div class=\"vue-profile-choice\" v-else-if=\"profiles.length\">\n      <a v-for=\"profile in profiles\" :key=\"profile.id\" class=\"vue-profile-choice__item\" :class=\"{active: profile.default}\" :data-id=\"profile.id\" @click.prevent=\"click(profile.id)\">\n        <i v-if=\"profile.newAppealsCount\">{{ profile.newAppealsCount }}</i>\n        <span>{{ profile.name }}</span>\n      </a>\n    </div>\n\t",
    emits: ['clickProfile'],
    methods: {
      click: function click(id) {
        this.$emit('clickProfile', {
          id: id
        });
      }
    }
  };

  exports.ProfileChoice = ProfileChoice;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
