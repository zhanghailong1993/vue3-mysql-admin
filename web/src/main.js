import { createApp } from 'vue'
import ElementPlus, { ElMessage } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosPlugin from './plugins/axios'

import './assets/less/index.less'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus, { zIndex: 3000 })
axiosPlugin(app)
app.config.globalProperties.$ElMessage = ElMessage
app.use(store).use(router).mount('#app')
