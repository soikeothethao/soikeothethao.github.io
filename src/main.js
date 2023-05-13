import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import './app.scss'
// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './app.scss'
import VueMobileDetection from "vue-mobile-detection";

const app = createApp(App)

app.config.warnHandler = (msg, instance, trace) =>
  ![
    'built-in or reserved HTML elements as component id: component',
    '"class" is a reserved attribute and cannot be used as component prop',
    'Cannot find element: #__nuxt'
  ].some((warning) => msg.includes(warning)) 
//   && console.warn('[Vue warn]: '.concat(msg).concat(trace))

app.use(router)
app.use(BootstrapVue)
app.use(store)
app.use(VueAxios, axios);
app.use(VueMobileDetection);
app.mount('#app')
