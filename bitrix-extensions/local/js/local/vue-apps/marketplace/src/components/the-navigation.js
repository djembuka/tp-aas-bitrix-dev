import './navigation.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const TheNavigation = {
    template: `
        <div class="twpx-vue-marketplace-nav">
            <div class="twpx-vue-marketplace-nav-items">
                <div
                    :class="{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': step.active}"
                    v-for="step in steps"
                    :key="step.id"
                    @click.prevent="click(step)">
                        {{ step.name }}
                </div>
            </div>
            <div class="twpx-vue-marketplace-nav-line">
                <div></div>
            </div>
        </div>
    `,
    computed: {...mapState(dataStore, ['steps'])},
    methods: {
        ...mapActions(dataStore, ['setStepActive']),
        click(step) {
            this.$router.push(`/step/${step.id}`);

            let before = true;
            this.steps.forEach(s => {
                if (String(s.id) === String(step.id)) {
                    before = false;
                    setStepActive({
                        step: s,
                        active: true
                    });
                } else {
                    setStepActive({
                        step: s,
                        active: before
                    });
                }
            })
        }
    }
}