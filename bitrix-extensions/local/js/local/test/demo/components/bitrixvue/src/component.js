import { VueComponent } from 'local.demo.components.vue';

export const BitrixVueComponent = {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    VueComponent,
  },
  computed: {
    buttonName() {
      return this.$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_BUTTON_COUNTER', {
        '#COUNTER#': this.counter,
      });
    },
  },
  // language=Vue
  template: `
    <VueComponent/>
		{{$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_TITLE')}} <button @click="counter++">{{buttonName}}</button>
	`,
};
