import Vue from 'vue';
import Router from 'vue-router';
import Add from '@/components/Add';
import Apps from '@/components/Apps/index';
import Index from '@/components/Index';
import Advanced from '@/components/Advanced/index';
import AppsConfiguration from '@/components/AppsConfiguration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/app',
      component: AppsConfiguration,
      children: [
        {
          path: '/',
          name: 'apps',
          component: Apps
        },
        {
          path: '/:name',
          name: 'Advanced',
          component: Advanced
        }
      ]
    }
  ]
});
