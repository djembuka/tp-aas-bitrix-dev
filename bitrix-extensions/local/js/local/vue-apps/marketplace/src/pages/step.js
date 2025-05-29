import { TheNavigation } from '../components/the-navigation';
import { StepComponent } from '../components/stepComponent'
import { TheButtons } from '../components/the-buttons';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Step = {
    components: {
        TheNavigation,
        StepComponent,
        TheButtons
    },
    template: `
        <div class="twpx-vue-marketplace">

            <h2>{{ $Bitrix.Loc.getMessage('TWPX_MARKETPLACE_H2') }}</h2>

            <TheNavigation :steps="steps" @clickNavItem="clickNavItem" />

            <StepComponent :step="step" />

            <TheButtons :steps="steps" @send="send" />

        </div>
    `,
    computed: {
        ...mapState(dataStore, ['steps']),
        step() {
            return this.steps.find(s => s.id === this.$route.params.id) || this.steps[0]
        }
    },
    methods: {
        clickNavItem({step}) {
        this.$router.push(`/step/${step.id}`);
        },
        send() {
        console.log('send');
        this.$router.push(`/result`);
        }
    },
}