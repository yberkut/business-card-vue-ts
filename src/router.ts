import Vue    from 'vue';
import Router from 'vue-router';

import About from './pages/About.vue';
import Home  from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
