import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
    lang: {
			'changeButton': BX.message('TWPX_VOTING_DETAIL_CHANGE_BUTTON'),
      deleteModal: {
        group: {
					heading: BX.message('TWPX_VOTING_DETAIL_DELETE_GROUP_HEADING'),
					text: BX.message('TWPX_VOTING_DETAIL_DELETE_GROUP_TEXT'),
					no: BX.message('TWPX_VOTING_DETAIL_DELETE_GROUP_NO'),
					yes: BX.message('TWPX_VOTING_DETAIL_DELETE_GROUP_YES')
				},
        question: {
					heading: BX.message('TWPX_VOTING_DETAIL_DELETE_QUESTION_HEADING'),
					text: BX.message('TWPX_VOTING_DETAIL_DELETE_QUESTION_TEXT'),
					no: BX.message('TWPX_VOTING_DETAIL_DELETE_QUESTION_NO'),
					yes: BX.message('TWPX_VOTING_DETAIL_DELETE_QUESTION_YES')
				},
        answer: {
					heading: BX.message('TWPX_VOTING_DETAIL_DELETE_ANSWER_HEADING'),
					text: BX.message('TWPX_VOTING_DETAIL_DELETE_ANSWER_TEXT'),
					no: BX.message('TWPX_VOTING_DETAIL_DELETE_ANSWER_NO'),
					yes: BX.message('TWPX_VOTING_DETAIL_DELETE_ANSWER_YES')
				}
      },
			'group': {
				block: {
					'heading': BX.message('TWPX_VOTING_DETAIL_GROUP_BLOCK_HEADING'),
					'text': BX.message('TWPX_VOTING_DETAIL_GROUP_BLOCK_TEXT'),
					'button': BX.message('TWPX_VOTING_DETAIL_GROUP_BLOCK_BUTTON')
				}
			},
			'groupItem': {
        heading: BX.message('TWPX_VOTING_DETAIL_GROUP_ITEM_HEADING'),
        text: BX.message('TWPX_VOTING_DETAIL_GROUP_ITEM_TEXT'),
				button: BX.message('TWPX_VOTING_DETAIL_GROUP_ITEM_BUTTON')
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
