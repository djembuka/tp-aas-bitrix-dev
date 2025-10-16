import '../css/basic.css';
import '../css/voting.css';

import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { questionComponent } from '../components/questionComponent.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

export const Voting = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
    ButtonComponent,
    ModalYesNo,
    questionComponent,
  },
  // language=Vue
  template: `

    <ModalYesNo
      heading="Подтвердите голосование"
      text="Вы отправляете свой голос, и после подтверждения изменить выбор будет невозможно."
      yes="Подтвердить"
      no="Отменить"
      :stateWatcher="stateWatcher"
      @clickYes="clickYes"
      @clickNo="clickNo"
    />

    <div v-if="!params.votingStatusXml || params.votingStatusXml==='voting_v1'" class="twpx-voting-voting-status"></div>

    <div v-else-if="params.votingStatusXml==='voting_v3' && params.userVoted" class="twpx-voting-voting-status">
      <div class="twpx-voting-voting twpx-voting-client-block">
        <h1>Результат голосования</h1>
        <MessageComponent type="success" size="big" message="Спасибо, вы успешно проголосвали." />
      </div>
    </div>

    <div v-else class="twpx-voting-voting twpx-voting-client-block">

      <div :class="'twpx-voting-status ' + labels[params.votingStatusXml]" v-if="status">{{ status }}</div>
      
      <div class="twpx-voting-voting-name">
        <h1 v-if="params.voting.name">{{ params.voting.name }}</h1>
        <p v-if="params.voting.description" class="twpx-voting-description">{{ params.voting.description }}</p>
      </div>

      <div class="twpx-voting-client__loader" v-if="loadingVoting">
        <LoaderCircle :show="loadingVoting" />
      </div>
      
      <MessageComponent v-else-if="errorVoting" type="error" size="big" :message="errorVoting" />

      <div v-else style="display: grid; gap: 24px;">

        <div class="b-poll__groups" :data-id="pollId">
          <div class="b-poll__groups__item" v-for="(group, groupIndex) in params.voting.questionsGroups">

            <h2 v-if="group.name">{{group.name}}</h2>
            <p v-if="group.description" v-html="group.description" class="twpx-voting-description"></p>

            <div class="b-poll__questions">
              <div v-for="(question, questionIndex) in group.questions">

                <questionComponent
                  :pollId="pollId"
                  :groups="groups"
                  :groupIndex="groupIndex"
                  :questionIndex="questionIndex"
                  :question="question"
                  :votingStatusXml="params.votingStatusXml"
                  @changeChecked="changeChecked"
                  @changeCheckedNum="changeCheckedNum"
                  @setActiveQuestion="setActiveQuestion"
                />

              </div>
            </div>
          </div>
        </div>
        
        <MessageComponent v-if="params.votingStatusXml==='voting_v5'" type="lock-green" size="big" message="Голосование завершено" />
        <MessageComponent v-else-if="params.votingStatusXml==='voting_v6'" type="lock" size="big" message="Голосование в архиве" />
        <ButtonComponent v-else text="Проголосовать" :props="['wide', 'secondary', 'large']" :disabled="isVoteButtonDisabled" @clickButton="clickVoteButton" />
      
      </div>
    </div>
  `,
  computed: {
    ...mapState(dataStore, [
      'loadingVoting',
      'errorVoting',

      'params',
      'statuses',
      'groupInfo',

      'stateWatcher',
      'labels',
      
      'pollId',
      'groups'
    ]),
    status() {
      const statusObj = this.statuses ? this.statuses.find(s => String(s.id) === String(this.params.votingStatus)) : undefined;
      return statusObj ? statusObj.status : '';
    },
    isVoteButtonDisabled() {
      return this.params.votingStatusXml === 'voting_v2' ||
             this.params.votingStatusXml === 'voting_v4' ||
             !this.params.voting.questionsGroups.every(g => {
                return g.questions.every(q => {
                  return q.answers.some(a => a.checked);
                });
              });
    }
  },
  methods: {
    ...mapActions(dataStore, [
      'changeProp',
      'runBitrixMethod',
      
      'changeChecked',
      'changeCheckedNum',
      'setActiveQuestion',
      'removeActiveQuestion',
      'addCheckedNum'
    ]),
    clickVoteButton() {
      this.changeProp('stateWatcher', !this.stateWatcher);
    },
    clickYes() {
      this.changeProp('stateWatcher', !this.stateWatcher);
      this.submitVotingResult();
    },
    clickNo() {
      this.changeProp('stateWatcher', !this.stateWatcher);
    },
    async submitVotingResult() {
      const answer = {};

      this.params.voting.questionsGroups.forEach(g => {
        g.questions.forEach(q => {

          if (q.type === '1') {

            // checkbox
            answer[ q.id ] = q.answers.filter(a => a.checked).map(a => a.id);
    
          } else {
    
            // radio
            const checked = q.answers.find(a => a.checked);
            if (checked) {
              answer[ q.id ] = checked.id;
            }
    
          }
        });
      });

      const data = {
        sessid: BX.message('bitrix_sessid'),
        uid: BX.message('USER_ID'),
        poll: this.params.votingId,
        answer
      };

      try {
        this.changeProp('loadingVoting', true);
        await this.runBitrixMethod('submitVotingResult', data);
        this.changeProp('loadingVoting', false);
      } catch(error) {
        this.changeProp('loadingVoting', false);
        this.changeProp('errorVoting', error?.errors ? error?.errors[0].message : error);
      }
    }
  },
  mounted() {
  }
};
