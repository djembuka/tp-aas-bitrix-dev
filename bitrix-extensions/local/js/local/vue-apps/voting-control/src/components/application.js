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
    return {
      adminDataTimestamp: 0,
    };
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

        <StatusForm
          :lang="lang.statusForm"
          :value="adminData.selectedStatus"
          :controls="controls"
          :statusLabel="statusLabel"
          @input="input"
          @setStatus="setStatus"
        />

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

      'labels',
      'statusLabel'
    ]),
    ...mapState(controlsStore, ['controls']),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
      'changeSelectedStatus'
    ]),
    ...mapActions(controlsStore, [
      'changeControlValue',
      'changeStatus',
      'changeTimer'
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
      const timestamp = Date.now();
      this.adminDataTimestamp = timestamp;
      try {
        const result = await this.runBitrixMethod('votingAdminData', {uuid: this.uuid})
        if (timestamp !== this.adminDataTimestamp) {
          return;
        }
        this.changeProp('adminData', result.data)
        this.changeStatus(result.data.statuses, result.data.selectedStatus)
        this.changeTimer(result.data.statuses)

        const label = result.data.statuses.find(s => s.id === result.data.selectedStatus);
        if (label) {
          this.changeProp('statusLabel', this.labels[label.statusXml]);
        }
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    },
    async setStatus(value) {
      this.changeProp('loading', true)
      try {
        const options = {
          uuid: this.uuid,
          id: String(value),
          timer: parseInt(this.controls[1].value || 0, 10) * 60 + parseInt(this.controls[2].value || 0, 10)
        }
        await this.runBitrixMethod('setStatus', options);
        // this.changeProp('loading', false) - done in push and pull
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
      
    },
    setPushAndPull() {
      const _this = this;
      if (window.BX && BX.ready) {
        BX.ready(function () {
          BX.PULL.subscribe({
              moduleId: 'voting',
              command: _this.uuid,
              callback: function(params, extra, command) {
                  // console.log('Receive params:', params)
                  // console.log('Receive extra:', extra)
                  // console.log('Receive command:', command)
                  _this.getVotingAdminData();
              }.bind(this)
          });
          BX.PULL.extendWatch('VOTING-CONTROL');
        });
      }
    }
  },
  mounted() {
    this.changeProp('loading', true)
    this.getVotingAdminData();
    this.setPushAndPull();
  }
};
