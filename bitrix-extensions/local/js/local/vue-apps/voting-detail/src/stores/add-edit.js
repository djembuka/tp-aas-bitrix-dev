import { defineStore } from 'ui.vue3.pinia';

export const addEditStore = defineStore('add-edit', {
    state: () => ({
        lang: {
            group: {
                add: {
                    heading: 'Создать группу вопросов',
                    cancelButton: 'Отменить',
                    sendButton: 'Создать'
                },
                edit: {
                    heading: 'Изменить группу вопросов',
                    cancelButton: 'Отменить',
                    sendButton: 'Изменить'
                }
            },
            question: {
                add: {
                    heading: 'Добавить вопрос',
                    cancelButton: 'Отменить',
                    sendButton: 'Добавить'
                },
                edit: {
                    heading: 'Изменить вопрос',
                    cancelButton: 'Отменить',
                    sendButton: 'Изменить'
                }
            },
            answer: {
                add: {
                    heading: 'Добавить ответ',
                    cancelButton: 'Отменить',
                    sendButton: 'Добавить'
                },
                edit: {
                    heading: 'Изменить ответ',
                    cancelButton: 'Отменить',
                    sendButton: 'Изменить'
                }
            }
        },
        
        addEditStateWatcher: false,
        addEditLoading: false,
        addEditError: '',

        image: '',// string with image url, needed for detect imageUpdate property
    }),
    actions: {
        addEditChangeProp(prop, value) {
            this[prop] = value;
        },
    }
})