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
        <TableComponent :cols="tableCols" :columnsNames="columnsNames" :items="items" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
      </StickyScroll> 
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'signedParameters']),
    ...mapState(tableStore, [
      'loadingTable',
      'columnsNames',
      'items',
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
    clickPage({ count }) {
      this.runItems({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
        startIndex: (count - 1) * this.maxCountPerRequest,
        maxCountPerRequest: this.maxCountPerRequest,
      });
    },
  },
  mounted() {
    this.runColumnsNames({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
    });

    this.runItems({
      signedParameters: this.signedParameters,
      sessionid: this.sessionid,
      startIndex: this.items.startIndex || 0,
      maxCountPerRequest: this.maxCountPerRequest,
    });
  },
};
