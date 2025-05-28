import { defineStore } from 'ui.vue3.pinia';

export const formControlsStore = defineStore('form-controls-store', {
  state: () => ({
    controls: [
      {
        property: 'hint',
        id: 'id5',
        name: 'AUDITOR_ORNZ',
        label: 'Simple',
        value: '',
        count: 3,
        action: '/markup/vue/design-system/hints.json',
        required: false,
        disabled: false,
        tab: 1,
      },
      {
        property: 'hint',
        id: 'id5-1',
        name: 'AUDITOR_ORNZ_WITH_PHOTO',
        label: 'With HTML - data-value',
        value: '',
        count: 3,
        action: '/markup/vue/design-system/hints-html.json',
        required: false,
        disabled: false,
      },
      {
        property: 'hint',
        id: 'id5-2',
        name: 'AUDITOR_ORNZ_WITH_PHOTO',
        label: 'Autocomplete',
        value: '',
        count: 3,
        action: '/markup/vue/design-system/hints-autocomplete.json',
        required: false,
        disabled: false,
      },
      {
        id: 'id1',
        property: 'text',
        name: 'SOME_TEXT',
        label: 'Some text',
        value: '',
        multi: 3,
        required: false,
        disabled: false,
      },
      {
        id: 'id1-1',
        property: 'textarea',
        name: 'MESSAGE',
        label: 'Message',
        value: '',
        multi: 3,
        required: false,
        disabled: false,
      },
      {
        id: 'id2',
        property: 'tel',
        name: 'PHONE',
        label: 'Phone number',
        value: '',
        multi: 3,
        required: false,
        disabled: false,
      },
      {
        id: 'id3',
        property: 'email',
        name: 'EMAIL',
        label: 'Your email',
        value: '',
        multi: 3,
        required: false,
        disabled: false,
      },
      {
        id: 'id4',
        property: 'hidden',
        name: 'HIDDEN_FIELD',
        value: '',
        required: false,
        disabled: false,
      },
      {
        property: 'password',
        id: 'id6',
        name: 'PASSWORD',
        label: 'Password',
        value: '',
        required: false,
        disabled: false,
      },
      {
        property: 'date',
        type: 'range',
        id: 'id7',
        label: 'Calendar',
        name: 'DATE_FROM_TO',
        required: true,
        value: ['20.02.2024', '28.02.2024'],
      },
      {
        property: 'date',
        type: 'single',
        id: 'id8',
        label: 'Calendar',
        name: 'DATE',
        required: true,
        value: '28.02.2024',
        hint_external: 'Hint',
        dependency: 'id6',
      },
      {
        property: 'file',
        id: 'id11',
        name: 'FILE_LOGO',
        label: 'Logo',
        value: '',
        file: '',
        hint_external: 'For your site',
        required: true,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        image: true,
        maxsize: 10000000,
      },
      {
        property: 'file',
        type: 'upload',
        id: 'id12',
        name: 'FILE_LOGO_UPLOADED',
        label: 'Upload logo',
        value: null,
        upload: {},
        hint_external: 'For your site',
        required: true,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        image: true,
        maxsize: 10000000,
      },
      {
        property: 'select',
        type: 'dropdown',
        id: 'id13',
        name: 'STATUS',
        label: 'Status',
        options: [
          {
            label: 'molestias',
            code: '23423423423',
          },
          {
            label: 'Farming',
            code: '324234324',
          },
          {
            label: 'Very',
            code: '324234325',
          },
        ],
        value: '',
        disabled: false,
      },
      {
        property: 'select',
        type: 'radio',
        id: 'id9',
        name: 'SELECT_BUTTON_TEXT',
        label: 'Buttons',
        options: [
          {
            label: 'Thin',
            code: '1',
          },
          {
            label: 'Thick',
            code: '2',
          },
          {
            label: 'Uppercase',
            code: '3',
          },
        ],
        value: '2',
      },
      {
        property: 'checkbox',
        type: 'switch',
        id: 'id14',
        name: 'SWITCH',
        required: false,
        label: 'labore',
        value: 'on',
        checked: true,
        disabled: false,
        hint_external: '',
        dependency: 'id6',
      },
      {
        property: 'checkbox',
        type: 'checkbox',
        id: 'id10',
        name: 'DEPENDENCY_CHECKBOX',
        required: false,
        label: 'Checkbox',
        value: 'on',
        checked: true,
        disabled: false,
        hint_external: 'Active checkbox',
      },
    ],
  }),
  actions: {
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'tel':
        case 'email':
        case 'hidden':
        case 'password':
        case 'date':
        case 'textarea':
          control.value = value;
          break;
        case 'hint':
          this.changeHintControlValue({ control, value });
          break;
        case 'select':
          this[
            `changeSelect${control.type
              .substring(0, 1)
              .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
          ]({ control, value });
          break;
        case 'checkbox':
          control.checked = checked;
          break;
        // case 'file':
        //   commit('changeFileValue', { control, value });
        //   break;
        // case 'color':
        //   commit('changeColorValue', { control, value });
        //   break;
      }
    },
    async runHints(control, action) {
      try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const response = await fetch(action, {
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
          console.error('Server returned errors:', result.errors);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching hints:', error);
      }
    },
    setHints(control, value) {
      control.hints = value;
    },
    changeHintControlValue({ control, value }) {
      console.log(value)
      control.value = value;

      if (value.autocomplete && value.autocomplete.forEach) {
        value.autocomplete.forEach((o) => {
          const control = this.controls.find((c) => c.id === o.id);
          if (control) {
            control.value = o.value;
          }
        });
      }
    },
    changeSelectRadioValue({ control, value }) {
      control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
      control.value = value;
    },
    addTab(control) {
      control.tab = control.tab ? ++control.tab : 1;
    },
    setDisabled(control, value) {
      control.disabled = value;
    },
  },
});
