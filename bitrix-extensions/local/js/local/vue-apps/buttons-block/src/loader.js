import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { buttonsBlockDataStore } from './stores/data';
import { buttonsBlockAppStore } from './stores/app';

export class ButtonsBlock {
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
        buttonsBlockDataStore().data = self.options.data || {};
        buttonsBlockDataStore().lang = self.options.lang || {};

        buttonsBlockAppStore().buttons = self.options.buttons || [];
      },
      mounted() {},
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
