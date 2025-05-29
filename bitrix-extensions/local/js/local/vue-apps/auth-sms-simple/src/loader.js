import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';

import { dataStore } from './stores/data';
import { authStore } from './stores/auth';
import { codeStore } from './stores/code';
import { editStore } from './stores/edit';
import { infoStore } from './stores/info';

import { Auth } from './pages/auth';
import { Code } from './pages/code';
import { Edit } from './pages/edit';
import { Info } from './pages/info';

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
          component: Auth,
          alias: '/auth'
        },
        {
          path: '/code',
          component: Code,
        },
        {
          path: '/edit',
          component: Edit,
        },
        {
          path: '/info',
          component: Info,
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
      template: '<Application />',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().heading =
          self.options.heading ||
          this.$Bitrix.Loc.getMessage('AUTH_SMS_SIMPLE_TITLE') ||
          '';
        dataStore().text =
          self.options.text ||
          this.$Bitrix.Loc.getMessage('AUTH_SMS_SIMPLE_TEXT') ||
          '';

        dataStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH');
        dataStore().tel = self.options.tel || '';

        authStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_SMS_LABEL_TEL'
        );
        authStore().controls[0].value = self.options.tel || '';
        authStore().controls[1].label = self.options.checkboxLabel || '';
        authStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_SMS');

        codeStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_CODE');

        infoStore().heading =
          self.options.heading ||
          this.$Bitrix.Loc.getMessage('AUTH_SMS_SIMPLE_INFO_TITLE') ||
          '';

        // routing
        if (self.options.tel) {
          this.$router.push('/edit')
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
