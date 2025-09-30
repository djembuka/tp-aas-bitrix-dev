import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
    
    lang: {
			messageSuccess: 'Спасибо за ваше мнение!<br>Протоколы с вашими результатами доступны<br>в вашем личном кабинете'
		},

    uuid: '',

		actions: {
			'voting': ['twinpx:voting.form', 'voting'],
			'editVoting': ['twinpx:voting.form', 'editVoting'],
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
