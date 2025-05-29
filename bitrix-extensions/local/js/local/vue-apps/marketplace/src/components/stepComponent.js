import { ControlComponent } from 'local.vue-components.control-component';

export const StepComponent = {
    props: ['step'],
    components: {
        ControlComponent
    },
    template: `
        <div class="twpx-vue-marketplace-html" v-if="step.html" v-html="step.html"></div>

        <div class="twpx-vue-marketplace-controls">
            <ControlComponent v-for="control in step.controls" :key="control.id" :control="control" @input="input" />
        </div>
    `
};