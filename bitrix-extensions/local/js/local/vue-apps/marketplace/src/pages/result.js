import { MessageComponent } from 'local.vue-components.message-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MoreButton } from 'local.vue-components.more-button';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';

import { ResultItemComponent } from '../components/resultItemComponent'
import { GroupApplicationComponent } from '../components/groupApplicationComponent'
import { ResultApplicationForm } from '../components/resultApplicationForm'
import { ResultApplicationSuccess } from '../components/resultApplicationSuccess'

import { dataStore } from '../stores/data';
import { resultStore } from '../stores/result';
import { applicationStore } from '../stores/application';
import { controlsStore } from '../stores/controls';
import { mapState, mapActions } from 'ui.vue3.pinia';

export const Result = {
    components: {
        MessageComponent,
        LoaderCircle,
        MoreButton,
        ModalAnyContent,
        ResultApplicationForm,
        ResultApplicationSuccess,
        ResultItemComponent,
        GroupApplicationComponent,
    },
    template: `
        <div class="twpx-vue-marketplace-result">

            <LoaderCircle :show="loading" />

            <MessageComponent type="error" size="big" :message="error" v-if="!loading && error" />

            <ModalAnyContent :stateWatcher="applicationModalStateWatcher" @onClose="onClose">
                <LoaderCircle v-if="resultApplicationLoading" :show="resultApplicationLoading" />
                <MessageComponent
                    v-else-if="resultApplicationError"
                    type="error"
                    size="big"
                    :message="resultApplicationError"
                />
                <ResultApplicationForm
                    v-else-if="resultApplicationState === 'form'"
                    :lang="lang"
                    :controls="resultApplicationControls"
                    @input="input"
                    @hints="hints"
                    @cancel="close"
                    @send="send"
                />
                <ResultApplicationSuccess v-else :lang="lang" @close="close" />
            </ModalAnyContent>

            <MessageComponent v-if="!loading && !error && !formDataArray.length" type="table-result" size="big" :message="lang.result.message || 'По выбранным фильтрам ничего не найдено. Измените параметры фильтра и попробуйте снова.'" />

            <div v-else-if="!loading && !error" class="twpx-vue-marketplace-result__content">

                <h2>{{ lang.result.heading }}</h2>

                <ResultItemComponent v-for="company in formDataArray" :key="company.id" :company="company" @createApplication="createApplication" @input="input" />

                <MoreButton :loading="loadingMore" :show="showMore" @clickMore="clickMore" />

                <GroupApplicationComponent :groupApplicationArray="groupApplicationArray" @createApplication="createApplication" />

            </div>

        </div>
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',
            'error',
            'applicationID'
        ]),
        ...mapState(applicationStore, [
            'applicationControls',
        ]),
        ...mapState(resultStore, [
            'loading',
            'formIdArray',
            'formDataArray',
            'groupApplicationArray',
            'startIndex',
            'maxCountPerRequest',
            'loadingMore',
            'applicationModalStateWatcher',
            'resultApplicationGroup',
            'resultApplicationControls',
            'resultApplicationState',
            'resultApplicationLoading',
            'resultApplicationError',
            'chosenCompanyId'
        ]),
        showMore() {
            return this.startIndex < this.formIdArray.length
        },

    },
    methods: {
        ...mapActions(dataStore, [
            'changeProp',
            'runBitrixMethod',
        ]),
        ...mapActions(resultStore, [
            'setFormDataArray',
            'setStartIndex',
            'setMaxCountPerRequest',
            'changeResultProp'
        ]),
        ...mapActions(controlsStore, [
            'changeControlValue',
            'runHintsAction',
            'setHints'
        ]),
        createApplication(companyId) {
            this.changeResultProp('chosenCompanyId', companyId);
            this.changeResultProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
        },
        clickMore() {
            this.loadNextPage();
        },
        loadNextPage() {
            this.changeResultProp('loadingMore', true);
            try {
                const requestArr = this.formIdArray
                    .slice(this.startIndex, this.startIndex + this.maxCountPerRequest)
                    .map((formID) => this.runBitrixMethod('formData', {code: formID}));

                Promise.all(requestArr)
                    .then((formDataArray) => {
                        this.setFormDataArray(formDataArray.map((r, i) => {
                            return {
                                id: this.formIdArray[i],
                                data: r.data,
                                checkbox: {
                                    "property": "checkbox",
                                    "type": "block",
                                    "id": Math.floor(Math.random()*1000),
                                    "name": "APPLICATION_GROUP",
                                    "required": false,
                                    "label": this.lang.result.checkboxLable,
                                    "value": this.formIdArray[i],
                                    "checked": false,
                                }
                            }
                        }));
                        
                        this.changeResultProp('loading', false);
                        this.changeResultProp('loadingMore', false);
                        this.setStartIndex(this.startIndex + this.maxCountPerRequest);
                    })
                    .catch((error) => {
                        this.changeResultProp('loading', false);
                        if (error && error?.errors.length) {
                            this.changeProp('error', `formData - ${error.errors[0].message}`);
                        }
                    });
            } catch(err) {
                throw err;
            }
        },
        input(args) {
            this.changeControlValue(args)
        },
        hints({ type, control, action, value }) {
            switch (type) {
                case 'get':
                    this.runHintsAction({
                        control,
                        action,
                    });
                    break;
                case 'set':
                    this.setHints({
                        control,
                        value,
                    });
                    break;
            }
        },
        async send() {
            this.changeResultProp('resultApplicationLoading', true);

            try {
                const controls = JSON.parse(JSON.stringify(this.resultApplicationControls));
                controls.forEach(c => {
                    if (c.property === 'date' && c.type === 'range') {
                        c.value = `${c.value[0]}-${c.value[1]}`
                    }
                });

                await this.runBitrixMethod('applicationSave', {
                    fields: controls,
                    applicationID: this.applicationID
                });
                await this.runBitrixMethod('sendMessages', {
                    applicationID: this.applicationID,
                    questionnaires: this.chosenCompanyId ? [this.chosenCompanyId] : this.groupApplicationArray
                });
                this.changeResultProp('resultApplicationLoading', false);
                this.changeResultProp('resultApplicationState', 'success');
            } catch(error) {
                this.changeResultProp('resultApplicationLoading', false);
                this.changeResultProp('resultApplicationError', error?.errors ? error.errors[0].message : error)
            }
        },
        close() {
            this.changeResultProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
        },
        onClose() {
            this.changeResultProp('resultApplicationState', 'form');
            this.changeResultProp('resultApplicationError', '');
        }
    },
    mounted() {
        this.changeProp('loading', false);
        this.changeResultProp('loading', true);
        this.loadNextPage();
    }
}