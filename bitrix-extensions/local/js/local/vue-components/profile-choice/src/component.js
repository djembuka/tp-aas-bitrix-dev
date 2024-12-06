import './component.css';
import './placeholder.css';
import './scroll-menu.css';

export const ProfileChoice = {
  data() {
    return {
      initialized: false,
      itemMarginRight: 20,
      margin: 0,
      arrows: {
        right: false,
        left: true,
      },
    };
  },
  props: {
    profiles: {
      type: Object,
      default: [],
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  // language=Vue
  template: `
    <div v-if="loading" class="vue-profile-choice-ph">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="vue-profile-choice" v-else-if="profiles.length">

      <div class="twpx-scroll-menu" :class="{'twpx-scroll-menu--no-right': !arrows.right, 'twpx-scroll-menu--no-left': !arrows.left}" @mouseenter="hover" ref="sm">
        <div class="twpx-scroll-menu-overflow">
          <div class="twpx-scroll-menu-wrapper" :style="'margin-left: ' + margin + 'px;'" ref="wrapper">

            <div v-for="profile in profiles" :key="profile.id" class="vue-profile-choice__item" :class="{active: profile.default}" :data-id="profile.id" @click.prevent="click(profile.id)">
              <i v-if="profile.newAppealsCount">{{ profile.newAppealsCount }}</i>
              <span>{{ profile.name }}</span>
            </div>

          </div>
        </div>
        <div class="twpx-scroll-menu-arrows">
          <div class="twpx-scroll-menu-arrow-right" @click="moveTo(-1 * $refs.sm.clientWidth)"></div>
          <div class="twpx-scroll-menu-arrow-left" @click="moveTo($refs.sm.clientWidth)"></div>
        </div>
      </div>

    </div>
	`,
  emits: ['clickProfile'],
  computed: {
    profiles() {
      return this.$store.state.profiles;
    },
  },
  methods: {
    click(id) {
      this.$emit('clickProfile', { id });
    },
    hover() {
      if (this.calculateWidth() <= this.$refs.sm.clientWidth) {
        this.arrows.right = false;
        this.arrows.left = false;
      } else {
        this.moveTo(0);
      }
    },
    moveTo(dist) {
      this.arrows.right = true;
      this.arrows.left = true;
      let left = this.margin || 0;
      left = left + dist;

      let width = this.calculateWidth();

      if (left >= 0) {
        left = 0;
        this.arrows.right = false;
      } else if (left <= -1 * (width - this.$refs.sm.clientWidth)) {
        left = -1 * (width - this.$refs.sm.clientWidth);
        this.arrows.left = false;
      }

      this.margin = left;
    },
    calculateWidth() {
      let result = 0;
      this.$refs.wrapper.childNodes.forEach((item) => {
        if (item.classList) {
          result += item.clientWidth;
          result += this.itemMarginRight;
        }
      });

      result -= this.itemMarginRight;

      return result;
    },
  },
  mounted() {
    this.initialized = true;
  },
};
