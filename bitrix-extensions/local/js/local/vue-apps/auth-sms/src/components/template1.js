export const Template1 = {
  data() {
    return {};
  },
  components: {},
  // language=Vue

  template: `
    <div class="vue-auth-sms">
      <div class="vue-auth-sms-left">

        <h3 class="mt-0">{{ title }}</h3>

        <MessageComponent type="info" :message="info" :button="lang.AUTH_SMS_INFO_BUTTON" @clickButton="clickInfoButton" />
        <hr v-if="info && error">
        <MessageComponent v-if="error" type="error" :message="error" :button="errorButton" @clickButton="clickErrorButton" />

        <Sms v-if="state === 'sms'" />
        <Ornz v-else-if="state === 'ornz'" />
        <Code v-else-if="state === 'code'" />

        <hr class="hr--line hr--none" />

        <div class="vue-auth-sms-alt">
          <div><ButtonComponent :text="altButton" :props="['medium', 'primary']" @clickButton="clickAlt" /></div>
          <div><a href="">{{ lang.AUTH_SMS_ENTER_LINK }}</a></div>
        </div>

      </div>
      <div class="vue-auth-sms-right">
        <img :src="templateFolder + '/auth-sms-ill.png'" alt="">
      </div>
      
    </div>
	`,
};
