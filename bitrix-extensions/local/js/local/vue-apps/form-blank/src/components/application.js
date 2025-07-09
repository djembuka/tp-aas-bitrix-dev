import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    ModalYesNo
  },
  // language=Vue
  template: `
  <div class="disciplinary-case-form" :id="'id' + id">

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

    <div v-if="!loading">
      <form action="" v-if="blocks.length">
        <div class="disciplinary-case-form__wrapper">

            <h2>{{ lang.heading }}</h2>

            <div class="disciplinary-case-form__block" v-for="block in blocks">
              <h3>{{ block.heading }}</h3>
              <ControlChoice  v-for="control in block.controls" :key="control.id" :control="control" @input="input" @hints="hints"></ControlChoice>
            </div>

            <div class="disciplinary-case-form__buttons">
              <ButtonComponent :text="lang.cancelButton" :props="['gray-color', 'large']" @clickButton="clickCancelButton" />
              <ButtonComponent :text="lang.createButton" :props="['secondary', 'large']" @clickButton="clickCreateButton" />
            </div>

        </div>
      </form>
      <div v-else v-html="lang.nodata"></div>
    </div>
  </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'id']),
    ...mapState(formStore, ['loading', 'error', 'blocks', 'runHints', 'setHints', 'stateWatcher']),
    // error() {
    //   return this.errorTable || this.errorFilter;
    // },
  },
  methods: {
    ...mapActions(formStore, [
      'runGetForm',
      'changeControlValue',
      'changeStateWatcher',
      'sendForm'
    ]),
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
    clickCancelButton() {},
    clickCreateButton() {
      this.changeStateWatcher();
    },
    clickYes() {
      this.sendForm()
      this.changeStateWatcher();
    },
    clickNo() {
      this.changeStateWatcher();
    }
  },
};
