import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import fastClick from 'fastclick'
import vueLazyload from 'vue-lazyload'

import toast from 'components/common/toast/index'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();
Vue.use(toast);

fastClick.attach(document.body);
Vue.use(vueLazyload, {
  loading: require('./assets/img/common/placeholder.jpg')
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
