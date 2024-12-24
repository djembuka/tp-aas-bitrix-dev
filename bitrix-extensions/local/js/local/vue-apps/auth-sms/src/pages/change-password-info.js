import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { ButtonComponent } from 'local.vue-components.button-component';

export const ChangePasswordInfo = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-restore" style="text-align: center;">
      <ButtonComponent :text="lang.AUTH_SMS_CODE_ALT_BUTTON" :props="['large', 'primary']" @clickButton="clickButton" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
  },
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setTitle',
      'setError',
      'setQuery',
    ]),
    clickButton() {
      this.$router.push('/two-cols/ornz');
    },
  },
  mounted() {
    this.setTitle(this.lang[`AUTH_CHANGE_PASSWORD_TITLE`]);
    this.setInfoButton(false);
    this.setError('');

    this.setQuery({ type: 'change_password_info' });
  },
};
