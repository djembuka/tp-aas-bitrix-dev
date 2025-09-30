import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';

export class VotingScreen {
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
      name: 'VotingScreen',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().customData = self.options.data || {};
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().uuid = self.options.uuid || '';
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication() {
    setActivePinia(this.#store);
  }

  getFormStore() {
    return formStore;
  }
}
