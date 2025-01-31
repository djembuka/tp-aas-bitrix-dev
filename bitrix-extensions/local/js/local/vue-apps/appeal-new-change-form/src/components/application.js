import './application.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { formStore } from '../stores/form';

import { HiddenFields } from './hidden-fields';
import { DocsBlock } from './docs-block';
import { DataToChange } from './data-to-change';
import { ConfirmDocsBlock } from './confirm-docs-block';
import { SubmitButton } from './submit-button';

export const Application = {
  data() {
    return {};
  },
  components: {
    HiddenFields,
    DocsBlock,
    DataToChange,
    ConfirmDocsBlock,
    SubmitButton,
  },
  // language=Vue

  template: `
    <div>
      <HiddenFields v-if="hidden" :hidden="hidden" />

      <div v-if="docsBlock && docsBlock.items && docsBlock.items.length">
        <DocsBlock :docsBlock="docsBlock" @timeoutAutosave="timeoutAutosave" @autosave="autosave" />
        <hr class="hr--lg">
      </div>

      <div v-if="controlsBlock && controlsBlock.controls && controlsBlock.controls.length">
        <DataToChange :controlsBlock="controlsBlock" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" @timeoutAutosave="timeoutAutosave" @autosave="autosave" />
        <hr class="hr--lg">
      </div>

      <div v-if="confirmDocsBlock && confirmDocsBlock.items && confirmDocsBlock.items.length">
        <ConfirmDocsBlock :confirmDocsBlock="confirmDocsBlock" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"  @timeoutAutosave="timeoutAutosave" @autosave="autosave" />
        <hr class="hr--lg">
      </div>

      <SubmitButton :agreement="agreement" :controlsBlock="controlsBlock" :confirmDocsBlock="confirmDocsBlock" @bitrixLogs="bitrixLogs" @timeoutAutosave="timeoutAutosave" @autosave="autosave" />

    </div>
	`,
  computed: {
    ...mapState(formStore, [
      'hidden',
      'docsBlock',
      'controlsBlock',
      'confirmDocsBlock',
      'autosaveTimeoutId',
      'autosave',
      'agreement',
      'url',
    ]),
  },
  methods: {
    ...mapActions(formStore, [
      'bitrixLogs',
      'runHintsAction',
      'setHints',
      'changeControlValue',
      'createMulti',
      'addMulti',
      'removeMulti',
    ]),
    hints({ type, control, action, value }) {
      switch (type) {
        case 'get':
          this.runHintsAction({
            control,
            action,
          });
          break;
        case 'set':
          this.setHints({
            control,
            value,
          });
          break;
      }
    },
    input({ control, value, checked }) {
      this.changeControlValue({
        control,
        value,
        checked,
      });
    },
    focus() {
      console.log('focus');
    },
    blur() {
      console.log('blur');
    },
    enter() {
      console.log('enter');
    },
  },
};
