import '../css/application.css';

import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';

import { CompanyCard } from './companyCard.js';
import { PublishPanel } from './publishPanel.js';
import { EditForm } from './edit-form.js';


import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    LoaderCircle,
    MessageComponent,
    ModalAnyContent,

    CompanyCard,
    PublishPanel,
    EditForm
  },
  // language=Vue
  template: `
    <div class="twpx-marketplace-form">
      <div v-if="loading" class="twpx-marketplace-form__loader">
        <LoaderCircle :show="loading" />
      </div>

      <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

      <div class="twpx-marketplace-form__wrapper" v-else>

        <CompanyCard :name="name" :company="company" @change="showChangeModal" />

        <PublishPanel
          :activity="panelActivity"
          :disabled="panelDisabled"
          :loading="pLoading"
          :lang="lang"
          @publish="publish"
        />

      </div>

      <ModalAnyContent :stateWatcher="editModalStateWatcher" @onClose="onEditModalClose">

        <div class="twpx-poll-detail__loader" v-if="editModalLoading">
          <LoaderCircle :show="editModalLoading" />
        </div>

        <MessageComponent v-else-if="editModalError" type="error" size="big" :message="editModalError" />

        <EditForm v-else
          :controls="editModalControls"
          :lang="lang"
          @input="input"
          @hints="hints"
          @cancel="clickEditFormCancel"
          @send="clickEditFormSend"
        />

      </ModalAnyContent>

    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'customData',
      'signedParameters',
      'actions',
      'lang',
      'ornz',
      'code',

      'loading',
      'pLoading',
      'error',

      'companyTemplate',
      'companyGroups',

      'editModalStateWatcher',
      'editModalLoading',
      'editModalError',
      'editModalControls'
    ]),
    name() {
      return this.companyTemplate.find(prop => prop.name === 'UF_NAME')?.value;
    },
    company() {
      return this.companyGroups.map(g => {
        g.props = this.companyTemplate.filter(prop => prop.groupid === g.id);
        g.props.sort((a, b) => a.sort - b.sort);
        return g;
      })
    },
    panelActivity() {
      return this.companyTemplate.find(prop => prop.name === 'UF_ACTIVE');
    },
    panelDisabled() {
      return this.companyTemplate.some(prop => prop.property === 'checkbox' ? prop.required && !prop.checked : prop.required && !prop.value);
    }
  },
  methods: {
    ...mapActions(dataStore, [
      'runBitrixMethod',
      'changeProp',
    ]),
    ...mapActions(controlsStore, [
      'changeControlValue',
      'runHints',
      'setHints'
    ]),
    showChangeModal() {
      const controls = this.companyGroups.map(g => {
          g.controls = this.companyTemplate.filter(prop => prop.groupid === g.id);
          g.controls.sort((a, b) => a.sort - b.sort);
          g.controls.forEach(c => 
            c.value = ['text', 'hidden', 'textarea', 'num', 'checkbox'].some(property => c.property === property)
            ? String(c.value)
            : c.value);
          return g;
      });
      this.changeProp('editModalControls', controls);
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    clickEditFormCancel() {
      this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
    },
    async clickEditFormSend() {
      await this.sendForm();
      if (!this.editModalError) {
        this.changeProp('editModalStateWatcher', !this.editModalStateWatcher);
      }
    },
    onEditModalClose() {
      this.changeProp('editModalLoading', false);
      this.changeProp('editModalError', '');
    },
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
    async sendForm() {
      this.changeProp('editModalLoading', true);
      try {
        const fields = [];
        this.editModalControls.forEach(group => {
          group.controls.forEach(c => {
            const data = c.property === 'checkbox' ? c.checked : c.value;
            fields.push({
              id: c.id,
              name: c.name,
              value: data
            });
          });
        });

        await this.runBitrixMethod('saveForm', {fields});
        const data = await this.runBitrixMethod('formTemplate', {ornz: this.ornz, code: this.code});

        this.changeProp('companyTemplate', data.data);
        this.changeProp('editModalLoading', false);
      } catch(error) {
          this.changeProp('editModalLoading', false);
          this.changeProp('editModalError', error.errors[0].message);
      }
    },
    async getFormInitial() {
      this.changeProp('loading', true)
      try {
        const [template, groups] = await Promise.all([
          this.runBitrixMethod('formTemplate', {ornz: this.ornz, code: this.code}),
          this.runBitrixMethod('formGroups', {ornz: this.ornz, code: this.code}),
        ]);

        this.changeProp('companyTemplate', template.data);
        this.changeProp('companyGroups', groups.data);

        this.changeProp('loading', false)
      } catch(error) {
          this.changeProp('loading', false)
          this.changeProp('error', error.errors[0].message)
      }
    },
    async publish({value}) {
      this.changeProp('pLoading', true);
      try {
        await this.runBitrixMethod('stateForm', {ornz: this.ornz, code: this.code, state: value ? '1' : '0'});
        const data = await this.runBitrixMethod('formTemplate', {ornz: this.ornz, code: this.code});

        this.changeProp('companyTemplate', data.data);
        this.changeProp('pLoading', false);
      } catch(error) {
          this.changeProp('pLoading', false);
          this.changeProp('error', error.errors[0].message);
      }
    }
  },
  mounted() {
    this.getFormInitial();
  }
};
