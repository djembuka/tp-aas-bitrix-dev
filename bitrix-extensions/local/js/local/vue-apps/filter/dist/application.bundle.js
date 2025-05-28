/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_filterComponent,local_vueComponents_errorMessage,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: ''
      };
    }
  });

  var filterStore = ui_vue3_pinia.defineStore('filter', {
    state: function state() {
      return {
        loadingFilter: false,
        actions: {},
        filters: [],
        errorFilter: ''
      };
    },
    actions: {
      hideErrorFilter: function hideErrorFilter() {
        this.errorFilter = '';
      },
      showError: function showError(_ref) {
        var error = _ref.error,
          method = _ref.method;
        if (typeof error === 'boolean') {
          this.errorFilter = error;
        } else if (babelHelpers["typeof"](error) === 'object') {
          if (error.errors && babelHelpers["typeof"](error.errors) === 'object' && error.errors[0] && error.errors[0].code !== undefined) {
            if (error.errors[0].code === 'NETWORK_ERROR') {
              if (error.data && error.data.ajaxRejectData) {
                if (error.data.ajaxRejectData.data) {
                  this.errorFilter = "".concat(window.BX.message('ERROR_SUPPORT'), "\n                    <br>\n                    <br>\n                    \u041C\u0435\u0442\u043E\u0434: ").concat(method, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ").concat(error.data.ajaxRejectData.data, ". \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(window.BX.message('ERROR_' + error.data.ajaxRejectData.data) || window.BX.message('ERROR_SERVER'), ".");
                }
              } else if (window.BX.message) {
                this.errorFilter = "".concat(window.BX.message('ERROR_SUPPORT'), "\n                <br>\n                <br>\n                \u041C\u0435\u0442\u043E\u0434: ").concat(method, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: NETWORK_ERROR. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(window.BX.message('ERROR_OFFLINE'), ".");
              }
            } else {
              this.errorFilter = "".concat(window.BX.message('ERROR_SUPPORT'), "\n              <br>\n              <br>\n              \u041C\u0435\u0442\u043E\u0434: ").concat(method, ".").concat(error.errors[0].code ? ' Код ошибки: ' + error.errors[0].code + '.' : '', " ").concat(error.errors[0].message ? ' Описание: ' + error.errors[0].message + '.' : '');
            }
          }
        }
      },
      changeTextControlValue: function changeTextControlValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        control.value = value;
      },
      changeControlValue: function changeControlValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value,
          checked = _ref6.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
            this.changeTextControlValue({
              control: control,
              value: value
            });
            break;
          // case 'multiselect':
          //   commit('changeMultiselectValue', { control, value, checked });
          //   break;
          // case 'checkbox':
          //   commit('changeCheckboxValue', { control, checked });
          //   break;
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value
            });
            break;
          // case 'file':
          //   commit('changeFileValue', { control, value });
          //   break;
          case 'date':
            this.changeDateValue({
              control: control,
              value: value
            });
            break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runFilters: function runFilters(data, callback) {
        var _this = this;
        this.loadingFilter = true;
        var a = window.BX.ajax.runComponentAction(this.actions.filters.component, this.actions.filters.method, data);
        var state = this;
        a.then(function (result) {
          _this.loadingFilter = false;
          resultFn(state, result.data);
        }, function (error) {
          _this.loadingFilter = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].filters);
          } else {
            _this.showError({
              error: error,
              method: 'filters'
            });
          }
        });
        function resultFn(state, data) {
          state.filters = data;
          if (callback) {
            callback();
          }
        }
      },
      runHintsAction: function runHintsAction(_ref7, callback) {
        var _this2 = this;
        var control = _ref7.control,
          hintsAction = _ref7.hintsAction;
        control.loading = true;
        var a = window.BX.ajax.runComponentAction(hintsAction, {
          string: babelHelpers["typeof"](control.value) === 'object' ? control.value.value : control.value
        });
        a.then(function (result) {
          control.loading = false;
          resultFn(result);
        }, function (error) {
          control.loading = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(window.twinpx.vue['filter-table'].hints);
          } else {
            _this2.showError({
              error: error,
              method: hintsAction
            });
          }
        });
        function resultFn(data) {
          control.hints = data;
          if (callback) {
            callback();
          }
        }
      },
      setHints: function setHints(_ref8) {
        var control = _ref8.control,
          value = _ref8.value;
        control.hints = value;
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
      FilterComponent: local_vueComponents_filterComponent.FilterComponent,
      ErrorMessage: local_vueComponents_errorMessage.ErrorMessage
    },
    // language=Vue

    template: "\n    <div>\n      <ErrorMessage :error=\"error\" @hideError=\"hideError\" />\n      <div v-if=\"!error\">\n        <FilterComponent :cols=\"filterCols\" :filters=\"filters\" :loading=\"loadingFilter\" @input=\"input\" @hints=\"hints\" />\n      </div>\n    </div>\n\t",
    computed: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['sessid', 'signedParameters', 'userid'])), ui_vue3_pinia.mapState(filterStore, ['loadingFilter', 'filters', 'filterCols', 'errorFilter'])), {}, {
      error: function error() {
        return this.errorFilter;
      }
    }),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(filterStore, ['hideErrorFilter', 'runFilters', 'changeControlValue', 'runHintsAction', 'setHints'])), {}, {
      hideError: function hideError() {
        this.hideErrorFilter();
      },
      input: function input(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
      },
      hints: function hints(_ref2) {
        var type = _ref2.type,
          control = _ref2.control,
          action = _ref2.action,
          value = _ref2.value;
        switch (type) {
          case 'get':
            this.runHintsAction({
              control: control,
              action: action
            });
            break;
          case 'set':
            this.setHints({
              control: control,
              value: value
            });
            break;
        }
      }
    }),
    mounted: function mounted() {
      this.runFilters({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessid: this.sessid,
          userid: this.userid,
          profileid: 0
        }
      });
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var Filter = /*#__PURE__*/function () {
    function Filter(rootNode, options) {
      babelHelpers.classCallCheck(this, Filter);
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
    babelHelpers.createClass(Filter, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Filter Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().userid = self.options.userid || '';
            filterStore().filterCols = self.options.FILTER_COLS || [];
            filterStore().actions = {
              filters: self.options.filters || []
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
      key: "getTableStore",
      value: function getTableStore() {
        return tableStore;
      }
    }]);
    return Filter;
  }();

  exports.Filter = Filter;

}((this.BX = this.BX || {}),BX,BX.AAS,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
