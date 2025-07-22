import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { formStore } from './stores/form';

export class FormStatusChange {
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
      beforeMount() {
        dataStore().data = self.options.data || {};
        dataStore().lang = self.options.lang || {};
        dataStore().actions = self.options.actions || [];
      },
      mounted() {
        formStore().runGetForm();
        formStore().runGetHistory();
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
