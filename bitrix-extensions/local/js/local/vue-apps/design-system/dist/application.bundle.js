/* eslint-disable */
(function (
  exports,
  ui_vue3,
  local_vueComponents_controlComponent,
  ui_vue3_pinia
) {
  'use strict';

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        controls: [
          {
            id: 'id1',
            property: 'text',
            name: 'NUM',
            label: 'Case number',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id2',
            property: 'tel',
            name: 'NUM',
            label: 'Phone number',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id3',
            property: 'email',
            name: 'NUM',
            label: 'Your email',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id4',
            property: 'hidden',
            name: 'NUM',
            value: '',
            required: false,
            disabled: false,
          },
          {
            property: 'hint',
            id: 'id5',
            name: 'OBJECT',
            label: 'ORNZ',
            value: '',
            count: 3,
            action: 'twinpx:ornz-hint',
            required: false,
            disabled: false,
          },
          {
            property: 'password',
            id: 'id6',
            name: 'PASSWORD',
            label: 'Password',
            value: '',
            required: false,
            disabled: false,
          },
          {
            property: 'date',
            type: 'range',
            id: 'id7',
            label: 'Calendar',
            name: 'DATE',
            required: true,
            value: ['20.02.2024', '28.02.2024'],
          },
          {
            property: 'date',
            type: 'single',
            id: 'id8',
            label: 'Calendar',
            name: 'DATE',
            required: true,
            value: '28.02.2024',
            hint_external: 'Hint',
            dependency: 'id6',
          },
          {
            property: 'select',
            type: 'radio',
            id: 'id9',
            name: 'SELECT_BUTTON_TEXT',
            label: 'Buttons',
            options: [
              {
                label: 'Thin',
                code: '1',
              },
              {
                label: 'Thick',
                code: '2',
              },
              {
                label: 'Uppercase',
                code: '3',
              },
            ],
            value: '2',
          },
          {
            property: 'checkbox',
            type: 'checkbox',
            id: 'id10',
            name: 'DEPENDENCY_CHECKBOX',
            required: false,
            label: 'Checkbox',
            value: 'on',
            checked: true,
            disabled: false,
            hint_external: 'Active checkbox',
          },
          {
            property: 'file',
            id: 'id11',
            name: 'FILE_LOGO',
            label: 'Logo',
            value: '',
            file: '',
            hint_external: 'For your site',
            required: true,
            disabled: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            multi: 5,
            maxsize: 10000000,
          },
          {
            property: 'file',
            type: 'upload',
            id: 'id12',
            name: 'FILE_LOGO',
            label: 'Upload logo',
            value: null,
            upload: {},
            hint_external: 'For your site',
            required: true,
            disabled: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 10000000,
          },
          {
            property: 'select',
            type: 'dropdown',
            id: 'id13',
            name: 'STATUS',
            label: 'Status',
            options: [
              {
                label: 'molestias',
                code: '23423423423',
              },
              {
                label: 'Farming',
                code: '324234324',
              },
              {
                label: 'Very',
                code: '324234325',
              },
            ],
            value: '',
            disabled: false,
          },
          {
            property: 'checkbox',
            type: 'switch',
            id: 'id14',
            name: 'SWITCH',
            required: false,
            label: 'labore',
            value: 'on',
            checked: true,
            disabled: false,
            hint_external: '',
            dependency: 'id6',
          },
        ],
      };
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
    },
    // language=Vue

    template:
      '\n    <div>\n      <div v-for="control in controls" :key="control.id">\n        <h3>{{ control.property }} {{ control.type }}</h3>\n        <ControlComponent :control="control" />\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      {},
      ui_vue3_pinia.mapState(dataStore, ['controls'])
    ),
    methods: _objectSpread({}, ui_vue3_pinia.mapActions(dataStore, [])),
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
  var DesignSystem = /*#__PURE__*/ (function () {
    function DesignSystem(rootNode, options) {
      babelHelpers.classCallCheck(this, DesignSystem);
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
    babelHelpers.createClass(DesignSystem, [
      {
        key: 'run',
        value: function run() {
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Design System Application',
              components: {
                Application: Application,
              },
              template: '<Application/>',
              mounted: function mounted() {},
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
    return DesignSystem;
  })();

  exports.DesignSystem = DesignSystem;
})((this.BX = this.BX || {}), BX.Vue3, BX.Controls, BX.Vue3.Pinia); //# sourceMappingURL=application.bundle.js.map
