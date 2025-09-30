import './groups-component.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';
import { addEditStore } from '../stores/add-edit.js';

import { ModalYesNo } from 'local.vue-components.modal-yes-no';

import { GroupItem } from './group-item';
import { ButtonComponent } from 'local.vue-components.button-component';

export const GroupsComponent = {
    components: {
        ModalYesNo,
        GroupItem,
        ButtonComponent
    },
    template: `
        <div class="twpx-poll-group-block">
            <h2>{{ lang.group.block.heading }}</h2>
            <div v-html="lang.group.block.text"></div>
            <div>
                <ButtonComponent :text="lang.group.block.button" :props="['success', 'medium']" @clickButton="addGroup" />
            </div>
        </div>

        <GroupItem v-for="group in groups" :key="group.id"
            :lang="lang.groupItem"
            :group="group"
            :questions="questions[group.uuid]"
            :answers="answers"
            @editGroup="editGroup"
            @deleteGroup="deleteGroup"
            @addQuestion="addQuestion"
            @editQuestion="editQuestion"
            @deleteQuestion="deleteQuestion"
            @addAnswer="addAnswer"
            @editAnswer="editAnswer"
            @deleteAnswer="deleteAnswer"
        />

        <ModalYesNo
            :heading="currentLang.heading"
            :text="currentLang.text"
            :yes="currentLang.yes"
            :no="currentLang.no"
            :buttons="{
                yes: {
                    props: ['danger', 'large']
                },
                no: {
                    props: ['gray-color', 'large']
                }
            }"
            :stateWatcher="deleteModalStateWatcher"
            @clickYes="clickDeleteModalYes"
            @clickNo="clickDeleteModalNo"
        />
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',

            'uuid',

            'typeMode',
            'actionMode',

            'groups',
            'questions',
            'answers',

            'deleteModalStateWatcher',
            'itemToDelete'
        ]),
        ...mapState(controlsStore, [
            'questionFormBlocks',
        ]),
        ...mapState(addEditStore, [
            'addEditStateWatcher',
        ]),
        currentLang() {
            return this.lang.deleteModal[ this.typeMode ];
        },
    },
    methods: {
        ...mapActions(dataStore, [
            'runBitrixMethod',
            'changeProp',
            'pushItemsArray'
        ]),
        ...mapActions(controlsStore, [
            'fillGroupForm',
            'fillQuestionForm',
            'fillAnswerForm',
            'changeControlValue'
        ]),
        ...mapActions(addEditStore, [
            'addEditChangeProp',
        ]),
        addGroup() {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', '');
            this.changeProp('typeMode', 'group');
            this.changeProp('actionMode', 'add');
        },
        editGroup(group) {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', group.image);
            this.changeProp('typeMode', 'group');
            this.changeProp('actionMode', 'edit');
            this.fillGroupForm(group);
        },
        deleteGroup(group) {
            this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
            this.changeProp('typeMode', 'group');
            this.changeProp('itemToDelete', group);
        },
        async clickDeleteModalYes() {
            const item = {...this.itemToDelete};
            try {
                this.changeProp('loading', true);
                if (this.typeMode === 'group') {
                    await this.runBitrixMethod('deleteGroupQuestions', {uuid: item.uuid});
                    const groupResult = await this.runBitrixMethod('groupsQuestions', { uuid: this.uuid });
                    this.changeProp('groups', groupResult.data);
                } else if (this.typeMode === 'question') {
                    await this.runBitrixMethod('deleteQuestion', {uuid: item.uuid});
                    const questionsResult = await this.runBitrixMethod('questions', { uuid: item.parentUuid });
                    this.pushItemsArray({type: 'questions', parentUuid: item.parentUuid, itemsArray: questionsResult.data});
                } else if (this.typeMode === 'answer') {
                    await this.runBitrixMethod('deleteAnswer', {uuid: item.uuid});
                    const questionsResult = await this.runBitrixMethod('answers', { uuid: item.parentUuid });
                    this.pushItemsArray({type: 'answers', parentUuid: item.parentUuid, itemsArray: questionsResult.data});
                }
                this.changeProp('loading', false);
            } catch(error) {
                this.changeProp('loading', false);
                this.changeProp('error', error?.errors?.[0]?.message || error);
            }
        },
        clickDeleteModalNo() {
            this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
        },
        addQuestion(group) {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', '');
            this.changeProp('typeMode', 'question');
            this.changeProp('actionMode', 'add');
            this.changeProp('groupUuid', group.uuid);
        },
        editQuestion(question) {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', question.image);
            this.changeProp('typeMode', 'question');
            this.changeProp('actionMode', 'edit');
            this.changeProp('groupUuid', question.parentUuid);
            this.fillQuestionForm(question);
        },
        deleteQuestion(question) {
            this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
            this.changeProp('typeMode', 'question');
            this.changeProp('itemToDelete', question);
        },
        addAnswer(question) {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', '');
            this.changeProp('typeMode', 'answer');
            this.changeProp('actionMode', 'add');
            this.changeProp('questionUuid', question.uuid);
        },
        editAnswer(answer) {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditError', '');
            this.addEditChangeProp('image', answer.image);
            this.changeProp('typeMode', 'answer');
            this.changeProp('actionMode', 'edit');
            this.changeProp('questionUuid', answer.parentUuid);
            this.fillAnswerForm(answer);
        },
        deleteAnswer(answer) {
            this.changeProp('deleteModalStateWatcher', !this.deleteModalStateWatcher);
            this.changeProp('typeMode', 'answer');
            this.changeProp('itemToDelete', answer);
        },
    }
}