import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { changePasswordStore } from '../stores/change-password.js';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const ChangePassword = {
  data() {
    return {
      checkword: '',
      login: '',
    };
  },
  components: {
    ControlComponent,
    ButtonComponent,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms-restore">
      <div v-for="control in controls" :key="control.id">
        <ControlComponent :control="control" @input="input" />
        <hr />
      </div>
      <ButtonComponent :text="lang.AUTH_CHANGE_PASSWORD_BUTTON" :props="Object.keys(submitProps)" :disabled="buttonDisabled" @clickButton="clickButton" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'error']),
    ...mapState(changePasswordStore, [
      'controls',
      'submitProps',
      'buttonDisabled',
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'setInfo',
      'setInfoButton',
      'setTitle',
      'setError',
    ]),
    ...mapActions(changePasswordStore, ['runChange', 'input']),
    clickButton() {
      this.runChange({ login: this.login, checkword: this.checkword });
    },
    parseQuery(queryString) {
      var query = {};
      var pairs = [];
      if (queryString) {
        pairs = (
          queryString[0] === '?' ? queryString.substr(1) : queryString
        ).split('&');
      }
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    },
  },
  mounted() {
    this.setTitle(this.lang[`AUTH_CHANGE_PASSWORD_TITLE`]);
    this.setInfo(this.lang['AUTH_CHANGE_PASSWORD_MESSAGE']);
    this.setInfoButton(false);
    this.setError('');

    //login checkword
    const queryObject = this.parseQuery(window.location.search);
    this.login = queryObject.USER_LOGIN;
    this.checkword = queryObject.USER_CHECKWORD;
  },
};
