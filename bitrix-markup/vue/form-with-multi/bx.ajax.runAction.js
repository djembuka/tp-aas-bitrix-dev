window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['form-with-multi'] = {};
window.twinpx.vue['form-with-multi'].controls = [
  {
    property: 'text',
    id: 'id0',
    name: 'NUM',
    label: 'Поле с подполем',
    value: '',
    required: false,
    disabled: false,
    sub: [
      {
        property: 'text',
        id: 'id01',
        name: 'NUM',
        label: 'Подполе простое',
        value: '',
        required: false,
        disabled: false,
      },
      {
        property: 'text',
        id: 'id02',
        name: 'NUM',
        label: 'Подполе multi',
        value: '',
        required: false,
        disabled: false,
      },
      {
        property: 'text',
        id: 'id0',
        name: 'NUM',
        label: 'Подполе с подполем',
        value: '',
        required: false,
        disabled: false,
        sub: [
          {
            property: 'text',
            id: 'id01',
            name: 'NUM',
            label: 'Подполе простое',
            value: '',
            required: false,
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    property: 'text',
    id: 'id1',
    name: 'NUM',
    label: 'Номер дела',
    value: '',
    required: false,
    disabled: false,
    multi: 3,
  },
  {
    property: 'select',
    type: 'dropdown',
    id: 'id80',
    name: 'STATUS',
    label: 'Статус',
    options: [
      {
        label:
          'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
        code: '23423423423',
      },
      {
        label: 'Сельское хозяйство',
        code: '324234324',
      },
      {
        label:
          'Очень длинный пункт меню, который можно добавить к радио кнопке с переносом строки',
        code: '324234325',
      },
    ],
    value: '',
    disabled: false,
    multi: 3,
  },
  {
    property: 'date',
    type: 'single',
    id: 'id45',
    label: 'Календарь',
    name: 'DATE',
    required: true,
    value: '28.02.2024',
    multi: 3,
  },
  {
    property: 'date',
    type: 'range',
    id: 'id45',
    label: 'Календарь',
    name: 'DATE',
    required: true,
    value: ['20.02.2024', '28.02.2024'],
  },
];
