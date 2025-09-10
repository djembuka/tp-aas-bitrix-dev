import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';

export const formStore = defineStore('form', {
  state: () => ({
    loading: false,
    error: '',
    deleteModalStateWatcher: false,
    comments: [],
    form: {},
    activeCommentId: ''
  }),
  actions: {
    changeDeleteModalStateWatcher() {
      this.deleteModalStateWatcher = !this.deleteModalStateWatcher;
    },
    changeError(error) {
      this.error = error;
    },
    changeLoading(value) {
      this.loading = value;
    },
    changeComments(comments) {
      this.comments = comments;
    },
    changeActiveCommentId(commentId) {
      this.activeCommentId = commentId;
    },
    runGetForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      /*let response;

      return new Promise((resolve, reject) => {
        response = {
          status: 'success',
          data: {
            controls: [
              {
                "id": "id1-1",
                "property": "textarea",
                "name": "COMMENT",
                "label": "Комментарий",
                "value": "",
                "required": true,
                "disabled": false
              }
            ],
          }
        }

        // response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'getForm error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.getForm[0], d.actions.getForm[1], {
        mode: 'class',
        data: d.data,
      });
    },
    runSendForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      const formElem = document.querySelector(`#${dataStore().id}Form`);
      const formData = new FormData(formElem);
      
      Object.keys(d.data).forEach(key => {
        formData.append(key, d.data[key]);
      });

      /*let response;

      return new Promise((resolve, reject) => {
        response = {
          status: 'success',
          data: {
            redirect: '/'
          }
        }

        // response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'sendForm error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          console.log('io')
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.sendForm[0], d.actions.sendForm[1], {
        mode: 'class',
        data: formData,
      });
    },
    runGetComments() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

      /*let response;

      return new Promise((resolve, reject) => {
        response = {
          status: 'success',
          data: {
            comments: [
              {
                id: 'comment1',
                text: 'Саморегулируемая организация аудиторов Ассоциация «Содружество» (сокращенное название - СРО ААС) создано по инициативе Международной общественной организации «Ассоциация бухгалтеров и аудиторов «Содружество» (АБиАС). АБиАС была образована в 1989 году и стала общеизвестным и признанным в России профессиональным объединением ученых и практиков бухгалтерского учета, аудита и экономического анализа.',
                user: {
                  img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
                  name: 'Иванов Иван Иванович',
                  url: "/person/19891/"
                },
                create: "2025-07-22T20:09:26+03:00",
              },
              {
                id: 'comment2',
                text: 'Саморегулируемая организация аудиторов Ассоциация «Содружество» (сокращенное название - СРО ААС) создано по инициативе Международной общественной организации «Ассоциация бухгалтеров и аудиторов «Содружество» (АБиАС). АБиАС была образована в 1989 году и стала общеизвестным и признанным в России профессиональным объединением ученых и практиков бухгалтерского учета, аудита и экономического анализа.',
                user: {
                  img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
                  name: 'Петров Пётр Петрович',
                  url: "/person/19891/"
                },
                create: "2025-07-22T20:09:26+03:00",
              },
              {
                id: 'comment3',
                text: 'Саморегулируемая организация аудиторов Ассоциация «Содружество» (сокращенное название - СРО ААС) создано по инициативе Международной общественной организации «Ассоциация бухгалтеров и аудиторов «Содружество» (АБиАС). АБиАС была образована в 1989 году и стала общеизвестным и признанным в России профессиональным объединением ученых и практиков бухгалтерского учета, аудита и экономического анализа.',
                user: {
                  img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
                  name: 'Савельев Савелий Савельевич',
                  url: "/person/19891/"
                },
                create: "2025-07-22T20:09:26+03:00",
              }
            ]
          }
        }

        // response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'getComments error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.getComments[0], d.actions.getComments[1], {
        mode: 'class',
        data: d.data,
      });
    },
    runDeleteComment(commentId) {
      this.error = '';
      this.loading = true;
      this.changeDeleteModalStateWatcher();
      const d = dataStore();

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
        //       message: 'deleteComment error'
        //     }
        //   ]
        // };

        setTimeout(() => {
          resolve(response);
          // reject(response);
        }, 1000);
      });*/

      return BX.ajax.runComponentAction(d.actions.deleteComment[0], d.actions.deleteComment[1], {
        mode: 'class',
        data: {...d.data, commentId},
      });
    }
  },
});
