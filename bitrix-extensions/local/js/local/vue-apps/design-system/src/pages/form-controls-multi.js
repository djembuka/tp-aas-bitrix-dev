import { FormControlsMultiComponent } from '../components/form-controls-multi';

export const FormControlsMulti = {
  components: {
    FormControlsMultiComponent,
  },
  template: `
    <pre>&lt;ControlChoice
    :control="control"
    @input="input"
    @hints="hints"
    @create="createMulti"
    @add="addMulti"
    @remove="removeMulti"
/&gt;</pre>

{{$route.params.property}}

    <a href="/markup/vue/design-system/controls-store.js">controls-store.js</a>
    <div><FormControlsMultiComponent /></div>
  `,
};
