import '../css/navigation.css';

export const TheNavigation = {
    data(){
        return {}
    },
    props: ['groups'],
    emits: ['clickNavItem'],
    template: `
        <div class="twpx-vue-marketplace-nav">
            <div class="twpx-vue-marketplace-nav-items">
                <div
                    :class="{'twpx-vue-marketplace-nav__item': true, 'twpx-vue-marketplace-nav__item--active': isGroupActive(groupIndex)}"
                    v-for="(group, groupIndex) in groups"
                    :key="group.id"
                    @click.prevent="click(group)">
                        {{ group.label }}
                </div>
            </div>
            <div :class="{'twpx-vue-marketplace-nav-line': true, 'twpx-vue-marketplace-nav-line--full': lineWidth === '100%'}">
                <div :style="'width: ' + lineWidth"></div>
            </div>
        </div>
    `,
    computed: {
        currentIndex() {
            const index =  this.groups.findIndex(s => String(s.id) === String(this.$route.params.id)) || 0;
            return index === -1 ? 0 : index;
        },
        lineWidth() {
            return ((this.currentIndex + 1) * 100 / this.groups.length) + '%';
        }
    },
    methods: {
        click(group) {
            this.$emit('clickNavItem', {group});
        },
        isGroupActive(groupIndex) {
            return groupIndex <= this.currentIndex;
        },
    },
}