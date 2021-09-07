import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/less/index.less'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus, { zIndex: 3000 })
app.use(store).use(router).mount('#app')
