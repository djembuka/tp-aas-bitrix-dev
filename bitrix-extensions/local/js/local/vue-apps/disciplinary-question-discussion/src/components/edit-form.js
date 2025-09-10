import './edit-form.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

export const EditForm = {
    components: {
        ControlChoice,
        ButtonComponent,
        LoaderCircle,
        MessageComponent
    },
    props: {
        id: [String, Number],
        h3: String,
        heading: String,
        controls: Array,
        buttons: {
            type: Array,
            default() {
                return [];
            }
        },
        loading: Boolean,
        error: String
    },
    emits: ['input', 'clickYes', 'clickNo'],
    template: `
        <LoaderCircle :show="loading" />

        <MessageComponent v-if="error" type="error" size="big" :message="error" />

        <form action="" :id="id + 'EditForm'" v-if="!loading && !error">
            <div class="twpx-comment-edit-form">
                <h3>{{ h3 }}</h3>
                <div class="twpx-comment-edit-form__body">
                    <div class="twpx-comment-edit-form__heading">{{ heading }}</div>
                    <ControlChoice v-for="control in controls" :key="control.id" :control="control" @input="input"></ControlChoice>
                </div>
                <div class="twpx-comment-edit-form__buttons">
                    <ButtonComponent :text="buttons[0]" :props="['gray-color', 'large']" @clickButton="$emit('clickNo')" />
                    <ButtonComponent :text="buttons[1]" :props="['secondary', 'large']" @clickButton="$emit('clickYes')" />
                </div>
            </div>
        </form>
    `,
    methods: {
        input(args) {
            this.$emit('input', args);
        }
    }
}