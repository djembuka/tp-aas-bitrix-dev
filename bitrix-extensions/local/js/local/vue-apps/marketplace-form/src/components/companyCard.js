import '../css/companyCard.css'
import { ButtonComponent } from 'local.vue-components.button-component';

export const CompanyCard = {
    props: ['name', 'company'],
    emits: ['change'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="mf-company-card" v-if="company">
            <h2>Анкета {{ name }}</h2>

            <div class="mf-company-card__group" v-for="group in company" :key="group.id">
                <h3 v-if="group.label" v-html="group.label"></h3>
                <div class="mf-company-card__text" v-html="group.title"></div>
            
                <div class="mf-company-card__props" v-if="group.props">
                    <div class="mf-company-card__prop" v-for="prop in group.props">
                        <div class="mf-company-card__prop-name" v-html="prop.label"></div>
                        <div class="mf-company-card__prop-value" v-html="getValue(prop.value)"></div>
                    </div>
                </div>
            </div>

            <div>
                <ButtonComponent text="Изменить" :props="['serve','small']" @clickButton="$emit('change')" />
            </div>
        </div>
    `,
    methods: {
        getValue(value) {
            return typeof value === 'object' ? value?.value : value;
        }
    },
};
