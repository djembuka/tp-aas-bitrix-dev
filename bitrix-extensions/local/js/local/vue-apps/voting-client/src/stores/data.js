import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    lang: {
      registration: {
        heading: 'Регистрация на съезд',
        text: 'Добро пожаловать на страницу  регистрации на съезд. Кнопка регистрации будет доступна в день съезда  24 октября 2025 года.',
        subtitle: 'Ваши данные',
        button: 'Зарегистрироваться'
      },
      list: {
        heading: 'Список голосований',
        text: 'Уважаемые делегаты, голосования проходят строго по порядку и автоматически выводятся в приложение. Следите за их ходом на экране. Как только голосование станет доступным, оно автоматически обновится в вашем приложении.',
      },
      error: {
        registration: 'Вы не зарегистрированы как делегат съезда. Если считаете это ошибкой, обратитесь в Дирекцию СРО ААС по телефону +7 (495) 734-22-22.',
        registrationButton: 'Регистрация закончена.'
      }
    },
    actions: {
      'getState': ['twinpx:voting.app', 'getState'],
      'congressRegistration': ['twinpx:voting.app', 'congressRegistration'],
      'votingStatuses': ['twinpx:voting.control', 'votingStatuses'],
      'groupsQuestions': ['twinpx:voting.form', 'groupsQuestions'],
      'submitVotingResult': ['twinpx:voting.app', 'submitVotingResult']
    },

    loading: false,
    loadingRegistration: false,
    loadingVoting: false,

    error: '',
    errorRegistration: '',
    errorVoting: '',
    
    params: {},
    statuses: [],
    groupInfo: {},

    stateWatcher: false,

    labels: {
      'voting_v1': 'label-gray',
      'voting_v2': 'label-blue',
      'voting_v3': 'label-orange',
      'voting_v4': 'label-gray',
      'voting_v5': 'label-green',
      'voting_v6': 'label-gray',
    }
  }),
  actions: {
    async getStatuses() {
      try {
        const statuses = await this.runBitrixMethod('votingStatuses');
        this.changeProp('statuses', statuses.data);
      } catch(error) {
        this.changeProp('errorVoting', error?.errors ? error?.errors[0].message : error);
      }
    },
    addCheckedNum() {
      this.params.voting.questionsGroups.forEach(g => {
        g.questions.forEach(q => {
          q.checkedNum = String(q.type) === '1' ? 0 : undefined;
        });
      });
    },
    changeProp(prop, value) {
      this[prop] = value;
    },
    runBitrixMethod(method, data, formData) {
      if (!this.actions[method] || !Array.isArray(this.actions[method])) {
        return Promise.reject({errors: [{message: `No such method ${method}`}]});
      }

      let payload;
      
      // Если есть formData, добавляем к нему customData и передаем как data
      if (formData instanceof FormData) {
        // Добавляем customData к FormData
        Object.entries(this.customData).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          }
        });
        payload = formData;
      } else if (data) {
        // Если есть data, объединяем с customData в объект
        payload = {
          ...this.customData,
          ...data
        };
      } else {
        // Если нет ни data, ни formData, передаем только customData
        payload = this.customData;
      }

      return BX.ajax.runComponentAction(this.actions[method][0], this.actions[method][1], {
        mode: 'class',
        data: payload,
        signedParameters: this.signedParameters,
      })
    },

    changeChecked({answer, checked}) {
        answer.checked = checked;
    },
    changeCheckedNum({question, checkedNum}) {
      question.checkedNum = checkedNum;
    },
    setActiveQuestion({question}) {
        this.removeActiveQuestion();
        question.isActive = true;
    },
    removeActiveQuestion() {
        this.params.voting.questionsGroups.forEach((group) => {
            group.questions.forEach((question) => {
                question.isActive = false;
            });
        });
    },
  }
});
