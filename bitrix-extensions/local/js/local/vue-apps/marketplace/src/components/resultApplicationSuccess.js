import { ButtonComponent } from 'local.vue-components.button-component';

export const ResultApplicationSuccess = {
    props: ['lang'],
    emits: ['close'],
    components: {
        ButtonComponent
    },
    template: `
            <div class="twpx-vue-marketplace__result-application-success">
                <h2 v-if="lang && lang?.result?.formSuccessHeading">{{ lang.result.formSuccessHeading }}</h2>
                <p v-if="lang && lang?.result?.formSuccessText">{{ lang.result.formSuccessText }}</p>
                <div class="twpx-vue-marketplace__result-application-success__button">
                    <ButtonComponent :text="lang.result.formSuccessButton" :props="['gray-color','large']" @clickButton="close" />
                </div>
            </div>
    `,
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
