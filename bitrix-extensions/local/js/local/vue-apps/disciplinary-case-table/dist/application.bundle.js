/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_tableComponent,local_vueComponents_stickyScroll,local_vueComponents_messageComponent,local_vueComponents_modalYesNo,local_vueComponents_buttonComponent,ui_vue3_pinia) {
  'use strict';

  var Loader = {
    data: function data() {
      return {};
    },
    // language=Vue
    template: "\n    <div class=\"vue-table-loader\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  "
  };

  var CardComponent = {
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: ['card'],
    emits: ['clickButton'],
    template: "\n      <div class=\"dc-action-card\" :class=\"{'dc-action-card--wide': !this.card.buttons}\" :data-id=\"card.id\">\n          <div class=\"dc-action-card__content\">\n              <div class=\"dc-action-card__props\">\n                  <div class=\"dc-action-card__prop\" v-for=\"prop in card.cell\" :key=\"card.id + prop.id\">\n                      <div class=\"dc-action-card__prop-title\">{{ prop.name }}</div>\n                      <div class=\"dc-action-card__prop-value\" v-html=\"prop.value\"></div>\n                  </div>\n              </div>\n              <div class=\"dc-action-card__edit\" v-if=\"editButton\">\n                  <ButtonComponent :text=\"editButton.text\" :props=\"editButton.props\" @clickButton=\"clickEdit()\" /> \n              </div>\n          </div>\n          <div class=\"dc-action-card__button\" v-if=\"deleteButton\">\n              <ButtonComponent :text=\"deleteButton.text\" :props=\"deleteButton.props\" @clickButton=\"clickDelete()\" />\n          </div>\n      </div>\n    ",
    computed: {
      editButton: function editButton() {
        if (!this.card.buttons) return null;
        return this.card.buttons.find(function (b) {
          return b.code === 'edit';
        });
      },
      deleteButton: function deleteButton() {
        if (!this.card.buttons) return null;
        return this.card.buttons.find(function (b) {
          return b.code === 'delete';
        });
      }
    },
    methods: {
      clickEdit: function clickEdit() {
        this.$emit('clickButton', {
          itemId: this.card.id,
          code: 'edit'
        });
      },
      clickDelete: function clickDelete() {
        this.$emit('clickButton', {
          itemId: this.card.id,
          code: 'delete'
        });
      }
    }
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var tableStore = ui_vue3_pinia.defineStore('table', {
    state: function state() {
      return {
        data: {},
        ajax: {},
        view: 'table',
        lang: {},
        outerMethods: {},
        loadingCols: false,
        loadingItems: false,
        columnsNames: [],
        items: {},
        errorTable: '',
        deleteModalStateWatcher: false,
        activeItemId: null,
        showButtons: true
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
        var length = this.columnsNames.length - 1;
        var value = "".concat(Math.floor(100 / length), "%");
        var arr = Array(length).fill(value);
        arr.push('160px');
        return arr;
      }
    },
    actions: {
      getItemId: function getItemId() {
        return this.activeItemId;
      },
      changeActiveItemId: function changeActiveItemId(itemId) {
        this.activeItemId = itemId;
      },
      changeDeleteModalStateWatcher: function changeDeleteModalStateWatcher() {
        this.deleteModalStateWatcher = !this.deleteModalStateWatcher;
      },
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
      loadTable: function loadTable() {
        this.runColumnsNames();
        this.runItems();
      },
      deleteItem: function deleteItem() {
        this.runDelete();
      },
      runColumnsNames: function runColumnsNames() {
        var _this = this;
        this.loadingCols = true;
        var a = window.BX.ajax.runComponentAction(this.ajax.columnsNames[0], this.ajax.columnsNames[1], {
          mode: 'class',
          data: this.data
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
      runItems: function runItems() {
        var _this2 = this;
        this.loadingItems = true;
        window.BX.ajax.runComponentAction(this.ajax.items[0], this.ajax.items[1], {
          mode: 'class',
          data: this.data
        }).then(function (result) {
          _this2.loadingItems = false;
          if (result.data) {
            _this2.items = result.data;
            if (_this2.showButtons) {
              var _this2$items, _this2$items$items;
              (_this2$items = _this2.items) === null || _this2$items === void 0 ? void 0 : (_this2$items$items = _this2$items.items) === null || _this2$items$items === void 0 ? void 0 : _this2$items$items.forEach(function (i) {
                i.buttons = [{
                  code: 'edit',
                  text: _this2.view === 'table' ? 'Edit' : _this2.lang.editButton,
                  props: _this2.view === 'table' ? ['icon', 'edit', 'medium'] : ['serve', 'small']
                }, {
                  code: 'delete',
                  text: 'Delete',
                  props: ['icon', 'delete', 'medium']
                }];
              });
            }
          }
        }, function (error) {
          _this2.loadingItems = false;
          _this2.showError({
            error: error,
            method: 'items'
          });
        });
      },
      runDelete: function runDelete() {
        var _this3 = this;
        this.loadingItems = true;
        window.BX.ajax.runComponentAction(this.ajax.deleteItem[0], this.ajax.deleteItem[1], {
          mode: 'class',
          data: _objectSpread(_objectSpread({}, this.data), {}, {
            item_id: this.activeItemId
          })
        }).then(function (result) {
          _this3.loadingItems = false;
          _this3.loadTable();
        }, function (error) {
          _this3.loadingItems = false;
          _this3.showError({
            error: error,
            method: 'deleteItem'
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
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      ModalYesNo: local_vueComponents_modalYesNo.ModalYesNo,
      CardComponent: CardComponent
    },
    // language=Vue

    template: "\n    <div>\n      <ModalYesNo\n        :heading=\"lang.deleteModal.heading\"\n        :text=\"lang.deleteModal.text\"\n        :yes=\"lang.deleteModal.yes\"\n        :no=\"lang.deleteModal.no\"\n        :buttons=\"{\n\t\t\t\t\tyes: {\n\t\t\t\t\t  props: ['danger', 'large']\n\t\t\t\t\t},\n\t\t\t\t\tno: {\n\t\t\t\t\t  props: ['gray-color', 'large']\n\t\t\t\t\t}\n\t\t\t\t}\"\n        :stateWatcher=\"deleteModalStateWatcher\"\n        @clickYes=\"clickYes\"\n        @clickNo=\"clickNo\"\n      />\n\n      <Loader v-if=\"loadingTable\" />\n\n      <div v-else :class=\"{'disciplinary-case-table-wrapper': true, 'disciplinary-case-table-wrapper--card': view==='card'}\">\n\n        <MessageComponent v-if=\"errorTable\" type=\"error\" size=\"big\" :message=\"errorTable\" />\n\n        <div v-if=\"view==='card'\">\n          <div class=\"dc-action-cards\" v-if=\"items.items && items.items.length\">\n            <CardComponent v-for=\"card in items.items\"\n              :key=\"card.id\"\n              :card=\"card\"\n              @clickButton=\"clickButton\"\n            />\n          </div>\n        </div>\n\n        <div v-else>\n          <StickyScroll>\n            <TableComponent\n              :columnsNames=\"columnsNames\"\n              :cols=\"cols\"\n              :items=\"items\"\n              @clickButton=\"clickButton\"\n            />\n          </StickyScroll>\n        </div>\n\n        <ButtonComponent v-if=\"showButtons\" :text=\"lang.addButton\" :props=\"['success', 'small']\" @clickButton=\"clickAddButton\" />\n\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(tableStore, ['lang', 'outerMethods', 'data', 'view', 'cols', 'loadingTable', 'columnsNames', 'items', 'errorTable', 'deleteModalStateWatcher', 'showButtons'])), {}, {
      error: function error() {
        return this.errorTable;
      }
    }),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(tableStore, ['loadTable', 'deleteItem', 'changeDeleteModalStateWatcher', 'changeActiveItemId'])), {}, {
      clickButton: function clickButton(_ref) {
        var itemId = _ref.itemId,
          code = _ref.code;
        if (code === 'edit' && this.outerMethods.editForm && window[this.outerMethods.editForm[0]]) {
          window[this.outerMethods.editForm[0]][this.outerMethods.editForm[1]](_objectSpread$1(_objectSpread$1({}, this.data), {}, {
            item_id: itemId
          }));
        } else if (code === 'delete') {
          this.changeDeleteModalStateWatcher();
          this.changeActiveItemId(itemId);
        }
      },
      clickAddButton: function clickAddButton() {
        if (this.outerMethods.addForm && window[this.outerMethods.addForm[0]]) {
          window[this.outerMethods.addForm[0]][this.outerMethods.addForm[1]](_objectSpread$1({}, this.data));
        }
      },
      clickYes: function clickYes() {
        this.deleteItem();
        this.changeDeleteModalStateWatcher();
      },
      clickNo: function clickNo() {
        this.changeDeleteModalStateWatcher();
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
            var _self$options$showBut;
            tableStore().data = self.options.data || {};
            tableStore().ajax = self.options.actions || {};
            tableStore().view = self.options.view || 'table';
            tableStore().lang = self.options.lang || {};
            tableStore().outerMethods = self.options.outerMethods || {};
            tableStore().showButtons = (_self$options$showBut = self.options.showButtons) !== null && _self$options$showBut !== void 0 ? _self$options$showBut : true;
          }
        }));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
        babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
      }
    }, {
      key: "loadTable",
      value: function loadTable() {
        tableStore().loadTable();
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

}((this.BX = this.BX || {}),BX,BX.AAS,BX.AAS,BX.AAS,BX.Modals,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
