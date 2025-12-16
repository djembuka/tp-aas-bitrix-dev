import { FormControlsMultiComponent } from '../components/form-controls-multi';

export const FormControlsMulti = {
  data() {
    return {
      submenu: [
        {
          path: 'text',
          name: 'text'
        },
        {
          path: 'textarea',
          name: 'textarea'
        }
      ]
    }
  },
  components: {
    FormControlsMultiComponent,
  },
  template: `
    <div class="twpx-desing-system-submenu">

      <router-link v-for="item in submenu"
        :key="item.path"
        :to="item.path"
        @click="click(item.path)"
      >
        {{ item.name }}
      </router-link>

    </div>


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
  methods: {
    click(tab) {
      const url = new URL(window.location.href);
      if (tab && tab !== '') {
        url.searchParams.set('tab', `/multi/${tab}`);
      } else {
        url.searchParams.delete('tab');
      }
      
      // Обновляем URL
      window.history.replaceState({}, '', url.toString());
    }
  }
};
