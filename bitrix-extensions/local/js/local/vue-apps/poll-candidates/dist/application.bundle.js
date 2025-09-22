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
              title: 'Кандидаты в назависимые члены'
            }, {
              id: 2,
              title: 'Кандидаты от аудиторских организаций на финансовом рынке'
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
              name: 'Петров Петр Петрович',
              url: "/person/19891/",
              description: 'Маркетинговая компания с 10-летним опытом, предоставляющая услуги по SEO, контент-маркетингу и SMM для малого и среднего бизнеса. Мы работаем по всей России и за ее пределами, наша команда состоит из профессионалов с опытом в международных проектах.',
              docs: [{
                id: 'doc1',
                name: "Резюме Петрова Петра Петровича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                size: 512000,
                date: "22 февраля 2021",
                author: "Васильев Виктор Степанович",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc2',
                name: "Резюме Петрова Петра Петровича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                size: 512000,
                date: "22 февраля 2021",
                author: "Васильев Виктор Степанович",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId2',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Сидоров Алексей Сергеевич',
              url: "/person/19891/",
              description: 'IT-компания с 5-летним опытом, специализирующаяся на разработке мобильных приложений и веб-сервисов. Наши клиенты включают стартапы и крупные корпорации, мы предлагаем индивидуальные решения под любой проект.',
              docs: [{
                id: 'doc3',
                name: "Резюме Сидорова Алексея Сергеевича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                size: 1200000,
                date: "10 марта 2022",
                author: "Беляев Артем Викторович",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc4',
                name: "Резюме Сидорова Алексея Сергеевича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                size: 512000,
                date: "10 марта 2022",
                author: "Беляев Артем Викторович",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId3',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Николаев Николай Николаевич',
              url: "/person/19891/",
              description: 'Консалтинговая компания с 20-летним опытом в области управления и финансового консультирования. Мы помогаем бизнесам повышать эффективность и адаптироваться к изменениям на рынке.',
              docs: [{
                id: 'doc5',
                name: "Резюме Николаева Николая Николаевича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                size: 700000,
                date: "5 апреля 2023",
                author: "Кузнецов Дмитрий Сергеевич",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc6',
                name: "Резюме Николаева Николая Николаевича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                size: 700000,
                date: "5 апреля 2023",
                author: "Кузнецов Дмитрий Сергеевич",
                icon: "/template/images/pdf.svg"
              }]
            }, {
              id: 'candidateId4',
              group: 2,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Семенов Семен Семенович',
              url: "/person/19891/",
              description: 'Строительная компания с 30-летним опытом, активно работающая в сфере жилого и коммерческого строительства. Мы гарантируем высокое качество и соблюдение сроков выполнения работ.',
              docs: [{
                id: 'doc7',
                name: "Резюме Семенова Семена Семеновича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                size: 1512000,
                date: "15 мая 2023",
                author: "Орлов Сергей Владимирович",
                icon: "/template/images/pdf.svg"
              }, {
                id: 'doc8',
                name: "Резюме Семенова Семена Семеновича",
                href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                size: 1512000,
                date: "15 мая 2023",
                author: "Орлов Сергей Владимирович",
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

        // Готовим payload для поля data
        var payload;
        if (formData instanceof FormData) {
          payload = formData;
          // Добавляем customData
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

        // Таймаут: 20 секунд
        var TIMEOUT_MS = 20000;
        var timeoutId;
        var timeoutPromise = new Promise(function (_, reject) {
          timeoutId = setTimeout(function () {
            reject({
              code: 'TIMEOUT',
              message: 'Превышено время ожидания ответа (20с).'
            });
          }, TIMEOUT_MS);
        });

        // Возвращаем промис, совместимый с .then(success, error)
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
