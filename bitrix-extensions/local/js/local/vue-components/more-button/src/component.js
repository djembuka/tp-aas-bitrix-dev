import './component.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const MoreButton = {
  data() {
    return {};
  },
  components: {
    ButtonComponent
  },
  props: {
    text: {
      type: String,
      default: 'Загрузить еще'
    },
    loading: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    infiniteScroll: {
      type: Object,
      default: null
      /*{
          offset: 200,
          direction: 'down',
          root: null,
          once: false
        }*/
    }
  },
  emits: ['clickMore'],
  // language=Vue
  template: `
    <ButtonComponent ref="moreButton" v-if="show" :text="text" :props="buttonProps" @clickButton="clickButton" />
	`,
  computed: {
    buttonProps() {
      const result = ['serve', 'medium', 'wide'];
      if (this.loading) {
        result.push('load-circle');
      }
      return result;
    }
  },
  methods: {
    clickButton() {
      this.$emit('clickMore');
    },
    observeProximity(target, callback, options = {}) {
      const {
        offset = 200,      // за сколько пикселей до элемента сработать (снизу)
        root = null,       // контейнер прокрутки; null = окно
        direction = 'down',// 'down' | 'up' | 'both'
        threshold = 0,     // доля пересечения (обычно 0)
        once = true        // вызвать один раз и отключиться
      } = options;
    
      if (!(target instanceof Element)) {
        throw new Error('observeProximity: target должен быть DOM-элементом');
      }
      if (typeof callback !== 'function') {
        throw new Error('observeProximity: callback должен быть функцией');
      }
    
      const top = (direction === 'up' || direction === 'both') ? offset : 0;
      const bottom = (direction === 'down' || direction === 'both') ? offset : 0;
    
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callback(entry);
            if (once) observer.unobserve(target);
          }
        }
      }, {
        root,
        rootMargin: `${top}px 0px ${bottom}px 0px`,
        threshold
      });
    
      observer.observe(target);
      return () => observer.unobserve(target);
    }
  },
  mounted() {
    if (this.infiniteScroll) {
      this.observeProximity(
        this.$refs.moreButton.$el,
        this.clickButton,
        this.infiniteScroll
      );
    }
  }
};
