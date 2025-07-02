import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const formStore = defineStore('form', {
  state: () => ({
    loading: false,
    error: '',
    docs: [],
    formControl: {
      "property": "file",
      "id": "id11",
      "name": "EVIDENTIAL_SUPPORT",
      "label": "Файл доказательств",
      "value": "",
      "file": "",
      "required": true,
      "disabled": false,
      "accept": [],
      "image": true,
      "maxsize": 10000000
    },
    modal: {
      text: '',
      stateWatcher: true,
    },
    activeDoc: {}
  }),
  actions: {
    setUploadFileExt() {
      this.formControl.accept = dataStore().uploadFileExt || [];
    },
    clearFormControl() {
      this.formControl.clearWatcher = !this.formControl.clearWatcher;
    },
    changeControlValue({ control, value, file }) {
      switch (control.property) {
        case 'file':
          this.changeFileValue({ control, value, file });
          break;
      }
    },
    changeFileValue({ control, value, file }) {
      control.file = file;
      control.value = value;
    },
    changeModalStateWatcher() {
      this.modal.stateWatcher = !this.modal.stateWatcher;
    },
    changeModalText(doc){
      this.modal.text = `${dataStore().lang.modalText} <b>${ doc.name }</b>`
    },
    changeDocs(docs) {
      this.docs = docs;
    },
    changeError(error) {
      this.error = error;
    },
    changeActiveDoc(doc) {
      this.activeDoc = doc;
    },
    runGetFiles() {
      this.loading = true;
      const d = dataStore();

      BX.ajax.runComponentAction(d.actions.getFiles[0], d.actions.getFiles[1], {
          mode: 'class',
          data: {
            signedParameters: d.signedParameters,
            sessid: d.sessid,
            id: d.id,
            type: d.type,
          },
        })
        .then((response) => {
          this.changeError('');
          this.loading = false;
          this.changeDocs(response.data)
        }, (response) => {
          this.loading = false;
          if (response && response.errors.length) {
            this.changeError(response.errors[0].message)
          }
        });
    },
    runRemoveFile() {
      this.loading = true;
      const d = dataStore();

      BX.ajax.runComponentAction(d.actions.removeFile[0], d.actions.removeFile[1], {
          mode: 'class',
          data: {
            signedParameters: d.signedParameters,
            sessid: d.sessid,
            id: this.activeDoc.id,
          },
        })
        .then(() => {
          this.changeError('');
          this.runGetFiles();
        }, (response) => {
          this.loading = false;
          if (response && response.errors.length) {
            this.changeError(response.errors[0].message)
          }
        });
    },
    runUploadFile() {
      this.loading = true;
      const d = dataStore();

      const formData = new FormData();

      formData.append('id', d.id);
      formData.append('type', d.type);
      formData.append('sessid', d.sessid);
      formData.append('signedParameters', d.signedParameters);
      formData.append('docs', this.formControl.file);

      BX.ajax.runComponentAction(d.actions.uploadFile[0], d.actions.uploadFile[1], {
          mode: 'class',
          data: formData,
        })
        .then(() => {
          this.changeError('');
          this.runGetFiles();
        }, (response) => {
          this.loading = false;
          if (response && response.errors.length) {
            this.changeError(response.errors[0].message)
          }
        });
    }
  },
});
