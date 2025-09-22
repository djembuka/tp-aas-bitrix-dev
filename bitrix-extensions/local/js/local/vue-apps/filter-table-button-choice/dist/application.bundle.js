/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_filterComponent,local_vueComponents_tableComponent,local_vueComponents_stickyScroll,local_vueComponents_paginationComponent,local_vueComponents_moreButton,local_vueComponents_errorMessage,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
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
        sort: {},
        actions: {},
        errorTable: '',
        contentLoadingMode: 'pagination',
        startIndex: 0,
        loadingMore: false,
        showMore: true
      };
    },
    getters: {
      loadingTable: function loadingTable() {
        return this.loadingCols || this.loadingItems;
      }
    },
    actions: {
      setQueryParam: function setQueryParam(key, value) {
        var url = new URL(window.location.href);
        if (value === null || value === undefined) {
          url.searchParams["delete"](key);
        } else {
          url.searchParams.set(key, String(value));
        }
        window.history.replaceState({}, '', url);
      },
      changeShowMore: function changeShowMore(value) {
        this.showMore = value;
      },
      changeLoadingMore: function changeLoadingMore(value) {
        this.loadingMore = value;
      },
      changeStartIndex: function changeStartIndex(value) {
        this.startIndex = value;
      },
      changeItems: function changeItems(items) {
        this.items = items;
      },
      changeLoadingItems: function changeLoadingItems(value) {
        this.loadingItems = value;
      },
      showErrorTable: function showErrorTable(_ref) {
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
      hideErrorTable: function hideErrorTable() {
        this.errorTable = '';
      },
      runColumnsNames: function runColumnsNames(data, callback) {
        var _this = this;
        this.loadingCols = true;
        this.loadingItems = true;
        var a = window.BX.ajax.runComponentAction(this.actions.columnsNames.component, this.actions.columnsNames.method, data);
        var state = this;
        a.then(function (result) {
          _this.loadingCols = false;
          resultFn(state, result.data);
        }, function (error) {
          _this.loadingCols = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].columnsNames);
          } else {
            _this.showErrorTable({
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
      runItems: function runItems(data) {
        return window.BX.ajax.runComponentAction(this.actions.items.component, this.actions.items.method, data);
      },
      runDefaultSort: function runDefaultSort(data, callback) {
        var _this2 = this;
        var a = window.BX.ajax.runComponentAction(this.actions.defaultSort.component, this.actions.defaultSort.method, data);
        var state = this;
        a.then(function (result) {
          resultFn(state, result.data);
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, window.twinpx.vue['filter-table'].defaultSort);
          } else {
            _this2.showErrorTable({
              error: error,
              method: 'defaultSort'
            });
          }
        });
        function resultFn(state, data) {
          state.setSort(data);
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultSort: function runSetDefaultSort(data, callback) {
        var _this3 = this;
        var a = window.BX.ajax.runComponentAction(this.actions.setDefaultSort.component, this.actions.setDefaultSort.method, data);
        var state = this;
        a.then(function (result) {
          if (result && babelHelpers["typeof"](result) === 'object' && String(result.status).toLowerCase() === 'success') {
            resultFn(state, data.data);
          }
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['filter-table']) {
            resultFn(state, data.data);
          } else {
            _this3.showErrorTable({
              error: error,
              method: 'setDefaultSort'
            });
          }
        });
        function resultFn(state, data) {
          state.setSort({
            columnSort: data.columnSort,
            sortType: data.sortType
          });
          if (callback) {
            callback();
          }
        }
      },
      setSort: function setSort(sort) {
        this.sort = sort;
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
        var a = window.BX.ajax.runComponentAction(hintsAction, _objectSpread({
          string: babelHelpers["typeof"](control.value) === 'object' ? control.value.value : control.value
        }, dataStore().data));
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

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {
        inputTimeoutId: null
      };
    },
    components: {
      FilterComponent: local_vueComponents_filterComponent.FilterComponent,
      TableComponent: local_vueComponents_tableComponent.TableComponent,
      StickyScroll: local_vueComponents_stickyScroll.StickyScroll,
      PaginationComponent: local_vueComponents_paginationComponent.PaginationComponent,
      MoreButton: local_vueComponents_moreButton.MoreButton,
      ErrorMessage: local_vueComponents_errorMessage.ErrorMessage
    },
    // language=Vue

    template: "\n    <div>\n      <ErrorMessage :error=\"error\" @hideError=\"hideError\" />\n      <div v-if=\"!error\">\n        <FilterComponent :filters=\"filters\" :loading=\"loadingFilter\" @input=\"input\" @hints=\"hints\" />\n      </div>\n      <hr>\n      <div v-if=\"!error\">\n        <StickyScroll>\n          <TableComponent :sortable=\"true\" :columnsNames=\"columnsNames\" :items=\"items\" :sort=\"sort\" :loading=\"loadingTable\" :maxCountPerRequest=\"maxCountPerRequest\" @clickTh=\"clickTh\" @clickPage=\"clickPage\" />\n        </StickyScroll> \n        <hr>\n        <div class=\"vue-ft-table-bottom\" v-if=\"paginationMode\">\n          <div class=\"vue-ft-table-all\" v-if=\"items.resultCount\">\u0412\u0441\u0435\u0433\u043E: {{ items.resultCount }}</div>\n          <PaginationComponent :pagesNum=\"pagesNum\" :pageActive=\"pageActive\" @clickPage=\"clickPage\" />\n        </div>\n        <div class=\"vue-ft-table-bottom\" v-if=\"moreMode\">\n          <MoreButton\n            :infiniteScroll=\"infiniteScrollOptions\"\n            :loading=\"loadingMore\"\n            :show=\"showMore\"\n            @clickMore=\"clickMore\"\n          />\n        </div>\n      </div>\n    </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['customData', 'signedParameters'])), ui_vue3_pinia.mapState(tableStore, ['loadingTable', 'columnsNames', 'items', 'sort', 'maxCountPerRequest', 'errorTable', 'contentLoadingMode', 'startIndex', 'loadingMore', 'showMore'])), ui_vue3_pinia.mapState(filterStore, ['loadingFilter', 'filters', 'errorFilter'])), {}, {
      pagesNum: function pagesNum() {
        return Math.ceil(this.items.resultCount / this.maxCountPerRequest);
      },
      pageActive: function pageActive() {
        return this.items.startIndex / this.maxCountPerRequest + 1;
      },
      error: function error() {
        return this.errorTable || this.errorFilter;
      },
      paginationMode: function paginationMode() {
        return this.contentLoadingMode === 'pagination';
      },
      moreMode: function moreMode() {
        return this.contentLoadingMode === 'loadMore' || this.contentLoadingMode === 'infiniteScroll';
      },
      infiniteScrollOptions: function infiniteScrollOptions() {
        if (this.contentLoadingMode === 'infiniteScroll') {
          return {
            offset: 200,
            direction: 'down',
            root: null,
            once: false
          };
        } else {
          return null;
        }
      }
    }),
    methods: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(tableStore, ['showErrorTable', 'hideErrorTable', 'runColumnsNames', 'runItems', 'runDefaultSort', 'runSetDefaultSort', 'changeStartIndex', 'changeItems', 'changeLoadingItems', 'changeLoadingMore', 'changeShowMore', 'setQueryParam'])), ui_vue3_pinia.mapActions(filterStore, ['hideErrorFilter', 'runFilters', 'changeControlValue', 'runHintsAction', 'setHints'])), {}, {
      clickMore: function clickMore() {
        var _this = this;
        if (!this.sort.columnSort || !this.sort.sortType) {
          //если сработало пока не загрузились данные первой страницы
          return;
        }
        this.changeStartIndex(this.startIndex + this.maxCountPerRequest);
        this.changeLoadingMore(true);
        this.runItems({
          mode: 'class',
          data: _objectSpread$1({
            startIndex: this.startIndex,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType
          }, this.customData),
          signedParameters: this.signedParameters
        }).then(function (result) {
          var a = _objectSpread$1({}, _this.items);
          a.items = [].concat(babelHelpers.toConsumableArray(a.items), babelHelpers.toConsumableArray(result.data.items));
          _this.changeLoadingMore(false);
          _this.changeItems(a);
          _this.changeShowMore(Number(_this.items.items.length) >= Number(_this.items.resultCount) ? false : true);
          _this.setQueryParam('ITEMS_NUM', _this.items.items.length);
        }, function (error) {
          _this.changeLoadingMore(false);
          _this.showErrorTable({
            error: error,
            method: 'items'
          });
        });
      },
      hideError: function hideError() {
        this.hideErrorTable();
        this.hideErrorFilter();
      },
      clickTh: function clickTh(_ref) {
        var _this2 = this;
        var column = _ref.column;
        var sortType = this.sort.columnSort === column.id && this.sort.sortType === 'ASC' ? 'DESC' : 'ASC';
        this.runSetDefaultSort({
          mode: 'class',
          data: _objectSpread$1({
            columnSort: column.id,
            sortType: sortType
          }, this.customData),
          signedParameters: this.signedParameters
        }, function () {
          _this2.changeLoadingItems(true);
          var maxCountPerRequest = _this2.startIndex + _this2.maxCountPerRequest;
          var startIndex = _this2.paginationMode ? _this2.items.startIndex || 0 : 0;
          _this2.runItems({
            mode: 'class',
            data: _objectSpread$1({
              startIndex: startIndex,
              maxCountPerRequest: maxCountPerRequest,
              filters: _this2.filters,
              columnSort: column.id,
              sortType: sortType
            }, _this2.customData),
            signedParameters: _this2.signedParameters
          }).then(function (result) {
            _this2.changeLoadingItems(false);
            _this2.changeItems(result.data);
            _this2.changeShowMore(Number(_this2.items.items.length) >= Number(_this2.items.resultCount) ? false : true);
          }, function (error) {
            _this2.changeLoadingItems(false);
            _this2.showErrorTable({
              error: error,
              method: 'items'
            });
          });
        });
      },
      input: function input(_ref2) {
        var _this3 = this;
        var control = _ref2.control,
          value = _ref2.value,
          checked = _ref2.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
        });
        clearTimeout(this.inputTimeoutId);
        this.inputTimeoutId = setTimeout(function () {
          _this3.changeLoadingItems(true);
          _this3.changeStartIndex(_this3.paginationMode ? _this3.items.startIndex || 0 : 0);
          _this3.runItems({
            mode: 'class',
            data: _objectSpread$1({
              startIndex: _this3.startIndex,
              maxCountPerRequest: _this3.maxCountPerRequest,
              filters: _this3.filters,
              columnSort: _this3.sort.columnSort,
              sortType: _this3.sort.sortType
            }, _this3.customData),
            signedParameters: _this3.signedParameters
          }).then(function (result) {
            _this3.changeLoadingItems(false);
            _this3.changeItems(result.data);
            _this3.changeShowMore(Number(_this3.items.items.length) >= Number(_this3.items.resultCount) ? false : true);
            _this3.setQueryParam('ITEMS_NUM');
          }, function (error) {
            _this3.changeLoadingItems(false);
            _this3.showErrorTable({
              error: error,
              method: 'items'
            });
          });
        }, 300);
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
      },
      clickPage: function clickPage(_ref4) {
        var _this4 = this;
        var count = _ref4.count;
        this.changeStartIndex((count - 1) * this.maxCountPerRequest);
        this.changeLoadingItems(true);
        this.runItems({
          mode: 'class',
          data: _objectSpread$1({
            startIndex: this.startIndex,
            maxCountPerRequest: this.maxCountPerRequest,
            filters: this.filters,
            columnSort: this.sort.columnSort,
            sortType: this.sort.sortType
          }, this.customData),
          signedParameters: this.signedParameters
        }).then(function (result) {
          _this4.changeLoadingItems(false);
          _this4.changeItems(result.data);
          _this4.setQueryParam('ITEMS_NUM');
        }, function (error) {
          _this4.changeLoadingItems(false);
          _this4.showErrorTable({
            error: error,
            method: 'items'
          });
        });
      },
      getMaxCountOnLoad: function getMaxCountOnLoad() {
        var url = new URL(window.location.href);
        return url.searchParams.get("ITEMS_NUM") || this.maxCountPerRequest;
      }
    }),
    mounted: function mounted() {
      var _this5 = this;
      this.runColumnsNames({
        mode: 'class',
        data: _objectSpread$1({}, this.customData),
        signedParameters: this.signedParameters
      });
      this.runDefaultSort({
        mode: 'class',
        data: _objectSpread$1({}, this.customData),
        signedParameters: this.signedParameters
      }, function () {
        _this5.changeLoadingItems(true);
        _this5.changeStartIndex(_this5.paginationMode ? _this5.items.startIndex || 0 : 0);
        var maxCountPerRequest = _this5.getMaxCountOnLoad();
        _this5.runItems({
          mode: 'class',
          data: _objectSpread$1({
            startIndex: _this5.startIndex,
            maxCountPerRequest: maxCountPerRequest,
            filters: _this5.filters,
            columnSort: _this5.sort.columnSort,
            sortType: _this5.sort.sortType
          }, _this5.customData),
          signedParameters: _this5.signedParameters
        }).then(function (result) {
          _this5.changeLoadingItems(false);
          _this5.changeItems(result.data);
          _this5.changeShowMore(Number(_this5.items.items.length) >= Number(_this5.items.resultCount) ? false : true);
          _this5.changeStartIndex(maxCountPerRequest - _this5.maxCountPerRequest);
        }, function (error) {
          _this5.changeLoadingItems(false);
          _this5.showErrorTable({
            error: error,
            method: 'items'
          });
        });
      });
      this.runFilters({
        mode: 'class',
        data: _objectSpread$1({}, this.customData),
        signedParameters: this.signedParameters
      });
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var FilterTableButtonChoice = /*#__PURE__*/function () {
    function FilterTableButtonChoice(rootNode, options) {
      babelHelpers.classCallCheck(this, FilterTableButtonChoice);
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
    babelHelpers.createClass(FilterTableButtonChoice, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Filter Table Application',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
            tableStore().maxCountPerRequest = self.options.maxCountPerRequest || 100;
            tableStore().actions = {
              columnsNames: self.options.columnsNames || '',
              items: self.options.items || '',
              defaultSort: self.options.defaultSort || '',
              setDefaultSort: self.options.setDefaultSort || ''
            };
            tableStore().contentLoadingMode = self.options.contentLoadingMode || 'pagination'; //"loadMore", "infiniteScroll"

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
    return FilterTableButtonChoice;
  }();

  exports.FilterTableButtonChoice = FilterTableButtonChoice;

}((this.BX = this.BX || {}),BX,BX.AAS,BX.AAS,BX.AAS,BX.AAS,BX.AAS,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
