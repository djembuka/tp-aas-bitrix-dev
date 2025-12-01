import { TheNavigation } from '../components/the-navigation';
import { StepComponent } from '../components/stepComponent'
import { TheButtons } from '../components/the-buttons';

import { MessageComponent } from 'local.vue-components.message-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { applicationStore } from '../stores/application';
import { controlsStore } from '../stores/controls';
import { resultStore } from '../stores/result';

export const Step = {
    components: {
        TheNavigation,
        StepComponent,
        TheButtons,
        MessageComponent,
        LoaderCircle
    },
    template: `
        <div class="twpx-vue-marketplace-application">

            <LoaderCircle :show="loading" />

            <MessageComponent type="error" size="big" :message="error" v-if="!loading && error" />

            <div v-if="!loading" class="twpx-vue-marketplace-application__content">

                <h2>{{ lang.application.heading }}</h2>

                <TheNavigation :groups="applicationGroups" @clickNavItem="clickNavItem" />

                <StepComponent :step="step" @input="input" @hints="hints" />

                <TheButtons :groups="applicationGroups" :step="step" :lang="lang.application" @send="send" />

            </div>

        </div>
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',
            'error',
            'loading',
        ]),
        ...mapState(applicationStore, [
            'applicationControls',
            'applicationGroups'
        ]),
        step() {
            const groupId = this.$route.params.id || (this.applicationGroups.length ? this.applicationGroups[0].id : undefined);
            const group = this.applicationGroups.find(g => String(g.id) === String(groupId));
            const controls = this.applicationControls.filter(c => String(c.groupid) === String(groupId));
            
            return controls.length ?
                {
                    id: groupId,
                    title: group.title,
                    subtitle: group.subtitle,
                    controls
                }
                : {};
        }
    },
    methods: {
        ...mapActions(dataStore, [
            'runBitrixMethod',
            'changeProp',
            'createUrl'
        ]),
        ...mapActions(applicationStore, [
            'changeApplicationControls',
            'changeApplicationGroups'
        ]),
        ...mapActions(controlsStore, [
            'changeControlValue',
            'runHintsAction',
            'setHints'
        ]),
        ...mapActions(resultStore, [
            'setFormIdArray',
            'setFormTemplate',
            'setFormDataArray',
            'changeResultApplicationGroup',
            'changeResultApplicationControls'
        ]),
        clickNavItem({group}) {
            this.$router.push(`/step/${group.id}`);
        },
        showError(response, method) {
            this.changeProp('loading', false);
            if (response && response.errors.length) {
                this.changeProp('error', `${method ? method + ' - ' : ''}${response.errors[0].message}`);
            }
        },
        send() {
            this.changeProp('loading', true);
            this.changeProp('error', '');

            const controls = JSON.parse(JSON.stringify(this.applicationControls.slice()));
            controls.forEach(c => {
                if (c.property === 'date' && c.type === 'range') {
                    c.value = `${c.value[0]}-${c.value[1]}`
                }
                if (c.property === 'hint') {
                    c.value = c.value.id
                }
            });

            this.runBitrixMethod('applicationSave', {fields: controls})
                .then(
                    (response) => {
                        this.changeProp('applicationID', response?.data?.applicationID)
                        return this.runBitrixMethod('searchForms', {applicationID: response?.data?.applicationID})
                    },
                    (r) => {this.showError(r, 'applicationSave')}
                )
                .then(
                    (response) => {
                        this.setFormIdArray(response.data);

                        this.createUrl(this.applicationControls);
                        this.$router.push(`/result`);
                    },
                    (r) => {this.showError(r, 'searchForms')}
                )
                .catch(err => {
                    this.showError(err)
                })
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
    },
    
}