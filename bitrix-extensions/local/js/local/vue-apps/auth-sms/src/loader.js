import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';

import { dataStore } from './stores/data';
import { smsStore } from './stores/sms';
import { ornzStore } from './stores/ornz';
import { codeStore } from './stores/code';
import { restoreStore } from './stores/restore';

import { TwoCols } from './layouts/two-cols';
import { CenterCol } from './layouts/center-col';
import { Sms } from './pages/sms';
import { Code } from './pages/code';
import { Ornz } from './pages/ornz';
import { Restore } from './pages/restore';
import { RestoreInfo } from './pages/restore-info';
import { NewPassword } from './pages/new-password';

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
              path: 'new-password',
              component: NewPassword,
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
      name: 'Table Application',
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

        const urlQuery = self.parseQuery(window.location.search);
        if (urlQuery.type && urlQuery.type === 'ornz') {
          dataStore().state = 'ornz';
        }
        restoreStore().lang = BitrixVue.getFilteredPhrases(
          this,
          'AUTH_RESTORE'
        );
        restoreStore().info = self.options.restoreInfoMessage || '';
        restoreStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_RESTORE_LABEL_ORNZ'
        );
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
