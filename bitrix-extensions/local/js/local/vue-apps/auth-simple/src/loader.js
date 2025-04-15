import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { dataStore } from './stores/data';
import { telStore } from './stores/tel';
import { codeStore } from './stores/code';
import { changeDeleteStore } from './stores/change-delete';

import { Tel } from './pages/tel';
import { Code } from './pages/code';
import { ChangeDelete } from './pages/change-delete';

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
          component: Tel,
        },
        {
          path: '/code',
          component: Code,
        },
        {
          path: '/change-delete',
          component: ChangeDelete,
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
      components: {},
      template: '<router-view />',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().templateFolder = self.options.templateFolder || '';
        dataStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH');
        dataStore().info = self.options.infoMessage || '';
        dataStore().infoMessage = self.options.infoMessage || '';

        telStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SIMPLE_TEL_LABEL'
        );
        telStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SIMPLE_TEL');

        codeStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SIMPLE_CODE_LABEL'
        );
        codeStore().lang = BitrixVue.getFilteredPhrases(
          this,
          'AUTH_SIMPLE_CODE'
        );

        changeDeleteStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SIMPLE_CHANGE_DELETE_LABEL'
        );
        changeDeleteStore().lang = BitrixVue.getFilteredPhrases(
          this,
          'AUTH_SIMPLE_CHANGE'
        );

        //query
        const urlQuery = self.parseQuery(window.location.search);

        if (urlQuery.type) {
          switch (urlQuery.type) {
            case 'tel':
              dataStore().state = 'tel';
              this.$router.push('/tel');
              break;
            case 'code':
              dataStore().state = 'code';
              this.$router.push('/code');
              break;
            case 'change_delete':
              dataStore().state = 'change-delete';
              this.$router.push('/change-delete');
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
