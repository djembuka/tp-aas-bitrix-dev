import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';

import { dataStore } from './stores/data';
import { smsStore } from './stores/sms';
import { codeStore } from './stores/code';

import { TwoCols } from './layouts/two-cols';
import { Sms } from './pages/sms';
import { Code } from './pages/code';

import './style/auth-sms.css';

export class AuthSMSSimple {
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
      name: 'Authorization for non auditors',
      components: {
        Application,
      },
      template: '<router-view />',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';

        dataStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH');

        dataStore().info = self.options.infoMessage || '';
        dataStore().infoMessage = self.options.infoMessage || '';

        smsStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_SMS_LABEL_TEL'
        );
        smsStore().controls[1].label = self.options.checkboxLabel || '';
        smsStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_SMS');

        codeStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_CODE');

        //query
        const urlQuery = self.parseQuery(window.location.search);

        if (urlQuery.type) {
          switch (urlQuery.type) {
            case 'sms':
              dataStore().state = 'sms';
              this.$router.push('/two-cols/sms');
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
