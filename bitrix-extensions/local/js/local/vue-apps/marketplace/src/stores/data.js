import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    steps: [
      {
        id: 'one',
        name: 'Цель',
        html: '<h3>Определите вашу цель</h3><p>Выберите необходимы вам требования и параметры аудиторской организации.</p>',
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
        active: true
      },
      {
        id: 'two',
        name: 'Сроки',
      },
      {
        id: 'three',
        name: 'Размер бизнеса',
      },
      {
        id: 'four',
        name: 'Требования',
      },
      {
        id: 'five',
        name: 'Дополнительно',
      },
    ]
  }),
  actions: {
    setStepActive({ step, active }) {
      step.active = active;
    }
  }
});
