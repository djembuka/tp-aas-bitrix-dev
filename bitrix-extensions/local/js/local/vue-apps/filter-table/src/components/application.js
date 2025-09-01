import './application.css';

import { FilterComponent } from 'local.vue-components.filter-component';
import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { PaginationComponent } from 'local.vue-components.pagination-component';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { tableStore } from '../stores/table';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {
      inputTimeoutId: null,
    };
  },
  components: {
    FilterComponent,
    TableComponent,
    StickyScroll,
    PaginationComponent,
    ErrorMessage,
  },
  // language=Vue

  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <div v-if="!error">
        <FilterComponent :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />
      </div>
      <hr>
      <div v-if="!error">
        <StickyScroll>
          <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="items" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
        </StickyScroll> 
        <hr>
        <div class="vue-ft-table-bottom">
          <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
          <PaginationComponent :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessid', 'signedParameters', 'customData']),
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
      'filterCols',
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
        this.sort.columnSort === column.id && this.sort.sortType === 'ASC'
          ? 'DESC'
          : 'ASC';

      this.runSetDefaultSort(
        {
          mode: 'class',
          data: {
            signedParameters: this.signedParameters,
            sessid: this.sessid,
            columnSort: column.id,
            sortType,
            ...this.customData
          },
        },
        () => {
          this.runItems({
            mode: 'class',
            data: {
              signedParameters: this.signedParameters,
              sessid: this.sessid,
              startIndex: this.items.startIndex || 0,
              maxCountPerRequest: this.maxCountPerRequest,
              filters: this.filters,
              columnSort: column.id,
              sortType,
              ...this.customData
            },
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

      clearTimeout(this.inputTimeoutId);

      this.inputTimeoutId = setTimeout(() => {
        this.runItems({
          mode: 'class',
          data: {
            signedParameters: this.signedParameters,
            sessid: this.sessid,
            startIndex: this.items.startIndex || 0,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
            ...this.customData
          },
        });
      }, 300);
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
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid,
          startIndex: (count - 1) * this.maxCountPerRequest,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
          ...this.customData
        },
      });
    },
  },
  mounted() {
    this.runColumnsNames({
      mode: 'class',
      data: {
        signedParameters: this.signedParameters,
        sessid: this.sessid,
        ...this.customData
      },
    });

    this.runDefaultSort(
      {
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid,
        ...this.customData
        },
      },
      () => {
        this.runItems({
          mode: 'class',
          data: {
            signedParameters: this.signedParameters,
            sessid: this.sessid,
            startIndex: this.items.startIndex || 0,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
            ...this.customData
          },
        });
      }
    );

    this.runFilters({
      mode: 'class',
      data: {
        signedParameters: this.signedParameters,
        sessid: this.sessid,
        ...this.customData
      },
    });
  },
};
