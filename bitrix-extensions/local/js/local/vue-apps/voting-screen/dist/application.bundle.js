/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router,ui_vue3_pinia) {
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
    template: "\n        <router-view />\n    ",
    computed: _objectSpread({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra'])),
    methods: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapActions(dataStore, ['changeProp'])), {}, {
      subscribe: function subscribe() {
        var _this = this;
        if (window.BX && BX.ready) {
          BX.ready(function () {
            BX.PULL.subscribe({
              moduleId: 'voting',
              callback: function (data) {
                if (data.command.startsWith('voting')) {
                  _this.changeProp('command', data.command);
                  _this.changeProp('params', data.params);
                  _this.changeProp('extra', data.extra);
                  _this.$router.push("/".concat(_this.command));
                }
                console.log('Command:', data.command);
                console.log('Params:', data.params);
                console.log('Extra:', data.extra);
              }.bind(this)
            });
            BX.PULL.extendWatch('VOTING-RESULT'); /* код голосование для уникальность */
          });
        }
      }
    }),
    mounted: function mounted() {
      this.subscribe();
    }
  };

  var V1 = {
    // language=Vue
    template: "\n    <div class=\"twpx-voting-screen\">\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n      </div>      \n    </div>\n\t"
  };

  var StatusTimer = {
    props: ['command', 'params'],
    data: function data() {
      return {
        currentTime: 0,
        // оставшееся время в секундах
        timerInterval: null,
        isTimerRunning: false,
        startTime: null,
        // момент начала отсчета
        totalDuration: 0 // общая продолжительность в секундах
      };
    },

    template: "\n        <div style=\"display: grid; gap: 16px; justify-items: flex-end;\">\n            <div class=\"twpx-voting-screen__state-0\" v-if=\"command==='voting_v2'\">\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430</div>\n            \n            <div class=\"twpx-voting-screen__state-1\" v-else-if=\"command==='voting_v3'\">\n                <div class=\"twpx-voting-screen__status\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0434\u0435\u0442</div>\n                <div class=\"twpx-voting-screen__timer\">{{ formattedTime }}</div>\n            </div>\n            \n            <div class=\"twpx-voting-screen__state-1\" v-else-if=\"command==='voting_v4'\">\n                <div class=\"twpx-voting-screen__status\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E</div>\n                <div class=\"twpx-voting-screen__timer\">{{ formattedTime }}</div>\n            </div>\n            \n            <div class=\"twpx-voting-screen__state-2\" v-else-if=\"command==='voting_v5'\">\n                <div class=\"twpx-voting-screen__status\">\u0417\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043E</div>\n                <div class=\"twpx-voting-screen__timer\">00:00</div>\n            </div>\n            \n            <div class=\"twpx-voting-screen__state-3\" v-else-if=\"command==='voting_v6'\">\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432\u0435</div>\n        </div>\n    ",
    computed: {
      formattedTime: function formattedTime() {
        var minutes = Math.floor(this.currentTime / 60);
        var seconds = this.currentTime % 60;
        return "".concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
      }
    },
    watch: {
      command: {
        handler: function handler(newCommand) {
          if (newCommand === 'voting_v3') {
            this.initializeTimer();
          } else if (newCommand === 'voting_v4') {
            this.initializeStaticTimer();
          } else {
            this.stopTimer();
          }
        },
        immediate: true
      },
      params: {
        handler: function handler(newParams) {
          if ((this.command === 'voting_v3' || this.command === 'voting_v4') && newParams) {
            if (this.command === 'voting_v3') {
              this.initializeTimer();
            } else if (this.command === 'voting_v4') {
              this.initializeStaticTimer();
            }
          }
        },
        deep: true
      }
    },
    methods: {
      initializeTimer: function initializeTimer() {
        if (!this.params || !this.params.stateDate || !this.params.timer) {
          return;
        }

        // Парсим дату начала
        this.startTime = new Date(this.params.stateDate);
        this.totalDuration = parseInt(this.params.timer, 10);
        this.calculateRemainingTime();
        this.startTimer();
      },
      calculateRemainingTime: function calculateRemainingTime() {
        if (!this.startTime || !this.totalDuration) {
          return;
        }
        var now = new Date();
        var elapsedSeconds = Math.floor((now - this.startTime) / 1000);
        this.currentTime = Math.max(0, this.totalDuration - elapsedSeconds);
      },
      initializeStaticTimer: function initializeStaticTimer() {
        if (!this.params || !this.params.stateDate || !this.params.timer) {
          return;
        }

        // Парсим дату начала
        this.startTime = new Date(this.params.stateDate);
        this.totalDuration = parseInt(this.params.timer, 10);

        // Рассчитываем оставшееся время один раз
        this.calculateRemainingTime();

        // Останавливаем любой активный таймер
        this.stopTimer();
      },
      startTimer: function startTimer() {
        var _this = this;
        if (this.isTimerRunning) return;
        this.isTimerRunning = true;
        this.timerInterval = setInterval(function () {
          _this.currentTime--;

          // Останавливаем таймер когда достигли 0
          if (_this.currentTime <= 0) {
            _this.stopTimer();
            _this.currentTime = 0; // устанавливаем точно 0
          }
        }, 1000);
      },
      stopTimer: function stopTimer() {
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
        }
        this.isTimerRunning = false;
      }
    },
    beforeUnmount: function beforeUnmount() {
      this.stopTimer();
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var V2 = {
    components: {
      StatusTimer: StatusTimer
    },
    template: "\n    <div class=\"twpx-voting-screen\">\n\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n        <StatusTimer :command=\"command\" />\n      </div>\n      \n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">{{ params.title }}</div>\n        <div class=\"twpx-voting-screen__voting-description\">{{ params.description }}</div>\n      </div>\n\n      <div class=\"twpx-voting-screen__body\">\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-app\">\n          <div class=\"twpx-voting-screen__body-title\">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435<br>\u0434\u043B\u044F \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F</div>\n          <div class=\"twpx-voting-screen__body-content\">\n            <img :src=\"params.app\" alt=\"\" class=\"twpx-voting-screen__qr\" />\n          </div>\n        </div>\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-app\">\n          <div class=\"twpx-voting-screen__body-title\">\u0418\u043B\u0438 \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR</div>\n          <div class=\"twpx-voting-screen__body-content\">\n            <img :src=\"params.qr\" alt=\"\" class=\"twpx-voting-screen__qr\" />\n          </div>\n        </div>\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra']))
  };

  var GraphComponent = {
    props: ['votedNum', 'votedPercentage', 'notVotedNum', 'notVotedPercentage'],
    template: "\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-graph\">\n            <div class=\"twpx-voting-screen-graph-item twpx-voting-screen-graph-item--voted\">\n                <div class=\"twpx-voting-screen-graph-item__rect\" :style=\"'height: '+votedPercentage+'%;'\">\n                    <div class=\"twpx-voting-screen-graph-item__num\">{{ votedNum }}</div>\n                    <div class=\"twpx-voting-screen-graph-item__proc\">{{ votedPercentage }}%</div>\n                </div>\n                <div class=\"twpx-voting-screen-graph-item__text\">\u041F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n            </div>\n            <div class=\"twpx-voting-screen-graph-item twpx-voting-screen-graph-item--not\"\n                :class=\"{'twpx-voting-screen-graph-item--zero': Number(notVotedNum)===0}\"\n            >\n                <div class=\"twpx-voting-screen-graph-item__rect\" :style=\"'height: '+notVotedPercentage+'%;'\">\n                    <div class=\"twpx-voting-screen-graph-item__num\">{{ notVotedNum }}</div>\n                    <div class=\"twpx-voting-screen-graph-item__proc\">{{ notVotedPercentage }}%</div>\n                </div>\n                <div class=\"twpx-voting-screen-graph-item__text\">\u041D\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n            </div>\n        </div>\n    "
  };

  var ListComponent = {
    props: ['list'],
    template: "\n        <div class=\"twpx-voting-screen-block twpx-voting-screen-list\"\n            :class=\"{\n                'twpx-voting-screen-list--lt10': list.length < 10,\n                'twpx-voting-screen-list--success': list.length === 0\n            }\"\n        >\n            <div class=\"twpx-voting-screen-list__items-wrapper\">\n                <div class=\"twpx-voting-screen-list__items\" v-if=\"list.length > 0\">\n                    <div class=\"twpx-voting-screen-list__item\" v-for=\"item in list\" :key=\"item\">{{ item }}</div>\n                </div>\n                <div class=\"twpx-voting-screen-list__item-success\" v-else>\u0412\u0441\u0435 \u043F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438!</div>\n            </div>\n            <div class=\"twpx-voting-screen-list__text\" v-if=\"list.length > 0\">\u0415\u0449\u0435 \u043D\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438</div>\n        </div>\n    "
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var V3 = {
    components: {
      StatusTimer: StatusTimer,
      GraphComponent: GraphComponent,
      ListComponent: ListComponent
    },
    template: "\n    <div class=\"twpx-voting-screen\">\n\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n        <StatusTimer :command=\"command\" :params=\"params\" />\n      </div>\n      \n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">{{ params.title }}</div>\n        <div class=\"twpx-voting-screen__voting-description\">{{ params.description }}</div>\n      </div>\n\n      <div class=\"twpx-voting-screen__body\">\n        <GraphComponent\n          :votedNum=\"votedNum\"\n          :votedPercentage=\"votedPercentage\"\n          :notVotedNum=\"notVotedNum\"\n          :notVotedPercentage=\"notVotedPercentage\"\n        />\n        <ListComponent :list=\"listNoneVoters\" />\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra'])), {}, {
      votedNum: function votedNum() {
        return this.params.numberOfVotes;
      },
      votedPercentage: function votedPercentage() {
        return Math.round(this.params.numberOfVotes * 100 / this.params.totalVotes);
      },
      notVotedNum: function notVotedNum() {
        return this.params.totalVotes - this.params.numberOfVotes;
      },
      notVotedPercentage: function notVotedPercentage() {
        return Math.round((this.params.totalVotes - this.params.numberOfVotes) * 100 / this.params.totalVotes);
      },
      listNoneVoters: function listNoneVoters() {
        return this.params.listNoneVoters ? this.params.listNoneVoters.sort().slice(0, 10) : [];
      }
    })
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var V4 = {
    components: {
      StatusTimer: StatusTimer,
      GraphComponent: GraphComponent,
      ListComponent: ListComponent
    },
    template: "\n    <div class=\"twpx-voting-screen\">\n\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n        <StatusTimer :command=\"command\" :params=\"params\" />\n      </div>\n      \n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">{{ params.title }}</div>\n        <div class=\"twpx-voting-screen__voting-description\">{{ params.description }}</div>\n      </div>\n\n      <div class=\"twpx-voting-screen__body\">\n        <GraphComponent\n          :votedNum=\"votedNum\"\n          :votedPercentage=\"votedPercentage\"\n          :notVotedNum=\"notVotedNum\"\n          :notVotedPercentage=\"notVotedPercentage\"\n        />\n        <ListComponent :list=\"listNoneVoters\" />\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra'])), {}, {
      votedNum: function votedNum() {
        return this.params.numberOfVotes;
      },
      votedPercentage: function votedPercentage() {
        return Math.round(this.params.numberOfVotes * 100 / this.params.totalVotes);
      },
      notVotedNum: function notVotedNum() {
        return this.params.totalVotes - this.params.numberOfVotes;
      },
      notVotedPercentage: function notVotedPercentage() {
        return Math.round((this.params.totalVotes - this.params.numberOfVotes) * 100 / this.params.totalVotes);
      },
      listNoneVoters: function listNoneVoters() {
        return this.params.listNoneVoters ? this.params.listNoneVoters.sort().slice(0, 10) : [];
      }
    })
  };

  var AnswerComponent = {
    props: ['answer'],
    template: "\n      <div class=\"twpx-voting-answer\" @showeffect=\"showEffect()\">\n        <div class=\"twpx-voting-answer__title\">{{ answer.answer }}</div>\n        <div class=\"twpx-voting-answer__graph twpx-graph\">\n          <div class=\"twpx-graph__wrapper\">\n            <div class=\"twpx-graph__img\"></div>\n            <div class=\"twpx-graph__num\">{{Number(answer.votesNumber).toLocaleString()}}</div>\n          </div>\n        </div>\n      </div>\n    ",
    methods: {
      showEffect: function showEffect() {
        var _this = this;
        var wrapper = this.$el.querySelector('.twpx-graph__img');
        wrapper.style.width = 0;
        setTimeout(function () {
          wrapper.style.width = _this.answer.percentage;
        }, 0);
      }
    }
  };

  var ResultComponent = {
    props: ['result'],
    components: {
      AnswerComponent: AnswerComponent
    },
    template: "\n        <div class=\"twpx-voting-result\">\n            <div class=\"twpx-voting-result-question\" v-for=\"question in result\" :key=\"question.question\">\n                <h3 v-if=\"question.question\">{{ question.question }}</h3>\n                <div class=\"twpx-voting-result-answers\">\n                    <AnswerComponent v-for=\"answer in question.answers\" :answer=\"answer\" :key=\"answer.answer\" />\n                </div>\n            </div>\n        </div>\n    ",
    methods: {
      countPercentage: function countPercentage() {
        this.result.forEach(function (q) {
          var biggest = q.answers.reduce(function (b, a) {
            return b > Number(a.votesNumber) ? b : Number(a.votesNumber);
          }, 0);
          q.answers.forEach(function (a) {
            a.percentage = "".concat(Number(a.votesNumber) / biggest * 100, "%");
          });
        });
      }
    },
    mounted: function mounted() {
      var _this = this;
      this.countPercentage();
      setTimeout(function () {
        _this.$el.querySelectorAll('.twpx-voting-answer').forEach(function (answer) {
          answer.dispatchEvent(new Event('showeffect'));
        });
      }, 0);
    }
  };

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var V5 = {
    components: {
      StatusTimer: StatusTimer,
      ResultComponent: ResultComponent
    },
    template: "\n    <div class=\"twpx-voting-screen\">\n\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n        <StatusTimer :command=\"command\" />\n      </div>\n      \n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">{{ params.title }}</div>\n        <div class=\"twpx-voting-screen__voting-description\">{{ params.description }}</div>\n      </div>\n\n      <div class=\"twpx-voting-screen-block\">\n        <ResultComponent :result=\"params.result\" />\n        <div class=\"twpx-voting-screen__message\">{{ params.finalMessage }}</div>\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$4({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra']))
  };

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var V6 = {
    components: {
      StatusTimer: StatusTimer,
      ResultComponent: ResultComponent
    },
    template: "\n    <div class=\"twpx-voting-screen\">\n\n      <div class=\"twpx-voting-screen-block twpx-voting-screen__header\">\n        <img src=\"/local/templates/aas/images/logo-aas-small.svg\" alt=\"\" />\n        <StatusTimer :command=\"command\" />\n      </div>\n      \n      <div class=\"twpx-voting-screen-block twpx-voting-screen__description\">\n        <div class=\"twpx-voting-screen__voting-name\">{{ params.title }}</div>\n        <div class=\"twpx-voting-screen__voting-description\">{{ params.description }}</div>\n      </div>\n\n      <div class=\"twpx-voting-screen-block\">\n        <ResultComponent :answers=\"params.answers\" />\n        <div class=\"twpx-voting-screen__message\">{{ params.finalMessage }}</div>\n      </div>\n\n    </div>\n\t",
    computed: _objectSpread$5({}, ui_vue3_pinia.mapState(dataStore, ['command', 'params', 'extra']))
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _router = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var VotingScreen = /*#__PURE__*/function () {
    function VotingScreen(rootNode, options) {
      babelHelpers.classCallCheck(this, VotingScreen);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _router, {
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
      babelHelpers.classPrivateFieldSet(this, _router, ui_vue3_router.createRouter({
        history: ui_vue3_router.createMemoryHistory(),
        routes: [{
          path: '/',
          component: V1,
          alias: '/voting_v1'
        }, {
          path: '/voting_v2',
          component: V2
        }, {
          path: '/voting_v3',
          component: V3
        }, {
          path: '/voting_v4',
          component: V4
        }, {
          path: '/voting_v5',
          component: V5
        }, {
          path: '/voting_v6',
          component: V6
        }]
      }));
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(VotingScreen, [{
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
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _router));
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
    return VotingScreen;
  }();

  exports.VotingScreen = VotingScreen;

}((this.BX = this.BX || {}),BX,BX,BX));
//# sourceMappingURL=application.bundle.js.map
