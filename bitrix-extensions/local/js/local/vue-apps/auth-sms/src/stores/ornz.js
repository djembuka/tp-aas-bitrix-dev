import { defineStore } from 'ui.vue3.pinia';

export const ornzStore = defineStore('ornz', {
  state: () => ({
    lang: {},
    state: 'A1',
    hint: {
      property: 'hint',
      id: 'id0',
      name: 'ORNZ',
      label: '',
      value: '',
      required: true,
      disabled: false,
    },
    password: {
      property: 'password',
      id: 'id2',
      name: 'PASSWORD',
      label: '',
      value: '',
      required: true,
      disabled: false,
    },
    checkbox: {
      property: 'checkbox',
      id: 'id1',
      name: 'CHECKBOX',
      label: '',
      value: '',
      required: false,
      disabled: false,
    },
    submitProps: { large: true, secondary: true, wide: true },
  }),
  getters: {
    buttonDisabled() {
      return (
        this.hint.setInvalidWatcher ||
        this.hint.disabled ||
        !this.hint.value.trim() ||
        !this.checkbox.value
      );
    },
  },
  actions: {
    changeSubmitProps(obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          this.submitProps[key] = true;
        } else {
          delete this.submitProps[key];
        }
      });
    },
    changeControlValue({ control, value }) {
      control.value = value;
      if (control.property === 'tel') {
        control.setInvalidWatcher = false;
      }
    },
    runFormSubmit() {
      const self = this;

      if (window.BX) {
        BX.ajax
          .runAction('twinpx:authorization.api.send', {
            data: {
              phone: this.hint.value,
            },
          })
          .then(
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              //show code
              this.hint.focusWatcher = false;
              this.hint.setInvalidWatcher = false;
              this.hint.regexp_description = '';
            },
            (response) => {
              this.changeSubmitProps({ 'load-circle': false });

              this.error = response.errors[0];

              if (String(response.errors[0].code) === String(1003)) {
                //C1 1002
                this.state = 'C1';
                this.buttonSubmitTimer(127); //response.errors[0].customData.remain

                //B1 1001
                // this.state = 'B1';
                // this.hint.disabled = true;
                // this.errorButton = this.lang.AUTH_SMS_A1_ERROR_BUTTON_1001;
                //A2
                // this.state = 'A2';
                // this.hint.focusWatcher = true;
                // this.hint.setInvalidWatcher = true;
                // this.hint.regexp_description = lang.AUTH_SMS_A1_TEL_1003;
              } else if (String(response.errors[0].code) === String(1005)) {
                //A3
                this.state = 'A3';
                this.hint.focusWatcher = true;
                this.hint.setInvalidWatcher = true;
                this.hint.regexp_description = lang.AUTH_SMS_A1_TEL_1005;
              }
            }
          );
      }
    },
  },
});
