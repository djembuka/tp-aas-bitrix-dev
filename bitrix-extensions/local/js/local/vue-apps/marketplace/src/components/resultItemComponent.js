import './result.css'
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
                <ButtonComponent :text="lang.result.moreProps" :props="['serve', 'small']" @clickButton="moreProperties" />
            </div>
            <div class="twpx-vue-marketplace-company__buttons">
                <ButtonComponent :text="lang.result.getButton" :props="['icon-content', 'primary', 'medium']" @clickButton="" />
                <div class="twpx-vue-marketplace-company__buttons__right">
                    <ControlComponent :control='company.checkbox' @input="input" />
                    <ButtonComponent :text="lang.result.sendButton" :props="['secondary', 'medium']" @clickButton="" />
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
        dataObject() {
            return this.company.data
                .filter(d => String(d.value))
                .forEach(d => {
                    d.label = this.template[d.name];
                });
        },
        companyName() {
            const site = this.company.data.find(c => c.name === 'UF_SITE');
            const name = this.company.data.find(c => c.name === 'UF_NAME');

            if (site) {
                return `<a href="${site.value}">${name.value}</a>`;
            }
            return name?.value;
        },
        companyDescription() {
            return this.company.data.find(c => c.name === 'UF_DESCRIPTION')?.value;
        },
    },
    methods: {
        getProperties() {
            let result = this.company.data.slice();
            result = result.filter(d => d.name !== 'UF_NAME' && d.name !== 'UF_DESCRIPTION');
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
        moreProperties() {
            this.s = true;
        },
    }
};