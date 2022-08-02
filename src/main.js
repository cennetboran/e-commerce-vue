// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import vuetify from './plugins/vuetify';
import BackToTop from 'vue-backtotop';

//  Vue.config.productionTip = false
Vue.use(VueRouter, BackToTop);

const router = new VueRouter({
  routes: routes,
  BackToTop,
});

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount('#app');
