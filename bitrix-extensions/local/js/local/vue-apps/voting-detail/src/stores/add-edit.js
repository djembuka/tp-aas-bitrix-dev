import { defineStore } from 'ui.vue3.pinia';

export const addEditStore = defineStore('add-edit', {
    state: () => ({
        lang: {
            group: {
                add: {
                    heading: BX.message('TWPX_VOTING_DETAIL_GROUP_ADD_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_GROUP_ADD_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_GROUP_ADD_SEND_BUTTON')
                },
                edit: {
                    heading: BX.message('TWPX_VOTING_DETAIL_GROUP_EDIT_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_GROUP_EDIT_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_GROUP_EDIT_SEND_BUTTON')
                }
            },
            question: {
                add: {
                    heading: BX.message('TWPX_VOTING_DETAIL_QUESTION_ADD_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_QUESTION_ADD_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_QUESTION_ADD_SEND_BUTTON')
                },
                edit: {
                    heading: BX.message('TWPX_VOTING_DETAIL_QUESTION_EDIT_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_QUESTION_EDIT_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_QUESTION_EDIT_SEND_BUTTON')
                }
            },
            answer: {
                add: {
                    heading: BX.message('TWPX_VOTING_DETAIL_ANSWER_ADD_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_ANSWER_ADD_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_ANSWER_ADD_SEND_BUTTON')
                },
                edit: {
                    heading: BX.message('TWPX_VOTING_DETAIL_ANSWER_EDIT_HEADING'),
                    cancelButton: BX.message('TWPX_VOTING_DETAIL_ANSWER_EDIT_CANCEL_BUTTON'),
                    sendButton: BX.message('TWPX_VOTING_DETAIL_ANSWER_EDIT_SEND_BUTTON')
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