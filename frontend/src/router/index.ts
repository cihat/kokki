import { createRouter, createWebHistory } from 'vue-router'
import Kitchen from '../views/Kitchen.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
// import useAccountStore from '@/stores/account'

export default function routerInit() {
  // const accountStore = useAccountStore() as any;
  // const isLoggedIn = computed(() => accountStore.isLoggedIn);

  // const routeAuthGuard = (to, from, next) => {
  //   if (!isLoggedIn) next({ name: 'login' })
  //   else next()
  // }

  // const redirectIfLoggedIn = (to, from, next) => {
  //   if (isLoggedIn) next({ name: 'kitchen' })
  //   else next()
  // }

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
        // beforeEnter: redirectIfLoggedIn
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        // beforeEnter: redirectIfLoggedIn
      },
      {
        path: '/kitchen',
        name: 'kitchen',
        component: Kitchen,
        // beforeEnter: routeAuthGuard
      },
      {
        path: '/:catchAll(.*)',
        name: 'not_found',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  })

  return router
}
