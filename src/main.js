import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//5:引入axios.js文件
import './axios'
//6.引入vuex
// import Vuex from "vuex"
import 'animate.css'

import {WOW} from 'wowjs';

new WOW({live: false}).init();
import '../public/css/detail.css'
Vue.prototype.imgurl='http://localhost:3000/'


//9: 将store保存vue实例中
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')


