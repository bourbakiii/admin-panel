import {createApp} from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router/router.js'
import './assets/tailwind/index.css'
createApp(App).use(router).mount('#app')