import '../css/result.css'
import { ButtonComponent } from 'local.vue-components.button-component';

import { dataStore } from '../stores/data';
import { resultStore } from '../stores/result';
import { mapState, mapActions } from 'ui.vue3.pinia';

export const ResultComponent = {
    components: {
        ButtonComponent
    },
    template: `
            <div class="twpx-vue-marketplace-company">
                <div class="twpx-vue-marketplace-company__logo">
                    <img src="" alt="">
                </div>
                <div class="twpx-vue-marketplace-company__profile">
                    <div class="twpx-vue-marketplace-company__text">
                        <h3>
                            <a href="">Название компании</a>
                        </h3>
                        <p>Аудиторская компания с 15-летним опытом работы, специализируемся на обязательном и инициативном аудите для среднего и крупного бизнеса. Работаем по всей России, в команде — эксперты с допуском к аудиту публичных компаний и знанием МСФО.</p>
                    </div>
                    <div class="twpx-vue-marketplace-company__properties">
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Дата регистрации</b>
                            <span>1990</span>
                        </div>
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Количество аудиторов</b>
                            <span>156</span>
                        </div>
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Является членом сети</b>
                            <span>Консалтинговая группа компаний АБК</span>
                        </div>
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Аудит организаций на финансовом рынке</b>
                            <span>Да</span>
                        </div>
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Аудит обозначаемых организаций</b>
                            <span>Да</span>
                        </div>
                        <div class="twpx-vue-marketplace-company__prop">
                            <b>Специализация</b>
                            <span>Строительство, Образование, Здравоохранение, Финансовые учреждения, ИТ и цифровые компании</span>
                        </div>
                    </div>
                    <div class="twpx-vue-marketplace-company__buttons">
                        <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_RESULT_BUTTON_GET')" :props="['serve', 'medium']" @clickButton="" />
                        <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_RESULT_BUTTON_SEND')" :props="['secondary', 'medium']" @clickButton="" />
                    </div>
                </div>
            </div>
    `,
    computed: {
        ...mapState(resultStore, [
            'formTemplate',
            'formData',
        ]),
    }
};