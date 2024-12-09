import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

import { ControlTel } from 'local.vue-components.control-tel';

export const A1 = {
  data() {
    return {
      control: {
        property: 'tel',
        id: 'id0',
        name: 'PHONE',
        label: 'Номер телефона',
        value: '',
        required: true,
        disabled: false,
      },
    };
  },
  components: {
    ControlTel,
  },
  // language=Vue

  template: `
    <div>
      <ControlTel :control="control" @input="input" />
    </div>
	`,
  computed: {
    ...mapState(dataStore, ['sessionid', 'signedParameters']),
  },
  methods: {
    // ...mapActions(tableStore, [
    //   'hideErrorTable',
    //   'runColumnsNames',
    //   'runItems',
    //   'runDefaultSort',
    //   'runSetDefaultSort',
    // ]),
    input({ control, value }) {
      console.log(value);
    },
  },
  mounted() {},
};
