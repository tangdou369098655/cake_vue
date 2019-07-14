import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
//5:引入axios.js文件
import './axios'
//6.引入vuex
import Vuex from "vuex"
import '../public/css/detail.css'

// 7.注册vuex组件
Vue.use(Vuex)
// 8.创建store实例
var store=new Vuex.Store({
  //vuex中全局共享的数据
  state:{cartCount:0},
  //修改vuex中全局共享的数据
  mutations:{
    // 购物车数量加1
    increment(state){
      state.cartCount++;
    },
    clear(state){
      state.cartCount=0;
    },
    updateCount(state,c){
      state.cartCount+=c;
    }
    // 购物车数量增加指定值
  },
  //获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})
//9: 将store保存vue实例中
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')


