import { mapState } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { infoStore } from '../stores/info.js';

import { MessageComponent } from 'local.vue-components.message-component';

export const Info = {
  data() {
    return {};
  },
  components: {
    MessageComponent,
  },
  // language=Vue
  template: `
    <div class="vue-auth-simple-info">

      <h3>{{ heading }}</h3>

      <MessageComponent v-if="text" type="info" :message="text" :button="false" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher','error']),
    ...mapState(infoStore, ['text', 'heading']),
  },
  watch: {
    routeWatcher(val) {
      this.$router.push(val);
    },
  },
};
