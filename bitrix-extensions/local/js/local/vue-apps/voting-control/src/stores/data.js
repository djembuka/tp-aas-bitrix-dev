import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
    
    lang: {
			heading: 'Управление голосованием',
      infoBlocks: [
        'Голосует',
        'Проголосовали',
        'Не проголосовали',
      ],
      statusForm: {
        heading: 'Изменить статус голосования',
        label: 'Статус',
        button: 'Сохранить',
        timerHeading: 'Таймер голосования',
        timerText: 'Установите время, которое будет выводиться на публичном экране. Время не влияет на старт или окончание голосования. Если вы хотите перезапустить таймер, выберите статус Голосование идет, установите новое время и сохраните статус.'
      },
      votingList: {
        heading: 'Списки голосующих',
        success: 'Проголосовавшие',
        warning: 'Не проголосовавшие',
      },
		},

    uuid: '',
    adminData: {},

		actions: {
			'votingAdminData': ['twinpx:voting.control', 'votingAdminData'],
			'setStatus': ['twinpx:voting.control', 'setStatus'],
		},

    loading: false,
    error: '',

    labels: {
      'voting_v1': 'label-gray',
      'voting_v2': 'label-blue',
      'voting_v3': 'label-orange',
      'voting_v4': 'label-gray',
      'voting_v5': 'label-green',
      'voting_v6': 'label-gray',
    },
    statusLabel: ''
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

      const options = {
        mode: 'class',
        data: payload,
      }

      if (this.signedParameters) {
        options.signedParameters = this.signedParameters;
      }

      return BX.ajax.runComponentAction(this.actions[method][0], this.actions[method][1], options);
    }
  }
});
