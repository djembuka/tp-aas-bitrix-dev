import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    blocks: [
        {
          id: 1,
          heading: 'Общие данные',
          controls: [
            {
              property: 'text',
              id: 1,
              name: 'NAME',
              label: 'Название голосования *',
              value: '',
              required: true,
            },
            {
              property: 'textarea',
              id: 2,
              name: 'ANNOUNCEMENT',
              label: 'Текст анонса',
              value: '',
              required: false,
            },
            {
              property: 'textarea',
              id: 3,
              name: 'DESCRIPTION',
              label: 'Текст подробного описания',
              value: '',
              required: false,
            },
          ]
        },
        {
          id: 2,
          heading: 'Сроки',
          controls: [
            {
              property: "datetime",
              type: "single",
              id: 1,
              name: "DATE_FROM",
              label: "Дата начала активности *",
              value: "",
              required: true,
            },
            {
              property: "datetime",
              type: "single",
              id: 2,
              name: "DATE_TO",
              label: "Дата окончания активности *",
              value: "",
              required: true,
            },
            {
              property: "datetime",
              type: "single",
              id: 3,
              name: "DATE_FINISH",
              label: "Дата окончания голосования *",
              value: "",
              required: true,
            },
          ]
        },
        {
          id: 3,
          heading: 'Технические',
          controls: [
            {
              property: "num",
              id: 1,
              name: "NUM",
              label: "Количество попыток *",
              value: "1",
              required: true,
            },
            {
              property: "num",
              id: 2,
              name: "NUM",
              label: "Количество голосующих",
              value: "",
              required: false,
            },
            {
              property: "text",
              id: 3,
              name: "BUTTON",
              label: "Сообщение у кнопки",
              value: "",
              required: false,
            },
            {
              property: 'textarea',
              id: 4,
              name: 'MESSAGE',
              label: 'Сообщение после голосования',
              value: '',
              required: false,
            },
            {
              property: "num",
              id: 5,
              name: "SORT",
              label: "Порядок размещения *",
              value: "",
              required: true,
              hint_external: "Используйте цифры от 1 до N, порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок."
            },
          ]
        },
        {
          id: 4,
          heading: 'Доступы',
          controls: [
            {
              property: "text",
              id: 1,
              name: "MEMBERS_ID",
              label: "ID групп голосующих",
              value: "",
              required: false,
            },
            {
              property: "text",
              id: 2,
              name: "MEMBERS_EIO_ID",
              label: "ID групп голосующих ЕИО",
              value: "",
              required: false,
            },
            {
              property: "text",
              id: 3,
              name: "MEMBERS_UMC_ID",
              label: "ID групп голосующих УМЦ",
              value: "",
              required: false,
            },
            {
              property: "text",
              id: 4,
              name: "COMMISSIONS_ID",
              label: "ID групп Избирательных комиссий",
              value: "",
              required: false,
            },
          ]
        },
        {
          id: 5,
          heading: 'Оформление документов',
          controls: [
            {
              property: "text",
              id: 'votingCreate51',
              name: "DOC_TITLE",
              label: "Заголовок документа",
              value: "",
              required: false,
            },
            {
              property: "textarea",
              id: 'votingCreate52',
              name: "DOC_SUBTITLE",
              label: "Подзаголовок документа",
              value: "",
              required: false,
            },
          ]
        }
      ]
  }),
  actions: {
    changeBlocks(blocks) {
      this.blocks = blocks;
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
    changeFileValue({ control, value }) {
        control.value = value;
        if (control.type === 'upload') {
            this.uploadFile(control, value);
        }
    },
    changeControlValue({ control, value, checked }) {
        switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
        case 'tel':
        case 'email':
        case 'num':
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
            this.changeFileValue({ control, value });
            break;
        case 'date':
        case 'datetime':
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