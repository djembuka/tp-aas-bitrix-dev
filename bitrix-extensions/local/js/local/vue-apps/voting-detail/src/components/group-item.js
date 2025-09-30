import './group-item.css'
import { QuestionItem } from './question-item.js'

import { ButtonComponent } from 'local.vue-components.button-component';

export const GroupItem = {
    props: ['lang', 'group', 'questions', 'answers'],
    emits: [
        'editGroup',
        'deleteGroup',
        'addQuestion',
        'editQuestion',
        'deleteQuestion',
        'addAnswer',
        'editAnswer',
        'deleteAnswer'
    ],
    components: {
        ButtonComponent,
        QuestionItem
    },
    template: `
        <div class="twpx-poll-group-item">
            <div class="twpx-poll-group-item__wrapper">
                <div class="twpx-poll-group-item__info">
                    <h2>{{ group.name }}</h2>
                    <div class="twpx-poll-group-item__text">{{ group.description }}</div>
                </div>
                <div class="twpx-poll-group-item__buttons">
                    <ButtonComponent text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="clickDelete" />
                    <ButtonComponent text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="clickEdit" />
                </div>
            </div>

            <div class="twpx-poll-group-item__questions" v-if="questions && questions.length">
                <QuestionItem v-for="question in questions"
                    :key="question.uuid"
                    :question="question"
                    :answers="answers[question.uuid]"
                    @editQuestion="editQuestion"
                    @deleteQuestion="deleteQuestion"
                    @addAnswer="addAnswer"
                    @editAnswer="editAnswer"
                    @deleteAnswer="deleteAnswer"
                />

                <div class="twpx-poll-group-item__button">
                    <div class="twpx-poll-group-item__button__wrapper">
                        <h4>{{ lang.heading }}</h4>
                        <div>{{ lang.text }}</div>
                    </div>
                    <ButtonComponent :text="lang.button" :props="['success', 'medium']" @clickButton="addQuestion" />
                </div>
            </div>

            <div class="twpx-poll-group-item__button" v-else>
                <ButtonComponent :text="lang.button" :props="['success', 'medium']" @clickButton="addQuestion" />
            </div>
        </div>
    `,
    methods: {
        clickDelete() {
            this.$emit('deleteGroup', this.group);
        },
        clickEdit() {
            this.$emit('editGroup', this.group);
        },
        addQuestion() {
            this.$emit('addQuestion', this.group);
        },
        editQuestion(args) {
            this.$emit('editQuestion', args);
        },
        deleteQuestion(args) {
            this.$emit('deleteQuestion', args);
        },
        addAnswer(args) {
            this.$emit('addAnswer', args);
        },
        editAnswer(args) {
            this.$emit('editAnswer', args);
        },
        deleteAnswer(args) {
            this.$emit('deleteAnswer', args);
        }
    }
}