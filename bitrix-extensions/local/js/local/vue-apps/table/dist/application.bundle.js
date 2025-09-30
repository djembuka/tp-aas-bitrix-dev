/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_tableComponent,local_vueComponents_stickyScroll,local_vueComponents_errorMessage,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: ''
      };
    }
  });

  var tableStore = ui_vue3_pinia.defineStore('table', {
    state: function state() {
      return {
        loadingCols: false,
        loadingItems: false,
        columnsNames: [],
        items: {},
        actions: {},
        errorTable: ''
      };
    },
    getters: {
      loadingTable: function loadingTable() {
        return this.loadingCols || this.loadingItems;
      }
    },
    actions: {
      hideErrorTable: function hideErrorTable() {
        this.errorTable = '';
      },
      showError: function showError(_ref) {
        var error = _ref.error,
          method = _ref.method;
        if (typeof error === 'boolean') {
          this.errorTable = error;
        } else if (babelHelpers["typeof"](error) === 'object') {
          if (error.errors && babelHelpers["typeof"](error.errors) === 'object' && error.errors[0] && error.errors[0].code !== undefined) {
            if (error.errors[0].code === 'NETWORK_ERROR') {
              if (error.data && error.data.ajaxRejectData) {
                if (error.data.ajaxRejectData.data) {
                  this.errorTable = "".concat(window.BX.message('ERROR_SUPPORT'), "\n                    <br>\n                    <br>\n                    \u041C\u0435\u0442\u043E\u0434: ").concat(method, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ").concat(error.data.ajaxRejectData.data, ". \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(window.BX.message('ERROR_' + error.data.ajaxRejectData.data) || window.BX.message('ERROR_SERVER'), ".");
                }
              } else if (window.BX.message) {
                this.errorTable = "".concat(window.BX.message('ERROR_SUPPORT'), "\n                <br>\n                <br>\n                \u041C\u0435\u0442\u043E\u0434: ").concat(method, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: NETWORK_ERROR. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(window.BX.message('ERROR_OFFLINE'), ".");
              }
            } else {
              this.errorTable = "".concat(window.BX.message('ERROR_SUPPORT'), "\n              <br>\n              <br>\n              \u041C\u0435\u0442\u043E\u0434: ").concat(method, ".").concat(error.errors[0].code ? ' Код ошибки: ' + error.errors[0].code + '.' : '', " ").concat(error.errors[0].message ? ' Описание: ' + error.errors[0].message + '.' : '');
            }
          }
        }
      },
      runColumnsNames: function runColumnsNames(data, callback) {
        var _this = this;
        this.loadingCols = true;
        var a = window.BX.ajax.runComponentAction(this.actions.columnsNames.component, this.actions.columnsNames.method, data);
        var state = this;
        a.then(function (result) {
          _this.loadingCols = false;
          resultFn(state, result);
        }, function (error) {
          _this.loadingCols = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['table']) {
            resultFn(state, window.twinpx.vue['table'][_this.actions.columnsNames]);
          } else {
            _this.showError({
              error: error,
              method: 'columnsNames'
            });
          }
        });
        function resultFn(state, data) {
          state.columnsNames = data;
          if (callback) {
            callback();
          }
        }
      },
      runItems: function runItems(data, callback) {
        var _this2 = this;
        this.loadingItems = true;
        var a = window.BX.ajax.runComponentAction(this.actions.items.component, this.actions.items.method, data);
        var state = this;
        a.then(function (result) {
          _this2.loadingItems = false;
          resultFn(state, result);
        }, function (error) {
          _this2.loadingItems = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['table']) {
            resultFn(state, window.twinpx.vue['table'][_this2.actions.items](data.startIndex));
          } else {
            _this2.showError({
              error: error,
              method: 'items'
            });
          }
        });
        function resultFn(state, data) {
          state.items = data;
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
      TableComponent: local_vueComponents_tableComponent.TableComponent,
      StickyScroll: local_vueComponents_stickyScroll.StickyScroll,
      ErrorMessage: local_vueComponents_errorMessage.ErrorMessage
    },
    // language=Vue

    template: "\n    <div>\n      <ErrorMessage :error=\"error\" @hideError=\"hideError\" />\n      <StickyScroll>\n        <TableComponent :cols=\"tableCols\" :columnsNames=\"columnsNames\" :items=\"items\" :loading=\"loadingTable\" :maxCountPerRequest=\"maxCountPerRequest\" @clickTh=\"clickTh\" @clickPage=\"clickPage\" />\n      </StickyScroll> \n    </div>\n\t",
    computed: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['sessionid', 'signedParameters'])), ui_vue3_pinia.mapState(tableStore, ['loadingTable', 'columnsNames', 'items', 'tableCols', 'maxCountPerRequest', 'errorTable'])), {}, {
      pagesNum: function pagesNum() {
        return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
      },
      pageActive: function pageActive() {
        return this.items.startIndex / this.maxCountPerRequest + 1;
      },
      error: function error() {
        return this.errorTable;
      }
    }),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(tableStore, ['hideErrorTable', 'runColumnsNames', 'runItems', 'runDefaultSort', 'runSetDefaultSort'])), {}, {
      hideError: function hideError() {
        this.hideErrorTable();
      },
      clickPage: function clickPage(_ref) {
        var count = _ref.count;
        this.runItems({
          mode: 'class',
          data: {
            signedParameters: this.signedParameters,
            sessionid: this.sessionid,
            startIndex: (count - 1) * this.maxCountPerRequest,
            maxCountPerRequest: this.maxCountPerRequest
          }
        });
      }
    }),
    mounted: function mounted() {
      this.runColumnsNames({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessionid: this.sessionid
        }
      });
      this.runItems({
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          sessionid: this.sessionid,
          startIndex: this.items.startIndex || 0,
          maxCountPerRequest: this.maxCountPerRequest
        }
      });
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var Table = /*#__PURE__*/function () {
    function Table(rootNode, options) {
      babelHelpers.classCallCheck(this, Table);
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
    babelHelpers.createClass(Table, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessionid = self.options.SESSION_ID || '';
            dataStore().signedParameters = self.options.SIGNED_PARAMETERS || '';
            tableStore().tableCols = self.options.TABLE_COLS || [];
            tableStore().maxCountPerRequest = self.options.maxCountPerRequest || 100;
            tableStore().actions = {
              columnsNames: self.options.columnsNames || '',
              items: self.options.items || '',
              defaultSort: self.options.defaultSort || '',
              setDefaultSort: self.options.setDefaultSort || ''
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
    return Table;
  }();

  exports.Table = Table;

}((this.BX = this.BX || {}),BX,BX.AAS,BX.AAS,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
