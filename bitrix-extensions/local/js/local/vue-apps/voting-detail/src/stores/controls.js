import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    groupFormBlocks: [
      {
        id: 'group1',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_HEADING1'),
        controls: [
          {
            property: 'hidden',
            id: 'group1control0',
            name: 'GROUP_UUID',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_UUID_LABEL'),
            value: '',
          },
          {
            property: 'text',
            id: 'group1control1',
            name: 'GROUP_NAME',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_NAME_LABEL'),
            value: '',
            required: true,
            hint_external: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_NAME_HINT'),
          },
          {
            property: 'textarea',
            id: 'group1control2',
            name: 'GROUP_DESCRIPTION',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_DESCRIPTION_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'file',
            id: 'group1control3',
            name: 'GROUP_PIC',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_PIC_LABEL'),
            value: '',
            file: '',
            required: false,
            accept: ['png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 20000000,
          },
        ],
      },
      {
        id: 'group2',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_HEADING2'),
        controls: [
          {
            property: 'num',
            id: 'group2control1',
            name: 'GROUP_SORT',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_SORT_LABEL'),
            value: '',
            required: true,
            hint_external: BX.message('TWPX_VOTING_DETAIL_FORM_GROUP_SORT_HINT')
          },
        ],
      },
    ],
    questionFormBlocks: [
      {
        id: 'question1',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING1'),
        controls: [
          {
            property: 'hidden',
            id: 'question1control0',
            name: 'QUESTION_UUID',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_UUID_LABEL'),
            value: '',
          },
          {
            property: 'text',
            id: 'question1control1',
            name: 'QUESTION_NAME',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_NAME_LABEL'),
            value: '',
            required: true,
          },
          {
            property: 'textarea',
            id: 'question1control2',
            name: 'QUESTION_DESCRIPTION',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_DESCRIPTION_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'file',
            id: 'question1control3',
            name: 'QUESTION_PIC',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_PIC_LABEL'),
            value: '',
            file: '',
            required: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 20000000,
          },
        ],
      },
      {
        id: 'question3',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING3'),
        controls: [
          {
            property: 'file',
            id: 'question3control1',
            name: 'QUESTION_FILE',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_FILE_LABEL'),
            value: [],
            file: null,
            accept: ['doc', 'docx', 'pdf', 'xls', 'xlsx', 'txt', 'jpeg', 'jpg', 'gif', 'png', 'webp'],
            multi: 10,
            maxsize: 20000000,
          },
        ],
      },
      {
        id: 'question2',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING2'),
        controls: [
          {
            property: 'select',
            type: 'dropdown',
            id: 'question2control1',
            name: 'QUESTION_TYPE',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_LABEL'),
            options: [
              {
                label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_OPTION1'),
                code: '0',
              },
              {
                label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_OPTION2'),
                code: '1',
              },
            ],
            value: '',
            required: true,
            disabled: false,
          },
          {
            property: 'num',
            id: 'question2control2',
            name: 'QUESTION_NUM',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_NUM_LABEL'),
            value: '',
            required: true,
            hint_external: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_NUM_HINT'),
          },
          {
            property: 'num',
            id: 'question2control3',
            name: 'QUESTION_SORT',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_SORT_LABEL'),
            value: '',
            required: true,
            hint_external: BX.message('TWPX_VOTING_DETAIL_FORM_QUESTION_SORT_HINT'),
          },
        ],
      },
    ],
    answerFormBlocks: [
      {
        id: 'answer1',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_HEADING1'),
        controls: [
          {
            property: 'hidden',
            id: 'answer1control0',
            name: 'ANSWER_UUID',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_UUID_LABEL'),
            value: '',
          },
          {
            property: 'text',
            id: 'answer1control1',
            name: 'ANSWER_NAME',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_NAME_LABEL'),
            value: '',
            required: true,
          },
          {
            property: 'textarea',
            id: 'answer1control2',
            name: 'ANSWER_DESCRIPTION',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_DESCRIPTION_LABEL'),
            value: '',
            required: false,
          },
          {
            property: 'file',
            id: 'answer1control3',
            name: 'ANSWER_PIC',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_PIC_LABEL'),
            value: '',
            file: '',
            required: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 20000000,
          },
        ],
      },
      {
        id: 'answer2',
        heading: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_HEADING2'),
        controls: [
          {
            property: 'num',
            id: 'answer2control1',
            name: 'ANSWER_SORT',
            label: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_SORT_LABEL'),
            value: '',
            required: true,
            hint_external: BX.message('TWPX_VOTING_DETAIL_FORM_ANSWER_SORT_HINT'),
          },
        ],
      },
    ],
    questionFilesId: [],// соответствие id с сервера, name и id в multi [{id: ..., idMulti: ...}]
    questionFilesDelete: [],// id с сервера файлов, которые нужно удалить 
  }),
  actions: {
    changeQuestionFilesDelete(value) {
      this.questionFilesDelete = value;
    },
    createMulti({ parent }) {
      parent.property = 'multi';
      parent.multi = [];
    },
    addMulti({ parent, add }) {
      const randomId = Math.round(Math.random() * 1000);
      const sub = [];

      if (add.sub && add.sub.forEach) {
        add.sub.forEach((s) => {
          s.id = `${s.id}${randomId}`;
          sub.push({ ...s });
        });
        add.sub = sub;
      }

      if (add.value) {
        // question files with value and server id
        const file = this.questionFilesId.find(obj => obj.name === add.value);
        if (file) {
          add.id = file.id;
        } else {
          add.id = `${add.id}${randomId}`;
        }
      } else {
        // empty files
        add.id = `${add.id}${randomId}`;
      }

      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      const id = parent?.multi[index]?.id;
      if (id) {
        const set = new Set([...this.questionFilesDelete]);
        set.add(id);
        this.changeQuestionFilesDelete([...set]);
      }
      parent.multi.splice(index, 1);
    },
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
        groupArray.forEach((item) => {
          this.changeControlValue({
            control: this.groupFormBlocks[item[0]].controls[item[1]],
            value: String(group[item[2]]),
          });
        });
      } else {
        this.groupFormBlocks.forEach((b) => {
          b?.controls?.forEach((c) => {
            this.changeControlValue({ control: c, value: '' });
          });
        });
      }
    },
    fillQuestionForm(question) {
      if (question) {
        const questionArray = [
          [0, 0, 'uuid'],
          [0, 1, 'name'],
          [0, 2, 'description'],
          [0, 3, 'image'],
          [1, 0, 'files'],
          [2, 0, 'type'],
          [2, 1, 'selectableAnswers'],
          [2, 2, 'sortIndex'],
        ];
        questionArray.forEach((item) => {
          let value;

          if (item[2] === 'image') {
            value = String(question[item[2]]).substring( String(question[item[2]]).lastIndexOf('/') + 1);
          } else if (item[2] === 'files' && Array.isArray(question[item[2]])) {
            value = question[item[2]].map((f) => f.name);

            this.questionFilesId = [];
            question[item[2]].forEach(f => {
              this.questionFilesId.push({
                id: f.id,
                name: f.name
              });
            });
          } else {
            value = String(question[item[2]]);
          }

          this.changeControlValue({
            control: this.questionFormBlocks[item[0]].controls[item[1]],
            value,
          });
        });
      } else {
        this.questionFormBlocks.forEach((b) => {
          b?.controls?.forEach((c) => {
            this.changeControlValue({ control: c, value: '' });
          });
        });
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
        answerArray.forEach((item) => {
          this.changeControlValue({
            control: this.answerFormBlocks[item[0]].controls[item[1]],
            value: String(answer[item[2]]),
          });
        });
      } else {
        this.answerFormBlocks.forEach((b) => {
          b?.controls?.forEach((c) => {
            this.changeControlValue({ control: c, value: '' });
          });
        });
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
      if (control.value) {
        // add to filesDelete
        const fileNew = this.questionFilesId.find(obj => obj.id === control.id);
        const set = new Set([...this.questionFilesDelete]);
        if (fileNew) {set.add(fileNew.id);}
        this.changeQuestionFilesDelete([...set]);
      }

      control.value = value;
      control.file = file;

      if (value === '') {
        control.file = '';
      }
    },
    changeMultiControlValue({ control, value }) {
      if (control.name === 'QUESTION_FILE') {
        control.id = Math.round(Math.random() * 1000000);
        control.property = 'file';
        control.multi = 10;
        control.value = value;
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
        case 'multi':
          this.changeMultiControlValue({ control, value });
          break;
      }
    },
    async runHints(control, action) {
      const url = new URL(action, window.location.origin);
      url.searchParams.append('s', control.value);

      try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд тймаут

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
          this.error = result.errors[0]?.message;
        } else {
          this.error = 'Invalid response format';
        }
      } catch (error) {
        this.error = error?.message;
      }
    },
    setHints(control, value) {
      control.hints = value;
    },
  },
});
