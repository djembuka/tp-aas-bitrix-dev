import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { formStore } from './stores/form';

export class AppealNewChangeForm {
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
      mounted() {
        dataStore().sessionid = self.options.SESSION_ID || '';
        dataStore().signedParameters = self.options.SIGNED_PARAMETERS || '';

        formStore().hidden = self.options.data.hidden;
        formStore().docsBlock = self.options.data.docsBlock;
        formStore().controlsBlock = self.options.data.controlsBlock;
        formStore().confirmDocsBlock = self.options.data.confirmDocsBlock;
        formStore().autosaveTimeoutId = self.options.data.autosaveTimeoutId;
        formStore().autosave = self.options.data.autosave;
        formStore().agreement = self.options.data.agreement;
        formStore().url = self.options.data.url;
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
