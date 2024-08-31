window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['filter-table'] = {};
window.twinpx.vue['filter-table'].filters = [
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
                    label: 'Все',
                    code: '23423423423',
                  },
                  {
                    label: 'Ожидает расссмотрения',
                    code: '324234324',
                  },
                  {
                    label: 'Отклоненные',
                    code: '324234325',
                  },
                  {
                    label: 'В работе',
                    code: '324234325',
                  },
                  {
                    label: 'Выполненные',
                    code: '324234325',
                  },
                ],
                value: '23423423423',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
                      value: '18 сентября 2024<br>12:50',
                    },
                    {
                      id: 2,
                      type: 'num',
                      value: '64',
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
			
	};
	
	return result;
};
						
window.twinpx.vue['filter-table'].columnsNames = [
              {
                id: 1,
                name: 'Дата',
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
			
			
			