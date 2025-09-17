import { defineStore } from 'ui.vue3.pinia';

export const resultStore = defineStore('result', {
  state: () => ({
    formIdArray: [],
    formDataArray: [],
    startIndex: 0,
    maxCountPerRequest: 3,
    loadingMore: false,
    applicationModalStateWatcher: false,

    resultApplicationGroup: {},
    resultApplicationControls: [],
    resultApplicationState: 'form',
    resultApplicationError: ''
  }),
  getters: {
    groupApplicationArray(state) {
      return state.formDataArray
        .filter(d => d.checkbox.checked)
        .map(d => d.id);
    }
  },
  actions: {
    changeResultApplicationGroup(groups, resultApplicationGroupId) {
      if (groups && groups.filter) {
        this.resultApplicationGroup = groups.filter(g => String(g.id) === String(resultApplicationGroupId))
      }
    },
    changeResultApplicationControls(controls, resultApplicationGroupId) {
      if (controls && controls.filter) {
        this.resultApplicationControls = 
            controls
                .filter(c => String(c.groupid) === String(resultApplicationGroupId))
                .map(c => {
                    if (c.required) {
                        c.label = `${c.label} *`;
                    }
                    return c;
                });
      }
    },
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
    },
    changeProp(prop, value) {
      this[prop] = value;
    }
  }});