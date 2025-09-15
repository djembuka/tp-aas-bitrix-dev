import { ControlComponent } from 'local.vue-components.control-component';

export const ApplicationForm = {
    props: [''],
    components: {
        ControlComponent
    },
    template: `
        <form :data-id="">
            <ControlComponent v-for="control in step.controls" :key="control.id" :control="control" @input="input" @hints="hints" />
        </form>
    `,
    mounted() {},
};
