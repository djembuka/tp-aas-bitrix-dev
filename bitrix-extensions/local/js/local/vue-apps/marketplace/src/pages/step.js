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
            'steps',
            'error',
            'loading'
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
            'runApiMethod',
            'changeError',
            'changeLoading',
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
            'setFormDataArray'
        ]),
        clickNavItem({group}) {
            this.$router.push(`/step/${group.id}`);
        },
        showError(response, method) {
            this.changeLoading(false);
            if (response && response.errors.length) {
                this.changeError(`${method ? method + ' - ' : ''}${response.errors[0].message}`);
            }
        },
        send() {
            this.changeLoading(true);
            this.changeError('');

            const controls = this.applicationControls.slice();
            controls.forEach(c => {
                if (c.property === 'date' && c.type === 'range') {
                    c.value = `${c.value[0]}-${c.value[1]}`
                }
            });

            this.runApiMethod('applicationSave', {fields: controls})
                .then(
                    (response) => {
                        return this.runApiMethod('searchForms', {applicationID: response?.data?.applicationID})
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
    mounted() {
        this.changeLoading(true);
        this.changeError('');

        this.runApiMethod('applicationGroups')
            .then(
                (response) => {
                    this.changeApplicationGroups(response.data);

                    return this.runApiMethod('applicationTemplate');
                },
                (r) => {this.showError(r, 'applicationGroups')}
            )
            .then(
                (response) => {
                    this.changeLoading(false);
                    this.changeError('');
                    this.changeApplicationControls(response.data);
                },
                (r) => {this.showError(r, 'applicationTemplate')}
            );
    }
}