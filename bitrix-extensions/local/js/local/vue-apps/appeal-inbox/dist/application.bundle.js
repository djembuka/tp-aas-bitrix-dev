/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_profileChoice,ui_vue3_pinia) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        userid: '',
        sessid: '',
        signedParameters: ''
      };
    }
  });

  var profileStore = ui_vue3_pinia.defineStore('profile', {
    state: function state() {
      return {
        actions: {
          profiles: {}
        },
        profiles: [],
        profilesCounter: 0
      };
    },
    actions: {
      setDefaultProfile: function setDefaultProfile(_ref) {
        var id = _ref.id;
        if (this.profiles.length) {
          this.profiles.forEach(function (p) {
            p["default"] = p.id === id;
          });
        }
      },
      increaseProfilesCounter: function increaseProfilesCounter() {
        ++this.profilesCounter;
      },
      runProfiles: function runProfiles(data, callback) {
        var _this = this;
        this.loadingProfiles = true;
        var a = window.BX.ajax.runComponentAction(this.actions.profiles.component, this.actions.profiles.method, data);
        var state = this;
        a.then(function (result) {
          _this.loadingProfiles = false;
          resultFn(state, result.data);
        }, function (error) {
          _this.loadingProfiles = false;
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['appeal-inbox']) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].profiles);
          } else {
            _this.showError({
              error: error,
              method: 'profiles'
            });
          }
        });
        function resultFn(state, data) {
          state.profiles = data;
          if (callback) {
            callback();
          }
        }
      },
      runSetDefaultProfile: function runSetDefaultProfile(data, callback, counter) {
        var _this2 = this;
        console.log(counter);
        var a = window.BX.ajax.runComponentAction(this.actions.setDefaultProfile.component, this.actions.setDefaultProfile.method, data);
        var state = this;
        a.then(function (result) {
          resultFn(state, result.data);
        }, function (error) {
          if (window.twinpx && window.twinpx.vue.markup && window.twinpx.vue['appeal-inbox']) {
            resultFn(state, window.twinpx.vue['appeal-inbox'].setDefaultProfile);
          } else {
            _this2.showError({
              error: error,
              method: 'setDefaultProfile'
            });
          }
        });
        function resultFn(state, data) {
          if (counter === state.profilesCounter) {
            console.log(counter, state.profilesCounter);
            state.setDefaultProfile({
              id: data
            });
            if (callback) {
              callback();
            }
          }
        }
      },
      bitrixLogs: function bitrixLogs() {}
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  // import { HiddenFields } from './hidden-fields';

  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ProfileChoice: local_vueComponents_profileChoice.ProfileChoice
    },
    // language=Vue

    template: "\n    <ProfileChoice :profiles=\"profiles\" @clickProfile=\"clickProfile\" />\n\t",
    computed: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['userid', 'sessid', 'signedParameters'])), ui_vue3_pinia.mapState(profileStore, ['profiles', 'profilesCounter'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(profileStore, ['runProfiles', 'runSetDefaultProfile', 'setDefaultProfile', 'increaseProfilesCounter'])), {}, {
      clickProfile: function clickProfile(_ref) {
        var id = _ref.id;
        this.setDefaultProfile({
          id: id
        });
        this.increaseProfilesCounter();
        this.runSetDefaultProfile({
          mode: 'class',
          data: {
            userid: this.userid,
            sessid: this.sessid,
            profileid: id
          },
          signedParameters: this.signedParameters
        }, null, this.profilesCounter);
      }
    }),
    mounted: function mounted() {
      this.runProfiles({
        mode: 'class',
        data: {
          userid: this.userid,
          sessid: this.sessid
        },
        signedParameters: this.signedParameters
      }, function () {
        //predefined
        //filter
        //cols
        //appeals
      });
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        hidden: [],
        docsBlock: {},
        controlsBlock: {},
        confirmDocsBlock: {},
        autosaveTimeoutId: 0,
        autosave: 5000,
        agreement: {},
        url: {}
      };
    },
    actions: {
      bitrixLogs: function bitrixLogs(_ref) {
        var id = _ref.id,
          message = _ref.message;
        if (window.BX) {
          BX.ajax.post('/local/ajax/logs.php', {
            id: id,
            el: document.querySelector('input[name = "APPEAL_ID"]').value,
            message: message,
            level: 1
          }, function (result) {});
        }
      },
      createMulti: function createMulti(_ref2) {
        var parent = _ref2.parent;
        parent.property = 'multi';
        parent.multi = [];
      },
      addMulti: function addMulti(_ref3) {
        var parent = _ref3.parent,
          add = _ref3.add;
        var randomId = Math.round(Math.random() * 1000);
        var sub = [];
        if (add.sub && add.sub.forEach) {
          add.sub.forEach(function (s) {
            s.id = "".concat(s.id).concat(randomId);
            sub.push(_objectSpread$1({}, s));
          });
          add.sub = sub;
        }
        add.id = "".concat(add.id).concat(randomId);
        parent.multi.push(add);
      },
      removeMulti: function removeMulti(_ref4) {
        var parent = _ref4.parent,
          index = _ref4.index;
        parent.multi.splice(index, 1);
      },
      changeTextControlValue: function changeTextControlValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        console.log(control, value);
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref7) {
        var control = _ref7.control,
          value = _ref7.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref8) {
        var control = _ref8.control,
          value = _ref8.value;
        control.value = value;
      },
      changeControlValue: function changeControlValue(_ref9) {
        var control = _ref9.control,
          value = _ref9.value,
          checked = _ref9.checked;
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
      }
    }
  });

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var AppealInbox = /*#__PURE__*/function () {
    function AppealInbox(rootNode, options) {
      babelHelpers.classCallCheck(this, AppealInbox);
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
    babelHelpers.createClass(AppealInbox, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Appeal new change form component',
          components: {
            Application: Application
          },
          template: '<Application/>',
          beforeMount: function beforeMount() {
            dataStore().userid = self.options.userid || '';
            dataStore().sessid = self.options.sessid || '';
            dataStore().signedParameters = self.options.signedParameters || '';
            profileStore().actions = {
              profiles: self.options.profiles || {},
              setDefaultProfile: self.options.setDefaultProfile || {}
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
    return AppealInbox;
  }();

  exports.AppealInbox = AppealInbox;

}((this.BX = this.BX || {}),BX,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map
