/* eslint-disable */
(function (exports,ui_vue3,ui_vue3_router) {
  'use strict';

  var Test = {
    data: function data() {
      return {
        name: 'Тестовая страница'
      };
    },
    template: /*html*/"\n    <div>\n      <h1>{{ name }}</h1>\n    </div>\n  "
  };

  var Counter = {
    name: 'Counter',
    data: function data() {
      return {
        count: 0
      };
    },
    methods: {
      reset: function reset() {
        this.count = 0;
      }
    },
    mounted: function mounted() {
      var _this = this;
      setInterval(function () {
        return _this.count++;
      }, 300);
    },
    template: /*html*/"\n    <div>\n      <button class=\"button-counter\" @click=\"reset\">reset count</button>\n\n      counter : {{ count }}\n    </div>\n  "
  };

  var About = {
    name: 'About',
    components: {
      Counter: Counter
    },
    template: /*html*/"\n    <div>\n        <h2>\u0421\u0447\u0435\u0442\u0447\u0438\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 About</h2>\n        <Counter/>\n    </div>\n  "
  };

  var App = {
    components: {
      About: About,
      Test: Test
    },
    template: /*html*/"<div>\n        <nav>\n            <ul>\n                <li><router-link to=\"/\">Test</router-link></li>\n                <li><router-link to=\"/about\">About</router-link></li>\n            </ul>\n        </nav>\n        <main>\n            <router-view />\n        </main>\n    </div>"
  };

  var router = ui_vue3_router.createRouter({
    routes: [{
      path: '/',
      component: Test
    }, {
      path: '/about',
      component: About
    }],
    history: ui_vue3_router.createWebHashHistory()
  });
  document.addEventListener('DOMContentLoaded', function () {
    ui_vue3.createApp(App).use(router).mount('#root');
  });

}((this.BX = this.BX || {}),BX,BX));
//# sourceMappingURL=application.bundle.js.map
