import './question-item.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

import { AnswerItem } from './answer-item'

export const QuestionItem = {
    props: ['question', 'answers'],
    emits: ['deleteQuestion', 'editQuestion', 'addAnswer', 'editAnswer', 'deleteAnswer'],
    components: {
        ControlChoice,
        ButtonComponent,
        AnswerItem
    },
    template: `
        <div class="twpx-poll-question-item">
            <div class="twpx-poll-question-item__wrapper">
                <div class="twpx-poll-question-item__text">{{ question.name }}</div>
                <div class="twpx-poll-question-item__buttons">
                    <ButtonComponent :text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="clickDelete" />
                    <ButtonComponent :text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="clickEdit" />
                </div>
            </div>

            <div class="twpx-poll-question-item__answers-block" v-if="answers && answers.length">
                <div class="twpx-poll-answers">
                    <AnswerItem v-for="answer in answers"
                        :key="answer.uuid"
                        :answer="answer"
                        :type="question.type"
                        @editAnswer="editAnswer"
                        @deleteAnswer="deleteAnswer"
                    />
                </div>
                <div class="twpx-poll-question-item__answers-block__button">
                    <ButtonComponent text="Добавить ответ" :props="['success', 'medium']" @clickButton="addAnswer" />
                </div>
            </div>

            <div class="twpx-poll-question-item__button" v-else>
                <ButtonComponent text="Добавить ответ" :props="['success', 'medium']" @clickButton="addAnswer" />
            </div>
        </div>
    `,
    methods: {
        clickDelete() {
            this.$emit('deleteQuestion', this.question);
        },
        clickEdit() {
            this.$emit('editQuestion', this.question);
        },
        addAnswer() {
            this.$emit('addAnswer', this.question);
        },
        editAnswer(args) {
            this.$emit('editAnswer', args);
        },
        deleteAnswer(args) {
            this.$emit('deleteAnswer', args);
        },
    }
}