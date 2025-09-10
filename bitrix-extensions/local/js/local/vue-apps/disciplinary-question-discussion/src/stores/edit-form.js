import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const editFormStore = defineStore('edit-form', {
  state: () => ({
    editLoading: false,
    editError: '',
    editModalStateWatcher: false,
    editForm: {}
  }),
  actions: {
    changeEditModalStateWatcher() {
      this.editModalStateWatcher = !this.editModalStateWatcher;
    },
    changeEditError(error) {
      this.editError = error;
    },
    changeEditLoading(value) {
      this.editLoading = value;
    },
    runGetEditForm(commentId) {
      this.editError = '';
      this.editLoading = true;
      const d = dataStore();
      const data = {...d.data, commentId};

      /*let response;

      return new Promise((resolve, reject) => {
        response = {
          status: 'success',
          data: {
            controls: [
              {
                "id": "editHidden",
                "property": "hidden",
                "name": "ID",
                "value": "789",
              },
              {
                "id": "id1-1",
                "property": "textarea",
                "name": "COMMENT",
                "label": "Комментарий",
                "value": "Опишите, пожалуйста, ваш вопрос, проблему или пожелание максимально подробно. Укажите, где и на каком этапе возникла сложность, что вы уже пробовали сделать, и какие сообщения (если были) вы получили. Чем больше информации вы предоставите, тем быстрее и точнее мы сможем вам помочь. При необходимости можно прикрепить скриншоты или ссылки. Мы внимательно прочтём каждое сообщение и постараемся дать вам исчерпывающий ответ.",
                "required": true,
                "disabled": false
              }
            ]
          }
        }

        // response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'getEditForm error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.getEditForm[0], d.actions.getEditForm[1], {
        mode: 'class',
        data,
      });
    },
    runSendEditForm() {
      this.editError = '';
      this.editLoading = true;
      const d = dataStore();

      const formElem = document.querySelector(`#${dataStore().id}EditForm`);
      const formData = new FormData(formElem);
      
      Object.keys(d.data).forEach(key => {
        formData.append(key, d.data[key]);
      });

      /*let response;

      return new Promise((resolve, reject) => {
        response = {
          status: 'success',
          data: true
        }

        // response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'sendEditForm error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.sendEditForm[0], d.actions.sendEditForm[1], {
        mode: 'class',
        data: formData,
      });
    }
  },
});
