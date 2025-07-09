import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { formStore } from './stores/form';

export class DisciplinaryCaseForm {
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
      name: 'DisciplinaryCaseForm',
      components: {
        Application,
      },
      template: '<Application/>',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().id = self.options.id || {};
        dataStore().lang = self.options.lang || {};
        dataStore().actions = self.options.actions || [];

        if (self.options.blocks) {
          //markup
          formStore().blocks = self.options.blocks || [];
        } else {
          formStore().runGetForm();
        }
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
