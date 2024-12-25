import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';

import { dataStore } from './stores/data';
import { smsStore } from './stores/sms';
import { ornzStore } from './stores/ornz';
import { codeStore } from './stores/code';
import { restoreStore } from './stores/restore';
import { changePasswordStore } from './stores/change-password';

import { TwoCols } from './layouts/two-cols';
import { CenterCol } from './layouts/center-col';
import { Sms } from './pages/sms';
import { Code } from './pages/code';
import { Ornz } from './pages/ornz';
import { Restore } from './pages/restore';
import { RestoreInfo } from './pages/restore-info';
import { ChangePassword } from './pages/change-password';
import { ChangePasswordInfo } from './pages/change-password-info';

import './style/auth-sms.css';

export class AuthSMS {
  #store;
  #router;
  #rootNode;
  #application;

  constructor(rootNode, options): void {
    this.#store = createPinia();
    this.#router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          component: TwoCols,
          children: [
            {
              path: '/',
              component: Sms,
            },
          ],
        },
        {
          path: '/two-cols',
          component: TwoCols,
          children: [
            {
              path: 'sms',
              component: Sms,
            },
            {
              path: 'code',
              component: Code,
            },
            {
              path: 'ornz',
              component: Ornz,
            },
          ],
        },
        {
          path: '/center-col',
          component: CenterCol,
          children: [
            {
              path: 'restore',
              component: Restore,
            },
            {
              path: 'restore-info',
              component: RestoreInfo,
            },
            {
              path: 'change-password',
              component: ChangePassword,
            },
            {
              path: 'change-password-info',
              component: ChangePasswordInfo,
            },
          ],
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run(): void {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'Authentication',
      components: {
        Application,
      },
      template: '<router-view />',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().templateFolder = self.options.templateFolder || '';
        dataStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH');
        dataStore().info = self.options.infoMessage || '';
        dataStore().infoMessageDefault = self.options.infoMessage || '';

        smsStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_SMS_LABEL_TEL'
        );
        smsStore().controls[1].label = self.options.checkboxLabel || '';
        smsStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_SMS');

        ornzStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_ORNZ_LABEL_ORNZ'
        );
        ornzStore().controls[1].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_ORNZ_LABEL_PASSWORD'
        );
        ornzStore().controls[2].label = self.options.checkboxLabel || '';

        codeStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_CODE');

        restoreStore().lang = BitrixVue.getFilteredPhrases(
          this,
          'AUTH_RESTORE'
        );
        restoreStore().info = self.options.restoreInfoMessage || '';
        restoreStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_RESTORE_LABEL_ORNZ'
        );

        changePasswordStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_CHANGE_PASSWORD_LABEL_NEW_PASSWORD'
        );
        changePasswordStore().controls[1].label = this.$Bitrix.Loc.getMessage(
          'AUTH_CHANGE_PASSWORD_LABEL_REPEAT'
        );

        //query
        const urlQuery = self.parseQuery(window.location.search);

        if (urlQuery.type) {
          switch (urlQuery.type) {
            case 'sms':
              dataStore().state = 'sms';
              this.$router.push('/two-cols/sms');
              break;
            case 'ornz':
              dataStore().state = 'ornz';
              this.$router.push('/two-cols/ornz');
              break;
            case 'restore':
              this.$router.push('/center-col/restore');
              break;
            case 'change_password':
              this.$router.push('/center-col/change-password');
              break;
            case 'change_password_info':
              this.$router.push('/center-col/change-password-info');
              break;
          }
        }
      },
    });

    this.#application.use(this.#store);
    this.#application.use(this.#router);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication(): void {
    setActivePinia(this.#store);
  }

  getTableStore(): Object {
    return tableStore;
  }

  getQuery(queryObject) {
    var result = [];
    for (var k in queryObject) {
      result.push(k + '=' + queryObject[k]);
    }
    return '?' + result.join('&');
  }

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
  }
}
