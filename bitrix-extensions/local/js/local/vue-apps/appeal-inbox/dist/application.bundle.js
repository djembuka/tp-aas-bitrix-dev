/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_profileChoice,
  local_vueComponents_predefinedFilters,
  local_vueComponents_filterComponent,
  local_vueComponents_tableComponent,
  local_vueComponents_stickyScroll,
  local_vueComponents_paginationComponent,
  local_vueComponents_messageComponent,
  ui_vue3_pinia
) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        userid: '',
        sessid: '',
        signedParameters: '',
      };
    },
  });

  var profileStore = ui_vue3_pinia.defineStore('profile', {
    state: function state() {
      return {
        actions: {
          profiles: {},
        },
        localize: {},
        profiles: [],
        profilesCounter: 0,
        errorProfile: '',
        loadingProfiles: true,
      };
    },
    getters: {
      defaultProfile: function defaultProfile() {
        return this.profiles.find(function (p) {
          return p['default'];
        });
      },
    },
    actions: {
      showError: function showError(_ref) {
        var error = _ref.error,
          method = _ref.method;
        if (typeof error === 'boolean') {
          this.errorProfile = error;
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
                  this.errorProfile = ''
                    .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                    .concat(method, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_CODE, ': ')
                    .concat(error.data.ajaxRejectData.data, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorProfile = ''
                  .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                  .concat(method, '. ')
                  .concat(
                    this.localize.APPEAL_INBOX_ERROR_CODE,
                    ': NETWORK_ERROR. '
                  )
                  .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorProfile = ''
                .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_CODE +
                        ': ' +
                        error.errors[0].code +
                        '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                        ': ' +
                        error.errors[0].message +
                        '.'
                    : ''
                );
            }
          }
        }
      },
      setDefaultProfile: function setDefaultProfile(_ref2) {
        var id = _ref2.id;
        if (this.profiles.length) {
          this.profiles.forEach(function (p) {
            p['default'] = String(p.id) === String(id);
          });
        }
      },
      increaseProfilesCounter: function increaseProfilesCounter() {
        ++this.profilesCounter;
      },
      runProfiles: function runProfiles(data, callback) {
        var _this = this;
        this.loadingProfiles = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.profiles.component,
          this.actions.profiles.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this.loadingProfiles = false;
            resultFn(state, result.data);
            return result;
          },
          function (error) {
            _this.loadingProfiles = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(state, window.twinpx.vue['appeal-inbox'].profiles);
            } else {
              _this.showError({
                error: error,
                method: 'profiles',
              });
            }
          }
        );
        function resultFn(state, data) {
          state.profiles = data;
          if (babelHelpers['typeof'](data) === 'object' && data.length === 0) {
            state.showError({
              error: {
                errors: [
                  {
                    code: '',
                    message: 'No profiles found',
                  },
                ],
              },
              method: 'profiles',
            });
          }
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultProfile: function runSetDefaultProfile(
        data,
        callback,
        counter
      ) {
        var _this2 = this;
        this.loadingProfiles = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.setDefaultProfile.component,
          this.actions.setDefaultProfile.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this2.loadingProfiles = false;
            resultFn(state, result);
            return result;
          },
          function (error) {
            _this2.loadingProfiles = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(
                state,
                window.twinpx.vue['appeal-inbox'].setDefaultProfile
              );
            } else {
              _this2.showError({
                error: error,
                method: 'setDefaultProfile',
              });
            }
          }
        );
        function resultFn(state, result) {
          if (counter === state.profilesCounter) {
            state.setDefaultProfile({
              id: result.data,
            });
            if (callback) {
              callback();
            }
          }
        }
      },
      bitrixLogs: function bitrixLogs() {},
    },
  });

  var predefinedStore = ui_vue3_pinia.defineStore('predefined', {
    state: function state() {
      return {
        actions: {
          predefined: {},
        },
        localize: {},
        predefined: [],
        errorPredefined: '',
        loadingPredefined: true,
        loadingSelected: false,
      };
    },
    getters: {
      predefinedActive: function predefinedActive() {
        if (!this.predefined.fields) return undefined;
        return this.predefined.fields.find(function (f) {
          return f.active;
        });
      },
    },
    actions: {
      showError: function showError(_ref) {
        var error = _ref.error,
          method = _ref.method;
        if (typeof error === 'boolean') {
          this.errorPredefined = error;
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
                  this.errorPredefined = ''
                    .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                    .concat(method, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_CODE, ': ')
                    .concat(error.data.ajaxRejectData.data, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorPredefined = ''
                  .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                  .concat(method, '. ')
                  .concat(
                    this.localize.APPEAL_INBOX_ERROR_CODE,
                    ': NETWORK_ERROR. '
                  )
                  .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorPredefined = ''
                .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_CODE +
                        ': ' +
                        error.errors[0].code +
                        '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                        ': ' +
                        error.errors[0].message +
                        '.'
                    : ''
                );
            }
          }
        }
      },
      setPredefinedActive: function setPredefinedActive(_ref2) {
        var field = _ref2.field;
        this.predefined.fields.forEach(function (f) {
          if (f.id !== field.id) {
            delete f.active;
          }
          field.active = !field.active;
        });
      },
      runPredefinedFilters: function runPredefinedFilters(data, callback) {
        var _this = this;
        this.loadingPredefined = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.predefinedFilters.component,
          this.actions.predefinedFilters.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this.loadingPredefined = false;
            resultFn(state, result.data);
            return result;
          },
          function (error) {
            _this.loadingPredefined = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(
                state,
                window.twinpx.vue['appeal-inbox'].predefinedFilters
              );
            } else {
              _this.showError({
                error: error,
                method: 'predefinedFilters',
              });
            }
          }
        );
        function resultFn(state, data) {
          state.predefined = data;
          if (callback) {
            callback();
          }
        }
      },
      runExportFile: function runExportFile(data, callback) {
        var _this2 = this;
        this.loadingSelected = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.exportFile.component,
          this.actions.exportFile.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this2.loadingSelected = false;
            resultFn(state, result.data);
            return result;
          },
          function (error) {
            _this2.loadingSelected = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(
                state,
                window.twinpx.vue['appeal-inbox'].predefinedFilters
              );
            } else {
              _this2.showError({
                error: error,
                method: 'predefinedFilters',
              });
            }
          }
        );
        function resultFn(_, data) {
          window.open(data.link);
          if (callback) {
            callback();
          }
        }
      },
    },
  });

  var tableStore = ui_vue3_pinia.defineStore('table', {
    state: function state() {
      return {
        loadingCols: false,
        loadingAppeals: false,
        columnsNames: [],
        appeals: null,
        sort: {},
        actions: {},
        localize: {},
        errorTable: '',
        appealsCounter: 0,
        appealsFinished: false,
      };
    },
    getters: {
      loadingTable: function loadingTable() {
        return this.loadingCols || this.loadingAppeals;
      },
    },
    actions: {
      increaseAppealsCounter: function increaseAppealsCounter() {
        return ++this.appealsCounter;
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
                    .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                    .concat(method, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_CODE, ': ')
                    .concat(error.data.ajaxRejectData.data, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorTable = ''
                  .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                  .concat(method, '. ')
                  .concat(
                    this.localize.APPEAL_INBOX_ERROR_CODE,
                    ': NETWORK_ERROR. '
                  )
                  .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorTable = ''
                .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_CODE +
                        ': ' +
                        error.errors[0].code +
                        '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                        ': ' +
                        error.errors[0].message +
                        '.'
                    : ''
                );
            }
          }
        }
      },
      runColumnsNames: function runColumnsNames(data, callback) {
        var _this = this;
        this.loadingCols = true;
        this.loadingAppeals = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.columnsNames.component,
          this.actions.columnsNames.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this.loadingCols = false;
            resultFn(state, result);
            return result;
          },
          function (error) {
            _this.loadingCols = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(state, window.twinpx.vue['appeal-inbox'].columnsNames);
            } else {
              _this.showError({
                error: error,
                method: 'columnsNames',
              });
            }
          }
        );
        function resultFn(state, result) {
          state.columnsNames = result.data;
          if (callback) {
            callback();
          }
        }
      },
      runAppeals: function runAppeals(data, callback, counter) {
        var _this2 = this;
        this.loadingAppeals = true;
        var a = window.BX.ajax.runComponentAction(
          this.actions.appeals.component,
          this.actions.appeals.method,
          data
        );
        var state = this;
        a.then(
          function (result) {
            _this2.loadingAppeals = false;
            resultFn(state, result);
          },
          function (error) {
            _this2.loadingAppeals = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(
                state,
                window.twinpx.vue['appeal-inbox'].appeals(data.data.startIndex)
              );
            } else {
              _this2.showError({
                error: error,
                method: 'appeals',
              });
            }
          }
        );
        function resultFn(state, result) {
          if (counter === state.appealsCounter) {
            state.appeals = result.data;
            //reInitWatcher - set sticky-scroll width
            state.appealsFinished = !state.appealsFinished;
            if (callback) {
              callback();
            }
          }
        }
      },
      runDefaultSort: function runDefaultSort(data, callback) {
        var _this3 = this;
        var a = window.BX.ajax.runComponentAction(
          this.actions.defaultSort.component,
          this.actions.defaultSort.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            resultFn(state, result);
            return result;
          },
          function (error) {
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(state, window.twinpx.vue['appeal-inbox'].defaultSort);
            } else {
              _this3.showError({
                error: error,
                method: 'defaultSort',
              });
            }
          }
        );
        function resultFn(state, result) {
          state.setSort(result.data);
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultSort: function runSetDefaultSort(data, callback) {
        var _this4 = this;
        var a = window.BX.ajax.runComponentAction(
          this.actions.setDefaultSort.component,
          this.actions.setDefaultSort.method,
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
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(state, window.twinpx.vue['appeal-inbox'].setDefaultSort);
            } else {
              _this4.showError({
                error: error,
                method: 'setDefaultSort',
              });
            }
          }
        );
        function resultFn(state, result) {
          state.setSort({
            columnSort: data.data.columnSort,
            sortType: data.data.sortType,
          });
          if (callback) {
            callback();
          }
        }
      },
      setSort: function setSort(sort) {
        this.sort = sort;
      },
    },
  });

  var filterStore = ui_vue3_pinia.defineStore('filter', {
    state: function state() {
      return {
        loadingFilter: false,
        actions: {},
        localize: {},
        filters: [],
        errorFilter: '',
      };
    },
    actions: {
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
                    .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                    .concat(method, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_CODE, ': ')
                    .concat(error.data.ajaxRejectData.data, '. ')
                    .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                    .concat(
                      window.BX.message(
                        'ERROR_' + error.data.ajaxRejectData.data
                      ) || window.BX.message('ERROR_SERVER'),
                      '.'
                    );
                }
              } else if (window.BX.message) {
                this.errorFilter = ''
                  .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                  .concat(method, '. ')
                  .concat(
                    this.localize.APPEAL_INBOX_ERROR_CODE,
                    ': NETWORK_ERROR. '
                  )
                  .concat(this.localize.APPEAL_INBOX_ERROR_DESCRIPTION, ': ')
                  .concat(window.BX.message('ERROR_OFFLINE'), '.');
              }
            } else {
              this.errorFilter = ''
                .concat(this.localize.APPEAL_INBOX_ERROR_METHOD, ': ')
                .concat(method, '.')
                .concat(
                  error.errors[0].code
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_CODE +
                        ': ' +
                        error.errors[0].code +
                        '.'
                    : '',
                  ' '
                )
                .concat(
                  error.errors[0].message
                    ? ' ' +
                        this.localize.APPEAL_INBOX_ERROR_DESCRIPTION +
                        ': ' +
                        error.errors[0].message +
                        '.'
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
        var a = window.BX.ajax.runComponentAction(
          this.actions.filters.component,
          this.actions.filters.method,
          data
        );
        var state = this;
        return a.then(
          function (result) {
            _this.loadingFilter = false;
            resultFn(state, result);
            return result;
          },
          function (error) {
            _this.loadingFilter = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(state, window.twinpx.vue['appeal-inbox'].filters);
            } else {
              _this.showError({
                error: error,
                method: 'filters',
              });
            }
          }
        );
        function resultFn(state, result) {
          state.filters = result.data;
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
              window.twinpx.vue['appeal-inbox']
            ) {
              resultFn(window.twinpx.vue['appeal-inbox'].hints);
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
      return {
        selectedPrev: 0,
        inputTimeoutId: null,
      };
    },
    components: {
      ProfileChoice: local_vueComponents_profileChoice.ProfileChoice,
      PredefinedFilters:
        local_vueComponents_predefinedFilters.PredefinedFilters,
      FilterComponent: local_vueComponents_filterComponent.FilterComponent,
      TableComponent: local_vueComponents_tableComponent.TableComponent,
      StickyScroll: local_vueComponents_stickyScroll.StickyScroll,
      PaginationComponent:
        local_vueComponents_paginationComponent.PaginationComponent,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
    },
    // language=Vue

    template:
      '\n\n    <MessageComponent v-if="errorProfile" type="error" :message="errorProfile" :button="false" />\n\n    <div v-else>\n\n      <ProfileChoice :profiles="profiles" :loading="loadingProfiles" @clickProfile="clickProfile" />\n\n\n      <hr class="hr--sl" v-if="loadingPredefined || (predefined && predefined.fields && predefined.fields.length) || (selected !== false && selected !== 0) || errorPredefined">\n\n\n      <MessageComponent v-if="errorPredefined" type="error" :message="errorPredefined" :button="false" />\n\n      <PredefinedFilters v-else :predefined="predefined" :selected="selected" :loadingSelected="loadingSelected" :loading="loadingPredefined" @clickPredefined="clickPredefined" @clickSelected="clickSelected" />\n\n\n      <hr class="hr--lg"\n      >\n      \n      <div>\n        <div v-if="filters">\n\n          <MessageComponent v-if="errorFilter" type="error" :message="errorFilter" :button="false" />\n\n          <FilterComponent v-else :cols="filterCols" :filters="filters" :loading="loadingFilter" @input="input" @hints="hints" />\n\n        </div>\n        <hr>\n\n\n        <MessageComponent v-if="errorTable" type="error" :message="errorTable" :button="false" />\n\n        <div v-else-if="appeals" ref="table">\n\n          <StickyScroll>\n            <TableComponent :sortable="true" :cols="tableCols" :columnsNames="columnsNames" :items="appeals" :sort="sort" :loading="loadingTable" :maxCountPerRequest="maxCountPerRequest" @clickTh="clickTh" @clickPage="clickPage" />\n          </StickyScroll> \n          <hr>\n          <div class="vue-ft-table-bottom">\n            <div class="vue-ft-table-all" v-if="appeals.resultCount">\u0412\u0441\u0435\u0433\u043E: {{ appeals.resultCount }}</div>\n            <PaginationComponent :pagesNum="pagesNum" :pageActive="pageActive" @clickPage="clickPage" />\n          </div>\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                ui_vue3_pinia.mapState(dataStore, [
                  'userid',
                  'sessid',
                  'signedParameters',
                ])
              ),
              ui_vue3_pinia.mapState(profileStore, [
                'profiles',
                'defaultProfile',
                'profilesCounter',
                'loadingProfiles',
                'errorProfile',
              ])
            ),
            ui_vue3_pinia.mapState(predefinedStore, [
              'predefined',
              'predefinedActive',
              'loadingPredefined',
              'loadingSelected',
              'errorPredefined',
            ])
          ),
          ui_vue3_pinia.mapState(tableStore, [
            'loadingTable',
            'columnsNames',
            'appeals',
            'sort',
            'tableCols',
            'maxCountPerRequest',
            'errorTable',
          ])
        ),
        ui_vue3_pinia.mapState(filterStore, [
          'loadingFilter',
          'filters',
          'filterCols',
          'errorFilter',
        ])
      ),
      {},
      {
        showError: function showError(error) {
          console.log(error);
        },
        pagesNum: function pagesNum() {
          return Math.ceil(this.appeals.resultCount / this.maxCountPerRequest);
        },
        pageActive: function pageActive() {
          return this.appeals.startIndex / this.maxCountPerRequest + 1;
        },
        error: function error() {
          return (
            this.errorProfile ||
            this.errorPredefined ||
            this.errorFilter ||
            this.errorTable
          );
        },
        selected: function selected() {
          if (!this.defaultProfile) {
            return false;
          }
          var filtersSelected = false;
          if (this.filters) {
            filtersSelected = this.filters.find(function (f) {
              if (
                f.property === 'select' &&
                babelHelpers['typeof'](f.value) === 'object'
              ) {
                return f.value.code;
              } else {
                return f.value;
              }
            });
          }
          if (this.defaultProfile.excelExportSupport && filtersSelected) {
            if (!this.loadingTable) {
              this.selectedPrev = this.appeals.resultCount;
              return this.appeals.resultCount;
            } else {
              return this.loadingTable && this.selectedPrev > 0;
            }
          } else {
            return false;
          }
        },
      }
    ),
    methods: _objectSpread(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              ui_vue3_pinia.mapActions(profileStore, [
                'runProfiles',
                'runSetDefaultProfile',
                'setDefaultProfile',
                'increaseProfilesCounter',
              ])
            ),
            ui_vue3_pinia.mapActions(predefinedStore, [
              'runPredefinedFilters',
              'setPredefinedActive',
              'runExportFile',
            ])
          ),
          {},
          {
            clickProfile: function clickProfile(_ref) {
              var _this = this;
              var id = _ref.id;
              this.setDefaultProfile({
                id: id,
              });
              this.increaseProfilesCounter();
              new Promise(function (resolve) {
                resolve(
                  _this.runSetDefaultProfile(
                    {
                      mode: 'class',
                      data: {
                        signedParameters: _this.signedParameters,
                        userid: _this.userid,
                        sessid: _this.sessid,
                        profileid: id,
                      },
                    },
                    function () {},
                    _this.profilesCounter
                  )
                );
              })
                .then(
                  function (result) {
                    if (result && result.status === 'success') {
                      if (!_this.defaultProfile) return;
                      return _this.runPredefinedFilters({
                        mode: 'class',
                        data: {
                          signedParameters: _this.signedParameters,
                          userid: _this.userid,
                          sessid: _this.sessid,
                          profileid: _this.defaultProfile.id,
                        },
                      });
                    } else if (result && result.status === 'error') {
                      _this.showError({
                        error: result.errors[0],
                      });
                    }
                  },
                  function (error) {
                    console.log(error);
                  }
                )
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this.runFilters({
                      mode: 'class',
                      data: {
                        signedParameters: _this.signedParameters,
                        userid: _this.userid,
                        sessid: _this.sessid,
                        profileid: _this.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this.runColumnsNames({
                      mode: 'class',
                      data: {
                        signedParameters: _this.signedParameters,
                        userid: _this.userid,
                        sessid: _this.sessid,
                        profileid: _this.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this.runDefaultSort({
                      mode: 'class',
                      data: {
                        signedParameters: _this.signedParameters,
                        userid: _this.userid,
                        sessid: _this.sessid,
                        profileid: _this.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    var predefinedFilter = _this.predefinedActive
                      ? _this.predefinedActive.id
                      : undefined;
                    _this.runAppeals(
                      {
                        mode: 'class',
                        data: {
                          signedParameters: _this.signedParameters,
                          userid: _this.userid,
                          sessid: _this.sessid,
                          profileid: _this.defaultProfile.id,
                          startIndex: 0,
                          maxCountPerRequest: _this.maxCountPerRequest,
                          predefinedFilter: predefinedFilter,
                          filters: _this.filters,
                          columnSort: _this.sort.columnSort,
                          sortType: _this.sort.sortType,
                        },
                      },
                      null,
                      _this.increaseAppealsCounter()
                    );
                  } else if (result && result.status === 'error') {
                    _this.showError({
                      error: result.errors[0],
                    });
                  }
                });
            },
            clickPredefined: function clickPredefined(_ref2) {
              var _this2 = this;
              var field = _ref2.field;
              this.setPredefinedActive({
                field: field,
              });
              if (!this.defaultProfile) return;
              var predefinedFilter = this.predefinedActive
                ? this.predefinedActive.id
                : undefined;
              new Promise(function (resolve) {
                resolve(
                  _this2.runAppeals(
                    {
                      mode: 'class',
                      data: {
                        signedParameters: _this2.signedParameters,
                        userid: _this2.userid,
                        sessid: _this2.sessid,
                        profileid: _this2.defaultProfile.id,
                        startIndex: 0,
                        maxCountPerRequest: _this2.maxCountPerRequest,
                        predefinedFilter: predefinedFilter,
                        filters: _this2.filters,
                        columnSort: _this2.sort.columnSort,
                        sortType: _this2.sort.sortType,
                      },
                    },
                    null,
                    _this2.increaseAppealsCounter()
                  )
                );
              })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this2.runFilters({
                      mode: 'class',
                      data: {
                        signedParameters: _this2.signedParameters,
                        userid: _this2.userid,
                        sessid: _this2.sessid,
                        profileid: _this2.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this2.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this2.runColumnsNames({
                      mode: 'class',
                      data: {
                        signedParameters: _this2.signedParameters,
                        userid: _this2.userid,
                        sessid: _this2.sessid,
                        profileid: _this2.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this2.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    return _this2.runDefaultSort({
                      mode: 'class',
                      data: {
                        signedParameters: _this2.signedParameters,
                        userid: _this2.userid,
                        sessid: _this2.sessid,
                        profileid: _this2.defaultProfile.id,
                      },
                    });
                  } else if (result && result.status === 'error') {
                    _this2.showError({
                      error: result.errors[0],
                    });
                  }
                })
                .then(function (result) {
                  if (result && result.status === 'success') {
                    var _predefinedFilter = _this2.predefinedActive
                      ? _this2.predefinedActive.id
                      : undefined;
                    _this2.runAppeals(
                      {
                        mode: 'class',
                        data: {
                          signedParameters: _this2.signedParameters,
                          userid: _this2.userid,
                          sessid: _this2.sessid,
                          profileid: _this2.defaultProfile.id,
                          startIndex: 0,
                          maxCountPerRequest: _this2.maxCountPerRequest,
                          predefinedFilter: _predefinedFilter,
                          filters: _this2.filters,
                          columnSort: _this2.sort.columnSort,
                          sortType: _this2.sort.sortType,
                        },
                      },
                      null,
                      _this2.increaseAppealsCounter()
                    );
                  } else if (result && result.status === 'error') {
                    _this2.showError({
                      error: result.errors[0],
                    });
                  }
                });
            },
            clickSelected: function clickSelected() {
              var predefinedFilter = this.predefinedActive
                ? this.predefinedActive.id
                : undefined;
              this.runExportFile({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  userid: this.userid,
                  sessid: this.sessid,
                  profileid: this.defaultProfile.id,
                  predefinedFilter: predefinedFilter,
                  filters: this.filters,
                  columnSort: this.sort.columnSort,
                  sortType: this.sort.sortType,
                },
              });
            },
          },
          ui_vue3_pinia.mapActions(tableStore, [
            'hideErrorTable',
            'runColumnsNames',
            'runAppeals',
            'runDefaultSort',
            'runSetDefaultSort',
            'increaseAppealsCounter',
          ])
        ),
        ui_vue3_pinia.mapActions(filterStore, [
          'runFilters',
          'changeControlValue',
          'runHintsAction',
          'setHints',
        ])
      ),
      {},
      {
        clickTh: function clickTh(_ref3) {
          var _this3 = this;
          var column = _ref3.column;
          var sortType =
            this.sort.columnSort === column.id && this.sort.sortType === 'ASC'
              ? 'DESC'
              : 'ASC';
          this.runSetDefaultSort(
            {
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
                columnSort: column.id,
                sortType: sortType,
              },
            },
            function () {
              var predefinedFilter = _this3.predefinedActive
                ? _this3.predefinedActive.id
                : undefined;
              _this3.runAppeals(
                {
                  mode: 'class',
                  data: {
                    signedParameters: _this3.signedParameters,
                    userid: _this3.userid,
                    sessid: _this3.sessid,
                    profileid: _this3.defaultProfile.id,
                    startIndex: 0,
                    maxCountPerRequest: _this3.maxCountPerRequest,
                    predefinedFilter: predefinedFilter,
                    filters: _this3.filters,
                    columnSort: column.id,
                    sortType: sortType,
                  },
                },
                null,
                _this3.increaseAppealsCounter()
              );
            }
          );
        },
        input: function input(_ref4) {
          var _this4 = this;
          var control = _ref4.control,
            value = _ref4.value,
            checked = _ref4.checked;
          this.changeControlValue({
            control: control,
            value: value,
            checked: checked,
          });
          clearTimeout(this.inputTimeoutId);
          this.inputTimeoutId = setTimeout(function () {
            var predefinedFilter = _this4.predefinedActive
              ? _this4.predefinedActive.id
              : undefined;
            _this4.runAppeals(
              {
                mode: 'class',
                data: {
                  signedParameters: _this4.signedParameters,
                  userid: _this4.userid,
                  sessid: _this4.sessid,
                  profileid: _this4.defaultProfile.id,
                  startIndex: 0,
                  maxCountPerRequest: _this4.maxCountPerRequest,
                  predefinedFilter: predefinedFilter,
                  filters: _this4.filters,
                  columnSort: _this4.sort.columnSort,
                  sortType: _this4.sort.sortType,
                },
              },
              null,
              _this4.increaseAppealsCounter()
            );
          }, 300);
        },
        hints: function hints(_ref5) {
          var type = _ref5.type,
            control = _ref5.control,
            action = _ref5.action,
            value = _ref5.value;
          switch (type) {
            case 'get':
              this.runHintsAction({
                mode: 'class',
                data: {
                  signedParameters: this.signedParameters,
                  control: control,
                  action: action,
                },
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
        clickPage: function clickPage(_ref6) {
          var _this5 = this;
          var count = _ref6.count;
          var predefinedFilter = this.predefinedActive
            ? this.predefinedActive.id
            : undefined;
          this.runAppeals(
            {
              mode: 'class',
              data: {
                signedParameters: this.signedParameters,
                userid: this.userid,
                sessid: this.sessid,
                profileid: this.defaultProfile.id,
                startIndex: (count - 1) * this.maxCountPerRequest,
                maxCountPerRequest: this.maxCountPerRequest,
                predefinedFilter: predefinedFilter,
                filters: this.filters,
                columnSort: this.sort.columnSort,
                sortType: this.sort.sortType,
              },
            },
            function () {
              if (_this5.$refs.table.getBoundingClientRect().top + 100 < 0) {
                window.scrollTo({
                  top:
                    _this5.$refs.table.getBoundingClientRect().top +
                    window.scrollY -
                    100,
                  behavior: 'smooth',
                });
              }
            },
            this.increaseAppealsCounter()
          );
        },
      }
    ),
    mounted: function mounted() {
      var data = {
        mode: 'class',
        data: {
          signedParameters: this.signedParameters,
          userid: this.userid,
          sessid: this.sessid,
        },
      };
      var self = this;
      new Promise(function (resolve) {
        resolve(self.runProfiles(data));
      })
        .then(function (result) {
          return resultFn(result, 'runPredefinedFilters');
        }, errorFn)
        .then(function (result) {
          return resultFn(result, 'runFilters');
        }, errorFn)
        .then(function (result) {
          return resultFn(result, 'runColumnsNames');
        }, errorFn)
        .then(function (result) {
          return resultFn(result, 'runDefaultSort');
        }, errorFn)
        .then(function (result) {
          return resultFn(result, 'runAppeals');
        }, errorFn);
      function resultFn(result, methodName) {
        if (result && result.status === 'success') {
          if (methodName === 'runPredefinedFilters') {
            if (!self.defaultProfile) return;
            data.data.profileid = self.defaultProfile.id;
          }
          if (methodName === 'runAppeals') {
            var predefinedFilter = self.predefinedActive
              ? self.predefinedActive.id
              : undefined;
            data.data.startIndex = 0;
            data.data.maxCountPerRequest = self.maxCountPerRequest;
            data.data.predefinedFilter = predefinedFilter;
            data.data.filters = self.filters;
            data.data.columnSort = self.sort.columnSort;
            data.data.sortType = self.sort.sortType;
            self[methodName](data, null, self.increaseAppealsCounter());
          } else {
            return self[methodName](data);
          }
        } else if (result && result.status === 'error') {
          self.showError({
            error: result.errors[0],
          });
        }
      }
      function errorFn(error) {
        console.log(error);
      }
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
  var AppealInbox = /*#__PURE__*/ (function () {
    function AppealInbox(rootNode, options) {
      babelHelpers.classCallCheck(this, AppealInbox);
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
    babelHelpers.createClass(AppealInbox, [
      {
        key: 'run',
        value: function run() {
          var self = this;
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Appeal new change form component',
              components: {
                Application: Application,
              },
              template: '<Application/>',
              computed: {
                localize: function localize() {
                  return this.$Bitrix.Loc.getMessages();
                  // return BitrixVue.getFilteredPhrases('APPEAL_INBOX_');
                },
              },
              beforeMount: function beforeMount() {
                dataStore().userid = self.options.userid || '';
                dataStore().sessid = self.options.sessid || '';
                dataStore().signedParameters =
                  self.options.signedParameters || '';
                profileStore().actions = {
                  profiles: {
                    component: 'twinpx:journal.vue',
                    method: 'profiles',
                  },
                  setDefaultProfile: {
                    component: 'twinpx:journal.vue',
                    method: 'setDefaultProfile',
                  },
                };
                profileStore().localize = this.localize;
                predefinedStore().actions = {
                  predefinedFilters: {
                    component: 'twinpx:journal.vue',
                    method: 'predefinedFilters',
                  },
                  exportFile: {
                    component: 'twinpx:journal.vue',
                    method: 'exportFile',
                  },
                };
                predefinedStore().localize = this.localize;
                filterStore().filterCols = ['1', '1', '1', '1'];
                filterStore().actions = {
                  filters: {
                    component: 'twinpx:journal.vue',
                    method: 'filters',
                  },
                };
                filterStore().localize = this.localize;
                tableStore().tableCols = ['auto', '20%', '20%', '20%', '100px'];
                tableStore().maxCountPerRequest =
                  self.options.maxCountPerRequest || 50;
                tableStore().actions = {
                  columnsNames: {
                    component: 'twinpx:journal.vue',
                    method: 'columnsNames',
                  },
                  appeals: {
                    component: 'twinpx:journal.vue',
                    method: 'appeals',
                  },
                  defaultSort: {
                    component: 'twinpx:journal.vue',
                    method: 'defaultSort',
                  },
                  setDefaultSort: {
                    component: 'twinpx:journal.vue',
                    method: 'setDefaultSort',
                  },
                };
                tableStore().localize = this.localize;
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
    ]);
    return AppealInbox;
  })();

  exports.AppealInbox = AppealInbox;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.AAS,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
