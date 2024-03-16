import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles, {
  init: async (container) => {
    await loadSlim(container);
  }
})

app.mount('#app')

