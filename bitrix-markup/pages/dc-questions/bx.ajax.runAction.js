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
    label: 'Номер заседания',
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
    property: 'date',
    type: 'range',
    id: 'id45',
    label: 'Дата создания',
    name: 'DATE',
    required: true,
    value: ['20.02.2024', '28.02.2024'],
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
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
              value: '18 сентября 2024<br>12:50',
            },
            {
              id: 2,
              type: 'num',
              value: '64',
            },
            {
              id: 3,
              type: 'num',
              value: '150',
            },
            {
              id: 4,
              type: 'object',
              value: 'АО «Аудиторская компания «Самоварова и Партнеры»<br>ОРНЗ 11606065198',
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
    name: 'Номер вопроса',
    type: 'num',
  },
  {
    id: 3,
    name: 'Номер заседания',
    type: 'num',
  },
  {
    id: 4,
    name: 'Объект ДП',
    type: 'object',
  },
  {
    id: 5,
    name: 'Статус',
    type: 'status',
  },
];

			
			