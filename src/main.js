import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Bus from './bus'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)

// import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$bus = Bus

// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
