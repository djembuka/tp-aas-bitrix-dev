import './application.css';

import { FilterComponent } from 'local.vue-components.filter-component';
import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { PaginationComponent } from 'local.vue-components.pagination-component';
import { MoreButton } from 'local.vue-components.more-button';
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
    MoreButton,
    ErrorMessage,
  },
  // language=Vue

  template: `
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <div v-if="!error">
        <FilterComponent :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />
      </div>
      <hr>
      <div v-if="!error">
        <StickyScroll>
          <TableComponent :sortable="true" :columnsNames="columnsNames" :items="items" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
        </StickyScroll> 
        <hr>
        <div class="vue-ft-table-bottom" v-if="paginationMode">
          <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
          <PaginationComponent :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
        </div>
        <div class="vue-ft-table-bottom" v-if="moreMode">
          <MoreButton
            :infiniteScroll="infiniteScrollOptions"
            :loading="loadingMore"
            :show="showMore"
            @clickMore="clickMore"
          />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['customData', 'signedParameters']),
    ...mapState(tableStore, [
      'loadingTable',
      'columnsNames',
      'items',
      'sort',
      'maxCountPerRequest',
      'errorTable',
      'contentLoadingMode',
      'startIndex',
      'loadingMore',
      'showMore'
    ]),
    ...mapState(filterStore, [
      'loadingFilter',
      'filters',
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
    paginationMode() {
      return this.contentLoadingMode === 'pagination'
    },
    moreMode() {
      return this.contentLoadingMode === 'loadMore' || this.contentLoadingMode === 'infiniteScroll'
    },
    infiniteScrollOptions() {
      if (this.contentLoadingMode === 'infiniteScroll') {
        return {
          offset: 200,
          direction: 'down',
          root: null,
          once: false
        }
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapActions(tableStore, [
      'showErrorTable',
      'hideErrorTable',

      'runColumnsNames',
      'runItems',
      'runDefaultSort',
      'runSetDefaultSort',

      'changeStartIndex',
      'changeItems',
      'changeLoadingItems',
      'changeLoadingMore',
      'changeShowMore',
      'setQueryParam'
    ]),
    ...mapActions(filterStore, [
      'hideErrorFilter',
      'runFilters',
      'changeControlValue',
      'runHintsAction',
      'setHints',
    ]),
    clickMore() {
      if (!this.sort.columnSort || !this.sort.sortType) {
        //если сработало пока не загрузились данные первой страницы
        return;
      }

      this.changeStartIndex(this.startIndex + this.maxCountPerRequest);
      this.changeLoadingMore(true);

      this.runItems({
        mode: 'class',
        data: {
          startIndex: this.startIndex,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
          ...this.customData
        },
        signedParameters: this.signedParameters
      })
      .then(
        (result) => {

          const a = {
            ...this.items
          };

          a.items = [
            ...a.items,
            ...result.data.items
          ]

          this.changeLoadingMore(false);
          this.changeItems(a);
          this.changeShowMore(Number(this.items.items.length) >= Number(this.items.resultCount) ? false : true);
          this.setQueryParam('ITEMS_NUM', this.items.items.length);
        },
        (error) => {
          this.changeLoadingMore(false);
          this.showErrorTable({ error, method: 'items' });
        }
      );
    },
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
            columnSort: column.id,
            sortType,
            ...this.customData
          },
          signedParameters: this.signedParameters
        },
        () => {
          this.changeLoadingItems(true);

          const maxCountPerRequest = this.startIndex + this.maxCountPerRequest;
          const startIndex = this.paginationMode ? this.items.startIndex || 0 : 0;

          this.runItems({
            mode: 'class',
            data: {
              startIndex,
              maxCountPerRequest,
              filters: this.filters,
              columnSort: column.id,
              sortType,
              ...this.customData
            },
            signedParameters: this.signedParameters
          })
          .then(
            (result) => {
              this.changeLoadingItems(false);
              this.changeItems(result.data);
              this.changeShowMore(Number(this.items.items.length) >= Number(this.items.resultCount) ? false : true);
            },
            (error) => {
              this.changeLoadingItems(false);
              this.showErrorTable({ error, method: 'items' });
            }
          );
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
        this.changeLoadingItems(true);

        this.changeStartIndex(this.paginationMode ? this.items.startIndex || 0 : 0);

        this.runItems({
          mode: 'class',
          data: {
            startIndex: this.startIndex,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
            ...this.customData
          },
          signedParameters: this.signedParameters
        })
        .then(
          (result) => {
            this.changeLoadingItems(false);
            this.changeItems(result.data);
            this.changeShowMore(Number(this.items.items.length) >= Number(this.items.resultCount) ? false : true);
            this.setQueryParam('ITEMS_NUM');
          },
          (error) => {
            this.changeLoadingItems(false);
            this.showErrorTable({ error, method: 'items' });
          }
        );
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
      this.changeStartIndex((count - 1) * this.maxCountPerRequest);

      this.changeLoadingItems(true);
      
      this.runItems({
        mode: 'class',
        data: {
          startIndex: this.startIndex,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
          ...this.customData
        },
        signedParameters: this.signedParameters
      })
      .then(
        (result) => {
          this.changeLoadingItems(false);
          this.changeItems(result.data);
          this.setQueryParam('ITEMS_NUM');
        },
        (error) => {
          this.changeLoadingItems(false);
          this.showErrorTable({ error, method: 'items' });
        }
      );
    },
    getMaxCountOnLoad() {
      const url = new URL(window.location.href);
      return url.searchParams.get("ITEMS_NUM") || this.maxCountPerRequest;
    }
  },
  mounted() {
    this.runColumnsNames({
      mode: 'class',
      data: {
        ...this.customData
      },
      signedParameters: this.signedParameters
    });

    this.runDefaultSort(
      {
        mode: 'class',
        data: {
        ...this.customData
        },
        signedParameters: this.signedParameters
      },
      () => {
        this.changeLoadingItems(true);

        this.changeStartIndex(this.paginationMode ? this.items.startIndex || 0 : 0);
        const maxCountPerRequest = this.getMaxCountOnLoad();

        this.runItems({
          mode: 'class',
          data: {
            startIndex: this.startIndex,
            maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
            ...this.customData
          },
          signedParameters: this.signedParameters
        })
        .then(
          (result) => {
            this.changeLoadingItems(false);
            this.changeItems(result.data);
            this.changeShowMore(Number(this.items.items.length) >= Number(this.items.resultCount) ? false : true);
            this.changeStartIndex(maxCountPerRequest - this.maxCountPerRequest);
          },
          (error) => {
            this.changeLoadingItems(false);
            this.showErrorTable({ error, method: 'items' });
          }
        );
      }
    );

    this.runFilters({
      mode: 'class',
      data: {
        ...this.customData
      },
      signedParameters: this.signedParameters
    });
  },
};
