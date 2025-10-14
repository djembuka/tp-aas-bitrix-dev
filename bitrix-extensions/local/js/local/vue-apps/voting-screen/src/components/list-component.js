import '../css/list-component.css'

export const ListComponent = {
    props: ['list'],
    template: `
        <div class="twpx-voting-screen-block twpx-voting-screen-list"
            :class="{
                'twpx-voting-screen-list--lt10': list.length < 10,
                'twpx-voting-screen-list--success': list.length === 0
            }"
        >
            <div class="twpx-voting-screen-list__items-wrapper">
                <div class="twpx-voting-screen-list__items" v-if="list.length > 0">
                    <div class="twpx-voting-screen-list__item" v-for="item in list" :key="item">{{ item }}</div>
                </div>
                <div class="twpx-voting-screen-list__item-success" v-else>Все проголосовали!</div>
            </div>
            <div class="twpx-voting-screen-list__text" v-if="list.length > 0">Еще не голосовали</div>
        </div>
    `
};