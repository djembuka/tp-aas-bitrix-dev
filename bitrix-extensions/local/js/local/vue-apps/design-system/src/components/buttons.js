import { ButtonComponent } from 'local.vue-components.button-component';

export const ButtonsComponent = {
  data() {
    return {
      text: 'Отправить',
    };
  },
  components: {
    ButtonComponent,
  },
  template: `
    <div>buttons component
    
    <ButtonComponent :text="text" :props="['small', 'secondary', 'wide-mobile']" @clickButton="clickButton" />
    
    </div>
  `,
};
