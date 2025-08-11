import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalYesNo } from 'local.vue-components.modal-yes-no';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';

import { CommentItem } from './comment.js';
import { EditForm } from './edit-form.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { formStore } from '../stores/form.js';
import { editFormStore } from '../stores/edit-form.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    ModalYesNo,
    ModalAnyContent,
    CommentItem,
    EditForm
  },
  // language=Vue
  template: `
  <div class="twpx-dc-question-discussion" :id="id">

    <LoaderCircle :show="loading" />

    <MessageComponent v-if="error" type="error" size="big" :message="error" />

    <ModalYesNo
      :heading="lang.deleteModal.heading"
      :text="lang.deleteModal.text"
      :yes="lang.deleteModal.yes"
      :no="lang.deleteModal.no"
      :buttons="{
        yes: {
          props: ['danger', 'large']
        },
        no: {
          props: ['gray-color', 'large']
        }
      }"
      :stateWatcher="deleteModalStateWatcher"
      @clickYes="clickDeleteModalYes"
      @clickNo="clickDeleteModalNo"
    />

    <ModalAnyContent :stateWatcher="editModalStateWatcher">
      <EditForm
        :id="id"
        :h3="lang.editModal.heading"
        :heading="editForm.heading"
        :controls="editControls"
        :buttons="editForm.buttons"
        :loading="editLoading"
        :error="editError"
        @input="input"
        @clickNo="clickEditModalNo"
        @clickYes="clickEditModalYes"
      />
    </ModalAnyContent>

    <div class="twpx-dc-question-discussion__grid">
      <div class="twpx-dc-question-discussion__comments" v-if="comments.length">
        <h3>{{ lang.heading }}</h3>
        <CommentItem v-for="comment in comments" :comment="comment" @clickEdit="clickEdit" @clickDelete="clickDelete" />
      </div>
      <div class="twpx-dc-question-discussion__form" v-if="form.heading && controls.length && form.button">
        <form action="">
          <div class="twpx-dc-question-discussion__form-wrapper" v-if="!loading">

            <h3>{{ form.heading }}</h3>
            <ControlChoice v-for="control in controls" :key="control.id" :control="control" @input="input"></ControlChoice>
            <ButtonComponent :text="form.button" :props="buttonProps" @clickButton="clickButton" />

          </div>
        </form>
      </div>
    </div>
  </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'id']),
    ...mapState(formStore, [
      'loading',
      'error',
      'comments',
      'form',
      'deleteModalStateWatcher',
      'activeCommentId'
    ]),
    ...mapState(editFormStore, [
      'editLoading',
      'editError',
      'editForm',
      'editModalStateWatcher'
    ]),
    ...mapState(controlsStore, [
      'controls',
      'editControls'
    ]),
    buttonProps() {
      const result = new Set();
      result.add('wide');
      result.add('secondary');
      result.add('large');

      if (typeof this.controls === 'object' && this.controls.forEach) {
        this.controls.forEach(c => {
          if (c.required && !c.value) {
            result.add('disabled');
          }
        })
      }
      return [...result];
    }
  },
  methods: {
    ...mapActions(formStore, [
      'runGetComments',
      'runGetForm',
      'runSendForm',
      'runGetEditForm',
      'runSendEditForm',
      'runDeleteComment',
      'changeDeleteModalStateWatcher',
      'changeComments',
      'changeForm',
      'changeEditForm',
      'changeLoading',
      'changeError',
      'changeActiveCommentId'
    ]),
    ...mapActions(editFormStore, [
      'runGetEditForm',
      'runSendEditForm',
      'changeEditModalStateWatcher',
      'changeEditForm',
      'changeEditLoading',
      'changeEditError',
    ]),
    ...mapActions(controlsStore, [
        'changeControls',
        'changeEditControls',
        'changeControlValue',
        'runHints',
        'setHints'
    ]),
    clickEditModalNo() {
      this.changeEditModalStateWatcher();
      this.changeEditLoading(false);
      this.changeEditError('');
    },
    clickEditModalYes() {
      this.runSendEditForm()
        .then(
          (response) => {
            this.changeEditLoading(false);
            this.changeEditError('');
            this.changeEditModalStateWatcher();
            return this.runGetComments();
          },
          (response) => {
            this.changeEditLoading(false);
            this.changeEditError(response.errors[0].message);
          }
        )
        .then(
          (response) => {
            this.changeLoading(false);
            this.changeError('');
            this.changeComments(response.data.comments);
          },
          (response) => {
            this.changeLoading(false);
            this.changeError(response.errors[0].message);
          }
        );
    },
    clickDeleteModalNo() {
      this.changeDeleteModalStateWatcher();
    },
    clickDeleteModalYes() {
      this.runDeleteComment(this.activeCommentId)
        .then(
          (response) => {
            return this.runGetComments();
          },
          (response) => {
            this.changeLoading(false);
            this.changeError(response.errors[0].message);
          }
        )
        .then(
          (response) => {
            this.changeLoading(false);
            this.changeError('');
            this.changeComments(response.data.comments);
          },
          (response) => {
            this.changeLoading(false);
            this.changeError(response.errors[0].message);
          }
        );
    },
    clickEdit(commentId) {
      this.runGetEditForm(commentId)
        .then(
          (response) => {
            this.changeEditLoading(false);
            this.changeEditError('');
            this.changeEditForm(response.data);
            this.changeEditControls(response.data.controls);

          },
          (response) => {
            this.changeEditLoading(false);
            this.changeEditError(response.errors[0].message);
          });
      this.changeEditModalStateWatcher();
    },
    clickDelete(commentId) {
      this.changeActiveCommentId(commentId);
      this.changeDeleteModalStateWatcher();
    },
    input(args) {
      this.changeControlValue(args);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    clickButton() {
      formStore().runSendForm()
        .then(
          (response) => {
            this.changeLoading(false);
            this.changeError('');
            window.location.href = response.data.redirect;
          },
          (response) => {
            this.changeLoading(false);
            this.changeError(response.errors[0].message);
          });
    }
  },
  mounted() {
    this.runGetComments()
      .then(
        (response) => {
          this.changeLoading(false);
          this.changeError('');
          this.changeComments(response.data.comments);
        },
        (response) => {
          this.changeLoading(false);
          this.changeError(response.errors[0].message);
        });

    
    this.runGetForm()
      .then(
        (response) => {
          this.changeLoading(false);
          this.changeError('');
          this.changeForm(response.data);
          this.changeControls(response.data.controls);
        },
        (response) => {
          this.changeLoading(false);
          this.changeError(response.errors[0].message);
        });
  },
};
