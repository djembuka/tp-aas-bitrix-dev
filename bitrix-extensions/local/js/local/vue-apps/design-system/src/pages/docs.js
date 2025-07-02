import { DocsComponent } from '../components/docs.js';

export const Docs = {
  components: {
    DocsComponent,
  },
  template: `
    <div>&lt;DocComponent :doc="doc" @clickDelete.prevent="alert('delete')" /&gt;</div>
    <div><DocsComponent /></div>
  `,
};
