import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { dataStore } from './stores/data';
import { resultStore } from './stores/result';

import { Application } from './components/application';
import { Step } from './pages/step';
import { Result } from './pages/result';

export class Marketplace {
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
          component: Step,
          alias: '/step'
        },
        {
          path: '/step/:id',
          component: Step,
        },
        {
          path: '/result',
          component: Result,
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run() {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'Marketplace Application',
      components: {
        Application
      },
      template: '<Application />',
      beforeMount() {
        dataStore().customData = self.options.data || {};
        dataStore().signedParameters = self.options.signedParameters || '';

        dataStore().lang = self.options.lang || {};
        dataStore().actions = self.options.actions || [];

        resultStore().maxCountPerRequest = self.options.maxCountPerRequest || 3;
      },
    });

    this.#application.use(this.#store);
    this.#application.use(this.#router);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication() {
    setActivePinia(this.#store);
  }

  getTableStore() {
    return tableStore;
  }
}
