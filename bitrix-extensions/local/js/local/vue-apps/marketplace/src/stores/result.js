import { defineStore } from 'ui.vue3.pinia';

export const resultStore = defineStore('result', {
  state: () => ({
    formIdArray: [
        'd4312f16-c2b4-45a4-b280-f85e62dd61a8',
        'd4312f16-c2b4-45a4-b280-f85e62dd61a8',
        'd4312f16-c2b4-45a4-b280-f85e62dd61a8',
        'd4312f16-c2b4-45a4-b280-f85e62dd61a8'
    ],
    formDataArray: [],
    startIndex: 0,
    maxCountPerRequest: 3,
    loadingMore: false
  }),
  getters: {
    groupApplicationArray(state) {
      return state.formDataArray
        .filter(d => d.checkbox.checked)
        .map(d => d.id);
    }
  },
  actions: {
    setFormIdArray(data) {
        this.formIdArray = data;
    },
    setFormDataArray(data) {
        this.formDataArray = this.formDataArray.concat(data);
    },
    setStartIndex(value) {
      this.startIndex = value;
    },
    setMaxCountPerRequest(value) {
      this.maxCountPerRequest = value;
    },
    changeLoadingMore(value) {
      this.loadingMore = value;
    }
  }});