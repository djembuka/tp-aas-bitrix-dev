import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
		actions: {
			votings: ['twinpx:voting.form', 'votings'],
			deleteVoting: ['twinpx:voting.form', 'deleteVoting'],
      votingStatuses: ['twinpx:voting.control', 'votingStatuses'],
		},
		lang: {
			wizard: {
				heading: 'Мастер создания голосования',
				text: 'Создайте новое голосование',
				button: 'Создать голосование'
			},
			deleteModal: {
				heading: 'Подтвердите удаление голосования',
				text: 'Подтвердите удаление голосования. Обратите внимание: после удаления восстановить его будет невозможно.',
				yes: 'Удалить',
				no: 'Отменить'
			}
		},
    votingCreateURL: '',
    votingDetailURL: '',
    error: '',
    loading: false,

    pollItems: [],
    deleteModalStateWatcher: false,
    activePollId: null,

    editModalStateWatcher: false,
    editModalLoading: false,
    editModalError: '',
    
    activeVoting: {},

    labels: {
      'voting_v1': 'label-gray',
      'voting_v2': 'label-blue',
      'voting_v3': 'label-orange',
      'voting_v4': 'label-gray',
      'voting_v5': 'label-green',
      'voting_v6': 'label-gray',
    },
    statuses: []
  }),
  actions: {
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
