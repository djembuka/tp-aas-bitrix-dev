import { ControlChoice } from 'local.vue-components.control-choice';
import { FieldsetMulti } from './fieldset-multi';


export const ControlsBlock = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    FieldsetMulti
  },
  props: ['controlsBlock'],
  template: `
  <div>
    <h2>{{ controlsBlock.title }}</h2>
    <p v-html="controlsBlock.text"></p>
    <hr class="hr--sl">

    <FieldsetMulti v-if="true || formControl.type==='fieldset'"
      :fieldset="formControl"
      @create="$emit('create', $event)"
      @add="$emit('add', $event)"
      @remove="$emit('remove', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @enter="$emit('enter', $event)"
      @hints="$emit('hints', $event)"
    />

    <div v-for="(formControl, controlIndex) in controlsBlock.controls" :key="formControl.id">

      <div class="row align-items-center">
        <div class="col-lg-6 col-12">

          <ControlChoice
            :control="formControl"
            @create="$emit('create', $event)"
            @add="$emit('add', $event)"
            @remove="$emit('remove', $event)"
            @input="$emit('input', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @enter="$emit('enter', $event)"
            @hints="$emit('hints', $event)"
          />
        
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
  },
};
