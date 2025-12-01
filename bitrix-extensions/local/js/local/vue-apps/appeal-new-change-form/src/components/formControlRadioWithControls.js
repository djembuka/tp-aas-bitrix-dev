import { ControlChoice } from 'local.vue-components.control-choice';

export const FormControlRadioWithControls = {
    data() {
      return {
        checked: this.doc.checked,
      };
    },
    components: {
      ControlChoice
    },
    props: ['index', 'doc', 'blockFlag'],
    emits: [
        'checkDoc',

        'autosave',
        'timeoutAutosave',
        'create',
        'add',
        'remove',
        'input',
        'focus',
        'blur',
        'enter',
    ],
    template: `
        <div class="b-form-control-vc" :class="{'i-active': doc.checked, 'i-block': blockFlag}">

            <label :class="{'i-active': checked}" class="b-form-control-vc__top">
                <div class="b-form-control-vc__content">
                    <div class="b-form-control-vc__text">
                        <b v-if="!blockFlag" v-html="doc.title"></b>
                        <span v-html="doc.text"></span>
                    </div>
                </div>
                
                <div class="b-radio-vc">
                    <input type="radio"
                        :name="doc.name"
                        :checked="ckecked"
                        :value="doc.value"
                        class="with-gap"
                        @change="change"
                    >
                    <span></span>
                </div>
            </label>

            <div class="b-form-control-vc__fields" v-show="blockFlag || doc.checked">

                <hr class="hr--line" style="margin-bottom: 2.5rem;">

                <div v-for="(control, index) in doc.controls" :key="control.id">
                    <ControlChoice
                        :control="control"
                        @create="create"
                        @add="add"
                        @remove="remove"
                        @input="input"
                        @focus="focus"
                        @blur="blur"
                        @enter="enter"
                    />
                    <hr>
                </div>
                
            </div>
        </div>
    `,
    methods: {
        change(e) {
            //highlight
            /*if (e.target.checked) {
              e.target
                .closest('.row')
                .querySelectorAll('label')
                .forEach(function (label) {
                  //set inactive
                  label.classList.remove('i-active');
                });
              e.target.closest('label').classList.add('i-active');
            }*/
    
            //set checked
            this.checked = true;
    
            //set question as active
            this.$emit('checkDoc', { doc: this.doc});
    
            //show the form if it is the first radio
            // this.$emit('set-form-active', this.index);
    
            //autosave
            // (async () => {
            //   try {
            //     let response = await fetch(
            //       `${this.$store.state.url.autosave}?name=${this.control.name}&value=${this.control.value}&element_id=${store.state.reportId}`
            //     );
            //     let result = await response.json();
            //     if (result.STATUS !== 'Y') {
            //       throw new Error('Ошибка автосохранения');
            //     }
            //   } catch (err) {
            //     throw err;
            //   }
            // })();
            // //autosave whole form
            // this.$emit('autosave');
        },
        autosave() {
          this.$emit('autosave');
        },
        timeoutAutosave() {
          this.$emit('timeoutAutosave');
        },
        create(args) {
          this.$emit('create', args);
        },
        add(args) {
          this.$emit('add', args);
        },
        remove(args) {
          this.$emit('remove', args);
        },
        input(args) {
          this.$emit('input', args);
        },
        focus() {
          this.$emit('focus', args);
        },
        blur() {
          this.$emit('blur', args);
        },
        enter() {
          this.$emit('enter', args);
        },
    },
  };
  