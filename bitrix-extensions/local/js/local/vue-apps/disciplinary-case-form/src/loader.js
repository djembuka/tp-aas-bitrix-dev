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

  run(args): void {
    const self = this;
    

    this.#application = BitrixVue.createApp({
      name: 'DisciplinaryCaseForm',
      components: {
        Application,
      },
      template: '<Application/>',
      beforeMount() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().lang = self.options.lang || {};
        dataStore().actions = self.options.actions || [];
        dataStore().modal = self.options.modal || false;
        dataStore().cancelUrl = self.options.cancelUrl || '';
        dataStore().outerMethods = self.options.outerMethods || {};
      },
      mounted() {
        if (args) {
          dataStore().args = args;
        }

        if (dataStore().modal) {
          dataStore().changeModalStateWatcher();
        }

        formStore().runGetForm();
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
