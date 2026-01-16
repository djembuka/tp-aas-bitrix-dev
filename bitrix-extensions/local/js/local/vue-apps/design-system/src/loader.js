import { BitrixVue } from 'ui.vue3';
import { createRouter, createMemoryHistory } from 'ui.vue3.router';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';

import { Application } from './components/application';
import { FormControls } from './pages/form-controls';
import { SelectDependency } from './pages/select-dependency';
import { FormControlsMulti } from './pages/form-controls-multi';
import { Buttons } from './pages/buttons';
import { Filter } from './pages/filter';
import { Modals } from './pages/modals';
import { Docs } from './pages/docs';
import { Loaders } from './pages/loaders';
import { Messages } from './pages/messages';
import { CopyBlock } from './pages/copy-block';

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
          component: FormControls,
        },
        {
          path: '/controls/:property',
          component: FormControls,
        },
        {
          path: '/select-dependency',
          component: SelectDependency,
        },
        {
          path: '/buttons',
          component: Buttons,
        },
        {
          path: '/filter',
          component: Filter,
        },
        {
          path: '/modals',
          component: Modals,
        },
        {
          path: '/docs',
          component: Docs,
        },
        {
          path: '/loaders',
          component: Loaders,
        },
        {
          path: '/messages',
          component: Messages,
        },
        {
          path: '/copy-block',
          component: CopyBlock,
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
