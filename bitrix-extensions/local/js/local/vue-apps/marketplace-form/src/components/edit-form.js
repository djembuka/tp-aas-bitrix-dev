import '../css/edit-form.css'

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const EditForm = {
    props: ['controls', 'lang'],
    emits: ['input', 'hints', 'cancel', 'send'],
    components: {
        ControlChoice,
        ButtonComponent
    },
    template: `
        <div class="mf-edit-form">

            <h2 v-html="lang.edit.heading"></h2>

            <div class="mf-edit-form__group" v-for="group in controls" :key="group.id">

                <h3 v-html="group.label"></h3>

                <div v-html="group.title"></div>

                <div class="mf-edit-form__controls">
                    <ControlChoice  v-for="control in group.controls"
                        :key="control.id"
                        :control="control"
                        @input="$emit('input', $event)"
                        @hints="$emit('hints', $event)"
                    />
                </div>

            </div>
            
            <div class="mf-edit-form__buttons">
                <ButtonComponent :text="lang.edit.cancel" :props="['gray-color', 'large']" @clickButton="$emit('cancel')" />
                <ButtonComponent :text="lang.edit.send" :props="['secondary', 'large']" :disabled="isDisabled" @clickButton="$emit('send')" />
            </div>

        </div>
    `,
    computed: {
        isDisabled() {
            if (Array.isArray(this.controls)) {
                return this.controls.some(group => {
                    if (Array.isArray(group.controls)) {
                        return group.controls.some(
                            (c) => c.property === 'checkbox' ? c.required && !c.checked : c.required && !c.value
                        );
                    }
                    return true;
                })
            }
            return true;
        }
    }
}