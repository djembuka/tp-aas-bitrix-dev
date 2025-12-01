import '../css/publishPanel.css';

import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';

export const PublishPanel = {
    props: ['activity', 'disabled', 'loading', 'lang'],
    emits: ['publish'],
    components: {
        ButtonComponent,
        LoaderCircle
    },
    template: `
        <div
            class="mf-publish-panel"
            :class="{
                'mf-publish-panel': true,
                'mf-publish-panel--disabled': disabled
            }"
        >
            <div class="mf-publish-panel__content">
                <div class="mf-publish-panel__wrapper">
                    <h4 v-html="lang.panel.heading"></h4>
                    <div class="mf-publish-panel__text" v-html="lang.panel.text"></div>
                </div>
                <div class="mf-publish-panel__switcher">
                    <div class="mf-switch-wrapper"
                        :class="{
                            'mf-switch-wrapper--on': on,
                            'mf-switch-wrapper--off': !on,
                            'mf-switch-wrapper--disabled': loading,
                        }"
                        @click="switchChange"
                    ></div>
                </div>
            </div>
        </div>
    `,
    computed: {
        on: {
            get() {
                return Boolean(Number(this.activity?.value));
            },
            set(value) {
                this.$emit('publish', {value});
            }
        }
    },
    methods: {
        switchChange() {
            this.on = !this.on;
        }
    },
};
