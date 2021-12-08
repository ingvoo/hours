import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Time from '../views/Time.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Time',
    component: Time,
  },
  {
    path: '/entry-create',
    name: 'EntryCreate',
    component: () => import('../views/EntryCreate.vue'),
  },
  {
    path: '/entry-edit/:id',
    name: 'EntryEdit',
    props: true,
    component: () => import('../views/EntryEdit.vue'),
  },

  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../views/Clients.vue'),
  },

  {
    path: '/client-create',
    name: 'ClientCreate',
    component: () => import('../views/ClientCreate.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
