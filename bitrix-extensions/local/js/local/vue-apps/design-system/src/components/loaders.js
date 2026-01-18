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
    <div style="display: grid; gap: 32px;">
      <div
        class="twpx-design-system-block twpx-design-system-block--two-cols"
        style="grid-template-columns: 3fr 2fr;"
        v-for="loader in loaders"
        :key="loader"
      >
        <div>
          <component :is="componentName(loader)" :show="true" />
        </div>
        <pre>{{ getLoaderCode(loader) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(loadersStore, ['loaders']),
  },
  methods: {
    capitalName(loader) {
      return `${loader.charAt(0).toUpperCase()}${loader.substring(1)}`;
    },
    componentName(loader) {
      return `Loader${this.capitalName(loader)}`;
    },
    getLoaderCode(loader) {
      return `import { Loader${this.capitalName(loader)} } from 'local.vue-components.loader-${loader}';

<Loader${this.capitalName(loader)} :show="true" />`;
    },
  },
};
