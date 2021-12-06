import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/time',
    name: 'Time',
    component: () => import('../views/Time.vue'),
  },
  {
    path: '/entry-create',
    name: 'EntryCreate',
    component: () => import('../views/EntryCreate.vue'),
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
