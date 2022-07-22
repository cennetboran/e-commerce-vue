// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from "./router/index"
import vuetify from './plugins/vuetify'


//  Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
 routes: routes,
});

new Vue({
 render: h => h(App),
 vuetify,
 router
}).$mount('#app')
