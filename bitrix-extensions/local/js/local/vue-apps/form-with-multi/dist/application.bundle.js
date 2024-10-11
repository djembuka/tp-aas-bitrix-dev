/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_controlComponent,
  local_vueComponents_controlMulti,
  local_vueComponents_controlSubcontrol,
  ui_vue3_pinia
) {
  'use strict';

  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        loadingControls: false,
        actions: {},
        controls: [],
      };
    },
    actions: {
      createMulti: function createMulti(_ref) {
        var parent = _ref.parent;
        parent.property = 'multi';
        parent.multi = [];
      },
      addMulti: function addMulti(_ref2) {
        var parent = _ref2.parent,
          add = _ref2.add;
        parent.multi.push(add);
      },
      removeMulti: function removeMulti(_ref3) {
        var parent = _ref3.parent,
          index = _ref3.index;
        parent.multi.splice(index, 1);
      },
      changeTextControlValue: function changeTextControlValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        console.log(control, value);
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref7) {
        var control = _ref7.control,
          value = _ref7.value;
        control.value = value;
      },
      changeControlValue: function changeControlValue(_ref8) {
        var control = _ref8.control,
          value = _ref8.value,
          checked = _ref8.checked;
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
      runControls: function runControls(data, callback) {
        var _this = this;
        this.loadingControls = true;
        var a = window.BX.ajax.runComponentAction(this.actions.controls, data);
        var state = this;
        a.then(
          function (result) {
            _this.loadingControls = false;
            resultFn(state, result);
          },
          function (error) {
            _this.loadingControls = false;
            if (
              window.twinpx &&
              window.twinpx.vue.markup &&
              window.twinpx.vue['form-with-multi']
            ) {
              resultFn(state, window.twinpx.vue['form-with-multi'].controls);
            }
          }
        );
        function resultFn(state, data) {
          state.controls = data;
          if (callback) {
            callback();
          }
        }
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
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ControlMulti: local_vueComponents_controlMulti.ControlMulti,
      ControlSubcontrol:
        local_vueComponents_controlSubcontrol.ControlSubcontrol,
    },
    // language=Vue

    template:
      '\n    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">\n      <form action="">\n        <div v-for="control in controls" :key="control.id">\n\n          <ControlMulti v-if="control.multi" :parent="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"></ControlMulti>\n\n          <ControlSubcontrol v-else-if="control.sub" :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>\n\n          <ControlComponent v-else :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints"/>\n\n          <hr>\n          \n        </div>\n      </form>\n      <pre style="font-size: 9pt;">{{controls}}</pre>\n    </div>\n\t',
    computed: _objectSpread(
      {},
      ui_vue3_pinia.mapState(formStore, ['loadingControls', 'controls'])
    ),
    methods: _objectSpread(
      _objectSpread(
        {},
        ui_vue3_pinia.mapActions(formStore, [
          'runControls',
          'changeControlValue',
          'createMulti',
          'addMulti',
          'removeMulti',
        ])
      ),
      {},
      {
        input: function input(_ref) {
          var control = _ref.control,
            value = _ref.value,
            checked = _ref.checked;
          this.changeControlValue({
            control: control,
            value: value,
            checked: checked,
          });
        },
        focus: function focus() {
          console.log('focus');
        },
        blur: function blur() {
          console.log('blur');
        },
        enter: function enter() {
          console.log('enter');
        },
      }
    ),
    mounted: function mounted() {
      this.runControls({
        signedParameters: this.signedParameters,
        sessionid: this.sessionid,
      });
    },
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: '',
      };
    },
  });

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
  var FormWithMulti = /*#__PURE__*/ (function () {
    function FormWithMulti(rootNode, options) {
      babelHelpers.classCallCheck(this, FormWithMulti);
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
    babelHelpers.createClass(FormWithMulti, [
      {
        key: 'run',
        value: function run() {
          var self = this;
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Form with multi control Application',
              components: {
                Application: Application,
              },
              template: '<Application/>',
              mounted: function mounted() {
                dataStore().sessionid = self.options.SESSION_ID || '';
                dataStore().signedParameters =
                  self.options.SIGNED_PARAMETERS || '';
                formStore().actions = {
                  controls: self.options.controls || [],
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
        key: 'getFormStore',
        value: function getFormStore() {
          return formStore;
        },
      },
    ]);
    return FormWithMulti;
  })();

  exports.FormWithMulti = FormWithMulti;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.Controls,
  BX.Controls,
  BX.Controls,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
