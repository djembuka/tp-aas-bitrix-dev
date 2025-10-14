import './application.css';

import { CandidateComponent } from './candidate-component';

import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    LoaderCircle,
    MessageComponent,
    CandidateComponent
  },
  template: `
    <div class="twpx-voting-client__loader" v-if="loading">
        <LoaderCircle :show="loading" />
    </div>

    <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

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
      'loading',
      'error',

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
  async mounted() {
    try {
      const groupsResult = await this.runBitrixMethod('getGroups', {});
      this.changeProp('groups', groupsResult.data);

      const candidatesResult = await this.runBitrixMethod('getCandidates', {});
      this.changeProp('candidates', candidatesResult.data);
    } catch(error) {
        this.changeProp('loading', false)
        this.changeProp('error', error.errors[0].message)
    }
  },
};
