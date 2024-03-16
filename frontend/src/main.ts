import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles, {
  init: async (container) => {
    await loadFull(container);
  }
})

app.mount('#app')

