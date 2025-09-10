import './filter-table.css';
import './application.css';

import { ProfileChoice } from 'local.vue-components.profile-choice';
import { PredefinedFilters } from 'local.vue-components.predefined-filters';
import { FilterComponent } from 'local.vue-components.filter-component';
import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { PaginationComponent } from 'local.vue-components.pagination-component';
import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { profileStore } from '../stores/profile';
import { predefinedStore } from '../stores/predefined';
import { tableStore } from '../stores/table';
import { filterStore } from '../stores/filter';

export const Application = {
  data() {
    return {
      selectedPrev: 0,
      inputTimeoutId: null,
    };
  },
  components: {
    ProfileChoice,
    PredefinedFilters,
    FilterComponent,
    TableComponent,
    StickyScroll,
    PaginationComponent,
    MessageComponent,
  },
  // language=Vue

  template: `

    <MessageComponent v-if="errorProfile" type="error" :message="errorProfile" :button="false" />

    <div v-else>

      <ProfileChoice :profiles="profiles" :loading="loadingProfiles" @clickProfile="clickProfile" />


      <hr class="hr--sl" v-if="loadingPredefined || (predefined && predefined.fields && predefined.fields.length) || (selected !== false && selected !== 0) || errorPredefined">


      <MessageComponent v-if="errorPredefined" type="error" :message="errorPredefined" :button="false" />

      <PredefinedFilters v-else :predefined="predefined" :selected="selected" :loadingSelected="loadingSelected" :loading="loadingPredefined" @clickPredefined="clickPredefined" @clickSelected="clickSelected" />


      <hr class="hr--lg"
      >
      
      <div>
        <div v-if="filters">

          <MessageComponent v-if="errorFilter" type="error" :message="errorFilter" :button="false" />

          <FilterComponent v-else :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />

        </div>
        <hr>


        <MessageComponent v-if="errorTable" type="error" :message="errorTable" :button="false" />

        <div v-else-if="appeals" ref="table">

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
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['userid', 'sessid', 'signedParameters']),
    ...mapState(profileStore, [
      'profiles',
      'defaultProfile',
      'profilesCounter',
      'loadingProfiles',
      'errorProfile',
    ]),
    ...mapState(predefinedStore, [
      'predefined',
      'predefinedActive',
      'loadingPredefined',
      'loadingSelected',
      'errorPredefined',
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
    showError(error) {
      console.log(error);
    },
    pagesNum() {
      return Math.ceil(this.appeals.resultCount / this.maxCountPerRequest);
    },
    pageActive() {
      return this.appeals.startIndex / this.maxCountPerRequest + 1;
    },
    error() {
      return (
        this.errorProfile ||
        this.errorPredefined ||
        this.errorFilter ||
        this.errorTable
      );
    },
    selected() {
      if (!this.defaultProfile) {
        return false;
      }

      let filtersSelected = false;

      if (this.filters) {
        filtersSelected = this.filters.find((f) => {
          if (f.property === 'select' && typeof f.value === 'object') {
            return f.value.code;
          } else {
            return f.value;
          }
        });
      }

      if (this.defaultProfile.excelExportSupport && filtersSelected) {
        if (!this.loadingTable) {
          this.selectedPrev = this.appeals.resultCount;
          return this.appeals.resultCount;
        } else {
          return this.loadingTable && this.selectedPrev > 0;
        }
      } else {
        return false;
      }
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
      'runExportFile',
    ]),
    clickProfile({ id }) {
      this.setDefaultProfile({ id });

      this.increaseProfilesCounter();

      new Promise((resolve) => {
        resolve(
          this.runSetDefaultProfile(
            {
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: id,
              },
            },
            () => {},
            this.profilesCounter
          )
        );
      })
        .then(
          (result) => {
            if (result && result.status === 'success') {
              if (!this.defaultProfile) return;

              return this.runPredefinedFilters({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                },
              });
            } else if (result && result.status === 'error') {
              this.showError({ error: result.errors[0] });
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .then((result) => {
          if (result && result.status === 'success') {
            return this.runFilters({
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
              },
            });
          } else if (result && result.status === 'error') {
            this.showError({ error: result.errors[0] });
          }
        })
        .then((result) => {
          if (result && result.status === 'success') {
            return this.runColumnsNames({
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
              },
            });
          } else if (result && result.status === 'error') {
            this.showError({ error: result.errors[0] });
          }
        })
        .then((result) => {
          if (result && result.status === 'success') {
            return this.runDefaultSort({
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
              },
            });
          } else if (result && result.status === 'error') {
            this.showError({ error: result.errors[0] });
          }
        })
        .then((result) => {
          if (result && result.status === 'success') {
            const predefinedFilter = this.predefinedActive
              ? this.predefinedActive.id
              : undefined;

            this.runAppeals(
              {
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                  startIndex: 0,
                  maxCountPerRequest: this.maxCountPerRequest,
                  predefinedFilter,
                  filters: this.filters,
                  columnSort: this.sort.columnSort,
                  sortType: this.sort.sortType,
                },
              },
              null,
              this.increaseAppealsCounter()
            );
          } else if (result && result.status === 'error') {
            this.showError({ error: result.errors[0] });
          }
        });
    },
    clickPredefined({ field }) {
      this.setPredefinedActive({ field });

      if (!this.defaultProfile) return;

      const predefinedFilter = this.predefinedActive
        ? this.predefinedActive.id
        : undefined;

      if (
        this.sort.columnSort !== undefined ||
        this.sort.sortType !== undefined
      ) {
        new Promise((resolve) => {
          resolve(
            this.runAppeals(
              {
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                  startIndex: 0,
                  maxCountPerRequest: this.maxCountPerRequest,
                  predefinedFilter,
                  filters: this.filters,
                  columnSort: this.sort.columnSort,
                  sortType: this.sort.sortType,
                },
              },
              null,
              this.increaseAppealsCounter()
            )
          );
        })
          .then((result) => {
            if (result && result.status === 'success') {
              return this.runFilters({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                },
              });
            } else if (result && result.status === 'error') {
              this.showError({ error: result.errors[0] });
            }
          })
          .then((result) => {
            if (result && result.status === 'success') {
              return this.runColumnsNames({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                },
              });
            } else if (result && result.status === 'error') {
              this.showError({ error: result.errors[0] });
            }
          })
          .then((result) => {
            if (result && result.status === 'success') {
              return this.runDefaultSort({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                },
              });
            } else if (result && result.status === 'error') {
              this.showError({ error: result.errors[0] });
            }
          })
          .then((result) => {
            if (result && result.status === 'success') {
              const predefinedFilter = this.predefinedActive
                ? this.predefinedActive.id
                : undefined;

              this.runAppeals(
                {
                  mode: 'class',
                  data: {
                    signedParameters: this.signedParameters,
                    userid: this.userid,
                    sessid: this.sessid,
                    profileid: this.defaultProfile.id,
                    startIndex: 0,
                    maxCountPerRequest: this.maxCountPerRequest,
                    predefinedFilter,
                    filters: this.filters,
                    columnSort: this.sort.columnSort,
                    sortType: this.sort.sortType,
                  },
                },
                null,
                this.increaseAppealsCounter()
              );
            } else if (result && result.status === 'error') {
              this.showError({ error: result.errors[0] });
            }
          });
      }
    },
    clickSelected() {
      const predefinedFilter = this.predefinedActive
        ? this.predefinedActive.id
        : undefined;

      this.runExportFile({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          userid: this.userid,
          sessid: this.sessid,
          profileid: this.defaultProfile.id,
          predefinedFilter,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType,
        },
      });
    },
    ...mapActions(tableStore, [
      'hideErrorTable',
      'runColumnsNames',
      'runAppeals',
      'runDefaultSort',
      'runSetDefaultSort',
      'increaseAppealsCounter',
    ]),
    ...mapActions(filterStore, [
      'runFilters',
      'changeControlValue',
      'runHintsAction',
      'setHints',
    ]),
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
            userid: this.userid,
            sessid: this.sessid,
            profileid: this.defaultProfile.id,
            columnSort: column.id,
            sortType,
          },
        },
        () => {
          const predefinedFilter = this.predefinedActive
            ? this.predefinedActive.id
            : undefined;

          this.runAppeals(
            {
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
                startIndex: 0,
                maxCountPerRequest: this.maxCountPerRequest,
                predefinedFilter,
                filters: this.filters,
                columnSort: column.id,
                sortType,
              },
            },
            null,
            this.increaseAppealsCounter()
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
        const predefinedFilter = this.predefinedActive
          ? this.predefinedActive.id
          : undefined;

        this.runAppeals(
          {
            mode: 'class',
            data: {
              signedParameters: this.signedParameters,
              userid: this.userid,
              sessid: this.sessid,
              profileid: this.defaultProfile.id,
              startIndex: 0,
              maxCountPerRequest: this.maxCountPerRequest,
              predefinedFilter,
              filters: this.filters,
              columnSort: this.sort.columnSort,
              sortType: this.sort.sortType,
            },
          },
          null,
          this.increaseAppealsCounter()
        );
      }, 300);
    },
    hints({ type, control, action, value }) {
      switch (type) {
        case 'get':
          this.runHintsAction({
            mode: 'class',
            data: {
              signedParameters: this.signedParameters,
              control,
              action,
            },
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
      const predefinedFilter = this.predefinedActive
        ? this.predefinedActive.id
        : undefined;

      this.runAppeals(
        {
          mode: 'class',
          data: {
            signedParameters: this.signedParameters,
            userid: this.userid,
            sessid: this.sessid,
            profileid: this.defaultProfile.id,
            startIndex: (count - 1) * this.maxCountPerRequest,
            maxCountPerRequest: this.maxCountPerRequest,
            predefinedFilter,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
          },
        },
        () => {
          if (this.$refs.table.getBoundingClientRect().top + 100 < 0) {
            window.scrollTo({
              top:
                this.$refs.table.getBoundingClientRect().top +
                window.scrollY -
                100,
              behavior: 'smooth',
            });
          }
        },
        this.increaseAppealsCounter()
      );
    },
  },
  mounted() {
    const data = {
      mode: 'class',
      data: {
        signedParameters: this.signedParameters,
        userid: this.userid,
        sessid: this.sessid,
      },
    };

    const self = this;

    new Promise((resolve) => {
      resolve(self.runProfiles(data));
    })
      .then((result) => {
        return resultFn(result, 'runPredefinedFilters');
      }, errorFn)
      .then((result) => {
        return resultFn(result, 'runFilters');
      }, errorFn)
      .then((result) => {
        return resultFn(result, 'runColumnsNames');
      }, errorFn)
      .then((result) => {
        return resultFn(result, 'runDefaultSort');
      }, errorFn)
      .then((result) => {
        return resultFn(result, 'runAppeals');
      }, errorFn);

    function resultFn(result, methodName) {
      if (result && result.status === 'success') {
        if (methodName === 'runPredefinedFilters') {
          if (!self.defaultProfile) return;
          data.data.profileid = self.defaultProfile.id;
        }

        if (methodName === 'runAppeals') {
          const predefinedFilter = self.predefinedActive
            ? self.predefinedActive.id
            : undefined;

          data.data.startIndex = 0;
          data.data.maxCountPerRequest = self.maxCountPerRequest;
          data.data.predefinedFilter = predefinedFilter;
          data.data.filters = self.filters;
          data.data.columnSort = self.sort.columnSort;
          data.data.sortType = self.sort.sortType;

          self[methodName](data, null, self.increaseAppealsCounter());
        } else {
          return self[methodName](data);
        }
      } else if (result && result.status === 'error') {
        self.showError({ error: result.errors[0] });
      }
    }

    function errorFn(error) {
      console.log(error);
    }
  },
};
