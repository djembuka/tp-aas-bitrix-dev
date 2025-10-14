import './application.css';

import { WizardBlock } from './wizard-block'
import { VotingItem } from './voting-item.js'

import { MessageComponent } from 'local.vue-components.message-component'
import { LoaderCircle } from 'local.vue-components.loader-circle'
import { ModalAnyContent } from 'local.vue-components.modal-any-content'
import { ModalYesNo } from 'local.vue-components.modal-yes-no'

import { EditForm } from './edit-form'

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    WizardBlock,
    VotingItem,
    MessageComponent,
    LoaderCircle,
    ModalAnyContent,
    ModalYesNo,
    EditForm
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
            @input="input"
            @hints="hints"
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

        <div class="twpx-poll-list__list">
          <VotingItem v-for="voting in pollItems"
            :key="voting.uuid"
            :voting="voting"
            :url="votingDetailURL"
            @edit="editVoting"
            @delete="deleteVoting"
          />
        </div>

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

      'editModalStateWatcher',
      'editModalLoading',
      'editModalError',
      
      'activeVoting'
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    goToPollCreate() {
      window.location.href = this.votingCreateURL;
    },
    editVoting(voting) {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher)
      this.changeProp('activeVoting', voting);
    },
    deleteVoting(voting) {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher)
      this.changeProp('activePollId', voting.uuid)
    },
    async clickDeleteModalYes() {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher)
      this.changeProp('loading', true)

      try {
        await this.runBitrixMethod('deleteVoting', {uuid: this.activePollId})
        const result = await this.runBitrixMethod('votings')
        if (result && result.data) {
          this.changeProp('pollItems', result.data)
        } 
        this.changeProp('loading', false)
      } catch(error) {
        this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher)
        this.changeProp('loading', false)
        this.changeProp('error', error.errors[0].message)
      }
    },
    clickDeleteModalNo() {
      this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher)
    },
    clickEditFormCancel() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    clickEditFormSend() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      this.getVotings();
    },
    async getVotings() {
      this.changeProp('loading', true)

      try {
        const result = await this.runBitrixMethod('votings')
        if (result && result.data) {
          this.changeProp('pollItems', result.data)
        }     
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    }
  },
  mounted() {
    this.getVotings();
  },
};
