export const SubmitButton = {
  data() {
    return {};
  },
  props: ['agreement', 'controlsBlock', 'confirmDocsFlag'],
  emits: ['bitrixLogs'],
  template: `
    <div v-if="agreement">
      <div class="b-checkbox" id="agreement" :class="{invalid: agreement.invalid}">
        <label>
          <input class="filled-in" type="checkbox" required="" :name="agreement.name" :value="agreement.value" :checked="checked" v-model="checked"><span v-html="agreement.text"></span>
        </label>
      </div>
      <hr class="hr--lg">
      <div class="b-appeal-new-change-form__submit">
        <a href="#" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#submitConfirmModal" :disabled="isDisabled" @click="clickSubmit($event)">Отправить</a>
        <small class="text-muted" v-if="isDisabled">Вы не закончили заполнение обязательных полей. <a href="#" @click.prevent="clickContinue">Продолжить</a></small>
      </div>
    </div>
  `,
  watch: {
    checked(val) {
      this.$emit('bitrixLogs', {
        id: 12,
        message: `${this.agreement.text}: ${val}`,
      });
    },
  },
  computed: {
    checked() {
      return this.agreement ? this.agreement.checked : false;
    },
    isDisabled() {
      //controls
      let controlsFlag = true;
      let controlsPatternFlag = true;
      if (this.controlsBlock && this.controlsBlock.controls) {
        //required
        const requiredControls = this.controlsBlock.controls.filter(
          (control) => control.required
        );
        controlsFlag = requiredControls.every((control) => {
          if (control.multy) {
            return control.value.every((value) => value.val !== '');
          } else {
            return control.value !== '';
          }
        });
        //width pattern
        const patternControls = this.controlsBlock.controls.filter(
          (control) => control.pattern
        );
        controlsPatternFlag = patternControls.every((control) => {
          if (control.multy) {
            return control.value.every(
              (value) =>
                value.val === '' ||
                new RegExp(control.pattern, 'ig').test(value.val)
            );
          } else {
            return (
              control.value === '' ||
              new RegExp(control.pattern, 'ig').test(control.value)
            );
          }
        });
      }

      //confirm docs
      let confirmDocsFlag = true;
      if (this.confirmDocsBlock && this.confirmDocsBlock.items) {
        const checked = this.confirmDocsBlock.items.find(
          (item) => item.checked === true
        );

        const requiredConfirm = checked
          ? checked.controls.filter((control) => control.required)
          : undefined;

        confirmDocsFlag = requiredConfirm
          ? requiredConfirm.every((control) =>
              control.value && typeof control.value === 'object'
                ? control.value.every((value) => value.val !== '')
                : control.value !== ''
            )
          : false;
      }

      //checkbox
      const checkboxFlag = this.checked;

      return !(
        controlsFlag &&
        controlsPatternFlag &&
        confirmDocsFlag &&
        checkboxFlag
      );
    },
  },
  methods: {
    clickSubmit(e) {
      this.$emit('bitrixLogs', {
        id: 13,
        message: e.target.innerHTML,
      });
    },
    clickContinue() {
      const control = Array.from(
        document.querySelector('.b-appeal-new-change-form form').elements
      ).find((elem) => {
        let isRequired = elem.classList.contains('mx-input')
          ? elem.closest('.mx-datepicker').getAttribute('data-required')
          : elem.getAttribute('data-required');

        if (
          elem.getAttribute('type') === 'file' &&
          !elem.closest('.b-form-control-vc').querySelector('input[type=radio]')
            .checked
        ) {
          isRequired = false;
        }

        const value =
          elem.getAttribute('type') === 'file'
            ? elem.getAttribute('data-value')
            : elem.value;

        const pattern = elem.getAttribute('data-pattern');

        if (pattern && value !== '') {
          return !new RegExp(pattern, 'ig').test(value);
        } else {
          return (
            isRequired &&
            elem.tagName.toLowerCase() !== 'button' &&
            elem.getAttribute('type') !== 'hidden' &&
            value === ''
          );
        }
      });

      if (!control) return;

      if (control.closest('.b-float-label')) {
        control.closest('.b-float-label').classList.add('invalid');
      } else if (control.closest('.b-float-label--file')) {
        control.closest('.b-float-label--file').classList.add('invalid');
      }

      window.scrollTo({
        top: control.getBoundingClientRect().top + window.scrollY - 120,
        behavior: 'smooth',
      });

      setTimeout(() => {
        control.focus();
      }, 1000);
    },
  },
};
