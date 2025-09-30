import './answer-item.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const AnswerItem = {
    data() {
        return {
            nopic: '/local/templates/aas/images/nopic.svg',
            controls: [
                {
                    "property": "select",
                    "type": "radio",
                    "id": `control${Math.floor(Math.random() * 10000)}`,
                    "name": `SELECT_BUTTON_TEXT${Math.floor(Math.random() * 10000)}`,
                    "label": "",
                    "options": [
                        {
                        "label": "",
                        "code": "1"
                        }
                    ],
                    "value": "",
                },
                {
                    "property": "checkbox",
                    "type": "checkbox",
                    "id": `control${Math.floor(Math.random() * 10000)}`,
                    "name": `DEPENDENCY_CHECKBOX${Math.floor(Math.random() * 10000)}`,
                    "label": "",
                    "value": "on",
                    "checked": true,
                }
            ]
        }
    },
    props: ['answer', 'type'],
    emits: ['deleteAnswer', 'editAnswer'],
    components: {
        ControlChoice,
        ButtonComponent
    },
    template: `
        <div class="twpx-poll-answer-item">
            <div class="twpx-poll-answer-item__info">
                <img :src="answer.image || nopic" width="48" height="48" alt="" />
                <div class="twpx-poll-answer-item__text">{{ answer.name }}</div>
                <ControlChoice :control="controls[ type ]" @input="input" />
            </div>
            <div class="twpx-poll-answer-item__buttons">
                <ButtonComponent :text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="clickDelete" />
                <ButtonComponent :text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="clickEdit" />
            </div>
        </div>
    `,
    methods: {
        input({control, value, checked}) {
            console.log(control, checked)
            if (checked) {
                control.checked = checked;
            } else if (value) {
                control.value = value;
            }
        },
        clickDelete() {
            this.$emit('deleteAnswer', this.answer);
        },
        clickEdit() {
            this.$emit('editAnswer', this.answer);
        },
    }
}