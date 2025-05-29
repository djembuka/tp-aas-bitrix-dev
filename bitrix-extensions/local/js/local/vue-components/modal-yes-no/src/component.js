import './component.css';

import { ButtonComponent } from 'local.vue-components.button-component';
import { IconClose } from './IconClose.js';

export const ModalYesNo = {
  props: {},
  data() {},
  components: {
    IconClose,
    ButtonComponent
  },
  // language=Vue
  template: `
		<div :class="{'twpx-modal-yes-no': true}">
      <div class="twpx-modal-yes-no-body">
        <div class="twpx-modal-yes-no-close">
          <IconClose @click.prevent="close" />
        </div>
        <div class="twpx-modal-yes-no-heading">Подтверждение</div>
        <div class="twpx-modal-yes-no-text">Вы действительно хотите удалить номера телефона?</div>
        <div class="twpx-modal-yes-no-buttons">
          <ButtonComponent text="Нет" :props="['gray-color','large']" @clickButton="" />
          <ButtonComponent text="Да" :props="['secondary','large']" @clickButton="" />
        </div>
      </div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  methods: {
    close() {}
  },
};
