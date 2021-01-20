import Vue from 'vue';
import Router from 'vue-router';

import Demo from './views/Demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Demo,
      meta: { title: '首页', isKeepAlive: false }
    }
  ]
});
