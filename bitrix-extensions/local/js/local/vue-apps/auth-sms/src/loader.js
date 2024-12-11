import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { smsStore } from './stores/sms';

export class AuthSMS {
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
      name: 'Table Application',
      components: {
        Application,
      },
      template: '<Application/>',
      mounted() {
        dataStore().sessid = self.options.sessid || '';
        dataStore().signedParameters = self.options.signedParameters || '';
        dataStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS');

        smsStore().tel.label = this.$Bitrix.Loc.getMessage('AUTH_SMS_A1_TEL');
        smsStore().checkbox.label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_A1_CHECKBOX'
        );
        smsStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_A1');
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);
  }

  initStorageBeforeStartApplication(): void {
    setActivePinia(this.#store);
  }

  getTableStore(): Object {
    return tableStore;
  }
}
