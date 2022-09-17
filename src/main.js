/**
 * @ Author: lijun
 * @ Create Time: 2022-09-17 09:55:30
 * @ Modified by: 
 * @ Modified time: 2022-09-17 12:56:17
 * @ Description: main
 */

import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import router from './router/index.js';

const app = createApp(App)
app.use(Vant)
app.use(router)
app.mount('#app')