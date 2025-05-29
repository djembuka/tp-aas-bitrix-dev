
import './buttons.css'
import { ButtonComponent } from 'local.vue-components.button-component';

export const TheButtons = {
    props: ['steps'],
    emits: ['send'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="twpx-vue-marketplace-buttons">
            <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_PREV')" :props="['gray-color','large']" @clickButton="goBack" v-if="currentIndex > 0" />
            <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_NEXT')" :props="['secondary','large']" @clickButton="goForward" v-if="currentIndex < steps.length - 1" />
            <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_SEND')" :props="['secondary','large']" @clickButton="$emit('send')" v-if="currentIndex == steps.length - 1" />
        </div>
    `,
    computed: {
        currentIndex() {
            return this.$route.params.id ? this.steps.findIndex(s => String(s.id) === String(this.$route.params.id)) : 0;
        }
    },
    methods: {
        goBack() {
            const step = this.steps[this.currentIndex - 1];
            if (step) {
                this.$router.push(`/step/${step.id}`);
            }
        },
        goForward() {
            const step = this.steps[this.currentIndex + 1];
            if (step) {
                this.$router.push(`/step/${step.id}`);
            }
        },
        
    }
}