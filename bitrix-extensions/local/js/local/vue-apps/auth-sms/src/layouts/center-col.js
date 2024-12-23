import '../style/center-col.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreStore } from '../stores/restore.js';

import { Restore } from '../pages/restore.js';

import { MessageComponent } from 'local.vue-components.message-component';

export const CenterCol = {
  data() {
    return {};
  },
  components: {
    Restore,
    MessageComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-center">

      <h3 class="mt-0">{{ title }}</h3>

      <hr>

      <MessageComponent v-if="info" type="info" :message="info" :button="infoButton" @clickButton="clickInfoButton" />
      <hr v-if="info && error">
      <MessageComponent v-if="error" type="error" :message="error" :button="false" />

      <div class="vue-auth-center-body">
        <router-view />
      </div>
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'info', 'infoButton', 'error', 'title']),
    ...mapState(restoreStore, []),
  },
  methods: {
    ...mapActions(dataStore, ['setInfo']),
    clickInfoButton() {
      this.setInfo('');
    },
  },
};
