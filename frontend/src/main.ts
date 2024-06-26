import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import '@/stores'
import auth from './plugins/auth'
import Antd from 'ant-design-vue';
import App from './app.vue'
import routerInit from './router'
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import KitchenLayout from '@/layouts/KitchenLayout.vue';

const app = createApp(App)

app.component('default-layout', DefaultLayout)
app.component('kitchen-layout', KitchenLayout)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(auth)
app.use(routerInit())
app.use(Antd)
app.use(Particles, {
  init: async (container) => {
    await loadSlim(container);
  }
})

app.mount('#app')
