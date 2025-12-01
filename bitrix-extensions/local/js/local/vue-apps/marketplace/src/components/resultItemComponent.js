import '../css/result.css'
import { ButtonComponent } from 'local.vue-components.button-component';
import { ControlComponent } from 'local.vue-components.control-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { resultStore } from '../stores/result';

export const ResultItemComponent = {
    data() {
        return {
            s: false
        }
    },
    components: {
        ButtonComponent,
        ControlComponent
    },
    props: ['company'],
    emits: ['createApplication', 'input'],
    template: `
        <div class="twpx-vue-marketplace-company" :data-id="company.id">
            <div class="twpx-vue-marketplace-company__text">
                <h3 v-if="companyName" v-html="companyName"></h3>
                <p v-if="companyDescription">{{ companyDescription }}</p>
            </div>
            <div class="twpx-vue-marketplace-company__properties">
                <div class="twpx-vue-marketplace-company__props">
                    <div class="twpx-vue-marketplace-company__prop" v-for="prop in getProperties().slice(0,6)" :key="prop.id">
                        <b>{{ prop.label }}</b>
                        <span v-html="getValue(prop)"></span>
                    </div>
                    <TransitionGroup name="list">
                        <div class="twpx-vue-marketplace-company__prop" v-for="prop in getProperties().slice(6)" :key="prop.id" v-show="s">
                            <b>{{ prop.label }}</b>
                            <span v-html="getValue(prop)"></span>
                        </div>
                    </TransitionGroup>
                </div>
                <ButtonComponent :text="moreText" :props="['serve', 'small']" @clickButton="toggleMoreProperties" />
            </div>
            <div class="twpx-vue-marketplace-company__buttons">
                <span></span>
                <ButtonComponent v-if="false" :text="lang.result.getButton" :props="['icon-content', 'primary', 'medium']" @clickButton="" />
                <div class="twpx-vue-marketplace-company__buttons__right">
                    <ControlComponent :control='company.checkbox' @input="input" />
                    <ButtonComponent :text="lang.result.sendButton" :props="['secondary', 'medium']" @clickButton="createApplication" />
                </div>
            </div>
        </div>
    `,
    computed: {
        ...mapState(dataStore, [
            'lang',
        ]),
        ...mapState(resultStore, [
            'formTemplate',
            'formData',
        ]),
        moreText() {
            return this.s ? this.lang.result.hideProps : this.lang.result.moreProps;
        },
        dataObject() {
            return this.company.data
                .filter(d => String(d.value))
                .forEach(d => {
                    d.label = this.template[d.name];
                });
        },
        companyName() {
            const name = this.company.data.find(c => c.name === 'UF_NAME');
            return name?.value;
        },
        companyDescription() {
            return this.company.data.find(c => c.name === 'UF_DESCRIPTION')?.value;
        },
    },
    methods: {
        input(args) {
            this.$emit('input', args);
        },
        createApplication() {
            this.$emit('createApplication', this.company.id);
        },
        getProperties() {
            let result = this.company.data.slice();
            result = result.filter(d => d.name !== 'UF_NAME' && d.name !== 'UF_DESCRIPTION' && d.name !== 'UF_ACTIVE');
            result.sort((a, b) => Number(a.sort) - Number(b.sort));

            return result;
        },
        getValue(d) {
            if (!d.value) {
                return '-';
            } else if (d.name === 'UF_SITE') {
                let site = d.value;
                if (!String(d.value).startsWith('http')) {
                    site = `http://${d.value}`
                }
                return `<a href="${site}" target="_blank">${d.value}</a>`;
            } else if (d.name === 'UF_EMAIL') {
                return `<a href="mailto:${d.value}">${d.value}</a>`;
            } else if (d.name === 'UF_EGRUL_DATA') {
                const s = d.value;
                const date = new Date(s);
                const dd = String(date.getDate()).padStart(2, "0");
                const mm = String(date.getMonth() + 1).padStart(2, "0");
                const yyyy = date.getFullYear();
                const formatted = `${dd}.${mm}.${yyyy}`; // "15.02.1996"

                return formatted;
            }

            return d.value;
        },
        toggleMoreProperties() {
            this.s = !this.s;
        },
    }
};