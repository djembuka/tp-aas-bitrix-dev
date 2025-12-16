import { defineStore } from 'ui.vue3.pinia';

export const formControlsMultiStore = defineStore('form-controls-multi-store', {
  state: () => ({
    controls: [
      {
        id: "textMulti1",
        property: "text",
        name: "TEXT_MULTI",
        label: "Текстовое поле",
        value: "",
        multi: 3,
        required: false,
        disabled: false,
        hint_external: "Множественное текстовое поле"
      },
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
        multi: 3,
      },
      {
        property: 'hint',
        id: 'id5-1',
        name: 'AUDITOR_ORNZ_WITH_PHOTO',
        label: 'With HTML - data-value',
        value: [
          {
            "id": "1",
            "value": "First"
          },
          {
            "id": "2",
            "value": "Second"
          }
        ],
        count: 3,
        action: '/markup/vue/design-system/hints-html.json',
        required: false,
        disabled: false,
        multi: 3,
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
        multi: 3,
      },
      {
        id: 'id1',
        property: 'text',
        name: 'SOME_TEXT',
        label: 'Some text',
        value: '',
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        id: 'id1-2',
        property: 'text',
        name: 'SOME_TEXT',
        label: 'Поле text заполнено',
        value: ['one', 'two', 'three'],
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        id: 'id1-1',
        property: 'textarea',
        name: 'MESSAGE',
        label: 'Message',
        value: ['One', 'Two', 'Three'],
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        id: 'id2',
        property: 'tel',
        name: 'PHONE',
        label: 'Phone number',
        value: ['+7 (903) 255-50-50', '+7 (916) 255-52-52'],
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        id: 'id3',
        property: 'email',
        name: 'EMAIL',
        label: 'Your email',
        value: ['he@is.here', 'she@is.here','you@are.here'],
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        property: 'password',
        id: 'id6',
        name: 'PASSWORD',
        label: 'Password',
        value: ['passwordone', 'passwordtwo'],
        required: false,
        disabled: false,
        multi: 3,
      },
      {
        property: 'date',
        type: 'range',
        id: 'id7',
        label: 'Calendar',
        name: 'DATE_FROM_TO',
        required: true,
        value: [["03.06.2025", "11.06.2025"], ["05.06.2025", "21.06.2025"], ["25.06.2025", "26.06.2025"]],
        multi: 3,
      },
      {
        property: 'date',
        type: 'single',
        id: 'id8',
        label: 'Calendar',
        name: 'DATE',
        required: true,
        value: ["03.06.2025", "11.06.2025"],
        hint_external: '',
        dependency: 'id6',
        multi: 3,
      },
      {
        property: 'file',
        id: 'id11',
        name: 'FILE_LOGO',
        label: 'Logo',
        value: ['my-png-file.png', 'your-png-file.png'],
        file: null,
        hint_external: '',
        required: true,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        image: true,
        multi: 5,
        maxsize: 10000000,
      },
      {
        property: 'file',
        type: 'upload',
        id: 'id12',
        name: 'FILE_LOGO_UPLOADED',
        label: 'Upload logo',
        value: ['my-png-file.png', 'your-png-file.png'],
        upload: {},
        hint_external: '',
        required: true,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        image: true,
        maxsize: 10000000,
        multi: 3,
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
        value: [
          'molestias',
          'Farming',
        ],
        disabled: false,
        multi: 3,
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
        value: ['2'],
        multi: 3,
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
        multi: 3,
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
        multi: 3,
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
    createMulti({ parent }) {
      parent.property = 'multi';
      parent.multi = [];
    },
    addMulti({ parent, add }) {
      const randomId = Math.round(Math.random() * 1000);
      const sub = [];

      if (add.sub && add.sub.forEach) {
        add.sub.forEach((s) => {
          s.id = `${s.id}${randomId}`;
          sub.push({ ...s });
        });
        add.sub = sub;
      }

      add.id = `${add.id}${randomId}`;
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
    },
  },
});
