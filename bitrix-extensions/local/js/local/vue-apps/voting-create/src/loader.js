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

    this.lang();

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

  lang() {
    if (window.BX) return;

    const votingCreateLang = {
      TWPX_VOTING_CREATE_HEADING: 'Новое голосование',
      TWPX_VOTING_CREATE_EDIT_HEADING: 'Изменить голосование',
      TWPX_VOTING_CREATE_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_CREATE_SEND_BUTTON: 'Создать',
      TWPX_VOTING_CREATE_EDIT_SEND_BUTTON: 'Изменить',

      TWPX_VOTING_CREATE_BLOCK1_HEADING: 'Общие данные',
      TWPX_VOTING_CREATE_NAME_LABEL: 'Название голосования',
      TWPX_VOTING_CREATE_ANNOUNCEMENT_LABEL: 'Текст анонса',
      TWPX_VOTING_CREATE_DESCRIPTION_LABEL: 'Текст подробного описания',

      TWPX_VOTING_CREATE_BLOCK2_HEADING: 'Сроки',
      TWPX_VOTING_CREATE_DATE_FROM_LABEL: 'Дата начала активности',
      TWPX_VOTING_CREATE_DATE_TO_LABEL: 'Дата окончания активности',
      TWPX_VOTING_CREATE_DATE_FINISH_LABEL: 'Дата окончания голосования',

      TWPX_VOTING_CREATE_BLOCK3_HEADING: 'Технические',
      TWPX_VOTING_CREATE_NUM_LABEL: 'Количество попыток',
      TWPX_VOTING_CREATE_VOTERS_NUM_LABEL: 'Количество голосующих',
      TWPX_VOTING_CREATE_BUTTON_LABEL: 'Сообщение у кнопки',
      TWPX_VOTING_CREATE_MESSAGE_LABEL: 'Сообщение после голосования',
      TWPX_VOTING_CREATE_SORT_LABEL: 'Порядок размещения',
      TWPX_VOTING_CREATE_SORT_HINT:
        'Используйте цифры от 1 до N, порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.',

      TWPX_VOTING_CREATE_BLOCK4_HEADING: 'Доступы',
      TWPX_VOTING_CREATE_MEMBERS_ID_LABEL: 'ID групп голосующих',
      TWPX_VOTING_CREATE_MEMBERS_EIO_ID_LABEL: 'ID групп голосующих ЕИО',
      TWPX_VOTING_CREATE_MEMBERS_UMC_ID_LABEL: 'ID групп голосующих УМЦ',
      TWPX_VOTING_CREATE_COMMISSIONS_ID_LABEL:
        'ID групп Избирательных комиссий',

      TWPX_VOTING_CREATE_BLOCK5_HEADING: 'Оформление документов',
      TWPX_VOTING_CREATE_DOC_TITLE_LABEL: 'Заголовок документа',
      TWPX_VOTING_CREATE_DOC_SUBTITLE_LABEL: 'Подзаголовок документа',
    };
    window.BX = window.BX || {};
    window.BX.message = (name) => votingCreateLang[name];
  }
}
