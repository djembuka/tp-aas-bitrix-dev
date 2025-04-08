import './application.css';

import { FilterComponent } from 'local.vue-components.filter-component';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {};
  },
  components: {
    FilterComponent,
    ErrorMessage,
  },
  // language=Vue

  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <div v-if="!error">
        <FilterComponent :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessid', 'signedParameters', 'userid']),
    ...mapState(filterStore, [
      'loadingFilter',
      'filters',
      'filterCols',
      'errorFilter',
    ]),
    error() {
      return this.errorFilter;
    },
  },
  methods: {
    ...mapActions(filterStore, [
      'hideErrorFilter',
      'runFilters',
      'changeControlValue',
      'runHintsAction',
      'setHints',
    ]),
    hideError() {
      this.hideErrorFilter();
    },
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
    hints({ type, control, action, value }) {
      switch (type) {
        case 'get':
          this.runHintsAction({
            control,
            action,
          });
          break;
        case 'set':
          this.setHints({
            control,
            value,
          });
          break;
      }
    },
  },
  mounted() {
    this.runFilters({
      mode: 'class',
      data: {
        signedParameters: this.signedParameters,
        sessid: this.sessid,
        userid: this.userid,
        profileid: 0,
      },
    });
  },
};
