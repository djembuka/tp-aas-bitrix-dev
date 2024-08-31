/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_filter,local_vueComponents_table,local_vueComponents_pagination,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        userid: ''
      };
    }
  });

  var tableStore = ui_vue3_pinia.defineStore('table', {
    state: function state() {
      return {
        loading: false,
        columnsNames: [],
        items: {},
        sort: {},
        actions: {}
      };
    },
    actions: {
      runColumnsNames: function runColumnsNames(data, callback) {
        var _this = this;
        this.loading = true;
        var a = window.BX.ajax.runComponentAction(this.actions.columnsNames, data);
        var state = this;
        a.then(function (result) {
          _this.loading = false;
          resultFn(state, result);
        }, function (error) {
          _this.loading = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].columnsNames);
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
        this.loading = true;
        var a = window.BX.ajax.runComponentAction(this.actions.items, data);
        var state = this;
        a.then(function (result) {
          _this2.loading = false;
          resultFn(state, result);
        }, function (error) {
          _this2.loading = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].items(data.startIndex));
          }
        });
        function resultFn(state, data) {
          state.items = data;
          if (callback) {
            callback();
          }
        }
      },
      runDefaultSort: function runDefaultSort(data, callback) {
        var a = window.BX.ajax.runComponentAction(this.actions.defaultSort, data);
        var state = this;
        a.then(function (result) {
          resultFn(state, result);
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].defaultSort);
          }
        });
        function resultFn(state, data) {
          state.sort = data;
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultSort: function runSetDefaultSort(data, callback) {
        var a = window.BX.ajax.runComponentAction(this.actions.setDefaultSort, data);
        var state = this;
        a.then(function (result) {
          resultFn(state, result);
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].setDefaultSort);
          }
        });
        function resultFn(state, data) {
          state.sort = data;
          if (callback) {
            callback();
          }
        }
      }
    }
  });

  var filterStore = ui_vue3_pinia.defineStore('filter', {
    state: function state() {
      return {
        actions: {},
        filters: []
      };
    },
    actions: {
      changeTextControlValue: function changeTextControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      changeControlValue: function changeControlValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value,
          checked = _ref4.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
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
          // case 'date':
          //   commit('changeDateValue', { control, value });
          //   break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runFilters: function runFilters(data, callback) {
        var a = window.BX.ajax.runComponentAction(this.actions.filters, data);
        var state = this;
        a.then(function (result) {
          resultFn(state, result);
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].filters);
          }
        });
        function resultFn(state, data) {
          state.filters = data;
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
      FilterComponent: local_vueComponents_filter.FilterComponent,
      TableComponent: local_vueComponents_table.TableComponent,
      TablePagination: local_vueComponents_pagination.TablePagination
    },
    // language=Vue
    template: "\n    <div>\n      <FilterComponent :filters=\"filters\" @input=\"input\" />\n      <hr>\n      <TableComponent :cols=\"cols\" :columnsNames=\"columnsNames\" :items=\"items\" :sort=\"sort\" :maxCountPerRequest=\"maxCountPerRequest\" @clickTh=\"clickTh\" @clickPage=\"clickPage\" />\n      <hr>\n      <div class=\"vue-ft-table-bottom\">\n        <div class=\"vue-ft-table-all\" v-if=\"items.resultCount\">\u0412\u0441\u0435\u0433\u043E: {{ items.resultCount }}</div>\n        <TablePagination :pagesNum=\"pagesNum\" :pageActive=\"pageActive\" @clickPage=\"clickPage\" />\n      </div>\n    </div>\n\t",
    computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['sessionid', 'userid'])), ui_vue3_pinia.mapState(tableStore, ['loading', 'columnsNames', 'items', 'sort', 'cols', 'maxCountPerRequest'])), ui_vue3_pinia.mapState(filterStore, ['filters'])), {}, {
      pagesNum: function pagesNum() {
        return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
      },
      pageActive: function pageActive() {
        return this.items.startIndex / this.maxCountPerRequest + 1;
      }
    }),
    methods: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(tableStore, ['runColumnsNames', 'runItems', 'runDefaultSort', 'runSetDefaultSort'])), ui_vue3_pinia.mapActions(filterStore, ['runFilters', 'changeControlValue'])), {}, {
      clickTh: function clickTh(_ref) {
        var _this = this;
        var column = _ref.column;
        var sortType = this.sort.columnSort === column.id && this.sort.sortType === 0 ? 1 : 0;
        this.runSetDefaultSort({
          userid: this.userid,
          sessionid: this.sessionid,
          columnSort: column.id,
          sortType: sortType
        }, function () {
          _this.runItems({
            userid: _this.userid,
            sessionid: _this.sessionid,
            startIndex: _this.items.startIndex || 0,
            maxCountPerRequest: _this.maxCountPerRequest,
            filters: [],
            columnSort: 1,
            sortType: 'asc'
          });
          _this.runDefaultSort({
            userid: _this.userid,
            sessionid: _this.sessionid
          });
        });
      },
      input: function input(_ref2) {
        var control = _ref2.control,
          value = _ref2.value,
          checked = _ref2.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
        this.runItems({
          userid: this.userid,
          sessionid: this.sessionid,
          startIndex: this.items.startIndex || 0,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType
        });
      },
      clickPage: function clickPage(_ref3) {
        var count = _ref3.count;
        this.runItems({
          userid: this.userid,
          sessionid: this.sessionid,
          startIndex: (count - 1) * this.maxCountPerRequest,
          maxCountPerRequest: this.maxCountPerRequest,
          filters: this.filters,
          columnSort: this.sort.columnSort,
          sortType: this.sort.sortType
        });
      }
    }),
    mounted: function mounted() {
      var _this2 = this;
      this.runColumnsNames({
        userid: this.userid,
        sessionid: this.sessionid
      });
      this.runDefaultSort({
        userid: this.userid,
        sessionid: this.sessionid
      }, function () {
        _this2.runItems({
          userid: _this2.userid,
          sessionid: _this2.sessionid,
          startIndex: _this2.items.startIndex || 0,
          maxCountPerRequest: _this2.maxCountPerRequest,
          filters: _this2.filters,
          columnSort: _this2.sort.columnSort,
          sortType: _this2.sort.sortType
        });
      });
      this.runFilters({
        userid: this.userid,
        sessionid: this.sessionid
      });
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FilterTable = /*#__PURE__*/function () {
    function FilterTable(rootNode, options) {
      babelHelpers.classCallCheck(this, FilterTable);
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
    babelHelpers.createClass(FilterTable, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Filter Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessionid = self.options.SESSION_ID;
            dataStore().userid = self.options.USER_ID;
            tableStore().cols = self.options.COLS;
            tableStore().maxCountPerRequest = self.options.maxCountPerRequest;
            tableStore().actions = {
              columnsNames: self.options.columnsNames,
              items: self.options.items,
              defaultSort: self.options.defaultSort,
              setDefaultSort: self.options.setDefaultSort
            };
            filterStore().actions = {
              filters: self.options.filters
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
    return FilterTable;
  }();

  exports.FilterTable = FilterTable;

}((this.BX = this.BX || {}),BX.Vue3,BX.AAS,BX.AAS,BX.AAS,BX.Vue3.Pinia));//# sourceMappingURL=application.bundle.js.map
