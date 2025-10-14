import { BitrixVue } from 'ui.vue3';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';

import { dataStore } from './stores/data';

import { Application } from './components/application';

import { Registration } from './pages/registration';
import { List } from './pages/list';
import { Voting } from './pages/voting';

export class VotingClient {
  #store;
  #router;
  #rootNode;
  #application;

  constructor(rootNode, options) {
    this.#store = createPinia();
    this.#router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          component: Registration,
          alias: '/state_1'
        },
        {
          path: '/state_2',
          component: List,
        },
        {
          path: '/state_3',
          component: Voting,
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run() {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'VotingClient',
      components: {
        Application,
      },
      template: `
        <Application />
      `,
      beforeMount() {
        if (self.options) {
          dataStore().customData = self.options.data || {};
          dataStore().signedParameters = self.options.signedParameters || '';
        }
      },
    });

    this.#application.use(this.#store);
    this.#application.use(this.#router);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication() {
    setActivePinia(this.#store);
  }

  getFormStore() {
    return formStore;
  }
}
