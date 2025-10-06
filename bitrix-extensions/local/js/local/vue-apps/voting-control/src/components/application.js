import '../css/application.css';

import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

import { InfoBlocks } from './info-blocks.js';
import { StatusForm } from './status-form.js';
import { VotingList } from './voting-list.js';


import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    LoaderCircle,
    MessageComponent,
    InfoBlocks,
    StatusForm,
    VotingList,
  },
  // language=Vue
  template: `
    <div class="twpx-voting-control">

      <div class="twpx-voting-control__loader" v-if="loading">
        <LoaderCircle :show="loading" />
      </div>

      <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

      <div class="twpx-voting-control__wrapper" v-else>

        <h2>{{ lang.heading }}</h2>

        <InfoBlocks :lang="lang.infoBlocks" :adminData="adminData" />

        <StatusForm :lang="lang.statusForm" :value="adminData.selectedStatus" :controls="controls" @input="input" @setStatus="setStatus" />

        <VotingList :lang="lang.votingList" :adminData="adminData" />

      </div>

    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'actions',
      'lang',

      'infoBlocks',
      'adminData',
      'uuid',

      'loading',
      'error',
    ]),
    ...mapState(controlsStore, ['controls']),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    ...mapActions(controlsStore, [
      'changeControlValue',
      'changeStatus'
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
    async getVotingAdminData() {
      this.changeProp('loading', true)
      try {
        const result = await this.runBitrixMethod('votingAdminData', {uuid: this.uuid})
        this.changeProp('adminData', result.data)
        this.changeStatus(result.data.statuses, result.data.selectedStatus)
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    },
    async setStatus(value) {
      this.changeProp('loading', true)
      try {
        await this.runBitrixMethod('setStatus', {uuid: this.uuid, id: String(value)});
        this.changeProp('loading', false)
        this.changeControlValue({control: this.controls[0], value: value})
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
      
    }
  },
  mounted() {
    // set uuid
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('ID')) {
      this.changeProp('uuid', searchParams.get('ID'));
      this.getVotingAdminData();
    } else {
      this.changeProp('error', 'В URL не передан параметр ID голосования.')
    }

    // Подписка на Push-сообщения
    // BX.ready(function() {
    //   BX.addCustomEvent("onPullEvent", function(module_id, command, params) {
    //     // console.log(module_id, command, params);
    //     if (module_id == "voting" && command == 'check') {
    //       if (params) {
    //         if (params.status) {
    //           BX('statusValue').innerText = params.status;
    //         }
    //         if (params.title) {
    //           BX('titleValue').innerText = params.title;
    //         }
    //         if (params.count !== undefined) {
    //           BX('countValue').innerText = params.count;
    //         }
    //         if (params.progress !== undefined) {
    //           BX('progressValue').innerText = params.progress + '%';
    //         }

    //         // Можно добавить анимацию или уведомление
    //         console.log('Данные обновлены:', params);
    //       }
    //     }
    //   });
    //   BX.PULL.extendWatch('PULL_TEST');
    // });
  }
};
