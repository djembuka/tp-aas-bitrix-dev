import './application.css';

import ButtonItem from './button.js';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { buttonsBlockDataStore } from '../stores/data.js';
import { buttonsBlockAppStore } from '../stores/app.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ButtonItem,
    LoaderCircle,
    MessageComponent,
    ModalYesNo
  },
  // language=Vue
  template: `
  <div class="twpx-buttons-block" :id="id">

    <LoaderCircle :show="loading" />

    <MessageComponent v-if="error" type="error" size="big" :message="error" />

    <ModalYesNo
      :heading="modal.heading"
      :text="modal.text"
      :yes="modal.yes"
      :no="modal.no"
      :buttons="modal.buttons"
      :stateWatcher="stateWatcher"
      @clickYes="modal.clickYes"
      @clickNo="modal.clickNo"
    />

    <div class="twpx-buttons-block__wrapper">

      <h3>{{ lang.heading }}</h3>
      <div v-html="lang.text"></div>
      <div class="twpx-buttons-block__buttons">
        <ButtonItem v-for="button in buttons" :key="Math.floor(Math.random()*100)" :button="button" />
      </div>

    </div>
  </div>
	`,
  computed: {
    ...mapState(buttonsBlockDataStore, ['lang', 'id']),
    ...mapState(buttonsBlockAppStore, ['loading', 'error', 'stateWatcher', 'modal', 'buttons'])
  },
  methods: {
    ...mapActions(buttonsBlockAppStore, ['runGetForm']),
    clickYes() {
      this.runSaveForm();
      this.changeStateWatcher();
    },
    clickNo() {
      this.changeStateWatcher();
    }
  },
};
