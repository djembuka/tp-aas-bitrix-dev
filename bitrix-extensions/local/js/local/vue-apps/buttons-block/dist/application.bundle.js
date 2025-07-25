/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_modalYesNo,ui_vue3_pinia) {
  'use strict';

  var buttonsBlockDataStore = ui_vue3_pinia.defineStore('buttons-block-data', {
    state: function state() {
      return {
        id: "id".concat(Math.floor(Math.random() * 1000)),
        data: {},
        lang: {},
        actions: []
      };
    }
  });

  var buttonsBlockAppStore = ui_vue3_pinia.defineStore('buttons-block-app', {
    state: function state() {
      return {
        loading: false,
        error: '',
        stateWatcher: false,
        modal: {}
      };
    },
    actions: {
      changeModal: function changeModal(modal) {
        this.modal = modal;
      },
      changeStateWatcher: function changeStateWatcher() {
        this.stateWatcher = !this.stateWatcher;
      },
      changeError: function changeError(error) {
        this.error = error;
      },
      runDelete: function runDelete(action) {
        var _this = this;
        this.error = '';
        this.loading = true;
        var d = buttonsBlockDataStore();
        BX.ajax.runComponentAction(action[0], action[1], {
          mode: 'class',
          data: d.data
        }).then(function (response) {
          _this.loading = false;
          if (response.status === 'success' && response.data.redirect) {
            _this.changeError('');
            window.location.href = response.data.redirect;
          } else {
            _this.changeError(response.errors[0].message);
          }
        }, function (response) {
          _this.loading = false;
          if (response && response.errors.length) {
            _this.changeError(response.errors[0].message);
          }
        });
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ButtonItem = {
    data: function data() {
      return {};
    },
    props: ['button'],
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue
    template: "<ButtonComponent :text=\"button.text\" :props=\"buttonProps()\" @clickButton=\"clickButton\" />",
    computed: {},
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(buttonsBlockAppStore, ['changeStateWatcher', 'changeModal', 'runDelete'])), {}, {
      buttonProps: function buttonProps() {
        var result = ['secondary', 'large'];
        switch (this.button.type) {
          case 'delete':
            result = ['icon-delete', 'danger', 'large'];
            break;
        }
        return result;
      },
      clickButton: function clickButton() {
        var _this = this;
        if (this.button.type === 'delete') {
          var clickYes = function clickYes() {
            _this.runDelete(_this.button.actions['delete']);
            _this.changeStateWatcher();
          };
          var clickNo = function clickNo() {
            _this.changeStateWatcher();
          };
          var buttons = {
            yes: {
              props: ['danger', 'large']
            },
            no: {
              props: ['gray-color', 'large']
            }
          };
          this.changeModal(_objectSpread(_objectSpread({}, this.button.modal), {}, {
            clickYes: clickYes,
            clickNo: clickNo,
            buttons: buttons
          }));
          this.changeStateWatcher();
        }
      }
    })
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ButtonItem: ButtonItem,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo
    },
    // language=Vue
    template: "\n  <div class=\"twpx-buttons-block\" :id=\"id\">\n\n    <LoaderCircle :show=\"loading\" />\n\n    <MessageComponent v-if=\"error\" type=\"error\" size=\"big\" :message=\"error\" />\n\n    <ModalYesNo\n      :heading=\"modal.heading\"\n      :text=\"modal.text\"\n      :yes=\"modal.yes\"\n      :no=\"modal.no\"\n      :buttons=\"modal.buttons\"\n      :stateWatcher=\"stateWatcher\"\n      @clickYes=\"modal.clickYes\"\n      @clickNo=\"modal.clickNo\"\n    />\n\n    <div class=\"twpx-buttons-block__wrapper\">\n\n      <h3>{{ lang.heading }}</h3>\n      <div v-html=\"lang.text\"></div>\n      <div class=\"twpx-buttons-block__buttons\">\n        <ButtonItem v-for=\"button in buttons\" :key=\"Math.floor(Math.random()*100)\" :button=\"button\" />\n      </div>\n\n    </div>\n  </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(buttonsBlockDataStore, ['lang', 'id'])), ui_vue3_pinia.mapState(buttonsBlockAppStore, ['loading', 'error', 'stateWatcher', 'modal', 'buttons'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(buttonsBlockAppStore, ['runGetForm'])), {}, {
      clickYes: function clickYes() {
        this.runSaveForm();
        this.changeStateWatcher();
      },
      clickNo: function clickNo() {
        this.changeStateWatcher();
      }
    })
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var ButtonsBlock = /*#__PURE__*/function () {
    function ButtonsBlock(rootNode, options) {
      babelHelpers.classCallCheck(this, ButtonsBlock);
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
    babelHelpers.createClass(ButtonsBlock, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'DisciplinaryCaseForm',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            buttonsBlockDataStore().data = self.options.data || {};
            buttonsBlockDataStore().lang = self.options.lang || {};
            buttonsBlockAppStore().buttons = self.options.buttons || [];
          },
          mounted: function mounted() {}
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
    return ButtonsBlock;
  }();

  exports.ButtonsBlock = ButtonsBlock;

}((this.BX = this.BX || {}),BX,BX.AAS,BX.Loaders,BX.AAS,BX.Modals,BX));
//# sourceMappingURL=application.bundle.js.map
