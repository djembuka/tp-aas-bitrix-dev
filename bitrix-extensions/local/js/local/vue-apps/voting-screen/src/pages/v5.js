import '../css/application.css';
import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

import { StatusTimer } from '../components/status-timer.js';
import { ResultComponent } from '../components/result-component.js';

export const V5 = {
  components: {
    StatusTimer,
    ResultComponent
  },
  template: `
    <div class="twpx-voting-screen">

      <div class="twpx-voting-screen-block twpx-voting-screen__header">
        <img src="/local/templates/aas/images/logo-aas-small.svg" alt="" />
        <StatusTimer :command="command" />
      </div>
      
      <div class="twpx-voting-screen-block twpx-voting-screen__description">
        <div class="twpx-voting-screen__voting-name">{{ params.title }}</div>
        <div class="twpx-voting-screen__voting-description">{{ params.description }}</div>
      </div>

      <div class="twpx-voting-screen-block">
        <ResultComponent :answers="params.answers" />
        <div class="twpx-voting-screen__message">{{ params.finalMessage }}</div>
      </div>

    </div>
	`,
  computed: {
      ...mapState(dataStore, [
        'command',
        'params',
        'extra',
      ]),
  },
};
