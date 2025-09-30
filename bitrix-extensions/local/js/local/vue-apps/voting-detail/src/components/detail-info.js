import './detail-info.css';

import { ButtonComponent } from 'local.vue-components.button-component';

export const DetailInfo = {
    props: ['voting', 'lang'],
    emits: ['clickChangeDetail'],
    components: {
        ButtonComponent
    },
    template: `
        <div class="twpx-poll-detail-info">
            <div class="twpx-poll-detail-info__block" v-for="block in detail" :key="block.id">
                <h3 v-if="block.heading">{{ block.heading }}</h3>
                <div class="twpx-poll-detail-info__items" v-if="block.items && block.items.length">
                    <div class="twpx-poll-detail-info__item" v-for="item in block.items" :key="item.title">
                        <div class="twpx-poll-detail-info__title" v-html="item.title"></div>
                        <div class="twpx-poll-detail-info__value" v-html="item.value"></div>
                    </div>
                </div>
            </div>
            <div>
                <ButtonComponent :text="lang.changeButton" :props="['serve', 'small']" @clickButton="$emit('clickChangeDetail')" />
            </div>
        </div>
    `,
    computed: {
        detail() {
            if (Object.keys(this.voting).length <= 0) return;
    
            return [
            {
                id: 1,
                heading: 'Общие данные',
                items: [
                {
                    title: 'Название голосования',
                    value: this.voting.name
                },
                {
                    title: 'Текст анонса',
                    value: this.voting.announcement
                },
                {
                    title: 'Текст подробного описания',
                    value: this.voting.description
                },
                ]
            },
            {
                id: 2,
                heading: 'Сроки',
                items: [
                {
                    title: 'Дата начала активности',
                    value: this.toHumanWithTimeBlock(this.voting.activityStartDate)
                },
                {
                    title: 'Дата окончания активности',
                    value: this.toHumanWithTimeBlock(this.voting.activityEndDate)
                },
                {
                    title: 'Дата окончания голосования',
                    value: this.toHumanWithTimeBlock(this.voting.voteEndDate)
                },
                ]
            },
            {
                id: 3,
                heading: 'Технические',
                items: [
                {
                    title: 'Количество попыток',
                    value: this.voting.numberVotesLimit
                },
                {
                    title: 'Количество голосующих',
                    value: this.voting.numberVoters
                },
                {
                    title: 'Сообщение у кнопки',
                    value: this.voting.buttonMessage
                },
                {
                    title: 'Сообщение после голосования',
                    value: this.voting.messageAfterVoting
                },
                {
                    title: 'Порядок размещения',
                    value: this.voting.sortIndex
                },
                ]
            },
            {
                id: 4,
                heading: 'Доступы',
                items: [
                {
                    title: 'ID групп голосующих',
                    value: this.voting.groupsVoting
                },
                {
                    title: 'ID групп Избирательных комиссий',
                    value: this.voting.groupsCommission
                },
                ]
            },
            ]
        }
    },
    methods: {
        toHumanWithTimeBlock(input) {
            if (typeof input !== 'string') return '';
        
            const m = input.trim().match(
            /^(\d{4})-(\d{2})-(\d{2})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/
            );
            if (!m) return '';
        
            const [, yyyy, mm, dd, hh = '00', min = '00'] = m;
            return `${dd}.${mm}.${yyyy}<div class="text-muted">${hh}:${min}</div>`;
        },
    }
}