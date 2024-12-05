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
  },
  // language=Vue
  template: `
    <div v-if="loading" class="vue-predefined-filters-ph">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else-if="predefined.fields.length">
      <h3 class="mt-0">{{ predefined.predefinedFiltersTitle }}</h3>
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
      </div>
    </div>
	`,
  emits: ['clickPredefined'],
  methods: {
    click(field) {
      this.$emit('clickPredefined', { field });
    },
  },
};
