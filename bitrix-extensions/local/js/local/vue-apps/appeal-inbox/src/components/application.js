import './filter-table.css';
import './application.css';

import { ProfileChoice } from 'local.vue-components.profile-choice';
import { PredefinedFilters } from 'local.vue-components.predefined-filters';
import { FilterComponent } from 'local.vue-components.filter-component';
import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { PaginationComponent } from 'local.vue-components.pagination-component';
import { ErrorMessage } from 'local.vue-components.error-message';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { profileStore } from '../stores/profile';
import { predefinedStore } from '../stores/predefined';
import { tableStore } from '../stores/table';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {};
  },
  components: {
    ProfileChoice,
    PredefinedFilters,
    FilterComponent,
    TableComponent,
    StickyScroll,
    PaginationComponent,
    ErrorMessage,
  },
  // language=Vue

  template: `
    <ProfileChoice :profiles="profiles" :loading="loadingProfiles" @clickProfile="clickProfile" />
    <hr class="hr--sl">
    <PredefinedFilters :predefined="predefined" :loading="loadingPredefined" @clickPredefined="clickPredefined" />
    <hr class="hr--lg">
    <div>
      <ErrorMessage :error="error" @hideError="hideError" />
      <div v-if="filters">
        <FilterComponent :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />
      </div>
      <hr>
      <div v-if="appeals">
        <StickyScroll>
          <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="appeals" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />
        </StickyScroll> 
        <hr>
        <div class="vue-ft-table-bottom">
          <div class="vue-ft-table-all" v-if="appeals.resultCount">Всего: {{ appeals.resultCount }}</div>
          <PaginationComponent :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['userid', 'sessid', 'signedParameters']),
    ...mapState(profileStore, [
      'profiles',
      'defaultProfile',
      'profilesCounter',
      'loadingProfiles',
    ]),
    ...mapState(predefinedStore, [
      'predefined',
      'predefinedActive',
      'loadingPredefined',
    ]),
    ...mapState(tableStore, [
      'loadingTable',
      'columnsNames',
      'appeals',
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
      return Math.ceil(this.appeals.resultCount / this.maxCountPerRequest);
    },
    pageActive() {
      return this.appeals.startIndex / this.maxCountPerRequest + 1;
    },
    error() {
      return this.errorTable || this.errorFilter;
    },
  },
  methods: {
    ...mapActions(profileStore, [
      'runProfiles',
      'runSetDefaultProfile',
      'setDefaultProfile',
      'increaseProfilesCounter',
    ]),
    ...mapActions(predefinedStore, [
      'runPredefinedFilters',
      'setPredefinedActive',
    ]),
    clickProfile({ id }) {
      this.setDefaultProfile({ id });
      this.increaseProfilesCounter();

      this.runSetDefaultProfile(
        {
          mode: 'class',
          data: {
            userid: this.userid,
            sessid: this.sessid,
            profileid: id,
          },
          signedParameters: this.signedParameters,
        },
        null,
        this.profilesCounter
      );
    },
    clickPredefined({ field }) {
      this.setPredefinedActive({ field });
      // this.increasePredefinedCounter();

      if (!this.defaultProfile) return;

      this.runAppeals(
        {
          mode: 'class',
          data: {
            userid: this.userid,
            sessid: this.sessid,
            profileid: this.defaultProfile.id,
            startIndex: 0,
            maxCountPerRequest: 50,
            predefinedFilter: this.predefinedActive.id,
            filters: [
              {
                id: 'U_NAME',
                value: 'Лёвина',
              },
            ],
            columnSort: '',
            sortType: '',
          },
          signedParameters: this.signedParameters,
        },
        null,
        this.profilesCounter
      );
    },
    ...mapActions(tableStore, [
      'hideErrorTable',
      'runColumnsNames',
      'runAppeals',
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
          this.runAppeals({
            signedParameters: this.signedParameters,
            sessionid: this.sessionid,
            startIndex: this.appeals.startIndex || 0,
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

      this.runAppeals({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
        startIndex: this.appeals.startIndex || 0,
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
      this.runAppeals({
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
    this.runProfiles(
      {
        mode: 'class',
        data: {
          userid: this.userid,
          sessid: this.sessid,
        },
        signedParameters: this.signedParameters,
      },
      () => {
        //predefined
        if (!this.defaultProfile) return;
        this.runPredefinedFilters({
          mode: 'class',
          data: {
            userid: this.userid,
            sessid: this.sessid,
            profileid: this.defaultProfile.id,
          },
          signedParameters: this.signedParameters,
        });
        //filter
        //cols
        //appeals
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
            this.runAppeals({
              signedParameters: this.signedParameters,
              sessionid: this.sessionid,
              startIndex: this.appeals.startIndex || 0,
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
      }
    );
  },
};
