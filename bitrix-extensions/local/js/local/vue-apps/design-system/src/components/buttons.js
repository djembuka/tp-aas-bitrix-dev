import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState } from 'ui.vue3.pinia';
import { buttonsStore } from '../stores/buttons-store';

export const ButtonsComponent = {
  data() {},
  components: {
    ButtonComponent,
  },
  template: `
    <div>
      <div class="twpx-design-system-block" v-for="button in buttons" :key="button.id">
        <div>
          <ButtonComponent :text="button.text" :props="button.props" @clickButton="button.clickButton" />
        </div>
        <pre>{{ getButtonCode(button) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(buttonsStore, ['buttons']),
  },
  methods: {
    getButtonCode(button) {
      return `ButtonComponent :text="${button.text}" :props="[${button.props}]" @clickButton=""`;
    },
  },
};
