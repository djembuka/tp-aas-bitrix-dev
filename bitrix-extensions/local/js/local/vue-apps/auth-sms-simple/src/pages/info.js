import { mapState } from 'ui.vue3.pinia';
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

      <h3 class="mt-0">{{ heading }}</h3>

      <MessageComponent v-if="info" type="info" :message="info" :button="false" />
      
    </div>
	`,
  computed: {
    ...mapState(infoStore, ['info', 'heading']),
  },
};
