import './application.css';

import { ModalAnyContent } from 'local.vue-components.modal-any-content';
import Form from './form.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    ModalAnyContent,
    Form
  },
  // language=Vue
  template: `
    <ModalAnyContent :stateWatcher="modalStateWatcher" :opacoClose="false" v-if="modal">
      <Form />
    </ModalAnyContent>

    <Form v-else />
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'modalStateWatcher', 'modal']),
  },
  methods: {},
};
