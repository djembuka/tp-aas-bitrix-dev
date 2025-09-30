import './wizard-block.css'
import {ButtonComponent} from 'local.vue-components.button-component'

export const WizardBlock = {
    props: ['lang'],
    emits: ['clickButton'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="twpx-poll-wizard-block">
            <div class="twpx-poll-wizard-block__text">
                <h4>{{ lang.wizard.heading }}</h4>
                <p>{{ lang.wizard.text }}</p>
            </div>
            <ButtonComponent :text="lang.wizard.button" :props="['success', 'medium']" @clickButton="$emit('clickButton')" />
        </div>
    `
}