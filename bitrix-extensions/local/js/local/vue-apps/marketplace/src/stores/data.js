import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    steps: [
      {
        id: 'one',
        name: 'Цель',
        html: '<h3>Определите вашу цель</h3><p>Выберите необходимые вам требования и параметры аудиторской организации.</p>',
        controls: [
          {
            "property": "select",
            "type": "dropdown",
            "id": "id13",
            "name": "PURPOSE",
            "label": "Цель аудита",
            "options": [
              {
                "label": "molestias",
                "code": "23423423423"
              },
              {
                "label": "Farming",
                "code": "324234324"
              },
              {
                "label": "Very",
                "code": "324234325"
              }
            ],
            "value": "",
            "disabled": false
          },
          
          {
            "property": "select",
            "type": "dropdown",
            "id": "id14",
            "name": "TYPE",
            "label": "Тип отчетности",
            "options": [
              {
                "label": "molestias",
                "code": "23423423423"
              },
              {
                "label": "Farming",
                "code": "324234324"
              },
              {
                "label": "Very",
                "code": "324234325"
              }
            ],
            "value": "",
            "disabled": false
          }
        ],
      },
      {
        id: 'two',
        name: 'Сроки',
        html: '<h3>Определите сроки</h3><p>Определите ваши требования к срокам проведения аудита.</p>',
        controls: [
          {
            "id": "id21",
            "property": "text",
            "name": "PERIOD",
            "label": "Период аудита",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Определите период за который будет проводится аудит.'
          },
          {
            "id": "id22",
            "property": "text",
            "name": "TIME",
            "label": "Сколько времени есть на проведение аудита",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Определите ограничения по срокам проведения аудита.'
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id23",
            "name": "URGENT",
            "required": false,
            "label": "Требуется срочная проверка",
            "value": "on",
            "checked": true,
            "disabled": false,
          }
        ]
      },
      {
        id: 'three',
        name: 'Размер бизнеса',
        html: '<h3>Уточните размер вашего бизнеса</h3><p>Для определения критериев компании уточните параметры вашего бизнеса.</p>',
        controls: [
          {
            "id": "id31",
            "property": "text",
            "name": "REVENUE",
            "label": "Выручка",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите выручку в миллионах рублей.'
          },
          {
            "id": "id32",
            "property": "text",
            "name": "ASSETS",
            "label": "Объем активов",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите объем активов компании в миллионах рублей.'
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id33",
            "name": "ISSUER",
            "required": false,
            "label": "Эмитент",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id34",
            "name": "MEMBER",
            "required": false,
            "label": "Участник госзакупок",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id35",
            "name": "INFO",
            "required": false,
            "label": "Наличие требования к раскрытию информации",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "id": "id36",
            "property": "text",
            "name": "REGION",
            "label": "Регион или город, где находится заказчик",
            "value": "",
            "required": false,
            "disabled": false,
            "hint_external": 'Укажите название вашего города или населенного пункта.'
          },
        ]
      },
      {
        id: 'four',
        name: 'Требования',
        html: '<h3>Сформулируйте требования</h3><p>Укажите требования к аудиторской организации, которые могут влиять на ограничения к доступу.</p>',
        controls: [
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id41",
            "name": "EXPERIENCE",
            "required": false,
            "label": "Опыт работы с иностранными структурами",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id42",
            "name": "INTERNATIONAL",
            "required": false,
            "label": "Входит в международные сети",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id43",
            "name": "SECRET",
            "required": false,
            "label": "Доступ к гос. тайне",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id44",
            "name": "SERVICE",
            "required": false,
            "label": "Оказание аудиторских услуг общественно значимым организациям на финансовом рынке",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
        ]
      },
      {
        id: 'five',
        name: 'Дополнительно',
        html: '<h3>Дополнительные требования</h3><p>Укажите требования к аудиторской организации, которые могут влиять на ограничения к доступу.</p>',
        controls: [
          {
            "property": "checkbox",
            "type": "checkbox",
            "id": "id51",
            "name": "ENGLISH",
            "required": false,
            "label": "Необходимость в англоязычном сопровождении",
            "value": "on",
            "checked": true,
            "disabled": false,
          },
        ]
      },
    ]
  }),
  actions: {
    setStepActive({ step, active }) {
      step.active = active;
    }
  }
});
