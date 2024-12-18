import { createApp } from 'ui.vue3';
import { createRouter, createWebHashHistory } from 'ui.vue3.router';

import Test from './pages/Test';
import About from './pages/About';
import App from './App';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: Test,
    },
    {
      path: '/about',
      component: About,
    },
  ],
  history: createWebHashHistory(),
});

document.addEventListener('DOMContentLoaded', () => {
  createApp(App).use(router).mount('#root');
});
