import { CopyBlock } from 'local.vue-components.copy-block';

import { mapState } from 'ui.vue3.pinia';
import { copyBlockStore } from '../stores/copy-block-store';

export const CopyBlockCpmponent = {
    data() {},
    components: {
        CopyBlock,
    },
    template: `
    <div style="display: grid; gap: 16px;">
      <div class="twpx-design-system-block" v-for="copy in blocks"" :key="copy.id">
        <div>
            <CopyBlock
                :title="copy.title"
                :code="copy.code"
            />
        </div>
        <pre>{{ getCopyCode(copy) }}</pre>
      </div>
    </div>
    `,
    computed: {
        ...mapState(copyBlockStore, ['blocks']),
    },
    methods: {
        getCopyCode(copy) {
        return `import { CopyBlock } from 'local.vue-components.copy-block';
        
<CopyBlock
    :title="${copy.title}"
    :code="${copy.code}"
/>`;
        },
    },
};