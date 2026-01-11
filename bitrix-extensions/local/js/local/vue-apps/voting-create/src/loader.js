import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';

export class VotingCreate {
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
      name: 'VotingCreate',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().customData = self.options.data || {};
        dataStore().signedParameters = self.options.signedParameters || '';
        if (self.options.actions) {
          dataStore().actions = self.options.actions;
        }
        dataStore().votingDetailURL = self.options.votingDetailURL || '';
        dataStore().voting = self.options.voting || {};
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication(): void {
    setActivePinia(this.#store);
  }

  getFormStore(): Object {
    return formStore;
  }
}
