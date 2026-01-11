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
                heading: BX.message('TWPX_VOTING_DETAIL_INFO_HEADING1'),
                items: [
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_NAME'),
                    value: this.voting.name
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_ANNOUNCEMENT'),
                    value: this.voting.announcement
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_DESCRIPTION'),
                    value: this.voting.description
                },
                ]
            },
            {
                id: 2,
                heading: BX.message('TWPX_VOTING_DETAIL_INFO_HEADING2'),
                items: [
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_ACTIVITY_START_DATE'),
                    value: this.toHumanWithTimeBlock(this.voting.activityStartDate)
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_ACTIVITY_END_DATE'),
                    value: this.toHumanWithTimeBlock(this.voting.activityEndDate)
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_VOTE_END_DATE'),
                    value: this.toHumanWithTimeBlock(this.voting.voteEndDate)
                },
                ]
            },
            {
                id: 3,
                heading: BX.message('TWPX_VOTING_DETAIL_INFO_HEADING3'),
                items: [
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_NUMBER_VOTES_LIMIT'),
                    value: this.voting.numberVotesLimit
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_NUMBER_VOTERS'),
                    value: this.voting.numberVoters
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_BUTTON_MESSAGE'),
                    value: this.voting.buttonMessage
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_MESSAGE_AFTER_VOTING'),
                    value: this.voting.messageAfterVoting
                },
                {
                    title: BX.message('TWPX_VOTING_DETAIL_INFO_SORT_INDEX'),
                    value: this.voting.sortIndex
                },
                ]
            },
            {
                id: 4,
                heading: BX.message('TWPX_VOTING_DETAIL_INFO_HEADING4'),
                items: [
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING'),
                        value: this.voting.groupsVoting
                    },
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING_EIO'),
                        value: this.voting.groupsVotingEio
                    },
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING_UMC'),
                        value: this.voting.groupsVotingUmc
                    },
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_GROUPS_COMISSION'),
                        value: this.voting.groupsCommission
                    },
                ]
            },
            {
                id: 5,
                heading: BX.message('TWPX_VOTING_DETAIL_INFO_HEADING5'),
                items: [
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_PDF_TITLE'),
                        value: this.voting.pdfTitle
                    },
                    {
                        title: BX.message('TWPX_VOTING_DETAIL_INFO_PDF_SUB_TITLE'),
                        value: this.voting.pdfSubTitle
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