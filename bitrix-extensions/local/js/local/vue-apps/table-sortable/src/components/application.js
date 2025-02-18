import './application.css';

import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
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
    ErrorMessage,
  },
  // language=Vue

  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <StickyScroll>
        <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="items" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
      </StickyScroll> 
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessid', 'signedParameters']),
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
              filters: [],
              columnSort: this.sort.columnSort,
              sortType: this.sort.sortType,
            },
          });
          this.runDefaultSort({
            mode: 'class',
            data: {
              signedParameters: this.signedParameters,
              sessid: this.sessid,
            },
          });
        }
      );
    },
    clickPage({ count }) {
      this.runItems({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid,
          startIndex: (count - 1) * this.maxCountPerRequest,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: [],
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
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
      },
    });

    this.runDefaultSort(
      {
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid,
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
            filters: [],
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
          },
        });
      }
    );
  },
};
