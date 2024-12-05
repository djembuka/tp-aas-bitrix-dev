import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { profileStore } from './stores/profile';
import { predefinedStore } from './stores/predefined';
import { filterStore } from './stores/filter';
import { tableStore } from './stores/table';

export class AppealInbox {
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
      name: 'Appeal new change form component',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().userid = self.options.userid || '';
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';

        profileStore().actions = {
          profiles: self.options.profiles || {},
          setDefaultProfile: self.options.setDefaultProfile || {},
        };

        predefinedStore().actions = {
          predefinedFilters: self.options.predefinedFilters || {},
        };

        filterStore().filterCols = self.options.FILTER_COLS || [];
        filterStore().actions = {
          filters: self.options.filters || [],
        };

        tableStore().tableCols = self.options.TABLE_COLS || [];
        tableStore().maxCountPerRequest = self.options.maxCountPerRequest || 50;
        tableStore().actions = {
          columnsNames: self.options.columnsNames || '',
          appeals: self.options.appeals || '',
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
}
