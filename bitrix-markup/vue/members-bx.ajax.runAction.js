window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['filter-table'] = {};
window.twinpx.vue['filter-table'].filters = [
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
                property: 'hint',
                id: 'id1',
                name: 'NUM',
                label: 'Номер вопроса',
                value: '',
                required: false,
                disabled: false,
              },
              {
                property: 'hint',
                id: 'id3',
                name: 'NUM',
                label: 'Номер дела',
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
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
                {
                  id: 2,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
                {
                  id: 3,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
              ];
			break;
			
		case 3:
			result.items = [
				{
                  id: 4,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
                {
                  id: 5,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
                {
                  id: 6,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
                    },
                  ],
                },
              ];
			break;
			
		case 6:
			result.items = [
				{
                  id: 7,
                  new: false,
                  cell: [
                    {
                      id: 1,
                      type: 'notification',
                      value: '<a href=""><b>Оплата членского взноса за 4 квартал 2021</b></a>',
                    },
                    {
                      id: 2,
                      type: 'name',
                      value: 'Абдулгужина Иван Петрович Дуля22006343891',
                    },
                    {
                      id: 3,
                      type: 'question',
                      value: '23',
                    },
                    {
                      id: 4,
                      type: 'case',
                      value: '3654',
                    },
                    {
                      id: 5,
                      type: 'status',
                      value: '<div class="label-orange"><span>Не прочитано</span></div>',
                    },
                    {
                      id: 6,
                      type: 'sent',
                      value: '31.11.2020',
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
                name: 'Уведомление',
                type: 'notification',
              },
              {
                id: 2,
                name: 'Объект',
                type: 'object',
              },
              {
                id: 3,
                name: 'Вопрос',
                type: 'Вопрос',
              },
              {
                id: 4,
                name: 'Дело',
                type: 'case',
              },
              {
                id: 5,
                name: 'Статус',
                type: 'status',
              },
              {
                id: 6,
                name: 'Отправлено',
                type: 'sent',
              },
            ];
			
			
			