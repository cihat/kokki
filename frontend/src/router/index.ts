import { createRouter, createWebHistory } from 'vue-router'
import Kitchen from '../views/Kitchen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Kitchen
    }
  ]
})

export default router
