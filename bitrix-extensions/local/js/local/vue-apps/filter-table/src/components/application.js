import './application.css';

import { FilterComponent } from 'local.vue-components.filter';
import { TableComponent } from 'local.vue-components.table';
import { TablePagination } from 'local.vue-components.pagination';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { tableStore } from '../stores/table';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {
      error: 'error',
    };
  },
  components: {
    FilterComponent,
    TableComponent,
    TablePagination,
    LoaderCircle,
    ErrorMessage,
  },
  // language=Vue
  template: `
    <div>
      <ErrorMessage v-if="error" :error="error" @hideError="hideError" />
      <LoaderCircle v-if="loadingFilter" />
      <div v-else>
        <FilterComponent :filters="filters" @input="input" />
      </div>
      <hr>
      <LoaderCircle v-if="loadingTable"/>
      <div v-else>
        <TableComponent :cols="cols" :columnsNames="columnsNames" :items="items" :sort="sort" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
        <hr>
        <div class="vue-ft-table-bottom">
          <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
          <TablePagination :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'userid']),
    ...mapState(tableStore, [
      'loadingTable',
      'columnsNames',
      'items',
      'sort',
      'cols',
      'maxCountPerRequest',
    ]),
    ...mapState(filterStore, ['filters', 'loadingFilter']),
    pagesNum() {
      return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
    },
    pageActive() {
      return this.items.startIndex / this.maxCountPerRequest + 1;
    },
  },
  methods: {
    ...mapActions(tableStore, [
      'runColumnsNames',
      'runItems',
      'runDefaultSort',
      'runSetDefaultSort',
    ]),
    ...mapActions(filterStore, ['runFilters', 'changeControlValue']),
    hideError() {
      this.error = '';
    },
    clickTh({ column }) {
      const sortType =
        this.sort.columnSort === column.id && this.sort.sortType === 0 ? 1 : 0;

      this.runSetDefaultSort(
        {
          userid: this.userid,
          sessionid: this.sessionid,
          columnSort: column.id,
          sortType,
        },
        () => {
          this.runItems({
            userid: this.userid,
            sessionid: this.sessionid,
            startIndex: this.items.startIndex || 0,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: [],
            columnSort: 1,
            sortType: 'asc',
          });
          this.runDefaultSort({
            userid: this.userid,
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
        userid: this.userid,
        sessionid: this.sessionid,
        startIndex: this.items.startIndex || 0,
        maxCountPerRequest: this.maxCountPerRequest,
        filters: this.filters,
        columnSort: this.sort.columnSort,
        sortType: this.sort.sortType,
      });
    },
    clickPage({ count }) {
      this.runItems({
        userid: this.userid,
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
      userid: this.userid,
      sessionid: this.sessionid,
    });

    this.runDefaultSort(
      {
        userid: this.userid,
        sessionid: this.sessionid,
      },
      () => {
        this.runItems({
          userid: this.userid,
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
      userid: this.userid,
      sessionid: this.sessionid,
    });
  },
};
