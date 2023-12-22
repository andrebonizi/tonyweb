import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app');
