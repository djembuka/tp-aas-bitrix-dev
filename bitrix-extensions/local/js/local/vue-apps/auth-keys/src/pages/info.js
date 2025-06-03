import { mapState } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { infoStore } from '../stores/info.js';

import '../style/info.css';

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
    <div class="auth-keys-info">

      <h2 v-if="lang.heading">{{ lang.heading }}</h2>

      <MessageComponent v-if="lang.html" type="info" :message="lang.html" :button="false" />
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher','error']),
    ...mapState(infoStore, ['lang']),
  },
  watch: {
    routeWatcher(val) {
      this.$router.push(val);
    },
  },
};
