import './application.css';

import { CandidateComponent } from './candidate-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    CandidateComponent
  },
  template: `
    <div v-if="groups && candidates" class="twpx-poll-candidates">
      <CandidateComponent v-for="candidate in candidates"
        :key="candidate.id"
        :lang="lang"
        :groups="groups"
        :candidate="candidate"
        @printGroup="printGroup"
      />
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'lang',
      'groups',
      'candidates'
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
      'printGroup'
    ]),
  },
  mounted() {
    this.runBitrixMethod('getGroups', {})
      .then(
        response => {
          console.log(response)
          this.changeProp('groups', response.data);
        },
        error => {}
      );

    this.runBitrixMethod('getCandidates', {})
      .then(
        response => {
          console.log(response)
          this.changeProp('candidates', response.data);
        },
        error => {}
      );
  },
};
