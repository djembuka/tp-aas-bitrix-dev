import '../css/basic.css';
import '../css/list.css';

import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

export const List = {
  components: {
    MessageComponent,
  },
  template: `

    <div class="twpx-voting-list twpx-voting-client-block">
      <h1>{{ lang.list.heading }}</h1>
      
      <MessageComponent v-if="error" :message="error" size="big" type="error" />

      <div v-else class="twpx-voting-client-content">
        <div class="twpx-voting-client-text">{{ lang.list.text }}</div>
        <div class="twpx-voting-list__items">
          <div class="twpx-voting-list__item" v-for="item in params.votingList" :key="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.25 10.25H1.5V20.75C1.5 21.7165 2.2835 22.5 3.25 22.5H20.75C21.7165 22.5 22.5 21.7165 22.5 20.75V10.25H20.75M3.25 10.25L12 15.5L20.75 10.25M3.25 10.25V5C3.25 3.067 4.817 1.5 6.75 1.5H17.25C19.183 1.5 20.75 3.067 20.75 5V10.25" stroke="#F2762E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'lang',
      'error',
      'params'
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'changeProp',
    ]),
  },
  mounted() {}
};
