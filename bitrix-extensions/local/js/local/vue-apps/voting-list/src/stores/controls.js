import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
  }),
  actions: {
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

      add.id = `${add.id}${randomId}`;
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
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