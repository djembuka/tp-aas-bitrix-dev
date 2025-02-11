import './component.css';

export const StickyScroll = {
  data() {
    return {
      visible: true,
      clickThumbStep: 100,
      hoverSpaceStep: 10,
      hoverSpaceInterval: 30,
      hoverSpaceIntervalId: undefined,
      thumbClickedFlag: false,
      thumbClickedCoords: 0,
      resizeTimeoutId: undefined,
    };
  },
  props: ['reInitWatcher'],
  template: `
    <div class="twpx-sticky-scroll">
      <div class="twpx-sticky-scroll-space-right" ref="spaceRight" @mouseover="spaceAndArrowMouseover('right')" @mouseout="spaceAndArrowMouseout" v-show="visible"></div>
      <div class="twpx-sticky-scroll-space-left" ref="spaceLeft" @mouseover="spaceAndArrowMouseover('left')" @mouseout="spaceAndArrowMouseout" v-show="visible"></div>

      <div class="twpx-sticky-scroll-arrows" v-show="visible">
        <div class="twpx-sticky-scroll-arrow-right" ref="arrowRight" @mouseover="spaceAndArrowMouseover('right')" @mouseout="spaceAndArrowMouseout"></div>
        <div class="twpx-sticky-scroll-arrow-left" ref="arrowLeft" @mouseover="spaceAndArrowMouseover('left')" @mouseout="spaceAndArrowMouseout"></div>
      </div>

      <div class="twpx-sticky-scroll-content-wrapper" ref="contentWrapper">
        <div ref="content">
          <slot></slot>
        </div>
      </div>

      <div class="twpx-sticky-scroll-scrollbar" ref="scrollbar" @click="scrollbarClick($event)" v-show="visible">
        <div class="twpx-sticky-scroll-scrollbar-thumb" ref="thumb" @mousedown="thumbMousedown($event)" @click="thumbClick($event)"></div>
      </div>
    </div>
  `,
  watch: {
    reInitWatcher(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setContentWidth();
      }
    },
  },
  methods: {
    init() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        this.setThumbWidth();
      }
    },
    setThumbWidth() {
      const ratio =
        this.$refs.contentWrapper.clientWidth / this.$refs.content.clientWidth;

      this.visible = ratio < 1;

      if (this.visible) {
        setTimeout(() => {
          this.$refs.thumb.style.width = `${
            this.$refs.scrollbar.clientWidth * ratio
          }px`;

          this.setDelta();
        }, 0);
      }
    },
    setDelta() {
      this.scrollbarDelta =
        this.$refs.scrollbar.clientWidth - this.$refs.thumb.clientWidth;
      this.contentDelta =
        this.$refs.content.clientWidth - this.$refs.contentWrapper.clientWidth;
    },
    thumbMousedown(e) {
      this.thumbClickedFlag = true;
      this.thumbClickedCoords =
        e.clientX - this.$refs.thumb.getBoundingClientRect().x;
    },
    thumbClick(e) {
      e.stopPropagation();
    },
    scrollbarClick(e) {
      e.preventDefault();

      const scrollbarX = this.$refs.scrollbar.getBoundingClientRect().x;
      const thumbX = this.$refs.thumb.getBoundingClientRect().x;
      let step = this.clickThumbStep;

      if (e.clientX - thumbX < 0) {
        step = -1 * this.clickThumbStep;
      }

      let left = thumbX - scrollbarX + step;
      this.moveThumbAndContent(left);
    },
    spaceAndArrowMouseover(type) {
      let step = this.hoverSpaceStep;
      if (type === 'left') {
        step = -1 * this.hoverSpaceStep;
      }
      this.hoverSpaceIntervalId = setInterval(() => {
        let left = this.$refs.contentWrapper.scrollLeft + step;
        this.moveContentAndThumb(left);
      }, this.hoverSpaceInterval);
    },
    spaceAndArrowMouseout() {
      clearInterval(this.hoverSpaceIntervalId);
    },
    moveThumbAndContent(left) {
      if (left > this.scrollbarDelta) {
        left = this.scrollbarDelta;
      } else if (left < 0) {
        left = 0;
      }

      this.$refs.thumb.style.left = `${left}px`;

      //move content
      let contentDelta;

      if (left === this.scrollbarDelta) {
        contentDelta = this.contentDelta;
      } else if (left === 0) {
        contentDelta = 0;
        left = 0;
      } else {
        contentDelta = (left / this.scrollbarDelta) * this.contentDelta;
      }

      this.$refs.contentWrapper.scrollTo(contentDelta, 0);
    },
    moveContentAndThumb(left) {
      if (left > this.contentDelta) {
        left = this.contentDelta;
        clearInterval(this.hoverSpaceIntervalId);
      } else if (left < 0) {
        left = 0;
        clearInterval(this.hoverSpaceIntervalId);
      }

      this.$refs.contentWrapper.scrollTo(left, 0);

      //move content
      let scrollDelta;

      if (left === this.contentDelta) {
        scrollDelta = this.scrollbarDelta;
      } else if (left === 0) {
        scrollDelta = 0;
        left = 0;
      } else {
        scrollDelta = (left / this.contentDelta) * this.scrollbarDelta;
      }

      this.$refs.thumb.style.left = `${scrollDelta}px`;
    },
    setContentWidth() {
      this.$refs.content.style.width = 'auto';

      if (this.resizeTimeoutId) {
        clearInterval(this.resizeTimeoutId);
      }

      this.resizeTimeoutId = setTimeout(() => {
        if (
          this.$refs.content &&
          this.$refs.content.querySelector('table.table')
        ) {
          this.$refs.content.style.width = `${
            this.$refs.content.querySelector('table.table').clientWidth
          }px`;
          setTimeout(() => {
            this.init();
          }, 0);
        }
      }, 200);
    },
    async initContentWidth() {
      do {
        if (
          !this.$refs.content ||
          !this.$refs.content.querySelector('table.table')
        ) {
          await new Promise((r) => setTimeout(r, 500));
        } else {
          this.setContentWidth();
          break;
        }
      } while (true);
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setContentWidth();
    });

    this.initContentWidth();

    //document mouseup
    document.addEventListener('mouseup', () => {
      if (this.thumbClickedFlag) {
        this.thumbClickedFlag = false;
      }
    });

    //document mousemove
    document.addEventListener('mousemove', (e) => {
      if (this.thumbClickedFlag) {
        e.preventDefault();
        let left =
          e.clientX -
          this.$refs.scrollbar.getBoundingClientRect().x -
          this.thumbClickedCoords;

        this.moveThumbAndContent(left);
      }
    });
  },
};
