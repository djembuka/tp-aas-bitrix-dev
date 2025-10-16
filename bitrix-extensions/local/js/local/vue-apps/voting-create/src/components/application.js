import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
  },
  // language=Vue
  template: `
  <div class="twpx-poll-create" id="PollCreateApp">

    <div class="twpx-poll-create__loader" v-if="loading">
      <LoaderCircle :show="loading" />
    </div>

    <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

    <form action="" v-else>
      <div class="twpx-poll-create__form" v-if="!loading">

        <h2>{{ heading }}</h2>

        <div class="twpx-poll-create__block" v-for="block in blocks" :key="block.id" :data-id="block.id">
          <h4>{{ block.heading }}</h4>
          <div class="twpx-poll-create__controls">
            <ControlChoice  v-for="control in block.controls" :key="control.id" :control="control" @input="input" @hints="hints" />
          </div>
        </div>
        
        <div class="twpx-poll-create__buttons">
          <ButtonComponent :text="lang.cancelButton" :props="['gray-color', 'large']" @clickButton="clickCancel" />
          <ButtonComponent :text="sendButton" :props="['secondary', 'large']" :disabled="isDisabled" @clickButton="clickSend" />
        </div>

      </div>
    </form>
  </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'lang',
      'id',
      'loading',
      'error',
      'votingDetailURL',
      'voting'
    ]),
    ...mapState(controlsStore, [
      'blocks'
    ]),
    heading() {
      return this.voting.uuid ? this.lang.editHeading : this.lang.heading;
    },
    sendButton() {
      return this.voting.uuid ? this.lang.editSendButton : this.lang.sendButton
    },
    isDisabled() {
      return this.blocks.some(b => b.controls.some(c => c.required && !c.value))
    },
    mode() {
      return this.voting.uuid ? 'edit' : 'create'
    }
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    ...mapActions(controlsStore, [
      'changeBlocks',
      'changeControlValue',
      'runHints',
      'setHints'
    ]),
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
    clickCancel() {
      if (this.votingListURL) {
        window.location.href = this.votingListURL;
      } else if (this.voting.uuid) {
        document.querySelector('#votingEditForm').dispatchEvent(new Event("clickCancel"));
        this.changeProp('error', '');
        this.changeProp('loading', false);
      }
    },
    clickSend() {
      const data = {
        name: this.blocks[0].controls[0].value,
        description: this.blocks[0].controls[2].value,
        announcement: this.blocks[0].controls[1].value,
        activityStartDate: this.formatToSqlDatetime(this.blocks[1].controls[0].value),
        activityEndDate: this.formatToSqlDatetime(this.blocks[1].controls[1].value),
        voteEndDate: this.formatToSqlDatetime(this.blocks[1].controls[2].value),
        numberVotesLimit: this.blocks[2].controls[0].value,
        numberVoters: this.blocks[2].controls[1].value,
        buttonMessage: this.blocks[2].controls[2].value,
        messageAfterVoting: this.blocks[2].controls[3].value,
        groupsVoting: this.blocks[3].controls[0].value,
        groupsCommission: this.blocks[3].controls[1].value,
        sortIndex: this.blocks[2].controls[4].value,
      };

      if (this.mode === 'edit') {
        data.uuid = this.voting.uuid;
      }

      this.changeProp('loading', true);
      this.runBitrixMethod('editVoting', data)
        .then(
          response => {
            if (this.mode === 'edit') {
              document.querySelector('#votingEditForm').dispatchEvent(new Event("clickSend"));
              this.changeProp('error', '');
              this.changeProp('loading', false);
            } else if (response?.data?.uuid) {
              window.location.href = `${this.votingDetailURL}${response.data.uuid}`
            }
          },
          error => {
            this.changeProp('loading', false);
            this.changeProp('error', error.errors[0].message);
          }
        );
    },
    formatToSqlDatetime(input) {
      if (typeof input !== 'string') return input;
    
      const [datePart, timePartRaw] = input.trim().split(/\s+/);

      if (!datePart) return input;
    
      const m = datePart.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
      if (!m) return input;
    
      const [, dd, mm, yyyy] = m;
    
      // Базовая проверка валидности даты
      const d = Number(dd), mth = Number(mm), y = Number(yyyy);
      if (mth < 1 || mth > 12 || d < 1 || d > 31) return null;
    
      // Время (опционально). Если не передано — 00:00:00
      let hh = '00', min = '00', ss = '00';
      if (timePartRaw) {
        const t = timePartRaw.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);
        if (!t) return null;
        hh = String(t[1]).padStart(2, '0');
        min = String(t[2]).padStart(2, '0');
        ss = String(t[3] ?? '00').padStart(2, '0');
        if (Number(hh) > 23 || Number(min) > 59 || Number(ss) > 59) return null;
      }
    
      return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    }
  },
  async mounted() {
    if (document.querySelector('#PollCreateApp')) {
      document.querySelector('#PollCreateApp').addEventListener('closeModal', () => {
        this.changeProp('error', '');
        this.changeProp('loading', false);
      });
    }

    if (this.voting.uuid) {
      const votingArray = [
        [0, 0, 'name'],
        [0, 1, 'announcement'],
        [0, 2, 'description'],
        [1, 0, 'activityStartDate'],
        [1, 1, 'activityEndDate'],
        [1, 2, 'voteEndDate'],
        [2, 0, 'voteEndDate'],
        [2, 0, 'numberVotesLimit'],
        [2, 1, 'numberVoters'],
        [2, 2, 'buttonMessage'],
        [2, 3, 'messageAfterVoting'],
        [2, 4, 'sortIndex'],
        [3, 0, 'groupsVoting'],
        [3, 1, 'groupsCommission']
      ]

      votingArray.forEach(item => {
        this.changeControlValue({
          control: this.blocks[item[0]].controls[item[1]],
          value: String(this.voting[item[2]])
        })
      })
    }
  }
};
