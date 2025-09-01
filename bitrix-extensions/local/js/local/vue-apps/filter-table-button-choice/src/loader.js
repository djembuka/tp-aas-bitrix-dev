import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { filterStore } from './stores/filter';
import { tableStore } from './stores/table';

export class FilterTableButtonChoice {
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
      name: 'Filter Table Application',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().customData = self.options.data || {};
        dataStore().signedParameters = self.options.signedParameters || '';

        tableStore().maxCountPerRequest = self.options.maxCountPerRequest || 100;
        tableStore().actions = {
          columnsNames: self.options.columnsNames || '',
          items: self.options.items || '',
          defaultSort: self.options.defaultSort || '',
          setDefaultSort: self.options.setDefaultSort || '',
        };
        tableStore().contentLoadingMode = self.options.contentLoadingMode || 'pagination'; //"loadMore", "infiniteScroll"

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
