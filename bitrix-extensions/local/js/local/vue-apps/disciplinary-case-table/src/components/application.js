import './application.css';
import Loader from './loader.js';

import { TableComponent } from 'local.vue-components.table-component';
import { StickyScroll } from 'local.vue-components.sticky-scroll';
import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
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
    ButtonComponent
  },
  // language=Vue

  template: `
    <div>
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
    ...mapState(dataStore, ['lang']),
    ...mapState(tableStore, [
      'cols',
      'loadingTable',
      'columnsNames',
      'items',
      'errorTable',
      'clickButton'
    ]),
    error() {
      return this.errorTable;
    },
  },
  methods: {
    ...mapActions(tableStore, [ 'loadTable' ]),
    clickAddButton() {
      console.log('click add button')
    }
  },
  mounted() {
    this.loadTable();
  },
};
