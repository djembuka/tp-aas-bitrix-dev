import { ControlComponent } from 'local.vue-components.control-component';

export const StepComponent = {
    props: ['step'],
    emits: ['input', 'hints'],
    components: {
        ControlComponent
    },
    template: `
        <div class="twpx-vue-marketplace-application-html" v-if="step.title || step.subtitle">
            <h3 v-if="step.title">{{ step.title }}</h3>
            <p v-if="step.subtitle">{{ step.subtitle }}</p>
        </div>

        <div class="twpx-vue-marketplace-application-controls">
            <ControlComponent v-for="control in step.controls" :key="control.id" :control="control" @input="input" @hints="hints" />
        </div>
    `,
    methods: {
        input(args) {
            this.$emit('input', args);
        },
        hints(args) {
            console.log(args)
            this.$emit('hints', args);
        }
    }
};