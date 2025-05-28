import './application.css';

import { TheNavigation } from './the-navigation';
import { ControlComponent } from 'local.vue-components.control-component';
import { TheButtons } from './the-buttons';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {};
  },
  components: {
    TheNavigation,
    ControlComponent,
    TheButtons
  },
  // language=Vue

  template: `
    <div class="twpx-vue-marketplace">
      <h2>{{ $Bitrix.Loc.getMessage('TWPX_MARKETPLACE_H2') }}</h2>
      <TheNavigation />
      <router-view />
      <div v-html="steps[0].html"></div>
      <div>
        <ControlComponent v-for="control in steps[0].controls" :key="control.id" :control="control" @input="input" />
      </div>
      <TheButtons />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessid', 'signedParameters', 'steps']),
  },
  methods: {
    ...mapActions(dataStore, []),
    one() {
      console.log(this.$route.path)
      console.log(this.$route.params.id)
    }
  },
  mounted() {
    this.one()
    // this.runColumnsNames({
    //   mode: 'class',
    //   data: {
    //     signedParameters: this.signedParameters,
    //     sessid: this.sessid,
    //   },
    // });

    // this.runItems({
    //   mode: 'class',
    //   data: {
    //     signedParameters: this.signedParameters,
    //     sessid: this.sessid,
    //     startIndex: this.items.startIndex || 0,
    //     maxCountPerRequest: this.maxCountPerRequest,
    //   },
    // });
  },
};
