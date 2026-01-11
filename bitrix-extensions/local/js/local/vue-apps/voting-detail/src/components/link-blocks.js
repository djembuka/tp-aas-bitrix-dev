import './link-blocks.css';
import { CopyBlock } from 'local.vue-components.copy-block';

export const LinkBlocks = {
    props: ['pollLink', 'pollResult'],
    components: {
        CopyBlock
    },
    template: `
        <div class="twpx-poll-detail__link-blocks">
            <CopyBlock
                :title="BX.message('TWPX_VOTING_DETAIL_POLL_LINK_TITLE')"
                :code="pollLink"
            />
            <CopyBlock
                :title="BX.message('TWPX_VOTING_DETAIL_POLL_RESULT_TITLE')"
                :code="pollResult"
            />
        </div>
    `,
};