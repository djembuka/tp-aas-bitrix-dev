import { defineStore } from 'ui.vue3.pinia';

export const docsStore = defineStore('docs-store', {
  state: () => ({
    docs: [
      {
        id: 123,
        href: '/pages/Протокол заседания дисицплинарной комиссии 234.pdf',
        name: "Протокол заседания дисицплинарной комиссии",
        size: 654000,
        date: '15 января 2020',
        author: 'Азарянц Ашот Александрович',
        icon: '/template/images/pdf.svg',
        remove: true
      }
    ],
  }),
  actions: {},
});
