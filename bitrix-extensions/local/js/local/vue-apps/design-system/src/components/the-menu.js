export const TheMenu = {
  data() {
    return {
      items: [
        {
          path: '/',
          name: 'Form controls'
        },
        {
          path: '/select-dependency',
          name: 'Select dependency'
        },
        {
          path: '/multi/text',
          name: 'Form controls multi'
        },
        {
          path: '/buttons',
          name: 'Buttons'
        },
        {
          path: '/filter',
          name: 'Filter'
        },
        {
          path: '/modals',
          name: 'Modals'
        },
        {
          path: '/docs',
          name: 'Docs'
        },
        {
          path: '/loaders',
          name: 'Loaders'
        },
        {
          path: '/messages',
          name: 'Messages'
        },
        {
          path: '/copy-block',
          name: 'Copy block'
        },
      ]
    }
  },
  template: `
    <div class="twpx-desing-system-menu">

      <router-link v-for="item in items"
        :key="item.path"
        :to="item.path"
        @click="click(item.path)"
      >
        {{ item.name }}
      </router-link>

    </div>
  `,
  methods: {
    click(tab) {
      const url = new URL(window.location.href);
      if (tab && tab !== '') {
        url.searchParams.set('tab', tab);
      } else {
        url.searchParams.delete('tab');
      }
      
      // Обновляем URL
      window.history.replaceState({}, '', url.toString());
    }
  }
};
