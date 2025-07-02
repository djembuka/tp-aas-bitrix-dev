import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { DocComponent } from 'local.vue-components.doc-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { formStore } from '../stores/form';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    DocComponent,
    ModalYesNo,
    ButtonComponent,
    LoaderCircle
  },
  // language=Vue
  template: `
    <LoaderCircle :show="loading" />

    <ModalYesNo
      :heading="lang.modalHeading"
      :text="modal.text"
      :yes="lang.modalYes"
      :no="lang.modalNo"
      :stateWatcher="modal.stateWatcher"
      :buttons="{
        yes: {
          props: ['danger', 'large']
        },
        no: {
          props: ['gray-color', 'large']
        }
      }"
      @clickYes="clickYes"
      @clickNo="clickNo"
    />

    <div class="vue-fadd">

      <div class="vue-fadd-docs-block" v-if="docs && docs.length">
        <h3 v-if="lang.docsHeading">{{ lang.docsHeading }}</h3>
        <div class="vue-fadd-docs">
          <DocComponent v-for="doc in docs" :doc="doc" :key="doc.id" @clickDelete="clickDelete(doc)" />
        </div>
      </div>

      <form action method>
        <div class="vue-fadd-add-form">
          <div class="vue-fadd-add-form__h4" v-if="lang.formHeading">{{ lang.formHeading }}</div>
          <div v-html="lang.formText"></div>
          <div class="vue-fadd-control">
            <ControlChoice :control="formControl" @input="input" />
            <div class="vue-fadd-note" v-html="lang.formNote"></div>
          </div>
          <ButtonComponent :text="lang.formButton" :props="formButtonProps" @clickButton="submitForm" />
        </div>
      </form>

    </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang']),
    ...mapState(formStore, ['loading', 'docs', 'formControl', 'modal', 'changeControlValue']),
    formButtonProps() {
      return this.formControl.file ? ['secondary', 'large'] : ['secondary', 'large', 'disabled'];
    }
  },
  methods: {
    ...mapActions(formStore, [
      'clearFormControl',
      'runGetFiles',
      'runRemoveFile',
      'runUploadFile',
      'changeModalStateWatcher',
      'changeModalText',
      'changeActiveDoc'
    ]),
    input(args) {
      this.changeControlValue(args);
    },
    clickDelete(doc) {
      // show modal
      this.changeModalStateWatcher();
      this.changeModalText(doc);
      this.changeActiveDoc(doc);
    },
    clickYes() {
      this.runRemoveFile();
      // hide modal
      this.changeModalStateWatcher();
    },
    clickNo() {
      // hide modal
      this.changeModalStateWatcher();
    },
    submitForm() {
      this.runUploadFile();
      this.clearFormControl();
    },
  },
  mounted() {},
};
