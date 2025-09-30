import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
    lang: {
			'changeButton': 'Изменить',
      deleteModal: {
        group: {
					heading: 'Подтвердите удаление группы вопросов',
					text: 'Подтвердите удаление группы вопросов. Обратите внимание: после удаления восстановить её будет невозможно.',
					no: 'Отменить',
					yes: 'Удалить'
				},
        question: {
					heading: 'Подтвердите удаление вопроса',
					text: 'Подтвердите удаление вопроса. Обратите внимание: после удаления восстановить его будет невозможно.',
					no: 'Отменить',
					yes: 'Удалить'
				},
        answer: {
					heading: 'Подтвердите удаление ответа',
					text: 'Подтвердите удаление ответа. Обратите внимание: после удаления восстановить его будет невозможно.',
					no: 'Отменить',
					yes: 'Удалить'
				}
      },
			'group': {
				block: {
					'heading': 'Создать группу вопросов',
					'text': 'Создайте группу вопросов, чтобы объединить несколько вопросов под единым заголовком и описанием. Если ваши вопросы не разделены на группы, создайте одну общую группу и добавьте все вопросы в неё. Учтите: группа является обязательным элементом голосования.',
					'button': 'Добавить группу вопросов'
				}
			},
			'groupItem': {
        heading: 'Добавить вопрос',
        text: 'Используйте эту функцию, чтобы создать новый вопрос для голосования. Укажите формулировку вопроса, при необходимости добавьте варианты ответов и сохраните его в выбранной группе.',
				button: 'Добавить вопрос'
			}
		},

    uuid: '',
    groupUuid: '',
    questionUuid: '',

		actions: {
			'voting': ['twinpx:voting.form', 'voting'],
			'editVoting': ['twinpx:voting.form', 'editVoting'],

			'groupsQuestions': ['twinpx:voting.form', 'groupsQuestions'],
			'editGroupQuestions': ['twinpx:voting.form', 'editGroupQuestions'],
			'deleteGroupQuestions': ['twinpx:voting.form', 'deleteGroupQuestions'],

			'questions': ['twinpx:voting.form', 'questions'],
			'editQuestion': ['twinpx:voting.form', 'editQuestion'],
			'deleteQuestion': ['twinpx:voting.form', 'deleteQuestion'],

			'answers': ['twinpx:voting.form', 'answers'],
			'editAnswer': ['twinpx:voting.form', 'editAnswer'],
			'deleteAnswer': ['twinpx:voting.form', 'deleteAnswer'],
		},

    typeMode: 'group',// group, question, answer
    actionMode: 'add',// add, edit

    voting: [],
    groups: [],
    questions: {},
    answers: {},

    loading: false,
    error: '',

    editModalStateWatcher: false,
    editModalLoading: false,
    editModalError: '',

    deleteModalStateWatcher: false,
    itemToDelete: null
  }),
  actions: {
    pushItemsArray({type, parentUuid, itemsArray}) {
      this[type][parentUuid] = itemsArray;
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
    }

  }
});
