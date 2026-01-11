import { defineStore } from 'ui.vue3.pinia';

function createMultiControls({
  id, property, type, name, label, valueSingle, valueMulti, valueMultiSub, hintExternal, count, action
}) {
  let options = {};

  if (property === 'hint') {
    options = {count, action};
  } else if (property === 'date') {
    options = {type};
  }

  return [
        {
          id: `${id}1`,
          property,
          name,
          label,
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options
        },
        {
          id: `${id}2`,
          property,
          name,
          label,
          value: valueMulti,
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options
        },
        {
          id: `${id}3`,
          property,
          name,
          label,
          value: '',
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub1`,
              property,
              name: `${name}_SUB`,
              label,
              value: "",
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
        {
          id: `${id}4`,
          property,
          name,
          label,
          value: valueSingle,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub2`,
              property,
              name: `${name}_SUB`,
              label,
              value: `${valueSingle} sub`,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
        {
          id: `${id}5`,
          property,
          name,
          label,
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub3`,
              property,
              name: `${name}_SUB`,
              label,
              value: "",
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
        {
          id: `${id}6`,
          property,
          name,
          label,
          value: valueMulti,
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub4`,
              property,
              name: `${name}_SUB`,
              label,
              value: "",
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
        {
          id: `${id}7`,
          property,
          name,
          label,
          value: valueMulti,
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub5`,
              property,
              name: `${name}_SUB`,
              label,
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
        {
          id: `${id}8`,
          property,
          name,
          label,
          value: valueMulti,
          multi: 3,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...options,
          sub: [
            {
              id: `${id}Sub6`,
              property,
              name: `${name}_SUB`,
              label,
              value: valueMultiSub,
              multi: 3,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...options
            }
          ]
        },
  ];
}

export const formControlsMultiStore = defineStore('form-controls-multi-store', {
  state: () => ({
    controls: {
      text: createMultiControls({
        id: 'textMulti',
        property: 'text',
        name: 'TEXT_MULTI',
        label: 'Текстовое поле',
        valueSingle: 'Текст',
        valueMulti: ['Текст 1', 'Текст 2', 'Текст 3'],
        valueMultiSub: ['Текст 1 sub', 'Текст 2 sub', 'Текст 3 sub'],
        hintExternal: 'Множественное текстовое поле',
      }),
      textarea: createMultiControls({
        id: 'textareaMulti',
        property: 'textarea',
        name: 'TEXTAREA_MULTI',
        label: 'Текстовое поле',
        valueSingle: 'Текст',
        valueMulti: ['Текст 1', 'Текст 2', 'Текст 3'],
        valueMultiSub: ['Текст 1 sub', 'Текст 2 sub', 'Текст 3 sub'],
        hintExternal: 'Множественное текстовое поле',
      }),
      tel: createMultiControls({
        id: 'telMulti',
        property: 'tel',
        name: 'TEL_MULTI',
        label: 'Телефон',
        valueSingle: '+7 (456) 789-87-87',
        valueMulti: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
        valueMultiSub: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
        hintExternal: 'Множественное поле Телефон',
      }),
      email: createMultiControls({
        id: 'emailMulti',
        property: 'email',
        name: 'EMAIL_MULTI',
        label: 'Email',
        valueSingle: 'test@some.info',
        valueMulti: ['test@some.ru', 'test@some.com', 'test@some.dev'],
        valueMultiSub: ['test@some.ru', 'test@some.com', 'test@some.dev'],
        hintExternal: 'Множественное поле Email',
      }),
      password: createMultiControls({
        id: 'passwordMulti',
        property: 'password',
        name: 'PASSWORD_MULTI',
        label: 'Password',
        valueSingle: '123123',
        valueMulti: ['123456', '456789', '789123'],
        valueMultiSub: ['123456', '456789', '789123'],
        hintExternal: 'Множественное поле Password',
      }),
      num: createMultiControls({
        id: 'numMulti',
        property: 'num',
        name: 'NUM_MULTI',
        label: 'Число',
        valueSingle: '45',
        valueMulti: ['123456', '0', '0.45'],
        valueMultiSub: ['123457', '0', '0.47'],
        hintExternal: 'Множественное поле Число',
      }),
      timesingle: createMultiControls({
        id: 'timesingleMulti',
        property: 'timesingle',
        name: 'TIMESINGLE_MULTI',
        label: 'Время',
        valueSingle: '8:00',
        valueMulti: ['9:00', '0:05', '23:45'],
        valueMultiSub: ['9:01', '0:06', '23:44'],
        hintExternal: 'Множественное поле Время',
      }),
      hint: createMultiControls({
        id: 'hintMulti',
        property: 'hint',
        name: 'HINT_MULTI',
        label: 'Подсказка',
        count: 3,
        action: "/markup/vue/design-system/hints.json",
        valueSingle: {
          id: "2",
          value: "Second"
        },
        valueMulti: [
          {
            id: "3",
            value: "Third"
          },
          {
            id: "2",
            value: "Second"
          },
          {
            id: "5",
            value: "Fifth"
          }
        ],
        valueMultiSub: [
          {
            id: "3",
            value: "Third"
          },
          {
            id: "2",
            value: "Second"
          },
          {
            id: "5",
            value: "Fifth"
          }
        ],
        hintExternal: 'Множественное поле Подсказка',
      }),
      hintHtml: createMultiControls({
        id: 'hintHtmlMulti',
        property: 'hint',
        name: 'HINT_HTML_MULTI',
        label: 'Подсказка с html',
        count: 3,
        action: "/markup/vue/design-system/hints-html.json",
        valueSingle: {
          id: "2",
          value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>"
        },
        valueMulti: [
          {
            id: "3",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>"
          },
          {
            id: "2",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>"
          },
          {
            id: "5",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Fifth</div>"
          }
        ],
        valueMultiSub: [
          {
            id: "3",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>"
          },
          {
            id: "2",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>"
          },
          {
            id: "5",
            value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Fifth</div>"
          }
        ],
        hintExternal: 'Множественное поле Подсказка с html',
      }),
      hintAutocomplete: createMultiControls({
        id: 'hintAutocompleteMulti',
        property: 'hint',
        name: 'HINT_AUTOCOMPLETE_MULTI',
        label: 'Подсказка с autocomplete',
        count: 3,
        action: "/markup/vue/design-system/hints-autocomplete.json",
        valueSingle: {
          "id": "2",
          "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
          "autocomplete": [
            {
              "id": "id1",
              "value": "Семён Семёнович"
            },
            {
              "id": "id1-1",
              "value": "ООО Ответственные аудиторы"
            },
            {
              "id": "id2",
              "value": "+7 905 488 85 54"
            }
          ]
        },
        valueMulti: [
          {
            "id": "3",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 812 488 85 54"
              }
            ]
          },
          {
            "id": "2",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 905 488 85 54"
              }
            ]
          },
          {
            "id": "5",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Fifth</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 986 488 85 54"
              }
            ]
          }
        ],
        valueMultiSub: [
          {
            "id": "3",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 812 488 85 54"
              }
            ]
          },
          {
            "id": "2",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 905 488 85 54"
              }
            ]
          },
          {
            "id": "5",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Fifth</div>",
            "autocomplete": [
              {
                "id": "id1",
                "value": "Семён Семёнович"
              },
              {
                "id": "id1-1",
                "value": "ООО Ответственные аудиторы"
              },
              {
                "id": "id2",
                "value": "+7 986 488 85 54"
              }
            ]
          }
        ],
        hintExternal: 'Множественное поле Подсказка с autocomplete',
      }),
      hintHidden: createMultiControls({
        id: 'hintHiddenMulti',
        property: 'hint',
        name: 'HINT_HIDDEN_MULTI',
        label: 'Подсказка с hidden',
        count: 3,
        action: "/markup/vue/design-system/hints-hidden.json",
        valueSingle: {
          "id": "2",
          "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
          "hidden": [
            {
              "name": "HIDDEN4",
              "value": "qwe"
            },
            {
              "name": "HIDDEN5",
              "value": "asdasd"
            },
            {
              "name": "HIDDEN6",
              "value": "zxczxc"
            }
          ]
        },
        valueMulti: [
          {
            "id": "1",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >First</div>",
            "hidden": [
              {
                "name": "HIDDEN1",
                "value": "789456"
              },
              {
                "name": "HIDDEN2",
                "value": "123123"
              },
              {
                "name": "HIDDEN3",
                "value": "456465"
              }
            ]
          },
          {
            "id": "2",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
            "hidden": [
              {
                "name": "HIDDEN4",
                "value": "qwe"
              },
              {
                "name": "HIDDEN5",
                "value": "asdasd"
              },
              {
                "name": "HIDDEN6",
                "value": "zxczxc"
              }
            ]
          },
          {
            "id": "3",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
            "hidden": [
              {
                "name": "HIDDEN7",
                "value": "fff"
              },
              {
                "name": "HIDDEN8",
                "value": "uu"
              },
              {
                "namen": "HIDDEN9",
                "value": "0"
              }
            ]
          }
        ],
        valueMultiSub: [
          {
            "id": "1",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >First</div>",
            "hidden": [
              {
                "name": "HIDDEN1",
                "value": "789456"
              },
              {
                "name": "HIDDEN2",
                "value": "123123"
              },
              {
                "name": "HIDDEN3",
                "value": "456465"
              }
            ]
          },
          {
            "id": "2",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>",
            "hidden": [
              {
                "name": "HIDDEN4",
                "value": "qwe"
              },
              {
                "name": "HIDDEN5",
                "value": "asdasd"
              },
              {
                "name": "HIDDEN6",
                "value": "zxczxc"
              }
            ]
          },
          {
            "id": "3",
            "value": "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Third</div>",
            "hidden": [
              {
                "name": "HIDDEN7",
                "value": "fff"
              },
              {
                "name": "HIDDEN8",
                "value": "uu"
              },
              {
                "namen": "HIDDEN9",
                "value": "0"
              }
            ]
          }
        ],
        hintExternal: 'Множественное поле Подсказка с hidden',
      }),
      dateRange: createMultiControls({
        id: 'dateRangeMulti',
        property: 'date',
        type: "range",
        name: 'DATE_RANGE_MULTI',
        label: 'Интервал дат',
        valueSingle: ["20.02.2024", "28.02.2024"],
        valueMulti: [
          ["20.02.2024", "28.02.2024"],
          ["20.04.2024", "28.04.2024"],
          ["20.08.2024", "28.08.2024"]
        ],
        valueMultiSub: [
          ["20.02.2024", "28.02.2024"],
          ["20.04.2024", "28.04.2024"],
          ["20.08.2024", "28.08.2024"]
        ],
        hintExternal: 'Множественное поле интервал дат',
      }),
      dateSingle: createMultiControls({
        id: 'dateSingleMulti',
        property: 'date',
        type: "single",
        name: 'DATE_SINGLE_MULTI',
        label: 'Дата',
        valueSingle: "28.03.2024",
        valueMulti: [
          "28.02.2024",
          "28.03.2024",
          "28.04.2024"
        ],
        valueMultiSub: [
          "28.02.2024",
          "28.03.2024",
          "28.04.2024"
        ],
        hintExternal: 'Множественное поле дата',
      }),
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
