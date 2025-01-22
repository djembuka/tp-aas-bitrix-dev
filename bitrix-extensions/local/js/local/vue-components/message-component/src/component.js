import './component.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const MessageComponent = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'error', 'table-result'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'big',
      validator(value) {
        return ['big', 'small'].includes(value);
      },
    },
    message: {
      type: String,
      default: 'Text',
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickButton'],
  // language=Vue
  template: `
		<div class="vue-message" :class="classObject">
      <div class="vue-message__icon">

        <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 12.25V8.5M11 4.75V4.84399M13.7174 15.7826L11 21L8.5 15.7826H3.5C2.11929 15.7826 1 14.6633 1 13.2826V3.5C1 2.11929 2.11929 1 3.5 1H18.5C19.8807 1 21 2.11929 21 3.5V13.2826C21 14.6633 19.8807 15.7826 18.5 15.7826H13.7174Z" stroke="#FF9300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 12.0828V6.68616M12 16.0829V16.1304M18.9299 20.625H5.07009C3.1769 20.625 1.57924 19.3933 1.07658 17.7083C0.862001 16.989 1.12565 16.2397 1.52893 15.6018L8.45884 3.30123C10.0825 0.73292 13.9176 0.732924 15.5412 3.30124L22.4711 15.6018C22.8743 16.2397 23.138 16.989 22.9234 17.7083C22.4208 19.3933 20.8231 20.625 18.9299 20.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="type === 'table-result'" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7.88894V11.4445C1 12.4263 1.7835 13.2223 2.75 13.2223H13.25C14.2165 13.2223 15 12.4263 15 11.4445V7.88894M1 7.88894L3.19917 1.93139C3.45531 1.23752 4.10827 0.777832 4.83775 0.777832H11.1622C11.8917 0.777832 12.5447 1.23752 12.8008 1.93139L15 7.88894M1 7.88894H4.5L5.66667 9.13339H10.3333L11.5 7.88894H15" stroke="#5F7696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
      <div class="vue-message__message" v-html="message"></div>
      <div v-if="button" class="vue-message__button">
        <ButtonComponent :text="button" :props="['small', 'secondary', 'wide-mobile']" @clickButton="clickButton" />
      </div>
    </div>
	`,
  computed: {
    classObject() {
      const result = {};
      result[`vue-message--${this.type}`] = true;
      result[`vue-message--${this.size}`] = true;
      // result['anim'] = !this.message;
      return result;
    },
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  },
};
