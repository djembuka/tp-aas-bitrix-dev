import { ControlChoice } from 'local.vue-components.control-choice';

export const ControlsBlock = {
  data() {
    return {};
  },
  components: { ControlChoice },
  props: ['controlsBlock'],
  template: `
  <div>
    <h2>{{ controlsBlock.title }}</h2>
    <p v-html="controlsBlock.text"></p>
    <hr class="hr--sl">
    <div v-for="(formControl, controlIndex) in controlsBlock.controls" :key="formControl.id">

      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <ControlChoice :control="formControl" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
        </div>
        <hr class="hr--xs d-block d-lg-none w-100">
        <div class="col-lg-6 col-12 small">
          <div v-if="formControl.completeBlock && formControl.completeBlock.comment" class="text-muted b-complete-comment">{{formControl.completeBlock.comment}}</div>
        </div>
      </div>

      <hr class="hr--sl">

    </div>
  </div>
  `,
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
    focus(args) {
      this.$emit('focus', args);
    },
    blur(args) {
      this.$emit('blur', args);
    },
    enter(args) {
      this.$emit('enter', args);
    },
    hints(args) {
      this.$emit('hints', args);
    },
  },
};
