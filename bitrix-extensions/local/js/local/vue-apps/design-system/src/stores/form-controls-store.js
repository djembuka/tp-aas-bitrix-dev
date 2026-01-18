import { defineStore } from 'ui.vue3.pinia';

function createControls({
   property, type, label, value, valueSingle, valueMulti, valueMultiSub, valueMultiSubMulti, count, action, file, accept, image, maxSize, options
}) {

  const camelCase = type ? `${property}${type.charAt(0).toUpperCase()}${type.substring(1)}` : property;
  const upperCase = type? `${property.toUpperCase()}_${type.toUpperCase()}` : property.toUpperCase();

  const id = `${camelCase}Control`;
  const name = `${upperCase}_CONTROL`;
  const hintExternal = label;

  valueSingle = valueSingle || value;
  valueMulti = valueMulti || [`${value} 1`, `${value} 2`, `${value} 3`];
  valueMultiSub = valueMultiSub || [, `${value} 2 sub`, `${value} 3 sub`];
  valueMultiSubMulti = valueMultiSubMulti ||
    (value ?
      [, [`${value} 1 sub 2`, `${value} 2 sub 2`, `${value} 3 sub 2`], [, `${value} 2 sub 3`, `${value} 3 sub 3`]] :
      [valueMultiSub, valueMultiSub]);

  let dynamicOptions = {};

  if (type) dynamicOptions.type = type;

  if (property === 'hint' && count && action) {
    dynamicOptions.count = count;
    dynamicOptions.action = action;
  } else if (property === 'file' && file && accept && image && maxSize) {
    dynamicOptions.file = file;
    dynamicOptions.accept = accept;
    dynamicOptions.image = image;
    dynamicOptions.maxSize = maxSize;
  } else if (property === 'select' && type && options) {
    dynamicOptions.options = options;
  }

  if (property === 'hidden') {
    return [
      {
        id: `${id}0`,
        property,
        name,
        value: '123456',
        required: false,
        ...dynamicOptions
      }
    ];
  }

  if (property === 'checkbox') {
    return [
      {
        id: `${id}0`,
        property,
        name,
        label,
        value: 'agree',
        checked: true,
        required: false,
        disabled: false,
        hint_external: hintExternal,
        ...dynamicOptions
      },
      {
        id: `${id}1`,
        property,
        name,
        label,
        value: 'agree',
        checked: false,
        required: false,
        disabled: false,
        hint_external: hintExternal,
        ...dynamicOptions
      },
    ];
  }

  return [
        {
          id: `${id}0`,
          property,
          name,
          label,
          value: valueSingle,
          required: false,
          disabled: false,
          hint_external: hintExternal,
          ...dynamicOptions
        },
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
          ...dynamicOptions
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
          ...dynamicOptions
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
          ...dynamicOptions,
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
              ...dynamicOptions
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
          ...dynamicOptions,
          sub: [
            {
              id: `${id}Sub2`,
              property,
              name: `${name}_SUB`,
              label,
              value: valueSingle,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
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
          ...dynamicOptions,
          sub: [
            {
              id: `${id}Sub3`,
              property,
              name: `${name}_SUB`,
              label,
              value: [""],
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
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
          ...dynamicOptions,
          sub: [
            {
              id: `${id}Sub4`,
              property,
              name: `${name}_SUB`,
              label,
              value: [""],
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
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
          ...dynamicOptions,
          sub: [
            {
              id: `${id}Sub5`,
              property,
              name: `${name}_SUB`,
              label,
              value: [[]],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
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
          ...dynamicOptions,
          sub: [
            {
              id: `${id}Sub6`,
              property,
              name: `${name}_SUB`,
              label,
              value: valueMultiSub,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
            },
            {
              id: `${id}Sub7`,
              property,
              name: `${name}_SUB`,
              label,
              value: valueMultiSubMulti,
              multi: 3,
              required: false,
              disabled: false,
              hint_external: hintExternal,
              ...dynamicOptions
            }
          ]
        },
  ];
}

export const formControlsStore = defineStore('form-controls-store', {
  state: () => ({
    controlsData: {
      'text': {
        label: 'Текстовое поле',
        value: 'Текст'
      },
      'textarea': {
        label: 'Текстовое поле',
        value: 'Текст'
      },
      'tel': {
        label: 'Телефон',
        valueSingle: '+7 (456) 789-87-87',
        valueMulti: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
        valueMultiSub: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
      },
      'email': {
        label: 'Email',
        value: 'test@some.info'
      },
      'password': {
        label: 'Пароль',
        value: '123123'
      },
      'num': {
        label: 'Число',
        valueSingle: '45',
        valueMulti: ['123456', '0', '0.45'],
        valueMultiSub: ['123457', '0', '0.47'],
        valueMultiSubMulti:[['123457', '0', '0.47'], ['123454', '4', '4.47']],
      },
      'time-single': {
        label: 'Время',
        valueSingle: '8:00',
        valueMulti: ['9:00', '0:05', '23:45'],
        valueMultiSub: ['9:01', '0:06', '23:44'],
        valueMultiSubMulti: [['9:01', '0:06', '23:44'], ['9:02', '0:02', '23:24']],
      },
      'hint': {
        label: 'Подсказка',
        count: 3,
        action: "/markup/vue/design-system/hint.json",
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
      },
      'hint-html': {
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
      },
      'hint-autocomplete': {
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
      },
      'hint-hidden': {
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
      },
      'date-range': {
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
        valueMultiSubMulti: [
          [
            ["21.01.2024", "28.02.2024"],
            ["22.01.2024", "28.04.2024"],
            ["23.01.2024", "28.08.2024"]
          ],
          [
            ["21.02.2024", "28.02.2024"],
            ["22.02.2024", "28.04.2024"],
            ["23.02.2024", "28.08.2024"]
          ]
        ]
      },
      'date-single': {
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
        valueMultiSubMulti: [
          [
            "21.01.2024",
            "22.01.2024",
            "23.01.2024"
          ],
          [
            "21.02.2024",
            "22.02.2024",
            "23.02.2024"
          ]
        ]
      },
      'datetime-single': {
        label: 'Calendar & time',
        valueSingle: "28.03.2024 12:00",
        valueMulti: [
          "28.02.2024 9:05",
          "28.03.2024 3:21",
          "28.04.2024 14:15"
        ],
        valueMultiSub: [
          "28.02.2024 2:07",
          "28.03.2024 8:05",
          "28.04.2024 0:00"
        ],
        valueMultiSubMulti: [
          [
            "21.01.2024 2:07",
            "22.01.2024 2:07",
            "23.01.2024 2:07"
          ],
          [
            "21.02.2024 8:05",
            "22.02.2024 8:05",
            "23.02.2024 8:05"
          ]
        ]
      },
      'file': {
        file: "",
        accept: [
          "svg",
          "png",
          "jpg",
          "jpeg",
          "pdf"
        ],
        image: true,
        maxsize: 10000000,
        valueSingle: 'img.jpg',
        valueMulti: ['pic.png', 'icon.svg', 'doc.pdf'],
        valueMultiSub: ['pic-sub.png', 'icon-sub.svg', 'doc-sub.pdf'],
      },
      'file-upload': {
        label: 'Файл с загрузкой',
        upload: {},
        file: "",
        accept: [
          "svg",
          "png",
          "jpg",
          "jpeg",
          "pdf"
        ],
        image: true,
        maxsize: 10000000,
        valueSingle: 'img.jpg',
        valueMulti: ['pic.png', 'icon.svg', 'doc.pdf'],
        valueMultiSub: ['pic-sub.png', 'icon-sub.svg', 'doc-sub.pdf'],
      },
      'select-dropdown': {
        label: 'Select dropdown',
        options: [
          {
            label: "molestias",
            code: "23423423423"
          },
          {
            label: "Farming",
            code: "324234324"
          },
          {
            label: "Very",
            code: "324234325"
          }
        ],
        valueSingle: '324234325',
        valueMulti: ['23423423423', '324234324', '324234325'],
        valueMultiSub: ['23423423423', '324234325', '324234324'],
      },
      'select-radio': {
        label: 'Select radio',
        options: [
          {
            label: "molestias",
            code: "23423423423"
          },
          {
            label: "Farming",
            code: "324234324"
          },
          {
            label: "Very",
            code: "324234325"
          }
        ],
        valueSingle: '324234325',
        valueMulti: ['23423423423', '324234324', '324234325'],
        valueMultiSub: ['23423423423', '324234325', '324234324'],
      },
      'select-multi': {
        label: 'Select multi',
        options: [
          {
            label: "Experience working with foreign structures",
            code: "23423423423"
          },
          {
            label: "Part of international networks",
            code: "324234324"
          },
          {
            label: "Access to state secrets",
            code: "324234325"
          }
        ],
        valueSingle: '324234325',
        valueMulti: ['23423423423', '324234324', '324234325'],
        valueMultiSub: ['23423423423', '324234325', '324234324'],
      },
      'checkbox-switch': {
        label: 'Переключатель',
        value: 'on',
        checked: true,
      },
      'checkbox-checkbox': {
        label: 'Чекбокс',
      },
      'checkbox-block': {
        label: 'Чекбокс в виде блока',
      },
      'checkbox': {
        label: 'Чекбокс скорее всего лишний',
      },
      'hidden': {
        value: '45678'
      }
    },
    controls: {},
  }),
  actions: {
    createControlsOfType(name) {
      if (!name) throw new Error('No name argument');

      if (this.controls[name]) return;

      const property = name.split('-')[0];
      const type = name.split('-')[1];
      const dynamicOptions = {};

      if (type) dynamicOptions.type = type;

      this.controls[name] = createControls({
        property,
        ...this.controlsData[name],
        ...dynamicOptions
      });
    },
    addTab(control) {
      control.tab = control.tab ? ++control.tab : 1;
    },
    setDisabled(control) {
      control.disabled = !control.disabled;
    },
    checkRequired(control) {
      if (!control.required) {
        control.required = true;
      } else {
        if (!control.label.includes('*')) {
          control.label = `${control.label} *`;
        } else {
          control.required = false;
          // remove *
          const index = control.label.indexOf('*');
          control.label = control.label.substring(0, index).trim();
        }
      }
    },
  },
});
