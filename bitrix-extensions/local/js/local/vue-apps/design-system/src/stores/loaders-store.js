import { defineStore } from 'ui.vue3.pinia';

export const loadersStore = defineStore('loaders-store', {
  state: () => ({
    loaders: [
      {
        component: 'LoaderCircle'
      },{
        component: 'LoaderBubbles'
      },{
        component: 'LoaderSquares'
      }
    ],
  }),
  actions: {},
});
