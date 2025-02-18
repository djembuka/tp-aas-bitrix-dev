import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { tableStore } from './stores/table';

export class Table {
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
      name: 'Table Application',
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
