import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';

export class VotingList {
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
      name: 'VotingList',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().customData = self.options.data || {};
        dataStore().signedParameters = self.options.signedParameters || '';

        dataStore().votingCreateURL = self.options.votingCreateURL || '';
        dataStore().votingDetailURL = self.options.votingDetailURL || '';
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication() {
    setActivePinia(this.#store);
  }

  getTableStore() {
    return tableStore;
  }
}
