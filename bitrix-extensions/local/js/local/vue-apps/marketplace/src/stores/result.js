import { defineStore } from 'ui.vue3.pinia';

export const resultStore = defineStore('result', {
  state: () => ({
    formIdArray: [],
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