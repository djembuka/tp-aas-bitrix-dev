import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { filterStore } from './stores/filter';
import { tableStore } from './stores/table';

export class FilterTable {
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
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';

        tableStore().tableCols = self.options.TABLE_COLS || [];
        tableStore().maxCountPerRequest =
          self.options.maxCountPerRequest || 100;
        tableStore().actions = {
          columnsNames: self.options.columnsNames || '',
          items: self.options.items || '',
          defaultSort: self.options.defaultSort || '',
          setDefaultSort: self.options.setDefaultSort || '',
        };

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
