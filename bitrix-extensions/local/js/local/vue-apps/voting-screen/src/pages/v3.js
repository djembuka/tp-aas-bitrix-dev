import '../css/application.css';
import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

import { StatusTimer } from '../components/status-timer.js';
import { GraphComponent } from '../components/graph-component.js';
import { ListComponent } from '../components/list-component.js';

export const V3 = {
  components: {
    StatusTimer,
    GraphComponent,
    ListComponent
  },
  template: `
    <div class="twpx-voting-screen">

      <div class="twpx-voting-screen-block twpx-voting-screen__header">
        <img src="/local/templates/aas/images/logo-aas-small.svg" alt="" />
        <StatusTimer :command="command" :params="params" />
      </div>
      
      <div class="twpx-voting-screen-block twpx-voting-screen__description">
        <div class="twpx-voting-screen__voting-name">{{ params.title }}</div>
        <div class="twpx-voting-screen__voting-description">{{ params.description }}</div>
      </div>

      <div class="twpx-voting-screen__body">
        <GraphComponent
          :votedNum="votedNum"
          :votedPercentage="votedPercentage"
          :notVotedNum="notVotedNum"
          :notVotedPercentage="notVotedPercentage"
        />
        <ListComponent :list="listNoneVoters" />
      </div>

    </div>
	`,
  computed: {
      ...mapState(dataStore, [
        'command',
        'params',
        'extra',
      ]),
      votedNum() {
        return this.params.numberOfVotes;
      },
      votedPercentage() {
        return Math.round(this.params.numberOfVotes * 100 / this.params.totalVotes);
      },
      notVotedNum() {
        return this.params.totalVotes - this.params.numberOfVotes;
      },
      notVotedPercentage() {
        return Math.round((this.params.totalVotes - this.params.numberOfVotes) * 100 / this.params.totalVotes);
      },
      listNoneVoters() {
        return this.params.listNoneVoters ? this.params.listNoneVoters.sort().slice(0, 10) : [];
      }
  },
};
