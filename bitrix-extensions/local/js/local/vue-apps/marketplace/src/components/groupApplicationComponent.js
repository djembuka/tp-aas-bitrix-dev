import './result.css'
import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const GroupApplicationComponent = {
    components: {
        ButtonComponent
    },
    props: ['groupApplicationArray'],
    template: `
        <div class="twpx-vue-marketplace-group-application" v-if="groupApplicationArray.length > 0">
            <div class="twpx-vue-marketplace-group-application__text">
                <h4>{{ lang.result.groupApplicationHeading }}</h4>
                <div>{{ lang.result.groupApplicationText }}: {{ num }} {{ pluralizeOrganization(num) }}.</div>
            </div>
            <ButtonComponent :text="lang.result.sendButton" :props="['secondary', 'medium']" @clickButton="getGroup" />
        </div>
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',
        ]),
        num() {
            return this.groupApplicationArray.length
        }
    },
    methods: {
        getGroup() {
            console.log(this.groupApplicationArray)
        },
        pluralizeOrganization(n, forms = this.lang.result.groupApplicationCompany) {
            const abs = Math.abs(n);
            const mod10 = abs % 10;
            const mod100 = abs % 100;
            if (mod100 >= 11 && mod100 <= 14) return forms[2];
            if (mod10 === 1) return forms[0];
            if (mod10 >= 2 && mod10 <= 4) return forms[1];
            return forms[2];
        }
    }
};