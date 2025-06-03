import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { editStore } from '../stores/edit.js';

import '../style/edit.css';

import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

export const Edit = {
  data() {
    return {
      modalStateWatcher: true,
      clickType: ''
    };
  },
  components: {
    ControlComponent,
    ButtonComponent,
    MessageComponent,
    ModalYesNo
  },
  // language=Vue
  template: `

    <ModalYesNo
      :heading="lang.modalHeading"
      :text="getModalText()"
      :yes="lang.modalButtonYes"
      :no="lang.modalButtonNo"
      :stateWatcher="modalStateWatcher"
      @clickYes="clickYes"
      @clickNo="clickNo"
    />
  
    <h2 v-if="lang.heading">{{ lang.heading }}</h2>

    <div v-if="lang.html" v-html="lang.html"></div>

    <MessageComponent v-if="error" type="error" :message="error" />

    <div class="auth-keys-edit">

      <div class="auth-keys-edit__tel">
        <ControlComponent :control="controls[0]" />
        <div class="auth-keys-edit__buttons">
          <ButtonComponent :text="lang.button" :props="Object.keys(editProps)" @clickButton="clickEdit" />
          <ButtonComponent text="Delete" :props="Object.keys(deleteProps)" @clickButton="clickDelete" />
        </div>
      </div>

    </div>
	`,
  computed: {
    ...mapState(dataStore, ['routeWatcher','error']),
    ...mapState(editStore, [
      'lang',
      'controls',
      'editProps',
      'deleteProps',
      'setLabels'
    ]),
  },
  watch: {
    routeWatcher(val) {
      this.$router.push(val);
    },
  },
  methods: {
    ...mapActions(dataStore, ['setError']),
    ...mapActions(editStore, ['edit','delete']),
    clickEdit() {
      this.clickType = 'edit';
      this.modalStateWatcher = !this.modalStateWatcher
    },
    clickDelete() {
      this.clickType = 'delete';
      this.modalStateWatcher = !this.modalStateWatcher
    },
    clickYes() {
      if (this.clickType === 'edit') {
        this.edit();
      } else if (this.clickType === 'delete') {
        this.delete();
      }

      this.modalStateWatcher = !this.modalStateWatcher
    },
    clickNo() {
      this.modalStateWatcher = !this.modalStateWatcher
    },
    getModalText() {
      if (this.clickType === 'edit') {
        return this.lang.modalHtmlEdit;
      } else if (this.clickType === 'delete') {
        return this.lang.modalHtmlDelete;
      }
    }
  },
  mounted() {
    this.setLabels();
  },
};
