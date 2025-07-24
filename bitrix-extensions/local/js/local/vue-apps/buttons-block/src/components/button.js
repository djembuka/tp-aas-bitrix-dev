import { ButtonComponent } from 'local.vue-components.button-component';
import { buttonsBlockAppStore } from '../stores/app';
import { mapState, mapActions } from 'ui.vue3.pinia';

export default {
  data() {
    return {};
  },
  props: ['button'],
  components: {
    ButtonComponent
  },
  // language=Vue
  template: `<ButtonComponent :text="button.text" :props="buttonProps()" @clickButton="clickButton" />`,
  computed: {},
  methods: {
    ...mapActions(buttonsBlockAppStore, ['changeStateWatcher', 'changeModal', 'runDelete']),
    buttonProps() {
        let result = ['secondary', 'large'];

        switch(this.button.type) {
            case 'delete':
                result = ['icon-delete', 'danger', 'large'];
                break;
        }
        return result;
    },
    clickButton() {
        if (this.button.type === 'delete') {
            const clickYes = () => {
                this.runDelete(this.button.actions['delete']);
                this.changeStateWatcher();
            };
            const clickNo = () => {
                this.changeStateWatcher();
            };
            const buttons = {
                yes: {
                    props: ['danger', 'large']
                },
                no: {
                    props: ['gray-color', 'large']
                }
            };
            this.changeModal({...this.button.modal, clickYes, clickNo, buttons});
            this.changeStateWatcher();
        }
    }
  },
};
