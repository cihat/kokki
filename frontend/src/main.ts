import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import axios from 'axios'
import Antd from 'ant-design-vue';

import App from './app.vue'
import router from './router'

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string
axios.defaults.withCredentials = true

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(Particles, {
  init: async (container) => {
    await loadSlim(container);
  }
})

app.mount('#app')
