import { ModalYesNo } from 'local.vue-components.modal-yes-no';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';
import { ButtonComponent } from 'local.vue-components.button-component';
import { DocComponent } from 'local.vue-components.doc-component';
import { ControlComponent } from 'local.vue-components.control-component';

import { mapState } from 'ui.vue3.pinia';
import { modalsStore } from '../stores/modals-store';

export const ModalsComponent = {
  data() {},
  components: {
    ModalYesNo,
    ModalAnyContent,
    ButtonComponent,
    DocComponent,
    ControlComponent
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

      <div class="twpx-design-system-block">
        <ModalAnyContent :stateWatcher="modal_any_content.stateWatcher">
          <DocComponent :doc='{
            "id": 123,
            "href": "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
            "size": 654000,
            "date": "15 января 2020",
            "author": "Азарянц Ашот Александрович",
            "icon": "/template/images/pdf.svg",
            "remove": true
          }' @clickDelete.prevent="alert('delete')" />
          <ButtonComponent text="Success" :props="['success','large']" @clickButton="" />
          <ControlComponent :control='{
            "property": "select",
            "type": "dropdown",
            "id": "id13",
            "name": "STATUS",
            "label": "Status",
            "options": [
              {
                "label": "molestias",
                "code": "23423423423"
              },
              {
                "label": "Farming",
                "code": "324234324"
              },
              {
                "label": "Very",
                "code": "324234325"
              }
            ],
            "value": "",
            "disabled": false,
            "hint_external": "Обсуждаем проекты международных стандартов и документов"
          }' />
        </ModalAnyContent>
        <div>
          <ButtonComponent text="Show" :props="['secondary', 'medium']" @clickButton="modal_any_content.stateWatcher = !modal_any_content.stateWatcher" />
        </div>
        <pre>{{ getModalAnyContentCode(button) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(modalsStore, ['modal_yes_no', 'modal_any_content']),
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
    getModalAnyContentCode() {
      return `ModalAnyContent :stateWatcher="modal_any_content.stateWatcher"
  Some text
/ModalAnyContent`;
    },
  },
};
