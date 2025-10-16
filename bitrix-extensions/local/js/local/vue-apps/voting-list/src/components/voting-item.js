import './voting-item.css'
import {ButtonComponent} from 'local.vue-components.button-component'

export const VotingItem = {
    props: ['voting', 'url', 'status', 'label'],
    emits: ['edit', 'delete'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="twpx-voting-list__voting-item" :data-id="voting.uuid">
            <div class="twpx-voting-list__voting-item__info">
                <div class="twpx-voting-list__voting-item__heading">
                    <a :href="detailUrl">{{ voting.name }}</a>
                </div>
                <div class="twpx-voting-list__voting-item__text">{{ voting.description }}</div>
            </div>
            <div class="twpx-voting-list__voting-item__status">
                <span :class="label">{{ status.status }}</span>
            </div>
            <div class="twpx-voting-list__voting-item__buttons">
                <ButtonComponent :text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="$emit('edit', voting)" />
                <ButtonComponent :text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="$emit('delete', voting)" />
            </div>
        </div>
    `,
    computed: {
        detailUrl() {
            return `${this.url}?ID=${this.voting.uuid}`
        }
    }
}