window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;

window.twinpx.vue['filter'] = {};

window.twinpx.vue['filter'].filters = [
  {
    property: 'text',
    id: 'id1',
    name: 'NUM',
    label: 'Номер дела',
    value: '',
    required: false,
    disabled: false,
  },
  {
    property: 'hint',
    id: 'id2',
    name: 'OBJECT',
    label: 'Объект',
    value: '',
    count: 3,
    action: 'twinpx:ornz-hint',
    required: false,
    disabled: false,
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
  },
  /*{
    property: 'date',
    type: 'single',
    id: 'id45',
    label: 'Календарь',
    name: 'DATE',
    required: true,
    value: '28.02.2024',
  },*/
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

window.twinpx.vue['filter'].hints = [
  {
    id: 1,
    value: '456132123',
  },
  {
    id: 2,
    value: '7984564654',
  },
  {
    id: 3,
    value: '45678979',
  },
  {
    id: 4,
    value: '12345679',
  },
  {
    id: 5,
    value: '45648974645',
  },
];
