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
  mounted() {},
};
