import './application.css';
import Loader from './loader.js';

import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { tableStore } from '../stores/table';

export const Application = {
  data() {
    return {};
  },
  components: {
    Loader,
    TableComponent,
    StickyScroll,
    MessageComponent,
    ButtonComponent,
    ModalYesNo
  },
  // language=Vue

  template: `
    <div>
      <ModalYesNo
        :heading="lang.deleteModal.heading"
        :text="lang.deleteModal.text"
        :yes="lang.deleteModal.yes"
        :no="lang.deleteModal.no"
        :buttons="{
					yes: {
					  props: ['danger', 'large']
					},
					no: {
					  props: ['gray-color', 'large']
					}
				}"
        :stateWatcher="deleteModalStateWatcher"
        @clickYes="clickYes"
        @clickNo="clickNo"
      />

      <Loader v-if="loadingTable" />

      <div v-else class="disciplinary-case-table-wrapper">

        <MessageComponent v-if="errorTable" type="error" size="big" :message="errorTable" />

        <StickyScroll>
          <TableComponent :columnsNames="columnsNames" :cols="cols" :items="items" @clickButton="clickButton" />
        </StickyScroll>

        <ButtonComponent :text="lang.addButton" :props="['success', 'small']" @clickButton="clickAddButton" />

      </div>
    </div>
	`,
  computed: {
    ...mapState(tableStore, [
      'lang', 'constructor', 'data',
      'cols',
      'loadingTable',
      'columnsNames',
      'items',
      'errorTable',
      'deleteModalStateWatcher'
    ]),
    error() {
      return this.errorTable;
    },
  },
  methods: {
    ...mapActions(tableStore, [ 'loadTable', 'deleteItem', 'changeDeleteModalStateWatcher', 'changeActiveItemId' ]),
    clickButton({itemId, code}) {
      if (code === 'edit' && this.constructor.editForm && window[this.constructor.editForm[0]]) {
        window[this.constructor.editForm[0]][this.constructor.editForm[1]]({ ...this.data, item_id: itemId });
      } else if (code === 'delete') {
        this.changeDeleteModalStateWatcher();
        this.changeActiveItemId(itemId);
      }
    },
    clickAddButton() {
      if (this.constructor.addForm && window[this.constructor.addForm[0]]) {
        window[this.constructor.addForm[0]][this.constructor.addForm[1]]({ ...this.data });
      }
    },
    clickYes() {
      this.deleteItem();
      this.changeDeleteModalStateWatcher();
    },
    clickNo() {
      this.changeDeleteModalStateWatcher();
    }
  },
  mounted() {
    this.loadTable();
  },
};
