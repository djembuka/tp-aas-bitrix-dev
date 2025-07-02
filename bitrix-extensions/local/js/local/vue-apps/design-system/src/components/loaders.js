import { LoaderCircle } from 'local.vue-components.loader-circle';
import { LoaderBubbles } from 'local.vue-components.loader-bubbles';
import { LoaderSquares } from 'local.vue-components.loader-squares';

import { mapState } from 'ui.vue3.pinia';
import { loadersStore } from '../stores/loaders-store';

export const LoadersComponent = {
  data() {},
  components: {
    LoaderCircle,
    LoaderBubbles,
    LoaderSquares
  },
  template: `
    <div>
      <div class="twpx-design-system-block twpx-design-system-block--two-cols" v-for="loader in loaders" :key="loader.id">
        <div>
          <component :is="loader.component" :show="true" />
        </div>
        <pre>{{ getLoaderCode(loader) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(loadersStore, ['loaders']),
  },
  methods: {
    getLoaderCode(loader) {
      return `${loader.component} :show="true"`;
    },
  },
};
