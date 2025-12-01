/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_pinia) {
    'use strict';

    var dataStore = ui_vue3_pinia.defineStore('data', {
      state: function state() {
        return {
          command: '',
          params: {},
          extra: {}
        };
      },
      actions: {
        changeProp: function changeProp(prop, value) {
          this[prop] = value;
        }
      }
    });

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    var Application = {
      template: "\n      <div class=\"twpx-voting-client__header\">\n          <img width=\"62\" height=\"54\" alt=\"\u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u043E\u0432 \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \xAB\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\xBB\" src=\"/local/templates/aas/images/logo-aas-small.svg\">\n      </div>\n\n      <div class=\"twpx-voting-members twpx-voting-client-block\">\n\n        <div class=\"twpx-voting-members-content\">\n\n          <h1>\u0421\u044A\u0435\u0437\u0434 \u0421\u0420\u041E \u0410\u0410\u0421 2025</h1>\n\n          <div class=\"twpx-voting-members-grid\">\n            <div class=\"twpx-voting-members-column\">\n              <div class=\"twpx-voting-members-column-header\">\n                <h2>\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C</h2>\n                <div class=\"twpx-voting-members-counter\">\n                  <div class=\"twpx-voting-members-num\">{{ registeredNum }}</div>\n                  <div class=\"twpx-voting-members-percent\">{{ registeredPercent }}%</div>\n                </div>\n              </div>\n              <div class=\"twpx-voting-members-list\">\n                <div v-for=\"delegate in params.registered\" :key=\"delegate\">{{ delegate }}</div>\n              </div>\n            </div>\n            <div class=\"twpx-voting-members-column\">\n              <div class=\"twpx-voting-members-column-header\">\n                <h2>\u041D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C</h2>\n                <div class=\"twpx-voting-members-counter\">\n                  <div class=\"twpx-voting-members-num\">{{ notRegisteredNum }}</div>\n                  <div class=\"twpx-voting-members-percent\">{{ notRegisteredPercent }}%</div>\n                </div>\n              </div>\n              <div class=\"twpx-voting-members-list\">\n                <div v-for=\"delegate in params.notRegistered\" :key=\"delegate\">{{ delegate }}</div>\n              </div>\n          </div>\n\n        </div>\n\n      </div>\n    ",
      computed: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra'])), {}, {
        registeredNum: function registeredNum() {
          var _this$params, _this$params$register;
          return ((_this$params = this.params) === null || _this$params === void 0 ? void 0 : (_this$params$register = _this$params.registered) === null || _this$params$register === void 0 ? void 0 : _this$params$register.length) || 0;
        },
        notRegisteredNum: function notRegisteredNum() {
          var _this$params2, _this$params2$notRegi;
          return ((_this$params2 = this.params) === null || _this$params2 === void 0 ? void 0 : (_this$params2$notRegi = _this$params2.notRegistered) === null || _this$params2$notRegi === void 0 ? void 0 : _this$params2$notRegi.length) || 0;
        },
        registeredPercent: function registeredPercent() {
          var total = this.registeredNum + this.notRegisteredNum;
          return total ? Math.round(this.registeredNum * 100 / total) : 0;
        },
        notRegisteredPercent: function notRegisteredPercent() {
          var total = this.registeredNum + this.notRegisteredNum;
          return total ? Math.round(this.notRegisteredNum * 100 / total) : 0;
        }
      }),
      methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp'])), {}, {
        subscribe: function subscribe() {
          var _this = this;
          if (window.BX && BX.ready) {
            BX.ready(function () {
              BX.PULL.subscribe({
                moduleId: 'voting',
                callback: function (data) {
                  if (data.command.startsWith('delegates')) {
                    _this.changeProp('command', data.command);
                    _this.changeProp('params', data.params);
                    _this.changeProp('extra', data.extra);
                  }
                  console.log('Command:', data.command);
                  console.log('Params:', data.params);
                  console.log('Extra:', data.extra);
                }.bind(this)
              });
              BX.PULL.extendWatch('VOTING-DELEGATES'); /* код голосование для уникальность */
            });
          }
        }
      }),
      mounted: function mounted() {
        this.subscribe();
      }
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
    var _store = /*#__PURE__*/new WeakMap();
    var _rootNode = /*#__PURE__*/new WeakMap();
    var _application = /*#__PURE__*/new WeakMap();
    var VotingDelegates = /*#__PURE__*/function () {
      function VotingDelegates(rootNode, options) {
        babelHelpers.classCallCheck(this, VotingDelegates);
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
      babelHelpers.createClass(VotingDelegates, [{
        key: "run",
        value: function run() {
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'VotingScreen',
            components: {
              Application: Application
            },
            template: '<Application />'
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
      return VotingDelegates;
    }();

    exports.VotingDelegates = VotingDelegates;

}((this.BX = this.BX || {}),BX,BX));
//# sourceMappingURL=application.bundle.js.map
