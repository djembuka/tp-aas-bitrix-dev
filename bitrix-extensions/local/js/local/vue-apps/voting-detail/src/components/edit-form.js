import './edit-form.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const EditForm = {
    props: ['customData', 'signedParameters', 'actions', 'voting'],
    emits: ['input', 'hints', 'clickCancel', 'clickSend'],
    components: {
        ControlChoice,
        ButtonComponent
    },
    template: `
        <div id="votingEditForm">voting edit form</div>
    `,
    mounted() {
        if (window.BX && BX.VotingCreate) {
            const editvoting = new BX.VotingCreate('#votingEditForm', {
                data: this.customData,
                signedParameters: this.signedParameters,
                voting: this.voting
            });
            editvoting.run();
        }
        if (document.querySelector('#votingEditForm')) {
            document.querySelector('#votingEditForm').addEventListener('clickCancel', () => {
                this.$emit('clickCancel');
            });
            document.querySelector('#votingEditForm').addEventListener('clickSend', () => {
                this.$emit('clickSend');
            });
        }
    }
}