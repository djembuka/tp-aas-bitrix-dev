window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['table'] = {};

window.twinpx.vue['table']['twinpx:items'] = (startIndex) => {
  let result = {
    resultCount: 3,
    startIndex,
    excelLink: false,
  };
  switch (startIndex) {
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
              value: '18 июля 2024<br>18:00',
            },
            {
              id: 2,
              type: 'number',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'question',
              value: '560',
            },
            {
              id: 6,
              type: 'status',
              value: '<span class="label-orange"><span>Идет</span></span>',
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
              value: '18 июля 2024<br>18:00',
            },
            {
              id: 2,
              type: 'number',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'question',
              value: '560',
            },
            {
              id: 6,
              type: 'status',
              value: '<span class="label-orange"><span>Идет</span></span>',
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
              value: '18 июля 2024<br>18:00',
            },
            {
              id: 2,
              type: 'number',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'question',
              value: '560',
            },
            {
              id: 6,
              type: 'status',
              value: '<span class="label-orange"><span>Идет</span></span>',
            },
          ],
        },
        {
          id: 4,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'date',
              value: '18 июля 2024<br>18:00',
            },
            {
              id: 2,
              type: 'number',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'question',
              value: '560',
            },
            {
              id: 6,
              type: 'status',
              value: '<span class="label-orange"><span>Идет</span></span>',
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
              value: '18 июля 2024<br>18:00',
            },
            {
              id: 2,
              type: 'number',
              value: '150',
            },
            {
              id: 3,
              type: 'type',
              value: 'Очное заседание',
            },
            {
              id: 4,
              type: 'question',
              value: '560',
            },
            {
              id: 6,
              type: 'status',
              value: '<span class="label-orange"><span>Идет</span></span>',
            },
          ],
        },
      ];
      break;
  }

  return result;
};

window.twinpx.vue['table']['twinpx:columnsNames'] = [
  {
    id: 1,
    name: 'Дата',
    type: 'date',
  },
  {
    id: 2,
    name: 'Номер заседания',
    type: 'number',
  },
  {
    id: 3,
    name: 'Тип',
    type: 'type',
  },
  {
    id: 4,
    name: 'Номер вопроса',
    type: 'question',
  },
  {
    id: 6,
    name: 'Статус',
    type: 'status',
  },
];
	
			