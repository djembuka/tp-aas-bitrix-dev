import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { filterStore } from './stores/filter';

export class Filter {
  #store;
  #rootNode;
  #application;

  constructor(rootNode, options): void {
    this.#store = createPinia();
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run(): void {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'Filter Application',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().userid = self.options.userid || '';

        filterStore().filterCols = self.options.FILTER_COLS || [];
        filterStore().actions = {
          filters: self.options.filters || [],
        };
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication(): void {
    setActivePinia(this.#store);
  }

  getTableStore(): Object {
    return tableStore;
  }
}
