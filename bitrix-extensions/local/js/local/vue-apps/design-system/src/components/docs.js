import { DocComponent } from 'local.vue-components.doc-component';

import { mapState } from 'ui.vue3.pinia';
import { docsStore } from '../stores/docs-store';

export const DocsComponent = {
  data() {},
  components: {
    DocComponent,
  },
  template: `
    <div>
      <div
        class="twpx-design-system-block twpx-design-system-block--two-cols"
        style="grid-template-columns: 3fr 2fr;"
        v-for="doc in docs"
        :key="doc.id"
      >
        <div>
          <DocComponent :doc="doc" @clickDelete.prevent="alert('delete')" />
        </div>
        <pre>{{ doc }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(docsStore, ['docs']),
  },
  methods: {},
};
