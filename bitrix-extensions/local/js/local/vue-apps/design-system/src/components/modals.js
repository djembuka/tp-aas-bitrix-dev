import { ModalYesNo } from 'local.vue-components.modal-yes-no';
import { ButtonComponent } from 'local.vue-components.button-component';


import { mapState } from 'ui.vue3.pinia';
import { modalsStore } from '../stores/modals-store';

export const ModalsComponent = {
  data() {},
  components: {
    ModalYesNo,
    ButtonComponent
  },
  template: `
    <div>
      <div class="twpx-design-system-block">
        <ModalYesNo
          :heading="modal_yes_no.heading"
          :text="modal_yes_no.text"
          :yes="modal_yes_no.yes"
          :no="modal_yes_no.no"
          :stateWatcher="modal_yes_no.stateWatcher"
          @clickYes="modal_yes_no.clickYes"
          @clickNo="modal_yes_no.clickNo"
        />
        <div>
          <ButtonComponent text="Show" :props="['secondary', 'medium']" @clickButton="modal_yes_no.stateWatcher = !modal_yes_no.stateWatcher" />
        </div>
        <pre>{{ getModalYesNoCode(button) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(modalsStore, ['modal_yes_no']),
  },
  methods: {
    getModalYesNoCode() {
      return `ModalYesNo
  :heading="heading"
  :text="text"
  :yes="yes"
  :no="no"
  :stateWatcher="stateWatcher"
  @clickYes="clickYes"
  @clickNo="clickNo"
/`;
    },
  },
};
