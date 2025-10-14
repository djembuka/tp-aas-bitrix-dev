import '../css/basic.css';
import '../css/registration.css';

import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ButtonComponent } from 'local.vue-components.button-component';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

export const Registration = {
  data() {
    return {
      items: [
        {
          code: 'name',
          title: 'ФИО',
        },
        {
          code: 'ornz',
          title: 'ОРНЗ',
        }
      ]
    }
  },
  components: {
    LoaderCircle,
    MessageComponent,
    ButtonComponent,
  },
  // language=Vue
  template: `
    <div class="twpx-voting-registration twpx-voting-client-block">

      <h1>{{ lang.registration.heading }}</h1>

      <div class="twpx-voting-client__loader" v-if="loadingRegistration">
          <LoaderCircle :show="loadingRegistration" />
      </div>

      <MessageComponent v-else-if="errorRegistration" type="error" size="big" :message="errorRegistration" />

      <div v-else>

        <div class="twpx-voting-client-content">
          <div class="twpx-voting-client-text">{{ lang.registration.text }}</div>
          <div class="twpx-voting-registration__items">
            <h2>{{ lang.registration.subtitle }}</h2>
            <div class="twpx-voting-registration__item" v-for="item in items" :key="item.code">
              <span>{{ item.title }}</span>
              <span>{{ params[item.code] }}</span>
            </div>
          </div>
          <MessageComponent v-if="params.closeRegister" type="error" size="big" :message="lang.error.registrationButton" />
          <ButtonComponent v-else :text="lang.registration.button" :props="['secondary', 'large']" :disabled="!params.canRegister" @clickButton="register" />
        </div>

      </div>

    </div>
	`,
  computed: {
    ...mapState(dataStore, [
      'lang',
      'loadingRegistration',
      'errorRegistration',
      'params'
    ]),
  },
  methods: {
    ...mapActions(dataStore, [
      'changeProp',
      'runBitrixMethod'
    ]),
    async register() {
      this.changeProp('loadingRegistration', true)

      try {
        const response = await this.runBitrixMethod('congressRegistration', {userId: BX.message('USER_ID')})
        console.log(response)
        this.changeProp('loadingRegistration', false)
        this.changeProp('errorRegistration', '');
      } catch(error) {
          this.changeProp('loadingRegistration', false)
          this.changeProp('errorRegistration', error?.errors ? error?.errors[0].message : error)
      }
    }
  },
  mounted() {
    if (this.params.notInList === true) {
      this.changeProp('errorRegistration', this.lang.error.registration);
    } else {
      this.changeProp('errorRegistration', '');
    }
  }
};
