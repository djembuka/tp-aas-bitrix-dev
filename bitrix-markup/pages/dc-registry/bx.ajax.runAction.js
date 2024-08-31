window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['filter-table'] = {};
window.twinpx.vue['filter-table'].filters = [
              {
                property: 'hint',
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
                label: 'Статус проверки',
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
              {
                property: 'date',
                id: 'id4',
                name: 'DATE',
                label: 'Дата создания',
                value: '',
                required: false,
                disabled: false,
              },
            ];

window.twinpx.vue['filter-table'].setDefaultSort = {
              columnSort: 2,
              sortType: 0,
            };
			
window.twinpx.vue['filter-table'].defaultSort = {
              columnSort: 2,
              sortType: 0,
            };
			
window.twinpx.vue['filter-table'].items = (startIndex) => {
	let result = {
		resultCount: 7,
		startIndex,
		excelLink: false,
	};
	switch(startIndex) {
		case 0:
			result.items = [
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
                    },
                  ],
                },
              ];
			break;
			
		case 3:
			result.items = [
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
                    },
                  ],
                },
              ];
			break;
			
		case 6:
			result.items = [
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
                      type: 'object',
                      value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: 'Несоблюдение требования о численности аудиторов в коллегиальном исполнительном органе аудиторской организации',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value:
                        '<div class="label-orange"><span>Идет</span></div>',
                    },
                  ],
                },
              ];
			break;
			
	};
	
	return result;
};
			
window.twinpx.vue['filter-table'].columnsNames = [
              {
                id: 1,
                name: 'Дата создания',
                type: 'date',
              },
              {
                id: 2,
                name: 'Номер дела',
                type: 'num',
              },
              {
                id: 3,
                name: 'Объект',
                type: 'object',
              },
              {
                id: 4,
                name: 'Нарушение',
                type: 'case',
              },
              {
                id: 5,
                name: 'Статус',
                type: 'status',
              },
            ];
			
			
			