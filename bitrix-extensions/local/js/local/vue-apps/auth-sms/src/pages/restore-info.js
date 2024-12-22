import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreStore } from '../stores/restore.js';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const RestoreInfo = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div>
      <ButtonComponent :text="lang.AUTH_RESTORE_INFO_BUTTON" :props="['large', 'more']" @clickButton="$router.push('/two-cols/sms')" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'info']),
  },
};
