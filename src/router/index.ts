import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Time from '../views/Time.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Time,
  },
  {
    path: '/time/:id?',
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
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
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
  {
    path: '/client-edit/:id',
    name: 'ClientEdit',
    props: true,
    component: () => import('../views/ClientEdit.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
