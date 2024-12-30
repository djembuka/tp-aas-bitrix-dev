import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { restoreInfoStore } from '../stores/restore-info.js';

import '../style/restore-info.css';

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
    <div class="vue-auth-sms-restore-info">
      <ButtonComponent :text="lang.AUTH_RESTORE_INFO_BUTTON" :props="['large', 'more']" @clickButton="clickButton" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'info']),
    ...mapState(restoreInfoStore, ['email']),
  },
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setTitle',
      'setError',
    ]),
    clickButton() {
      this.$router.push('/two-cols/sms');
      this.setInfo('');
      this.setError('');
    },
  },
  mounted() {
    this.setTitle(`${this.lang.AUTH_RESTORE_INFO_TITLE} ${this.email}`);
    this.setInfoButton(false);
  },
};
