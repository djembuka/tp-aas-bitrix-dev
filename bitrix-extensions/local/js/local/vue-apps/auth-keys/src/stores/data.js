import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    sessid: '',
    signedParameters: '',
    lang: {},
    routeWatcher: '',
    title: '',
    info: '',
    infoMessage: '',
    infoButton: true,
    error: '',
    errorButton: false,
    tel: ''
  }),
  actions: {
    setTel(tel) {
      this.tel = tel
    },
    setTitle(title) {
      this.title = title;
    },
    setInfo(message) {
      this.info = message;
    },
    setInfoMessage(message) {
      this.infoMessage = message;
    },
    setInfoButton(infoButton) {
      this.infoButton = infoButton;
    },
    setError(message) {
      this.error = message;
    },
    setErrorButton(errorButton) {
      this.errorButton = errorButton;
    },
    parseQuery(queryString) {
      var query = {};
      var pairs = [];
      if (queryString) {
        pairs = (
          queryString[0] === '?' ? queryString.substr(1) : queryString
        ).split('&');
      }
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    },
    getQuery(queryObject) {
      var result = [];
      for (var k in queryObject) {
        result.push(k + '=' + queryObject[k]);
      }
      return '?' + result.join('&');
    },
  },
});
