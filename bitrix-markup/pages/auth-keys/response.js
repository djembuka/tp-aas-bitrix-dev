window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['appeal-inbox'] = {};
window.twinpx.vue['appeal-inbox']['profiles'] = [
	{
		"id": 0,
		"name": "\u041e\u0431\u0449\u0438\u0439",
		"default": true,
		"newAppealsCount": 205,
		"excelExportSupport": false
	},
	{
		"id": 27,
		"name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
		"default": false,
		"newAppealsCount": 1452,
		"excelExportSupport": true
	},
	{
		"id": 28,
		"name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
		"default": false,
		"newAppealsCount": 1452,
		"excelExportSupport": true
	},
	{
		"id": 29,
		"name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
		"default": false,
		"newAppealsCount": 1452,
		"excelExportSupport": false
	},
	{
		"id": 21,
		"name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
		"default": false,
		"newAppealsCount": 1452,
		"excelExportSupport": true
	},
	{
		"id": 22,
		"name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
		"default": false,
		"newAppealsCount": 1452,
		"excelExportSupport": false
	}
];
window.twinpx.vue['appeal-inbox']['setDefaultProfile'] = 27;
window.twinpx.vue['appeal-inbox']['predefinedFilters'] = {
	"predefinedFiltersTitle": "Техническая поддержка",
	"fields": [
		{
			"id": "ORDER",
			"name": "Номер",
			"value": "798",
			"selectable": true
		},
		{
			"id": "U_NAME",
			"name": "Автор",
			"value": "2",
			"selectable": true
		},
		{
			"id": "STATE",
			"name": "Статус",
			"value": "0",
			"selectable": true
		},
		{
			"id": "FORM",
			"name": "Форма",
			"value": "89",
			"selectable": true
		},
		{
			"id": "ACTIVE_FROM",
			"name": "Дата",
			"value": "5",
			"selectable": false
		}
	]
};
window.twinpx.vue['appeal-inbox'].filters = [
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
window.twinpx.vue['appeal-inbox'].setDefaultSort = {
  columnSort: 2,
  sortType: 0,
};
window.twinpx.vue['appeal-inbox'].defaultSort = {
  columnSort: 2,
  sortType: 0,
};
window.twinpx.vue['appeal-inbox'].appeals = (startIndex) => {
  let result = {
    resultCount: 10,
    startIndex,
    excelLink: false,
  };
  switch (startIndex) {
    case 0:
      result.appeals = [
        {
          id: 1,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '1 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 2,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '2 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 3,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '3 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
      ];
      break;

    case 3:
      result.appeals = [
        {
          id: 4,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '4 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 5,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '5 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 6,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '6 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
      ];
      break;

    case 6:
      result.appeals = [
        {
          id: 7,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '7 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 8,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '8 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
        {
          id: 9,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '9 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
      ];
      break;

    case 9:
      result.appeals = [
        {
          id: 10,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '10 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'questions',
              value: '86',
            },
            {
              id: 5,
              type: 'status',
              value: '<div class="label-orange"><span>Идет</span></div>',
            },
          ],
        },
      ];
      break;
  }

  return result;
};

window.twinpx.vue['appeal-inbox'].columnsNames = [
  {
    id: 1,
    name: 'Дата создания',
    type: 'date',
  },
  {
    id: 2,
    name: 'Номер заседания',
    type: 'num',
  },
  {
    id: 3,
    name: 'Тип',
    type: 'type',
  },
  {
    id: 4,
    name: 'Вопросов',
    type: 'questions',
  },
  {
    id: 5,
    name: 'Статус',
    type: 'status',
  },
];
