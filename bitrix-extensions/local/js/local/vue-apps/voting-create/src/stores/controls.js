import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    blocks: [
      {
        id: 1,
        heading: window.BX.message('TWPX_VOTING_CREATE_BLOCK1_HEADING'),
        controls: [
          {
            property: 'text',
            id: 'votingCreate11',
            name: 'NAME',
            label: window.BX.message('TWPX_VOTING_CREATE_NAME_LABEL'),
            value: '',
            required: true,
          },
          {
            property: 'textarea',
            id: 'votingCreate12',
            name: 'ANNOUNCEMENT',
            label: window.BX.message('TWPX_VOTING_CREATE_ANNOUNCEMENT_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'textarea',
            id: 'votingCreate13',
            name: 'DESCRIPTION',
            label: window.BX.message('TWPX_VOTING_CREATE_DESCRIPTION_LABEL'),
            value: '',
            required: false,
          },
        ],
      },
      {
        id: 2,
        heading: window.BX.message('TWPX_VOTING_CREATE_BLOCK2_HEADING'),
        controls: [
          {
            property: 'datetime',
            type: 'single',
            id: 'votingCreate21',
            name: 'DATE_FROM',
            label: window.BX.message('TWPX_VOTING_CREATE_DATE_FROM_LABEL'),
            value: '',
            required: true,
          },
          {
            property: 'datetime',
            type: 'single',
            id: 'votingCreate22',
            name: 'DATE_TO',
            label: window.BX.message('TWPX_VOTING_CREATE_DATE_TO_LABEL'),
            value: '',
            required: true,
          },
          {
            property: 'datetime',
            type: 'single',
            id: 'votingCreate23',
            name: 'DATE_FINISH',
            label: window.BX.message('TWPX_VOTING_CREATE_DATE_FINISH_LABEL'),
            value: '',
            required: true,
          },
        ],
      },
      {
        id: 3,
        heading: window.BX.message('TWPX_VOTING_CREATE_BLOCK3_HEADING'),
        controls: [
          {
            property: 'num',
            id: 'votingCreate31',
            name: 'NUM',
            label: window.BX.message('TWPX_VOTING_CREATE_NUM_LABEL'),
            value: '1',
            required: true,
          },
          {
            property: 'num',
            id: 'votingCreate32',
            name: 'VOTERS_NUM',
            label: window.BX.message('TWPX_VOTING_CREATE_VOTERS_NUM_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'text',
            id: 'votingCreate33',
            name: 'BUTTON',
            label: window.BX.message('TWPX_VOTING_CREATE_BUTTON_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'textarea',
            id: 'votingCreate34',
            name: 'MESSAGE',
            label: window.BX.message('TWPX_VOTING_CREATE_MESSAGE_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'num',
            id: 'votingCreate35',
            name: 'SORT',
            label: window.BX.message('TWPX_VOTING_CREATE_SORT_LABEL'),
            value: '',
            required: true,
            hint_external: window.BX.message('TWPX_VOTING_CREATE_SORT_HINT'),
          },
        ],
      },
      {
        id: 4,
        heading: window.BX.message('TWPX_VOTING_CREATE_BLOCK4_HEADING'),
        controls: [
          {
            property: 'text',
            id: 'votingCreate41',
            name: 'MEMBERS_ID',
            label: window.BX.message('TWPX_VOTING_CREATE_MEMBERS_ID_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'text',
            id: 'votingCreate42',
            name: 'MEMBERS_EIO_ID',
            label: window.BX.message('TWPX_VOTING_CREATE_MEMBERS_EIO_ID_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'text',
            id: 'votingCreate43',
            name: 'MEMBERS_UMC_ID',
            label: window.BX.message('TWPX_VOTING_CREATE_MEMBERS_UMC_ID_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'text',
            id: 'votingCreate44',
            name: 'COMMISSIONS_ID',
            label: window.BX.message('TWPX_VOTING_CREATE_COMMISSIONS_ID_LABEL'),
            value: '',
            required: false,
          },
        ],
      },
      {
        id: 5,
        heading: window.BX.message('TWPX_VOTING_CREATE_BLOCK5_HEADING'),
        controls: [
          {
            property: 'text',
            id: 'votingCreate51',
            name: 'DOC_TITLE',
            label: window.BX.message('TWPX_VOTING_CREATE_DOC_TITLE_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'textarea',
            id: 'votingCreate52',
            name: 'DOC_SUBTITLE',
            label: window.BX.message('TWPX_VOTING_CREATE_DOC_SUBTITLE_LABEL'),
            value: '',
            required: false,
          },
        ],
      },
    ],
  }),
  actions: {
    changeBlocks(blocks) {
      this.blocks = blocks;
    },
    changeTextControlValue({ control, value }) {
      control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
      control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
      control.value = value;
    },
    changeDateValue({ control, value }) {
      control.value = value;
    },
    changeFileValue({ control, value }) {
      control.value = value;
      if (control.type === 'upload') {
        this.uploadFile(control, value);
      }
    },
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
        case 'tel':
        case 'email':
        case 'num':
          this.changeTextControlValue({ control, value });
          break;
        case 'select':
          this[
            `changeSelect${control.type
              .substring(0, 1)
              .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
          ]({ control, value });
          break;
        case 'file':
          this.changeFileValue({ control, value });
          break;
        case 'date':
        case 'datetime':
          this.changeDateValue({ control, value });
          break;
      }
    },
    async runHints(control, action) {
      const url = new URL(action, window.location.origin);
      url.searchParams.append('s', control.value);

      try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'success' && result.data) {
          this.setHints(control, result.data);
        } else if (result.errors) {
          this.error = result.errors[0]?.message;
        } else {
          this.error = 'Invalid response format';
        }
      } catch (error) {
        this.error = error?.message;
      }
    },
    setHints(control, value) {
      control.hints = value;
    },
  },
});
