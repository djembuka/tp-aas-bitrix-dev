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
          profiles: {
            component: 'twinpx:journal.vue',
            method: 'profiles',
          },
          setDefaultProfile: {
            component: 'twinpx:journal.vue',
            method: 'setDefaultProfile',
          },
        };

        predefinedStore().actions = {
          predefinedFilters: {
            component: 'twinpx:journal.vue',
            method: 'predefinedFilters',
          },
          exportFile: {
            component: 'twinpx:journal.vue',
            method: 'exportFile',
          },
        };

        filterStore().filterCols = ['1', '2', '2', '2'];
        filterStore().actions = {
          filters: {
            component: 'twinpx:journal.vue',
            method: 'filters',
          },
        };

        tableStore().tableCols = ['auto', '20%', '20%', '20%', '100px'];
        tableStore().maxCountPerRequest = self.options.maxCountPerRequest || 50;
        tableStore().actions = {
          columnsNames: {
            component: 'twinpx:journal.vue',
            method: 'columnsNames',
          },
          appeals: {
            component: 'twinpx:journal.vue',
            method: 'appeals',
          },
          defaultSort: {
            component: 'twinpx:journal.vue',
            method: 'defaultSort',
          },
          setDefaultSort: {
            component: 'twinpx:journal.vue',
            method: 'setDefaultSort',
          },
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
