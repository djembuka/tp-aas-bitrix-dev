import './application.css';

import { FilterComponent } from 'local.vue-components.filter';
import { TableComponent } from 'local.vue-components.table';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { ThePagination } from 'local.vue-components.pagination';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { tableStore } from '../stores/table';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {};
  },
  components: {
    FilterComponent,
    TableComponent,
    StickyScroll,
    ThePagination,
    ErrorMessage,
  },
  // language=Vue

  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <div v-else>
        <FilterComponent :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />
      </div>
      <hr>
      <div v-else>
        <StickyScroll>
          <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="items" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
        </StickyScroll> 
        <hr>
        <div class="vue-ft-table-bottom">
          <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
          <ThePagination :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'signedParameters']),
    ...mapState(tableStore, [
      'loadingTable',
      'columnsNames',
      'items',
      'sort',
      'tableCols',
      'maxCountPerRequest',
      'errorTable',
    ]),
    ...mapState(filterStore, [
      'loadingFilter',
      'filters',
      'FilterCols',
      'errorFilter',
    ]),
    pagesNum() {
      return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
    },
    pageActive() {
      return this.items.startIndex / this.maxCountPerRequest + 1;
    },
    error() {
      return this.errorTable || this.errorFilter;
    },
  },
  methods: {
    ...mapActions(tableStore, [
      'hideErrorTable',
      'runColumnsNames',
      'runItems',
      'runDefaultSort',
      'runSetDefaultSort',
    ]),
    ...mapActions(filterStore, [
      'hideErrorFilter',
      'runFilters',
      'changeControlValue',
      'runHintsAction',
      'setHints',
    ]),
    hideError() {
      this.hideErrorTable();
      this.hideErrorFilter();
    },
    clickTh({ column }) {
      const sortType =
        this.sort.columnSort === column.id && this.sort.sortType === 0 ? 1 : 0;

      this.runSetDefaultSort(
        {
          signedParameters: this.signedParameters,
          sessionid: this.sessionid,
          columnSort: column.id,
          sortType,
        },
        () => {
          this.runItems({
            signedParameters: this.signedParameters,
            sessionid: this.sessionid,
            startIndex: this.items.startIndex || 0,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: [],
            columnSort: 1,
            sortType: 'asc',
          });
          this.runDefaultSort({
            signedParameters: this.signedParameters,
            sessionid: this.sessionid,
          });
        }
      );
    },
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });

      this.runItems({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
        startIndex: this.items.startIndex || 0,
        maxCountPerRequest: this.maxCountPerRequest,
        filters: this.filters,
        columnSort: this.sort.columnSort,
        sortType: this.sort.sortType,
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
    clickPage({ count }) {
      this.runItems({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
        startIndex: (count - 1) * this.maxCountPerRequest,
        maxCountPerRequest: this.maxCountPerRequest,
        filters: this.filters,
        columnSort: this.sort.columnSort,
        sortType: this.sort.sortType,
      });
    },
  },
  mounted() {
    this.runColumnsNames({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });

    this.runDefaultSort(
      {
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
      },
      () => {
        this.runItems({
          signedParameters: this.signedParameters,
          sessionid: this.sessionid,
          startIndex: this.items.startIndex || 0,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
        });
      }
    );

    this.runFilters({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });
  },
};
