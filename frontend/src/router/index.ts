import { createRouter, createWebHistory } from 'vue-router'
import Kitchen from '../views/Kitchen.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import useAccountStore from '@/stores/account'

export default function routerInit() {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/kitchen',
        name: 'kitchen',
        component: Kitchen,
      },
      {
        path: '/:catchAll(.*)',
        name: 'not_found',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  })

  router.beforeEach(async (to) => {
    const publicPages = ['/login', '/register', '/'];
    const authRequired = !publicPages.includes(to.path);
    const { isLoggedIn } = useAccountStore()

    if (authRequired && !isLoggedIn) return '/';
  });

  return router
}
