window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['table'] = {};

window.twinpx.vue['table'].setDefaultSort = {
  columnSort: 2,
  sortType: 0,
};

window.twinpx.vue['table'].defaultSort = {
  columnSort: 2,
  sortType: 0,
};

window.twinpx.vue['table'].items = (startIndex) => {
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

window.twinpx.vue['table'].columnsNames = [
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
