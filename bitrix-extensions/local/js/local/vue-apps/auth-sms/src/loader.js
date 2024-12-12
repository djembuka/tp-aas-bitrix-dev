import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { dataStore } from './stores/data';
import { smsStore } from './stores/sms';
import { ornzStore } from './stores/ornz';
import { codeStore } from './stores/code';

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

        smsStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_SMS_LABEL_TEL'
        );
        smsStore().controls[1].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_SMS_LABEL_CHECKBOX'
        );
        smsStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_SMS');

        ornzStore().controls[0].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_ORNZ_LABEL_ORNZ'
        );
        ornzStore().controls[1].label = this.$Bitrix.Loc.getMessage(
          'AUTH_SMS_ORNZ_LABEL_PASSWORD'
        );

        codeStore().lang = BitrixVue.getFilteredPhrases(this, 'AUTH_SMS_CODE');
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
