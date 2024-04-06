import { createRouter, createWebHistory } from 'vue-router'
import Kitchen from '../views/Kitchen.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
//! Uncomment the following line to use the account store
// import useAccountStore from '@/stores/account'

export default function routerInit() {
  // const { isLoggedIn } = useAccountStore()

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
        // beforeEnter(to, from, next) {
        //   if (isLoggedIn) next({ name: 'kitchen' })
        //   else next()
        // }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        // beforeEnter(to, from, next) {
        //   if (isLoggedIn) next({ name: 'kitchen' })
        //   else next()
        // }
      },
      {
        path: '/kitchen',
        name: 'kitchen',
        component: Kitchen,
        // beforeEnter(to, from, next) {
        //   if (!isLoggedIn) next({ name: 'login' })
        //   else next()
        // }
      }
    ]
  })

  return router
}
