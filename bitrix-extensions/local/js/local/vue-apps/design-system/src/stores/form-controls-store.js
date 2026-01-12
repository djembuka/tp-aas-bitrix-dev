import { defineStore } from 'ui.vue3.pinia';

export const formControlsStore = defineStore('form-controls-store', {
  state: () => ({
    controls: [
      {
        property: 'num',
        id: 'id51',
        name: 'NUMBER',
        label: 'Number',
        value: '123,54',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'time',
        type: 'single',
        id: 'id50',
        name: 'TIME',
        label: 'Time single',
        value: '11:00',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'hint',
        id: 'id5',
        name: 'AUDITOR_ORNZ',
        label: 'Simple',
        value: {
          id: '1',
          value: 'First',
        },
        count: 3,
        action: '/markup/vue/design-system/hints.json',
        required: false,
        disabled: false,
        tab: 1,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'hint',
        id: 'id5-1',
        name: 'AUDITOR_ORNZ_WITH_PHOTO',
        label: 'With HTML - data-value',
        value: {
          id: '2',
          value:
            "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
        },
        count: 3,
        action: '/markup/vue/design-system/hints-html.json',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'hint',
        id: 'id5-2',
        name: 'AUDITOR_ORNZ_WITH_PHOTO',
        label: 'Autocomplete',
        value: {
          id: '3',
          value:
            "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
          autocomplete: [
            {
              id: 'id1',
              value: 'Семён Семёнович',
            },
            {
              id: 'id1-1',
              value: 'ООО Ответственные аудиторы',
            },
            {
              id: 'id2',
              value: '+7 812 488 85 54',
            },
          ],
        },
        count: 3,
        action: '/markup/vue/design-system/hints-autocomplete.json',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'hint',
        id: 'id5-3',
        name: 'AUDITOR_ORNZ_WITH_HIDDEN',
        label: 'With hidden data',
        value: {
          id: '3',
          value:
            "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
          hidden: [
            {
              name: 'HIDDEN7',
              value: 'fff',
            },
            {
              name: 'HIDDEN8',
              value: 'uu',
            },
            {
              name: 'HIDDEN9',
              value: '0',
            },
          ],
        },
        count: 3,
        action: '/markup/vue/design-system/hints-hidden.json',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        id: 'id4',
        property: 'hidden',
        name: 'HIDDEN_FIELD',
        value: '',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'password',
        id: 'id6',
        name: 'PASSWORD',
        label: 'Password',
        value: '',
        required: false,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'date',
        type: 'range',
        id: 'id7',
        label: 'Calendar',
        name: 'DATE_FROM_TO',
        required: true,
        value: ['20.02.2024', '28.02.2024'],
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'date',
        type: 'single',
        id: 'id8',
        label: 'Calendar',
        name: 'DATE',
        required: true,
        value: '28.02.2024',
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
        dependency: 'id6',
      },
      {
        property: 'datetime',
        type: 'single',
        id: 'id8-1',
        label: 'Calendar & time',
        name: 'DATETIME',
        required: true,
        value: '28.02.2024 18:00',
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
        dependency: 'id6',
      },
      {
        property: 'file',
        id: 'id11',
        name: 'FILE_LOGO',
        label: 'Logo',
        value: '',
        file: '',
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
        required: true,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        image: true,
        maxsize: 10000000,
        action: '/markup/upload.php'
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'select',
        type: 'multi',
        id: 'id9-1',
        name: 'SELECT_BUTTON_TEXT',
        label: 'Multiselect',
        options: [
          {
            label: 'Experience working with foreign structures',
            code: '1',
          },
          {
            label: 'Part of international networks',
            code: '2',
          },
          {
            label: 'Access to state secrets',
            code: '3',
          },
        ],
        value: ['2'],
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
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
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'checkbox',
        id: 'id15',
        name: 'SIMPLE_CHECKBOX',
        required: false,
        label: 'Checkbox',
        value: 'on',
        checked: true,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
      {
        property: 'checkbox',
        type: 'block',
        id: 'id16',
        name: 'CHECKBOX_BLOCK',
        required: false,
        label: 'Checkbox block',
        value: 'on',
        checked: true,
        disabled: false,
        hint_external:
          'Обсуждаем проекты международных стандартов и документов',
      },
    ],
  }),
  actions: {
    addTab(control) {
      control.tab = control.tab ? ++control.tab : 1;
    },
    setDisabled(control, value) {
      control.disabled = value;
    },
    checkRequired(control) {
      if (!control.required) {
        control.required = true;
      } else {
        if (!control.label.includes('*')) {
          control.label = `${control.label} *`;
        } else {
          control.required = false;
          // remove *
          const index = control.label.indexOf('*');
          control.label = control.label.substring(0, index).trim();
        }
      }
    },
  },
});
