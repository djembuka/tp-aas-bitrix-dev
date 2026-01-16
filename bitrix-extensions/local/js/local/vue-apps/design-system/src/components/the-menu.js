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
      const t = tab.replace('/', '');
      
      if (t) {
        url.searchParams.set('tab', t);
      } else {
        url.searchParams.delete('tab');
      }
      
      window.history.replaceState({}, '', url.toString());
    }
  }
};
