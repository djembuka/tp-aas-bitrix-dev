/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_filter,
  local_vueComponents_table,
  local_vueComponents_pagination,
  local_vueComponents_loaderCircle,
  local_vueComponents_errorMessage,
  ui_vue3_pinia
) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        userid: '',
      };
    },
  });

  var tableStore = ui_vue3_pinia.defineStore('table', {
    state: function state() {
      return {
        loadingCols: false,
        loadingItems: false,
        columnsNames: [],
        items: {},
        sort: {},
        actions: {},
        errorTable: '',
      };
    },
    getters: {
      loadingTable: function loadingTable() {
        return this.loadingCols || this.loadingItems;
      },
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
        } else if (babelHelpers['typeof'](error) === 'object') {
          if (
            error.errors &&
            babelHelpers['typeof'](error.errors) === 'object' &&
            error.errors[0] &&
            error.errors[0].code !== undefined
          ) {
            if (error.errors[0].code === 'NETWORK_ERROR') {
              if (error.data && error.data.ajaxRejectData) {
                if (error.data.ajaxRejectData.data) {
                  this.errorTable = ''
                    .concat(
                      window.BX.message('ERROR_SUPPORT'),
                      '\n                    <br>\n                    <br>\n                    \u041C\u0435\u0442\u043E\u0434: '
                    )
                    .concat(
                      method,
                      '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: '
                    )
                    .concat(
                      error.data.ajaxRejectData.data,
                      '. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: '
                    )
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorTable = ''
                  .concat(
                    window.BX.message('ERROR_SUPPORT'),
                    '\n                <br>\n                <br>\n                \u041C\u0435\u0442\u043E\u0434: '
                  )
                  .concat(
                    method,
                    '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: NETWORK_ERROR. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: '
                  )
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorTable = ''
                .concat(
                  window.BX.message('ERROR_SUPPORT'),
                  '\n              <br>\n              <br>\n              \u041C\u0435\u0442\u043E\u0434: '
                )
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' Код ошибки: ' + error.errors[0].code + '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' Описание: ' + error.errors[0].message + '.'
                    : ''
                );
            }
          }
        }
      },
      runColumnsNames: function runColumnsNames(data, callback) {
        var _this = this;
        this.loadingCols = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.columnsNames,
          data
        );
        var state = this;
        a.then(
          function (result) {
            _this.loadingCols = false;
            resultFn(state, result);
          },
          function (error) {
            _this.loadingCols = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(state, window.twinpx.vue['filter-table'].columnsNames);
            } else {
              _this.showError({
                error: error,
                method: 'columnsNames',
              });
            }
          }
        );
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
        var a = window.BX.ajax.runComponentAction(this.actions.items, data);
        var state = this;
        a.then(
          function (result) {
            _this2.loadingItems = false;
            resultFn(state, result);
          },
          function (error) {
            _this2.loadingItems = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(
                state,
                window.twinpx.vue['filter-table'].items(data.startIndex)
              );
            } else {
              _this2.showError({
                error: error,
                method: 'items',
              });
            }
          }
        );
        function resultFn(state, data) {
          state.items = data;
          if (callback) {
            callback();
          }
        }
      },
      runDefaultSort: function runDefaultSort(data, callback) {
        var _this3 = this;
        var a = window.BX.ajax.runComponentAction(
          this.actions.defaultSort,
          data
        );
        var state = this;
        a.then(
          function (result) {
            resultFn(state, result);
          },
          function (error) {
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(state, window.twinpx.vue['filter-table'].defaultSort);
            } else {
              _this3.showError({
                error: error,
                method: 'defaultSort',
              });
            }
          }
        );
        function resultFn(state, data) {
          state.sort = data;
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultSort: function runSetDefaultSort(data, callback) {
        var _this4 = this;
        var a = window.BX.ajax.runComponentAction(
          this.actions.setDefaultSort,
          data
        );
        var state = this;
        a.then(
          function (result) {
            resultFn(state, result);
          },
          function (error) {
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(state, window.twinpx.vue['filter-table'].setDefaultSort);
            } else {
              _this4.showError({
                error: error,
                method: 'setDefaultSort',
              });
            }
          }
        );
        function resultFn(state, data) {
          state.sort = data;
          if (callback) {
            callback();
          }
        }
      },
    },
  });

  var filterStore = ui_vue3_pinia.defineStore('filter', {
    state: function state() {
      return {
        loadingFilter: false,
        actions: {},
        filters: [],
        errorFilter: '',
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
        } else if (babelHelpers['typeof'](error) === 'object') {
          if (
            error.errors &&
            babelHelpers['typeof'](error.errors) === 'object' &&
            error.errors[0] &&
            error.errors[0].code !== undefined
          ) {
            if (error.errors[0].code === 'NETWORK_ERROR') {
              if (error.data && error.data.ajaxRejectData) {
                if (error.data.ajaxRejectData.data) {
                  this.errorFilter = ''
                    .concat(
                      window.BX.message('ERROR_SUPPORT'),
                      '\n                    <br>\n                    <br>\n                    \u041C\u0435\u0442\u043E\u0434: '
                    )
                    .concat(
                      method,
                      '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: '
                    )
                    .concat(
                      error.data.ajaxRejectData.data,
                      '. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: '
                    )
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorFilter = ''
                  .concat(
                    window.BX.message('ERROR_SUPPORT'),
                    '\n                <br>\n                <br>\n                \u041C\u0435\u0442\u043E\u0434: '
                  )
                  .concat(
                    method,
                    '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: NETWORK_ERROR. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: '
                  )
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorFilter = ''
                .concat(
                  window.BX.message('ERROR_SUPPORT'),
                  '\n              <br>\n              <br>\n              \u041C\u0435\u0442\u043E\u0434: '
                )
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' Код ошибки: ' + error.errors[0].code + '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' Описание: ' + error.errors[0].message + '.'
                    : ''
                );
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
              value: value,
            });
            break;
          // case 'multiselect':
          //   commit('changeMultiselectValue', { control, value, checked });
          //   break;
          // case 'checkbox':
          //   commit('changeCheckboxValue', { control, checked });
          //   break;
          case 'select':
            this[
              'changeSelect'
                .concat(control.type.substring(0, 1).toUpperCase())
                .concat(control.type.substring(1).toLowerCase(), 'Value')
            ]({
              control: control,
              value: value,
            });
            break;
          // case 'file':
          //   commit('changeFileValue', { control, value });
          //   break;
          case 'date':
            this.changeDateValue({
              control: control,
              value: value,
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
        var a = window.BX.ajax.runComponentAction(this.actions.filters, data);
        var state = this;
        a.then(
          function (result) {
            _this.loadingFilter = false;
            resultFn(state, result);
          },
          function (error) {
            _this.loadingFilter = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(state, window.twinpx.vue['filter-table'].filters);
            } else {
              _this.showError({
                error: error,
                method: 'filters',
              });
            }
          }
        );
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
          string:
            babelHelpers['typeof'](control.value) === 'object'
              ? control.value.value
              : control.value,
        });
        a.then(
          function (result) {
            control.loading = false;
            resultFn(result);
          },
          function (error) {
            control.loading = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['filter-table']
            ) {
              resultFn(window.twinpx.vue['filter-table'].hints);
            } else {
              _this2.showError({
                error: error,
                method: hintsAction,
              });
            }
          }
        );
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
      },
    },
  });

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      FilterComponent: local_vueComponents_filter.FilterComponent,
      TableComponent: local_vueComponents_table.TableComponent,
      TablePagination: local_vueComponents_pagination.TablePagination,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      ErrorMessage: local_vueComponents_errorMessage.ErrorMessage,
    },
    // language=Vue
    template:
      '\n    <div>\n      <ErrorMessage :error="error" @hideError="hideError" />\n      <LoaderCircle :show="loadingFilter" />\n      <div v-else>\n        <FilterComponent :filters="filters" @input="input" @hints="hints" />\n      </div>\n      <hr>\n      <LoaderCircle :show="loadingTable"/>\n      <div v-else>\n        <TableComponent :cols="cols" :columnsNames="columnsNames" :items="items" :sort="sort" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />\n        <hr>\n        <div class="vue-ft-table-bottom">\n          <div class="vue-ft-table-all" v-if="items.resultCount">\u0412\u0441\u0435\u0433\u043E: {{ items.resultCount }}</div>\n          <TablePagination :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            {},
            ui_vue3_pinia.mapState(dataStore, ['sessionid', 'userid'])
          ),
          ui_vue3_pinia.mapState(tableStore, [
            'loadingTable',
            'columnsNames',
            'items',
            'sort',
            'cols',
            'maxCountPerRequest',
            'errorTable',
          ])
        ),
        ui_vue3_pinia.mapState(filterStore, [
          'filters',
          'loadingFilter',
          'errorFilter',
        ])
      ),
      {},
      {
        pagesNum: function pagesNum() {
          return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
        },
        pageActive: function pageActive() {
          return this.items.startIndex / this.maxCountPerRequest + 1;
        },
        error: function error() {
          return this.errorTable || this.errorFilter;
        },
      }
    ),
    methods: _objectSpread(
      _objectSpread(
        _objectSpread(
          {},
          ui_vue3_pinia.mapActions(tableStore, [
            'hideErrorTable',
            'runColumnsNames',
            'runItems',
            'runDefaultSort',
            'runSetDefaultSort',
          ])
        ),
        ui_vue3_pinia.mapActions(filterStore, [
          'hideErrorFilter',
          'runFilters',
          'changeControlValue',
          'runHintsAction',
          'setHints',
        ])
      ),
      {},
      {
        hideError: function hideError() {
          this.hideErrorTable();
          this.hideErrorFilter();
        },
        clickTh: function clickTh(_ref) {
          var _this = this;
          var column = _ref.column;
          var sortType =
            this.sort.columnSort === column.id && this.sort.sortType === 0
              ? 1
              : 0;
          this.runSetDefaultSort(
            {
              userid: this.userid,
              sessionid: this.sessionid,
              columnSort: column.id,
              sortType: sortType,
            },
            function () {
              _this.runItems({
                userid: _this.userid,
                sessionid: _this.sessionid,
                startIndex: _this.items.startIndex || 0,
                maxCountPerRequest: _this.maxCountPerRequest,
                filters: [],
                columnSort: 1,
                sortType: 'asc',
              });
              _this.runDefaultSort({
                userid: _this.userid,
                sessionid: _this.sessionid,
              });
            }
          );
        },
        input: function input(_ref2) {
          var control = _ref2.control,
            value = _ref2.value,
            checked = _ref2.checked;
          this.changeControlValue({
            control: control,
            value: value,
            checked: checked,
          });
          this.runItems({
            userid: this.userid,
            sessionid: this.sessionid,
            startIndex: this.items.startIndex || 0,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
          });
        },
        hints: function hints(_ref3) {
          var type = _ref3.type,
            control = _ref3.control,
            action = _ref3.action,
            value = _ref3.value;
          switch (type) {
            case 'get':
              this.runHintsAction({
                control: control,
                action: action,
              });
              break;
            case 'set':
              this.setHints({
                control: control,
                value: value,
              });
              break;
          }
        },
        clickPage: function clickPage(_ref4) {
          var count = _ref4.count;
          this.runItems({
            userid: this.userid,
            sessionid: this.sessionid,
            startIndex: (count - 1) * this.maxCountPerRequest,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType,
          });
        },
      }
    ),
    mounted: function mounted() {
      var _this2 = this;
      this.runColumnsNames({
        userid: this.userid,
        sessionid: this.sessionid,
      });
      this.runDefaultSort(
        {
          userid: this.userid,
          sessionid: this.sessionid,
        },
        function () {
          _this2.runItems({
            userid: _this2.userid,
            sessionid: _this2.sessionid,
            startIndex: _this2.items.startIndex || 0,
            maxCountPerRequest: _this2.maxCountPerRequest,
            filters: _this2.filters,
            columnSort: _this2.sort.columnSort,
            sortType: _this2.sort.sortType,
          });
        }
      );
      this.runFilters({
        userid: this.userid,
        sessionid: this.sessionid,
      });
    },
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError(
        'Cannot initialize the same private elements twice on an object'
      );
    }
  }
  var _store = /*#__PURE__*/ new WeakMap();
  var _rootNode = /*#__PURE__*/ new WeakMap();
  var _application = /*#__PURE__*/ new WeakMap();
  var FilterTable = /*#__PURE__*/ (function () {
    function FilterTable(rootNode, options) {
      babelHelpers.classCallCheck(this, FilterTable);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0,
      });
      babelHelpers.classPrivateFieldSet(
        this,
        _store,
        ui_vue3_pinia.createPinia()
      );
      babelHelpers.classPrivateFieldSet(
        this,
        _rootNode,
        document.querySelector(rootNode)
      );
      this.options = options;
    }
    babelHelpers.createClass(FilterTable, [
      {
        key: 'run',
        value: function run() {
          var self = this;
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Filter Table Application',
              components: {
                Application: Application,
              },
              template: '<Application/>',
              mounted: function mounted() {
                dataStore().sessionid = self.options.SESSION_ID;
                dataStore().userid = self.options.USER_ID;
                tableStore().cols = self.options.COLS;
                tableStore().maxCountPerRequest =
                  self.options.maxCountPerRequest;
                tableStore().actions = {
                  columnsNames: self.options.columnsNames,
                  items: self.options.items,
                  defaultSort: self.options.defaultSort,
                  setDefaultSort: self.options.setDefaultSort,
                };
                filterStore().actions = {
                  filters: self.options.filters,
                };
              },
            })
          );
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
        },
      },
      {
        key: 'initStorageBeforeStartApplication',
        value: function initStorageBeforeStartApplication() {
          ui_vue3_pinia.setActivePinia(
            babelHelpers.classPrivateFieldGet(this, _store)
          );
        },
      },
      {
        key: 'getTableStore',
        value: function getTableStore() {
          return tableStore;
        },
      },
    ]);
    return FilterTable;
  })();

  exports.FilterTable = FilterTable;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.Loaders,
  BX.AAS,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
