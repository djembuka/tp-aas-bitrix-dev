import './navigation.css';

export const TheNavigation = {
    data(){
        return {}
    },
    props: ['steps'],
    emits: ['clickNavItem'],
    template: `
        <div class="twpx-vue-marketplace-nav">
            <div class="twpx-vue-marketplace-nav-items">
                <div
                    :class="{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': isStepActive(stepIndex)}"
                    v-for="(step, stepIndex) in steps"
                    :key="step.id"
                    @click.prevent="click(step)">
                        {{ step.name }}
                </div>
            </div>
            <div :class="{'twpx-vue-marketplace-nav-line': true, 'twpx-vue-marketplace-nav-line--full': lineWidth === '100%'}">
                <div :style="'width: ' + lineWidth"></div>
            </div>
        </div>
    `,
    computed: {
        currentIndex() {
            const index =  this.steps.findIndex(s => String(s.id) === String(this.$route.params.id)) || 0;
            return index === -1 ? 0 : index;
        },
        lineWidth() {
            return ((this.currentIndex + 1) * 100 / this.steps.length) + '%';
        }
    },
    methods: {
        click(step) {
            this.$emit('clickNavItem', {step});
            this.highlightItem(step);
        },
        isStepActive(stepIndex) {
            return stepIndex <= this.currentIndex;
        },
    },
}