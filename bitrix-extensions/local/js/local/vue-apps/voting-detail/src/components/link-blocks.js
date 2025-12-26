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
                title="Ссылка на публичную страницу результатов"
                :code="pollLink"
            />
            <CopyBlock
                title="Ссылка на публичное голосование"
                :code="pollResult"
            />
        </div>
    `,
};