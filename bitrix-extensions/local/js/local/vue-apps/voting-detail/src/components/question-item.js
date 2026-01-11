import './question-item.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { DocComponent } from 'local.vue-components.doc-component';

import { AnswerItem } from './answer-item';

export const QuestionItem = {
    props: ['question', 'answers'],
    emits: ['deleteQuestion', 'editQuestion', 'addAnswer', 'editAnswer', 'deleteAnswer'],
    components: {
        ControlChoice,
        ButtonComponent,
        DocComponent,
        AnswerItem
    },
    template: `
        <div class="twpx-poll-question-item">
            <div class="twpx-poll-question-item__wrapper">
                <div class="twpx-poll-question-item__info">
                    <h4 v-if="question.name">{{ question.name }}</h4>
                    <div v-if="question.description" class="twpx-poll-question-item__text">{{ question.description }}</div>
                    <div v-if="question.files" class="twpx-poll-question-item__files">
                        <DocComponent v-for="doc in question.files" :key="doc.id" :doc="doc" />
                    </div>
                </div>
                <div class="twpx-poll-question-item__buttons">
                    <ButtonComponent :text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="clickEdit" />
                    <ButtonComponent :text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="clickDelete" />
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
                    <ButtonComponent :text="BX.message('TWPX_VOTING_DETAIL_QUESTION_ITEM_ADD_BUTTON')" :props="['success', 'medium']" @clickButton="addAnswer" />
                </div>
            </div>

            <div class="twpx-poll-question-item__button" v-else>
                <ButtonComponent :text="BX.message('TWPX_VOTING_DETAIL_QUESTION_ITEM_ADD_BUTTON')" :props="['success', 'medium']" @clickButton="addAnswer" />
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