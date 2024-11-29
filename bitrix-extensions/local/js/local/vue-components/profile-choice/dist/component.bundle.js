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
      }
    },
    // language=Vue
    template: "\n    <div class=\"b-profile-choice\" v-if=\"profiles.length\">\n      <a v-for=\"profile in profiles\" :key=\"profile.id\" class=\"b-profile-choice__item\" :class=\"{active: profile.active}\" :href=\"profile.link\">\n        <i>{{ profile.newAppealsCount }}</i>\n        <span>{{ profile.name }}</span>\n      </a>\n    </div>\n\t",
    emits: [],
    methods: {}
  };

  exports.ProfileChoice = ProfileChoice;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
