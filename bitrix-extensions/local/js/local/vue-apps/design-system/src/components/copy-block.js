import { CopyBlock } from 'local.vue-components.copy-block';

import { mapState } from 'ui.vue3.pinia';
import { copyBlockStore } from '../stores/copy-block-store';

export const CopyBlockCpmponent = {
    data() {},
    components: {
        CopyBlock,
    },
    template: `
    <div style="display: grid; gap: 32px;">
        <CopyBlock v-for="block in blocks"
            :title="block.title"
            :code="block.code"
        />
    </div>
    `,
    computed: {
    ...mapState(copyBlockStore, ['blocks']),
    },
};