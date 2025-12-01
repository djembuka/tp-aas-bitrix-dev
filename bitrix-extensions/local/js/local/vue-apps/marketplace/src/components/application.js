import '../css/common.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { applicationStore } from '../stores/application';
import { resultStore } from '../stores/result';
import { controlsStore } from '../stores/controls';

export const Application = {
    template: `
        <router-view />
    `,
    computed: {
        ...mapState(dataStore, [
            'resultApplicationGroupId'
        ]),
        ...mapState(applicationStore, [
            'applicationControls'
        ]),
    },
    methods: {
        ...mapActions(dataStore, [
            'changeProp',
            'runBitrixMethod',
        ]),
        ...mapActions(applicationStore, [
            'changeApplicationGroups',
            'changeApplicationControls',
        ]),
        ...mapActions(resultStore, [
            'changeResultApplicationGroup',
            'changeResultApplicationControls',
            'setFormIdArray'
        ]),
        ...mapActions(controlsStore, [
            'changeControlValue',
        ]),
        isUFParam() {
            const urlSearchParams = new URLSearchParams(window.location.search);
            let result = false;
            for(const key of urlSearchParams.keys()) {
              if (key.startsWith('UF_')) {
                result = true;
              }
            }

            return result;
        },
        setValuesToApplicationControls() {
            const urlSearchParams = new URLSearchParams(window.location.search);
            this.applicationControls.forEach(c => {
                this.changeControlValue({
                    control: c,
                    value: urlSearchParams.get(c.name)
                });
            });
        }
    },
    async mounted() {
        this.changeProp('loading', true);
        this.changeProp('error', '');

        try {
            const groupsResponse = await this.runBitrixMethod('applicationGroups');
            this.changeApplicationGroups(groupsResponse.data, this.resultApplicationGroupId);
            this.changeResultApplicationGroup(groupsResponse.data, this.resultApplicationGroupId);

            const templateResponse = await this.runBitrixMethod('applicationTemplate');
            this.changeApplicationControls(templateResponse.data, this.resultApplicationGroupId);
            this.changeResultApplicationControls(templateResponse.data, this.resultApplicationGroupId);

            const ufParam = this.isUFParam();

            if (ufParam) {
                this.setValuesToApplicationControls();

                const controls = this.applicationControls.slice();
                controls.forEach(c => {
                    if (c.property === 'date' && c.type === 'range') {
                        c.value = `${c.value[0]}-${c.value[1]}`
                    }
                });
    
                const saveResponse = await this.runBitrixMethod('applicationSave', {fields: controls});
                const searchResponse = await this.runBitrixMethod('searchForms', {applicationID: saveResponse?.data?.applicationID});
                this.setFormIdArray(searchResponse.data);
                this.$router.push(`/result`);
            } else {
                this.changeProp('loading', false);
                this.changeProp('error', '');
            }
        } catch(error) {
            this.changeProp('loading', false);
            this.changeProp('error', error?.errors ? error.errors[0].message : error);
        }
    }
}