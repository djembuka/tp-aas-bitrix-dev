import { ControlComponent } from 'local.vue-components.control-component';

export const ApplicationForm = {
    props: ['controls'],
    components: {
        ControlComponent
    },
    template: `
        <form :data-id="">
            <ControlComponent v-for="control in controls" :key="control.id" :control="control" @input="input" @hints="hints" />
        </form>
    `,
    methods: {
        input(args) {
            this.$emit('input', args);
        },
        hints(args) {
            console.log(args)
            this.$emit('hints', args);
        }
    },
};
