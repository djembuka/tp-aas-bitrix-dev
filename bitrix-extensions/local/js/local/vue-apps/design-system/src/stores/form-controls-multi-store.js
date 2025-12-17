import { defineStore } from 'ui.vue3.pinia';

export const formControlsMultiStore = defineStore('form-controls-multi-store', {
  state: () => ({
    controls: {
      text: [
        {
          id: "textMulti1",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текстовое поле",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное текстовое поле"
        },
        {
          id: "textMulti2",
          property: "text",
          name: "TEXT_MULTI",
          label: "Заполненные поля",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное текстовое поле"
        },
        {
          id: "textMulti3",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Текстовое поле с подполем",
          sub: [
            {
              id: "textMultiSub1",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textMulti4",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: 'Текст',
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое поле с подполем",
          sub: [
            {
              id: "textMultiSub2",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое подполе",
              value: "Нижний текст",
              required: false,
              disabled: false,
              hint_external: "Заполненное текстовое подполе"
            }
          ]
        },
        {
          id: "textMulti5",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Текстовое мультиполе с подполем",
          sub: [
            {
              id: "textMultiSub3",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textMulti6",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с подполем",
          sub: [
            {
              id: "textMultiSub4",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textMulti7",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с подполем",
          sub: [
            {
              id: "textMultiSub5",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти текстовое подполе"
            }
          ]
        },
        {
          id: "textMulti8",
          property: "text",
          name: "TEXT_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с мульти подполем",
          sub: [
            {
              id: "textMultiSub6",
              property: "text",
              name: "TEXT_MULTI_SUB",
              label: "Текстовое мульти подполе",
              value: ['Нижний текст 1', 'Нижний текст 2', 'Нижний текст 3'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти текстовое подполе"
            }
          ]
        },
      ],
    }
  }),
  actions: {
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'tel':
        case 'email':
        case 'hidden':
        case 'password':
        case 'date':
        case 'textarea':
          control.value = value;
          break;
        case 'hint':
          this.changeHintControlValue({ control, value });
          break;
        case 'select':
          this[
            `changeSelect${control.type
              .substring(0, 1)
              .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
          ]({ control, value });
          break;
        case 'checkbox':
          control.checked = checked;
          break;
        // case 'file':
        //   commit('changeFileValue', { control, value });
        //   break;
        // case 'color':
        //   commit('changeColorValue', { control, value });
        //   break;
      }
    },
    async runHints(control, action) {
      try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const response = await fetch(action, {
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
          console.error('Server returned errors:', result.errors);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching hints:', error);
      }
    },
    setHints(control, value) {
      control.hints = value;
    },
    changeHintControlValue({ control, value }) {
      control.value = value;

      if (value.autocomplete && value.autocomplete.forEach) {
        value.autocomplete.forEach((o) => {
          const control = this.controls.find((c) => c.id === o.id);
          if (control) {
            control.value = o.value;
          }
        });
      }
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

      add.id = `${add.id}${randomId}`;
      parent.multi.push(add);
    },
    removeMulti({ parent, index }) {
      parent.multi.splice(index, 1);
    },
  },
});
