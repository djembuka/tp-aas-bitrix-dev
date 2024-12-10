import './application.css';
import { A1 } from './A1.js';

import { MessageInfo } from 'local.vue-components.message-info';
import { ControlTel } from 'local.vue-components.control-tel';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {
      lang: {
        messageInfo:
          'Управление организацией доступно в личном кабинете «Единоличного органа управления» (генерального директора) по данным реестра СРО ААС',
        messageInfoButton: 'Понятно',
      },
      tel: {
        property: 'tel',
        id: 'id0',
        name: 'NUM',
        label: 'Поле с подполем',
        value: '',
        required: false,
        disabled: false,
      },
    };
  },
  components: {
    MessageInfo,
  },
  components: {
    A1,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">
        <h3 class="mt-0">Вход с помощью СМС кода</h3>
        <MessageInfo :message="lang.messageInfo" :button="lang.messageInfoButton" @clickButton="console.log('click button')" />

        <ControlTel :control="tel" @input="input" @focus="focus" @blur="blur" @enter="enter" />
        <ControlCheckbox :control="checkbox" @input="input" @focus="focus" @blur="blur" />
        <A1 />
      </div>
      <div class="vue-auth-sms-right">
        <img src="/markup/pages/auth-sms/auth-sms-ill.png" alt="">
      </div>
      
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'signedParameters']),
  },
  methods: {
    // ...mapActions(tableStore, [
    //   'hideErrorTable',
    //   'runColumnsNames',
    //   'runItems',
    //   'runDefaultSort',
    //   'runSetDefaultSort',
    // ]),
  },
  mounted() {},
};
