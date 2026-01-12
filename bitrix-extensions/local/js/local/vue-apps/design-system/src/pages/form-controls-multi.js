import { FormControlsMultiComponent } from '../components/form-controls-multi';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formControlsMultiStore } from '../stores/form-controls-multi-store';

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
        },
        {
          path: 'tel',
          name: 'tel'
        },
        {
          path: 'email',
          name: 'email'
        },
        {
          path: 'password',
          name: 'password'
        },
        {
          path: 'num',
          name: 'num'
        },
        {
          path: 'timesingle',
          name: 'timesingle'
        },
        {
          path: 'hint',
          name: 'hint'
        },
        {
          path: 'hintHtml',
          name: 'hintHtml'
        },
        {
          path: 'hintAutocomplete',
          name: 'hintAutocomplete'
        },
        {
          path: 'hintHidden',
          name: 'hintHidden'
        },
        {
          path: 'dateRange',
          name: 'dateRange'
        },
        {
          path: 'dateSingle',
          name: 'dateSingle'
        },
        {
          path: 'datetimeSingle',
          name: 'datetimeSingle'
        },
        {
          path: 'file',
          name: 'file'
        },
        {
          path: 'fileUpload',
          name: 'fileUpload'
        },
        {
          path: 'selectDropdown',
          name: 'selectDropdown'
        },
        {
          path: 'selectRadio',
          name: 'selectRadio'
        },
        {
          path: 'selectMulti',
          name: 'selectMulti'
        },
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

    <a href="/markup/vue/design-system/controls-store.js">controls-store.js</a>

    <div>
      <FormControlsMultiComponent
        :property="$route.params.property"
        :controls="controls[$route.params.property]"
        @input="input"
        @hints="hints"
        @create="createMulti"
        @add="addMulti"
        @remove="removeMulti"
      />
    </div>
  `,
  computed: {
    ...mapState(formControlsMultiStore, ['controls']),
  },
  methods: {
    ...mapActions(formControlsMultiStore, [
      'changeControlValue',
      'runHints',
      'setHints',

      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
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
