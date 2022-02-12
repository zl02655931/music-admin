import { createApp } from 'vue'
import App from './App.vue'
import api from './api'

const app = createApp(App)

app.config.globalProperties.$api = api

app.mount('#app')
