import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import HistoryItem from './historyItem.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { formStore } from '../stores/form';
import { controlsStore } from '../stores/controls';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    ModalYesNo,
    HistoryItem
  },
  // language=Vue
  template: `
  <div class="twpx-form-status-change" :id="id">

    <LoaderCircle :show="loading" />

    <MessageComponent v-if="error" type="error" size="big" :message="error" />

    <ModalYesNo
      :heading="lang.modal.heading"
      :text="lang.modal.text"
      :yes="lang.modal.yes"
      :no="lang.modal.no"
      :stateWatcher="stateWatcher"
      @clickYes="clickYes"
      @clickNo="clickNo"
    />

    <div class="twpx-form-status-change__grid">
      <div class="twpx-form-status-change__form">
        <form action="">
          <div class="twpx-form-status-change__form-wrapper" v-if="!loading">

            <h3>{{ lang.form.heading }}</h3>
            <ControlChoice  v-for="control in controls" :key="control.id" :control="control" @input="input"></ControlChoice>
            <ButtonComponent :text="lang.form.button" :props="buttonProps" @clickButton="clickButton" />

          </div>
        </form>
      </div>

      <div class="twpx-form-status-change__history">

        <h3>{{ lang.history.heading }}</h3>
        <HistoryItem v-for="item in historyItems" :key="item.id" :item="item" />

      </div>
    </div>
  </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'id']),
    ...mapState(formStore, ['loading', 'error', 'historyItems', 'stateWatcher', 'currentStatus']),
    ...mapState(controlsStore, ['controls']),
    buttonProps() {
      const result = new Set();
      result.add('wide');
      result.add('secondary');
      result.add('large');

      if (typeof this.controls === 'object' && this.controls.forEach) {
        this.controls.forEach(c => {
          if (c.required && !c.value) {
            result.add('disabled');
          }

          if (c.property === 'select' && c.value === this.currentStatus) {
            result.add('disabled');
          }
        })
      }
      return [...result];
    }
  },
  methods: {
    ...mapActions(formStore, [
      'runGetForm',
      'runSaveForm',
      'changeStateWatcher',
    ]),
    ...mapActions(controlsStore, ['changeControlValue', 'runHints', 'setHints']),
    input(args) {
      this.changeControlValue(args);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    clickButton() {
      this.changeStateWatcher();
    },
    clickYes() {
      this.runSaveForm();
      this.changeStateWatcher();

      const commentControl = this.controls.find(c => c.property === 'textarea');
      this.changeControlValue({control: commentControl, value: ''});
    },
    clickNo() {
      this.changeStateWatcher();
    }
  },
};
