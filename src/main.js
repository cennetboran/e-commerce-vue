// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

 import Vue from 'vue'
 import App from './App.vue'
 import router from "./router/index"


 Vue.config.productionTip = false
 
new Vue({
 render: h => h(App),
   router,
 }).$mount('#app')

