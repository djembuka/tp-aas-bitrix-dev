import '../css/application.css';
import Loader from './loader.js';

import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { CardComponent } from './card.js';

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
    ModalYesNo,

    CardComponent,
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

      <div v-else :class="{'disciplinary-case-table-wrapper': true, 'disciplinary-case-table-wrapper--card': view==='card'}">

        <MessageComponent v-if="errorTable" type="error" size="big" :message="errorTable" />

        <div v-if="view==='card'">
          <div class="dc-action-cards" v-if="items.items && items.items.length">
            <CardComponent v-for="card in items.items"
              :key="card.id"
              :card="card"
              @clickButton="clickButton"
            />
          </div>
        </div>

        <div v-else>
          <StickyScroll>
            <TableComponent
              :columnsNames="columnsNames"
              :cols="cols"
              :items="items"
              @clickButton="clickButton"
            />
          </StickyScroll>
        </div>

        <ButtonComponent v-if="showButtons" :text="lang.addButton" :props="['success', 'small']" @clickButton="clickAddButton" />

      </div>
    </div>
	`,
  computed: {
    ...mapState(tableStore, [
      'lang',
      'outerMethods',
      'data',
      'view',
      'cols',
      'loadingTable',
      'columnsNames',
      'items',
      'errorTable',
      'deleteModalStateWatcher',
      'showButtons',
    ]),
    error() {
      return this.errorTable;
    },
  },
  methods: {
    ...mapActions(tableStore, [
      'loadTable',
      'deleteItem',
      'changeDeleteModalStateWatcher',
      'changeActiveItemId',
    ]),
    clickButton({ itemId, code }) {
      if (
        code === 'edit' &&
        this.outerMethods.editForm &&
        window[this.outerMethods.editForm[0]]
      ) {
        window[this.outerMethods.editForm[0]][this.outerMethods.editForm[1]]({
          ...this.data,
          item_id: itemId,
        });
      } else if (code === 'delete') {
        this.changeDeleteModalStateWatcher();
        this.changeActiveItemId(itemId);
      }
    },
    clickAddButton() {
      if (this.outerMethods.addForm && window[this.outerMethods.addForm[0]]) {
        window[this.outerMethods.addForm[0]][this.outerMethods.addForm[1]]({
          ...this.data,
        });
      }
    },
    clickYes() {
      this.deleteItem();
      this.changeDeleteModalStateWatcher();
    },
    clickNo() {
      this.changeDeleteModalStateWatcher();
    },
  },
  mounted() {
    this.loadTable();
  },
};
