import '../css/action-cards.css'
import { ButtonComponent } from 'local.vue-components.button-component';

export const ActionCards = {
    components: {
        ButtonComponent
    },
    props: [
        'titles',
        'items'
    ],
    emits: ['clickButton'],
    template: `
        <div class="dc-action-cards" v-if="items && items.length">

            <div class="dc-action-card" v-for="card in items"
                :data-id="card.id"
                :key="card.id"
            >
                <div class="dc-action-card__content">
                    <div class="dc-action-card__props">
                        <div class="dc-action-card__prop" v-for="prop in card.cell" :key="card.id + prop.id">
                            <div class="dc-action-card__prop-title">{{ prop.name }}</div>
                            <div class="dc-action-card__prop-value" v-html="prop.value"></div>
                        </div>
                    </div>
                    <div class="dc-action-card__edit">
                        <ButtonComponent text="Изменить" :props="['serve','small']" @clickButton="clickEdit(card.id)" /> 
                    </div>
                </div>
                <div class="dc-action-card__button">
                    <ButtonComponent :text="" :props="['icon','delete','medium']" @clickButton="clickDelete(card.id)" />
                </div>
            </div>

        </div>
    `,
    methods: {
        clickEdit(itemId) {
            this.$emit('clickButton', {itemId, code: 'edit'});
        },
        clickDelete(itemId) {
            this.$emit('clickButton', {itemId, code: 'delete'});
        },
    }
};