/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,ui_vue3_pinia) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
            sub.push(_objectSpread({}, s));
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

  var HiddenFields = {
    data: function data() {
      return {};
    },
    props: ['hidden'],
    template: "\n    <div>\n      <input v-for=\"field in hidden\" :key=\"generateKey()\" type=\"hidden\" :name=\"field.name\" :value=\"field.value\">\n    </div>\n  ",
    methods: {
      generateKey: function generateKey() {
        return Date.now() * Math.random();
      }
    }
  };

  var DocsBlock = {
    data: function data() {
      return {};
    },
    props: ['docsBlock'],
    template: "\n    <div>\n      <h2 v-if=\"docsBlock.title\">{{docsBlock.title}}</h2>\n      <p v-if=\"docsBlock.text\" v-html=\"docsBlock.text\"></p>\n      <div class=\"b-docs-block\" v-if=\"docsBlock && docsBlock.items.length\">\n        <div class=\"b-docs-block__item\" href=\"/pages/news/\" v-for=\"(item, index) in docsBlock.items\" :key=\"item.id\">\n          <hr v-if=\"index !== 0\">\n          <div class=\"b-docs-block__body\">\n            <a class=\"b-docs-block__icon\" :href=\"item.url\" :style=\"'background-image: url( ' + item.icon + ' );'\"></a>\n            <span class=\"b-docs-block__text\">\n              <a :href=\"item.url\">{{item.title}}</a>\n              <span class=\"b-docs-block__data\" v-if=\"item.data.length\">\n                <span class=\"text-muted\" v-for=\"data in item.data\" :key=\"data\">{{data}}</span>\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
  };

  var DataToChange = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice
    },
    props: ['controlsBlock'],
    template: "\n  <div>\n    <h2>{{ controlsBlock.title }}</h2>\n    <p v-html=\"controlsBlock.text\"></p>\n    <hr class=\"hr--sl\">\n    <div v-for=\"(formControl, controlIndex) in controlsBlock.controls\" :key=\"formControl.id\">\n\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-6 col-12\">\n          <ControlChoice :control=\"formControl\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n        </div>\n        <hr class=\"hr--xs d-block d-lg-none w-100\">\n        <div class=\"col-lg-6 col-12 small\">\n          <div v-if=\"formControl.completeBlock && formControl.completeBlock.comment\" class=\"text-muted b-complete-comment\">{{formControl.completeBlock.comment}}</div>\n        </div>\n      </div>\n\n      <hr class=\"hr--sl\">\n\n    </div>\n  </div>\n  ",
    emits: ['autosave', 'timeoutAutosave'],
    methods: {
      autosave: function autosave() {
        this.$emit('autosave');
      },
      timeoutAutosave: function timeoutAutosave() {
        this.$emit('timeoutAutosave');
      },
      create: function create(args) {
        this.$emit('create', args);
      },
      add: function add(args) {
        this.$emit('add', args);
      },
      remove: function remove(args) {
        this.$emit('remove', args);
      },
      input: function input(args) {
        this.$emit('input', args);
      },
      focus: function focus() {
        this.$emit('focus', args);
      },
      blur: function blur() {
        this.$emit('blur', args);
      },
      enter: function enter() {
        this.$emit('enter', args);
      }
    }
  };

  var ConfirmDocsBlock = {
    props: ['confirmDocsBlock'],
    template: "\n    <div>\n\n      <h2 v-if=\"confirmDocsBlock.title\">{{ confirmDocsBlock.title }}</h2>\n\n      <p v-if=\"confirmDocsBlock.items.length !== 1 && confirmDocsBlock.text\" v-html=\"confirmDocsBlock.text\"></p>\n\n      <div v-for=\"(doc, index) in confirmDocsBlock.items\">\n        File\n        <hr>\n      </div>\n\n    </div>"
  };

  var SubmitButton = {
    data: function data() {
      return {};
    },
    props: ['agreement', 'controlsBlock', 'confirmDocsFlag'],
    emits: ['bitrixLogs'],
    template: "\n    <div v-if=\"agreement\">\n      <div class=\"b-checkbox\" id=\"agreement\" :class=\"{invalid: agreement.invalid}\">\n        <label>\n          <input class=\"filled-in\" type=\"checkbox\" required=\"\" :name=\"agreement.name\" :value=\"agreement.value\" :checked=\"checked\" v-model=\"checked\"><span v-html=\"agreement.text\"></span>\n        </label>\n      </div>\n      <hr class=\"hr--lg\">\n      <div class=\"b-appeal-new-change-form__submit\">\n        <a href=\"#\" class=\"btn btn-secondary btn-lg\" data-toggle=\"modal\" data-target=\"#submitConfirmModal\" :disabled=\"isDisabled\" @click=\"clickSubmit($event)\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</a>\n        <small class=\"text-muted\" v-if=\"isDisabled\">\u0412\u044B \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043B\u0435\u0439. <a href=\"#\" @click.prevent=\"clickContinue\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</a></small>\n      </div>\n    </div>\n  ",
    watch: {
      checked: function checked(val) {
        this.$emit('bitrixLogs', {
          id: 12,
          message: "".concat(this.agreement.text, ": ").concat(val)
        });
      }
    },
    computed: {
      checked: function checked() {
        return this.agreement ? this.agreement.checked : false;
      },
      isDisabled: function isDisabled() {
        //controls
        var controlsFlag = true;
        var controlsPatternFlag = true;
        if (this.controlsBlock && this.controlsBlock.controls) {
          //required
          var requiredControls = this.controlsBlock.controls.filter(function (control) {
            return control.required;
          });
          controlsFlag = requiredControls.every(function (control) {
            if (control.multy) {
              return control.value.every(function (value) {
                return value.val !== '';
              });
            } else {
              return control.value !== '';
            }
          });
          //width pattern
          var patternControls = this.controlsBlock.controls.filter(function (control) {
            return control.pattern;
          });
          controlsPatternFlag = patternControls.every(function (control) {
            if (control.multy) {
              return control.value.every(function (value) {
                return value.val === '' || new RegExp(control.pattern, 'ig').test(value.val);
              });
            } else {
              return control.value === '' || new RegExp(control.pattern, 'ig').test(control.value);
            }
          });
        }

        //confirm docs
        var confirmDocsFlag = true;
        if (this.confirmDocsBlock && this.confirmDocsBlock.items) {
          var checked = this.confirmDocsBlock.items.find(function (item) {
            return item.checked === true;
          });
          var requiredConfirm = checked ? checked.controls.filter(function (control) {
            return control.required;
          }) : undefined;
          confirmDocsFlag = requiredConfirm ? requiredConfirm.every(function (control) {
            return control.value && babelHelpers["typeof"](control.value) === 'object' ? control.value.every(function (value) {
              return value.val !== '';
            }) : control.value !== '';
          }) : false;
        }

        //checkbox
        var checkboxFlag = this.checked;
        return !(controlsFlag && controlsPatternFlag && confirmDocsFlag && checkboxFlag);
      }
    },
    methods: {
      clickSubmit: function clickSubmit(e) {
        this.$emit('bitrixLogs', {
          id: 13,
          message: e.target.innerHTML
        });
      },
      clickContinue: function clickContinue() {
        var control = Array.from(document.querySelector('.b-appeal-new-change-form form').elements).find(function (elem) {
          var isRequired = elem.classList.contains('mx-input') ? elem.closest('.mx-datepicker').getAttribute('data-required') : elem.getAttribute('data-required');
          if (elem.getAttribute('type') === 'file' && !elem.closest('.b-form-control-vc').querySelector('input[type=radio]').checked) {
            isRequired = false;
          }
          var value = elem.getAttribute('type') === 'file' ? elem.getAttribute('data-value') : elem.value;
          var pattern = elem.getAttribute('data-pattern');
          if (pattern && value !== '') {
            return !new RegExp(pattern, 'ig').test(value);
          } else {
            return isRequired && elem.tagName.toLowerCase() !== 'button' && elem.getAttribute('type') !== 'hidden' && value === '';
          }
        });
        if (!control) return;
        if (control.closest('.b-float-label')) {
          control.closest('.b-float-label').classList.add('invalid');
        } else if (control.closest('.b-float-label--file')) {
          control.closest('.b-float-label--file').classList.add('invalid');
        }
        window.scrollTo({
          top: control.getBoundingClientRect().top + window.scrollY - 120,
          behavior: 'smooth'
        });
        setTimeout(function () {
          control.focus();
        }, 1000);
      }
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      HiddenFields: HiddenFields,
      DocsBlock: DocsBlock,
      DataToChange: DataToChange,
      ConfirmDocsBlock: ConfirmDocsBlock,
      SubmitButton: SubmitButton
    },
    // language=Vue

    template: "\n    <div>\n      <HiddenFields v-if=\"hidden\" :hidden=\"hidden\" />\n\n      <div v-if=\"docsBlock && docsBlock.items && docsBlock.items.length\">\n        <DocsBlock :docsBlock=\"docsBlock\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <div v-if=\"controlsBlock && controlsBlock.controls && controlsBlock.controls.length\">\n        <DataToChange :controlsBlock=\"controlsBlock\" @create=\"createMulti\" @add=\"addMulti\" @remove=\"removeMulti\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <div v-if=\"confirmDocsBlock && confirmDocsBlock.items && confirmDocsBlock.items.length\">\n        <ConfirmDocsBlock :confirmDocsBlock=\"confirmDocsBlock\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n        <hr class=\"hr--lg\">\n      </div>\n\n      <SubmitButton :agreement=\"agreement\" :controlsBlock=\"controlsBlock\" :confirmDocsBlock=\"confirmDocsBlock\" @bitrixLogs=\"bitrixLogs\" @timeoutAutosave=\"timeoutAutosave\" @autosave=\"autosave\" />\n\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(formStore, ['hidden', 'docsBlock', 'controlsBlock', 'confirmDocsBlock', 'autosaveTimeoutId', 'autosave', 'agreement', 'url'])),
    methods: _objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(formStore, ['bitrixLogs', 'runHintsAction', 'setHints', 'changeControlValue', 'createMulti', 'addMulti', 'removeMulti'])), {}, {
      hints: function hints(_ref) {
        var type = _ref.type,
          control = _ref.control,
          action = _ref.action,
          value = _ref.value;
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
      input: function input(_ref2) {
        var control = _ref2.control,
          value = _ref2.value,
          checked = _ref2.checked;
        this.changeControlValue({
          control: control,
          value: value,
          checked: checked
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
      }
    })
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        sessionid: '',
        signedParameters: ''
      };
    }
  });

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var AppealNewChangeForm = /*#__PURE__*/function () {
    function AppealNewChangeForm(rootNode, options) {
      babelHelpers.classCallCheck(this, AppealNewChangeForm);
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
    babelHelpers.createClass(AppealNewChangeForm, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'Appeal new change form component',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().sessionid = self.options.SESSION_ID || '';
            dataStore().signedParameters = self.options.SIGNED_PARAMETERS || '';
            formStore().hidden = self.options.data.hidden;
            formStore().docsBlock = self.options.data.docsBlock;
            formStore().controlsBlock = self.options.data.controlsBlock;
            formStore().confirmDocsBlock = self.options.data.confirmDocsBlock;
            formStore().autosaveTimeoutId = self.options.data.autosaveTimeoutId;
            formStore().autosave = self.options.data.autosave;
            formStore().agreement = self.options.data.agreement;
            formStore().url = self.options.data.url;
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
    return AppealNewChangeForm;
  }();

  exports.AppealNewChangeForm = AppealNewChangeForm;

}((this.BX = this.BX || {}),BX,BX.Controls,BX));
//# sourceMappingURL=application.bundle.js.map
