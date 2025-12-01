import { ControlComponent } from 'local.vue-components.control-component';
import { ButtonComponent } from 'local.vue-components.button-component';

export const ResultApplicationForm = {
    data() {
        return {
            id: `resultApplicationForm${Math.round(Math.random() * 1000)}`
        }
    },
    props: ['controls', 'lang'],
    emits: ['input', 'hints', 'cancel', 'send'],
    components: {
        ControlComponent,
        ButtonComponent
    },
    template: `
        <form :data-id="id">
            <div class="twpx-vue-marketplace__result-application-form">
                <h2 v-if="lang && lang?.result?.formHeading">{{ lang.result.formHeading }}</h2>
                <p v-if="lang && lang?.result?.formText">{{ lang.result.formText }}</p>
                <div class="twpx-vue-marketplace__result-application-form__wrapper">
                    <ControlComponent v-for="control in controls" :key="control.id" :control="control" @input="input" @hints="hints" />
                </div>
                <div class="twpx-vue-marketplace__result-application-form__buttons">
                    <ButtonComponent :text="lang.result.formCancel" :props="['gray-color','large']" @clickButton="clickCancel" />
                    <ButtonComponent :text="lang.result.formSend" :props="['secondary','large']" :disabled="isDisabled" @clickButton="clickSend" />
                </div>
            </div>
        </form>
    `,
    computed: {
        isDisabled() {
            if (Array.isArray(this.controls)) {
              return this.controls.find(
                (c) => c.property !== 'checkbox' && c.required && !c.value
              );
            }
            return true
        },
    },
    methods: {
        input(args) {
            this.$emit('input', args);
        },
        hints(args) {
            this.$emit('hints', args);
        },
        clickCancel() {
            this.$emit('cancel');
        },
        clickSend() {
            this.$emit('send');
        }
    },
};
