import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState } from 'ui.vue3.pinia';
import { buttonsStore } from '../stores/buttons-store';

export const ButtonsComponent = {
  data() {},
  components: {
    ButtonComponent,
  },
  template: `
    <div style="display: grid; gap: 16px;">
      <div class="twpx-design-system-block" style="grid-template-columns: 1fr 2fr;" v-for="button in buttons" :key="button.id">
        <div>
          <ButtonComponent
             v-if="button.clickButton"
            :text="button.text"
            :props="button.props"
            @clickButton="button.clickButton"
          />
          
          <ButtonComponent
             v-if="button.href"
            :text="button.text"
            :props="button.props"
            :href="button.href"
          />
        </div>
<pre>import { ButtonComponent } from 'local.vue-components.button-component';

{{ getButtonCode(button) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(buttonsStore, ['buttons']),
  },
  methods: {
    getButtonCode(button) {

      const p = button.props.reduce((str, cur, i, arr) => {
        str += `'${cur}'`;
        if (i < arr.length - 1) {
          str += `, `;
        }
        return str;
      }, '');

      if (button.clickButton) {
        return `<ButtonComponent :text="${button.text}" :props="[${p}]" @clickButton="" />`;
      } else if (button.href) {
        return `<ButtonComponent :text="${button.text}" :props="[${p}]" :href="${button.href}" />`;
      }
    },
  },
};
