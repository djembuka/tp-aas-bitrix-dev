import { ControlChoice } from 'local.vue-components.control-choice';

export const ConfirmDocsBlock = {
  components: {
    ControlChoice,
  },
  props: ['confirmDocsBlock'],
  template: `
    <div>

      <h2 v-if="confirmDocsBlock.title">{{ confirmDocsBlock.title }}</h2>

      <p v-if="confirmDocsBlock.items.length !== 1 && confirmDocsBlock.text" v-html="confirmDocsBlock.text"></p>

      <div v-for="(doc, index) in confirmDocsBlock.items">

        <div>
          <b v-if="doc.title" v-html="doc.title"></b>
          <span v-html="doc.text"></span>
        </div>
        
        <div>

          <hr class="hr--line" style="margin-bottom: 2.5rem;">

          <div v-for="(control, index) in doc.controls" :key="control.id">
            <ControlChoice :control="control" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlChoice>
            <hr>
          </div>
          
        </div>

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
