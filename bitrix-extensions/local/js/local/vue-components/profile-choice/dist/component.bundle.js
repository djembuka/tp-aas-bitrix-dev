/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ProfileChoice = {
    data: function data() {
      return {
        initialized: false,
        itemMarginRight: 20,
        margin: 0,
        arrows: {
          right: false,
          left: true
        }
      };
    },
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
    template: "\n    <div v-if=\"loading\" class=\"vue-profile-choice-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div class=\"vue-profile-choice\" v-else-if=\"profiles.length\">\n\n      <div class=\"twpx-scroll-menu\" :class=\"{'twpx-scroll-menu--no-right': !arrows.right, 'twpx-scroll-menu--no-left': !arrows.left}\" @mouseenter=\"hover\" ref=\"sm\">\n        <div class=\"twpx-scroll-menu-overflow\">\n          <div class=\"twpx-scroll-menu-wrapper\" :style=\"'margin-left: ' + margin + 'px;'\" ref=\"wrapper\">\n\n            <div v-for=\"profile in profiles\" :key=\"profile.id\" class=\"vue-profile-choice__item\" :class=\"{active: profile.default}\" :data-id=\"profile.id\" @click.prevent=\"click(profile.id)\">\n              <i v-if=\"profile.newAppealsCount\">{{ profile.newAppealsCount }}</i>\n              <span>{{ profile.name }}</span>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"twpx-scroll-menu-arrows\">\n          <div class=\"twpx-scroll-menu-arrow-right\" @click=\"moveTo(-1 * $refs.sm.clientWidth)\"></div>\n          <div class=\"twpx-scroll-menu-arrow-left\" @click=\"moveTo($refs.sm.clientWidth)\"></div>\n        </div>\n      </div>\n\n    </div>\n\t",
    emits: ['clickProfile'],
    computed: {
      profiles: function profiles() {
        return this.$store.state.profiles;
      }
    },
    methods: {
      click: function click(id) {
        this.$emit('clickProfile', {
          id: id
        });
      },
      hover: function hover() {
        if (this.calculateWidth() <= this.$refs.sm.clientWidth) {
          this.arrows.right = false;
          this.arrows.left = false;
        } else {
          this.moveTo(0);
        }
      },
      moveTo: function moveTo(dist) {
        this.arrows.right = true;
        this.arrows.left = true;
        var left = this.margin || 0;
        left = left + dist;
        var width = this.calculateWidth();
        if (left >= 0) {
          left = 0;
          this.arrows.right = false;
        } else if (left <= -1 * (width - this.$refs.sm.clientWidth)) {
          left = -1 * (width - this.$refs.sm.clientWidth);
          this.arrows.left = false;
        }
        this.margin = left;
      },
      calculateWidth: function calculateWidth() {
        var _this = this;
        var result = 0;
        this.$refs.wrapper.childNodes.forEach(function (item) {
          if (item.classList) {
            result += item.clientWidth;
            result += _this.itemMarginRight;
          }
        });
        result -= this.itemMarginRight;
        return result;
      }
    },
    mounted: function mounted() {
      this.initialized = true;
    }
  };

  exports.ProfileChoice = ProfileChoice;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
