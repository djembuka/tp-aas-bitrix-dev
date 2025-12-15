import './add-edit-form.css'

import { ModalAnyContent } from 'local.vue-components.modal-any-content';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { MessageComponent } from 'local.vue-components.message-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { controlsStore } from '../stores/controls.js';
import { addEditStore } from '../stores/add-edit.js';

export const AddEditForm = {
    components: {
        ModalAnyContent,
        LoaderCircle,
        ControlChoice,
        ButtonComponent,
        MessageComponent
    },
    template: `
        <ModalAnyContent :stateWatcher="addEditStateWatcher">
            <div class="twpx-poll-detail__loader" v-if="addEditLoading">
                <LoaderCircle :show="addEditLoading" />
            </div>

            <MessageComponent v-else-if="addEditError" type="error" size="big" :message="addEditError" />

            <div v-else class="twpx-poll-add-form">
                <h2>{{ currentLang.heading }}</h2>

                <div class="twpx-poll-add-form__block" v-for="block in currentBlocks" :key="block.id" :data-id="block.id">
                    <h4>{{ block.heading }}</h4>
                    <div class="twpx-poll-add-form__controls">
                        <ControlChoice  v-for="control in block.controls" :key="control.id"
                            :control="control"
                            @input="input"
                            @hints="hints"
                            @create="createMulti"
                            @add="addMulti"
                            @remove="removeMulti"
                        />
                    </div>
                </div>
                    
                <div class="twpx-poll-add-form__buttons">
                    <ButtonComponent :text="currentLang.cancelButton" :props="['gray-color', 'large']" @clickButton="clickCancel" />
                    <ButtonComponent :text="currentLang.sendButton" :disabled="sendButtonDisabled" :props="['secondary', 'large']" @clickButton="clickSend" />
                </div>
            </div>
        </ModalAnyContent>
    `,
    computed: {
        ...mapState(dataStore, [
          'uuid',
          'groupUuid',
          'questionUuid',

          'typeMode',
          'actionMode',
    
          'groups',
          'questions',
          'answers',
        ]),
        ...mapState(addEditStore, [
          'lang',
    
          'addEditStateWatcher',
          'addEditLoading',
          'addEditError',

          'image'
        ]),
        ...mapState(controlsStore, [
          'groupFormBlocks',
          'questionFormBlocks',
          'answerFormBlocks',
          'createMulti',
          'addMulti',
          'removeMulti',
        ]),
        currentLang() {
            return this.lang[ this.typeMode ][ this.actionMode ];
        },
        currentBlocks() {
            return this[`${this.typeMode}FormBlocks`]
        },
        sendButtonDisabled() {
            return this.currentBlocks.some(block => block.controls.some(control => control.required && !control.value));
        },
    },
    methods: {
        ...mapActions(dataStore, [
            'runBitrixMethod',
            'changeProp',
            'pushItemsArray'
        ]),
        ...mapActions(controlsStore, [
            'changeControlValue',

            'changeGroupFormBlocks',
            'changeQuestionFormBlocks',

            'fillGroupForm',
            'fillQuestionForm',
            'fillAnswerForm',

            'runHints',
            'setHints'
        ]),
        ...mapActions(addEditStore, [
            'addEditChangeProp',
        ]),
        input(args) {
            this.changeControlValue(args);
        },
        hints({ control, type, action, value }) {
            if (type === 'get') {
                this.runHints(control, action);
            } else if (type === 'set') {
                this.setHints(control, value);
            }
        },
        clickCancel() {
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            this.addEditChangeProp('addEditLoading', false)
            this.addEditChangeProp('addEditError', '')
            setTimeout(() => {
                const capitalizedType = this.typeMode.charAt(0).toUpperCase() + this.typeMode.slice(1);
                this[`fill${capitalizedType}Form`]()
            }, 300)
        },
        async clickSend() {
            this.addEditChangeProp('addEditLoading', true);
            
            try {
                const capitalizedType = this.typeMode.charAt(0).toUpperCase() + this.typeMode.slice(1);
                await this[`handle${capitalizedType}Submission`]();
            } catch (error) {
                this.handleError(error);
            }
        },
        async handleGroupSubmission() {
            const formData = this.createGroupFormData();
            
            await this.runBitrixMethod('editGroupQuestions', null, formData);
            const groupsResult = await this.runBitrixMethod('groupsQuestions', { uuid: this.uuid });

            this.handleSuccess(groupsResult.data);
        },
        async handleQuestionSubmission() {
            const formData = this.createQuestionFormData();

            await this.runBitrixMethod('editQuestion', null, formData);
            const questionsResult = await this.runBitrixMethod('questions', { uuid: this.groupUuid });

            this.handleSuccess(questionsResult.data);
        },
        async handleAnswerSubmission() {
            const formData = this.createAnswerFormData();

            await this.runBitrixMethod('editAnswer', null, formData);
            const answersResult = await this.runBitrixMethod('answers', { uuid: this.questionUuid });

            this.handleSuccess(answersResult.data);
        },
    
        createGroupFormData() {
            const formData = new FormData();

            let imageUpdate = 2;// nothing to do with the image
            if (this.groupFormBlocks[0].controls[3].file) {
                imageUpdate = 1;// add or rewrite the image
            } else if (!this.groupFormBlocks[0].controls[3].value && this.image) {
                imageUpdate = 0;// delete the image
            }

            const data = {
                uuid: this.groupFormBlocks[0].controls[0].value,
                parentUuid: this.uuid,
                name: this.groupFormBlocks[0].controls[1].value,
                description: this.groupFormBlocks[0].controls[2].value,
                image: this.groupFormBlocks[0].controls[3].file,
                sortIndex: Number(this.groupFormBlocks[1].controls[0].value),
                imageUpdate
            };
        
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    formData.append(key, value);
                }
            });
        
            return formData;
        },
    
        createQuestionFormData() {
            const formData = new FormData();

            let imageUpdate = 2;// nothing to do with the image
            if (this.questionFormBlocks[0].controls[3].file) {
                imageUpdate = 1;// add or rewrite the image
            } else if (!this.questionFormBlocks[0].controls[3].value && this.image) {
                imageUpdate = 0;// delete the image
            }

            const data = {
                parentUuid: this.groupUuid,
                uuid: this.questionFormBlocks[0].controls[0].value,
                name: this.questionFormBlocks[0].controls[1].value,
                description: this.questionFormBlocks[0].controls[2].value,
                image: this.questionFormBlocks[0].controls[3].file,

                files: this.questionFormBlocks[1].controls[0].multi.map(c => c.file),

                type: Number(this.questionFormBlocks[2].controls[0].value),
                selectableAnswers: Number(this.questionFormBlocks[2].controls[1].value),
                sortIndex: Number(this.questionFormBlocks[2].controls[2].value),
                imageUpdate
            };
        
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    if (Array.isArray(value)) {
                        value.forEach((v, i) => {
                            if (v) {
                                formData.append(`${key}[${i}]`, v);
                            }
                        })
                    } else {
                        formData.append(key, value);
                    }
                }
            });
        
            return formData;
        },

        createAnswerFormData() {
            const formData = new FormData();

            let imageUpdate = 2;// nothing to do with the image
            if (this.answerFormBlocks[0].controls[3].file) {
                imageUpdate = 1;// add or rewrite the image
            } else if (!this.answerFormBlocks[0].controls[3].value && this.image) {
                imageUpdate = 0;// delete the image
            }

            const data = {
                parentUuid: this.questionUuid,
                uuid: this.answerFormBlocks[0].controls[0].value,
                name: this.answerFormBlocks[0].controls[1].value,
                description: this.answerFormBlocks[0].controls[2].value,
                image: this.answerFormBlocks[0].controls[3].file,
                sortIndex: Number(this.answerFormBlocks[1].controls[0].value),
                imageUpdate
            };
        
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    formData.append(key, value);
                }
            });
        
            return formData;
        },
    
        handleSuccess(data) {
            this.addEditChangeProp('addEditLoading', false);
            this.addEditChangeProp('addEditStateWatcher', !this.addEditStateWatcher);
            
            if (data) {
                if (this.typeMode === 'group') {
                    this.changeProp('groups', data);
                    this.fillGroupForm();
                } else if (this.typeMode === 'question') {
                    this.pushItemsArray({type: 'questions', parentUuid: this.groupUuid, itemsArray: data});
                    this.changeProp('groupUuid', '');
                    this.fillQuestionForm();
                } else if (this.typeMode === 'answer') {
                    this.pushItemsArray({type: 'answers', parentUuid: this.questionUuid, itemsArray: data});
                    this.changeProp('questionUuid', '');
                    this.fillAnswerForm();
                }
            }
        },
    
        handleError(error) {
            this.addEditChangeProp('addEditLoading', false);
            this.addEditChangeProp('addEditError', error?.errors?.[0]?.message || error);
        },
    }
}