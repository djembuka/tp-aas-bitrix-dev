import './application.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {},
  // language=Vue

  template: `
    <div>
      Form
    </div>
	`,
  computed: {
    ...mapState(dataStore, []),
  },
  methods: {
    ...mapActions(dataStore, []),
  },
  mounted() {},
};
