import './component.css';
import './placeholder.css';

export const PredefinedFilters = {
  data() {},
  props: {
    predefined: {
      type: Object,
      default: {
        fields: [],
      },
    },
    loading: {
      type: Boolean,
      default: true,
    },
    selected: {
      type: [Number, Boolean],
      default: false,
    },
    loadingSelected: {
      type: Boolean,
      default: true,
    },
  },
  // language=Vue
  template: `
    <div v-if="loading" class="vue-predefined-filters-ph">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else-if="(predefined && predefined.fields && predefined.fields.length) || selected !== false">
      <h3 class="mt-0" v-if="predefined.predefinedFiltersTitle">{{ predefined.predefinedFiltersTitle }}</h3>
      <div class="vue-predefined-filters">
      
        <div class="vue-predefined-filters__item"
          v-for="field in predefined.fields" :key="field.id"
          :class="{'vue-predefined-filters__item--inactive': !field.selectable, 'vue-predefined-filters__item--active': field.active}"
          @click="if(field.selectable) {click(field);}">
          <div class="vue-predefined-filters__item__data">
            <i>{{ field.name }}</i>
            <b>{{ field.value }}</b>
          </div>
        </div>
        
        <div class="vue-predefined-filters__item vue-predefined-filters__item--selected" :class="{'vue-predefined-filters__item--selected-loading' :loadingSelected}"
          v-if="selected !== false"
          @click="clickSelected">
          <div class="vue-predefined-filters__item__data">
            <i>Выбрано</i>
            <b>{{ typeof selected === 'number' ? selected : '&nbsp;' }}</b>
          </div>
          <div class="vue-predefined-filters__item__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="23.177" height="32" viewBox="0 0 23.177 32">
              <g>
                <path d="M28.171,8.7V29.869a2.062,2.062,0,0,1-2.062,2.063H7.056a2.062,2.062,0,0,1-2.062-2.063V1.994A2.062,2.062,0,0,1,7.056-.068H19.407Z" transform="translate(-4.994 0.068)" fill="#288c0a"/>
              </g>
              <path d="M20.6,8.506l7.569,3.118V8.7L23.88,7.429Z" transform="translate(-4.994 0.068)" fill="#0e5429"/>
              <path d="M28.171,8.7h-6.7a2.062,2.062,0,0,1-2.062-2.063v-6.7Z" transform="translate(-4.994 0.068)" fill="#cef4ae"/>
              <g transform="translate(5.029 11.693)">
                <rect width="13.119" height="1.458" rx="0.729" transform="translate(0 2.577)" fill="#fff"/>
                <rect width="7.853" height="1.458" rx="0.729" transform="translate(0 9.089)" fill="#fff"/>
                <rect width="13.119" height="1.458" rx="0.729" transform="translate(2.511 13.119) rotate(-90)" fill="#fff"/>
                <rect width="7.288" height="1.458" rx="0.729" transform="translate(9.149 7.29) rotate(-90)" fill="#fff"/>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </div>
	`,
  emits: ['clickPredefined', 'clickSelected'],
  methods: {
    click(field) {
      this.$emit('clickPredefined', { field });
    },
    clickSelected(e) {
      if (typeof this.selected === 'number' && this.selected > 0) {
        this.$emit('clickSelected');
      } else {
        e.preventDefault();
      }
    },
  },
};
