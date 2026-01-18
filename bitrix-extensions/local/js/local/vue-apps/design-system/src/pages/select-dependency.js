import { SelectDependencyComponent } from '../components/select-dependency';

export const SelectDependency = {
  components: {
    SelectDependencyComponent,
  },
  template: `
  <div style="display: grid; gap: 32px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <h4 class="mt-0">Подключение</h4>
<pre class="twpx-desing-system-component-pre">import { ControlChoice } from 'local.vue-components.control-choice';

или

import { ControlComponent } from 'local.vue-components.control-component';
      
&lt;ControlComponent
  :control='control'
  @input='input'
/&gt;</pre>
        </div>
        <div>
          <h4 class="mt-0">Store с методами</h4>
          <a href="/local/js/local/vue-apps/design-system/src/stores/controls-store.js">controls-store.js</a>
        </div>
      </div>

      <SelectDependencyComponent />
    </div>
  `,
};
