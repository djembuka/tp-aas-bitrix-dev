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
      heading="Подтверждение"
      :text="getModalText()"
      yes="Да"
      no="Нет"
      :stateWatcher="modalStateWatcher"
      @clickYes="clickYes"
      @clickNo="clickNo"
    />
  
    <h3>{{ lang.heading }}</h3>

    <div v-html="lang.html"></div>

    <MessageComponent v-if="error" type="error" :message="error" />

    <div class="vue-auth-sms-sms">

      <div class="vue-auth-sms-sms__tel">
        <ControlComponent :control="controls[0]" />
        <div class="vue-auth-sms-sms__buttons">
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
      'deleteProps'
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
        return 'Вы действительно хотите изменить номер телефона?'
      } else if (this.clickType === 'delete') {
        return 'Вы действительно хотите удалить номер телефона?'
      }
    }
  },
  mounted() {},
};
