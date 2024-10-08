/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_control,ui_vue3_pinia) {
  'use strict';

  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        loadingControls: false,
        actions: {},
        controls: []
      };
    },
    actions: {
      runControls: function runControls(data, callback) {
        var _this = this;
        this.loadingControls = true;
        var a = window.BX.ajax.runComponentAction(this.actions.controls, data);
        var state = this;
        a.then(function (result) {
          _this.loadingControls = false;
          resultFn(state, result);
        }, function (error) {
          _this.loadingControls = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['form-with-multi']) {
            resultFn(state, window.twinpx.vue['form-with-multi'].controls);
          }
        });
        function resultFn(state, data) {
          state.controls = data;
          if (callback) {
            callback();
          }
        }
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
      Control: local_vueComponents_control.Control
    },
    // language=Vue

    template: "\n    <div>\n      <pre>{{controls}}</pre>\n      <Control v-for=\"control in controls\" :key=\"control.id\" :control=\"control\" @input=\"input\" @hints=\"hints\"></Control>\n    </div>\n\t",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(formStore, ['loadingControls', 'controls'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(formStore, ['runControls'])), {}, {
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      }
    }),
    mounted: function mounted() {
      this.runControls({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid
      });
    }
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: ''
      };
    }
  });

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FormWithMulti = /*#__PURE__*/function () {
    function FormWithMulti(rootNode, options) {
      babelHelpers.classCallCheck(this, FormWithMulti);
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
    babelHelpers.createClass(FormWithMulti, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Form with multi control Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessionid = self.options.SESSION_ID || '';
            dataStore().signedParameters = self.options.SIGNED_PARAMETERS || '';
            formStore().actions = {
              controls: self.options.controls || []
            };
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
    return FormWithMulti;
  }();

  exports.FormWithMulti = FormWithMulti;

}((this.BX = this.BX || {}),BX,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map
