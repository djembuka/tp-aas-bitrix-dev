/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,local_vueComponents_docComponent,local_vueComponents_modalYesNo,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
        id: '',
        type: '',
        actions: {},
        lang: {}
      };
    }
  });

  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
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
          stateWatcher: true
        },
        activeDoc: {}
      };
    },
    actions: {
      setUploadFileExt: function setUploadFileExt() {
        this.formControl.accept = dataStore().uploadFileExt || [];
      },
      clearFormControl: function clearFormControl() {
        this.formControl.clearWatcher = !this.formControl.clearWatcher;
      },
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value,
          file = _ref.file;
        switch (control.property) {
          case 'file':
            this.changeFileValue({
              control: control,
              value: value,
              file: file
            });
            break;
        }
      },
      changeFileValue: function changeFileValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value,
          file = _ref2.file;
        control.file = file;
        control.value = value;
      },
      changeModalStateWatcher: function changeModalStateWatcher() {
        this.modal.stateWatcher = !this.modal.stateWatcher;
      },
      changeModalText: function changeModalText(doc) {
        this.modal.text = "".concat(dataStore().lang.modalText, " <b>").concat(doc.name, "</b>");
      },
      changeDocs: function changeDocs(docs) {
        this.docs = docs;
      },
      changeError: function changeError(error) {
        this.error = error;
      },
      changeActiveDoc: function changeActiveDoc(doc) {
        this.activeDoc = doc;
      },
      runGetFiles: function runGetFiles() {
        var _this = this;
        this.loading = true;
        var d = dataStore();
        BX.ajax.runComponentAction(d.actions.getFiles[0], d.actions.getFiles[1], {
          mode: 'class',
          data: {
            signedParameters: d.signedParameters,
            sessid: d.sessid,
            id: d.id,
            type: d.type
          }
        }).then(function (response) {
          _this.changeError('');
          _this.loading = false;
          _this.changeDocs(response.data);
        }, function (response) {
          _this.loading = false;
          if (response && response.errors.length) {
            _this.changeError(response.errors[0].message);
          }
        });
      },
      runRemoveFile: function runRemoveFile() {
        var _this2 = this;
        this.loading = true;
        var d = dataStore();
        BX.ajax.runComponentAction(d.actions.removeFile[0], d.actions.removeFile[1], {
          mode: 'class',
          data: {
            signedParameters: d.signedParameters,
            sessid: d.sessid,
            id: this.activeDoc.id
          }
        }).then(function () {
          _this2.changeError('');
          _this2.runGetFiles();
        }, function (response) {
          _this2.loading = false;
          if (response && response.errors.length) {
            _this2.changeError(response.errors[0].message);
          }
        });
      },
      runUploadFile: function runUploadFile() {
        var _this3 = this;
        this.loading = true;
        var d = dataStore();
        var formData = new FormData();
        formData.append('id', d.id);
        formData.append('type', d.type);
        formData.append('sessid', d.sessid);
        formData.append('signedParameters', d.signedParameters);
        formData.append('docs', this.formControl.file);
        BX.ajax.runComponentAction(d.actions.uploadFile[0], d.actions.uploadFile[1], {
          mode: 'class',
          data: formData
        }).then(function () {
          _this3.changeError('');
          _this3.runGetFiles();
        }, function (response) {
          _this3.loading = false;
          if (response && response.errors.length) {
            _this3.changeError(response.errors[0].message);
          }
        });
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      DocComponent: local_vueComponents_docComponent.DocComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent
    },
    // language=Vue
    template: "\n    <LoaderCircle :show=\"loading\" />\n\n    <ModalYesNo\n      :heading=\"lang.modalHeading\"\n      :text=\"modal.text\"\n      :yes=\"lang.modalYes\"\n      :no=\"lang.modalNo\"\n      :stateWatcher=\"modal.stateWatcher\"\n      :buttons=\"{\n        yes: {\n          props: ['danger', 'large']\n        },\n        no: {\n          props: ['gray-color', 'large']\n        }\n      }\"\n      @clickYes=\"clickYes\"\n      @clickNo=\"clickNo\"\n    />\n\n    <div class=\"vue-fadd\">\n\n      <MessageComponent v-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n      <div class=\"vue-fadd-docs-block\" v-if=\"docs && docs.length\">\n        <h3 v-if=\"lang.docsHeading\">{{ lang.docsHeading }}</h3>\n        <div class=\"vue-fadd-docs\">\n          <DocComponent v-for=\"doc in docs\" :doc=\"doc\" :key=\"doc.id\" @clickDelete=\"clickDelete(doc)\" />\n        </div>\n      </div>\n\n      <h3 v-else-if=\"lang.noDocsHeading\">{{ lang.noDocsHeading }}</h3>\n\n      <div class=\"vue-fadd-add-form\" v-f=\"uploadForm\">\n        <div class=\"vue-fadd-add-form__h4\" v-if=\"lang.formHeading\">{{ lang.formHeading }}</div>\n        <div v-html=\"lang.formText\"></div>\n        <div class=\"vue-fadd-control\">\n          <ControlChoice :control=\"formControl\" @input=\"input\" />\n          <div class=\"vue-fadd-note\" v-html=\"lang.formNote\"></div>\n        </div>\n        <ButtonComponent :text=\"lang.formButton\" :props=\"formButtonProps\" @clickButton=\"submitForm\" />\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'uploadForm', 'uploadFileExt'])), ui_vue3_pinia.mapState(formStore, ['loading', 'docs', 'formControl', 'modal', 'changeControlValue', 'error'])), {}, {
      formButtonProps: function formButtonProps() {
        return this.formControl.file ? ['secondary', 'large'] : ['secondary', 'large', 'disabled'];
      }
    }),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(formStore, ['clearFormControl', 'runGetFiles', 'runRemoveFile', 'runUploadFile', 'changeModalStateWatcher', 'changeModalText', 'changeActiveDoc'])), {}, {
      input: function input(args) {
        this.changeControlValue(args);
      },
      clickDelete: function clickDelete(doc) {
        // show modal
        this.changeModalStateWatcher();
        this.changeModalText(doc);
        this.changeActiveDoc(doc);
      },
      clickYes: function clickYes() {
        this.runRemoveFile();
        // hide modal
        this.changeModalStateWatcher();
      },
      clickNo: function clickNo() {
        // hide modal
        this.changeModalStateWatcher();
      },
      submitForm: function submitForm() {
        this.runUploadFile();
        this.clearFormControl();
      }
    }),
    mounted: function mounted() {}
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FormAddDeleteDocs = /*#__PURE__*/function () {
    function FormAddDeleteDocs(rootNode, options) {
      babelHelpers.classCallCheck(this, FormAddDeleteDocs);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0
      });
      babelHelpers.classPrivateFieldSet(this, _store, ui_vue3_pinia.createPinia());
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(FormAddDeleteDocs, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Form to add and delete documents',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().lang = self.options.lang || '';
            dataStore().id = self.options.id || '';
            dataStore().type = self.options.type || '';
            dataStore().actions = self.options.actions || {};
            dataStore().uploadForm = self.options.uploadForm || false;
            dataStore().uploadFileExt = self.options.uploadFileExt || [];
            formStore().runGetFiles();
            formStore().setUploadFileExt();
          }
        }));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
        babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
      }
    }, {
      key: "initStorageBeforeStartApplication",
      value: function initStorageBeforeStartApplication() {
        ui_vue3_pinia.setActivePinia(babelHelpers.classPrivateFieldGet(this, _store));
      }
    }, {
      key: "getFormStore",
      value: function getFormStore() {
        return formStore;
      }
    }]);
    return FormAddDeleteDocs;
  }();

  exports.FormAddDeleteDocs = FormAddDeleteDocs;

}((this.BX = this.BX || {}),BX,BX.Controls,BX.AAS,BX.Modals,BX.AAS,BX.Loaders,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
