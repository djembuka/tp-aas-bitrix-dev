window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['table'] = {};

window.twinpx.vue['table']['twinpx:items:violations'] = (startIndex) => {
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
              type: 'name',
              value:
                'Несоблюдение требования о запрете заниматься иными видами предпринимательской деятельности, кроме аудиторской деятельности и прочих связанных с аудиторской деятельностью услуг',
            },
            {
              id: 2,
              type: 'added',
              value: '19.01.2022',
            },
            {
              id: 3,
              type: 'basement',
              value: 'Жалоба',
            },
            {
              id: 4,
              type: 'author',
              value: 'Петрушина Татьяна Сергеевна',
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
              type: 'name',
              value:
                'Неучастие аудитора в осуществлении аудиторской деятельности (неосуществление индивидуальным аудитором аудиторской деятельности) в течении двух последовательных календарных лет',
            },
            {
              id: 2,
              type: 'added',
              value: '22.03.2024',
            },
            {
              id: 3,
              type: 'basement',
              value: 'Решение ДК',
            },
            {
              id: 4,
              type: 'author',
              value: 'Савельева Мария Евгеньевна',
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
              type: 'name',
              value:
                'Несоблюдение требований Федерального закона от 30 декабря 2008 г. № 307-ФЗ «Об аудиторской деятельности»',
            },
            {
              id: 2,
              type: 'added',
              value: '22.03.2024',
            },
            {
              id: 3,
              type: 'basement',
              value: 'Жалоба',
            },
            {
              id: 4,
              type: 'author',
              value: 'Петрушина Татьяна Сергеевна',
            },
          ],
        },
      ];
      break;
  }

  return result;
};

window.twinpx.vue['table']['twinpx:columnsNames:violations'] = [
  {
    id: 1,
    name: 'Название',
    type: 'name',
  },
  {
    id: 2,
    name: 'Добавлено',
    type: 'added',
  },
  {
    id: 3,
    name: 'Основание',
    type: 'basement',
  },
  {
    id: 4,
    name: '	Автор',
    type: 'author',
  },
];

window.twinpx.vue['table']['twinpx:items:cases'] = (startIndex) => {
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
              id: 5,
              type: 'solution',
              value:
                'Отложить рассмотрение дела в отношении члена СРО ААС 11606088082 OOO "КомКон-Аудит". Дата заседания и форма участия в нем будет сообщена участникам дисциплинарного производства дополнительно.',
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
              id: 5,
              type: 'solution',
              value:
                'Отложить рассмотрение дела в отношении члена СРО ААС 11606088082 OOO "КомКон-Аудит". Дата заседания и форма участия в нем будет сообщена участникам дисциплинарного производства дополнительно.',
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
              id: 5,
              type: 'solution',
              value:
                'Отложить рассмотрение дела в отношении члена СРО ААС 11606088082 OOO "КомКон-Аудит". Дата заседания и форма участия в нем будет сообщена участникам дисциплинарного производства дополнительно.',
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
              id: 5,
              type: 'solution',
              value:
                'Отложить рассмотрение дела в отношении члена СРО ААС 11606088082 OOO "КомКон-Аудит". Дата заседания и форма участия в нем будет сообщена участникам дисциплинарного производства дополнительно.',
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
              id: 5,
              type: 'solution',
              value:
                'Отложить рассмотрение дела в отношении члена СРО ААС 11606088082 OOO "КомКон-Аудит". Дата заседания и форма участия в нем будет сообщена участникам дисциплинарного производства дополнительно.',
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

window.twinpx.vue['table']['twinpx:columnsNames:cases'] = [
  {
    id: 1,
    name: 'Дата',
    type: 'date',
  },
  {
    id: 2,
    name: 'Номер',
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
    id: 5,
    name: 'Решение',
    type: 'solution',
  },
  {
    id: 6,
    name: 'Статус',
    type: 'status',
  },
];

window.twinpx.vue['table']['twinpx:items:actions'] = (startIndex) => {
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
              value: '18 июля 2024',
            },
            {
              id: 2,
              type: 'action',
              value:
                'Рекомендовать Правлению СРО ААС применить к аудитору [ОРНЗ] [ФИО] меру дисциплинарного воздействия в виде исключения из СРО ААС за нарушение требований Федерального закона №307-ФЗ «Об аудиторской деятельности».',
            },
          ],
        },
      ];
      break;
  }

  return result;
};

window.twinpx.vue['table']['twinpx:columnsNames:actions'] = [
  {
    id: 1,
    name: 'Дата',
    type: 'date',
  },
  {
    id: 2,
    name: 'Мера',
    type: 'action',
  },
];
