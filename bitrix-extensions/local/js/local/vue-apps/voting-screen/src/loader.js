import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';

import { V1 } from './pages/v1';
import { V2 } from './pages/v2';
import { V3 } from './pages/v3';
import { V4 } from './pages/v4';
import { V5 } from './pages/v5';
import { V6 } from './pages/v6';

export class VotingScreen {
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
          component: V1,
          alias: '/voting_v1'
        },
        {
          path: '/voting_v2',
          component: V2
        },
        {
          path: '/voting_v3',
          component: V3
        },
        {
          path: '/voting_v4',
          component: V4
        },
        {
          path: '/voting_v5',
          component: V5
        },
        {
          path: '/voting_v6',
          component: V6
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run() {
    this.#application = BitrixVue.createApp({
      name: 'VotingScreen',
      components: {
        Application,
      },
      template: '<Application />',
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
