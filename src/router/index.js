import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/doctors',
      name: 'doctors',
      component: () => import('../views/DoctorsView.vue'),
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/AddressView.vue'),
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('../views/AppointmentView.vue'),
    },
    {
      path: '/accii',
      name: 'accii',
      component: () => import('../views/AcciiView.vue'),
    }
  ],
})

export default router
