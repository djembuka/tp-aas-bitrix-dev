import './application.css';

import { WizardBlock } from './wizard-block';
import { VotingItem } from './voting-item.js';

import { MessageComponent } from 'local.vue-components.message-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';
import { FilterComponent } from 'local.vue-components.filter-component';
import { MoreButton } from 'local.vue-components.more-button';

import { EditForm } from './edit-form';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { controlsStore } from '../stores/controls';

export const Application = {
  data() {
    return {
      inputTimeoutId: null,
    };
  },
  components: {
    WizardBlock,
    VotingItem,
    MessageComponent,
    LoaderCircle,
    ModalAnyContent,
    ModalYesNo,
    EditForm,
    FilterComponent,
    MoreButton,
  },
  template: `
    <div class="twpx-poll-list">
      <div v-if="loading" class="twpx-poll-list__loader">
        <LoaderCircle :show="loading" />
      </div>

      <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

      <div class="twpx-poll-list__wrapper" v-else>

        <ModalAnyContent :stateWatcher="editModalStateWatcher" @onClose="onEditModalClose">
          <div class="twpx-poll-detail__loader" v-if="editModalLoading">
            <LoaderCircle :show="editModalLoading" />
          </div>

          <MessageComponent v-else-if="editModalError" type="error" size="big" :message="editModalError" />

          <EditForm v-else
            :customData="customData"
            :signedParameters="signedParameters"
            :voting="activeVoting"
            @clickCancel="clickEditFormCancel"
            @clickSend="clickEditFormSend"
          />
        </ModalAnyContent>

        <ModalYesNo
          :heading="lang.deleteModal.heading"
          :text="lang.deleteModal.text"
          :yes="lang.deleteModal.yes"
          :no="lang.deleteModal.no"
          :buttons="{
            yes: {
              props: ['danger', 'large']
            },
            no: {
              props: ['gray-color', 'large']
            }
          }"
          :stateWatcher="deleteModalStateWatcher"
          @clickYes="clickDeleteModalYes"
          @clickNo="clickDeleteModalNo"
        />

        <WizardBlock :lang="lang" @clickButton="goToPollCreate" />

        <FilterComponent
          :filters="filters"
          :loading="false"
          @input="input"
          @hints="hints"
        />

        <div class="twpx-poll-list__list">
          <VotingItem v-for="voting in pollItems.items"
            :key="voting.uuid"
            :voting="voting"
            :url="votingDetailURL"
            :status="statuses.find(s => s.id === voting.state)"
            :label="labels[voting.stateXml]"
            @edit="editVoting"
            @delete="deleteVoting"
          />
        </div>

        <MoreButton
          :loading="loadingMore"
          :show="showMore"
          @clickMore="clickMore"
        />

      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'lang',
      'votingCreateURL',
      'votingDetailURL',
      'error',
      'loading',
      'pollItems',
      'deleteModalStateWatcher',
      'activePollId',

      'filters',
      'startIndex',
      'loadingMore',
      'showMore',
      'maxCountPerRequest',
      'setQueryParam',

      'editModalStateWatcher',
      'editModalLoading',
      'editModalError',

      'activeVoting',
      'labels',
      'statuses',
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
      'setStatusesSelect',
    ]),
    ...mapActions(controlsStore, [
      'runHints',
      'setHints',
      'changeControlValue',
      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
    async clickMore() {
      if (!this.pollItems.items) {
        //если сработало пока не загрузились данные первой страницы
        return;
      }

      this.changeProp('startIndex', this.startIndex + this.maxCountPerRequest);
      this.changeProp('loadingMore', true);

      await this.getVotings();

      this.changeProp('loadingMore', false);
      this.changeProp(
        'showMore',
        Number(this.pollItems.items.length) >=
          Number(this.pollItems.resultCount)
          ? false
          : true
      );
      this.setQueryParam('ITEMS_NUM', this.pollItems.items.length);

      // s.then(
      //   (result) => {
      //     this.changeLoadingMore(false);
      //     this.changeProp(
      //       'showMore',
      //       Number(this.pollItems.items.length) >=
      //         Number(this.items.resultCount)
      //         ? false
      //         : true
      //     );
      //     this.setQueryParam('ITEMS_NUM', this.items.items.length);
      //   },
      //   (error) => {
      //     this.changeLoadingMore(false);
      //     this.showErrorTable({ error, method: 'items' });
      //   }
      // );
    },
    input(args) {
      this.changeControlValue(args);
      clearTimeout(this.inputTimeoutId);
      this.inputTimeoutId = setTimeout(this.getVotings, 300);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    goToPollCreate() {
      window.location.href = this.votingCreateURL;
    },
    editVoting(voting) {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      this.changeProp('activeVoting', voting);
    },
    deleteVoting(voting) {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
      this.changeProp('activePollId', voting.uuid);
    },
    async clickDeleteModalYes() {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
      this.changeProp('loading', true);

      try {
        await this.runBitrixMethod('deleteVoting', { uuid: this.activePollId });
        await this.refreshPollList();
        this.changeProp('loading', false);
      } catch (error) {
        this.changeProp(
          'deleteModalStateWatcher',
          !this.deleteModalStateWatcher
        );
        this.handleRequestError();
      }
    },
    clickDeleteModalNo() {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
    },
    clickEditFormCancel() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    clickEditFormSend() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      this.getVotings();
    },
    async getVotings() {
      this.changeProp('loading', true);

      try {
        this.refreshPollList();
        this.changeProp('loading', false);
      } catch (error) {
        this.handleRequestError();
      }
    },
    async refreshPollList() {
      const result = await this.runBitrixMethod('votings', {
        startIndex: this.startIndex,
        maxCountPerRequest: this.maxCountPerRequest,
        filters: this.filters,
        ...this.customData,
      });

      if (result && result.data && result.data.items) {
        const items = [...this.pollItems.items, ...result.data.items];

        this.changeProp('pollItems', {
          items,
          resultCount: result.data.resultCount,
        });
      }
    },
    async getStatuses() {
      try {
        const result = await this.runBitrixMethod('votingStatuses');
        if (result && result.data) {
          this.changeProp('statuses', result.data);
          this.setStatusesSelect(result.data);
        }
      } catch (error) {
        this.handleRequestError(error);
      }
    },
    handleRequestError(error) {
      this.changeProp('loading', false);
      const message = error?.errors?.[0]?.message || error;
      this.changeProp('error', message);
    },
    async loadInitialData() {
      try {
        await this.getStatuses();
        await this.getVotings();
      } catch (error) {
        this.handleRequestError(error);
      }
    },
  },
  mounted() {
    this.loadInitialData();
  },
};
