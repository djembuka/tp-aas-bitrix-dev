import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { tableStore } from './stores/table';

export class DisciplinaryCaseTable {
  #store;
  #rootNode;
  #application;

  constructor(rootNode, options) {
    this.#store = createPinia();
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run() {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'Disciplinary Case Table Application',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        tableStore().data = self.options.data || {};
        tableStore().ajax = self.options.actions || {};
        tableStore().view = self.options.view || 'table';
        tableStore().lang = self.options.lang || {};
        tableStore().outerMethods = self.options.outerMethods || {};
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  loadTable() {
    tableStore().loadTable();
  }

  initStorageBeforeStartApplication() {
    setActivePinia(this.#store);
  }

  getTableStore() {
    return tableStore;
  }
}
