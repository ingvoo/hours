import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'tailwindcss/tailwind.css'
import './assets/styles/main.postcss'

createApp(App).use(store).use(router).mount('#app')
