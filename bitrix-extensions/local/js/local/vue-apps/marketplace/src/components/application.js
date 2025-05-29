import './application.css';

import { mapState } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  template: `
    <router-view />
	`,
  computed: {
    ...mapState(dataStore, ['sessid', 'signedParameters']),
  },
  mounted() {
    // this.runColumnsNames({
    //   mode: 'class',
    //   data: {
    //     signedParameters: this.signedParameters,
    //     sessid: this.sessid,
    //   },
    // });

    // this.runItems({
    //   mode: 'class',
    //   data: {
    //     signedParameters: this.signedParameters,
    //     sessid: this.sessid,
    //     startIndex: this.items.startIndex || 0,
    //     maxCountPerRequest: this.maxCountPerRequest,
    //   },
    // });
  },
};
