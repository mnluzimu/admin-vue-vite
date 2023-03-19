import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TDesign from 'tdesign-vue-next';
import './style.css'
import App from './App.vue'
import './styles'

const pinia = createPinia()

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(pinia).use(TDesign).mount('#app')
