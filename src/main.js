import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
