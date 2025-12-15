import './application.css';

import { DetailInfo } from './detail-info';
import { GroupsComponent } from './groups-component.js';
import { AddEditForm } from './add-edit-form';
import { EditForm } from './edit-form';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    DetailInfo,
    GroupsComponent,
    AddEditForm,
    EditForm,

    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    ModalAnyContent
  },
  // language=Vue
  template: `
  <div class="twpx-poll-detail">

      <AddEditForm />

    <div class="twpx-poll-detail__loader" v-if="loading">
      <LoaderCircle :show="loading" />
    </div>

    <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

    <div class="twpx-poll-detail__wrapper" v-else>

      <DetailInfo
        :voting="voting"
        :lang="lang"
        @clickChangeDetail="clickChangeDetail"
      />

      <GroupsComponent />

      <AddEditForm />

      <ModalAnyContent :stateWatcher="editModalStateWatcher" @onClose="onEditModalClose">
        <div class="twpx-poll-detail__loader" v-if="editModalLoading">
          <LoaderCircle :show="editModalLoading" />
        </div>

        <MessageComponent v-else-if="editModalError" type="error" size="big" :message="editModalError" />

        <EditForm v-else
          :customData="customData"
          :signedParameters="signedParameters"
          :voting="voting"
          @input="input"
          @hints="hints"
          @clickCancel="clickEditFormCancel"
          @clickSend="clickEditFormSend"
        />
      </ModalAnyContent>
      
    </div>
  </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'lang',
      'uuid',

      'loading',
      'error',

      'typeMode',
      'actionMode',

      'voting',
      'groups',
      'questions',
      'answers',

      'modalStateWatcher',
      'modalLoading',
      'modalError',

      'editModalStateWatcher',
      'editModalLoading',
      'editModalError'
    ]),
    deleteHeading() {
      return this.lang[ this.typeMode ].deleteModal.heading
    },
    deleteText() {
      return this.lang[ this.typeMode ].deleteModal.text
    },
    deleteYes() {
      return this.lang[ this.typeMode ].deleteModal.yes
    },
    deleteNo() {
      return this.lang[ this.typeMode ].deleteModal.no
    },
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
      'pushItemsArray'
    ]),
    ...mapActions(controlsStore, [
      'changeGroupFormBlocks',
      'changeQuestionFormBlocks',
      'changeControlValue',
      'clearGroupForm',
      'clearQuestionForm',
      'runHints',
      'setHints'
    ]),
    clickChangeDetail() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    addQuestion() {
      this.changeProp('modalStateWatcher', !this.modalStateWatcher);
      this.changeProp('modalError', '')
      this.changeProp('typeMode', 'question')
      this.changeProp('actionMode', 'add')
    },
    input(args) {
      this.changeControlValue(args);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    clickEditFormCancel() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    clickEditFormSend() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      this.getVoting();
    },
    onEditModalClose() {
      if (document.querySelector('#PollCreateApp')) {
        document.querySelector('#PollCreateApp').dispatchEvent(new Event("closeModal"));
      }
    },
    async getVoting() {
      this.changeProp('loading', true)
      try {
        const result = await this.runBitrixMethod('voting', {uuid: this.uuid})

        if (result && result.data && result.data.length) {
          this.changeProp('voting', result.data[0])
        }

        if (result?.data[0]?.questionsGroups?.length) {
          this.changeProp('groups', result.data[0].questionsGroups)

          // get questions
          result.data[0].questionsGroups.forEach(async g => {
            const questions = await this.runBitrixMethod('questions', {uuid: g.uuid});
            this.pushItemsArray({type: 'questions', parentUuid: g.uuid, itemsArray: questions.data});

            // get answers
            questions.data.forEach(async q => {
              const answers = await this.runBitrixMethod('answers', {uuid: q.uuid});
              this.pushItemsArray({type: 'answers', parentUuid: q.uuid, itemsArray: answers.data});
            });
          });
        }
        
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    }
  },
  mounted() {
    this.getVoting();
  }
};
