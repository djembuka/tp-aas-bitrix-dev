
import './buttons.css'
import { ButtonComponent } from 'local.vue-components.button-component';

export const TheButtons = {
    props: ['groups', 'lang'],
    emits: ['send'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="twpx-vue-marketplace-buttons">
            <ButtonComponent :text="lang.prevButton" :props="['gray-color','large']" @clickButton="goBack" v-if="currentIndex > 0" />
            <ButtonComponent :text="lang.nextButton" :props="['secondary','large']" @clickButton="goForward" v-if="currentIndex < groups.length - 1" />
            <ButtonComponent :text="lang.sendButton" :props="['secondary','large']" @clickButton="$emit('send')" v-if="currentIndex == groups.length - 1" />
        </div>
    `,
    computed: {
        currentIndex() {
            return this.$route.params.id ? this.groups.findIndex(s => String(s.id) === String(this.$route.params.id)) : 0;
        }
    },
    methods: {
        goBack() {
            const group = this.groups[this.currentIndex - 1];
            if (group) {
                this.$router.push(`/step/${group.id}`);
            }
        },
        goForward() {
            const group = this.groups[this.currentIndex + 1];
            if (group) {
                this.$router.push(`/step/${group.id}`);
            }
        },
        
    }
}