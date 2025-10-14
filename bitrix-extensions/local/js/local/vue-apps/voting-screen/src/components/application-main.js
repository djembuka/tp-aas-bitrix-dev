import '../css/application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

import { StatusTimer } from './status-timer.js';
import { GraphComponent } from './graph-component.js';
import { ListComponent } from './list-component.js';
import { ResultComponent } from './result-component.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    StatusTimer,
    GraphComponent,
    ListComponent,
    ResultComponent
  },
  // language=Vue
  template: `
    <div class="twpx-voting-screen">
      <div class="twpx-voting-screen-block twpx-voting-screen__header">
        <img src="/local/templates/aas/images/logo-aas-small.svg" alt="" />
        <StatusTimer />
      </div>
      <div class="twpx-voting-screen-block twpx-voting-screen__description">
        <div class="twpx-voting-screen__voting-name">Голосование съезда</div>
        <div class="twpx-voting-screen__question">1.1.Определить заочную форму проведения общего территориального собрания членов СРО ААС по Приволжскому округу</div>
      </div>

      <div class="twpx-voting-screen__body">
        <div class="twpx-voting-screen-block twpx-voting-screen-app">
          <div class="twpx-voting-screen__body-title">Используйте приложение<br>для голосования</div>
          <div class="twpx-voting-screen__body-content">
            <div class="twpx-voting-screen__phone"></div>
          </div>
        </div>
        <div class="twpx-voting-screen-block twpx-voting-screen-app">
          <div class="twpx-voting-screen__body-title">Или отсканируйте QR</div>
          <div class="twpx-voting-screen__body-content">
            <div class="twpx-voting-screen__phone"></div>
          </div>
        </div>
      </div>

      <div class="twpx-voting-screen__body">
        <GraphComponent />
        <ListComponent />
      </div>

      <div class="twpx-voting-screen-block">
        <ResultComponent />
        <div class="twpx-voting-screen__message" v-html="lang.messageSuccess"></div>
      </div>
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'actions',
      'lang',
      'uuid',

      'loading',
      'error',
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    ...mapActions(controlsStore, [
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
    async getVoting() {
      this.changeProp('loading', true)
      try {
        const result = await this.runBitrixMethod('voting', {uuid: this.uuid})        
        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    },
    subscribe() {
      // if (window.BX && BX.ready) {
      //   BX.ready(function() {
      //     BX.PULL.subscribe({
      //       moduleId: 'voting',
      //       callback: function(data) {
      //         this.$router.push( `/${data.command}`);


      //         console.log('Command:', data.command)
      //         console.log('Params:', data.params)
      //         console.log('Extra:', data.extra)
  
      //         if (data.command == 'voting_v2') {
      //           console.log('Receive params:', data.params)
      //           console.log('Receive command:', data.command)
      //         } else if (data.command == 'voting_v5') {
      //           console.log('Receive params 5:', data.params)
      //           console.log('Receive extra 5:', data.extra)
      //           console.log('Receive command 5:', data.command)
      //         }
      //       }.bind(this)
      //     });
      //     BX.PULL.extendWatch('VOTING-RESULT'); /* код голосование для уникальность */
      //   });
      // }
    }
  },
  mounted() {
    this.subscribe()
  }
};
