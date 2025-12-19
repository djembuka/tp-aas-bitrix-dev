import './edit-form.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const EditForm = {
    flag: false,
    f: false,
    props: ['customData', 'signedParameters', 'actions', 'voting'],
    emits: ['clickCancel', 'clickSend'],
    components: {
        ControlChoice,
        ButtonComponent
    },
    template: `
        <div id="votingEditForm">voting edit form</div>
    `,
    watch: {
        voting() {
            this.create();
        }
    },
    methods: {
        create() {
            if (window.BX && BX.VotingCreate) {
                const editvoting = new BX.VotingCreate('#votingEditForm', {
                    data: this.customData,
                    signedParameters: this.signedParameters,
                    voting: this.voting
                });
                editvoting.run();
            }
        }
    },
    mounted() {
        if (document.querySelector('#votingEditForm') && !this.f) {
            this.f = true;
            document.querySelector('#votingEditForm').addEventListener('clickCancel', () => {
                this.$emit('clickCancel');
            });
            document.querySelector('#votingEditForm').addEventListener('clickSend', () => {
                this.$emit('clickSend');
            });
        }
    }
}