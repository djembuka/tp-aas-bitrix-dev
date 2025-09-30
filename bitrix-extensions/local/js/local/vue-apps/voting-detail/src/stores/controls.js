import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    groupFormBlocks: [
        {
          id: 'group1',
          heading: 'Общие данные',
          controls: [
            {
              property: 'hidden',
              id: 'group1control0',
              name: 'GROUP_UUID',
              label: '',
              value: '',
            },
            {
              property: 'text',
              id: 'group1control1',
              name: 'GROUP_NAME',
              label: 'Название группы вопросов',
              value: '',
              required: true,
              hint_external: "Используйте название, которое объединит несколько вопросов в один."
            },
            {
              property: 'textarea',
              id: 'group1control2',
              name: 'GROUP_DESCRIPTION',
              label: 'Текст подробного описания',
              value: '',
              required: true,
            },
            {
              "property": "file",
              "id": 'group1control3',
              "name": "GROUP_PIC",
              "label": "Иллюстрация",
              "value": "",
              "file": "",
              "required": true,
              "accept": [
                "png",
                "jpg",
                "jpeg"
              ],
              "image": true,
              "maxsize": 20000000
            }
          ]
        },
        {
          id: 'group2',
          heading: 'Технические',
          controls: [
            {
              property: 'num',
              id: 'group2control1',
              name: 'GROUP_SORT',
              label: 'Порядок размещения группы',
              value: '',
              required: true,
              hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
            }
          ]
        },
      ],
    questionFormBlocks: [
        {
          id: 'question1',
          heading: 'Общие данные',
          controls: [
            {
              property: 'hidden',
              id: 'question1control0',
              name: 'QUESTION_UUID',
              label: '',
              value: '',
            },
            {
              property: 'text',
              id: 'question1control1',
              name: 'QUESTION_NAME',
              label: 'Название вопроса',
              value: '',
              required: true,
            },
            {
              property: 'textarea',
              id: 'question1control2',
              name: 'QUESTION_DESCRIPTION',
              label: 'Текст подробного описания',
              value: '',
              required: true,
            },
            {
              "property": "file",
              "id": 'question1control3',
              "name": "QUESTION_PIC",
              "label": "Иллюстрация вопроса",
              "value": "",
              "file": "",
              "required": true,
              "accept": [
                "svg",
                "png",
                "jpg",
                "jpeg"
              ],
              "image": true,
              "maxsize": 20000000
            }
          ]
        },
        {
          id: 'question2',
          heading: 'Технические',
          controls: [
            {
              "property": "select",
              "type": "dropdown",
              "id": 'question2control1',
              "name": "QUESTION_TYPE",
              "label": "Тип выбора",
              "options": [
                {
                  "label": "Радио кнопка",
                  "code": "0"
                },
                {
                  "label": "Чекбокс",
                  "code": "1"
                },
              ],
              "value": "",
              "disabled": false,
            },
            {
              property: 'num',
              id: 'question2control2',
              name: 'QUESTION_NUM',
              label: 'Количество ответов',
              value: '',
              required: true,
              hint_external: 'Максимальное количество ответов на вопрос.'
            },
            {
              property: 'num',
              id: 'question2control3',
              name: 'QUESTION_SORT',
              label: 'Порядок размещения на странице',
              value: '',
              required: true,
              hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
            }
          ]
        },
      ],
    answerFormBlocks: [
      {
        id: 'answer1',
        heading: 'Общие данные',
        controls: [
          {
            property: 'hidden',
            id: 'answer1control0',
            name: 'ANSWER_UUID',
            label: '',
            value: '',
          },
          {
            property: 'text',
            id: 'answer1control1',
            name: 'ANSWER_NAME',
            label: 'Название ответа',
            value: '',
            required: true,
          },
          {
            property: 'textarea',
            id: 'answer1control2',
            name: 'ANSWER_DESCRIPTION',
            label: 'Подробное описание ответа',
            value: '',
            required: true,
          },
          {
            "property": "file",
            "id": 'answer1control3',
            "name": "ANSWER_PIC",
            "label": "Иллюстрация ответа",
            "value": "",
            "file": "",
            "required": true,
            "accept": [
              "svg",
              "png",
              "jpg",
              "jpeg"
            ],
            "image": true,
            "maxsize": 20000000
          }
        ]
      },
      {
        id: 'answer2',
        heading: 'Технические',
        controls: [
          {
            property: 'num',
            id: 'answer2control1',
            name: 'ANSWER_SORT',
            label: 'Порядок размещения на странице',
            value: '',
            required: true,
            hint_external: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.'
          }
        ]
      },
    ]
  }),
  actions: {
    changeGroupFormBlocks(blocks) {
      this.groupFormBlocks = blocks;
    },
    changeQuestionFormBlocks(blocks) {
      this.questionFormBlocks = blocks;
    },
    fillGroupForm(group) {
      if (group) {
        const groupArray = [
          [0, 0, 'uuid'],
          [0, 1, 'name'],
          [0, 2, 'description'],
          [0, 3, 'image'],
          [1, 0, 'sortIndex'],
        ];
        groupArray.forEach(item => {
          this.changeControlValue({
            control: this.groupFormBlocks[item[0]].controls[item[1]],
            value: String(group[item[2]])
          })
        });
      } else {
        this.groupFormBlocks.forEach(b => {
          b?.controls?.forEach(c => {
              this.changeControlValue({ control: c, value: '' })
          })
        })
      } 
    },
    fillQuestionForm(question) {
      if (question) {
        const questionArray = [
          [0, 0, 'uuid'],
          [0, 1, 'name'],
          [0, 2, 'description'],
          [0, 3, 'image'],
          [1, 0, 'type'],
          [1, 1, 'selectableAnswers'],
          [1, 2, 'sortIndex'],
        ];
        questionArray.forEach(item => {
          this.changeControlValue({
            control: this.questionFormBlocks[item[0]].controls[item[1]],
            value: String(question[item[2]])
          })
        });
      } else {
        this.questionFormBlocks.forEach(b => {
          b?.controls?.forEach(c => {
              this.changeControlValue({ control: c, value: '' })
          })
        })
      } 
    },
    fillAnswerForm(answer) {
      if (answer) {
        const answerArray = [
          [0, 0, 'uuid'],
          [0, 1, 'name'],
          [0, 2, 'description'],
          [0, 3, 'image'],
          [1, 0, 'sortIndex'],
        ];
        answerArray.forEach(item => {
          this.changeControlValue({
            control: this.answerFormBlocks[item[0]].controls[item[1]],
            value: String(answer[item[2]])
          })
        });
      } else {
        this.answerFormBlocks.forEach(b => {
          b?.controls?.forEach(c => {
              this.changeControlValue({ control: c, value: '' })
          })
        })
      } 
    },
    changeTextControlValue({ control, value }) {
        control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
        control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
        control.value = value;
    },
    changeDateValue({ control, value }) {
        control.value = value;
    },
    changeFileValue({ control, value, file }) {
        control.value = value;
        control.file = file;
        
        if (value === '') {
            control.file = ''
        }
    },
    changeControlValue({ control, value, file, checked }) {
        switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
        case 'tel':
        case 'email':
        case 'num':
        case 'hidden':
            this.changeTextControlValue({ control, value });
            break;
        case 'select':
            this[
            `changeSelect${control.type
                .substring(0, 1)
                .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
            ]({ control, value });
            break;
        case 'file':
            this.changeFileValue({ control, value, file });
            break;
        case 'date':
            this.changeDateValue({ control, value });
            break;
        }
    },
    async runHints(control, action) {
        const url = new URL(action, window.location.origin);
        url.searchParams.append('s', control.value);

        try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'success' && result.data) {
            this.setHints(control, result.data);
        } else if (result.errors) {
            this.error = result.errors[0]?.message
        } else {
            this.error = 'Invalid response format';
        }
        } catch (error) {
        this.error = error?.message
        }
    },
    setHints(control, value) {
        control.hints = value;
    },
  }
});