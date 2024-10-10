import './application.css';

import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { PaginationComponent } from 'local.vue-components.pagination-component';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { tableStore } from '../stores/table';

export const Application = {
  data() {
    return {};
  },
  components: {
    TableComponent,
    StickyScroll,
    PaginationComponent,
    ErrorMessage,
  },
  // language=Vue
  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <StickyScroll>
        <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="items" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
      </StickyScroll> 
      <hr>
      <div class="vue-ft-table-bottom">
        <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
        <PaginationComponent :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
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
    pagesNum() {
      return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
    },
    pageActive() {
      return this.items.startIndex / this.maxCountPerRequest + 1;
    },
    error() {
      return this.errorTable;
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
    hideError() {
      this.hideErrorTable();
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
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
          });
          this.runDefaultSort({
            signedParameters: this.signedParameters,
            sessionid: this.sessionid,
          });
        }
      );
    },
    clickPage({ count }) {
      this.runItems({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
        startIndex: (count - 1) * this.maxCountPerRequest,
        maxCountPerRequest: this.maxCountPerRequest,
        filters: [],
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
          filters: [],
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
        });
      }
    );
  },
};
