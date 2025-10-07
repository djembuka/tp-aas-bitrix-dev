import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
      controls: [
        {
        "property": "select",
        "type": "dropdown",
        "id": "statusControl",
        "name": "STATUS",
        "label": "Статус дела",
        "options": [
          {
            "label": "Вывести на экраны",
            "code": "1"
          },
          {
            "label": "Начать голосование",
            "code": "2"
          },
          {
            "label": "Приостановить голосование",
            "code": "3"
          },
          {
            "label": "Завершить голосование",
            "code": "4"
          }
        ],
        "value": "",
        "disabled": false,
      },
      {
        "property": "num",
        "id": "minutesControl",
        "name": "MINUTES",
        "label": "Минут",
        "value": "",
        "required": true,
      },
      {
        "property": "num",
        "id": "secondsControl",
        "name": "SECONDS",
        "label": "Секунд",
        "value": "",
        "required": true,
      }
    ]
  }),
  actions: {
    changeTimer(statuses) {
        const timerStatus = statuses.find(s => s.timer);
        const timer = timerStatus ? timerStatus.timer : 0;
        this.controls[1].value = String(parseInt(timer / 60, 10));
        this.controls[2].value = String(parseInt(timer % 60, 10));
    },
    changeStatus(options, selected) {
        this.controls[0].options = options.map(option => ({
            ...option,
            label: option.status,
            code: option.id
        }));
        this.controls[0].value = selected;
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