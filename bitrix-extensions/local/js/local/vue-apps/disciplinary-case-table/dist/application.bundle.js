/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_tableComponent,local_vueComponents_stickyScroll,local_vueComponents_messageComponent,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var Loader = {
    data: function data() {
      return {};
    },
    // language=Vue
    template: "\n    <div class=\"vue-table-loader\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  "
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessid: '',
        signedParameters: '',
        data: {},
        actions: {},
        lang: {}
      };
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      },
      cols: function cols() {
        if (!this.columnsNames.length) {
          return [];
        }
        var length = this.columnsNames.length;
        var value = "".concat(Math.floor(100 / length), "%");
        var arr = Array(length - 1).fill(value);
        arr.push('150px');
        return arr;
      }
    },
    actions: {
      clickButton: function clickButton(_ref) {
        var itemId = _ref.itemId,
          code = _ref.code;
        console.log(itemId, code);
      },
      hideErrorTable: function hideErrorTable() {
        this.errorTable = '';
      },
      showError: function showError(_ref2) {
        var error = _ref2.error,
          method = _ref2.method;
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
      loadTable: function loadTable() {
        this.runColumnsNames(_objectSpread({}, dataStore().data));
        this.runItems(_objectSpread({}, dataStore().data));
      },
      runColumnsNames: function runColumnsNames(data) {
        var _this = this;
        this.loadingCols = true;
        var d = dataStore();
        setTimeout(function () {
          _this.loadingCols = false;
          // this.showError({ error: {errors: [{code: 500, message: 'Server error'}]}, method: 'columnsNames' });
          _this.columnsNames = [{
            id: 1,
            name: 'Дата создания',
            type: 'date'
          }, {
            id: 2,
            name: 'Категория нарушений',
            type: 'cat'
          }, {
            id: 3,
            name: 'Название нарушения',
            type: 'name'
          }, {
            id: 4,
            name: 'Источник',
            type: 'src'
          }];
          _this.columnsNames.push({
            id: Math.floor(Math.random() * 100),
            name: '',
            type: 'buttons'
          });
        }, 1000);
        return;
        var a = window.BX.ajax.runComponentAction(d.actions.columnsNames[0], d.actions.columnsNames[1], {
          mode: 'class',
          data: data
        });
        a.then(function (result) {
          _this.loadingCols = false;
          if (result.data) {
            _this.columnsNames = result.data;
            _this.columnsNames.push({
              id: Math.floor(Math.random() * 100),
              name: '',
              type: 'buttons'
            });
          }
        }, function (error) {
          _this.loadingCols = false;
          _this.showError({
            error: error,
            method: 'columnsNames'
          });
        });
      },
      runItems: function runItems(data) {
        var _this2 = this;
        this.loadingItems = true;
        setTimeout(function () {
          var _this2$items, _this2$items$items;
          _this2.loadingItems = false;
          _this2.items = {
            resultCount: 2,
            startIndex: 0,
            excelLink: false,
            items: [{
              id: 1,
              cell: [{
                id: 2,
                type: 'date',
                value: '14.07.2025'
              }, {
                id: 3,
                type: 'cat',
                value: 'Невнесение (несвоевременное) внесение сведений в реестр'
              }, {
                id: 4,
                type: 'name',
                value: 'Нарушение ч. 8 ст. 19 Федерального закона № 307-ФЗ  от 30.12.2008 г. «Об аудиторской деятельности»....'
              }, {
                id: 5,
                type: 'src',
                value: '<a href="/">831Ж040725</a>'
              }]
            }, {
              id: 6,
              cell: [{
                id: 7,
                type: 'date',
                value: '14.07.2025'
              }, {
                id: 8,
                type: 'cat',
                value: 'Несоблюдение требования к доле в уставном капитале'
              }, {
                id: 9,
                type: 'name',
                value: 'Нарушение п.3 ч.2 ст.18 № 307-ФЗ от 30.12.2008 г. «Об аудиторской деятельности»...'
              }, {
                id: 10,
                type: 'src',
                value: '<a href="/">831Ж040725</a>'
              }]
            }]
          };
          (_this2$items = _this2.items) === null || _this2$items === void 0 ? void 0 : (_this2$items$items = _this2$items.items) === null || _this2$items$items === void 0 ? void 0 : _this2$items$items.forEach(function (i) {
            i.buttons = [{
              code: 'edit',
              text: 'Edit',
              props: ['icon', 'edit', 'medium']
            }, {
              code: 'delete',
              text: 'Delete',
              props: ['icon', 'delete', 'medium']
            }];
          });
        }, 1000);
        return;
        var a = window.BX.ajax.runComponentAction(d.actions.items[0], d.actions.items[1], {
          mode: 'class',
          data: data
        });
        a.then(function (result) {
          _this2.loadingItems = false;
          if (result.data) {
            var _this2$items2, _this2$items2$items;
            _this2.items = result.data;
            (_this2$items2 = _this2.items) === null || _this2$items2 === void 0 ? void 0 : (_this2$items2$items = _this2$items2.items) === null || _this2$items2$items === void 0 ? void 0 : _this2$items2$items.forEach(function (i) {
              var _i$cell;
              i === null || i === void 0 ? void 0 : (_i$cell = i.cell) === null || _i$cell === void 0 ? void 0 : _i$cell.push({
                id: Math.floor(Math.random() * 1000),
                type: 'buttons',
                value: '<b>buttons</b>'
              });
            });
          }
        }, function (error) {
          _this2.loadingItems = false;
          _this2.showError({
            error: error,
            method: 'items'
          });
        });
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      Loader: Loader,
      TableComponent: local_vueComponents_tableComponent.TableComponent,
      StickyScroll: local_vueComponents_stickyScroll.StickyScroll,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue

    template: "\n    <div>\n      <Loader v-if=\"loadingTable\" />\n\n      <div v-else class=\"disciplinary-case-table-wrapper\">\n\n        <MessageComponent v-if=\"errorTable\" type=\"error\" size=\"big\" :message=\"errorTable\" />\n\n        <StickyScroll>\n          <TableComponent :columnsNames=\"columnsNames\" :cols=\"cols\" :items=\"items\" @clickButton=\"clickButton\" />\n        </StickyScroll>\n\n        <ButtonComponent :text=\"lang.addButton\" :props=\"['success', 'small']\" @clickButton=\"clickAddButton\" />\n\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang'])), ui_vue3_pinia.mapState(tableStore, ['cols', 'loadingTable', 'columnsNames', 'items', 'errorTable', 'clickButton'])), {}, {
      error: function error() {
        return this.errorTable;
      }
    }),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(tableStore, ['loadTable'])), {}, {
      clickAddButton: function clickAddButton() {
        console.log('click add button');
      }
    }),
    mounted: function mounted() {
      this.loadTable();
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var DisciplinaryCaseTable = /*#__PURE__*/function () {
    function DisciplinaryCaseTable(rootNode, options) {
      babelHelpers.classCallCheck(this, DisciplinaryCaseTable);
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
    babelHelpers.createClass(DisciplinaryCaseTable, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Disciplinary Case Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().data = self.options.data || {};
            dataStore().actions = self.options.actions || {};
            dataStore().lang = self.options.lang || {};
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
    return DisciplinaryCaseTable;
  }();

  exports.DisciplinaryCaseTable = DisciplinaryCaseTable;

}((this.BX = this.BX || {}),BX.Vue3,BX.AAS,BX.AAS,BX.AAS,BX.AAS,BX.Vue3.Pinia));
//# sourceMappingURL=application.bundle.js.map
