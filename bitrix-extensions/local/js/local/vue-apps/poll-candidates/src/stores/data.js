import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    customData: {},
    signedParameters: '',
    lang: {},
    actions: [],
    groups: [],
    candidates: []
  }),
  actions: {
    printGroup(group) {
      group.printed = true;
    },
    changeProp(prop, value) {
      this[prop] = value;
    },
    runBitrixMethod(method, data, formData) {

      if (method === 'getGroups') {
        return Promise.resolve({
          status: 'success',
          data: [
            {
              id: 1,
              title: 'Кандидаты в назависимые члены',
            },
            {
              id: 2,
              title: 'Кандидаты от аудиторских организаций на финансовом рынке',
            }
          ]
        });
      }

      if (method === 'getCandidates') {
        return Promise.resolve({
          status: 'success',
          data: [
            {
              id: 'candidateId1',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Петров Петр Петрович',
              url: "/person/19891/",
              description: 'Маркетинговая компания с 10-летним опытом, предоставляющая услуги по SEO, контент-маркетингу и SMM для малого и среднего бизнеса. Мы работаем по всей России и за ее пределами, наша команда состоит из профессионалов с опытом в международных проектах.',
              docs: [
                {
                  id: 'doc1',
                  name: "Резюме Петрова Петра Петровича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                  size: 512000,
                  date: "22 февраля 2021",
                  author: "Васильев Виктор Степанович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                },
                {
                  id: 'doc2',
                  name: "Резюме Петрова Петра Петровича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                  size: 512000,
                  date: "22 февраля 2021",
                  author: "Васильев Виктор Степанович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                }
              ]
            },
            {
              id: 'candidateId2',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Сидоров Алексей Сергеевич',
              url: "/person/19891/",
              description: 'IT-компания с 5-летним опытом, специализирующаяся на разработке мобильных приложений и веб-сервисов. Наши клиенты включают стартапы и крупные корпорации, мы предлагаем индивидуальные решения под любой проект.',
              docs: [
                {
                  id: 'doc3',
                  name: "Резюме Сидорова Алексея Сергеевича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                  size: 1200000,
                  date: "10 марта 2022",
                  author: "Беляев Артем Викторович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                },
                {
                  id: 'doc4',
                  name: "Резюме Сидорова Алексея Сергеевича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                  size: 512000,
                  date: "10 марта 2022",
                  author: "Беляев Артем Викторович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                }
              ]
            },
            {
              id: 'candidateId3',
              group: 1,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Николаев Николай Николаевич',
              url: "/person/19891/",
              description: 'Консалтинговая компания с 20-летним опытом в области управления и финансового консультирования. Мы помогаем бизнесам повышать эффективность и адаптироваться к изменениям на рынке.',
              docs: [
                {
                  id: 'doc5',
                  name: "Резюме Николаева Николая Николаевича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                  size: 700000,
                  date: "5 апреля 2023",
                  author: "Кузнецов Дмитрий Сергеевич",
                  icon: "/template/images/icons/pdf-23x32.svg",
                },
                {
                  id: 'doc6',
                  name: "Резюме Николаева Николая Николаевича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.docx",
                  size: 700000,
                  date: "5 апреля 2023",
                  author: "Кузнецов Дмитрий Сергеевич",
                  icon: "/template/images/icons/pdf-23x32.svg",
                }
              ]
            },
            {
              id: 'candidateId4',
              group: 2,
              img: '/local/components/twinpx/disciplinar.comments/images/nopic.svg',
              name: 'Семенов Семен Семенович',
              url: "/person/19891/",
              description: 'Строительная компания с 30-летним опытом, активно работающая в сфере жилого и коммерческого строительства. Мы гарантируем высокое качество и соблюдение сроков выполнения работ.',
              docs: [
                {
                  id: 'doc7',
                  name: "Резюме Семенова Семена Семеновича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                  size: 1512000,
                  date: "15 мая 2023",
                  author: "Орлов Сергей Владимирович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                },
                {
                  id: 'doc8',
                  name: "Резюме Семенова Семена Семеновича",
                  href: "/pages/Протокол заседания дисицплинарной комиссии 234.pdf",
                  size: 1512000,
                  date: "15 мая 2023",
                  author: "Орлов Сергей Владимирович",
                  icon: "/template/images/icons/pdf-23x32.svg",
                }
              ]
            }
          ]
        });
      }
      

      return Promise.reject({
        status: 'error',
        errors: [{message: 'Error'}]
      });

      const action = this.actions[method];
      if (!action || !Array.isArray(action) || action.length < 2) {
        return Promise.reject({ code: 'UNKNOWN_METHOD', message: `Unknown action mapping for method: ${method}` });
      }

      // Готовим payload для поля data
      let payload;
      if (formData instanceof FormData) {
        payload = formData;
        // Добавляем customData
        if (this.customData && typeof this.customData === 'object') {
          Object.entries(this.customData).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              payload.append(key, value);
            }
          });
        }
      } else {
        payload = {
          ...this.customData,
          ...(data || {})
        };
      }

      const requestPromise = BX.ajax.runComponentAction(action[0], action[1], {
        mode: 'class',
        data: payload,
        signedParameters: this.signedParameters,
      });

      // Таймаут: 20 секунд
      const TIMEOUT_MS = 20000;
      let timeoutId;
      const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          reject({ code: 'TIMEOUT', message: 'Превышено время ожидания ответа (20с).' });
        }, TIMEOUT_MS);
      });

      // Возвращаем промис, совместимый с .then(success, error)
      return Promise.race([requestPromise, timeoutPromise])
        .finally(() => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        });
    }
  }
});
