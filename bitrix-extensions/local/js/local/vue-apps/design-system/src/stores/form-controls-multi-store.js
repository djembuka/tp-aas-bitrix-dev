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
      textarea: [
        {
          id: "textareaMulti1",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текстовое поле",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное текстовое поле"
        },
        {
          id: "textareaMulti2",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Заполненные поля",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное текстовое поле"
        },
        {
          id: "textareaMulti3",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Текстовое поле с подполем",
          sub: [
            {
              id: "textareaMultiSub1",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textareaMulti4",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: 'Текст',
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое поле с подполем",
          sub: [
            {
              id: "textareaMultiSub2",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
              label: "Текстовое подполе",
              value: "Нижний текст",
              required: false,
              disabled: false,
              hint_external: "Заполненное текстовое подполе"
            }
          ]
        },
        {
          id: "textareaMulti5",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Текстовое мультиполе с подполем",
          sub: [
            {
              id: "textareaMultiSub3",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textareaMulti6",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с подполем",
          sub: [
            {
              id: "textareaMultiSub4",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
              label: "Текстовое подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое текстовое подполе"
            }
          ]
        },
        {
          id: "textareaMulti7",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с подполем",
          sub: [
            {
              id: "textareaMultiSub5",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
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
          id: "textareaMulti8",
          property: "textarea",
          name: "TEXTAREA_MULTI",
          label: "Текст",
          value: ['Текст 1', 'Текст 2', 'Текст 3'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное текстовое мультиполе с мульти подполем",
          sub: [
            {
              id: "textareaMultiSub6",
              property: "textarea",
              name: "TEXTAREA_MULTI_SUB",
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
      tel: [
        {
          id: "telMulti1",
          property: "tel",
          name: "TEL_MULTI",
          label: "Телефон",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Телефон"
        },
        {
          id: "telMulti2",
          property: "tel",
          name: "TEL_MULTI",
          label: "Заполненные поля Телефон",
          value: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Телефон"
        },
        {
          id: "telMulti3",
          property: "tel",
          name: "TEL_MULTI",
          label: "Телефон",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Телефон с подполем",
          sub: [
            {
              id: "telMultiSub1",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Телефон"
            }
          ]
        },
        {
          id: "telMulti4",
          property: "tel",
          name: "TEL_MULTI",
          label: "Телефон",
          value: '+7 (456) 789-87-87',
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Телефон с подполем",
          sub: [
            {
              id: "telMultiSub2",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон подполе",
              value: "+7 (456) 789-87-88",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Телефон"
            }
          ]
        },
        {
          id: "telMulti5",
          property: "tel",
          name: "TEL_MULTI",
          label: "Текст",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Телефон мультиполе с подполем",
          sub: [
            {
              id: "telMultiSub3",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Телефон"
            }
          ]
        },
        {
          id: "telMulti6",
          property: "tel",
          name: "TEL_MULTI",
          label: "Текст",
          value: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Телефон мультиполе с подполем",
          sub: [
            {
              id: "telMultiSub4",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Телефон"
            }
          ]
        },
        {
          id: "telMulti7",
          property: "tel",
          name: "TEL_MULTI",
          label: "Текст",
          value: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Телефон мультиполе с подполем",
          sub: [
            {
              id: "telMultiSub5",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Телефон"
            }
          ]
        },
        {
          id: "telMulti8",
          property: "tel",
          name: "TEL_MULTI",
          label: "Текст",
          value: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Телефон с мульти подполем",
          sub: [
            {
              id: "telMultiSub6",
              property: "tel",
              name: "TEL_MULTI_SUB",
              label: "Телефон мульти подполе",
              value: ['+7 (456) 789-87-87', '+7 (456) 789-87-88', '+7 (456) 789-87-89'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Телефон"
            }
          ]
        },
      ],
      email: [
        {
          id: "emailMulti1",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Email"
        },
        {
          id: "emailMulti2",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Заполненные поля Email",
          value: ['test@some.ru', 'test@some.com', 'test@some.dev'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Email"
        },
        {
          id: "emailMulti3",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Email с подполем",
          sub: [
            {
              id: "emailMultiSub1",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Email"
            }
          ]
        },
        {
          id: "emailMulti4",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: 'test@some.ru',
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Email с подполем",
          sub: [
            {
              id: "emailMultiSub2",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email подполе",
              value: "test@some.info",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Email"
            }
          ]
        },
        {
          id: "emailMulti5",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Email мультиполе с подполем",
          sub: [
            {
              id: "emailMultiSub3",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Email"
            }
          ]
        },
        {
          id: "emailMulti6",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: ['test@some.ru', 'test@some.com', 'test@some.dev'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Email мультиполе с подполем",
          sub: [
            {
              id: "emailMultiSub4",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Email"
            }
          ]
        },
        {
          id: "emailMulti7",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: ['test@some.ru', 'test@some.com', 'test@some.dev'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Email мультиполе с подполем",
          sub: [
            {
              id: "emailMultiSub5",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Email"
            }
          ]
        },
        {
          id: "emailMulti8",
          property: "email",
          name: "EMAIL_MULTI",
          label: "Email",
          value: ['test@some.ru', 'test@some.com', 'test@some.dev'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Email с мульти подполем",
          sub: [
            {
              id: "emailMultiSub6",
              property: "email",
              name: "EMAIL_MULTI_SUB",
              label: "Email мульти подполе",
              value: ['test@some.ru', 'test@some.com', 'test@some.dev'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Email"
            }
          ]
        },
      ],
      password: [
        {
          id: "passwordMulti1",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Password"
        },
        {
          id: "passwordMulti2",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Заполненные поля Password",
          value: ['123456', '456789', '789123'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Password"
        },
        {
          id: "passwordMulti3",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Password с подполем",
          sub: [
            {
              id: "passwordMultiSub1",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Password"
            }
          ]
        },
        {
          id: "passwordMulti4",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: '123123',
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Password с подполем",
          sub: [
            {
              id: "passwordMultiSub2",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password подполе",
              value: "456456",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Password"
            }
          ]
        },
        {
          id: "passwordMulti5",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Password мультиполе с подполем",
          sub: [
            {
              id: "passwordMultiSub3",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Password"
            }
          ]
        },
        {
          id: "passwordMulti6",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: ['123456', '456789', '789123'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Password мультиполе с подполем",
          sub: [
            {
              id: "passwordMultiSub4",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Password"
            }
          ]
        },
        {
          id: "passwordMulti7",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: ['123456', '456789', '789123'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Password мультиполе с подполем",
          sub: [
            {
              id: "passwordMultiSub5",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Password"
            }
          ]
        },
        {
          id: "passwordMulti8",
          property: "password",
          name: "PASSWORD_MULTI",
          label: "Password",
          value: ['123456', '456789', '789123'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Password с мульти подполем",
          sub: [
            {
              id: "passwordMultiSub6",
              property: "password",
              name: "PASSWORD_MULTI_SUB",
              label: "Password мульти подполе",
              value: ['123456', '456789', '789123'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Password"
            }
          ]
        },
      ],
      num: [
        {
          id: "numMulti1",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Число"
        },
        {
          id: "numMulti2",
          property: "num",
          name: "NUM_MULTI",
          label: "Заполненные поля Число",
          value: ['123456', '0', '0.45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Число"
        },
        {
          id: "numMulti3",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Число с подполем",
          sub: [
            {
              id: "numMultiSub1",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Число"
            }
          ]
        },
        {
          id: "numMulti4",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: '45',
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Число с подполем",
          sub: [
            {
              id: "numMultiSub2",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число подполе",
              value: "100000",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Число"
            }
          ]
        },
        {
          id: "numMulti5",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Число мультиполе с подполем",
          sub: [
            {
              id: "numMultiSub3",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Число"
            }
          ]
        },
        {
          id: "numMulti6",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: ['123456', '0', '0.45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Число мультиполе с подполем",
          sub: [
            {
              id: "numMultiSub4",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Число"
            }
          ]
        },
        {
          id: "numMulti7",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: ['123456', '0', '0.45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Число мультиполе с подполем",
          sub: [
            {
              id: "numMultiSub5",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Число"
            }
          ]
        },
        {
          id: "numMulti8",
          property: "num",
          name: "NUM_MULTI",
          label: "Число",
          value: ['123456', '0', '0.45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Число с мульти подполем",
          sub: [
            {
              id: "numMultiSub6",
              property: "num",
              name: "NUM_MULTI_SUB",
              label: "Число мульти подполе",
              value: ['123456', '0', '0.45'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Число"
            }
          ]
        },
      ],
      timesingle: [
        {
          id: "timesingleMulti1",
          property: "time",
          type: "single",
          name: "NUM_MULTI",
          label: "Время",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Время"
        },
        {
          id: "timesingleMulti2",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Заполненные поля Время",
          value: ['9:00', '0:05', '23:45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Время"
        },
        {
          id: "timesingleMulti3",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Время с подполем",
          sub: [
            {
              id: "timesingleMultiSub1",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Время"
            }
          ]
        },
        {
          id: "timesingleMulti4",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: '8:00',
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Время с подполем",
          sub: [
            {
              id: "timesingleMultiSub2",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время подполе",
              value: "10:15",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Время"
            }
          ]
        },
        {
          id: "timesingleMulti5",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Время мультиполе с подполем",
          sub: [
            {
              id: "timesingleMultiSub3",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Время"
            }
          ]
        },
        {
          id: "timesingleMulti6",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: ['9:00', '0:05', '23:45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Время мультиполе с подполем",
          sub: [
            {
              id: "timesingleMultiSub4",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Время"
            }
          ]
        },
        {
          id: "timesingleMulti7",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: ['9:00', '0:05', '23:45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Время мультиполе с подполем",
          sub: [
            {
              id: "timesingleMultiSub5",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Время"
            }
          ]
        },
        {
          id: "timesingleMulti8",
          property: "time",
          type: "single",
          name: "TIMESINGLE_MULTI",
          label: "Время",
          value: ['9:00', '0:05', '23:45'],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Время с мульти подполем",
          sub: [
            {
              id: "timesingleMultiSub6",
              property: "time",
              type: "single",
              name: "TIMESINGLE_MULTI_SUB",
              label: "Время мульти подполе",
              value: ['9:00', '0:05', '23:45'],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Время"
            }
          ]
        },
      ],
      hint: [
        {
          id: "hintMulti1",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Подсказка"
        },
        {
          id: "hintMulti2",
          property: "hint",
          name: "HINT_MULTI",
          label: "Заполненные поля Подсказка",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Подсказка"
        },
        {
          id: "hintMulti3",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: '',
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          required: false,
          disabled: false,
          hint_external: "Подсказка с подполем",
          sub: [
            {
              id: "hintMultiSub1",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка"
            }
          ]
        },
        {
          id: "hintMulti4",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: {
              id: "2",
              value: "Second"
            },
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Подсказка с подполем",
          sub: [
            {
              id: "hintMultiSub2",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка подполе",
              value: {
                  id: "2",
                  value: "Second"
                },
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Подсказка"
            }
          ]
        },
        {
          id: "hintMulti5",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Подсказка мультиполе с подполем",
          sub: [
            {
              id: "hintMultiSub3",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка"
            }
          ]
        },
        {
          id: "hintMulti6",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка мультиполе с подполем",
          sub: [
            {
              id: "hintMultiSub4",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка"
            }
          ]
        },
        {
          id: "hintMulti7",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка мультиполе с подполем",
          sub: [
            {
              id: "hintMultiSub5",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка подполе",
              value: [],
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Подсказка"
            }
          ]
        },
        {
          id: "hintMulti8",
          property: "hint",
          name: "HINT_MULTI",
          label: "Подсказка",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Подсказка с мульти подполем",
          sub: [
            {
              id: "hintMultiSub6",
              property: "hint",
              name: "HINT_MULTI_SUB",
              label: "Подсказка мульти подполе",
              value: [
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
              count: 3,
              action: "/markup/vue/design-system/hints.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Подсказка"
            }
          ]
        },
      ],
      hintHtml: [
        {
          id: "hintHtmlMulti1",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Подсказка с html"
        },
        {
          id: "hintHtmlMulti2",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Заполненные поля Подсказка с html",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Подсказка с html"
        },
        {
          id: "hintHtmlMulti3",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: '',
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          required: false,
          disabled: false,
          hint_external: "Подсказка с html с подполем",
          sub: [
            {
              id: "hintHtmlMultiSub1",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с html"
            }
          ]
        },
        {
          id: "hintHtmlMulti4",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: {
              id: "2",
              value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>"
            },
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Подсказка с html с подполем",
          sub: [
            {
              id: "hintHtmlMultiSub2",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html подполе",
              value: {
                  id: "2",
                  value: "<img src='/local/templates/aas/images/logo-aas-small.svg' width='30' height='30' alt=''><div style='width: 10px'></div><div data-value >Second</div>"
                },
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Подсказка с html"
            }
          ]
        },
        {
          id: "hintHtmlMulti5",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Подсказка с html мультиполе с подполем",
          sub: [
            {
              id: "hintHtmlMultiSub3",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с html"
            }
          ]
        },
        {
          id: "hintHtmlMulti6",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с html мультиполе с подполем",
          sub: [
            {
              id: "hintHtmlMultiSub4",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с html"
            }
          ]
        },
        {
          id: "hintHtmlMulti7",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с html мультиполе с подполем",
          sub: [
            {
              id: "hintHtmlMultiSub5",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html подполе",
              value: [],
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Подсказка с html"
            }
          ]
        },
        {
          id: "hintHtmlMulti8",
          property: "hint",
          name: "HINT_HTML_MULTI",
          label: "Подсказка с html",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-html.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Подсказка с html с мульти подполем",
          sub: [
            {
              id: "hintHtmlMultiSub6",
              property: "hint",
              name: "HINT_HTML_MULTI_SUB",
              label: "Подсказка с html мульти подполе",
              value: [
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
              count: 3,
              action: "/markup/vue/design-system/hints-html.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Подсказка с html"
            }
          ]
        },
      ],
      hintAutocomplete: [
        {
          id: "hintAutocompleteMulti1",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Подсказка с autocomplete"
        },
        {
          id: "hintAutocompleteMulti2",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Заполненные поля Подсказка с autocomplete",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Подсказка с autocomplete"
        },
        {
          id: "hintAutocompleteMulti3",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: '',
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          required: false,
          disabled: false,
          hint_external: "Подсказка с autocomplete с подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub1",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с autocomplete"
            }
          ]
        },
        {
          id: "hintAutocompleteMulti4",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: {
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
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Подсказка с autocomplete с подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub2",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete подполе",
              value: {
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
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Подсказка с autocomplete"
            }
          ]
        },
        {
          id: "hintAutocompleteMulti5",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Подсказка с autocomplete мультиполе с подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub3",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с autocomplete"
            }
          ]
        },
        {
          id: "hintAutocompleteMulti6",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с autocomplete мультиполе с подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub4",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с autocomplete"
            }
          ]
        },
        {
          id: "hintAutocompleteMulti7",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с autocomplete мультиполе с подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub5",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete подполе",
              value: [],
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Подсказка с autocomplete"
            }
          ]
        },
        {
          id: "hintAutocompleteMulti8",
          property: "hint",
          name: "HINT_AUTOCOMPLETE_MULTI",
          label: "Подсказка с autocomplete",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-autocomplete.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Подсказка с autocomplete с мульти подполем",
          sub: [
            {
              id: "hintAutocompleteMultiSub6",
              property: "hint",
              name: "HINT_AUTOCOMPLETE_MULTI_SUB",
              label: "Подсказка с autocomplete мульти подполе",
              value: [
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
              count: 3,
              action: "/markup/vue/design-system/hints-autocomplete.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Подсказка с autocomplete"
            }
          ]
        },
      ],
      hintHidden: [
        {
          id: "hintHiddenMulti1",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле Подсказка с hidden"
        },
        {
          id: "hintHiddenMulti2",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Заполненные поля Подсказка с hidden",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле Подсказка с hidden"
        },
        {
          id: "hintHiddenMulti3",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка",
          value: '',
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          required: false,
          disabled: false,
          hint_external: "Подсказка с hidden с подполем",
          sub: [
            {
              id: "hintHiddenMultiSub1",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с hidden"
            }
          ]
        },
        {
          id: "hintHiddenMulti4",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: {
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
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          required: false,
          disabled: false,
          hint_external: "Заполненное поле Подсказка с hidden с подполем",
          sub: [
            {
              id: "hintHiddenMultiSub2",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка с hidden подполе",
              value: {
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
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              required: false,
              disabled: false,
              hint_external: "Заполненное подполе Подсказка с hidden"
            }
          ]
        },
        {
          id: "hintHiddenMulti5",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: [],
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Подсказка с hidden мультиполе с подполем",
          sub: [
            {
              id: "hintHiddenMultiSub3",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка с hidden подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с hidden"
            }
          ]
        },
        {
          id: "hintHiddenMulti6",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с hidden мультиполе с подполем",
          sub: [
            {
              id: "hintHiddenMultiSub4",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка с hidden подполе",
              value: "",
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              required: false,
              disabled: false,
              hint_external: "Простое подполе Подсказка с hidden"
            }
          ]
        },
        {
          id: "hintHiddenMulti7",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное Подсказка с hidden мультиполе с подполем",
          sub: [
            {
              id: "hintHiddenMultiSub5",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка с hidden подполе",
              value: [],
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе Подсказка с hidden"
            }
          ]
        },
        {
          id: "hintHiddenMulti8",
          property: "hint",
          name: "HINT_HIDDEN_MULTI",
          label: "Подсказка с hidden",
          value: [
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
          count: 3,
          action: "/markup/vue/design-system/hints-hidden.json",
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе Подсказка с hidden с мульти подполем",
          sub: [
            {
              id: "hintHiddenMultiSub6",
              property: "hint",
              name: "HINT_HIDDEN_MULTI_SUB",
              label: "Подсказка с hidden мульти подполе",
              value: [
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
              count: 3,
              action: "/markup/vue/design-system/hints-hidden.json",
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе Подсказка с hidden"
            }
          ]
        },
      ],
      dateRange: [
        {
          id: "dateRangeMulti1",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле интервал дат"
        },
        {
          id: "dateRangeMulti2",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Заполненные поля интервал дат",
          value: [
            ["20.02.2024", "28.02.2024"],
            ["20.04.2024", "28.04.2024"],
            ["20.08.2024", "28.08.2024"]
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле интервал дат"
        },
        {
          id: "dateRangeMulti3",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат с подполем",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Поле интервал дат с подполем",
          sub: [
            {
              id: "dateRangeMultiSub1",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Интервал дат подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое поле интервал дат"
            }
          ]
        },
        {
          id: "dateRangeMulti4",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат заполненное",
          value: ["20.02.2024", "28.02.2024"],
          required: false,
          disabled: false,
          hint_external: "Заполненное поле интервал дат с подполем",
          sub: [
            {
              id: "dateRangeMultiSub2",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Интервал дат подполе заполненное",
              value: ["20.02.2024", "28.02.2024"],
              required: false,
              disabled: false,
              hint_external: "Заполненное поле интервал дат"
            }
          ]
        },
        {
          id: "dateRangeMulti5",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат мультиполе",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Мультиполе интервал дат с подполем",
          sub: [
            {
              id: "dateRangeMultiSub3",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Интервал дат подполе",
              value: ["20.02.2024", "28.02.2024"],
              required: false,
              disabled: false,
              hint_external: "Интервал дат подполе"
            }
          ]
        },
        {
          id: "dateRangeMulti6",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат заполненное",
          value: [
            ["20.02.2024", "28.02.2024"],
            ["20.04.2024", "28.04.2024"],
            ["20.08.2024", "28.08.2024"]
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе интервал дат с подполем",
          sub: [
            {
              id: "dateRangeMultiSub4",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Текстовое подполе",
              value: [],
              required: false,
              disabled: false,
              hint_external: "Простое подполе интервал дат"
            }
          ]
        },
        {
          id: "dateRangeMulti7",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат заполненное",
          value: [
            ["20.02.2024", "28.02.2024"],
            ["20.04.2024", "28.04.2024"],
            ["20.08.2024", "28.08.2024"]
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе интервал дат с подполем",
          sub: [
            {
              id: "dateRangeMultiSub5",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Интервал дат подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе интервал дат"
            }
          ]
        },
        {
          id: "dateRangeMulti8",
          property: "date",
          type: "range",
          name: "DATE_RANGE_MULTI",
          label: "Интервал дат",
          value: [
            ["20.02.2024", "28.02.2024"],
            ["20.04.2024", "28.04.2024"],
            ["20.08.2024", "28.08.2024"]
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе интервал дат с мульти подполем",
          sub: [
            {
              id: "dateRangeMultiSub6",
              property: "date",
              type: "range",
              name: "DATE_RANGE_MULTI_SUB",
              label: "Мульти подполе интервал дат",
              value: [
                ["20.02.2024", "28.02.2024"],
                ["20.04.2024", "28.04.2024"],
                ["20.08.2024", "28.08.2024"]
              ],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе интервал дат"
            }
          ]
        },
      ],
      dateSingle: [
        {
          id: "dateSingleMulti1",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Множественное поле дата"
        },
        {
          id: "dateSingleMulti2",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Заполненное поле дата",
          value: [
            "28.02.2024",
            "28.03.2024",
            "28.04.2024"
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное множественное поле дата"
        },
        {
          id: "dateSingleMulti3",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата с подполем",
          value: '',
          required: false,
          disabled: false,
          hint_external: "Дата с подполем",
          sub: [
            {
              id: "dateSingleMultiSub1",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Дата подполе",
              value: "",
              required: false,
              disabled: false,
              hint_external: "Простое поле дата"
            }
          ]
        },
        {
          id: "dateSingleMulti4",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата заполненное",
          value: "28.03.2024",
          required: false,
          disabled: false,
          hint_external: "Заполненное поле дата с подполем",
          sub: [
            {
              id: "dateSingleMultiSub2",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Дата подполе заполненное",
              value: "28.03.2024",
              required: false,
              disabled: false,
              hint_external: "Заполненное поле дата"
            }
          ]
        },
        {
          id: "dateSingleMulti5",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата мультиполе",
          value: [],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Мультиполе дата с подполем",
          sub: [
            {
              id: "dateSingleMultiSub3",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Дата подполе",
              value: "28.03.2024",
              required: false,
              disabled: false,
              hint_external: "Дата подполе"
            }
          ]
        },
        {
          id: "dateSingleMulti6",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата заполненное",
          value: [
            "28.02.2024",
            "28.03.2024",
            "28.04.2024"
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе дата с подполем",
          sub: [
            {
              id: "dateSingleMultiSub4",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Подполе дата",
              value: [],
              required: false,
              disabled: false,
              hint_external: "Простое подполе дата"
            }
          ]
        },
        {
          id: "dateSingleMulti7",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата мультиполе заполненное",
          value: [
            "28.02.2024",
            "28.03.2024",
            "28.04.2024"
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе дата с подполем",
          sub: [
            {
              id: "dateSingleMultiSub5",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Дата подполе",
              value: [],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Мульти подполе дата"
            }
          ]
        },
        {
          id: "dateSingleMulti8",
          property: "date",
          type: "single",
          name: "DATE_SINGLE_MULTI",
          label: "Дата",
          value: [
            "28.02.2024",
            "28.03.2024",
            "28.04.2024"
          ],
          multi: 3,
          required: false,
          disabled: false,
          hint_external: "Заполненное мультиполе дата с мульти подполем",
          sub: [
            {
              id: "dateSingleMultiSub6",
              property: "date",
              type: "single",
              name: "DATE_SINGLE_MULTI_SUB",
              label: "Мульти подполе дата",
              value: [
                "28.02.2024",
                "28.03.2024",
                "28.04.2024"
              ],
              multi: 3,
              required: false,
              disabled: false,
              hint_external: "Заполненное мульти подполе дата"
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
