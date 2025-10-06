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
			'votingAdminData': ['twinpx:voting.form', 'votingAdminData'],
			'setStatus': ['twinpx:voting.form', 'setStatus'],
		},

    loading: false,
    error: '',
  }),
  actions: {
    changeProp(prop, value) {
      this[prop] = value;
    },
    runBitrixMethod(method, data, formData) {
      if (!this.actions[method] || !Array.isArray(this.actions[method])) {
        return Promise.reject({errors: [{message: `No such method ${method}`}]});
      }

      if (method === 'votingAdminData') {
        return {
          status: 'success',
          data:{
          "ID": "054115d0-4060-47dc-9ef6-23f4f1b543ff",
          "totalVotes": 100,
          "numberOfVoters": 15,
          "numberOfNonVoters": 85,
          "statuses": [
            {
             "status": "Подготовка",
             "id": "1",
            },
            {
             "status": "Голосование идёт",
             "id": "2",
            },
            {
             "status": "Голосование приостановлено",
             "id": "3",
            },
            {
             "status": "Голосование закончено",
             "id": "4",
            },
            {
             "status": "Голосование в архиве",
             "id": "5",
            }
          ],
          "selectedStatus": "2",
          "listVoters": [{"name": "Иван Иванович Петров", "ornz": "234234234234"}, {"name": "Петр Петрович Сидоров", "ornz": null}],
          "listNoneVoters": [{"name": "Сергей Сергеевич Иванов", "ornz": "3423423423423"}, {"name": "Дмитрий Смирнов", "ornz": null}]
         }}
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
