/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_docComponent,ui_vue3_pinia) {
  'use strict';

  var CandidateComponent = {
    data: function data() {
      return {
        print: false
      };
    },
    props: ['lang', 'groups', 'candidate'],
    emits: ['printGroup'],
    components: {
      DocComponent: local_vueComponents_docComponent.DocComponent
    },
    template: "\n        <h2 v-if=\"group && print\">{{ group.title }}</h2>\n        <div class=\"twpx-poll-candidates-item\" v-if=\"candidate\">\n            <div class=\"twpx-poll-candidates-item__info\">\n                <a :href=\"candidate.url\" class=\"twpx-poll-candidates-item__img\">\n                    <img :src=\"candidate.img\" :alt=\"candidate.name\">\n                </a>\n                <div class=\"twpx-poll-candidates-item__text\">\n                    <h3 v-if=\"candidate.name\">\n                        <a :href=\"candidate.url\">{{ candidate.name }}</a>\n                    </h3>\n                    <div class=\"twpx-poll-candidates-item__description\" v-if=\"candidate.description\" v-html=\"candidate.description\"></div>\n                </div>\n            </div>\n            <div class=\"twpx-poll-candidates-item__docs\">\n                <DocComponent v-for=\"doc in candidate.docs\" :key=\"doc.id\"  :doc=\"doc\" />\n            </div>\n        </div>\n    ",
    computed: {
      group: function group() {
        var _this = this;
        return this.groups.find(function (g) {
          return String(g.id) === String(_this.candidate.group);
        });
      }
    },
    beforeMount: function beforeMount() {
      if (this.group && !this.group.printed) {
        this.print = true;
        this.$emit('printGroup', this.group);
      }
    }
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        customData: {},
        signedParameters: '',
        lang: {},
        actions: [],
        groups: [],
        candidates: []
      };
    },
    actions: {
      printGroup: function printGroup(group) {
        group.printed = true;
      },
      changeProp: function changeProp(prop, value) {
        this[prop] = value;
      },
      runBitrixMethod: function runBitrixMethod(method, data, formData) {
        if (method === 'getGroups') {
          return Promise.resolve({
            status: 'success',
            data: [{
              id: 1,
              title: '��������� � ����������� �����'
            }, {
              id: 2,
              title: '��������� �� ����������� ����������� �� ���������� �����'
            }]
          });
        }
        if (method === 'getCandidates') {
          return Promise.resolve({
            status: 'success',
            data: [{
              id: 'candidateId1',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: '������ ���� ��������',
              url: "/person/19891/",
              description: '������������� �������� � 10-������ ������, ��������������� ������ �� SEO, �������-���������� � SMM ��� ������ � �������� �������. �� �������� �� ���� ������ � �� �� ���������, ���� ������� ������� �� �������������� � ������ � ������������� ��������.',
              docs: [{
                id: 'doc1',
                name: "������ ������� ����� ���������",
                href: "/pages/�������� ��������� �������������� �������� 234.pdf",
                size: 512000,
                date: "22 ������� 2021",
                author: "�������� ������ ����������",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc2',
                name: "������ ������� ����� ���������",
                href: "/pages/�������� ��������� �������������� �������� 234.pdf",
                size: 512000,
                date: "22 ������� 2021",
                author: "�������� ������ ����������",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId2',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: '������� ������� ���������',
              url: "/person/19891/",
              description: 'IT-�������� � 5-������ ������, ������������������ �� ���������� ��������� ���������� � ���-��������. ���� ������� �������� �������� � ������� ����������, �� ���������� �������������� ������� ��� ����� ������.',
              docs: [{
                id: 'doc3',
                name: "������ �������� ������� ����������",
                href: "/pages/�������� ��������� �������������� �������� 234.docx",
                size: 1200000,
                date: "10 ����� 2022",
                author: "������ ����� ����������",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc4',
                name: "������ �������� ������� ����������",
                href: "/pages/�������� ��������� �������������� �������� 234.docx",
                size: 512000,
                date: "10 ����� 2022",
                author: "������ ����� ����������",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId3',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: '�������� ������� ����������',
              url: "/person/19891/",
              description: '�������������� �������� � 20-������ ������ � ������� ���������� � ����������� ����������������. �� �������� �������� �������� ������������� � �������������� � ���������� �� �����.',
              docs: [{
                id: 'doc5',
                name: "������ ��������� ������� �����������",
                href: "/pages/�������� ��������� �������������� �������� 234.docx",
                size: 700000,
                date: "5 ������ 2023",
                author: "�������� ������� ���������",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc6',
                name: "������ ��������� ������� �����������",
                href: "/pages/�������� ��������� �������������� �������� 234.docx",
                size: 700000,
                date: "5 ������ 2023",
                author: "�������� ������� ���������",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId4',
              group: 2,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: '������� ����� ���������',
              url: "/person/19891/",
              description: '������������ �������� � 30-������ ������, ������� ���������� � ����� ������ � ������������� �������������. �� ����������� ������� �������� � ���������� ������ ���������� �����.',
              docs: [{
                id: 'doc7',
                name: "������ �������� ������ ����������",
                href: "/pages/�������� ��������� �������������� �������� 234.pdf",
                size: 1512000,
                date: "15 ��� 2023",
                author: "����� ������ ������������",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc8',
                name: "������ �������� ������ ����������",
                href: "/pages/�������� ��������� �������������� �������� 234.pdf",
                size: 1512000,
                date: "15 ��� 2023",
                author: "����� ������ ������������",
                icon: "/template/images/pdf.svg"
              }]
            }]
          });
        }
        return Promise.reject({
          status: 'error',
          errors: [{
            message: 'Error'
          }]
        });
        var action = this.actions[method];
        if (!action || !Array.isArray(action) || action.length < 2) {
          return Promise.reject({
            code: 'UNKNOWN_METHOD',
            message: "Unknown action mapping for method: ".concat(method)
          });
        }

        // ������� payload ��� ���� data
        var payload;
        if (formData instanceof FormData) {
          payload = formData;
          // ��������� customData
          if (this.customData && babelHelpers["typeof"](this.customData) === 'object') {
            Object.entries(this.customData).forEach(function (_ref) {
              var _ref2 = babelHelpers.slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              if (value !== undefined && value !== null) {
                payload.append(key, value);
              }
            });
          }
        } else {
          payload = _objectSpread(_objectSpread({}, this.customData), data || {});
        }
        var requestPromise = BX.ajax.runComponentAction(action[0], action[1], {
          mode: 'class',
          data: payload,
          signedParameters: this.signedParameters
        });

        // �������: 20 ������
        var TIMEOUT_MS = 20000;
        var timeoutId;
        var timeoutPromise = new Promise(function (_, reject) {
          timeoutId = setTimeout(function () {
            reject({
              code: 'TIMEOUT',
              message: '��������� ����� �������� ������ (20�).'
            });
          }, TIMEOUT_MS);
        });

        // ���������� ������, ����������� � .then(success, error)
        return Promise.race([requestPromise, timeoutPromise])["finally"](function () {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
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
      CandidateComponent: CandidateComponent
    },
    template: "\n    <div v-if=\"groups && candidates\" class=\"twpx-poll-candidates\">\n      <CandidateComponent v-for=\"candidate in candidates\"\n        :key=\"candidate.id\"\n        :lang=\"lang\"\n        :groups=\"groups\"\n        :candidate=\"candidate\"\n        @printGroup=\"printGroup\"\n      />\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'groups', 'candidates'])),
    methods: _objectSpread$1({}, ui_vue3_pinia.mapActions(dataStore, ['runBitrixMethod', 'changeProp', 'printGroup'])),
    mounted: function mounted() {
      var _this = this;
      this.runBitrixMethod('getGroups', {}).then(function (response) {
        console.log(response);
        _this.changeProp('groups', response.data);
      }, function (error) {});
      this.runBitrixMethod('getCandidates', {}).then(function (response) {
        console.log(response);
        _this.changeProp('candidates', response.data);
      }, function (error) {});
    }
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var PollCandidates = /*#__PURE__*/function () {
    function PollCandidates(rootNode, options) {
      babelHelpers.classCallCheck(this, PollCandidates);
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
    babelHelpers.createClass(PollCandidates, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'PollCandidates',
          components: {
            Application: Application
          },
          template: '<Application/>',
          mounted: function mounted() {
            dataStore().customData = self.options.data || {};
            dataStore().signedParameters = self.options.signedParameters || '';
            dataStore().lang = self.options.lang || {};
            dataStore().actions = self.options.actions || [];
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
    return PollCandidates;
  }();

  exports.PollCandidates = PollCandidates;

}((this.BX = this.BX || {}),BX,BX.AAS,BX));
//# sourceMappingURL=application.bundle.js.map
