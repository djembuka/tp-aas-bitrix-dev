import { FormControlsComponent } from '../components/form-controls';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { controlsStore } from '../stores/controls-store';
import { formControlsStore } from '../stores/form-controls-store';

import { ButtonComponent } from 'local.vue-components.button-component';

export const FormControls = {
  data() {
    return {
      showEssential: true
    }
  },
  components: {
    FormControlsComponent,
    ButtonComponent
  },
  template: `
  <div class="twpx-desing-system-submenu-grid">
    <div class="twpx-desing-system-submenu">

      <router-link v-for="item in submenu"
        :key="item.path"
        :to="item.path"
        @click="click(item.path)"
      >
        {{ item.name }}
      </router-link>

    </div>

    <div style="display: grid; gap: 32px;">

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <h4 class="mt-0">Подключение</h4>
<pre class="twpx-desing-system-component-pre">import { ControlChoice } from 'local.vue-components.control-choice';
      
&lt;ControlChoice
  :control='control'
  @input='input'
  @hints='hints'
  @create='createMulti'
  @add='addMulti'
  @remove='removeMulti'
/&gt;</pre>
        </div>
        <div>
          <h4 class="mt-0">Store с методами</h4>
          <a href="/local/js/local/vue-apps/design-system/src/stores/controls-store.js">controls-store.js</a>
          
          <hr>

          <ButtonComponent :text="codeButtonText" :props="['secondary','medium']" @clickButton="clickCodeButton" />
        </div>
      </div>

      <FormControlsComponent
        :controls="controlsOfType"
        :showEssential="showEssential"
        @input="input"
        @hints="hints"
        @create="createMulti"
        @add="addMulti"
        @remove="removeMulti"
        @addTab="addTab",
        @setDisabled="setDisabled"',
        @checkRequired="checkRequired"',
      />

    </div>
  </div>
  `,
  computed: {
    ...mapState(formControlsStore, ['controlsData', 'controls']),
    submenu() {
      const controlsNames =
        Object.keys(this.controlsData)
        .sort((a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });

      return controlsNames.map(name => ({
        path: `/controls/${name}`,
        name
      }));
    },
    controlsOfType() {
      const property = this.$route.params.property;

      if (!property) {
        return [];
      }

      if (!this.controls[property]) {
        this.createControlsOfType(property);
      }

      return this.controls[property]
    },
    codeButtonText() {
      return this.showEssential ? 'Показывать сгенерированный код' : 'Показывать исходный код';
    }
  },
  methods: {
    ...mapActions(controlsStore, [
      'changeControlValue',
      'runHints',
      'setHints',

      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
    ...mapActions(formControlsStore, [
      'addTab',
      'setDisabled',
      'checkRequired',
      'createControlsOfType'
    ]),
    clickCodeButton() {
      this.showEssential = !this.showEssential;
    },
    input(args) {
      this.changeControlValue(args);
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
      const t = tab.substring(1);

      if (t) {
        url.searchParams.set('tab', t.replace('/', '_'));
      } else {
        url.searchParams.delete('tab');
      }
      
      window.history.replaceState({}, '', url.toString());
    }
  },
  beforeMount() {
    this.submenu.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }
};
