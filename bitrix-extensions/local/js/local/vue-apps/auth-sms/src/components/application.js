import './application.css';
import { A1 } from './A1.js';

// import { TableComponent } from 'local.vue-components.table-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    A1,
  },
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">
        <h3 class="mt-0">Вход с помощью СМС кода</h3>
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
