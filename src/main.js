import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/general.scss'

import '@fontsource-variable/space-grotesk';
import '@fortawesome/fontawesome-free/css/all.css';


createApp(App).use(router).mount('#app')
