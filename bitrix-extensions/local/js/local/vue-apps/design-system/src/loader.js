import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';
import { FormControls } from './pages/form-controls';
import { Buttons } from './pages/buttons';
import { Filter } from './pages/filter';

export class DesignSystem {
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
          // component: Buttons,
          component: FormControls,
        },
        {
          path: '/buttons',
          component: Buttons,
        },
        {
          path: '/filter',
          component: Filter,
        },
      ],
    });
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run(): void {
    this.#application = BitrixVue.createApp({
      name: 'Design System Application',
      components: {
        Application,
      },
      template: '<Application />',
      mounted() {},
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
