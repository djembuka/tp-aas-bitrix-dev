import { FormControlRadioWithControls } from './formControlRadioWithControls.js';

export const ConfirmDocsBlock = {
  components: {
    FormControlRadioWithControls
  },
  props: ['confirmDocsBlock'],
  template: `
    <div>

      <h2 v-if="confirmDocsBlock.title">{{ confirmDocsBlock.title }}</h2>

      <p v-if="confirmDocsBlock.items.length !== 1 && confirmDocsBlock.text" v-html="confirmDocsBlock.text"></p>

      <div v-for="(doc, index) in confirmDocsBlock.items">

        <FormControlRadioWithControls
          :index="index"
          :doc="doc"
          :blockFlag="confirmDocsBlock.items.length === 1"
          
          @checkDoc="checkDoc"
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

    </div>`,
  emits: [
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
  methods: {
    checkDoc(args) {
      this.$emit('checkDoc', args);
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
  mounted() {
    this.confirmDocsBlock.items.forEach((item) => {
      if (item.controls) {
        item.controls.forEach((control) => {
          if (!control.value && control.sub) {
            control.sub.forEach((s) => {
              s.disabled = true;
            });
          }
        });
      }
    });
  },
};
