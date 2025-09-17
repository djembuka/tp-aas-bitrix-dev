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

            <div v-if="!loading && !error" class="twpx-vue-marketplace-result__content">

                <h2>{{ lang.result.heading }}</h2>

                <ResultItemComponent v-for="company in formDataArray" :key="company.id" :company="company" @createApplication="createApplication" />

                <MoreButton :loading="loadingMore" :show="showMore" @clickMore="clickMore" />

                <GroupApplicationComponent :groupApplicationArray="groupApplicationArray" @createApplication="createApplication" />

            </div>

        </div>
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',
            'error',
            'loading',
        ]),
        ...mapState(resultStore, [
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
            'resultApplicationError'
        ]),
        showMore() {
            return this.startIndex < this.formIdArray.length
        },

    },
    methods: {
        ...mapActions(dataStore, [
            'runApiMethod',
            'changeError',
            'changeLoading',
        ]),
        ...mapActions(resultStore, [
            'setFormDataArray',
            'setStartIndex',
            'setMaxCountPerRequest',
            'changeLoadingMore',
            'changeProp'
        ]),
        ...mapActions(controlsStore, [
            'changeControlValue',
            'runHintsAction',
            'setHints'
        ]),
        createApplication({groupApplicationArray}) {
            this.changeProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
        },
        clickMore() {
            this.loadNextPage();
        },
        loadNextPage() {
            this.changeLoadingMore(true);
            try {
                const requestArr = this.formIdArray.slice(this.startIndex, this.startIndex + this.maxCountPerRequest).map((formID) => {
                    return this.runApiMethod('formData', {code: formID});
                });

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
                        this.changeLoading(false);
                        this.changeLoadingMore(false);
                        this.setStartIndex(this.startIndex + this.maxCountPerRequest);
                    })
                    .catch((response) => {
                        this.changeLoading(false);
                        if (response && response.errors.length) {
                            this.changeError(`formData - ${response.errors[0].message}`);
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
        send(formData) {
            this.changeProp('resultApplicationLoading', true);

            this.runApiMethod('send', {}, formData)
                .then(
                    (response) => {
                        this.changeProp('resultApplicationLoading', false);
                        this.changeProp('resultApplicationState', 'success')
                    },
                    (res) => {
                        this.changeProp('resultApplicationLoading', false);
                        if (res && res.errors) {
                            this.changeProp('resultApplicationError', res.errors[0].message);
                        }
                    }
                )
                .catch(err => {
                    this.changeProp('resultApplicationLoading', false);
                    console.log(err);
                })
        },
        close() {
            this.changeProp('applicationModalStateWatcher', !this.applicationModalStateWatcher);
        },
        onClose() {
            this.changeProp('resultApplicationState', 'form');
            this.changeProp('resultApplicationError', '');
        }
    },

    mounted() {
        this.changeLoading(true);
        this.loadNextPage();
    }
}