import { DocsComponent } from '../components/docs.js';

export const Docs = {
  components: {
    DocsComponent,
  },
  template: `
    <div style="display: grid; gap: 32px;">

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <h4 class="mt-0">Подключение</h4>
<pre class="twpx-desing-system-component-pre">import { DocComponent } from 'local.vue-components.doc-component';
      
&lt;DocComponent
  :doc='doc'
  @clickDelete.prevent="alert('delete')"
/&gt;</pre>
        </div>
      </div>
    
      <DocsComponent />
    </div>
  `,
};
