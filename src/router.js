import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Info from './views/Info.vue'
import Demo from './views/Demo.vue'
import Index from './views/Index.vue'
import Add from './views/Add.vue'
import Button from './views/Button'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
