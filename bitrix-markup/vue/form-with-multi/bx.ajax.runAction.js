window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['form-with-multi'] = {};
window.twinpx.vue['form-with-multi'].controls = [
  {
    property: 'file',
    type: 'upload',
    id: 'id_upload_logo',
    name: 'FILE_LOGO',
    label: 'Файл с подписью',
    value: null,
    upload: {},
    required: true,
    disabled: false,
    accept: ['svg', 'png', 'jpg', 'jpeg'],
    image: true,
    maxsize: 10000000,
    multi: 3,
    sub: [
      {
        property: 'file',
        type: 'upload',
        id: 'id01',
        name: 'SIG',
        label: 'SIG-файл',
        value: null,
        multi: 3,
        upload: {},
        required: false,
        disabled: false,
        accept: ['svg', 'png', 'jpg', 'jpeg'],
        maxsize: 10000000,
        multi: 3,
      },
    ],
  },
  // {
  //   property: 'file',
  //   id: 'id_logo',
  //   name: 'FILE_LOGO',
  //   label: 'Логотип без загрузки на сервер',
  //   value: null,
  //   hint_external: 'Этот логотип будет отображаться на вашем сайте.',
  //   required: true,
  //   disabled: false,
  //   accept: ['svg', 'png', 'jpg', 'jpeg'],
  //   image: true,
  //   maxsize: 10000000,
  // },
  // {
  //   property: 'text',
  //   id: 'id0',
  //   name: 'NUM',
  //   label: 'Поле с подполем',
  //   value: '',
  //   required: false,
  //   disabled: false,
  //   multi: 3,
  // },
  // {
  //   property: 'text',
  //   id: 'id1',
  //   name: 'NUM',
  //   label: 'Номер дела',
  //   value: '',
  //   required: false,
  //   disabled: false,
  //   multi: 3,
  // },
  // {
  //   property: 'select',
  //   type: 'dropdown',
  //   id: 'id80',
  //   name: 'STATUS',
  //   label: 'Статус',
  //   options: [
  //     {
  //       label:
  //         'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
  //       code: '23423423423',
  //     },
  //     {
  //       label: 'Сельское хозяйство',
  //       code: '324234324',
  //     },
  //     {
  //       label:
  //         'Очень длинный пункт меню, который можно добавить к радио кнопке с переносом строки',
  //       code: '324234325',
  //     },
  //   ],
  //   value: '',
  //   disabled: false,
  //   multi: 3,
  // },
  // {
  //   property: 'date',
  //   type: 'single',
  //   id: 'id45',
  //   label: 'Календарь',
  //   name: 'DATE',
  //   required: true,
  //   value: '28.02.2024',
  //   multi: 3,
  // },
  // {
  //   property: 'date',
  //   type: 'range',
  //   id: 'id45',
  //   label: 'Календарь',
  //   name: 'DATE',
  //   required: true,
  //   value: ['20.02.2024', '28.02.2024'],
  // },
];
