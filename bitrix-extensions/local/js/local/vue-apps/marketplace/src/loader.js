import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { dataStore } from './stores/data';

import { Application } from './components/application';
import { Step } from './pages/step';

export class Marketplace {
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
          component: Step,
          alias: '/step'
        },
        {
          path: '/step/:id',
          component: Step,
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run(): void {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'Marketplace Application',
      components: {
        Application
      },
      template: '<Application />',
      beforeMount() {
        dataStore().sessid = self.options.sessid || '';
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
}
